<template>
  <div>
    <CRow>
      <CCol lg="4" md="6" sm="12" xl="4">
        <CCard>
          <CCardHeader>
            <b>Tambah Barang Masuk</b>
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
              <CButton
                color="primary"
                size="sm"
                type="button"
                @click="modalpemasok = true"
              >
                Pilih Pemasok
              </CButton>
              <CInput
                v-model="nama_pemasok"
                autocomplete="Nama Pemasok"
                description=""
                disabled
                horizontal
                label="Nama Pemasok"
                type="text"
              />
              <CInput
                horizontal
                label="Tanggal"
                type="date"
                v-model="form.tanggal"
                :max="maxtanggalpembelian"
              />
              <CInput
                v-model="form.subtotal"
                autocomplete="Sub Total"
                description=""
                disabled
                horizontal
                label="Sub Total"
                type="text"
              />
            </CForm>
          </CCardBody>
        </CCard>
        <CCard>
          <CCardHeader>
            <b>Detail Barang Masuk</b>
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
                v-model="selected.nama_barang"
                autocomplete="Nama Barang"
                description=""
                disabled
                horizontal
                label="Nama Barang"
                type="text"
              />
              <CInput
                v-model="quantity"
                horizontal
                label="Kuantitas"
                type="number"
              />

              <div class="form-group form-actions">
                <CButton
                  color="primary"
                  size="sm"
                  type="button"
                  @click="onTambah"
                >
                  Tambahkan Barang
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
                        <b>Detail Barang Masuk</b>
                      </CCardHeader>
                      <CCardBody>
                        <CForm>
                          <div class="form-group form-actions"></div>
                          <div>
                            <CRow>
                              <CCol lg="12">
                                <data-table
                                  :headers="header"
                                  :items="list"
                                  @edit="editDetailBarang"
                                  @delete="deleteDetailBarang"
                                  title="">
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
    <modal-pemasok
      @onselected="onSelectedPemasok"
      @action="modalpemasok = false"
      :show="modalpemasok"
    />
  </div>
</template>
<script>
import API from "@/services/api.service";
export default {
  props: ["body", "items", "isEdit"],
  name: "RincianPembelian",
  data: () => {
    return {
      maxtanggalpembelian: "",
      header: [
        { key: "nama_barang", label: "Nama Barang" },
        { key: "quantity", label: "Quantity" },
        { key: "nama_satuan", label: "Satuan" },
        { key: "harga_modal", label: "Harga Beli" },
        { key: "harga_jual", label: "Harga Jual" },
        { key: "actions", label: "Aksi" },
      ],
      list: [],
      modal: false,
      modalpemasok: false,
      nama_pemasok: "",
      form: {
        nomor_nota: [],
        detail_pembelian: [],
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

this.maxtanggalpembelian = today

  },
  watch: {
    body: function (newData) {
      if(newData.nama_pemasok){
          this.nama_pemasok = newData.nama_pemasok;
      }
      
      this.form = newData;
    },
    items: function (newVal) {
      this.form.detail_pembelian = newVal;
      this.list = newVal;
    },
  },
  methods: {
    onPickBarang() {
      this.modal = true;
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
    this.form.detail_pembelian = this.list
    this.$emit("submit", this.form);
}
    },
    editDetailBarang(barang){
      //set barang yang mau di edit ke form
      this.selected = barang
    },
    deleteDetailBarang(barang){
      //sebelum menghapus cek dulu ada di index berapa
       const index = this.list
                .map((item) => item.id_barang)
                .indexOf(barang.id_barang);
                //proses hapus
           this.list.splice(index, 1);
    },
    onTambah() {
      //diasumsikan kalau kuantitas lebih dari 0 maka membeli barang 
      if (this.quantity > 0) {

//persiapan data
        let data = {
          id_barang: this.selected.id_barang,
          nama_barang: this.selected.nama_barang,
          nama_satuan: this.selected.nama_satuan,
          quantity: this.quantity,
          harga_modal: this.selected.harga_modal,
          harga_jual: this.selected.harga_jual,
        };

//cek barangnya sudah ada di list atau belum
        const existAtList = this
              .list
              .some((item) => item.id_barang === this.selected.id_barang);


      if(existAtList){
        //ada di array maka data yang sudah ada di gantikan dengan data baru
          const index = this.list
                .map((item) => item.id_barang)
                .indexOf(this.selected.id_barang);
                Object.assign(this.list[index], data);
                
       
      }else{
        //tidak ada  maka data akan langsung dimasukkan
        this.list.push(data);
      }
      //hitung sub total
        let total = 0;
        this.list.forEach((element )=>{
          let harga = parseFloat(element.harga_modal)
          let qty = parseFloat(element.quantity)
          total = parseFloat(total+(harga*qty))
        })
        this.form.subtotal = parseFloat(total);
        
      }
    },

    onSelected(barang) {
      this.modal = false;
      this.selected = barang;
    },
    onSelectedPemasok(Pemasok) {
      this.modalpemasok = false;
      this.nama_pemasok = Pemasok.nama_pemasok;
      this.form.id_pemasok = Pemasok.id_pemasok;
    },
  },
};
</script>