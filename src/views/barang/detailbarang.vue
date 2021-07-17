<template>
  <div>
    <CRow>
      <CCol lg="12">
        <data-table :items="items" :headers="header" title="Detail Barang">
          <template #tambah>
            <CButton
              @click="$router.push({ path: '/master/adddetailbarang' })"
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
  name: "Detail barang",
  data: () => {
    return {
      header: [
        { key: "nomer", label: "No" },
        { key: "id_barang", label: "ID" },
        { key: "nama_barang", label: "Nama Barang" },
        { key: "nama_pemasok", label: "Pemasok" },
        { key: "nama_satuan", label: "Satuan" },
        { key: "kuantitas", label: "Qty" },
        { key: "harga_modal", label: "Harga Modal" },
        { key: "harga_jual", label: "Harga Jual" },
        { key: "aksi", label: "Aksi" },
      ],
      items: [{ nomer: "1" }],
    };
  },
  created() {
    this.getDataDetailBarang();
  },
  methods: {
    getDataDetailBarang() {
      API.get("").then((result) => {
        console.log(result);
      });
    },
    deleteDetailBarang() {
      API.delete("", { id_barang: "" }).then((result) => {
        console.log(result);
      });
    },
  },
};
</script>
