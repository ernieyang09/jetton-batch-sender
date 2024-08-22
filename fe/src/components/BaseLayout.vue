<template>
  <Panel header="Overview" class="overview">
    <div>
      Address:
      <Button
        :label="appStore.address?.toString({ bounceable: true })"
        as="a"
        link
        target="_blank"
        rel="noopener noreferrer"
        :href="`https://tonviewer.com/${appStore.address?.toString({ bounceable: true })}`"
      />
    </div>
    <div>Network: {{ appStore.network }}</div>
  </Panel>
  <Tabs :value="activeTabIndex">
    <TabList>
      <router-link to="/" custom>
        <Tab
          key="Home"
          value="Home"
          @click="
            () => {
              router.push({ name: 'Home' })
            }
          "
        >
          Batch Records
        </Tab>
      </router-link>
      <router-link to="/exec" custom>
        <Tab
          key="Exec"
          value="Exec"
          @click="
            () => {
              router.push({ name: 'Exec' })
            }
          "
        >
          Exec
        </Tab>
      </router-link>
    </TabList>
  </Tabs>
  <router-view />
</template>

<script lang="ts" setup>
import useAppStore from '@/store/modules/app'
import { useRoute, useRouter } from 'vue-router'
import { ref } from 'vue'

const appStore = useAppStore()
const route = useRoute()
const router = useRouter()

const activeTabIndex = ref(route.name as string)
</script>

<style scoped>
.overview {
  border: 0;
}
</style>
