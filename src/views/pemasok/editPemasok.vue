<template>
  <div>
    <form_pemasok></form_pemasok>
  </div>
</template>

<script>
export default {
  methods: {
    editPemasok() {
      API.put("", {}).then((result) => {
        console.log(result);
      });
    },
  },
};
</script>
