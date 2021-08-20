<template>
  <div>
    <form_stok :isEdit="false" :body="body" @submit="OnSimpan"></form_stok>
  </div>
</template>

<script>
import API from "../../services/api.service";
export default {
  data: () => {
    return { body: {} };
  },
  created() {
    if (this.$route.params.id) this.getDataStok(this.$route.params.id);
  },

  methods: {
    getDataStok(id) {
      //Mengambil barang dari back-end (sesuai dengan yang diklik ditombol edit)
      API.get(`stokbarangcontroller?id_stok_barang=${id}`)
        .then((status, data) => {
          if (status === 200 || status === 201) {
            if (data.status) {
              this.body = data.data;
              //notifikasi ketika berhasil
              this.$notify({
                // ketika data berhasil dihapus maka muncul notif
                group: "notif",
                type: "success",
                title: "Informasi",
                text: "Data berhasil untuk diambil",
              });
              
            } else {
              //gagal
              this.$notify({
                group: "notif",
                type: "error",
                title: "Perhatian",
                text: "Data gagal untuk diambil",
              });
            }
          } else {
            //gagal
            this.$notify({
              group: "notif",
              type: "error",
              title: "Perhatian",
              text: "Data gagal untuk diambil",
            });
          }
        })
        .catch(() => {
          //error
          this.$notify({
            group: "notif",
            type: "error",
            title: "Perhatian",
            text: "Data gagal untuk diambil",
          });
        });
    },

    OnSimpan(data) {
      data.id_satuan_barang = this.$route.params.id;
      API.put("stokbarangcontroller", data)
        .then(({ status, data }) => {
          if (status === 200 || status === 201) {
            if (data.status) {
              //notifikasi ketika berhasil
              this.$notify({
                // ketika data berhasil dihapus maka muncul notif
                group: "notif",
                type: "success",
                title: "Informasi",
                text: "Data telah berhasil disimpan",
              });
              
            } else {
              //gagal
              this.$notify({
                group: "notif",
                type: "error",
                title: "Perhatian",
                text: "Data gagal untuk disimpan",
              });
            }
          } else {
            //gagal
            this.$notify({
              group: "notif",
              type: "error",
              title: "Perhatian",
              text: "Data gagal untuk disimpan",
            });
          }
        })
        .catch(() => {
          //error
          this.$notify({
            group: "notif",
            type: "error",
            title: "Perhatian",
            text: "Data gagal untuk disimpan",
          });
        });
    },
  },
};
</script>
