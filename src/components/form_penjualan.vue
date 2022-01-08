<template>
  <div>
    <CRow>
      <CCol lg="4" md="6" sm="12" xl="4">
        <CCard>
          <CCardHeader>
            <b>Tambah Barang Keluar</b>
          </CCardHeader>
          <CCardBody>
            <CForm>
              <CInput
                v-model="form.nomor_nota"
                autocomplete="Nomor Nota"
                description=""
                horizontal
                label="Nomor Nota"
                type="number"
              />
              <CInput
                horizontal
                label="Tanggal"
                type="date"
                v-model="form.tanggal"
                :max= "maxtanggalpenjualan"
              />
              <CInput
                autocomplete="Sub Total"
                description=""
                disabled
                horizontal
                label="Sub Total"
                v-model="form.subtotal"
                type="text"
              />
            </CForm>
          </CCardBody>
        </CCard>
        <CCard>
          <CCardHeader>
            <b>Detail Barang Keluar</b>
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
                autocomplete="Nama barang"
                description=""
                horizontal
                disabled
                label="Barang"
                @click="onPickBarang"
                v-model="selected.nama_barang"
                type="text"
              />
              <CInput
                horizontal
                label="Quantity"
                type="number"
                v-model="quantity"
              />
              <div class="form-group form-actions">
                <CButton
                  color="primary"
                  size="sm"
                  type="button"
                  @click="onTambah"
                >
                  Tambahkan barang
                </CButton>
              </div>
              <div class="form-group form-actions">
                <CButton
                  color="primary"
                  size="sm"
                  type="button"
                  @click="submit"
                >
                  Submit
                </CButton>
              </div>
            </CForm>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol lg="8" md="6" sm="12" xl="8">
        <CCard>
          <CCardHeader>
            <b>Detail Barang Keluar</b>
          </CCardHeader>
          <CCardBody>
            <CForm>
              <div class="form-group form-actions"></div>
              <div>
                <CRow>
                  <CCol lg="12">
                    <data-table 
                    :headers="header" 
                    :items="list" title=""
                    @edit="editDetailBarang"
                    @delete="deleteDetailBarang">
                      <template></template>
                      <template #search>
                        <CForm inline></CForm>
                      </template>
                    </data-table>
                  </CCol>
                </CRow>
              </div>
            </CForm>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
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
  name: "RincianPenjualan",
  data: () => {
    return {
      maxtanggalpenjualan: "",
      header: [
        { key: "nama_barang", label: "Nama Barang" },
        { key: "quantity", label: "Quantity" },
        { key: "nama_satuan", label: "Satuan" },
        { key: "harga_jual", label: "Harga Jual" },
        { key: "actions", label: "Aksi" },
      ],
      list: [],
      modal: false,
      form: {
        nomor_nota: [],
        detail_penjualan: [],
        subtotal: 0,
      },
      selected: {},
      quantity: [],
    };
  },
  created(){ 
  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth() + 1; //January is 0!
  var yyyy = today.getFullYear();

  if (dd < 10) {
    dd = '0' + dd;
}

if (mm < 10) {
    mm = '0' + mm;
}

today = yyyy + '-' + mm + '-' + dd;

this.maxtanggalpenjualan = today
  },
  watch: {
    body: function (newData) {
      this.form = newData;
    },
    items: function (newVal) {
      this.list = newVal;
      this.form.detail_penjualan = newVal;
    },
  },
  methods: {
    onPickBarang(val) {
      this.modal = true;
      //console.log(this.modal);
    },
    action(val) {
      this.modal = val;
    },
    submit() {
       if(this.form.nomor_nota < 3){
    this.$notify({
        group: "notif",
        type: "error",
        title: "Perhatian",
        text: "Nomor nota harus disi",
    });
  }else {
    this.form.detail_penjualan = this.list
    this.$emit("submit", this.form);
}
    },
    onTambah() {
      //diasumsikan kalau kuantitas lebih dari 0 maka menjual barang
      if (this.quantity > 0) {

        //persiapan data
        let data = {
          id_barang: this.selected.id_barang,
          nama_barang: this.selected.nama_barang,
          harga_jual: this.selected.harga_jual,
          nama_satuan: this.selected.nama_satuan,
          quantity: this.quantity,
        };

        //cek barangnya sudah ada di list atau belum 
        const existAtList = this 
        .list
        .some((item) => item.id_barang === this.selected.id_barang);
        //var total = parseFloat(this.quantity * this.selected.harga_jual);

        if(existAtList){
          const index = this.list
          .map((item) => item.id_barang)
          .indexOf(this.selected.id_barang);

          Object.assign(this.list[index], data);

        } else {
          this.list.push(data);
        }
        //hitung subtotal
        let total = 0;
        this.list.forEach((element )=>{
          let harga = parseFloat(element.harga_jual)
          let qty = parseFloat(element.quantity)
          total = parseFloat(total+(harga*qty))
        })
        this.form.subtotal = parseFloat(total);
        }
        //this.form.subtotal = parseFloat(this.form.subtotal + total);
        //console.log(this.form);
        //console.log(total);
        //this.form.detail_penjualan.push(data);
        //this.list.push(data);
      
    },

    onSelected(barang) {
      this.modal = false;
      this.selected = barang;
    },
  },
};
</script>
