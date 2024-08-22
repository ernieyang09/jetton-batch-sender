import { defineStore } from 'pinia'
import { ref } from 'vue'
import { Network } from '@/types/network'
import { Address } from '@ton/core'

export default defineStore('app', () => {
  const address = ref<Address>()
  const network = ref(Network.Testnet)

  return { address, network }
})
