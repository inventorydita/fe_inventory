<template>
  <div>
    <form_stok :isEdit="false" :body="body" @submit="addStok"></form_stok>
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
    addStok(data) {
      API.post("stokbarangcontroller", data).then(({status,data}) => {
        if(status === 200 || status === 201){
          if(data.status){
           //notifikasi ketika berhasil
          }else {
            //gagal
          }
        }else{
          //gagal
        }
      }).catch(()=>{
        //errpr
      });
    },
  },
};
</script>
