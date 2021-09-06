import "core-js/stable";
import Vue from "vue";
import App from "./App";
import router from "./router";
import CoreuiVue from "@coreui/vue";
import { iconsSet as icons } from "./assets/icons/icons.js";
import store from "./store";
import API from "./services/api.service";
import Notifications from "vue-notification";

import form_barang from "@/components/form_barang.vue";
import form_pemasok from "@/components/form_pemasok";
import form_pembelian from "@/components/form_pembelian";
import form_penjualan from "@/components/form_penjualan";
import form_satuan from "@/components/form_satuan";
import form_stok from "@/components/form_stok";
import table from "@/components/table";
import dialog_pick_barang from "@/components/dialog_pick_barang";
import dialog_pick_pemasok from "@/components/dialog_pick_pemasok";
import dialog_pick_satuan from "@/components/dialog_pick_satuan";

import { getUser } from "@/services/jwt.service";

Vue.component("form_barang", form_barang);
Vue.component("form_pemasok", form_pemasok);
Vue.component("form_pembelian", form_pembelian);
Vue.component("form_penjualan", form_penjualan);
Vue.component("form_satuan", form_satuan);
Vue.component("form_stok", form_stok);
Vue.component("data-table", table);
Vue.component("modal-barang", dialog_pick_barang);
Vue.component("modal-pemasok", dialog_pick_pemasok);
Vue.component("modal-satuan", dialog_pick_satuan);

Vue.config.performance = true;
Vue.use(CoreuiVue);
Vue.prototype.$log = console.log.bind(console);
API.init();
router.beforeEach((to, from, next) => {
  const user = getUser();
  if (to.meta.requiresAuth) {
    if (user) {
      next();
    } else {
      next({ path: "/auth/login" });
    }
  } else {
    next();
  }
  //next()
});
/*
or for SSR:
import Notifications from 'vue-notification/dist/ssr.js'
*/

Vue.use(Notifications);
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
