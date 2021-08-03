<template>
  <div>
    <form_satuan :isEdit="true" :body="body" @submit="editSatuanBarang"></form_satuan>
  </div>
</template>

<script>
import API from "../../services/api.service"
export default {
  data:()=>{
    return{body:{}}
  },

  methods: {
    submit() {
      this.$emit("submit", this.form);
    },

    editSatuanBarang(data) {
      API.put("satuancontroller", data).then(({status,data}) => {
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
