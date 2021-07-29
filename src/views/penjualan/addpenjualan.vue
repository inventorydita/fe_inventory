<template>
  <div>
    <form_penjualan ></form_penjualan>
  </div>
</template>

<script>
export default {
  props: ["body", "isEdit"],
  data:()=>{
    return{
      body:{}
    }
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

    addPenjualan() {
      API.post("penjualancontroller", {}).then(({status,data}) => {
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
