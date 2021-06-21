<template>
    <div>
    <CRow>
      <CCol lg="6">
        <CTableWrapper :items="getShuffledUsersData()">
          <template #header>
            <CIcon name="cil-grid"/> Simple Table
            <div class="card-header-actions">
              <a 
                href="https://coreui.io/vue/docs/components/nav" 
                class="card-header-action" 
                rel="noreferrer noopener" 
                target="_blank"
              >
                <small class="text-muted">docs</small>
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
import usersData from '../data/usersdata'

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
      return this.shuffleArray(usersData.slice(0))
    }
  }
}
</script>

