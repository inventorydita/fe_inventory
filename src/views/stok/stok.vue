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
  name: "Stok Barang",
  data: () => {
    return {
      header: [
        { key: "nomer", label: "No" },
        { key: "nama_barang", label: "Nama Barang" },
        { key: "nama_satuan", label: "Satuan" },
        { key: "kuantitas", label: "Qty" },
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
      API.get("").then((result) => {
        console.log(result);
      });
    },
    deleteStok() {
      API.delete("", { id_Stok: "" }).then((result) => {
        console.log(result);
      });
    },
  },
};
</script>
