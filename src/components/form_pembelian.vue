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
                :value="form.no_nota"
                horizontal
                autocomplete="Nomor Nota"
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
                label="Sub Total"
                type="number"
                :value="form.sub_total"
                horizontal
                autocomplete="Sub Total"
              />
              <div class="form-group form-actions">
                <CButton type="submit" size="sm" color="primary">
                  Submit
                </CButton>
              </div>
            </CForm>
          </CCardBody>
        </CCard>
        <CCard>
          <CCardHeader>
            <b>Detail Pembelian</b>
          </CCardHeader>
          <CCardBody>
            <CForm>
              <CInput
                description=""
                label="Id Barang"
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
              <div class="form-group form-actions">
                <CButton type="submit" size="sm" color="primary">
                  Tambah
                </CButton>
              </div>
              <div>
                <CRow>
                  <CCol lg="12">
                    <data-table :items="items" :headers="header" title="">
                      <template></template
                      ><template #search><CForm inline> </CForm></template>
                    </data-table>
                  </CCol>
                </CRow>
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
  name: "DetailPembelian",
  data: () => {
    return {
      form: {},
      header: [
        { key: "nomer", label: "No" },
        { key: "id_barang", label: "ID" },
        { key: "nama_barang", label: "Nama Barang" },
      ],
      items: [{ nomer: "Hai" }],
    };
  },
};
</script>