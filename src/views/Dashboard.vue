<template>
  <div>
    <WidgetsDropdown />
    <CCard>
      <CCardHeader>Todo</CCardHeader>
      <CCardBody>
        <CListGroup>

            <CAlert color="primary" class="d-flex align-items-center">
               <div>
                An example alert with an icon
              </div>
              <CButtonGroup class="me-2" role="group" aria-label="Second group">
                <CButton color="secondary">5</CButton>
                <CButton color="secondary">6</CButton>
              </CButtonGroup>
            </CAlert>

        </CListGroup>
        </CCardBody>
      <CCardFooter class="text-muted">
        <CForm class="row g-3">
          <div class="col-auto">
            <CInput v-model="todo" type="text" id="inputPassword2" placeholder="Todo baru"/>
          </div>
          <div class="col-auto">
            <CButton @click="onAddTodo" type="button" class="mb-3">Simpan</CButton>
          </div>
        </CForm>
      </CCardFooter>
    </CCard>
      
  </div>

  
</template>

<script>
import {CAlert,CInput} from '@coreui/vue'

import WidgetsDropdown from "./widgets/WidgetsDropdown";

export default {
  name: "Dashboard",
  components: {
    CAlert,
    CInput,
    WidgetsDropdown,
  },
  data() {
    return {
      todo:""
    };
  },
  methods:{
    onAddTodo(){
      //bikin todo ke back end
    },
    onSelesai(){
//status todo selesai
    },
    onHapus(){
//bikin hapus todo
    }
  }
};
</script>
