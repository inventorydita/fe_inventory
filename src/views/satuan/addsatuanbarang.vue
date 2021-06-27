<template>
  <div>
    <form_satuan></form_satuan>
  </div>
</template>

<script>
export default {
  methods: {
    addSatuanBarang() {
      API.post("", {}).then((result) => {
        console.log(result);
      });
    },
  },
};
</script>
