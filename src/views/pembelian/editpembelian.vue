<template>
  <div>
    <form_pembelian :isEdit="true" :body="body" @submit="addPembelian"></form_pembelian>
  </div>
</template>

<script>
import API from "../../services/api.service"

export default {
  data:()=>{
    return{body:{}}
  },
  methods: {
    addPembelian(data) {
      API.post("pembeliancontroller", data).then(({status,data}) => {
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
    pickBarang(){

    }
  },
};
</script>