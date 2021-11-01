<template>
  <div>
      <div>
        <CCol sm="14" >
          <CCard>
            <CCardHeader>
              <b>Tambah Stok Barang</b>
            </CCardHeader>
            <CCardBody>
              <CForm>
                <CButton
                  color="primary"
                  size="sm"
                  type="button"
                  @click="modal = true"
                >
                  Pilih Barang
                </CButton>
                <CInput
                  description=""
                  label="Nama Barang"
                  type="text"
                  disabled
                  v-model="nama_barang"
                  horizontal
                  autocomplete="Nama Barang"
                />
                <CInput
                  description=""
                  label="Harga Modal"
                  type="number"
                  disabled
                  v-model="form.harga_modal"
                  horizontal
                  autocomplete="Harga Modal"
                />
                <CInput
                  description=""
                  label="Harga Jual"
                  type="number"
                  disabled
                  v-model="form.harga_jual"
                  horizontal
                  autocomplete="Harga Jual"
                />
                <CInput
                  description=""
                  label="Stok"
                  type="number"
                  v-model="form.stok"
                  horizontal
                  autocomplete="Stok"
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
      </div>
    <modal-barang
      @onselected="onSelected"
      @action="modal = false"
      :show="modal"
    />
  </div>
</template>

<script>
export default {
  props: ["body", "items", "isEdit"],
  data: () => {
    return {
      form: {
        tambah_barang: [],
      },
      list: [],
      modal: false,
      nama_barang: "",
    };
  },

  watch: {
    //pada props:['body'] di awasi disini setiap ada perubahan akan di masukkan ke form
    body: function (newData, oldVal) {
      this.form = newData;
    },
    items: function (newVal, oldVal) {
      this.list = newVal;
      this.form.tambah_barang = newVal;
    },
  },

  methods: {
    onPickBarang(val) {
      this.modal = true;
      console.log(this.modal);
    },
    action(val) {
      this.modal = val;
    },
    submit() {
      this.$emit("submit", this.form);
    },
    onSelected(barang) {
      this.modal = false;
      this.nama_barang = barang.nama_barang;
      this.form.id_barang = barang.id_barang;
      this.form.harga_modal = barang.harga_modal;
      this.form.harga_jual = barang.harga_jual;
    },
  },
};
</script>
