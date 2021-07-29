<template>
  <div>
    <form_satuan></form_satuan>
  </div>
</template>

<script>
export default {
  methods: {
    editSatuanBarang() {
      API.put("satuancontroller", {}).then(({status,data}) => {
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
