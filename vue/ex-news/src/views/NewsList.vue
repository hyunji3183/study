<template lang="">
    <h2>길동's 소식지</h2>
    <div>
        <ul v-if="mode==='list'">
            <li v-for="(item,k) in newsData" :key="item.id" @click="detail(item.contents)"> 
                {{item.subject}} <button @click.stop="deleteData(k)">delete</button>
            </li>
        </ul>
        <NewsWrite v-else-if="mode==='write'" @parent="insert"/>
        <NewsDetail v-else :content="content" />
    </div>
    <button @click="modeChange('write')" class="btn-w">글쓰기</button>
</template>
<script>
import NewsWrite from './NewsWrite.vue';
import NewsDetail from './NewsDetail.vue';
import { mapState, mapMutations } from 'vuex';

export default {
    data() {
        return { content: '' }
    },
    components: {
        NewsWrite,
        NewsDetail
    },
    computed: {
        ...mapState(['newsData', 'mode']),
    },
    methods: {
        ...mapMutations(['modeEdit', 'insertNews','listDelete']),
        modeChange(str) {
            this.modeEdit(str)
        },
        insert(v) {
            this.insertNews(v.value)
            this.modeChange(v.mode)
        },
        detail(str) {
            this.content = str;
            this.modeChange('detail')
        },
        deleteData(data) {
            this.listDelete(data)
        }
    }
}
</script>
<style lang="scss">
div {
    width: 60%;
    margin: 0 auto;

    ul {
        list-style: none;
        margin: 0;
        text-align: left;

        li {
            padding: 10px 0;
            border-bottom: 1px solid rgb(255, 184, 184);
            cursor: pointer;
        }
    }

    input {
        padding: 15px;
        width: 100%;
        margin: 10px auto;
    }

    textarea {
        padding: 15px;
        width: 100%;
        margin: 10px auto;
    }
}

.btn-w {
    margin-top: 20px;
    padding: 1rem;
    background-color: rgb(255, 184, 184);
    border: none;
    width: 100px;
    height: 50px;
    border-radius: 10px;
    position: fixed;
    right: 5%;
    top: 5%;
    cursor: pointer;
}

.btn-save {
    margin-top: 20px;
    padding: 1rem;
    background-color: rgb(255, 184, 184);
    border: none;
    width: 200px;
    height: 50px;
    border-radius: 10px;
    cursor: pointer;
}

.detail {
    width: 100%;
    padding: 20px 0;
    text-align: left;
}</style>