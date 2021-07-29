<template>
  <div>
    <form_penjualan></form_penjualan>
  </div>
</template>

<script>
export default {
  methods: {
    editPenjualan() {
      API.put("penjualancontroller", {}).then(({status,data}) => {
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
