<template>
  <el-card class="users">
    <div class="top">
      <div class="search_box">
        <el-input
          v-model="queryForm.query"
          clearable
          placeholder="请输入用户名"
        />
      </div>
      <el-button type="primary" :icon="Search" @click="getUsersTableData"
        >查询</el-button
      >
      <el-button type="primary" :icon="Plus" @click="handleDialogValue()"
        >新增用户</el-button
      >
    </div>
    <div class="bottom">
      <el-table
        class="users_table"
        :data="tableData"
        border
        style="width: 100%"
      >
        <el-table-column
          align="center"
          :key="index"
          v-for="(item, index) in options"
          :prop="item.prop"
          :label="item.label"
          :width="item.width"
        >
          <template v-slot="{ row }" v-if="item.prop == 'mg_state'">
            <el-switch v-model="row.mg_state" @change="changeState(row)" />
          </template>
          <template v-slot="{ row }" v-else-if="item.prop == 'create_time'">
            {{ $filters.filterTimes(row.create_time) }}
          </template>
          <template #default="{ row }" v-else-if="item.prop == 'action'">
            <el-button
              size="small"
              :icon="Edit"
              type="primary"
              @click="handleDialogValue(row)"
            ></el-button>
            <el-button size="small" :icon="Setting" type="warning"></el-button>
            <el-button
              size="small"
              :icon="Delete"
              type="danger"
              @click="delUser(row)"
            ></el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        background
        v-model:currentPage="queryForm.pagenum"
        v-model:page-size="queryForm.pagesize"
        :page-sizes="[2, 5, 10, 20]"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      />
    </div>
    <Dialog v-model="dialogVisible" v-if="dialogVisible" />
  </el-card>
</template>

<script setup>
import { Search, Edit, Setting, Delete, Plus } from '@element-plus/icons-vue'
import { ref } from 'vue'
import { options } from './options'
// import { changeUserState, deleteUser } from '@/api/users'
import { ElMessage, ElMessageBox } from 'element-plus'
import 'element-plus/es/components/message/style/css'
import 'element-plus/es/components/message-box/style/css'

import Dialog from './components/dialog.vue'

const dialogVisible = ref(false)
// let dialogTitle = ref('新增用户')
const queryForm = ref({
  query: '',
  pagenum: 1,
  pagesize: 10
})
const total = ref(2)
const tableData = ref([])
// let dialogTableValue = ref({})
const nrUsers = [
  {
    id: 592,
    username: '老于',
    email: 'naren@33.com',
    mobile: '18888888888',
    mg_state: true,
    role_name: '主管',
    create_time: 1486721486688
  },
  {
    id: 593,
    username: 'admin',
    email: 'naren@33.com',
    mobile: '18888888888',
    mg_state: true,
    role_name: '业务员',
    create_time: 1486721486688
  }
]
const getUsersTableData = () => {
  // let res = await getUsersList(queryForm)
  tableData.value = nrUsers
  total.value = 5
}
getUsersTableData()
// const handleSizeChange = (pagesize) => {
//   queryForm.pagesize = pagesize
//   getUsersTableData()
// }
// const handleCurrentChange = (pagenum) => {
//   queryForm.pagenum = pagenum
//   getUsersTableData()
// }
const changeState = (row) => {
  console.log(row)
  ElMessage({
    message: '更新成功',
    type: 'success'
  })
}

const handleDialogValue = () => {
  dialogVisible.value = true
  // dialogTitle.value = '新增用户'
  // dialogTableValue.value = {}
}

const delUser = (row) => {
  ElMessageBox.confirm('您确定要删除改数据吗?', '删除', {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    type: 'warning'
  })
    .then(async () => {
      // await deleteUser(row.id)
      getUsersTableData()
      ElMessage({
        type: 'success',
        message: '删除成功！'
      })
    })
    .catch(() => {
      ElMessage({
        type: 'info',
        message: '取消删除！'
      })
    })
}
</script>

<style lang="scss" scoped>
.users {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  :deep(.el-card__body) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    .top {
      flex-shrink: 0;
      width: 100%;
      height: 60px;
      display: flex;
      align-items: center;
      .search_box {
        width: 300px;
        margin-right: 15px;
      }
    }
    .bottom {
      width: 100%;
      flex: 1;
      display: flex;
      flex-direction: column;
      .users_table {
        flex: 1;
      }
      .el-pagination {
        justify-content: flex-end;
      }
    }
  }
}
</style>
