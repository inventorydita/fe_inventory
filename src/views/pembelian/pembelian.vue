<template>
  <div>
    <CRow>
      <CCol lg="12">
        <data-table :items="items" :headers="header" title="Pembelian" @edit="editPembelian" @delete="deletePembelian">
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
            </CForm></template>
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
        { key: "actions", label: "Aksi" },
      ],
      hidden:false,
      items: [],
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
    editPembelian(data){
      this.$router.push({path: "/master/editpembelian/"+data.id_pembelian }) 
    },
    deletePembelian(dataPembelian) {
      API.delete("pembeliancontroller", { id_pembelian:dataPembelian.id_pembelian }).then(
        ({ status, data }) => {
          if (status == 200 || status == 201) {
            if (data.status) {
             this.$notify({ // ketika data berhasil dihapus maka muncul notif
              group: "notif",
              type: "success",
              title: "Informasi",
              text: "Data telah berhasil dihapus",
            });
            this.getDataPembelian() // untuk me reload data ke back end 
            }

            else { // ketika data gagal dihapus maka muncul notif
          this.$notify({
              group: "notif",
              type: "error",
              title: "Perhatian",
              text: "Data gagal untuk dihapus",
            });
          }

          }
        else { // ketika data gagal dihapus maka muncul notif
          this.$notify({
              group: "notif",
              type: "error",
              title: "Perhatian",
              text: "Data gagal untuk dihapus",
            });
          }

          //tambahin ini buat notif ketika error 500 dll dari back end
      }).catch(()=>{
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
