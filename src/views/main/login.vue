<template>
  <n-button type="primary" @click="push"> Primary </n-button>
</template>
<script setup lang="ts">
import { getCurrentInstance } from 'vue'
import { useRouter } from 'vue-router'
const ctx = getCurrentInstance()
const router = useRouter()
console.log()
const server = ctx?.appContext.config.globalProperties.$getService
server('login')

const push = () => {
  router.push('/home')
}
</script>

<style lang="scss" scoped></style>
