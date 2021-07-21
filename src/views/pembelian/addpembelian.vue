<template>
  <div>
    <form_pembelian @pick="pickBarang" :data="data"></form_pembelian>
  </div>
</template>

<script>
import API from "../../services/api.service"
export default {
  data:()=>{
    return{data:[]}
  },
  methods: {
    addPembelian() {
      API.post("pembeliancontroller", {}).then((status,data) => {
        if(status == 200 || status == 201){
          if(data.status){
            this.items = data.data
          }
        
        
        }
      });
    },
    pickBarang(){

    }
  },
};
</script>
