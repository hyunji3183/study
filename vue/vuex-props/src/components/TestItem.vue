<template lang="">
    <li @click="itemAction(item.id)" :class="{active:check}"> {{item.title}} </li>
</template>
<script>
export default {
    props: ['item', 'check'],
    //state와 유사함
    methods: {
        itemAction(id) {
            this.$emit('parent', id)
        }
    }
}
</script>
<style lang="scss">
.active {
    color: rgb(255, 188, 188);
    cursor: pointer;
    padding: 10px 0;
    font-size: 1.5rem;
    font-weight: bold;
}
</style>