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
import API from "../services/api.service"
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
      todo:"",
      todos:[]
    };
  },
  created() {
    this.getTodo()
  },
  methods:{
    getTodo(){
      API.get("todolistcontroller".then(({ status, data}) => {
        if (status == 200 || status == 201) {
          if (data.status) {
            this.items = data.data;
          }
        }
      }));
    },
    onAddTodo(){
      //bikin todo ke back end

      API.post("todolistcontroller", {
        nama:this.todo
      })
      .then(({ status, data}) => {
        if (status === 200 || status === 201) {
        if (data.status) {
          this.$notify({
            group: "notif",
            type: "success",
            title: "informasi",
            text: "data telah berhasil",
          });

        } else {
          //gagal
          this.$notify({
                group: "notif",
                type: "error",
                title: "Perhatian",
                text: "Gagal menambah data",
          });
        }
        } else {
          //gagal
                this.$notify({
                group: "notif",
                type: "error",
                title: "Perhatian",
                text: "Gagal menambah data",
           });
        }
      })
      .catch(() => {
          //error
          this.$notify({
            group: "notif",
            type: "error",
            title: "Perhatian",
            text: "Gagal menambah data",
          });
        });
    },

    onSelesai(id){
    //status todo selesai
    API.put("todolistcontroller", {
      id_todolist:id,
    })
      .then(({ status, data}) => {
        if (status === 200 || status === 201) {
        if (data.status) {
          this.$notify({
            group: "notif",
            type: "success",
            title: "informasi",
            text: "data telah berhasil",
          });

        } else {
          //gagal
          this.$notify({
                group: "notif",
                type: "error",
                title: "Perhatian",
                text: "Gagal menambah data",
          });
        }
        } else {
          //gagal
                this.$notify({
                group: "notif",
                type: "error",
                title: "Perhatian",
                text: "Gagal menambah data",
           });
        }
      })
      .catch(() => {
          //error
          this.$notify({
            group: "notif",
            type: "error",
            title: "Perhatian",
            text: "Gagal menambah data",
          });
        });

    },

    onHapus(id){
    //bikin hapus todo
 API.delete(`todolistcontroller/${id}`)
        .then(({ status, data }) => {
          if (status == 200 || status == 201) {
            if (data.status) {
              this.$notify({
                // ketika data berhasil dihapus maka muncul notif
                group: "notif",
                type: "success",
                title: "Informasi",
                text: "Data telah berhasil dihapus",
              });
              this.getDatatodolist();
            } else {
              // ketika data gagal dihapus maka muncul notif
              this.$notify({
                group: "notif",
                type: "error",
                title: "Perhatian",
                text: "Data gagal untuk dihapus",
              });
            }
          } else {
            // ketika data gagal dihapus maka muncul notif
            this.$notify({
              group: "notif",
              type: "error",
              title: "Perhatian",
              text: "Data gagal untuk dihapus",
            });
          }

          //tambahin ini buat notif ketika error 500 dll dari back end
        })
        .catch(() => {
          this.$notify({
            group: "notif",
            type: "error",
            title: "Perhatian",
            text: "Data gagal untuk dihapus",
          });
        });
    }
  }
};
</script>
