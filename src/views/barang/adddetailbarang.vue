<template>
  <div>
    <form_barang></form_barang>
  </div>
</template>

<script>
export default {
  methods: {
    addDetailBarang() {
      API.post("", {}).then((result) => {
        console.log(result);
      });
    },
  },
};
</script>
