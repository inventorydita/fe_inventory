import "core-js/stable";
import Vue from "vue";
import App from "./App";
import router from "./router";
import CoreuiVue from "@coreui/vue";
import { iconsSet as icons } from "./assets/icons/icons.js";
import store from "./store";
import API from "./services/api.service"

import form_barang from "@/components/form_barang.vue";
import form_pemasok from "@/components/form_pemasok";
import form_pembelian from "@/components/form_pembelian";
import form_penjualan from "@/components/form_penjualan";
import form_satuan from "@/components/form_satuan";
import form_stok from "@/components/form_stok";
import table from "@/components/table";
import dialog_pick_barang from "@/components/dialog_pick_barang";

Vue.component("form_barang", form_barang);
Vue.component("form_pemasok", form_pemasok);
Vue.component("form_pembelian", form_pembelian);
Vue.component("form_penjualan", form_penjualan);
Vue.component("form_satuan", form_satuan);
Vue.component("form_stok", form_stok);
Vue.component("data-table", table);
Vue.component("dialog-pick-barang", dialog_pick_barang);

Vue.config.performance = true;
Vue.use(CoreuiVue);
Vue.prototype.$log = console.log.bind(console);
API.init();

new Vue({
  el: "#app",
  router,
  store,
  icons,
  template: "<App/>",
  components: {
    App,
  },
});
