<script setup lang="ts">
import {  computed } from 'vue'
import { useCounterStore } from './../stores/counter'

const counter = useCounterStore()

function increaseCount() {
  counter.increment()
}

const count = computed(() => {
  return counter.count
})


defineProps<{ msg: string }>()

</script>

<template>
  <h1>{{ msg }}</h1>
  <div class="card">
    <Button type="button" @click="increaseCount()">Count is {{ count }}</Button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>

  <p>
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank"
      >create-vue</a
    >, the official Vue + Vite starter
  </p>
  <p>
    Install
    <a href="https://github.com/vuejs/language-tools" target="_blank">Volar</a>
    in your IDE for a better DX
  </p>
  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
