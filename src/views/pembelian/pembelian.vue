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
        { key: "nomor_nota", label: "Nomor Nota" },
        { key: "nama_barang", label: "Nama Barang" },
        { key: "nama_pemasok", label: "Nama Pemasok" },
        { key: "kota", label: "Kota" },
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
      API.get("pembeliancontroller")
        .then(({ status, data }) => {
          if (status == 200 || status == 201) {
            if (data.status) {
              this.items = data.data;
            }
          }
        })
        .catch(() => {});
    },
    deletePembelian() {
      API.delete("pembeliancontroller", { id_pembelian: "" }).then(
        ({ status, data }) => {
          if (status == 200 || status == 201) {
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
