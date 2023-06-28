<template>
  <el-dialog
    :model-value="dialogVisible"
    title="添加用户"
    width="40%"
    @close="handleClose"
  >
    <el-form ref="formRef" :model="form" label-width="70px" :rules="rules">
      <el-form-item label="用户名" prop="username">
        <el-input v-model="form.username" />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="form.password" type="password" />
      </el-form-item>
      <el-form-item label="邮箱" prop="email">
        <el-input v-model="form.email" />
      </el-form-item>
      <el-form-item label="手机" prop="mobile">
        <el-input v-model="form.mobile" />
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="handleClose">取消</el-button>
        <el-button type="primary" @click="handleConfirm"> 确认 </el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script setup>
import { defineEmits, ref } from 'vue'
const emits = defineEmits(['update:modelValue'])
const handleClose = () => {
  emits('update:modelValue', false)
}

const handleConfirm = () => {
  handleClose()
}
const formRef = ref(null)

const form = ref({
  username: '',
  password: '',
  email: '',
  mobile: ''
})

const rules = ref({
  username: [
    { required: true, message: 'Please input Activity name', trigger: 'blur' }
  ],
  password: [
    {
      required: true,
      message: 'Please input Activity name',
      trigger: 'blur'
    }
  ],
  email: [
    { required: true, message: 'Please input Activity name', trigger: 'blur' },
    {
      type: 'email',
      message: '输入正确邮箱',
      trigger: ['blur', 'change']
    }
  ],
  mobile: [
    { required: true, message: 'Please input Activity name', trigger: 'blur' },
    { pattern: /^1[3456789]\d{9}$/, message: '输入正确手机号', trigger: 'blur' }
  ]
})
</script>

<style lang="scss" scoped></style>
