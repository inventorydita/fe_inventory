<template>
  <div>
    <form_satuan></form_satuan>
  </div>
</template>

<script>
export default {
  props: ["body", "isEdit"],
  data:()=>{
    return{data:[]}
  },

  watch: {
    //pada props:['body'] di awasi disini setiap ada perubahan akan di masukkan ke form
    body: function (newData) {
      this.form = newData;
    },
  },

  methods: {
    submit() {
      this.$emit("submit", this.form);
    },

    editSatuanBarang() {
      API.put("satuancontroller", {}).then(({status,data}) => {
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
