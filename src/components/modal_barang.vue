<template>
  <div>
    <CButton
      @click="onClose(false)"
      color="primary"
    >
      Open modal
    </CButton>
    <CModal
      title="Modal title"
      color="warning"
      :closeOnBackdrop="false"
      :show.sync="modal"
      update:show="onClose"
    >
      Tanah air ku tidak ku lupakan
    </CModal>
  </div>
</template>

<script>
export default {
  props:["show"],
  data () {
    return {
      modal: false
    }
  },
  watch:{
    show:function(newVal){
      this.modal = newVal
    },
    modal:function(newVal){
      this.onClose(newVal)
    }
  },
  methods:{
    onClose(newVal) {
      this.modal = newVal
      this.$emit('close',this.modal)
    }
  }

}
</script>