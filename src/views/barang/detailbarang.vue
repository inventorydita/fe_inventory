<template>
  <div>
    <CRow>
      <CCol lg="12">
        <data-table
          :items="items"
          :headers="header"
          title="Detail Barang"
          @edit="editDetailBarang"
          @delete="deleteDetailBarang"
        >
          <template #tambah>
            <CButton
              @click="$router.push({ path: '/master/adddetailbarang' })"
              color="primary"
            >
              Tambah Data
            </CButton> </template
          ><template #search
            ><CForm inline>
              <CInput class="ml-12 sm-6" placeholder="Search" size="sm" v-model="katakunci"/>

              <CButton color="outline-success" class="" type="button" @click="cariDataBarang"
                >Search</CButton
              >
            </CForm>
            </template
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
  name: "Detailbarang",
  data: () => {
    return {
      header: [
        { key: "nama_barang", label: "Nama Barang" },
        { key: "nama_satuan", label: "Satuan" },
        { key: "harga_modal", label: "Harga Modal" },
        { key: "harga_jual", label: "Harga Jual" },
        { key: "actions", label: "Aksi" },
      ],
      hidden: false,
      katakunci:'',
      items: [],
    };
  },
  created() {
    this.getDataDetailBarang();
  },
  methods: {
    getDataDetailBarang() {
      API.get("masterbarangcontroller").then(({status,data}) => {
        if (status == 200 || status == 201) {
          if (data.status) {
            this.items = data.data;
          }
        }
      });
    },

  cariDataBarang(){
    API.get("masterbarangcontroller/search?nama_barang="+this.katakunci).then(({status,data}) => {
      if(status == 200 || status == 201){
        if(data.status){
          this.items = data.data
        }
      }
    })
    .catch(() => {});
  },
    editDetailBarang(data) {
      this.$router.push({ path: "/master/editdetailbarang/"+data.id_barang })
    },
    deleteDetailBarang(dataDetailbarang) {
      API.delete(`masterbarangcontroller/${dataDetailbarang.id_barang}`)
        .then(({status,data}) => {
          if (status == 200 || status == 201) {
            if (data.status) {
              this.$notify({
                // ketika data berhasil dihapus maka muncul notif
                group: "notif",
                type: "success",
                title: "Informasi",
                text: "Data telah berhasil dihapus",
              });
              this.getDataDetailBarang();
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
