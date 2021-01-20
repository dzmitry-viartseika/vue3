<template>
  <p ref="p">
    {{ test }} - {{ date }}
  </p>
  <div>
    obj={{ obj }}
  </div>
  <div>
    reactiveValue={{ reactiveValue }}
  </div>
  <button @click="handleClick">Click me</button>
  <button @click="date++">Add +1</button>
  <input type="text" v-model="reactiveValue">
  <h2>Reactive</h2>
  <div>
    objReactive={{ objReactive.name }}: {{ objReactive.age }}
  </div>
  <button @click="updateAge">Click +</button>
  <button @click="proceedTo('/computed')">Router</button>
  <propsList />
</template>

<script>

import { ref, reactive, provide } from 'vue';
import { useRouter } from 'vue-router'
import propsList from '@/views/propsList';

export default {
  name: 'Home',
  components: {
    propsList,
  },
  setup() {

    // ref лучше использовать для реактивности. Преимущества что можно примитивные значения делать реативными
    console.log('wertey');
    const test = 'wertey';
    const date = ref(100);
    const posts = ref([]);
    const error = ref(null)

    const obj = ref({
      name: 'Dmitry',
      surname: 'Verteyko'
    })

    const objReactive = reactive({
      name: 'test',
      age: 10000
    })

    const router = useRouter();

    const proceedTo = (route) => {
      console.log('route', route)
      router.push(route)
    }

    const load = async () => {
      try {
        const data = await fetch('http://localhost:3000/posts')
        if(!data.ok) {
          throw Error('no data avaliable')
        }
        posts.value = await data.json();
      }
      catch (err) {
        error.value = err.message;
      }
    }

    load()

    provide('posts', posts)

    const reactiveValue = ref('hello world')

    const p = ref(null);

    const handleClick = () => {
      console.log('you clicked me')
      console.log('p', p.value)
      p.value.classList.add('test')
      reactiveValue.value = 'goodbye'
      console.log('obj.value', obj.value)
      obj.value.name = 'Wertey';
    }

    const updateAge = () => {
      objReactive.age++
    }

    return {
      test,
      date,
      reactiveValue,
      handleClick,
      p,
      obj,
      objReactive,
      updateAge,
      load,
      posts,
      proceedTo,
    }
  }
}
</script>

<style>
  .test {
    color: red;
  }
</style>
