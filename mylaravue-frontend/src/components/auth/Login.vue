<template>
  <div id="login">
    <div class="login">
            <h2 class="login-header">Log in</h2>
            <div class="login-body">
                <transition name="fade">
                    <div class="alert alert-danger mb-4" v-if="errors.error_info">{{ errors.error_info }}</div>
                </transition>
                <form class="login-container" @submit.prevent="login">
                    <div class="form-group mb-4">
                        <input :class="{'is-invalid': errors.email}" type="email" v-model="user.email" placeholder="Email">
                        <div v-if="errors.email" class="invalid-feedback">{{errors.email[0]}}</div>
                    </div>
                    <div class="form-group mb-4">
                        <input :class="{'is-invalid': errors.password}" type="password" v-model="user.password" placeholder="Password">
                        <div v-if="errors.password" class="invalid-feedback">{{errors.password[0] }}</div>
                    </div>
                    <input type="submit" value="Login">
                </form>
            </div>
            <div class="login-footer text-center mt-2">
                <span class="login-footer-content">Don't have an account yet? <router-link to="/register">Sign up here</router-link></span>
            </div>
    </div>
    <Loading v-if="loading"></Loading>
  </div>
</template>

<script>
import Loading from '@/components/custom/Loading'
//import {mapActions, mapGetters} from 'vuex'
import axios from 'axios'
export default {
    name: 'Login',
    data(){
        return{
            user:{
                email: '',
                password: ''
            },
            loading: false,
            errors: {}
        }
    },
    components: { Loading },
    computed: {
       
        },
    methods:{
        async login() {
            this.loading = true
            try {
                const response = await axios.post('http://127.0.0.1:8000/api/login', {
                    email: this.user.email,
                    password: this.user.password
                })
                window.localStorage.setItem('token',response.data.token)
                this.$router.push({name: 'dashboard'})
            } catch (error) {
                console.log(error.response.data)
                this.errors = error.response.data
                this.loading = false
            }
        } 
    }
}
</script>

<style>
    @import '~@/assets/styles/styleAuth.css';
</style>