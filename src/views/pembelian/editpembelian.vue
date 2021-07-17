<template>
  <div>
    <form_pembelian></form_pembelian>
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