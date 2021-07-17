<template>
  <div>
    <form_stok></form_stok>
  </div>
</template>

<script>
export default {
  methods: {
    editStok() {
      API.put("", {}).then((result) => {
        console.log(result);
      });
    },
  },
};
</script>
