import axios from "axios"
import {RESOURCE_CATEGORIES} from "@/api/api"
const categoryModule = {
    namespaced: true,
    state: {
        categories: [],
        token: localStorage.getItem('token'),
        errors: {},
        category: {},
    },
    getters: {
        categories: state => state.categories,
        category: state => state.category,
        errors(state) {
           return state.errors
        },
    },
    
    actions: {
        async fetch(context) {
            try {
                const response = await axios.get(RESOURCE_CATEGORIES, { headers: { Authorization: 'Bearer ' + context.state.token }})
                context.commit('SET_CATEGORIES', response.data)
            } catch (error) {
                console.log(error.response.data);
            }
        },
        async fetchOne({commit, state},id) {
            try {
                const response = await axios.get(`${RESOURCE_CATEGORIES}/${id}`, { headers: { Authorization: 'Bearer ' + state.token }})
                commit('SET_CATEGORY', response.data)
            } catch (error) {
                console.log(error.response.data);
            }
        },
        async delete({state, commit}, payload) {
            try {
                const response = await axios.delete(`${RESOURCE_CATEGORIES}/${payload.id}`, { headers: { Authorization: 'Bearer ' + state.token } })
                console.log(response.data);
                commit('REMOVE_CATEGORY', payload.index)
            } catch (error) {
                console.log(error.response.data);
            }
        },
        async update({state, commit}, category) {
            try {
                const response = await axios.put(`${RESOURCE_CATEGORIES}/${category.id}`, {
                    name: category.name}, {
                    headers: { Authorization: 'Bearer ' + state.token }
                })
                commit('UPDATE_CATEGORY', response.data) 
           
            } catch (error) {
                commit('GET_ERRORS',error.response.data)
            }
        },
        async create({state},category) {
            try {
                
                const response = await axios.post(RESOURCE_CATEGORIES, category,
                    {headers: {Authorization:'Bearer '+ state.token }})
                console.log(response.data)
               
            } catch (error) {
                console.log(error.response.data)
                state.errors = error.response.data
            }
        }

    },
    mutations: {
        SET_CATEGORIES(state, categories) {
            state.categories = categories
        },
        SET_CATEGORY(state, category) {
            state.category = category
        },
        REMOVE_CATEGORY(state, index) {
            state.categories.splice(index , 1)
        },
        UPDATE_CATEGORY(state, category) {
            state.category = category
        },
        GET_ERRORS(state, errors) {
            state.errors = errors
        },
        SET_ERRORS(state) {
            state.errors = {}
        }
    }
}


export default categoryModule
