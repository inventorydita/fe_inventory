<template>
  <div>
    <form_stok></form_stok>
  </div>
</template>

<script>
export default {
  methods: {
    addStok() {
      API.post("", {}).then((result) => {
        console.log(result);
      });
    },
  },
};
</script>
