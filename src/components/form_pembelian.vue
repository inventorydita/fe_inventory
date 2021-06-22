<template>
    <div>
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
                label="Nomor Nota"
                horizontal
                autocomplete="Nomor Nota"
              />
              <CInput
                description=""
                label="ID Pembelian"
                horizontal
                autocomplete="ID Pembelian"
              />
              <CInput
                description=""
                label="ID Pemasok"
                horizontal
                autocomplete="ID Pemasok"
              />
              <CInput
                description=""
                label="ID Barang"
                horizontal
                autocomplete="ID Barang"
              />
              <CInput
                description=""
                label="Harga Modal"
                horizontal
                autocomplete="Harga Jual"
              />
              <CInput
                description=""
                label="Kuantitas"
                horizontal
                autocomplete="Kuantitas"
              />
              <CInput
                label="Tanggal"
                type="date"
                horizontal
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