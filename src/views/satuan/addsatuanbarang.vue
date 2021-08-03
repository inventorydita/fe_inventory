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
