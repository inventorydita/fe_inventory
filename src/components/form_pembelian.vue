<template>

  <CRow>
    <CCol sm="12" md="6" lg="6" xl="6">
      <CCard>
        <CCardHeader>
          <b>Tambah Pembelian</b>
        </CCardHeader>
        <CCardBody>
          <CForm>
            <CInput
                description=""
                label="Nomor Nota"
                type="text"
                horizontal
                autocomplete="Nomor Nota"
            />
            <CInput
                description=""
                label="ID Pembelian"
                type="text"
                horizontal
                autocomplete="ID Pembelian"
            />
            <CInput
                description=""
                label="ID Pemasok"
                type="text"
                horizontal
                autocomplete="ID Pemasok"
            />
            <CInput
                description=""
                label="ID Barang"
                type="text"
                horizontal
                autocomplete="ID Barang"
            />
            <CInput
                description=""
                label="Harga Modal"
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
      <data-table :items="items" :headers="header" title="Detail Pembelian">
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
    <dialog-pick-barang :show="modal" @action="action" @submit="barangSelected"/>
  </CRow>
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