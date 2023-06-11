<template>
  <el-menu
    active-text-color="#ffd04b"
    :background-color="variables.menuBg"
    class="el-menu-vertical-demo"
    default-active="defaultActive"
    text-color="#fff"
    router
    unique-opened
    :collapse="!$store.getters.siderType"
  >
    <el-sub-menu :index="item.id" v-for="item in menusList" :key="item.id">
      <template #title>
        <el-icon>
          <location />
        </el-icon>
        <span>{{ item.authName }}</span>
      </template>
      <el-menu-item
        :index="'/' + it.path"
        v-for="it in item.children"
        :key="it.id"
      >
        {{ it.authName }}
      </el-menu-item>
    </el-sub-menu>
  </el-menu>
</template>

<script setup>
import variables from '@/styles/variables.module.scss'

const menusList = [
  {
    authName: '用户管理',
    id: 125,
    children: [
      {
        authName: '用户列表',
        id: 103,
        path: 'users'
      }
    ],
    path: 'users'
  }
]
// console.log($sideBarWidth)
</script>

<style lang="scss" scoped></style>
