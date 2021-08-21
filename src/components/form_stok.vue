<template>
  <div>
    <div>
      <CCol sm="14">
        <CCard>
          <CCardHeader>
            <b>Tambah Stok Barang</b>
          </CCardHeader>
          <CCardBody>
            <CForm>
              <CInput
                description=""
                label="ID Barang"
                type="text"
                v-model="form.id_barang"
                horizontal
                autocomplete="ID Barang"
              />
              <CInput
                description=""
                label="Harga Modal"
                type="number"
                v-model="form.harga_modal"
                horizontal
                autocomplete="Harga Modal"
              />
              <CInput
                description=""
                label="Harga Jual"
                type="number"
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
  </div>
</template>

<script>
export default {
  props: ["body", "isEdit"],
  data: () => {
    return {
      form: {},
    };
  },

  watch: {
    //pada props:['body'] di awasi disini setiap ada perubahan akan di masukkan ke form
    body: function (newData) {
      this.form = newData;
    },
  },

  methods: {
    submit() {
      this.$emit("submit", this.form);
    },
  },
};
</script>
