<template>
  <div>
    {{myInfo.name}}
  </div>
</template>

<script lang="ts">
import { defineComponent,reactive } from 'vue';

interface VueTestOne {
    girls: string[];
    selectGirl: string;
    selectGirlFun: (index: number) => void;
}
export default defineComponent({
  name: 'App',
  components: {
  },
  setup(){
    const myInfo = reactive({
      name:'leisuchu'
    })
    return {
      myInfo
    }
  },
});
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
