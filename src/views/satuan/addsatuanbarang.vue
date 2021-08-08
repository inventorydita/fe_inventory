<template>
  <div>
    <form_satuan :isEdit="false" :body="body" @submit="addSatuanBarang"></form_satuan>
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

    addSatuanBarang(data) {
      API.post("satuancontroller", data).then(({status,data}) => {
        if(status === 200 || status === 201){
          if(data.status){
             //notifikasi ketika berhasil
             this.$notify({ // ketika data berhasil dihapus maka muncul notif
              group: "notif",
              type: "success",
              title: "Informasi",
              text: "Data telah berhasil dihapus",
            });
            this.getDataSatuanBarang()

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
