<template>
  <div>
    <form_pembelian></form_pembelian>
  </div>
</template>

<script>
export default {
  methods: {
    addPembelian() {
      API.post("", {}).then((result) => {
        console.log(result);
      });
    },
  },
};
</script>
