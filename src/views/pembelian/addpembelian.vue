<template>
  <div>
    <form_pembelian :body="body" :isEdit="false" @submit="addPembelian"></form_pembelian>
  </div>
</template>

<script>
import API from "../../services/api.service"

export default {
  data:()=>{
    return{body:{}}
  },
  methods: {

    addPembelian() {
      API.post("pembeliancontroller", {}).then((status,data) => {
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
