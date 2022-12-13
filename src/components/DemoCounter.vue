<script lang="ts" setup>
import { useGlobalStore } from '@store/global.store'

const globalStore = useGlobalStore()
const { count } = storeToRefs(globalStore)
</script>

<template>
  <div>
    <h2>Counter</h2>
    <p>Count: {{ count }}</p>
    <button @click="globalStore.increment">Increment</button>
    <button @click="globalStore.decrement">Decrement</button>
  </div>
</template>
