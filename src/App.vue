<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <transition name="fade">
      <HelloWorld v-if="flag" msg="Welcome to Your Vue.js App"/>
    </transition>
    <div>
      <button @click="flag=!flag">Toggle</button>
    </div>
  </div>
</template>

<script>
  import HelloWorld from './components/HelloWorld.vue'

  export default {
    name: 'App',
    components: {
      HelloWorld
    },
    props: {
      hClass: String
    },
    data () {
      return {
        flag: true
      }
    }
  }
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

  .fade-enter-active {
    transition: all .3s ease;
  }

  .fade-leave-active {
    transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }

  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
</style>
