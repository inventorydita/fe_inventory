<template>
  <CModal
      :show.sync="modal"
      color="warning"
      title="Modal title"
  >
    <CRow>
      <CCol>
        <data-table :buttonadd="false" :headers="header" :items="options">
          <template #search
          >
            <CForm inline>
              <CInput placeholder="Search" size="sm"/>

              <CButton class="" color="outline-success" type="submit"
              >Search
              </CButton
              >
            </CForm>
          </template
          >
        </data-table>
      </CCol>
    </CRow>
  </CModal>

</template>

<script>
export default {
  name: "dialog_pick_barang",
  props: ['show'],
  data: () => {
    return {
      modal: true,
      header: [
        { key: "nomer", label: "Barang" },
        { key: "action", label: "Aksi" },
      ],
      options: []
    }
  },
  watch: {
    show: function (val) {
      this.modal = val;
    },
    modal: function (val) {
      this.$emit("action", val)
    }
  }
}
</script>

<style scoped>

</style>