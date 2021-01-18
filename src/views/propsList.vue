<template>
  <h2>
    Props Parent
    <div class="list"  v-for="item in arrList" :key="item">
      <propsItem  :item="item"/>
    </div>
  </h2>
</template>

<script>
import propsItem from '@/views/propsItem'

export default {
  name: "propsList",
  components: {
    propsItem,
  },
  props: {
    arrList: {
      type: Array,
      default: () => [],
    },
  },
  setup(props) {
    console.log('props', props.arrList);
  }
}
</script>

<style scoped>

</style>