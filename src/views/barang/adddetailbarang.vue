<template>
  <div>
    <form_barang :body="body" :isEdit="false" @submit="onSimpan"></form_barang>
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
    onSimpan(){
      //proses simpan ke back end
    },
    addDetailBarang() {
      API.post("masterbarangcontroller", {}).then(({status,data}) => {
        if(status == 200 || status == 201){
          if(data.status){
            this.items = data.data
          }
        }
      });
    },
  },
};
</script>
