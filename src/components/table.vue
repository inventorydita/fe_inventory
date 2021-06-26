<template>
  <CCard>
    <CCardHeader>
      <h4>
        <b>{{ title }}</b>
      </h4>
      <div class="container">
        <div class="row">
          <div class="col-sm">
            <div class="form-group form-actions">
              <slot name="tambah"> </slot>
            </div>
          </div>

          <div class="col-sm d-flex justify-content-end">
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
  },
};
</script>
