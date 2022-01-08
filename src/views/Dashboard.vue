
<template>
  <div>
    <WidgetsDropdown />
    <CCard>
      <CCardHeader>To Do List</CCardHeader>
      <CCardBody>
        <CListGroup>

            <CAlert v-for="(item,index) in todos" :key="index" :color="getColor(item.selesai)" class="d-flex align-items-center">
               <div>
                {{item.nama}}
              </div>
              <CButtonGroup class="me-2 ml-3"  role="group" aria-label="Second group">
                <CButton @click="onSelesai(item.id_todolist)" color="secondary">Selesai</CButton>
                <CButton class="ml-3" @click="onHapus(item.id_todolist)" color="secondary">Hapus</CButton>
              </CButtonGroup>
            </CAlert>
        </CListGroup>
        </CCardBody>
      <CCardFooter class="text-muted">
        <CForm class="row g-3">
          <div class="col-auto">
            <CInput v-model="todo" type="text" id="inputPassword2" placeholder="Nama Barang"/>
          </div>
          <div class="col-auto">
            <CButton @click="onAddTodo" type="button" class="mb-3" color="secondary">Simpan</CButton>
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
    getColor(status){
      if(status == 0) return 'primary'
      return 'success'
    },
    getTodo(){
      API.get("todolistcontroller")
          .then(({ status, data}) => {
            if (status == 200 || status == 201) {
              if (data.status) {
                this.todos = data.data;
              }
            }
          });
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
        this.getTodo();
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
    API.put("todolistcontroller/selesai", {
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
        this.getTodo();
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
            
              this.getTodo();
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
