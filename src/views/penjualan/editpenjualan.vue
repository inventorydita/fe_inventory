<template>
  <div>
    <form_penjualan :isEdit="true" :body="body" :items="barang_yang_dibeli" @submit="OnSimpan"></form_penjualan>
  </div>
</template>

<script>
import API from "../../services/api.service"
export default {
  data:()=>{
    return{
      body:{},
      barang_yang_dibeli:[]
    }
  },
  created() {
    if (this.$route.params.id)
    this.getDataPenjualan(this.$route.params.id);
  },
  methods: {
    getDataPenjualan(id) {
      //Mengambil barang dari back-end (sesuai dengan yang diklik ditombol edit)
      API.get(`penjualancontroller?id_penjualan=${id}`)
        .then(({status, data}) => {
          if (status === 200 || status === 201) {
            if (data.status) {

              this.body = data.data.penjualan[0];
              this.barang_yang_dibeli = data.data.barang_yang_dibeli

              //notifikasi ketika berhasil
              this.$notify({ // ketika data berhasil dihapus maka muncul notif
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
      data.id_penjualan = this.$route.params.id
      API.put("penjualancontroller", data).then(({status,data}) => {
        if(status === 200 || status === 201){
          if(data.status){
            //notifikasi ketika berhasil
            this.$notify({ // ketika data berhasil dihapus maka muncul notif
              group: "notif",
              type: "success",
              title: "Informasi",
              text: "Data telah berhasil disimpan",
            });
           //pindah halaman
              this.$router.push({ path: "/master/penjualan" });
          }else {
            //gagal
            this.$notify({
              group: "notif",
              type: "error",
              title: "Perhatian",
              text: "Data gagal untuk disimpan",
            });

          }
        }else{
          //gagal
          this.$notify({
              group: "notif",
              type: "error",
              title: "Perhatian",
              text: "Data gagal untuk disimpan",
            });

        }
      }).catch(()=>{
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
