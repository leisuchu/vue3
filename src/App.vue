<template>
<div>
    <button v-for="(girl,index) in girls" :key="index" @click="selectGirlFun(index)">
        {{index}}--{{girl}}
    </button>
    <div>您选择了【{{selectGirl}}】</div>
</div>
</template>

<script lang="ts">
import {
    defineComponent,
    reactive,
    toRefs,
    onBeforeMount,
    onMounted,
    onBeforeUnmount,
    onUnmounted
} from "vue";

interface VueTestOne {
    girls: string[];
    selectGirl: string;
    selectGirlFun: (index: number) => void;
}
export default defineComponent({
    name: "App",
    setup() {

        // ref方式
        // const girls = ref(['g1', 'g2', 'g3']);
        // const selectGirl = ref('')
        // const selectGirlFun = (index: number) => {
        //     selectGirl.value = girls.value[index]
        // }

        // reactive方式
        const data: VueTestOne = reactive({
            girls: ['g1', 'g2', 'g3'],
            selectGirl: '',
            selectGirlFun: (index: number) => {
                data.selectGirl = data.girls[index]
            }
        });

        onBeforeMount(() => {
            console.log('1 挂载前调用');
        })
        onMounted(() => {
            console.log('2 挂载后调用')
        })
        onBeforeUnmount(() => {
            console.log('3 组件销毁前调用')
        })
        onUnmounted(() => {
            console.log('3 组件销毁后调用')
        })
        return {
            ...toRefs(data)
        }
    }

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
