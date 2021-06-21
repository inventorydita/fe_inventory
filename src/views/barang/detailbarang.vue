<template>
    <div>
    <CRow>
      <CCol lg="12">
        <CTableWrapper :items="getShuffledUsersData()">
          <template #header>
            <CIcon name=""/> 
            <h4>
            <b>Detail Barang</b>
            </h4>
            <div class="form-group form-actions">
                <CButton type="submit" size="" color="primary">
                  Submit
                </CButton>
              </div>
            <div class="card-header-actions">
              <a 
                href="https://coreui.io/vue/docs/components/nav" 
                class="card-header-action" 
                rel="noreferrer noopener" 
                target="_blank"
              >
                <small class="text-muted"></small>
              </a>
            </div>
          </template>
        </CTableWrapper>
      </CCol>
    </CRow>
    </div>
</template>

<script>
import CTableWrapper from '/src/components/table.vue'


export default {
  name: 'detailbarang',
  components: { CTableWrapper },
  methods: {
    shuffleArray (array) {
      for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1))
        let temp = array[i]
        array[i] = array[j]
        array[j] = temp
      }
      return array
    },

    getShuffledUsersData () {
      return []

    }
  }
}
</script>

