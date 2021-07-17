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
      </CCol>
      <CCol sm="12" md="6" lg="6" xl="6">
        <data-table :items="items" :headers="header" title="Detail Penjualan">
          <template #tambah>
            <CButton
                @click="onPickBarang"
                color="primary"
            >
              Pilih Barang
            </CButton> </template
          ><template #search
        ><CForm inline>
          <CInput class="ml-12 sm-6" placeholder="Search" size="sm" />

          <CButton color="outline-success" class="" type="submit"
          >Search</CButton
          >
        </CForm></template
        >
        </data-table>
      </CCol>
    </CRow>
    <dialog-pick-barang :show="modal" @action="action" @submit="barangSelected"/>
  </div>
</template>
<script>
export default {
  data:()=>{
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