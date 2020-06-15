<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      name1: '',
      test: {}
    }
  },
  mounted () {
    this.axios.get('api/list').then(res => {
      console.log(res)
      this.test = res.data
      console.log(res.data)
    })
  }
}
</script>

<style>
  *{
    margin: 0;
    padding: 0;
  }
  li{
    list-style-type:none;
  }
  #app{
    height: 100vh;
    min-width: 1500px;
  }
</style>
