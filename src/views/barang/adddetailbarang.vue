<template>
  <div>
    <form_barang :body="body" :isEdit="false" @submit="addDetailBarang"></form_barang>
  </div>
</template>

<script>
import API from "../../services/api.service";

export default {
  data:()=>{
    return{
      body:{}
    }
  },
  methods: {

    addDetailBarang(data){
      //proses simpan ke back end
      API.post("masterbarangcontroller", data).then(({status,data}) => {
        if(status === 200 || status === 201){
          if(data.status){
           //notifikasi ketika berhasil
              this.$notify({
              group: "notif",
              type: "success",
              title: "Informasi",
              text: "Data telah berhasil ditambahkan",
            });
            //Pindah halaman 
            this.$router.push({ path:'/master/detailbarang' })

          }else {
            //gagal
            this.$notify({
              group: "notif",
              type: "error",
              title: "Perhatian",
              text: "Gagal menambah data",
            });
          }
        }else{
          //gagal
          this.$notify({
            group: "notif",
            type: "error",
            title: "Perhatian",
            text: "Gagal menambah data",
            });
        }
      }).catch(()=>{
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
