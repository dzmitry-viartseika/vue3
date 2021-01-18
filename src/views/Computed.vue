<template>
  <h1>Computed</h1>
  <input type="text" v-model="search">
  <div v-for="name in matchingName" :key="name">
    {{ name }}
  </div>
  search term={{ search }}
  <button @click="handleClick">stopWatch</button>
</template>

<script>
import { ref, computed, watch, watchEffect } from 'vue';

export default {
name: "Computed",
  setup() {
    console.log('computed')
    const names = ref(['Dmitey', 'Pasha', 'Oleg', 'Denis']);
    const search = ref('');

    const stopWatch = watch(search, () => {
      console.log('watch function ran')
    })

    // Он запускает функцию немедленно, одновременно отслеживая ее зависимости и повторно запускает ее всякий раз,
    // когда зависимости изменяются.

    // watchEffect(() => {
    //   console.log('watchEffect function ran', search.value)
    // })

    const stopWatchEffect =  watchEffect(() => {
      console.log('watchEffect function ran', search.value)
    })

    const handleClick = () => {
      stopWatch()
      stopWatchEffect()
    }

    const matchingName = computed( () => {
      return names.value.filter((name) => name.includes(search.value))
    })

    return {
      names,
      search,
      matchingName,
      handleClick,
    }
  }
}
</script>

<style scoped>

</style>