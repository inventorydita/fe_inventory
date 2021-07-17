export default [
  {
    _name: "CSidebarNav",
    _children: [
      {
        _name: "CSidebarNavItem",
        name: "Tentang Kami",
        to: "/dashboard",
        icon: "cil-heart",
        badge: {
          color: "primary",
          text: "NEW"
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
        icon: "cid-home",
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
      {
        _name: "CSidebarNavItem",
        name: "Pembelian Barang",
        to: "/master/pembelian",
        icon: "cil-basket",
      },
      {
        _name: "CSidebarNavItem",
        name: "Stok Barang",
        to: "/master/stok",
        icon: "cil-basket",
      },
      {
        _name: "CSidebarNavDropdown",
        name: "Penjualan Barang",
        route: "/master/penjualan",
        icon: "cib-cashapp",
        items: [
          {
            name: "Penjualan",
            to: "/master/penjualan"
          },
          {
            name: "Laporan Penjualan",
            to: "/master/laporanpenjualan"
          },


        ]
      },
    ]
  }
];
