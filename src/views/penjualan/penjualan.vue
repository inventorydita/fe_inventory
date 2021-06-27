<template>
  <div>
    <CRow>
      <CCol lg="12">
        <data-table :items="items" :headers="header" title="Penjualan">
          <template #tambah>
            <CButton
              @click="$router.push({ path: '/master/addpenjualan' })"
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
  name: "Penjualan",
  data: () => {
    return {
      header: [
        { key: "nomer", label: "No" },
        { key: "nama_barang", label: "Nama Barang" },
        { key: "nama_satuan", label: "Satuan" },
        { key: "harga_jual", label: "Harga Jual" },
        { key: "kuantitas", label: "Qty" },
        { key: "sub_total", label: "Sub Total" },
        { key: "aksi", label: "Aksi" },
      ],
      items: [{ nomer: "Hai" }],
    };
  },
  created() {
    this.getDataPenjualan();
  },
  methods: {
    getDataPenjualan() {
      API.get("").then((result) => {
        console.log(result);
      });
    },
    deletePenjualan() {
      API.delete("", { id_penjualan: "" }).then((result) => {
        console.log(result);
      });
    },
  },
};
</script>
