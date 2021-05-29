import axios from "axios"

//import axios from "axios"
const authModule = {
    namespaced: true,
    state: {
        errors: {},
        loading: false,
        user: {}
    },
    getters: {
        errors: state => state.errors,
        user: state => state.user,
    },
    
    actions: {
        async getUser({commit}) {
            try {
                const token = localStorage.getItem('token')
                const response = await axios.get('http://127.0.0.1:8000/api/details', {
                    headers: {Authorization:'Bearer '+ token }
                })
                commit('SET_USER', response.data)
            } catch (error) {
                console.log(error.response.data)
            }
        },
        async logout({commit}) {
            try {
                const token = localStorage.getItem('token')
                const response = await axios.get('http://127.0.0.1:8000/api/logout', {
                    headers: {Authorization:'Bearer '+ token }
                })
                localStorage.removeItem("token");
                commit('SET_USER', {})
                console.log(response.data)
            } catch (error) {
                console.log(error.response.data)
            }
        },

    },
    mutations: {
        SET_ERRORS(state, errors) {
            state.errors = errors
        },
        TOGGLE_LOADING(state) {
            state.loading = !state.loading
        },
        SET_USER(state, user) {
            state.user = user
        }
    }
}


export default authModule
