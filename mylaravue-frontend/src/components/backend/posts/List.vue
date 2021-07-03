<template>
    <div id="listPosts" class="d-flex justify-content-center px-5">
        <div class="w-100 mt-5 px-5">
                <div class="d-flex align-items-center justify-content-between">
                    <h1 class="font-weight-bold text-dark">
                        POST
                    </h1>
                    <div class="text-dark p-2 px-3 bg-primary d-flex font-weight-normal rounded">
                        <router-link :to="{name: 'createPost'}" class="text-white">Create post</router-link>
                    </div>
                </div>
            <table class="table table-hover mt-3">
                <thead class="thead-light">
                    <tr>
                        <th scope="col"></th>
                        <th scope="col" width="35%">Title</th>
                        <th scope="col">Status</th>
                        <th scope="col">View</th>
                        <th scope="col">Category</th>
                         <th scope="col">Date</th>
                        <th scope="col" width="20%">Action</th>
                    </tr>
                </thead>
                <transition-group name="slide-fade" tag="tbody">
                    <tr v-for="post, index in posts" :key="post.id">
                        <td scope="row">{{index+1}}</td>
                        <td>
                            <p><router-link :to="{name: 'editPost', params:{id: post.id}}">{{post.title}}</router-link></p>
                            <img :src="URL_IMAGES +'/'+ post.image" alt="" width="100px">
                        </td>
                        <td>{{post.status}}</td>
                        <td>{{post.view}}</td>
                        <td>{{post.category.name}}</td>
                        <td>{{format_date(post.created_at)}}</td>
                        <td>
                            <button @click="deletePost(post.id, index)" class="btn btn-outline-danger">Remove</button>
                            <router-link :to="{name: 'editPost', params:{id: post.id} }"  class="btn btn-outline-info ml-1">Edit</router-link>
                        </td>
                    </tr>
                </transition-group>
            </table>
        </div>
    </div>
</template>

<script>
import moment from 'moment'
import { mapActions, mapGetters } from 'vuex'
import { RESOURCE_IMAGES} from '@/api/api.js'
export default {
    name: "listPost",
    data(){
        return{
            URL_IMAGES: RESOURCE_IMAGES,
        }
    },
    created(){
        this.fetch()
        this.fetchCate()
    },
    computed:{
        ...mapGetters('posts',['posts']),
        ...mapGetters('categories',['categories'])
    },
    methods:{
        ...mapActions('posts',['fetch']),
        ...mapActions('categories',{fetchCate: 'fetch'}),
         format_date(value){
            if (value) {
            return moment(String(value)).format('MM/DD/YYYY hh:mm')
            }
        },
    }
}
</script>

<style>

</style>