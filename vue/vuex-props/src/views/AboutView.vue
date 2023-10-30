<!-- store의 index.js와 연결되어있음 -->
<template lang="">
    <div>
        <button @click="increment"> 감소 </button>
        {{count}}
        <button @click="decrement"> 증가 </button>
        <p v-if="limit">20돌파!!</p>
        <!-- <p v-else-if="count==5">20으로가는건 이 방향이 아니에요!/p> -->
        <p v-else-if="count==15">곧 20이 다가와요!</p>
        <p v-else>20까지만 증가시킵시다~</p>
        <!-- {{num}} -->
    </div>
</template>
<script>
import { mapState, mapMutations, mapActions, mapGetters } from 'vuex';
export default {
    computed: {
        ...mapState(['count']),
        ...mapGetters(['limit'])
        // num() {
        //   return 20
        // }
    }, //명령하지않아도 사용할 준비를 함
    methods: {
        ...mapMutations(['changeCount']),
        // increment() {
        //     this.changeCount(this.count - 1)
        // },
        // decrement() {
        //     this.changeCount(this.count + 1)
        // }

        ...mapActions(['requestCount']),
        increment() {
            // this.changeCount(this.count - 1)
            this.requestCount({ type: '감소', num: this.count });
        },
        decrement() {
            // this.changeCount(this.count + 1)
            this.requestCount({ type: '증가', num: this.count });
        }
    },
}
</script>
<style lang="">

</style>