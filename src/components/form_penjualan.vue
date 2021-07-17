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
              :value="form.id_penjualan"
              horizontal
              autocomplete="ID Penjualan"
            />
            <CInput
              description=""
              label="Harga Jual"
              type="text"
              :value="form.harga_jual"
              horizontal
              autocomplete="Harga Jual"
            />
            <CInput
              description=""
              label="Kuantitas"
              type="text"
              :value="form.kuantitas"
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
      <CCard>
        <CCardHeader>
          <b>Detail Penjualan</b>
        </CCardHeader>
        <CCardBody>
          <CForm>
            <CInput
              description=""
              label="Sub Total"
              type="number"
              :value="form.sub_total"
              horizontal
              autocomplete="Sub Total"
            />
            <CInput
              description=""
              label="Nomor Nota"
              type="text"
              :value="form.nomor_nota"
              horizontal
              autocomplete="Nomor Nota"
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
</template>

<script>
import API from "../services/api.service";

export default {
  name: "DetailPenjualan",
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