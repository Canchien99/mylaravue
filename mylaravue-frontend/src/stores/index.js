import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
// import modules
import auth from './modules/auth'
import categories from './modules/categories'
import posts from './modules/posts'

const storeData = {
    modules: {
        auth,
        categories,
        posts
    }
}

const store = new Vuex.Store(storeData)

export default store