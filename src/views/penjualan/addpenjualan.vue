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
