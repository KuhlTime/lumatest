<script lang="ts" setup>
import { PropType } from 'vue'

export type StackType = 'hstack' | 'vstack'

const props = defineProps({
  type: {
    type: String as PropType<StackType>,
    default: 'hstack'
  },
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

const stackClass = computed(() => {
  return props.type as string
})

const extendedClass = computed(() => {
  return {
    'expand-width': props.expandWidth ?? props.expand,
    'expand-height': props.expandHeight ?? props.expand
  }
})

const classes = computed(() => {
  return {
    ...extendedClass.value,
    [stackClass.value]: true,
    border: props.border,
    'space-between': props.spaceBetween
  }
})

const styles = computed(() => {
  return {
    gap: `${props.gap}px`
  }
})
</script>

<template>
  <div
    :class="classes"
    :style="styles"
  >
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.hstack {
  position: relative;
  display: flex;
}

.vstack {
  position: relative;
  display: flex;
  flex-direction: column;
}

.expand-width {
  width: 100%;
}

.expand-height {
  height: 100%;
}

// apply expension to all children
.expand-width > * {
  width: 100%;
}

.expand-height > * {
  height: 100%;
}

.border {
  border: 1px solid lightgreen;
}

.space-between {
  justify-content: space-between;
}
</style>
