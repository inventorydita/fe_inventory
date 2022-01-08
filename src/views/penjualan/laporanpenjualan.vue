<template>
  <div>
    <CRow>
      <CCol lg="12">
        <data-table :items="items" :headers="header" title="Barang Keluar">
          <template #tambah>
            <CInput
              horizontal
              label="Dari Tanggal"
              type="date"
              v-model="form.daritanggal"
            />
            <CInput
              horizontal
              label="Sampai Tanggal"
              type="date"
              v-model="form.sampaitanggal"
            />
            <CRow>
            <CButton type="button" @click="submit" size="sm" color="primary">
              Submit 
            </CButton>
            <div class="m-3"> 
            </div>
            <CButton type="button"  @click="cetak" size="sm" color="primary" >
              Cetak
            </CButton>
            </CRow> </template
          ><template #search><CForm inline> </CForm></template>
        </data-table>
      </CCol>
    </CRow>
  </div>
</template>

<script>
import API from "../../services/api.service";

export default {
  name: "Penjualan",
  //data
  data: () => {
    return {
      header: [
        { key: "tanggal", label: "Tanggal" },
        { key: "nomor_nota", label: "Nomor Nota" },
        { key: "kode_barang", label: "Kode Barang" },
        { key: "nama_barang", label: "Nama Barang" },
        { key: "quantity", label: "Quantity" },
        { key: "nama_satuan", label: "Nama Satuan" },
        { key: "harga_jual", label: "Harga Jual" },
        { key: "subtotal", label: "Sub Total" },
        //{ key: "actions", label: "Aksi" },
      ],
      hidden: false,
      items: [],
      form: {daritanggal:"",sampaitanggal:""},

    };
  },
  //method
  methods: {
    submit(){
  API.get("laporancontroller?daritanggal="+this.form.daritanggal+"&sampaitanggal="+this.form.sampaitanggal)
        .then(({ status, data }) => {
          if (status == 200 || status == 201) {
            if (data.status) {
              this.items = data.data;
            }
          }
        })
        .catch(() => {});
    },
    cetak(){
       window.location.href=`http://localhost/be_inventory/index.php/pdfview?daritanggal=${this.form.daritanggal}&sampaitanggal=${this.form.sampaitanggal}`
      }
    
  }

};
</script>
