<template>
  <div>
    <CRow>
      <CCol lg="12">
        <data-table
          :items="items"
          :headers="header"
          title="Satuan Barang"
          @edit="editSatuanBarang"
          @delete="deleteSatuanBarang"
        >
          <template #tambah>
            <CButton
              @click="$router.push({ path: '/master/addsatuanbarang' })"
              color="primary"
            >
              Tambah Data
            </CButton> </template
          ><template #search
            ><CForm inline>
              <CInput class="ml-12 sm-6" placeholder="Search" size="sm" v-model="katakunci" />

              <CButton color="outline-success" class="" type="button" @click="cariDataSatuan"
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
      hidden: false,
      katakunci:'',
      items: [],
    };
  },
  created() {
    this.getDataSatuanBarang();
  },
  methods: {
    getDataSatuanBarang() {
      API.get("satuancontroller").then(({ status, data }) => {
        if (status == 200 || status == 201) {
          if (data.status) {
            this.items = data.data;
          }
        }
      });
    },
    cariDataSatuan(){
      API.get("satuancontroller/search?nama_satuan="+this.katakunci).then(({status,data})=>{
        if(status == 200 || status == 201){
          if(data.status){
            this.items = data.data
          }
        }
      })
      .catch(() => {});
    },
    editSatuanBarang(data) {
      this.$router.push({ path: "/master/editsatuanbarang/" + data.id_satuan });
    },
    deleteSatuanBarang(dataSatuanBarang) {
      API.delete(`satuancontroller/${dataSatuanBarang.id_satuan}`)
        .then(({ status, data }) => {
          if (status == 200 || status == 201) {
            if (data.status) {
              this.$notify({
                // ketika data berhasil dihapus maka muncul notif
                group: "notif",
                type: "success",
                title: "Informasi",
                text: "Data telah berhasil dihapus",
              });
              this.getDataSatuanBarang();
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
