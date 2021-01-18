<template>
  <h1>Props Parent</h1>
  <propsList :arrList="arrList"/>
</template>

<script>
import propsList from "@/views/propsList";
import { ref } from 'vue'
export default {
name: "propsRules",
  components: {
    propsList,
  },
  setup() {
    console.log('parent');
    const arrList = ref([
      {
        id: 1,
        title: 'Title1',
        text: 'text1'
      },
      {
        id: 2,
        title: 'Title2',
        text: 'text2'
      },
      {
        id: 3,
        title: 'Title3',
        text: 'text3'
      },
    ])

    return {
      arrList,
    }
  }
}
</script>

<style scoped>

</style>