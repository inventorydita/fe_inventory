<template>
  <div>
    <form_pemasok
      :body="body"
      :isEdit="false"
      @submit="OnSimpan"
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
  created() {
    if (this.$route.params.id) this.getDataPemasok(this.$route.params.id);
  },
  methods: {
    //get data by id
    getDataPemasok(id) {
      //Mengambil barang dari back-end (sesuai dengan yang diklik ditombol edit)
      API.get(`pemasokcontroller?id_pemasok=${id}`)
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
      data.id_pemasok = this.$route.params.id;
      API.put("pemasokcontroller", data)
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
              //pindah halaman
              this.$router.push({ path: "/master/pemasok" });
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
