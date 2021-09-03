<template>
  <div>
    <CRow>
      <CCol lg="6" md="8" sm="16" xl="8">
        <CCard>
          <CCardHeader>
            <b>Tambah Pembelian</b>
          </CCardHeader>
          <CCardBody>
            <CForm>
              <CInput
                v-model="form.nomor_nota"
                autocomplete="Nomor Nota"
                description=""
                horizontal
                label="Nomor Nota"
                type="text"
              />
              <CInput
                v-model="form.id_pemasok"
                autocomplete="ID Pemasok"
                description=""
                horizontal
                label="ID Pemasok"
                type="text"
              />
              <CInput
                horizontal
                label="Tanggal"
                type="date"
                v-model="form.tanggal"
              />
              <CInput
                v-model="form.subtotal"
                autocomplete="Sub Total"
                description=""
                horizontal
                label="Sub Total"
                type="number"
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
            <b>Detail Pembelian</b>
          </CCardHeader>
          <CCardBody>
            <CForm>
              <CInput
                v-model="selected.nama_barang"
                autocomplete="Nama Barang"
                description=""
                horizontal
                label="Nama Barang"
                type="text"
              />
              <CInput
                v-model="quantity"
                horizontal
                label="Kuantitas"
                type="number"
              />
              <div class="form-group form-actions">
                <CButton
                  color="primary"
                  size="sm"
                  type="button"
                  @click="onTambah"
                >
                  Tambahkan Barang
                </CButton>
              </div>
              <div>
                <CRow>
                  <CCol lg="10" md="8" sm="14" xl="10">
                    <CCard>
                      <CCardHeader>
                        <b>Detail Pembelian</b>
                      </CCardHeader>
                      <CCardBody>
                        <CForm>
                          <div class="form-group form-actions"></div>
                          <div>
                            <CRow>
                              <CCol lg="12">
                                <data-table
                                  :headers="header"
                                  :items="list"
                                  title=""
                                >
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
              </div>
            </CForm>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
    <modal-barang @onselected="onSelected" :show="modal" />
  </div>
</template>
<script>
export default {
  props: ["body", "items", "isEdit"],
  name: "RincianPembelian",
  data: () => {
    return {
      header: [
        { key: "nama_barang", label: "Nama Barang" },
        { key: "quantity", label: "Quantity" },
        { key: "nama_satuan", label: "Satuan" },
        { key: "harga_beli", label: "Harga Beli" },
        { key: "harga_jual", label: "Harga Jual" },
        { key: "actions", label: "Aksi" },
      ],
      list: [],
      modal: false,
      form: {
        nomor_nota: 0,
        detail_pembelian: [],
      },
      selected: {},
      quantity: 0,
    };
  },
  watch: {
    body: function (newData) {
      this.form = newData;
      console.log("form", newData);
    },
    items: function (newVal) {
      this.items = newVal;
    },
  },
  methods: {
    onPickBarang() {
      this.modal = true;
    },
    action(val) {
      this.modal = val;
    },
    barangSelected() {},
    submit() {
      this.$emit("submit", this.form);
    },
    onTambah() {
      if (this.quantity > 0) {
        let data = {
          id_barang: this.selected.id_barang,
          nama_barang: this.selected.nama_barang,
          nama_satuan: this.selected.nama_satuan,
          quantity: this.quantity,
          harga_beli: this.selected.harga_beli,
          harga_jual: this.selected.harga_jual,
        };
        this.form.subtotal = parseFloat(
          this.quantity * this.selected.harga_beli,
          this.quantity * this.selected.harga_jual
        );
        this.form.detail_pembelian.push(data);
        this.list.push(data);
      }
    },
    onSelected(barang) {
      this.selected = barang;
    },
  },
};
</script>