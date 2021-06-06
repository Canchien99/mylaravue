<template>
  <div id="listCategories" class="d-flex justify-content-center">
      <div class="w-75 mt-5">
            <div class="okr-header-spaces d-flex align-items-center justify-content-between">
                <h1 class="font-weight-bold text-dark">
                    Categories
                </h1>
                <div class="text-dark p-2 px-3 bg-primary d-flex font-weight-normal rounded">
                    <router-link :to="{name: 'createCategory'}" class="text-white">Create category</router-link>
                </div>
            </div>
          <table class="table table-hover mt-3">
            <thead class="thead-light">
                <tr>
                    <th scope="col"></th>
                    <th scope="col">Name</th>
                    <th scope="col">Date</th>
                    <th scope="col" width="20%">Action</th>
                </tr>
            </thead>
            <transition-group name="slide-fade" tag="tbody">
                <tr v-for="category, index in categories" :key="category.id">
                    <td scope="row">{{index+1}}</td>
                    <td><a href="">{{category.name}}</a></td>
                    <td>{{format_date(category.created_at)}}</td>
                    <td>
                        <button @click="deleteCategory(category.id, index)" class="btn btn-outline-danger">Remove</button>
                        <router-link :to="{name: 'editCategory', params:{id: category.id} }"  class="btn btn-outline-info ml-1">Edit</router-link>
                    </td>
                </tr>
            </transition-group>
        </table>
      </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import moment from 'moment'

export default {
    name: 'ListCategory',
    data(){
        return{

        }
    },
    created(){
        this.fetch()
    },
    computed:{...mapGetters('categories',['categories'])},
    methods:{
        ...mapActions('categories',['fetch','delete']),
        format_date(value){
            if (value) {
            return moment(String(value)).format('MM/DD/YYYY hh:mm')
            }
        },
        deleteCategory(id, index) {
            let result = confirm('Are you sure');
            if (!result) {
                return;
            }
            this.delete({id, index})
        }
    }
}
</script>

<style scoped>
    @import '~@/assets/styles/transition.css';
</style>