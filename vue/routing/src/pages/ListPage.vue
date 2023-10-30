<template>
    <h2>LIST ITEM</h2>
    <div>
        <figure v-for="(obj, k) in items" :key="k" @click="pageMove(k)">
            <img src="/익명3.jpg" />
            <figcaption>{{ obj }}</figcaption>
        </figure>
    </div>
</template>
<script>
export default {
    name: "ListPage",
    data() {
        return {
            items: ['item_1', 'item_2', 'item_3', 'item_4']
        }
    },
    methods: {
        pageMove(n) {
            console.log(n)
            this.$router.push({ name: 'ClassPage', params: { name: '현지' } })
        }
    },
    mounted() {
        console.log(this.$route);
    }

}
</script>
<style lang="">
</style>