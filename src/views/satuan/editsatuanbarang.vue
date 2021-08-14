<template>
  <div>
    <form_satuan :isEdit="true" :body="body" @submit="OnSimpan"></form_satuan>
  </div>
</template>

<script>
import API from "../../services/api.service"
export default {
  data:()=>{
    return{body:{}}
  },
  created() {
    if (this.$route.params.id)
    this.getDataSatuanBarang(this.$route.params.id);
  },
  methods: {
    submit() {
      this.$emit("submit", this.form);
    },
    getDataPemasok(id) {
      API.get(`satuancontroller/${id}`)
        .then((status, data) => {
          if (status === 200 || status === 201) {
            if (data.status) {
              this.body = data.data;
              //notifikasi ketika berhasil
              this.$notify({ // ketika data berhasil dihapus maka muncul notif
              group: "notif",
              type: "success",
              title: "Informasi",
              text: "Data telah berhasil dihapus",
            });
            this.getDataSatuanbarang()
            
              
            } else {
              //gagal
              this.$notify({
              group: "notif",
              type: "error",
              title: "Perhatian",
              text: "Data gagal untuk dihapus",
            });

            }
          } else {
            //gagal
            this.$notify({
              group: "notif",
              type: "error",
              title: "Perhatian",
              text: "Data gagal untuk dihapus",
            });

          }
        })
        .catch(() => {
          //error
          this.$notify({
          group: "notif",
          type: "error",
          title: "Perhatian",
          text: "Data gagal untuk dihapus",
        });

        });
    },

    OnSimpan(data) {
      API.put("satuancontroller", data).then(({status,data}) => {
        if(status === 200 || status === 201){
          if(data.status){
            //notifikasi ketika berhasil
            this.$notify({ // ketika data berhasil dihapus maka muncul notif
              group: "notif",
              type: "success",
              title: "Informasi",
              text: "Data telah berhasil dihapus",
            });
            this.getDataSatuanBarang()

          }else {
            //gagal
            this.$notify({
              group: "notif",
              type: "error",
              title: "Perhatian",
              text: "Data gagal untuk dihapus",
            });

          }
        }else{
          //gagal
          this.$notify({
              group: "notif",
              type: "error",
              title: "Perhatian",
              text: "Data gagal untuk dihapus",
            });

        }
      }).catch(()=>{
        //error
        this.$notify({
          group: "notif",
          type: "error",
          title: "Perhatian",
          text: "Data gagal untuk dihapus",
        });
        
      });
    },
  },
};
</script>
