<template>
  <div>
    <form_pembelian
      :isEdit="true"
      :body="body"
      :items="barang_yang_dibeli"
      @submit="OnSimpan"
    ></form_pembelian>
  </div>
</template>

<script>
import API from "../../services/api.service";
export default {
  data: () => {
    return {
      body: {},
      barang_yang_dibeli: [],
    };
  },
  created() {
    if (this.$route.params.id) this.getDataPembelian(this.$route.params.id);
  },
  methods: {
    getDataPembelian(id) {
      //Mengambil barang dari back-end (sesuai dengan yang diklik ditombol edit)
      API.get(`pembeliancontroller?id_pembelian=${id}`)
        .then(({ status, data }) => {
          if (status === 200 || status === 201) {
            if (data.status) {
              this.body = data.data[0];
              this.barang_yang_dibeli = data.barang_yang_dibeli;
              console.log("data",this.body)
              console.log("data2",this.barang_yang_dibeli)
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
      data.id_pembelian = this.$route.params.id;
      API.put("pembeliancontroller", data)
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
              this.$router.push({ path: "/master/pembelian" });
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
    pickBarang() {},
  },
};
</script>