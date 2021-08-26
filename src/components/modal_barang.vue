<template>
  <div>
    <CButton
      @click="modal = true"
      color="primary"
    >
      Open modal
    </CButton>
    <CModal
      title="Modal title"
      color="warning"
      :show.sync="modal"
    >
      Tanah air ku tidak ku lupakan
    </CModal>
  </div>
</template>

<script>
export default {
  data () {
    return {
      modal: false
    }
  }
}
</script>