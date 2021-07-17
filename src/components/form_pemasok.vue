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
              label="Nama Pemasok"
              type="text"
              :value="form.nama_pemasok"
              horizontal
              autocomplete="Nama Pemasok"
            />
            <CInput
              description=""
              label="Alamat"
              type="text"
              :value="form.alamat"
              horizontal
              autocomplete="Alamat"
            />
            <CInput
              description=""
              label="Kota"
              type="text"
              :value="form.kota"
              horizontal
              autocomplete="Kota"
            />
            <CInput
              description=""
              label="Nomor Telepon"
              type="text"
              :value="form.no_telp"
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

<script>
export default {
  data: () => {
    return {
      form: {},
    };
  },
};
</script>