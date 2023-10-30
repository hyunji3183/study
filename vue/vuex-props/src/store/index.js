import { createStore } from 'vuex'

export default createStore({
    state: {
        // 데이터값 정의하는 공간 (변수를 만드는 곳)
        count: 10
    },
    getters: {
        // 정의된 데이터값을 가공 (읽기전용)
        limit(state) {
            return state.count === 20
        }
    },
    mutations: {
        // 정의된 데이터값을 수정
        changeCount(state, num) {
            state.count = num;
        }
    },
    actions: {
        // mutations으로 수정을 명령하는곳
        // 증가?감소?
        requestCount({ commit }, action) {
            let num = 0;
            if (action.type == '감소') {
                num = action.num - 1
            } else {
                num = action.num + 1
            }
            commit('changeCount', num)
        }
    },
    modules: {
        // 데이터의 유형이 여러개일때
        // ex) 멤버데이터, 장바구니 등 어려개의 데이터
    }
})
