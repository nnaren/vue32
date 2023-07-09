<template>
    <el-card class="rights">
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
      <el-image style="width: 100px; height: 100px" :src="url" :fit="fit" />
      <h1  >暗夜猎手</h1>
      <h2 >薇恩</h2>
      <div >
        <div class="item_tag">
          <span>物理</span>
        </div>
        <div class="item_desr">
          <span >10</span>
        </div>
      </div>
      <div >
        <div class="item_tag">
          <span>法术</span>
        </div>
        <div class="item_desr">
          <span >10</span>
        </div>
      </div>
      <div>法术: 1</div>
      <div>攻速: 0.6580</div>
      <div>移动速度: 330</div>
      <div>物防: 23</div>
      <div>魔防: 30</div>
    </div>
  </el-card>
</template>

<script setup>
import { ref } from 'vue'
const queryForm = ref({
  query: '',
  pagenum: 1,
  pagesize: 10
})
const url =
  'https://game.gtimg.cn/images/lol/act/img/champion/Vayne.png'
</script>

<style lang="scss" scoped>
.rights {
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
      // .item {
      // margin-bottom: 10px;
      // }
      .item_tag{
      float:left;
      text-align:left;
      }
      .item_desr{
      margin-left: 10%;
      min-height: 30px;
      text-align:left;
      }
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
