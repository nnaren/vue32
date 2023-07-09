<template>
  <div>goods</div>
  <div class="demo-progress">
    <el-progress
      :percentage="percentage"
      :stroke-width="15"
      status="exception"
      striped
      striped-flow
      :duration="10"
    />
    <el-button-group>
      <el-button :icon="Minus" @click="decrease" />
      <el-button type="primary" @click="doDownload">Primary</el-button>
      <el-button round type="warning" :icon="Star" />
      <el-button :icon="Plus" @click="increase" />
    </el-button-group>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Minus, Plus, Star } from '@element-plus/icons-vue'
import { saveAs } from 'file-saver'
import axios from 'axios'

const percentage = ref(70)
// const duration = computed(() => Math.floor(percentage.value / 10))
const increase = () => {
  percentage.value += 10
  if (percentage.value > 100) {
    percentage.value = 100
  }
}
const decrease = () => {
  percentage.value -= 10
  if (percentage.value < 0) {
    percentage.value = 0
  }
}

const doDownload = () => {
  console.log('doDownload')
  axios
    .get('http://192.168.3.204:8083/download', { responseType: 'blob' })
    .then((res) => {
      saveAs(res.data, 'test.txt')
    })
}
</script>

<style lang="scss" scoped>
.demo-progress .el-progress--line {
  margin-bottom: 15px;
  width: 350px;
}

.el-button.is-circle {
  aspect-ratio: 1/1;
  border-radius: 50%;
  padding: 8px;
}
</style>
