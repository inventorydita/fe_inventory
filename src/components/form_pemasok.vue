<template>
  <div>
    <CCol sm="14">
      <CCard>
        <CCardHeader>
          <b>Tambah Pemasok</b>
        </CCardHeader>
        <CCardBody>
          <CForm>
            <CInput
              description=""
              label="Nama Pemasok"
              type="text"
              v-model="form.nama_pemasok"
              horizontal
              autocomplete="Nama Pemasok"
            />
            <CInput
              description=""
              label="Alamat"
              type="text"
              v-model="form.alamat"
              horizontal
              autocomplete="Alamat"
            />
            <CInput
              description=""
              label="Kota"
              type="text"
              v-model="form.kota"
              horizontal
              autocomplete="Kota"
            />
            <CInput
              description=""
              label="Nomor Telepon"
              type="text"
              v-model="form.telepon"
              horizontal
              autocomplete="Nomor"
            />
            <div class="form-group form-actions">
              <CButton type="button" @click="submit" size="sm" color="primary">
                Submit
              </CButton>
            </div>
          </CForm>
        </CCardBody>
      </CCard>
    </CCol>
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