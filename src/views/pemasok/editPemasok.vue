<template>
  <div>
    <form_pemasok :body="body" :isEdit="true" @submit="editPemasok"></form_pemasok>
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
    editPemasok() {
      API.put("pemasokcontroller", {}).then((status,data) => {
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
