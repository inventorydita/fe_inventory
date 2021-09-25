<template>
  <div>
    <CRow>
      <CCol lg="12">
        <data-table :items="items" :headers="header" title="Penjualan">
          <template #tambah>
            <CInput
              horizontal
              label="Dari Tanggal"
              type="date"
              v-model="form.tanggal"
            />
            <CInput
              horizontal
              label="Sampai Tanggal"
              type="date"
              v-model="form.tanggal"
            />
            <CButton type="button" @click="submit" size="sm" color="primary">
              Submit
            </CButton> </template
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
  data: () => {
    return {
      header: [
        { key: "tanggal", label: "Tanggal" },
        { key: "nomor_nota", label: "Nomor Nota" },
        { key: "nama_barang", label: "Nama Barang" },
        { key: "nama_satuan", label: "Nama Satuan" },
        { key: "harga_jual", label: "Harga Jual" },
        { key: "subtotal", label: "Sub Total" },
        { key: "actions", label: "Aksi" },
      ],
      hidden: false,
      items: [],
      form: {},
    };
  },
};
</script>
