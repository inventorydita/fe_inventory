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
                horizontal
                autocomplete="ID"
              />
              <CInput
                description=""
                label="Nama Pemasok"
                horizontal
                autocomplete="Nama Pemasok"
              />
              <CInput
                description=""
                label="Email"
                horizontal
                autocomplete="Email"
              />
              <CInput
                description=""
                label="Alamat"
                horizontal
                autocomplete="Alamat"
              />
              <CInput
                description=""
                label="Kota"
                horizontal
                autocomplete="Kota"
              />
              <CInput
                description=""
                label="Nomor Telepon"
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