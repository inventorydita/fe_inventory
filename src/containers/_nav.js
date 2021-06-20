export default [
  {
    _name: "CSidebarNav",
    _children: [
      {
        _name: "CSidebarNavItem",
        name: "Dashboard",
        to: "/dashboard",
        icon: "cil-speedometer",
        badge: {
          color: "primary",
          text: "NEW"
        }
      },
      {
        _name: "CSidebarNavTitle",
        _children: ["Components"]
      },
      {
        _name: "CSidebarNavDropdown",
        name: "Master",
        route: "/master",
        icon: "cil-puzzle",
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
        name: "Pembelian",
        to: "/pembelian",
        icon: "cil-basket",
      },
      {
        _name: "CSidebarNavDropdown",
        name: "Penjualan",
        route: "/penjualan",
        icon: "cib-cashapp",
        items: [
          {
            name: "Laporan Penjualan",
            to: "/penjualan/laporanpenjualan"
          },
          
         
        ]
      },
    ]
  }
];
