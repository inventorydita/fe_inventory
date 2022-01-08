<template>
  <CModal 
   :show.sync="modal"
    @update:show="onClose"
    color="primary"
    :closeOnBackdrop="false"
  title="Daftar Satuan">
    <CRow>
      <CCol>
        <data-table
          :buttonadd="false"
          :headers="header"
          :items="temp"
          @selected="onBarangSelected"
        >
          <template #search>
            <CForm inline>
              <CInput
                v-model="input"
                placeholder="Search"
                @keypress="search"
                size="sm"
              />
            </CForm>
          </template>
        </data-table>
      </CCol>
    </CRow>
  </CModal>
</template>

<script>
import API from "../services/api.service";
export default {
  name: "dialog_pick_satuan",
  props: ["show"],
  data: () => {
    return {
      modal: false,
      header: [
        { key: "nama_satuan", label: "Nama Satuan" },
      ],

      listSatuan: [],
      temp: [],
      input: "",
    };
  },
  watch: {
    show: function(newval, old) {
      console.log(newval);
      this.modal = newval;
    },
  },
  created() {
    this.getSatuan();
  },
  methods: {
    getSatuan() {
      API.get("satuancontroller").then(({ status, data }) => {
        if (status == 200 || status == 201) {
          if (data.status) {
            this.listSatuan = data.data;
            this.temp = data.data;
          }
        }
      });
    },
    search() {
      this.temp = [];
      if (this.input.length < 1) {
        this.temp = this.listSatuan;
      }
      let data = this.listSatuan.filter((Satuan) => {
        return barang.nama_satuan.includes(this.input.toLowerCase());
      });
      this.temp = data;
    },
    onBarangSelected(data) {
      this.$emit("onselected", data);
    },
    onClose(event) {
      console.log(event);
      this.$emit("action", event);
    },
  },
};
</script>

<style scoped></style>
