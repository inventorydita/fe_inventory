<template>
  <div>
    <CRow>
      <CCol lg="6" md="6" sm="12" xl="6">
        <CCard>
          <CCardHeader>
            <b>Tambah Penjualan</b>
          </CCardHeader>
          <CCardBody>
            <CForm>
              <CInput
                autocomplete="ID Penjualan"
                description=""
                horizontal
                label="ID Penjualan"
                type="text"
              />
              <CInput
                autocomplete="Harga Jual"
                description=""
                horizontal
                label="Harga Jual"
                type="text"
              />
              <CInput
                autocomplete="Kuantitas"
                description=""
                horizontal
                label="Kuantitas"
                type="text"
              />
              <CInput horizontal label="Tanggal" type="date" />

              <div class="form-group form-actions">
                <CButton color="primary" size="sm" type="submit">
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
              <CInput
                :value="form.sub_total"
                autocomplete="Sub Total"
                description=""
                horizontal
                label="Sub Total"
                type="number"
              />
              <CInput
                :value="form.nomor_nota"
                autocomplete="Nomor Nota"
                description=""
                horizontal
                label="Nomor Nota"
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
  </div>
</template>
<script>
export default {
  name: "RincianPenjualan",
  data: () => {
    return {
      header: [],
      items: [],
      modal: false,
      form:{}
    };
  },
  watch: {
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
};
</script>
