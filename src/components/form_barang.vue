<template>
  <div>
    <div>
      <CCol sm="14">
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
                :value="form.nama_barang"
                horizontal
                autocomplete="Nama Barang"
              />
              <CInput
                description=""
                label="ID Satuan"
                type="text"
                :value="form.satuan_barang"
                horizontal
                autocomplete="ID Satuan"
              />
              <CInput
                description=""
                label="Harga Modal"
                type="text"
                :value="form.harga_modal"
                horizontal
                autocomplete="Harga Modal"
              />
              <CInput
                description=""
                label="Harga Jual"
                type="text"
                :value="form.harga_jual"
                horizontal
                autocomplete="Harga Jual"
              />
              <div class="form-group form-actions">
                <CButton type="submit" size="sm" color="primary">
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
export default{
  //props yang diisi oleh parent component
  props:["body","isEdit"],
    data: () => {
      return {
        form:{},
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

