<template>
  <div>
    <CRow>
      <CCol lg="12">
        <data-table :items="items" :headers="header" title="Penjualan">
          <template #tambah>
            <CButton
              @click="$router.push({ path: '/master/addpenjualan' })"
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
  name: "Penjualan",
  data: () => {
    return {
      header: [
        { key: "nomor_nota", label: "Nomor Nota" },
        { key: "tanggal", label: "Tanggal" },
        { key: "sub_total", label: "Sub Total" },
        { key: "aksi", label: "Aksi" },
      ],
      items: [{ nomer: "Hai" }],
    };
  },
  created() {
    this.getDataPenjualan();
  },
  methods: {
    getDataPenjualan() {
      API.get("penjualancontroller").then(({status,data}) => {
        if(status === 200 || status === 201){
          if(data.status){
            this.items = data.data
          }
        
        
        }
      });
    },
    deletePenjualan() {
      API.delete("penjualancontroller", { id_penjualan: "" }).then(({status,data}) => {
        if(status === 200 || status === 201){
          if(data.status){
            this.items = data.data
          }
        
        
        }
      });
    },
  },
};
</script>
