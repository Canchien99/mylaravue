import axios from "axios"
import {RESOURCE_POSTS} from "@/api/api"
const postModule = {
    namespaced: true,
    state: {
        posts: [],
        token: localStorage.getItem('token'),
        errors: {},
        post: {},
    },
    getters: {
        posts: state => state.posts,
        post: state => state.post,
        errors: state => state.errors
    },
    
    actions: {
        async fetch({state, commit}) {
            try {
                const response = await axios.get(RESOURCE_POSTS, { headers: { Authorization: 'Bearer ' + state.token }})
                commit('SET_POSTS', response.data)
            } catch (error) {
                console.log(error.response.data);
            }
        },
        async fetchOne({commit, state},id) {
            try {
                const response = await axios.get(`${RESOURCE_POSTS}/${id}`, { headers: { Authorization: 'Bearer ' + state.token }})
                commit('SET_POST', response.data)
                console.log(response.data);
            } catch (error) {
                console.log(error.response.data);
            }
        },
        // async delete({state, commit}, payload) {
        //     try {
        //         const response = await axios.delete(`${RESOURCE_POSTS}/${payload.id}`, { headers: { Authorization: 'Bearer ' + state.token } })
        //         console.log(response.data);
        //         commit('REMOVE_POST', payload.index)
        //     } catch (error) {
        //         console.log(error.response.data);
        //     }
        // },
        async update({state, commit}, POST) {
            try {
                const response = await axios.put(`${RESOURCE_POSTS}/${POST.get('id')}`, POST, {
                    headers: { Authorization: 'Bearer ' + state.token }
                })
                commit('UPDATE_POST', response.data) 
           
            } catch (error) {
                commit('GET_ERRORS',error.response.data)
            }
        },
        async create({state},POST) {
            try {
                
                const response = await axios.post(RESOURCE_POSTS, POST,
                    {headers: {Authorization:'Bearer '+ state.token }})
                console.log(response.data)
               
            } catch (error) {
                console.log(error.response.data)
                state.errors = error.response.data
            }
        }

    },
    mutations: {
        SET_POSTS(state, posts) {
           state.posts = posts
        },
        SET_POST(state, post) {
           state.post = post
        },
        SET_ERRORS(state) {
            state.errors = {}
        }
    }
}


export default postModule
