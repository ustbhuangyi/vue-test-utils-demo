<template>
  <div class="hello" :class="hClass">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    props: {
      msg: String
    },
    computed: {
      hClass () {
        return this.$parent.hClass
      }
    }
  }
</script>
