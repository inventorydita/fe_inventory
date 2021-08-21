<template>
  <div>
    <form_stok :isEdit="false" :body="body" @submit="addStok"></form_stok>
  </div>
</template>

<script>
import API from "../../services/api.service";
export default {
  data: () => {
    return {
      body: {},
    };
  },

  methods: {
    addStok(data) {
      API.post("stokbarangcontroller", data)
        .then(({ status, data }) => {
          if (status === 200 || status === 201) {
            if (data.status) {
              //notifikasi ketika berhasil
              this.$notify({
                // ketika data berhasil dihapus maka muncul notif
                group: "notif",
                type: "success",
                title: "Informasi",
                text: "Data telah berhasil ditambah",
              });
              //Pindah halaman
              this.$router.push({ path: "/master/stok" });
            } else {
              //gagal
              this.$notify({
                group: "notif",
                type: "error",
                title: "Perhatian",
                text: "Gagal menambah data",
              });
            }
          } else {
            //gagal
            this.$notify({
              group: "notif",
              type: "error",
              title: "Perhatian",
              text: "Gagal menambah data",
            });
          }
        })
        .catch(() => {
          //error
          this.$notify({
            group: "notif",
            type: "error",
            title: "Perhatian",
            text: "Gagal menambah data",
          });
        });
    },
  },
};
</script>
