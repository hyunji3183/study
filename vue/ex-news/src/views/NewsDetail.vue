<template lang="">
    <div class='detail'>
        {{content}}
    </div>
    <button @click="modeEdit('list')" class="btn-save">목록보기</button>
</template>
<script>
import { mapMutations } from 'vuex';

export default {
    props: ['content'],
    methods: {
        ...mapMutations(['modeEdit'])
    }
}
</script>
<style lang="">
    
</style>