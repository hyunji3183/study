<template lang="">
    <h2>글쓰기</h2>
    <div>
        <form @submit="dataSave">
            <input type="text" name="username" v-model="username" placeholder='username'><br/>
            <input type="text" name="subject" v-model="subject" placeholder='title'><br/>
            <textarea name="contents" v-model="contents" placeholder='text'></textarea><br/>
            <input type="submit" value="save" class="btn-save ">
        </form>
        <!-- {{contents}} -->
    </div>
</template>
<script>
export default {
    data() {
        return {
            username: '',
            subject: '',
            contents: ''
        }
    },
    methods: {
        dataSave(e) {
            e.preventDefault();
            this.$emit('parent', {
                mode: 'list',
                value: {
                    id: Date.now(),
                    name: this.username,
                    subject: this.subject,
                    contents: this.contents
                }
            })
        }
    }
}
</script>
<style lang="scss">
    
</style>