<template>
  <div>
    <CRow>
      <CCol lg="12">
        <data-table :items="items" :headers="header" title="Pembelian">
          <template #tambah>
            <CButton
              @click="$router.push({ path: '/master/addpembelian' })"
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
  name: "Pembelian",
  data: () => {
    return {
      header: [
        { key: "nomer", label: "No" },
        { key: "id_barang", label: "ID" },
        { key: "nama_barang", label: "Nama Barang" },
        { key: "harga_modal", label: "Harga Modal" },
        { key: "harga_jual", label: "Harga Jual" },
        { key: "Kuantitas", label: "Qty" },
        { key: "Aksi", label: "Aksi" },
      ],
      items: [{ nomer: "Hai" }],
    };
  },
  created() {
    this.getDataPembelian();
  },
  methods: {
    getDataPembelian() {
      API.get("").then((result) => {
        console.log(result);
      });
    },
    deletePembelian() {
      API.delete("", { id_pembelian: "" }).then((result) => {
        console.log(result);
      });
    },
  },
};
</script>
