<template>
  <div>
    <form_satuan :isEdit="true" :body="body" @submit="OnSimpan"></form_satuan>
  </div>
</template>

<script>
import API from "../../services/api.service";
export default {
  data: () => {
    return { body: {} };
  },
  created() {
    if (this.$route.params.id) this.getDataSatuanBarang(this.$route.params.id);
  },
  methods: {
    getDataSatuanBarang(id) {
      //Mengambil barang dari back-end (sesuai dengan yang diklik ditombol edit)
      API.get(`satuancontroller?id_satuan=${id}`)
        // object destruction (21)
        .then(({ status, data }) => {
          if (status === 200 || status === 201) {
            if (data.status) {
              this.body = data.data[0];
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
      data.id_satuan = this.$route.params.id;
      API.put("satuancontroller", data)
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
              //Pindah halaman
              this.$router.push({ path: "/master/satuanbarang" });
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
