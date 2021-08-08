<template>
  <div>
    <form_barang :body="body" :isEdit="false" @submit="onSimpan"></form_barang>
  </div>
</template>

<script>
import API from "../../services/api.service";

export default {

  data: () => {
    return {
      body: {}
    }
  },
  created() {
    //ambil data by id
    this.getDataDetailBarang()
  },
  methods: {
    //get data by id
    getDataDetailBarang() {
      API.get("masterbarangcontroller").then(({ status, data }) => {
        if (status == 200 || status == 201) {
          if (data.status) {
            this.items = data.data;
          }
        }
      });

    },
    onSimpan(data) {
      //proses simpan ke back end
      API.post("masterbarangcontroller", data).then(({status, data}) => {
        if (status === 200 || status === 201) {
          if (data.status) {
            //notifikasi ketika berhasil
            this.$notify({
              // ketika data berhasil dihapus maka muncul notif
              group: "notif",
              type: "success",
              title: "Informasi",
              text: "Data telah berhasil dihapus",
            });
            this.getDataDetailBarang();

          } else {
            //gagal
            this.$notify({
              group: "notif",
              type: "error",
              title: "Perhatian",
              text: "Data gagal untuk dihapus",
            });

          }
        } else {
          //gagal
          this.$notify({
            group: "notif",
            type: "error",
            title: "Perhatian",
            text: "Data gagal untuk dihapus",
            });

        }
      }).catch(() => {
        //error
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
