<template>
  <div id="createPost" class="d-flex justify-content-center">
      <div class="card w-75 mt-5 ">
            <div class="card-header">
                <h3 class="font-weight-bold">Create Post</h3>
            </div>
            <div class="card-body">
                <transition name="fade">
                    <div class="alert alert-success mb-3" v-if="success">{{success}}</div>
                </transition>
                <form class="login-container" @submit.prevent="createPost">
                    <div class="mb-4">
                        <select class="custom-select" :class="{'is-invalid': errors.category_id}" v-model="post.category_id">
                            <option value="" disabled>Choose category</option>
                            <option v-for="category in categories" :value="category.id" :key="category.id">{{category.name}}</option>
                        </select>
                        <div v-if="errors.category_id" class="invalid-feedback">{{errors.category_id[0]}}</div>
                    </div>
                    
                    <div class="form-group mb-4">
                        <label >Title</label>
                        <input class="form-control" :class="{'is-invalid': errors.title}" type="text" v-model="post.title" placeholder="Title">
                        <div v-if="errors.title" class="invalid-feedback">{{errors.title[0]}}</div>
                    </div>
                    <div class="form-group mb-4">
                        <label >Description</label>
                        <input class="form-control" :class="{'is-invalid': errors.description}" type="text" v-model="post.description" placeholder="Description">
                        <div v-if="errors.description" class="invalid-feedback">{{errors.description[0]}}</div>
                    </div>
                    <div class="form-group mb-4">
                        <label >Content</label>
                        <vue-editor class="is-invalid" :class="{'is-invalid': errors.content}" v-model="post.content"></vue-editor>
                        <div v-if="errors.content" class="invalid-feedback">{{errors.content[0]}}</div>
                    </div>
                    <div class="custom-file">
                        <input type="file" class="custom-file-input" :class="{'is-invalid': errors.image}" @change="onFileChange">
                        <label class="custom-file-label" for="customFile">Choose file</label>
                        <div id="preview" class="mt-3" v-if="post.url">
                            <img  :src="post.url" />
                        </div>
                        <div v-if="errors.image" class="invalid-feedback">{{errors.image[0]}}</div>
                    </div>
                    <div class="form-group mt-4">
                        <div class="custom-control custom-radio custom-control-inline" :class="{'is-invalid': errors.status}">
                            <input type="radio" id="radioInline1" name="customRadioInline1" v-model="post.status" class="custom-control-input" value="public">
                            <label class="custom-control-label" for="radioInline1">Public</label>
                        </div>
                        <div class="custom-control custom-radio custom-control-inline">
                            <input type="radio" id="radioInline2" name="customRadioInline1" v-model="post.status" class="custom-control-input" value="private">
                            <label class="custom-control-label" for="radioInline2">Private</label>
                        </div>
                        <div v-if="errors.status" class="invalid-feedback">{{errors.status[0]}}</div>
                
                    </div>
                    
                    <div class="d-flex justify-content-end">
                        <input class="btn btn-danger" type="reset" value="Clear">
                        <input class="ml-2 btn btn-info" type="submit" value="Create">  
                    </div>
                    
                </form>
            </div>
        </div>
        <loading v-if="loading"></Loading>
  </div>
</template>

<script>
import Loading from '../../custom/Loading.vue'
import {mapActions, mapGetters, mapMutations} from 'vuex'
import { VueEditor } from "vue2-editor";
export default {
    components: { Loading,VueEditor },
    data(){
        return{
            post:{
                title:"",
                content: "",
                description: "",
                image: null,
                url: null,
                status: "",
                category_id: ""
            },
            loading: false,
            success: "",
        }
    },
    created(){
        this.fetch()
    },
    computed:{
        ...mapGetters('posts',['errors','errors']),
        ...mapGetters('auth',['user']),
        ...mapGetters('categories',['categories']),
    },
    methods:{
        ...mapMutations('posts',['SET_ERRORS']),
        ...mapActions('posts',['create']),
        ...mapActions('categories',['fetch']),
        onFileChange(e) {
            const file = e.target.files[0];
            this.post.url = URL.createObjectURL(file);
            this.post.image = file
                
        },
        async createPost(){
            this.loading = true
            this.success = ""
            this.SET_ERRORS()
            const formData = new FormData()
            formData.set('image',this.post.image)
            formData.set('title',this.post.title)
            formData.set('content',this.post.content)
            formData.set('description',this.post.description)
            formData.set('status',this.post.status)
            formData.set('category_id',this.post.category_id)
            formData.set('author',this.user.id)
            await this.create(formData)
            if(Object.keys(this.errors).length === 0){
                this.success = "You successfully created post "
                this.loading = false
            }else{
                this.loading = false
            }
            
        }
    }
}
</script>

<style>
    #preview {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    #preview img {
        max-width: 100%;
        max-height: 200px;
    }
</style>