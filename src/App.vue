<template>
  <div>
    <el-form ref="form"
             label-width="80px">
      <el-form-item label="测试">
        <el-input v-model.number="testName"></el-input>
      </el-form-item>
      <el-form-item label="测试">
        <el-select v-model="select">
          <el-option v-for="item in options"
                     :key="item.value"
                     :label="item.label"
                     :value="item.value">
          </el-option>
        </el-select>
      </el-form-item>

      <el-button type="primary"
                 @click="testFn">皮一下</el-button>
    </el-form>
  </div>
</template>
 
<script lang='ts'>
import { computed, defineComponent, reactive, ref } from 'vue'

export default defineComponent({
  name: '',
  props: {},
  setup() {
    const testName = ref('')
    const select = ref('')
    const testFn = () => {
      if (document.body.classList.contains('theme-leis1')) {
        document.body.classList.remove('theme-leis1')
        document.body.classList.add('theme-leis2')
      } else if (document.body.classList.contains('theme-leis2')) {
        document.body.classList.remove('theme-leis2')
        document.body.classList.add('theme-leis1')
      }else{
        document.body.classList.add('theme-leis1')
      }
    }
    const options = computed(()=>[
      {
        value: '选项1',
        label: '黄金糕'
      },
      {
        value: '选项2',
        label: '双皮奶'
      },
      {
        value: '选项3',
        label: '蚵仔煎'
      },
      {
        value: '选项4',
        label: '龙须面'
      },
      {
        value: '选项5',
        label: '北京烤鸭'
      }
    ])

    return {
      testName,
      testFn,
      options,
      select
    }
  }
})
</script>
 
 <style>
</style>