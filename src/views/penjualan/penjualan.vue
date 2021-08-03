<template>
  <div>
    <CRow>
      <CCol lg="12">
        <data-table :items="items" :headers="header" title="Penjualan" @edit="editPenjualan" @delete="deletePenjualan">
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
        { key: "nomor_nota", label: "Nomor Nota" },
        { key: "tanggal", label: "Tanggal" },
        { key: "sub_total", label: "Sub Total" },
        { key: "actions", label: "Aksi" },
      ],
      hidden:false,
      items: [],
    };
  },
  created() {
    this.getDataPenjualan();
  },
  methods: {
    getDataPenjualan() {
      API.get("penjualancontroller").then(({status,data}) => {
        if(status === 200 || status === 201){
          if(data.status){
            this.items = data.data
          }
        
        
        }
      });
    },
    editPenjualan(data){
      this.$router.push({path:'halamannya'}) 
    },
    deletePenjualan(dataPenjualan) {
      API.delete("penjualancontroller", { id_penjualan:dataPenjualan.id_penjualan }).then(({status,data}) => {
        if(status === 200 || status === 201){
          if(data.status){
            this.$notify({ // ketika data berhasil dihapus maka muncul notif
              group: "notif",
              type: "success",
              title: "Informasi",
              text: "Data telah berhasil dihapus",
            });
            this.getDataPenjualan() // untuk me reload data ke back end 
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
