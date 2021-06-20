<template>
    <div>
    <div>
    <CCol sm="14">
        <CCard>
          <CCardHeader>
            <b>Tambah Satuan</b>
          </CCardHeader>
          <CCardBody>
            <CForm>
              <CInput
                description=""
                label="ID Satuan"
                horizontal
                autocomplete="ID"
              />
              <CInput
                description=""
                label="Nama Satuan"
                horizontal
                autocomplete="Nama Satuan"
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