import { ElMessage } from 'element-plus'
service.interceptors.response.use(
    (response) => {
      const { data, meta } = response.data
      if (meta.status === 200 || meta.status === 201) {
        return data
      } else {
        ElMessage.error(meta.msg)
        return Promise.reject(new Error(meta.msg))
      }
    },
    (error) => {
      console.log(error.response)
      error.response && ElMessage.error(error.response.data)
      return Promise.reject(new Error(error.response.data))
    }
  )