<template>
  <div>
    <form_pemasok
      :body="body"
      :isEdit="false"
      @submit="addPemasok"
    ></form_pemasok>
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
    addPemasok(data) {
      //proses simpan ke back end
      API.post("pemasokcontroller", data)
        .then(({ status, data }) => {
          if (status === 200 || status === 201) {
            if (data.status) {
              //notifikasi ketika berhasil
              this.$notify({
                group: "notif",
                type: "success",
                title: "Informasi",
                text: "Data telah berhasil ditambahkan",
              });
              //pindah halaman
              this.$router.push({ path: "/master/pemasok" });
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
