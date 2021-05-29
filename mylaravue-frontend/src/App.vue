<template>
  <div id="app">
    <link rel="stylesheet" 
        href="https://use.fontawesome.com/releases/v5.2.0/css/all.css" 
        integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ" 
        crossorigin="anonymous">
    <router-view></router-view>
     
  </div>
</template>

<script>
import Popper from 'popper.js'
Popper.Defaults.modifiers.computeStyle.gpuAcceleration = false
export default {
    
  name: 'App',
  components: {
  },
  beforeCreate(){
      
  }
}
</script>

<style>
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
    @import'~bootstrap/dist/css/bootstrap.css';
</style>
