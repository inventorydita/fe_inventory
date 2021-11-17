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
    this.getPemasok();

  },
  watch: {
    body: function (newData) {
      console.log("body form",newData)
      if(newData.nama_pemasok){
          this.nama_pemasok = newData.nama_pemasok;
      }
      
      this.form = newData;
    },
    items: function (newVal) {
      console.log("body ;ist",newVal)
      this.form.detail_pembelian = newVal;
      this.list = newVal;
    },
  },
  methods: {
    getPemasok(data) {
      //proses simpan ke back end
      API.get("pemasokcontroller", data)
        .then(({ status, data }) => {
          if (status === 200 || status === 201) {
            if (data.status) {
              //notifikasi ketika berhasil
              this.nama_pemasok = data.data[0];
            
            } else {
              
            }
          } else {
          
            
          }
        });
     
    },
    onPickBarang() {
      this.modal = true;
    },
    action(val) {
      this.modal = val;
    },
    barangSelected() {},
    submit() {
      this.$emit("submit", this.form);
    },
    onTambah() {
      if (this.quantity > 0) {
        let data = {
          id_barang: this.selected.id_barang,
          nama_barang: this.selected.nama_barang,
          nama_satuan: this.selected.nama_satuan,
          quantity: this.quantity,
          harga_modal: this.selected.harga_modal,
          harga_jual: this.selected.harga_jual,
        };
        var total = parseFloat(this.quantity * this.selected.harga_modal);

        this.form.subtotal = parseFloat(this.form.subtotal + total);
        console.log(this.form);
        console.log(total);
        this.form.detail_pembelian.push(data);
        this.list.push(data);
      }
    },

    onSelected(barang) {
      (this.modal = false), (this.selected = barang);
    },
    onSelectedPemasok(Pemasok) {
      this.modalpemasok = false;
      this.nama_pemasok = Pemasok.nama_pemasok;
      this.form.id_pemasok = Pemasok.id_pemasok;
    },
  },
};
</script>