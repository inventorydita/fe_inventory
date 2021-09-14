<template>
  <div>
    <CRow>
      <CCol lg="4" md="6" sm="12" xl="4">
        <CCard>
          <CCardHeader>
            <b>Tambah Penjualan</b>
          </CCardHeader>
          <CCardBody>
            <CForm>
              <CInput
                autocomplete="Nomor Nota"
                description=""
                horizontal
                label="Nomor Nota"
                v-model="form.nomor_nota"
                type="text"
              />
              <CInput
                horizontal
                label="Tanggal"
                type="date"
                v-model="form.tanggal"
              />
              <CInput
                autocomplete="Sub Total"
                description=""
                disabled
                horizontal
                label="Sub Total"
                v-model="form.subtotal"
                type="text"
              />

              <div class="form-group form-actions">
                <CButton
                  color="primary"
                  size="sm"
                  type="button"
                  @click="submit"
                >
                  Submit
                </CButton>
              </div>
            </CForm>
          </CCardBody>
        </CCard>
        <CCard>
          <CCardHeader>
            <b>Detail Penjualan</b>
          </CCardHeader>
          <CCardBody>
            <CForm>
              <CButton
                color="primary"
                size="sm"
                type="button"
                @click="modal = true"
              >
                Pilih Barang
              </CButton>
              <CInput
                autocomplete="Nama barang"
                description=""
                horizontal
                disabled
                label="Barang"
                @click="onPickBarang"
                v-model="selected.nama_barang"
                type="text"
              />
              <CInput
                horizontal
                label="Quantity"
                type="number"
                v-model="quantity"
              />
              <div class="form-group form-actions">
                <CButton
                  color="primary"
                  size="sm"
                  type="button"
                  @click="onTambah"
                >
                  Tambahkan barang
                </CButton>
              </div>
            </CForm>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol lg="8" md="6" sm="12" xl="8">
        <CCard>
          <CCardHeader>
            <b>Detail Penjualan</b>
          </CCardHeader>
          <CCardBody>
            <CForm>
              <div class="form-group form-actions"></div>
              <div>
                <CRow>
                  <CCol lg="12">
                    <data-table :headers="header" :items="list" title="">
                      <template></template>
                      <template #search>
                        <CForm inline></CForm>
                      </template>
                    </data-table>
                  </CCol>
                </CRow>
              </div>
            </CForm>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
    <modal-barang
      @onselected="onSelected"
      @action="modal = false"
      :show="modal"
    />
  </div>
</template>
<script>
export default {
  props: ["body", "items", "isEdit"],
  name: "RincianPenjualan",
  data: () => {
    return {
      header: [
        { key: "nama_barang", label: "Nama Barang" },
        { key: "quantity", label: "Quantity" },
        { key: "nama_satuan", label: "Satuan" },
        { key: "harga_jual", label: "Harga Jual" },
        { key: "actions", label: "Aksi" },
      ],
      list: [],
      modal: false,
      form: {
        nomor_nota: 0,
        detail_penjualan: [],
      },
      selected: {},
      quantity: 0,
    };
  },
  watch: {
    body: function (newData, oldVal) {
      this.form = newData;
    },
    items: function (newVal, oldVal) {
      this.list = newVal;
      this.form.detail_penjualan = newVal;
    },
  },

  methods: {
    onPickBarang(val) {
      this.modal = true;
      console.log(this.modal);
    },
    action(val) {
      this.modal = val;
    },
    submit() {
      this.$emit("submit", this.form);
    },
    onTambah() {
      if (this.quantity > 0) {
        let data = {
          id_barang: this.selected.id_barang,
          nama_barang: this.selected.nama_barang,
          harga_jual: this.selected.harga_jual,
          nama_satuan: this.selected.nama_satuan,
          quantity: this.quantity,
        };
        this.form.subtotal = parseFloat(
          this.quantity * this.selected.harga_jual
        );
        this.form.detail_penjualan.push(data);
        this.list.push(data);

        //bersihkan semua inputan detail
        this.selected = {};
        this.quantity = 0;
      }
      console.log(this.list);
    },
    onSelected(barang) {
      this.modal = false;
      this.selected = barang;
    },
  },
};
</script>
