<template>
  <div>
    <form_barang :body="body" :isEdit="false" @submit="onSimpan"></form_barang>
  </div>
</template>

<script>
import API from "../../services/api.service";

export default {
  props: ["body", "isEdit"],
  data:()=>{
    return{
      body:{}
    }
  },

  watch: {
    //pada props:['body'] di awasi disini setiap ada perubahan akan di masukkan ke form
    body: function (newData) {
      this.form = newData;
    },
  },

  methods: {
    submit() {
      this.$emit("submit", this.form);
    },
    onSimpan(data){
      //proses simpan ke back end
      API.post("masterbarangcontroller", data).then(({status,data}) => {
        if(status == 200 || status == 201){
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
