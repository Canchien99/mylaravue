<template>
  <div id="login">
    <div class="login">
            <h2 class="login-header">Register</h2>
            <div class="login-body">
                <transition name="fade">
                    <div class="alert alert-danger mb-4" v-if="errors.error_info">{{ errors.error_info }}</div>
                </transition>
                <form class="login-container" @submit.prevent="register">
                    <div class="form-group mb-4">
                        <input :class="{'is-invalid': errors.name}" type="text" v-model="user.name" placeholder="Fullname">
                        <div v-if="errors.name" class="invalid-feedback">{{errors.name[0]}}</div>
                    </div>
                    <div class="form-group mb-4">
                        <input :class="{'is-invalid': errors.email}" type="email" v-model="user.email" placeholder="Email">
                        <div v-if="errors.email" class="invalid-feedback">{{errors.email[0]}}</div>
                    </div>
                    <div class="form-group mb-4">
                        <input :class="{'is-invalid': errors.password}" type="password" v-model="user.password" placeholder="Password">
                        <div v-if="errors.password" class="invalid-feedback">{{errors.password[0] }}</div>
                    </div>
                    <div class="form-group mb-4">
                        <input :class="{'is-invalid': errors.password_confirm}" type="password" v-model="user.password_confirm" placeholder="Confirm Password">
                        <div v-if="errors.password_confirm" class="invalid-feedback">{{errors.password_confirm[0] }}</div>
                    </div>
                    <input type="submit" value="Create an account">
                </form>
            </div>
            <div class="login-footer text-center mt-2">
                <span class="login-footer-content">Already have an account? <router-link to="/login">Sign in here</router-link></span>
            </div>
    </div>
     <div id="loading" v-if="loading">
        <div class="okr-bg-beforesend">
            <img class="w-100" src="../../assets/unnamed.gif" alt="">
        </div>
    </div>
  </div>
</template>

<script>
//import {mapGetters} from 'vuex'
import axios from 'axios'
export default {
    name: 'Login',
    data(){
        return{
            user:{
                email: '',
                password: '',
                name: '',
                password_confirm: '',
            },
            loading: false,
            errors: {}
        }
    },
    computed: {
    
        },
    methods:{
        async register(){
            this.loading = true
            try {
                const response = await axios.post('http://127.0.0.1:8000/api/register', this.user)
                window.localStorage.setItem('token',response.data.token)
                console.log(response.data)
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
    @import '../../assets/styles/styleAuth.css';
</style>