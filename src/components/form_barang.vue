<template>
  <div>
    <CRow>
      <CCol lg="6" md="8" sm="16" xl="8">
        <CCard>
          <CCardHeader>
            <b>Tambah Barang</b>
          </CCardHeader>
          <CCardBody>
            <CForm>
              <CInput
                description=""
                label="Nama Barang"
                type="text"
                v-model="form.nama_barang"
                horizontal
                autocomplete="Nama Barang"
              />
              <CButton
                color="primary"
                size="sm"
                type="button"
                @click="modalsatuan = true"
              >
                Pilih Satuan
              </CButton>
              <CInput
                description=""
                label="Nama Satuan"
                type="text"
                v-model="nama_satuan"
                horizontal
                autocomplete="Nama Satuan"
              />
              <CInput
                description=""
                label="Harga Modal"
                type="text"
                v-model="form.harga_modal"
                horizontal
                autocomplete="Harga Modal"
              />
              <CInput
                description=""
                label="Harga Jual"
                type="text"
                v-model="form.harga_jual"
                horizontal
                autocomplete="Harga Jual"
              />
              <div class="form-group form-actions">
                <CButton
                  type="button"
                  @click="submit"
                  size="sm"
                  color="primary"
                >
                  Submit
                </CButton>
              </div>
            </CForm>
          </CCardBody>
        </CCard>
      </CCol>
      <modal-satuan
        @onselected="onSelectedSatuan"
        @action="modalsatuan = false"
        :show="modalsatuan"
      />
    </CRow>
  </div>
</template>

<script>
export default {
  //props yang diisi oleh parent component
  props: ["body", "items", "isEdit"],
  data: () => {
    return {
      form: {},
      list: [],
      modal: false,
      modalsatuan: false,
      nama_satuan: "",
    };
  },
  watch: {
    //pada props:['body'] di awasi disini setiap ada perubahan akan di masukkan ke form
    body: function (newData) {
      this.form = newData;
    },
    items: function (newVal) {
      this.items = newVal;
    },
  },
  methods: {
    onPickBarang() {
      this.modal = true;
    },
    action(val) {
      this.modal = val;
    },
    barangSelected() {},
    submit() {
      this.$emit("submit", this.form);
    },
    onSelectedSatuan(Satuan) {
      this.nama_satuan = Satuan.nama_satuan;
      this.form.id_satuan = Satuan.id_satuan;
      this.list.push(data);
    },
  },
};
</script>

