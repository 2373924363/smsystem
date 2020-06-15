<template>
<div id="bg">
  <div id="name"></div>
  <div id="date">
    <div id="day">{{date.getFullYear()}} / {{date.getMonth()+1}} / {{date.getDate()}}</div>
    <div id="today">{{weekDay[date.getDay()]}} </div>
    <div id="time"><span>{{date.getHours()}} 时 {{date.getMinutes()}} 分 {{date.getSeconds()}}秒</span> </div>
  </div>
  <div id="bottom">
    您好！<span>{{nameid}}员工</span>
    <a href="http://localhost:8080/">退出</a>
  </div>
</div>
</template>

<script>
import store from '../store'
export default {
  name: 'HeaderTop',
  store,
  data () {
    return { date: new Date(), weekDay: ['星期天', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'], mIndex: '', nameid: {} }
  },
  created () {
    this.nameid = sessionStorage.getItem('nameid')
  },
  computed: {
    pageLists () {
      return store.state.value
    }
  },
  methods: {
  },
  mounted () {
    var _this = this
    this.timer = setInterval(() => {
      _this.date = new Date()
    }, 1000)
    this.mIndex = this.$route.params.nameid
  },
  destroyed () {
    if (this.timer) {
      clearInterval(this.timer)
    }
  }
}
</script>

<style scoped>
  #bg{
    width: calc(100% - 300px);
    min-width: 900px;
    height: 150px;
    background-color: rgba(123,104,238,0.8);
    position: relative;
    display: inline-block;
  }
  #bottom{
    width: calc(100% - 20px);
    height: 40px;
    background-color: #e6e6fa;
    position: absolute;
    bottom: 0;
    left: 0;
    display: inline-block;
    line-height: 40px;
    text-align: right;
    padding-right: 20px;
  }
  #bottom>span{
    margin-right: 10px;
  }
  #bottom>a{
    text-decoration:none;
    color: blue;
  }
  #bottom>a:link{
    color: blue;
  }
  #bottom>a:visited{
    color: blue;
  }
  #bottom>a:hover{
    color:red;
  }
  #name{
    line-height: 110px;
    color: white;
    font-size: 32px;
    font-weight: bold;
    float: left;
    margin-left: 20px;
    font-family: 楷体;
  }
  #date{
    width: 260px;
    height: 110px;
    float: right;
    position: relative;
  }
  #time{
    width: 260px;
    color: #000000;
    position: absolute;
    bottom: 0;
    margin-left:auto;
    margin-right:auto;
  }
  #time>span{
    margin-left: 10px;
    color: white;
    font-size: 20px;
  }
  #day{
    width: 260px;
    color: #000000;
    position: absolute;
    top: 25px;
    margin-left:auto;
    margin-right:auto;
    color: white;
    font-size: 20px;
  }
  #today{
    width: 260px;
    color: #000000;
    position: absolute;
    top: 50px;
    margin-left:auto;
    margin-right:auto;
    color: white;
    font-weight: bold;
    font-size: 24px;
  }
</style>
