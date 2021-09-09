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
            <div class="form-group form-actions">
            <div>
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
                disabled
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
              
                <CButton
                  type="button"
                  @click="submit"
                  size="sm"
                  color="primary"
                >
                  Submit
                </CButton>
              </div>
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
      form: {
        tambah_satuan: [],
      },
      list: [],
      modal: false,
      modalsatuan: false,
      nama_satuan: "",
      selected: {},
    };
  },
  watch: {
    //pada props:['body'] di awasi disini setiap ada perubahan akan di masukkan ke form
    body: function (newData, oldVal) {
      this.form = newData;
    },
    items: function (newVal, oldVal) {
      this.list = newVal;
      this.form.tambah_satuan = newVal;
    },
  },
  
  methods: {
    submit() {
      this.$emit("submit", this.form);
    },
    onPickBarang() {
      this.modal = true;
    },
    action(val) {
      this.modal = val;
    },
    barangSelected() {},
    
    onSelectedSatuan(Satuan) {
      this.nama_satuan = Satuan.nama_satuan;
      this.form.id_satuan = Satuan.id_satuan;
    },
  },
};
</script>

