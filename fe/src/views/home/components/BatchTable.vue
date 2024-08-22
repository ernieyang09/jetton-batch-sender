<template>
  <DataTable :value="batchRecords" tableStyle="min-width: 50rem">
    <Column field="name" header="Activity"></Column>
    <Column field="createdAt" header="Created"></Column>
    <Column field="comment" header="Comment"></Column>
    <Column header="Status">
      <template #body="slotProps">
        <Tag :value="slotProps.data.status" severity="info" />
      </template>
    </Column>
  </DataTable>
</template>

<script lang="ts" setup>
const batchRecords = [
  {
    name: 'NFT transfer',
    createdAt: '2021-09-01',
    comment: 'Transfer of 10 NFTs',
    status: 'Completed'
  }
]
</script>
