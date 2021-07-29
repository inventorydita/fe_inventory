<template>
  <div>
    <form_pemasok></form_pemasok>
  </div>
</template>

<script>
import API from "../../services/api.service";

export default {
  methods: {
    addPemasok() {
      API.post("pemasokcontroller", {}).then(({status,data}) => {
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
