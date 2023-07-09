<template>
  <el-menu
    active-text-color="#ffd04b"
    :background-color="variables.menuBg"
    class="el-menu-vertical-demo"
    :default-active="defaultActive"
    text-color="#fff"
    router
    unique-opened
    :collapse="!$store.getters.siderType"
  >
    <el-sub-menu
      :index="item.id"
      v-for="(item, index) in menusList"
      :key="item.id"
    >
      <template #title>
        <el-icon>
          <component :is="iconList[index]"></component>
        </el-icon>
        <span>{{ item.authName }}</span>
      </template>
      <el-menu-item
        :index="'/' + it.path"
        v-for="it in item.children"
        :key="it.id"
        @click="savePath(it.path)"
      >
        <template #title>
          <el-icon>
            <component :is="icon"></component>
          </el-icon>
          <span>{{ it.authName }} </span>
        </template>
      </el-menu-item>
    </el-sub-menu>
  </el-menu>
</template>

<script setup>
import { ref } from 'vue'
import variables from '@/styles/variables.module.scss'

const iconList = ref(['user', 'setting', 'shop', 'tickets', 'pie-chart'])
const icon = ref('menu')
const defaultActive = ref(sessionStorage.getItem('path') || '/users')
const savePath = (path) => {
  sessionStorage.setItem('path', `/${path}`)
}
const menusList = [
  {
    authName: '用户管理',
    id: 125,
    children: [
      {
        authName: '用户列表',
        id: 10,
        path: 'users'
      }
    ],
    path: 'users'
  },
  {
    authName: '权限管理',
    id: 103,
    children: [
      {
        authName: '角色列表',
        id: 103,
        path: 'rights'
      },
      {
        authName: '权限列表',
        id: 103,
        path: 'rights'
      }
    ],
    path: 'rights'
  },
  {
    authName: '商品管理',
    id: 101,
    children: [
      {
        authName: '商品列表',
        id: 103,
        path: 'goods'
      },
      {
        authName: '分类参数',
        id: 103,
        path: 'params'
      },
      {
        authName: '商品分类',
        id: 103,
        path: 'categories'
      }
    ],
    path: 'goods'
  },
  {
    authName: '订单管理',
    id: 102,
    children: [
      {
        authName: '用户列表',
        id: 103,
        path: 'orders'
      }
    ],
    path: 'orders'
  },
  {
    authName: '数据统计',
    id: 145,
    children: [
      {
        authName: '用户列表',
        id: 103,
        path: 'reports'
      }
    ],
    path: 'reports'
  }
]
// console.log($sideBarWidth)
</script>

<style lang="scss" scoped></style>
