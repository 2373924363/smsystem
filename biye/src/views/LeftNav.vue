<template>
  <div id="bg">
    <div id="xx">
      <ul id="ul">
        <li id="yuan">
          <input type="button" value="信息管理" @click="yuan"/>
          <ol v-show="yuan1">
            <li @click="c1()"><router-link to="/Index/gL" style="display: block;cursor: pointer" >管理员信息</router-link></li>
            <li @click="c2"><router-link to="/Index/yuan" style="display: block;cursor: pointer">员工信息</router-link></li>
          </ol>
        </li>
        <li id="ke">
          <input type="button" value="客户管理" @click="ke"/>
          <ol v-show="ke1">
            <li @click="c3"><router-link to="/Index/pu" style="display: block;cursor: pointer">普通客户</router-link></li>
            <li @click="c4"><router-link to="/Index/zg" style="display: block;cursor: pointer">重要客户</router-link></li>
          </ol>
        </li>
        <li id="sl">
          <input type="button" value="商品类别" @click="sl"/>
          <ol v-show="sl1">
            <li @click="c5"><router-link to="/Index/wen" style="display: block;cursor: pointer">文具用品</router-link></li>
            <li @click="c6"><router-link to="/Index/ti" style="display: block;cursor: pointer">体育用品</router-link></li>
          </ol>
        </li>
        <li id="ss">
          <input type="button" value="销售管理" @click="ss"/>
          <ol v-show="ss1">
            <li @click="c7"><router-link to="/Index/xs" style="display: block;cursor: pointer">销售信息</router-link></li>
            <li @click="c8"><router-link to="/Index/ku" style="display: block;cursor: pointer">库存信息</router-link></li>
          </ol>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LeftNav',
  data () {
    return {
      yuan1: true,
      ke1: false,
      sl1: false,
      ss1: false,
      m1: '管理员信息',
      m2: '员工信息',
      m3: '普通客户',
      m4: '重要客户',
      m5: '文具用品',
      m6: '体育用品',
      m7: '销售信息',
      m8: '库存信息'
    }
  },
  methods: {
    yuan () {
      this.yuan1 = !this.yuan1
      this.ke1 = false
      this.sl1 = false
      this.ss1 = false
    },
    ke () {
      this.ke1 = !this.ke1
      this.yuan1 = false
      this.sl1 = false
      this.ss1 = false
    },
    sl () {
      this.sl1 = !this.sl1
      this.yuan1 = false
      this.ke1 = false
      this.ss1 = false
    },
    ss () {
      this.ss1 = !this.ss1
      this.yuan1 = false
      this.sl1 = false
      this.ke1 = false
    },
    c1 () {
      this.$emit('GL1', this.m1)
    },
    c2 () {
      this.$emit('GL1', this.m2)
    },
    c3 () {
      this.$emit('GL1', this.m3)
    },
    c4 () {
      this.$emit('GL1', this.m4)
    },
    c5 () {
      this.$emit('GL1', this.m5)
    },
    c6 () {
      this.$emit('GL1', this.m6)
    },
    c7 () {
      this.$emit('GL1', this.m7)
    },
    c8 () {
      this.$emit('GL1', this.m8)
    }
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

  #yuan>input,#ke>input,#sl>input,#ss>input{
    width: 300px;
    height: 60px;
    background-color: rgba(255,255,255,0);
    color: white;
    border-bottom:1px solid #e6e6fa ;
    border-top:1px solid #e6e6fa ;
    border-left:0;
    border-right:0;
    font-size: 20px;
  }
  #yuan>input:hover{
    background-color: #9370db;
  }
  #ke>input:hover{
    background-color: #9370db;
  }
  #sl>input:hover{
    background-color: #9370db;
  }
  #ss>input:hover{
    background-color: #9370db;
  }
  #yuan>ol>li,#ke>ol>li,#sl>ol>li,#ss>ol>li{
    width: 300px;
    height: 35px;
    background-color: white;
    line-height: 35px;
    border-bottom: 1px solid #cdcdcd;
  }
  #yuan>ol>li:hover{
    background-color: #e6e6fa;
  }
  #ke>ol>li:hover{
    background-color: #e6e6fa;
  }
  #sl>ol>li:hover{
    background-color: #e6e6fa;
  }
  #ss>ol>li:hover{
    background-color: #e6e6fa;
  }
  a{
    text-decoration: none;
    color: black;
  }
  a.active{
    background:linear-gradient(to top right, rgba(123,104,238,1),rgba(123,104,238,0.9),rgba(123,104,238,0));
    color: white;
  }
</style>
