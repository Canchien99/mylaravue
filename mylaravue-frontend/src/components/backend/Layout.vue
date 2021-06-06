<template>
  <div id="admin">
      <left-sidebar> </left-sidebar>
      <router-view class="be-main"></router-view>
      
  </div>
</template>

<script>
import leftSidebar from './LeftSidebar.vue'
export default {
    components: { leftSidebar },

}
</script>

<style>
    .be-main{
        margin-left: 230px;
    }
</style>