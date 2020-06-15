<template>
  <div id="app">
      <Yuanleft @GL11="xxx"></Yuanleft>
    <Yuantop></Yuantop>
      <div  style=" display:inline-block;z-index: 999;width: 300px;height: 100px;position: absolute;left: 300px;top:0px; line-height: 110px;
    color: white;
    font-size: 36px;
    font-weight: bold;
    float: left;
    font-family: 楷体;">{{m}}</div>
      <div id="context">
        <router-view />
      </div>
    </div>
</template>

<script>
import Yuanleft from './Yuanleft'
import Yuantop from './Yuantop'
export default {
  name: 'Yuanindex',
  data () {
    return { m: '' }
  },
  methods: {
    xxx (payload) {
      this.m = payload
    }
  },
  components: {
    Yuanleft,
    Yuantop
  }
}
</script>

<style scoped>
  *{
    margin: 0px;padding:0px;
  }
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    background:#ffffff;
    height: 1000px;
    min-width: 1200px;
  }
  #context{
    min-width: 1200px;
    display: inline-block;
    height: 1000px;
    margin-top: 60px;
  }
</style>
