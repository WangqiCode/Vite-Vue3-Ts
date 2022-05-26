<template>
  <n-config-provider :theme="theme">
    <!-- <n-button @click="theme = darkTheme"> 深色 </n-button>
    <n-button @click="theme = null"> 浅色 </n-button> -->
    <n-loading-bar-provider>
      <naive-provider>
        <router-view />
      </naive-provider>
    </n-loading-bar-provider>
  </n-config-provider>
</template>
<script setup lang="ts">
import { darkTheme } from 'naive-ui'
import type { GlobalTheme } from 'naive-ui'
import { ref } from 'vue'
const theme = ref<GlobalTheme | null>(null)
</script>

<style></style>
