<template>
  <div class="app-container">
    <!-- Note that row-key is necessary to get a correct row order. -->
    <el-table :data="list" v-loading="listLoading" border fit highlight-current-row style="width: 100%">
      <el-table-column align="center" label="ID">
        <template v-slot="{row}">
          <span>{{ row.id }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="name">
        <template v-slot="{row}">
          <span>{{ row.name }}</span>
        </template>
      </el-table-column>
      <el-table-column >
        <template v-slot="scope">
          <el-button size="mini" type="primary">編輯</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>

export default {
  name: 'demo'
}
</script>

<script>

export default {
  name: 'demo',
  filters: {
    statusFilter(status) {
      const statusMap = {
        published: 'success',
        draft: 'info',
        deleted: 'danger'
      }
      return statusMap[status]
    }
  },
  data() {
    return {
      list: null,
      listLoading: true,
      testlist:[
        {
          id : '1',
          name : 'jsdsa'
        }
      ]
    }
  },
  created() {
    this.getList()
  },
  methods: {
    async getList() {
      this.$axios.get('/parameter/query').then(res => {
          this.list = res.data.data.rows
          console.log(this.list)
        })
        .catch(failResponse => {

        })
    }
  }
}
</script>

<style scoped>

</style>
