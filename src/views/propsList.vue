<template>
  <h2>
    Props Parent posts={{ posts }}
    <div class="list"  v-for="item in arrList" :key="item">
      <propsItem  :item="item"/>
    </div>
  </h2>
</template>

<script>
import propsItem from '@/views/propsItem'
import { inject } from 'vue';

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
    const posts = inject('posts')

    return {
      posts,
    }
  }
}
</script>

<style scoped>

</style>