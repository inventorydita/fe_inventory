<template>
  <div>
    <form_pembelian></form_pembelian>
  </div>
</template>

<script>
export default {
  methods: {
    editPembelian() {
      API.put("", {}).then((result) => {
        console.log(result);
      });
    },
  },
};
</script>
