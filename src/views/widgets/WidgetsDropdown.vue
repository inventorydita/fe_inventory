<template>
  <CRow>
    <CCol sm="6" lg="3">
      <router-link :to="{ name: 'detailbarang' }">
      <CWidgetDropdown color="primary" :header="total_barang" text="Barang">
        <template #footer>
          <c-chart-line-example
            pointed
            class="mt-3 mx-3"
            style="height:70px"
          />
        </template>
      </CWidgetDropdown>
       </router-link>
    </CCol>

    <CCol sm="6" lg="3">
    <router-link :to="{ name: 'pembelian' }">
      <CWidgetDropdown color="info" :header="total_penjualan" text="Barang Masuk">
        <template #footer>
          <c-chart-line-example
            pointed
            class="mt-3 mx-3"
            style="height:70px "
          />
        </template>
      </CWidgetDropdown>
  </router-link>
    </CCol>

    <CCol sm="6" lg="3">
      <router-link :to="{ name: 'pemasok' }">
      <CWidgetDropdown color="warning" :header="total_pemasok" text="Pemasok" >
        <template #footer>
          <c-chart-line-example
            class="mt-3"
            style="height:70px"
          />
        </template>
      </CWidgetDropdown>
      </router-link>
    </CCol>

  <CCol sm="6" lg="3">
    <router-link :to="{ name: 'penjualan' }">
      <CWidgetDropdown
        color="danger" :header="total_pembelian" text="Barang Keluar" >
        <template #footer>
          <Cc-chart-line-example
            class="mt-3 mx-3"
            style="height:70px"
          />
        </template>
      </CWidgetDropdown>
      </router-link>
    </CCol>
  </CRow>
</template>
<script>
import { CChartLineSimple, CChartBarSimple } from '../charts/index.js'
import API from "../../services/api.service";

export default {
  name: 'WidgetsDropdown',
  data: () => {
    return {
      total_barang: 0,
      total_penjualan: 0,
      total_pembelian: 0,
      hidden: false,
      katakunci: '',
      items: "",
    };
  },
  components: { CChartLineSimple, CChartBarSimple },
  items: [],
 created(){
   this.getmasterbarang();
   this.getpenjualan();
   this.getBarang();
   this.getpemasok();
   this.getpembelian();
 },
 methods: {
    getmasterbarang() {
      API.get("masterbarangcontroller/count").then(({status,data}) => {
        if (status == 200 || status ==201) {
          if (data.status) {
            this.items = data.data;
          }
        }
      });
    },
      getBarang() {
      API.get("masterbarangcontroller/count").then(({status,data}) => {
        if (status == 200 || status ==201) {
          if (data.status) {
            this.total_barang = data.data;
          }
        }
      });
    },
     getpenjualan() {
      API.get("penjualancontroller/count").then(({status,data}) => {
        if (status == 200 || status ==201) {
          if (data.status) {
            this.total_penjualan = data.data;
          }
        }
      });
    },
    getpemasok() {
      API.get("pemasokcontroller/count").then(({status,data}) => {
        if (status == 200 || status ==201) {
          if (data.status) {
            this.total_pemasok = data.data;
          }
        }
      });
    },
     getpembelian() {
      API.get("pembeliancontroller/count").then(({status,data}) => {
        if (status == 200 || status ==201) {
          if (data.status) {
            this.total_pembelian = data.data;
          }
        }
      });
    },
  }
}
</script>
