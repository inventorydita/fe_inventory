<template>
  <div>
    <form_penjualan :isEdit="true" :body="body" @submit="OnSimpan"></form_penjualan>
  </div>
</template>

<script>
import API from "../../services/api.service"
export default {
  data:()=>{
    return{body:{}}
  },
  created() {
    if (this.$route.params.id)
    this.getDataPenjualan(this.$route.params.id);
  },
  methods: {
    
    getDataPenjualan(id) {
      API.get(`penjualancontroller/${id}`)
        .then((status, data) => {
          if (status === 200 || status === 201) {
            if (data.status) {
              this.body = data.data;
              //notifikasi ketika berhasil
              this.$notify({ // ketika data berhasil dihapus maka muncul notif
              group: "notif",
              type: "success",
              title: "Informasi",
              text: "Data telah berhasil dihapus",
            });
            this.getDataPenjualan()
            
              
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
        })
        .catch(() => {
          //error
          this.$notify({
          group: "notif",
          type: "error",
          title: "Perhatian",
          text: "Data gagal untuk dihapus",
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
              text: "Data telah berhasil dihapus",
            });
            this.getDataPenjualan()
          }else {
            //gagal
            this.$notify({
              group: "notif",
              type: "error",
              title: "Perhatian",
              text: "Data gagal untuk dihapus",
            });

          }
        }else{
          //gagal
          this.$notify({
              group: "notif",
              type: "error",
              title: "Perhatian",
              text: "Data gagal untuk dihapus",
            });

        }
      }).catch(()=>{
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
