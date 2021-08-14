<template>
  <div>
    <CRow>
      <CCol lg="12">
        <data-table
          :items="items"
          :headers="header"
          title="Stok Barang"
          @edit="editStok"
          @delete="deleteStok"
        >
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
        { key: "actions", label: "Aksi" },
      ],
      hidden: false,
      items: [],
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
    editStok(data) {
      this.$router.push({ path: "/master/editstok/"+data.id_stok_barang });
    },
    deleteStok(dataStok) {
      API.delete("stokbarangcontroller", {
        id_stok_barang: dataStok.id_stok_barang,
      })
        .then(({ status, data }) => {
          if (status === 200 || status === 201) {
            if (data.status) {
              this.$notify({
                // ketika data berhasil dihapus maka muncul notif
                group: "notif",
                type: "success",
                title: "Informasi",
                text: "Data telah berhasil dihapus",
              });
              this.getDataStok(); // untuk me reload data ke back end
            } else {
              // ketika data gagal dihapus maka muncul notif
              this.$notify({
                group: "notif",
                type: "error",
                title: "Perhatian",
                text: "Data gagal untuk dihapus",
              });
            }
          } else {
            // ketika data gagal dihapus maka muncul notif
            this.$notify({
              group: "notif",
              type: "error",
              title: "Perhatian",
              text: "Data gagal untuk dihapus",
            });
          }

          //tambahin ini buat notif ketika error 500 dll dari back end
        })
        .catch(() => {
          this.$notify({
            group: "notif",
            type: "error",
            title: "Perhatian",
            text: "Data gagal untuk dihapus",
          });
        });
    },
  },
};
</script>
