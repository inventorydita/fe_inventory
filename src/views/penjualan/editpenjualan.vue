<template>
  <div>
    <form_penjualan></form_penjualan>
  </div>
</template>

<script>
export default {
  methods: {
    editPenjualan() {
      API.put("", {}).then((result) => {
        console.log(result);
      });
    },
  },
};
</script>
