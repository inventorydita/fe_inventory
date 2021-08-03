<template>
  <div>
    <form_pemasok :body="{}" :isEdit="true" @submit="addPemasok"></form_pemasok>

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

    addPemasok(data) {
      API.post("pemasokcontroller", data).then(({status,data}) => {
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
