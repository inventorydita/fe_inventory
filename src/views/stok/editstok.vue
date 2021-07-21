<template>
  <div>
    <form_stok></form_stok>
  </div>
</template>

<script>
export default {
  methods: {
    editStok() {
      API.put("stokbarangcontroller", {}).then(({status,data}) => {
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
