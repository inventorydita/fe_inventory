<template>
  <CModal 
   :show.sync="modal"
    @update:show="onClose"
    color="warning"
    :closeOnBackdrop="false"
  title="Daftar Pemasok">
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
  name: "dialog_pick_pemasok",
  props: ["show"],
  data: () => {
    return {
      modal: false,
      header: [
        { key: "nama_pemasok", label: "Nama Pemasok" },
        { key: "alamat", label: "Alamat" },
        { key: "kota", label: "Kota" },
        { key: "telepon", label: "Nomor Telepon" },
      ],

      listPemasok: [],
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
    this.getPemasok();
  },
  methods: {
    getPemasok() {
      API.get("pemasokcontroller").then(({ status, data }) => {
        if (status == 200 || status == 201) {
          if (data.status) {
            this.listPemasok = data.data;
            this.temp = data.data;
          }
        }
      });
    },
    search() {
      this.temp = [];
      if (this.input.length < 1) {
        this.temp = this.listPemasok;
      }
      let data = this.listPemasok.filter((pemasok) => {
        return barang.nama_pemasok.includes(this.input.toLowerCase());
      });
      this.temp = data;
    },
    onBarangSelected(data) {
      this.modal = false;
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
