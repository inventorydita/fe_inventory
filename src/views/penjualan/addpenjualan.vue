<template>
  <div>
    <form_penjualan></form_penjualan>
  </div>
</template>

<script>
export default {
  methods: {
    addPenjualan() {
      API.post("", {}).then((result) => {
        console.log(result);
      });
    },
  },
};
</script>
