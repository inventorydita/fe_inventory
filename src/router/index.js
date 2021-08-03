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
  mode: "history", // https://router.vuejs.org/api/#mode
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
      meta: {
        requiresAuth: true
      },
      children: [
        {
          path: "dashboard",
          name: "Dashboard",
          component: Dashboard,
          meta: {
            requiresAuth: true
          },
        },
        {
          path: "master",
          redirect: "/base/cards",
          name: "base",
          meta: {
            requiresAuth: true
          },
          component: {
            render(c) {
              return c("router-view");
            }
          },
          children: [
            {
              path: "pemasok",
              name: "pemasok",
              component: Datapemasok,
              meta: {
                requiresAuth: true
              },
            },
            {
              path: "addpemasok",
              name: "addpemasok",
              component: addpemasok,
              meta: {
                requiresAuth: true
              },
            },
            {
              path: "editpemasok",
              name: "editpemasok",
              component: editPemasok,
              meta: {
                requiresAuth: true
              },
            },
            {
              path: "detailbarang",
              name: "detailbarang",
              component: detailbarang,
              meta: {
                requiresAuth: true
              },
            },
            {
              path: "adddetailbarang",
              name: "adddetailbarang",
              component: adddetailbarang,
              meta: {
                requiresAuth: true
              },
            },
            {
              path: "editdetailbarang",
              name: "editdetailbarang",
              component: editdetailbarang,
              meta: {
                requiresAuth: true
              },
            },
            {
              path: "satuanbarang",
              name: "satuanbarang",
              component: satuanbarang,
              meta: {
                requiresAuth: true
              },
            },
            {
              path: "addsatuanbarang",
              name: "addsatuanbarang",
              component: addsatuanbarang,
              meta: {
                requiresAuth: true
              },
            },
            {
              path: "editsatuanbarang",
              name: "editsatuanbarang",
              component: editsatuanbarang,
              meta: {
                requiresAuth: true
              },
            },
            {
              path: "pembelian",
              name: "pembelian",
              component: pembelian,
              meta: {
                requiresAuth: true
              },
            },
            {
              path: "addpembelian",
              name: "addpembelian",
              component: addpembelian,
              meta: {
                requiresAuth: true
              },
            },
            {
              path: "editpembelian",
              name: "editpembelian",
              component: editpembelian,
              meta: {
                requiresAuth: true
              },
            },
            {
              path: "stok",
              name: "stok",
              component: stok,
              meta: {
                requiresAuth: true
              },
            },
            {
              path: "addstok",
              name: "addstok",
              component: addstok,
              meta: {
                requiresAuth: true
              },
            },
            {
              path: "editstok",
              name: "editstok",
              component: editstok,
              meta: {
                requiresAuth: true
              },
            },
            {
              path: "penjualan",
              name: "penjualan",
              component: penjualan,
              meta: {
                requiresAuth: true
              },
            },
            {
              path: "addpenjualan",
              name: "addpenjualan",
              component: addpenjualan,
              meta: {
                requiresAuth: true
              },
            },
            {
              path: "editpenjualan",
              name: "editpenjualan",
              component: editpenjualan,
              meta: {
                requiresAuth: true
              },
            },
            {
              path: "laporanpenjualan",
              name: "laporanpenjualan",
              component: laporanpenjualan,
              meta: {
                requiresAuth: true
              },
            },



          ]
        }
      ]
    },
    {
      path: "/auth",
      redirect: "/pages/login",
      name: "Pages",
      component: {
        render(c) {
          return c("router-view");
        }
      },
      children: [
        {
          path: "",
          redirect: 'login'
        },
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
