<template>
  <CCard>
    <CCardHeader>
      <h4>
        <b>{{ title }}</b>
      </h4>
      <div class="container">
        <div class="row">
          <div v-show="buttonadd" class="col-sm-12">
            <div class="form-group form-actions">
              <slot name="tambah"> </slot>
            </div>
          </div>

          <div  :class="buttonadd ? 'col-sm-12 d-flex justify-content-end':''">
            <slot name="search"> </slot>
          </div>
        </div>
      </div>
    </CCardHeader>
    <CCardBody>
      <CDataTable
        :hover="hover"
        :striped="striped"
        :border="border"
        :fixed="fixed"
        :items="items"
        :fields="headers"
        :items-per-page="small ? 15 : 10"
        :dark="dark"
        pagination
      >
        <template #status="{item}">
          <td>
            <CBadge>{{ item.status }}</CBadge>
          </td>
        </template>
        <template #actions="{item, index}">
          <td class="py-2">
            <CButton
                color="primary"
                variant="outline"
                square
                size="sm"

            >
             Ini {{item}}{{index}}
            </CButton>
          </td>
        </template>
      </CDataTable>
    </CCardBody>
  </CCard>
</template>

<script>
export default {
  name: "Table",
  props: {
    items: Array,
    headers: Array,
    hover: Boolean,
    striped: Boolean,
    border: Boolean,
    small: Boolean,
    fixed: Boolean,
    dark: Boolean,
    title: String,
    buttonadd:{
      type:Boolean,
      default:true
    }
  },
  methods:{
    onDetail(item){
      this.$emit("detail",item)
    },
    onDelete(item){
      this.$emit("delete",item)
    },
    onEdit(item){
      this.$emit("edit",item)
    }
  }
};
</script>
