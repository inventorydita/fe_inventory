<template>
  <div>
    <CRow>
      <CCol lg="6" md="8" sm="16" xl="8">
        <CCard>
          <CCardHeader>
            <b>Tambah Pembelian</b>
          </CCardHeader>
          <CCardBody>
            <CForm>
              <CInput
                v-model="form.nomor_nota"
                autocomplete="Nomor Nota"
                description=""
                horizontal
                label="Nomor Nota"
                type="text"
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
        <CCard>
          <CCardHeader>
            <b>Detail Pembelian</b>
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
              <div>
                <CRow>
                  <CCol lg="10" md="8" sm="14" xl="10">
                    <CCard>
                      <CCardHeader>
                        <b>Detail Pembelian</b>
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
                                  title=""
                                >
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
        nomor_nota: 0,
        detail_pembelian: [],
        subtotal: 0,
      },
      selected: {},
      quantity: 0,
    };
  },
  created(){
  
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
      this.form.detail_pembelian = this.list
      this.$emit("submit", this.form);
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
                console.log("selected",this.selected)
                console.log("selectedIndex",index)
                console.log("selecteddata",data)
               
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
        
      }else{
        console.log("qty",this.quantity)
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