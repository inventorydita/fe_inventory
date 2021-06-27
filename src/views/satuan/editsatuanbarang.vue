<template>
  <div>
    <form_satuan></form_satuan>
  </div>
</template>

<script>
export default {
  methods: {
    editSatuanBarang() {
      API.put("", {}).then((result) => {
        console.log(result);
      });
    },
  },
};
</script>
