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
                label="ID Pemasok"
                type="text"
                v-model="form.id_pemasok"
                horizontal
                autocomplete="ID Pemasok"
              />
              <CInput
                description=""
                label="Sub Total"
                type="number"
                v-model="form.sub_total"
                horizontal
                autocomplete="Sub Total"
              />
              <CInput
                description=""
                label="Nomor Nota"
                type="text"
                v-model="form.nomor_nota"
                horizontal
                autocomplete="Nomor Nota"
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
