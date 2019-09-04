import Vue from 'vue'
import Vuex from 'vuex'
import { fly } from '../main'
Vue.use(Vuex)
const store = new Vuex.Store({
    state: {
        itemList: [],
        type: "All"
    },
    mutations: {
        getTodoList(state, todoList) {
            state.itemList = todoList
        },
        changeType(state, type) {
            state.type = type
        }
    },
    actions: {
        getTodoList({ commit }) {
            fly.get('/todos')
                .then((response) => {
                    commit('getTodoList', response.data)
                })
                .catch((error) => {
                    console.error(error)
                })
        },
        addTodo({ dispatch }, todo) {
            fly.post('/todos', todo)
                .then((response) => {
                    dispatch('getTodoList')
                })
                .catch((error) => {
                    console.error(error)
                })
        },
        updateTodo({ dispatch }, todo) {
            fly.put(`/todos/${todo.id}`, todo)
                .then((response) => {
                    console.log('response :', response.data);
                    dispatch('getTodoList')
                })
                .catch((error) => {
                    console.error(error)
                })
        },
        deleteTodo({ dispatch }, id) {
            fly.delete(`/todos/${id}`)
                .then((response) => {
                    dispatch('getTodoList')
                })
                .catch((error) => {
                    console.error(error)
                })
        },
    }
})
export default store