<template>
  <div>
    <CCol sm="14">
      <CCard>
        <CCardHeader>
          <b>Tambah Pemasok</b>
        </CCardHeader>
        <CCardBody>
          <CForm>
            <CInput
              description=""
              label="ID Pemasok"
              type="text"
              horizontal
              autocomplete="ID Pemasok"
            />
            <CInput
              description=""
              label="Nama Pemasok"
              type="text"
              horizontal
              autocomplete="Nama Pemasok"
            />
            <CInput
              description=""
              label="Email"
              type="email"
              horizontal
              autocomplete="Email"
            />
            <CInput
              description=""
              label="Alamat"
              type="text"
              horizontal
              autocomplete="Alamat"
            />
            <CInput
              description=""
              label="Kota"
              type="text"
              horizontal
              autocomplete="Kota"
            />
            <CInput
              description=""
              label="Nomor Telepon"
              type="text"
              horizontal
              autocomplete="Nomor"
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
</template>