<template>
  <div>
    <CRow>
      <CCol lg="12">
        <data-table :items="items" :headers="header" title="Barang">
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
export default {
  name: "Pemasok",

  data: () => {
    return {
      header: [{ key: "tes", label: "No" }],
      items: [{ tes: "Hai" }],
    };
  },
  methods: {},
};
</script>
