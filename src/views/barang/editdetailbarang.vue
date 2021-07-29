<template>
  <div>
    <form_barang :body="body" @submit="onSimpan"></form_barang>
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
  created() {
  //ambil data by id
    this.getData()
    },
  methods: {
    //get data by id
    getData(){

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
