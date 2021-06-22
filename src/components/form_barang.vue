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
                horizontal
                autocomplete="ID Barang"
              />
              <CInput
                description=""
                label="Nama Barang"
                type="text"
                horizontal
                autocomplete="Nama Barang"
              />
              <CInput
                description=""
                label="ID Satuan"
                type="text"
                horizontal
                autocomplete="ID Satuan"
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
                label="Harga Modal"
                type="text"
                horizontal
                autocomplete="Harga Modal"
              />
              <CInput
                description=""
                label="Harga Jual"
                type="text"
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