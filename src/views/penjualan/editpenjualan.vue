<template>
  <div>
    <form_penjualan :isEdit="true" :body="body" @submit="editPenjualan"></form_penjualan>
  </div>
</template>

<script>
import API from "../../services/api.service"
export default {
  data:()=>{
    return{body:{}}
  },
  methods: {
    editPenjualan(data) {
      API.put("penjualancontroller", data).then(({status,data}) => {
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
