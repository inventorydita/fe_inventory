<template>
  <div>
    <form_pembelian @pick="pickBarang" :data="data"></form_pembelian>
  </div>
</template>

<script>
import API from "../../services/api.service"

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

  data:()=>{
    return{data:[]}
  },

  methods: {
    submit() {
      this.$emit("submit", this.form);
    },
    addPembelian() {
      API.post("pembeliancontroller", {}).then((status,data) => {
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
    pickBarang(){

    }
  },
};
</script>
