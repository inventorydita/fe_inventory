<template>
  <div>
    <form_pemasok></form_pemasok>
  </div>
</template>

<script>
export default {
  methods: {
    addPemasok() {
      API.post("", {}).then((result) => {
        console.log(result);
      });
    },
  },
};
</script>
