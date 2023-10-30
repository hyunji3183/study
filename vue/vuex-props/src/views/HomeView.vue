<template>
  <div class="home">
    <ul>
      <TestItem v-for="item in testdata" :key="item.id" :item="item" @parent="fnParent" :check="item.id == id" />
    </ul>
  </div>
</template>

<script>
import TestItem from '@/components/TestItem.vue';



export default {
  methods: {
    fnParent(n) {
      this.id = n;
      alert(n + '번째 자식입니다~')
    }
  },
  data() {
    return {
      testdata: [
        { id: 1, title: '아이템1' },
        { id: 2, title: '아이템2' },
        { id: 3, title: '아이템3' },
        { id: 4, title: '아이템4' }
      ],
      id: 0
    }
  },
  name: 'HomeView',
  components: {
    TestItem
  }
}
</script>