import { createStore } from 'vuex'

export default createStore({
    state: {
        mode: 'list',
        newsData: [{ id: 1, name: '홍길동', subject: '아버지를 아버지라 부르지 못하는...', contents: '아버지를 아버지라 부르지 못하는 홍모씨의 사연이 안타까움을 자아내고있습니다.' }]
    },
    getters: {
    },
    mutations: {
        modeEdit(state, str) {
            state.mode = str
        },
        insertNews(state, newValue) {
            state.newsData.push(newValue)
        },
        listDelete(state,data){
            state.newsData.splice(data,1)
        }
    },
    actions: {
    },
    modules: {
    }
})
