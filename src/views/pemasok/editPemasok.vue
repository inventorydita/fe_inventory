<template>
  <div>
    <form_pemasok></form_pemasok>
  </div>
</template>

<script>
export default {
  methods: {
    editPemasok() {
      API.put("pemasokcontroller", {}).then((status,data) => {
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
