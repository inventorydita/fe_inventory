<template>
  <div>
    <CRow>
      <CCol lg="12">
        <data-table :items="items" :headers="header" title="Satuan Barang" @edit="editSatuanBarang" @delete="deleteSatuanBarang">
          <template #tambah>
            <CButton
              @click="$router.push({ path: '/master/addsatuanbarang' })"
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
  name: "SatuanBarang",
  data: () => {
    return {
      header: [
        { key: "nama_satuan", label: "Nama Satuan" },
        { key: "actions", label: "Aksi" },
      ],
      hidden:false,
      items: [],
    };
  },
  created() {
    this.getDataSatuanBarang();
  },
  methods: {
    getDataSatuanBarang() {
      API.get("satuancontroller").then(({status,data}) => {
        if(status == 200 || status == 201){
          if(data.status){
            this.items = data.data
          }
        
        
        }
      });
    },
    editSatuanBarang(data){
      this.$router.push({path:'halamannya'}) 
    },
    deleteSatuanBarang(dataSatuanBarang) {
      API.delete("satuancontroller", { id_satuan:dataSatuanBarang.id_satuan }).then(({status,data}) => {
        if(status == 200 || status == 201){
          if(data.status){
            this.$notify({ // ketika data berhasil dihapus maka muncul notif
              group: "notif",
              type: "success",
              title: "Informasi",
              text: "Data telah berhasil dihapus",
            });
            this.getDataSatuanBarang() // untuk me reload data ke back end 
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
      });
    },
  },
};
</script>
