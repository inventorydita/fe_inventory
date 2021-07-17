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
      API.post("", {}).then((result) => {
        console.log(result);
      });
    },
    pickBarang(){

    }
  },
};
</script>
