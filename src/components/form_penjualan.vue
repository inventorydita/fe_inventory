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
            <b>Tambah Penjualan</b>
          </CCardHeader>
          <CCardBody>
            <CForm>
              <div class="form-group form-actions">
                <CButton
                  color="primary"
                  size="sm"
                  type="button"
                  @click="modal = true"
                >
                  Submit
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
    <modal-barang @onselected="onSelected" :show="modal" />
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
        { key: "harga_jual", label: "harga" },
        { key: "actions", label: "Aksi" },
      ],
      list: [],
      modal: false,
      form: {
        nomor_nota: 0,
        detail_penjualan: [],
      },
    };
  },
  watch: {
    body: function(newData) {
      this.form = newData;
      console.log("form", newData);
    },

    items: function(newVal) {
      this.list = newVal;
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
    onSelected(barang) {
      this.form.push({
        id_barang: barang.id_barang,
        harga_jual: barang.harga_jual,
        quantity: 1,
      });
      this.list.push(barang);
    },
  },
};
</script>
