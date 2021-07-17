<template>
  <div>
    <div>
      <CCol sm="14">
        <CCard>
          <CCardHeader>
            <b>Tambah Barang</b>
          </CCardHeader>
          <CCardBody>
            <CForm>
              <CInput
                description=""
                label="ID Barang"
                type="text"
                :value="form.id_barang"
                horizontal
                autocomplete="ID Barang"
              />
              <CInput
                description=""
                label="Nama Barang"
                type="text"
                :value="form.nama_barang"
                horizontal
                autocomplete="Nama Barang"
              />
              <CInput
                description=""
                label="ID Satuan"
                type="text"
                :value="form.satuan_barang"
                horizontal
                autocomplete="ID Satuan"
              />
              <CInput
                description=""
                label="ID Pemasok"
                type="text"
                :value="form.id_pemasok"
                horizontal
                autocomplete="ID Pemasok"
              />
              <CInput
                description=""
                label="Harga Modal"
                type="text"
                :value="form.harga_modal"
                horizontal
                autocomplete="Harga Modal"
              />
              <CInput
                description=""
                label="Harga Jual"
                type="text"
                :value="form.harga_jual"
                horizontal
                autocomplete="Harga Jual"
              />
              <div class="form-group form-actions">
                <CButton type="submit" size="sm" color="primary">
                  Submit
                </CButton>
              </div>
            </CForm>
          </CCardBody>
        </CCard>
      </CCol>
    </div>
  </div>
</template>

<script>


export default({
  setup() {
    data: () => {
      return {
        form:{},



      }
      


    }
  },
})
</script>
