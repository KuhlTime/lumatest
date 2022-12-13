<script setup lang="ts">
import { router } from '@pages/router'

function isRoute(path: string) {
  return router.currentRoute.value.path === path
}

function onRouteChange(path: string) {
  router.push({ path })
}
</script>

<template>
  <HStack expand>
    <PaddingBox class="left full-height">
      <i-my-kt-logo
        width="24px"
        height="24px"
      />
      <p>{{ $t('message.hello') }}</p>
      <VStack :gap="12">
        <div
          v-for="route in $router.options.routes"
          :key="route.path"
        >
          <button
            :class="{ 'current-route': isRoute(route.path) }"
            @click="onRouteChange(route.path)"
          >
            {{ route.name ?? 'Unknown' }}
          </button>
        </div>
      </VStack>
    </PaddingBox>
    <router-view></router-view>
  </HStack>
</template>

<style lang="scss" scoped>
.full-height {
  height: 100%;
}

.left {
  background-color: rgb(black, 0.02);
  border-right: 1px solid rgb(black, 0.1);
  padding: 24px;
}

button {
  border: none;
  outline: none;
  background-color: rgb(black, 0.6);
  color: #fff;
  border-radius: 4px;
  padding: 8px 12px;
  cursor: pointer;

  &:hover {
    background-color: rgb(black, 0.7);
  }

  &:active {
    background-color: rgb(black, 0.8);
  }
}

button.current-route {
  background-color: black;
}
</style>
