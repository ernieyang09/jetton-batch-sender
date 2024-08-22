<template>
  <div class="login-page">
    <div class="login-form">
      <Select
        v-model="selectedNetwork.value.value"
        :options="networks"
        optionLabel="name"
        optionValue="value"
        class="w-[120px]"
      />

      <InputText
        v-model="inputAddress.value.value"
        type="text"
        class="w-[400px]"
        :class="{ 'p-invalid': errors.inputAddress }"
      />
      <Button label="Login" @click="submit" />
    </div>
    {{ inputAddress.errorMessage }}
  </div>
</template>

<script lang="ts" setup>
import { address, Address } from '@ton/core'
import { ref, watch } from 'vue'
import { useField, useForm } from 'vee-validate'

import { Network } from '@/types/network'
import useAppStore from '@/store/modules/app'
import { useRouter } from 'vue-router'

const appStore = useAppStore()
const router = useRouter()
const { handleSubmit, errors } = useForm()

const inputAddress = useField(
  'inputAddress',
  (value: string) => {
    try {
      Address.parse(value)
      return true
    } catch (e) {
      // console.log(e)
      return 'Must be a valid address'
    }
  },
  {
    validateOnValueUpdate: false
  }
)

// inputAddress.value.value = ''

const selectedNetwork = useField('selectedNetwork')
selectedNetwork.value.value = appStore.network

const networks = ref(
  Object.entries(Network).map(([key, val]) => ({ name: key, value: val }))
)

const submit = handleSubmit((v) => {
  appStore.address = address(v.inputAddress)
  appStore.network = v.selectedNetwork
})

watch(
  () => appStore.address,
  (newAddress) => {
    if (newAddress) {
      router.push('/')
    }
  }
)
</script>

<style>
.login-page {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.login-form {
  display: flex;
  align-items: center;
  gap: 1rem;
  transform: translate(0, -50%);
}
</style>
