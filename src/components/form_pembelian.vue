<template>
  <CRow>
    <CCol lg="6" md="6" sm="12" xl="6">
      <CCard>
        <CCardHeader>
          <b>Tambah Pembelian</b>
        </CCardHeader>
        <CCardBody>
          <CForm>
            <CInput
              :value="form.no_nota"
              autocomplete="Nomor Nota"
              description=""
              horizontal
              label="Nomor Nota"
              type="text"
            />
            <CInput
              :value="form.id_pembelian"
              autocomplete="ID Pembelian"
              description=""
              horizontal
              label="ID Pembelian"
              type="text"
            />
            <CInput
              :value="form.id_pemasok"
              autocomplete="ID Pemasok"
              description=""
              horizontal
              label="ID Pemasok"
              type="text"
            />
            <CInput
              :value="form.sub_total"
              autocomplete="Sub Total"
              description=""
              horizontal
              label="Sub Total"
              type="number"
            />
            <div class="form-group form-actions">
              <CButton color="primary" size="sm" type="button" @click="submit">
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
              v-model="form.id_barang"
              autocomplete="ID Barang"
              description=""
              horizontal
              label="Id Barang"
              type="text"
            />
            <CInput
              v-model="form.nama_barang"
              autocomplete="Nama Barang"
              description=""
              horizontal
              label="Nama Barang"
              type="text"
            />
            <div class="form-group form-actions">
              <CButton color="primary" size="sm" type="submit">
                Tambah
              </CButton>
            </div>
            <div>
              <CRow>
                <CCol lg="12">
                  <data-table :headers="header" :items="items" title="">
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
</template>
<script>
export default {
  props: ["body", "isEdit"],
  name: "RincianPembelian",
  data: () => {
    return {
      header: [],
      items: [],
      modal: false,
      form: {},
    };
  },
  watch: {
    body: function (newData) {
      this.form = newData;
    },
    data: function (newVal) {
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
    },
    submit(){
      this.$emit("submit",this.form)
    },
};
</script>