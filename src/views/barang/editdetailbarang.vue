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
      body: {},
    };
  },
  created() {
    //ambil data by id
    if (this.$route.params.id)
    this.getDataDetailBarang(this.$route.params.id);
  },
  methods: {
    
    //get data by id
    getDataDetailBarang(id) {
      //Mengambil barang dari back-end (sesuai dengan yang diklik ditombol edit)
      API.get(`masterbarangcontroller?id_barang=${id}`)
        .then((status, data) => {
          if (status === 200 || status === 201) {
            if (data.status) {
              this.body = data.data;
              //notifikasi ketika berhasil
              this.$notify({
                // ketika data berhasil diambil maka muncul notif
                group: "notif",
                type: "success",
                title: "Informasi",
                text: "Data berhasil untuk diambil",
              });
             
                //Pindah halaman
              this.$router.push({ path: "/master/detailbarang" });

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

    onSimpan(data) {
      //proses simpan ke back end
      data.id_barang = this.$route.params.id
      API.put("masterbarangcontroller", data)
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
