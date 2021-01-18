<template>
  <h2>
    Props Child
  </h2>
  <div>
    fullInfo={{ fullInfo }}
  </div>
</template>

<script>
import { computed, onMounted  } from 'vue'

export default {
  name: "propsItem",
  props: {
    item: {
      type: Object,
      default: () => {},
      },
    },
  setup(props) {
    console.log('props', props.item);
    const fullInfo = computed(() => {
      return `ID: ${props.item.id}: Title: ${props.item.title}, Text: ${props.item.text}`
    })

    onMounted(() => console.log('onMounted'))

    return {
      fullInfo
    }
  }
};
</script>

<style scoped>

</style>