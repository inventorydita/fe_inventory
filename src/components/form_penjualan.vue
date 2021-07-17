<template>
  <div>
    <CRow>
      <CCol sm="12" md="6" lg="6" xl="6">
        <CCard>
          <CCardHeader>
            <b>Tambah Penjualan</b>
          </CCardHeader>
          <CCardBody>
            <CForm>
              <CInput
                  description=""
                  label="ID Penjualan"
                  type="text"
                  horizontal
                  autocomplete="ID Penjualan"
              />
              <CInput
                  description=""
                  label="Harga Jual"
                  type="text"
                  horizontal
                  autocomplete="Harga Jual"
              />
              <CInput
                  description=""
                  label="Kuantitas"
                  type="text"
                  horizontal
                  autocomplete="Kuantitas"
              />
              <CInput label="Tanggal" type="date" horizontal />

            <div class="form-group form-actions">
              <CButton type="submit" size="sm" color="primary">
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
              description=""
              label="Sub Total"
              type="number"
              :value="form.sub_total"
              horizontal
              autocomplete="Sub Total"
            />
            <CInput
              description=""
              label="Nomor Nota"
              type="text"
              :value="form.nomor_nota"
              horizontal
              autocomplete="Nomor Nota"
            />
            <div class="form-group form-actions">
              <CButton type="submit" size="sm" color="primary">
                Tambah
              </CButton>
            </div>
            <div>
              <CRow>
                <CCol lg="12">
                  <data-table :items="items" :headers="header" title="">
                    <template></template
                    ><template #search><CForm inline> </CForm></template>
                  </data-table>
                </CCol>
              </CRow>
            </div>
          </CForm>
        </CCardBody>
      </CCard>
    </CCol>
  </div>
</template>
<script>
export default {

  name: "DetailPenjualan",
  data: () => {

    return {
      header: [],
      items:[],
      modal:false
    }
  },
  watch:{
    data:function (newVal) {
      this.items = newVal
    }
  },
  methods:{
    onPickBarang(){
     this.modal = true
    },
    action(val){
      this.modal = val
    },
    barangSelected(){}
  }
}
</script>