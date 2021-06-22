<template>
  <div>
    <div>
      <CCol sm="14">
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
    </div>
  </div>
</template>