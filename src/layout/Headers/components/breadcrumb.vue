<template>
  <el-breadcrumb separator="/">
    <el-breadcrumb-item v-for="(item, index) in breadcrumbList" :key="index">
      <span class="no-redirect" v-if="index === breadcrumbList.length - 1">{{
        item.name
      }}</span>
      <span class="redirect" v-else @click="handleRedirect(item.path)"
        >{{ item.name }}
      </span>
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script setup>
import { watch, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
const route = useRoute()
const router = useRouter()
console.log(route.matched)
const breadcrumbList = ref([])
const inBreadcrumbList = () => {
  breadcrumbList.value = route.matched
  console.log(breadcrumbList.value)
}

const handleRedirect = (path) => {
  router.push(path)
}
watch(
  route,
  () => {
    inBreadcrumbList()
  },
  { deep: true, immediate: true }
)
</script>

<style lang="scss" scoped>
.no-redirect {
  color: #97a8be;
  cursor: text;
}
.redirect {
  color: #666;
  font-weight: 600;
  cursor: pointer;
  &:hover {
    color: $menuBg;
  }
}
</style>
