<template>
  <div>
    <CRow>
      <CCol lg="12">
        <data-table :items="items" :headers="header" title="Pemasok">
          <template #tambah>
            <CButton
              @click="$router.push({ path: '/master/addpemasok' })"
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
  name: "Pemasok",
  data: () => {
    return {
      header: [
        { key: "nama_pemasok", label: "Nama Pemasok" },
        { key: "alamat", label: "Alamat" },
        { key: "kota", label: "Kota" },
        { key: "telepon", label: "Nomor Telepon" },
        { key: "aksi", label: "Aksi" },
      ],
      items: [{ nomer: "Hai" }],
    };
  },
  created() {
    this.getDataPemasok();
  },
  methods: {
    getDataPemasok() {
      API.get("pemasokcontroller").then(({status,data}) => {
        if(status == 200 || status == 201){
          if(data.status){
            this.items = data.data
          }
        
        
        }
      });
    },
    deletePemasok() {
      API.delete("pemasokcontroller", { id_pemasok: "" }).then(({status,data}) => {
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
