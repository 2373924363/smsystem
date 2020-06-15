<template>
  <div id="bg">
    <div id="xx">
      <ul id="ul">
        <li id="yuan" @click="c3"><router-link :to="{path:'/Yuanindex/yuanx', query: {id:nid}}" style="display: block;cursor: pointer" id="yuan1">信息管理</router-link></li>
            <li @click="c4" id="lei"><router-link to="/Yuanindex/yuans" style="display: block;cursor: pointer">商品一览</router-link></li>
        <li id="tui" @click="c5"><router-link to="/Yuanindex/yuant" style="display: block;cursor: pointer" id="tui1">商品退还</router-link></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Yuanleft',
  data () {
    return {
      yuan1: true,
      ke1: false,
      sl1: false,
      ss1: false,
      m3: '信息管理',
      m4: '商品一览',
      m5: '商品退还',
      nid: {}
    }
  },
  methods: {
    c3 () {
      this.$emit('GL11', this.m3)
    },
    c4 () {
      this.$emit('GL11', this.m4)
    },
    c5 () {
      this.$emit('GL11', this.m5)
    }
  },
  mounted () {
    this.nid = this.$route.params.id
  }
}
</script>

<style scoped>
  #bg{
    width: 300px;
    height: 1300px;
    background-color: #483d8b;
    position: relative;
    display: inline-block;
    float: left;
  }
  #ul{
    display: inline-block;
    position: absolute;
    top: 150px;
    left: 0;
  }
  #yuan,#lei,#tui{
    width: 300px;
    height: 60px;
    background-color: rgba(255,255,255,0);
    color: white;
    line-height: 60px;
    border-bottom:1px solid #e6e6fa ;
    border-top:1px solid #e6e6fa ;
    border-left:0;
    border-right:0;
    font-size: 20px;
  }
  a{
    text-decoration: none;
    color: white;
  }
  a.active{
    background:linear-gradient(to top left, rgba(123,104,238,1),rgba(123,104,238,0.9),rgba(123,104,238,0));
    color: white;
  }
</style>
