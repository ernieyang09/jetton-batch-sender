<template>
  <BatchTable />
</template>

<script lang="ts" setup>
import { useRoute, useRouter, useLink } from 'vue-router'
import { ref, computed, watch } from 'vue'
import ExecTable from '@/views/exec/index.vue'
import BatchTable from './components/BatchTable.vue'

const route = useRoute()

const activeTabIndex = ref(route.name)

console.log(activeTabIndex.value)

watch(
  () => activeTabIndex,
  (newAddress) => {
    console.log(newAddress)
  }
)

watch(route, (newRoute) => {
  activeTabIndex.value = newRoute.path
})

// Determine which component to render based on the active route
const activeComponent = computed(() => {
  switch (activeTabIndex.value) {
    case '/exec':
      return ExecTable
    default:
      return BatchTable
  }
})
</script>

<style scoped>
.overview {
  border: 0;
}
</style>
