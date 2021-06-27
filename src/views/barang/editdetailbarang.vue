<template>
  <div>
    <form_barang></form_barang>
  </div>
</template>

<script>
export default {
  methods: {
    editDetailBarang() {
      API.put("", {}).then((result) => {
        console.log(result);
      });
    },
  },
};
</script>
