<template>
  <CModal :show.sync="modal" color="warning" title="Daftar Barang">
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
  name: "dialog_pick_barang",
  props: ["show"],
  data: () => {
    return {
      modal: true,
      header: [
        { key: "nama_barang", label: "Nama Barang" },
        { key: "nama_satuan", label: "Satuan" },
        { key: "harga_modal", label: "Harga Modal" },
        { key: "harga_jual", label: "Harga Jual" },
      ],

      listBarang: [],
      temp: [],
      input: "",
    };
  },
  watch: {
    show: function(val) {
      this.modal = val;
    },
    modal: function(val) {
      this.$emit("action", val);
    },
  },
  created() {
    this.getBarang();
  },
  methods: {
    getBarang() {
      API.get("masterbarangcontroller").then(({ status, data }) => {
        if (status == 200 || status == 201) {
          if (data.status) {
            this.listBarang = data.data;
            this.temp = data.data;
          }
        }
      });
    },
    search() {
      this.temp = [];
      if (this.input.length < 1) {
        this.temp = this.listBarang;
      }
      let data = this.listBarang.filter((barang) => {
        return barang.nama_barang.includes(this.input.toLowerCase());
      });
      this.temp = data;
    },
    onBarangSelected(data) {
      this.modal = false;
      this.$emit("onselected", data);
    },
  },
};
</script>

<style scoped></style>
