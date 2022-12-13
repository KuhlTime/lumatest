<script lang="ts" setup>
const props = defineProps({
  expand: {
    type: Boolean,
    default: false
  },
  expandWidth: {
    type: Boolean,
    default: undefined
  },
  expandHeight: {
    type: Boolean,
    default: undefined
  },
  border: {
    type: Boolean,
    default: false
  },
  spaceBetween: {
    type: Boolean,
    default: false
  },
  gap: {
    type: Number,
    default: 0
  }
})
</script>

<template>
  <StackLayout
    type="hstack"
    :expand="props.expand"
    :expand-width="props.expandWidth"
    :expand-height="props.expandHeight"
    :border="border"
    :space-between="spaceBetween"
    :gap="gap"
  >
    <slot />
  </StackLayout>
</template>
