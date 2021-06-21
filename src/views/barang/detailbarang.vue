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
                <CButton   color="primary">
                  Tambah Data
                </CButton>
              </div>

          <CForm inline>
            <CInput
              class="mr-sm-2"
              placeholder="Search"
              size="sm"
            />
            
            <CButton color="outline-success" class="my-2 my-sm-0" type="submit">Search</CButton>
          </CForm>
        
      
    
    
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
        
        <CPagination
          align="center"
          :pages="10"
          :active-page.sync="currentPage"
        />
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

