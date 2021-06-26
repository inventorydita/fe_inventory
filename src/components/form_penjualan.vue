<template>
  <div>
    <CCol sm="14">
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
  </div>
</template>