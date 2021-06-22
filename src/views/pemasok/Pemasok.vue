<template>
  <div>
    <CRow>
      <CCol lg="12">
        <CTableWrapper :items="getShuffledUsersData()">
          <template #header>
            <CIcon name="" />
            <h4 class="ml-3">
              <b>Pemasok</b>
            </h4>

            <div class="container">
              <div class="row">
                <div class="col-sm">
                  <div class="form-group form-actions">
                    <CButton
                      class="ml-0"
                      @click="$router.push({ path: '/master/addpemasok' })"
                      color="primary"
                    >
                      Tambah Data
                    </CButton>
                  </div>
                </div>

                <div class="col-sm d-flex justify-content-end">
                  <CForm inline>
                    <CInput class="ml-12 sm-6" placeholder="Search" size="sm" />

                    <CButton color="outline-success" class="ml-2" type="submit"
                      >Search</CButton
                    >
                  </CForm>
                </div>
              </div>
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

        <CPagination align="center" :pages="10" />
      </CCol>
    </CRow>
  </div>
</template>

<script>
import CTableWrapper from "/src/components/table.vue";

export default {
  name: "Pemasok",
  components: { CTableWrapper },
  methods: {
    shuffleArray(array) {
      for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
      return array;
    },

    getShuffledUsersData() {
      return [];
    },
  },
};
</script>

