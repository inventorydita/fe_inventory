<template>
  <div>
    <form_penjualan :isEdit="false" :body="body" @submit="addPenjualan" ></form_penjualan>
  </div>
</template>

<script>
import API from "../../services/api.service"
export default {
  data:()=>{
    return{
      body:{}
    }
  },
  methods: {
    submit() {
      this.$emit("submit", this.form);
    },

    addPenjualan(data) {
      API.post("penjualancontroller", data).then(({status,data}) => {
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
