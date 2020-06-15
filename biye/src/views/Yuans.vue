<template>
  <div>
  <div style="width:1198px;height:1000px;background:#f6f6fa;border-left: 0;border-top: 0;border-right: 2px solid #cdcdcd;border-bottom: 2px solid #cdcdcd;">
    <table style="">
      <tr style="width:1196px;background: #ffffff;height: 50px;display:inline-block;border:1px solid black;">
        <th>商品名称</th>
        <th >单价</th>
        <th >库存数量</th>
        <th>上架日期</th>
        <th style="width: 380px;border: 0">操作</th>
      </tr>
      <tr  v-for="(aa, index) in test" :key="index">
        <td>{{aa.name}}</td>
        <td>{{aa.dan}}</td>
        <td>{{aa.ku}}</td>
        <td>{{aa.time}}</td>
        <td style="width: 380px;border: 0">
          <input type="button" value="购买" @click="show1(index)"  style="width: 100px;height: 30px;border:0;background: linear-gradient(to top left, rgba(255,0,0,1),rgba(255,0,0,0.9),rgba(255,0,0,0));border-radius: 5px;color: white;font-weight: bold">
        </td>
      </tr>
    </table>
  </div>
    <div id="hidebg"></div>
    <div id="hidebox">
      <div style="width: 500px;height: 25px">
        <span style="float:left;left:0;color: rgba(123,104,238,1);display: inline-block">购买</span>
        <span @click="hide()" style="cursor:pointer;float:right;right: 10px;">关闭</span>
      </div>
      <hr style="border:0;height: 2px;background:linear-gradient(to right, rgba(123,104,238,1),rgba(123,104,238,0.9),rgba(123,104,238,0));margin: 5px 0;">
      <div>
        <table>
          <tr >
            <td style="width: 100px">商品名称:</td>
            <td style="width: 200px">{{tname}}</td>
          </tr>
          <tr>
            <td style="width: 100px">单价:</td>
            <td style="width: 200px">{{tdan}}</td>
          </tr>
          <tr >
            <td style="width: 100px">购买数量:</td>
            <td style="width: 200px"><input type="text" id="tshu" style="height: 20px;border-radius: 5px;border: 2px solid #cdcdcd;padding-left: 10px;" v-model="shul" @keyup="mai"></td>
          </tr>
          <tr >
            <td style="width: 100px">需付金额:</td>
            <td style="width: 200px">{{jin}}</td>
          </tr>
          <tr>
            <td style="width: 150px"><input type="button" value="确定" @click="yes" style="width: 100px;height: 30px;border:0;background: linear-gradient(to top left, rgba(30,144,255,1),rgba(30,144,255,0.9),rgba(30,144,255,0));border-radius: 5px;color: white;font-weight: bold"></td>
            <td style="width: 150px"><input type="button" value="取消"  @click="hide" style="width: 100px;height: 30px;border:0;background: linear-gradient(to top left, rgba(211,211,211,1),rgba(211,211,211,0.9),rgba(211,211,211,0));border-radius: 5px;color: white;font-weight: bold"></td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Yuans',
  data () {
    return {test: {}, jin: {}, shul: '', tname: {}, tdan: {}, tid: {}, tku: {}, tchu: {}, jin2: {}}
  },
  methods: {
    show1 (index) {
      this.i = index
      this.tname = this.test[this.i].name
      this.tdan = this.test[this.i].dan
      this.tid = this.test[this.i].id
      this.tku = this.test[this.i].ku
      this.tchu = this.test[this.i].chu
      this.jin2 = this.test[this.i].jin
      var jin2 = this.jin2
      console.log(jin2)
      var hideobj = document.getElementById('hidebg')
      hideobj.style.display = 'block'
      document.getElementById('hidebox').style.display = 'block'
    },
    hide () {
      this.shul = ''
      this.jin = ''
      document.getElementById('hidebg').style.display = 'none'
      document.getElementById('hidebox').style.display = 'none'
    },
    mai () {
      var shu = this.shul
      var dan = this.tdan
      this.jin = shu * dan
    },
    yes () {
      let y = new Date().getFullYear()
      let m = new Date().getMonth() + 1
      let d = new Date().getDate()
      let time2 = y + '-' + m + '-' + d
      var na1 = this.tname
      var shu = this.shul
      var jin = this.jin
      var jin2 = this.jin2
      var dan = this.tdan
      var jin1 = parseInt(jin) + parseInt(jin2)
      var k = this.tku
      var ku = k - shu
      var id = this.tid
      var chu1 = this.tchu
      var chu = parseInt(shu) + parseInt(chu1)
      var params = new URLSearchParams()
      params.append('name', na1)
      params.append('chu', chu)
      params.append('jin', jin)
      params.append('dan', dan)
      params.append('ku', ku)
      params.append('id', id)
      params.append('time', time2)
      params.append('shu', shu)
      params.append('jin1', jin1)
      console.log(jin1)
      this.axios.post(`api/yuanmai`, params).then(res => {
        document.getElementById('hidebg').style.display = 'none'
        document.getElementById('hidebox').style.display = 'none'
      })
      this.axios.post(`api/yuanaaa`, params).then(res => {
        document.getElementById('hidebg').style.display = 'none'
        document.getElementById('hidebox').style.display = 'none'
        this.shul = ''
        this.jin = ''
        location.reload()
      })
    }
  },
  mounted () {
    this.axios.get('api/ku').then(res => {
      console.log(res)
      this.test = res.data
      var test = res.data
      var tid = test[0].id
      console.log(res.data)
      console.log(tid)
    })
  }
}
</script>

<style scoped>
  th{
    width: 200px;
    background: #ffffff;
    height: 48px;
    border-right: 1px solid black;
  }
  td{
    display: inline-block;
    width: 203px;
    height: 48px;
    float: left;
    background: #ffffff;
    line-height: 48px;
    border: 0;
  }
  #hidebg, #hidebg1{ position:absolute;left:0px;top:0px;
    background-color:#000;
    width:100%;  /*宽度设置为100%，这样才能使隐藏背景层覆盖原页面*/
    height: 1300px;
    filter:alpha(opacity=60);  /*设置透明度为60%*/
    opacity:0.6;  /*非IE浏览器下设置透明度为60%*/
    display:none;
    z-Index:3;}
  #hidebox, #hidebox1{position:fixed;width:500px;height:300px;top:35%;left:35%;border-radius: 5px;background-color:#fff;display:none;z-Index:3;padding: 10px;}
  #add{
    width: 1198px;
    height: 40px;
    background: linear-gradient(to top, rgba(0,255,127,1),rgba(60,179,113,1),rgba(0,255,127,0.9),rgba(0,255,127,0.9),rgba(0,255,127,0.9),rgba(0,255,127,0.9),rgba(0,255,127,0.9),rgba(0,255,127,0));
    color: white;
    font-size: 30px;
    font-weight: bold;
    line-height: 40px;
    border-radius: 50px;
    margin-top: 10px;
    display: block;
    cursor: pointer;
  }
  input::placeholder{
    color:#aab2bd;
  }
</style>
