<template>
  <div>
    <CRow>
      <CCol lg="12">
        <data-table :items="items" :headers="header" title="Satuan Barang">
          <template #tambah>
            <CButton
              @click="$router.push({ path: '/master/addsatuanbarang' })"
              color="primary"
            >
              Tambah Data
            </CButton> </template
          ><template #search
            ><CForm inline>
              <CInput class="ml-12 sm-6" placeholder="Search" size="sm" />

              <CButton color="outline-success" class="" type="submit"
                >Search</CButton
              >
            </CForm></template
          >
        </data-table>
        <CPagination align="center" :pages="10" />
      </CCol>
    </CRow>
  </div>
</template>

<script>
import API from "../../services/api.service";

export default {
  name: "SatuanBarang",
  data: () => {
    return {
      header: [
        { key: "nama_satuan", label: "Nama Satuan" },
        { key: "aksi", label: "Aksi" },
      ],
      items: [{ nomer: "Hai" }],
    };
  },
  created() {
    this.getDataSatuanBarang();
  },
  methods: {
    getDataSatuanBarang() {
      API.get("satuancontroller").then(({status,data}) => {
        if(status == 200 || status == 201){
          if(data.status){
            this.items = data.data
          }
        
        
        }
      });
    },
    deleteSatuanBarang() {
      API.delete("satuancontroller", { id_satuan: "" }).then(({status,data}) => {
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
