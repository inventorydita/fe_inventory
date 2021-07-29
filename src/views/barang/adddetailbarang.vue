<template>
  <div>
    <form_barang></form_barang>
  </div>
</template>

<script>
export default {
  methods: {
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
