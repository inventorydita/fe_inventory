<template>
  <div>
    <CRow>
      <CCol lg="12">
        <data-table :items="items" :headers="header" title="Stok Barang">
          <template #tambah>
            <CButton
              @click="$router.push({ path: '/master/addstok' })"
              color="primary"
            >
              Tambah Data
            </CButton> </template
          ><template #search
            ><CForm inline>
              <CInput class="ml-12 sm-6" placeholder="Search" size="sm" />

              <CButton color="outline-success" class="" type="submit"
                >Search</CButton
              >
            </CForm></template
          >
        </data-table>
        <CPagination align="center" :pages="10" />
      </CCol>
    </CRow>
  </div>
</template>

<script>
import API from "../../services/api.service";

export default {
  name: "StokBarang",
  data: () => {
    return {
      header: [
        { key: "nama_barang", label: "Nama Barang" },
        { key: "nama_satuan", label: "Satuan" },
        { key: "stok", label: "Kuantitas" },
        { key: "aksi", label: "Aksi" },
      ],
      items: [{ nomer: "Hai" }],
    };
  },
  created() {
    this.getDataStok();
  },
  methods: {
    getDataStok() {
      API.get("stokbarangcontroller").then(({ status, data }) => {
        if (status === 200 || status === 201) {
          if (data.status) {
            this.items = data.data;
          }
        }
      });
    },
    deleteStok() {
      API.delete("stokbarangcontroller", { id_Stok: "" }).then(
        ({ status, data }) => {
          if (status === 200 || status === 201) {
            if (data.status) {
              this.items = data.data;
            }
          }
        }
      );
    },
  },
};
</script>
