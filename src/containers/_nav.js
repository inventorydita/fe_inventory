export default [
  {
    _name: "CSidebarNav",
    _children: [
      {
        _name: "CSidebarNavItem",
        name: "Beranda",
        to: "/dashboard",
        icon: "cilGrid",
        badge: {
          color: "primary",
          //text: "NEW"
        }
      },
      {
        _name: "CSidebarNavTitle",
        _children: ["Menu Utama"]
      },
      {
        _name: "CSidebarNavDropdown",
        name: "Master",
        route: "/master",
        icon: "cilLayers",
        items: [
          {
            name: "Pemasok",
            to: "/master/pemasok"
          },
          {
            name: "Detail Barang",
            to: "/master/detailbarang"
          },
          {
            name: "Satuan Barang",
            to: "/master/satuanbarang"
          },

        ]
      },
      // {
      //   _name: "CSidebarNavDropdown",
      //   name: "Barang Masuk",
      //   route: "/master/pembelian",
      //   icon: "cilArrowRight",
      //   items: [
      //     {
      //       name: "Barang Masuk",
      //       to: "/master/pembelian"
      //     },
      //   ]
      // },
      {
        _name: "CSidebarNavItem",
        name: "Barang Masuk",
        to: "/master/pembelian",
        icon: "cilChevronBottom",
      },
      {
        _name: "CSidebarNavDropdown",
        name: "Barang Keluar",
        route: "/master/penjualan",
        icon: "cilChevronTop",
        items: [
          {
            name: "Barang Keluar",
            to: "/master/penjualan"
          },
          {
            name: "Laporan Barang Keluar",
            to: "/master/laporanpenjualan"
          },
          


        ]
      },
      {
        _name: "CSidebarNavItem",
        name: "Stok Barang",
        to: "/master/stok",
        icon: "cil-basket",
      },

      {
        _name: "CSidebarNavItem",
        name: "Tambahan",
        to: "",
        icon: "",

      },
    ]
  }
];
