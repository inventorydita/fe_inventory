<template>
  <div>
    <div>
      <CCol sm="14">
        <CCard>
          <CCardHeader>
            <b>Tambah Satuan</b>
          </CCardHeader>
          <CCardBody>
            <CForm>
              <CInput
                description=""
                label="Nama Satuan"
                type="text"
                v-model="form.nama_satuan"
                horizontal
                autocomplete="Nama Satuan"
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

  watch:{
    //pada props:['body'] di awasi disini setiap ada perubahan akan di masukkan ke form
    body:function (newData){ 
      this.form = newData
    }
  },

  methods:{
    submit(){
      this.$emit("submit",this.form)
    }
  }
};
</script>