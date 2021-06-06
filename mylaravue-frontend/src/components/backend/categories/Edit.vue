<template>
  <div id="editCategory" class="d-flex justify-content-center">
      
        <div class="card w-50 mt-5">
            <div class="card-header">
                <h3 class="font-weight-bold">Edit Category</h3>
            </div>
            <div class="card-body">
                <transition name="fade">
                    <div class="alert alert-success mb-3" v-if="success">{{success}}</div>
                </transition>
                <h5 class="card-title">New name</h5>
                <form class="login-container" @submit.prevent="updateCategory">
                    <div class="form-group mb-4">
                        <input class="form-control" :class="{'is-invalid': errors.name}" type="text" v-model="category.name" placeholder="Name">
                        <div v-if="errors.name" class="invalid-feedback">{{errors.name[0]}}</div>
                    </div>
                    <div class="d-flex justify-content-end">
                        <input class="btn btn-danger" type="reset" value="Clear">
                        <input class="ml-2 btn btn-info" type="submit" value="Update">  
                    </div>
                    
                </form>
            </div>
        </div>

        <Loading v-if="loading"></Loading>
  </div>
</template>

<script>
import Loading from '@/components/custom/Loading'

import { mapActions, mapGetters, mapMutations } from 'vuex'
export default {
    components: { Loading },
    data(){
        return{
            loading: false,
            success: "",
        }
    },
    created(){
        this.fetchOne(this.$route.params.id)
    },
    computed:{...mapGetters('categories',['errors','category'])},
    methods:{
        ...mapActions('categories',['update', 'fetchOne']),
        ...mapMutations('categories',['SET_ERRORS']),
        async updateCategory(){
            this.loading = true
            this.success = ""
            this.SET_ERRORS()
            await this.update(this.category)
            console.log(Object.keys(this.errors));
            if(Object.keys(this.errors).length === 0){
                this.success = "You successfully updated category with name "+ this.category.name
                this.loading = false
            }else{
                this.loading = false
            }
        }
    }
}
</script>

<style scoped>
    @import '~@/assets/styles/transition.css';
</style>