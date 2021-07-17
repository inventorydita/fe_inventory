import Vue from "vue";
import Router from "vue-router";

// Containers
const TheContainer = () => import("@/containers/TheContainer");

// Views
const Dashboard = () => import("@/views/Dashboard");
const Login = () => import("@/views/pages/Login");
const Register = () => import("@/views/pages/Register");

const Datapemasok = () => import("@/views/pemasok/Pemasok");
const addpemasok = () => import("@/views/pemasok/addPemasok");
const editPemasok = () => import("@/views/pemasok/editPemasok");

const detailbarang = () => import("@/views/barang/detailbarang");
const adddetailbarang = () => import("@/views/barang/adddetailbarang");
const editdetailbarang = () => import("@/views/barang/editdetailbarang");

const satuanbarang = () => import("@/views/satuan/satuanbarang");
const addsatuanbarang = () => import("@/views/satuan/addsatuanbarang");
const editsatuanbarang = () => import("@/views/satuan/editsatuanbarang");

const pembelian = () => import("@/views/pembelian/pembelian");
const addpembelian = () => import("@/views/pembelian/addpembelian");
const editpembelian = () => import("@/views/pembelian/editpembelian");

const stok = () => import("@/views/stok/stok");
const addstok = () => import("@/views/stok/addstok");
const editstok = () => import("@/views/stok/editstok");

const penjualan = () => import("@/views/penjualan/penjualan");
const addpenjualan = () => import("@/views/penjualan/addpenjualan");
const editpenjualan = () => import("@/views/penjualan/editpenjualan");
const laporanpenjualan = () => import("@/views/penjualan/laporanpenjualan");



Vue.use(Router);

export default new Router({
  mode: "hash", // https://router.vuejs.org/api/#mode
  linkActiveClass: "active",
  scrollBehavior: () => ({ y: 0 }),
  routes: configRoutes()
});

function configRoutes() {
  return [
    {
      path: "/",
      redirect: "/dashboard",
      name: "Home",
      component: TheContainer,
      children: [
        {
          path: "dashboard",
          name: "Dashboard",
          component: Dashboard
        },
        {
          path: "master",
          redirect: "/base/cards",
          name: "base",
          component: {
            render(c) {
              return c("router-view");
            }
          },
          children: [
            {
              path: "pemasok",
              name: "pemasok",
              component: Datapemasok
            },
            {
              path: "addpemasok",
              name: "addpemasok",
              component: addpemasok
            },
            {
              path: "editpemasok",
              name: "editpemasok",
              component: editPemasok
            },
            {
              path: "detailbarang",
              name: "detailbarang",
              component: detailbarang
            },
            {
              path: "adddetailbarang",
              name: "adddetailbarang",
              component: adddetailbarang
            },
            {
              path: "editdetailbarang",
              name: "editdetailbarang",
              component: editdetailbarang
            },
            {
              path: "satuanbarang",
              name: "satuanbarang",
              component: satuanbarang
            },
            {
              path: "addsatuanbarang",
              name: "addsatuanbarang",
              component: addsatuanbarang
            },
            {
              path: "editsatuanbarang",
              name: "editsatuanbarang",
              component: editsatuanbarang
            },
            {
              path: "pembelian",
              name: "pembelian",
              component: pembelian
            },
            {
              path: "addpembelian",
              name: "addpembelian",
              component: addpembelian
            },
            {
              path: "editpembelian",
              name: "editpembelian",
              component: editpembelian
            },
            {
              path: "stok",
              name: "stok",
              component: stok
            },
            {
              path: "addstok",
              name: "addstok",
              component: addstok
            },
            {
              path: "editstok",
              name: "editstok",
              component: editstok
            },
            {
              path: "penjualan",
              name: "penjualan",
              component: penjualan
            },
            {
              path: "addpenjualan",
              name: "addpenjualan",
              component: addpenjualan
            },
            {
              path: "editpenjualan",
              name: "editpenjualan",
              component: editpenjualan
            },
            {
              path: "laporanpenjualan",
              name: "laporanpenjualan",
              component: laporanpenjualan
            },

          ]
        }
      ]
    },
    {
      path: "/pages",
      redirect: "/pages/login",
      name: "Pages",
      component: {
        render(c) {
          return c("router-view");
        }
      },
      children: [
        {
          path: "login",
          name: "Login",
          component: Login
        },
        {
          path: "register",
          name: "Register",
          component: Register
        }
      ]
    }
  ];
}
