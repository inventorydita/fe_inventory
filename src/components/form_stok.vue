<template>
  <div>
    <div>
      <CCol sm="14">
        <CCard>
          <CCardHeader>
            <b>Tambah Stok Barang</b>
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
                label="Kuantitas"
                type="text"
                horizontal
                autocomplete="ID Pemasok"
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
export default {
  setup() {
    data: () => {
      return {};
    };
  },
};
</script>
