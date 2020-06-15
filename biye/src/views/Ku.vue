<template>
    <div>
      <div style="width:1198px;height:1000px;background:#f6f6fa;border-left: 0;border-top: 0;border-right: 2px solid #cdcdcd;border-bottom: 2px solid #cdcdcd;">
        <table style="">
          <tr style="width:1196px;background: #ffffff;height: 50px;display:inline-block;border:1px solid black;">
            <th>商品名称</th>
            <th >库存数量</th>
            <th >出售数量</th>
            <th>退货数量</th>
            <th style="width: 380px;border: 0">操作</th>
          </tr>
          <tr  v-for="(aa, index) in test" :key="index">
            <td>{{aa.name}}</td>
            <td>{{aa.ku}}</td>
            <td style="width: 200px">{{aa.chu}}</td>
            <td style="width: 210px">{{aa.tui}}</td>
            <td style="width: 375px;"><input type="button" @click="show1(index)" value="编辑" style="width: 100px;height: 30px;border:0;background: linear-gradient(to top left, rgba(30,144,255,1),rgba(30,144,255,0.9),rgba(30,144,255,0));border-radius: 5px;color: white;font-weight: bold">
              <input type="button" @click="shan(index)" value="删除" style="width: 100px;height: 30px;border:0;background: linear-gradient(to top left, rgba(255,0,0,1),rgba(255,0,0,0.9),rgba(255,0,0,0));border-radius: 5px;color: white;font-weight: bold"></td>
          </tr>
        </table>
        <div id="add" @click="add">+</div>
      </div>
      <div id="hidebg1"></div>
      <div id="hidebox1" style="height: 350px">
        <div style="width: 500px;height: 25px">
          <span style="float:left;left:0;color: rgba(123,104,238,1);display: inline-block">新增</span>
          <span @click="hide()" style="cursor:pointer;float:right;right: 10px;">关闭</span>
        </div>
        <hr style="border:0;height: 2px;background:linear-gradient(to right, rgba(123,104,238,1),rgba(123,104,238,0.9),rgba(123,104,238,0));margin: 5px 0;">
        <div>
          <table>
            <tr >
              <td style="width: 100px">商品姓名:</td>
              <td style="width: 200px"><input type="text" id="tname1" style="height: 20px;border-radius: 5px;border: 2px solid #cdcdcd;padding-left: 10px;" placeholder="请输入商品名称"></td>
            </tr>
            <tr>
              <td style="width: 100px">商品类别:</td>
              <td style="width: 60px">
                <select id="select1">
                  <option value="文具类">文具类</option>
                  <option value="体育类">体育类</option>
                </select>
              </td>
            </tr>
            <tr >
              <td style="width: 100px">商品单价:</td>
              <td style="width: 200px"><input type="text" id="tdan1" style="height: 20px;border-radius: 5px;border: 2px solid #cdcdcd;padding-left: 10px;" placeholder="请输入商品单价"></td>
            </tr>
            <tr >
              <td style="width: 100px">库存数量:</td>
              <td style="width: 200px"><input type="text" id="tku1" style="height: 20px;border-radius: 5px;border: 2px solid #cdcdcd;padding-left: 10px;" placeholder="请输入库存数量"></td>
            </tr>
            <tr>
              <td style="width: 150px"><input type="button" value="确定" @click="yes" style="width: 100px;height: 30px;border:0;background: linear-gradient(to top left, rgba(30,144,255,1),rgba(30,144,255,0.9),rgba(30,144,255,0));border-radius: 5px;color: white;font-weight: bold"></td>
              <td style="width: 150px"><input type="button" value="取消"  @click="hide" style="width: 100px;height: 30px;border:0;background: linear-gradient(to top left, rgba(211,211,211,1),rgba(211,211,211,0.9),rgba(211,211,211,0));border-radius: 5px;color: white;font-weight: bold"></td>
            </tr>
          </table>
        </div>
      </div>
      <div id="hidebg"></div>
      <div id="hidebox">
        <div style="width: 500px;height: 25px">
          <span style="float:left;left:0;color: rgba(123,104,238,1);display: inline-block">编辑</span>
          <span @click="hide()" style="cursor:pointer;float:right;right: 10px;">关闭</span>
        </div>
        <hr style="border:0;height: 2px;background:linear-gradient(to right, rgba(123,104,238,1),rgba(123,104,238,0.9),rgba(123,104,238,0));margin: 5px 0;">
        <div>
          <table>
            <tr >
              <td style="width: 70px">商品名称:</td>
              <td style="width: 200px"><input type="text" id="tname" style="height: 20px;border-radius: 5px;border: 2px solid #cdcdcd;padding-left: 10px;" v-model="tname"></td>
            </tr>
            <tr >
              <td style="width: 70px">商品单价:</td>
              <td style="width: 200px"><input type="text" id="tdan" style="height: 20px;border-radius: 5px;border: 2px solid #cdcdcd;padding-left: 10px;" v-model="tdan"></td>
            </tr>
            <tr >
              <td style="width: 70px">库存数量:</td>
              <td style="width: 200px"><input type="text" id="tku" style="height: 20px;border-radius: 5px;border: 2px solid #cdcdcd;padding-left: 10px;" v-model="tku"></td>
            </tr>
            <tr>
              <td style="width: 150px"><input type="button" value="确定" @click="xiu()" style="width: 100px;height: 30px;border:0;background: linear-gradient(to top left, rgba(30,144,255,1),rgba(30,144,255,0.9),rgba(30,144,255,0));border-radius: 5px;color: white;font-weight: bold"></td>
              <td style="width: 150px"><input type="button" value="取消"  @click="hide" style="width: 100px;height: 30px;border:0;background: linear-gradient(to top left, rgba(211,211,211,1),rgba(211,211,211,0.9),rgba(211,211,211,0));border-radius: 5px;color: white;font-weight: bold"></td>
            </tr>
          </table>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'Ku',
  data () {
    return {
      test: {},
      i: {},
      tname: {},
      tdan: {},
      tku: {},
      tid: {}
    }
  },
  methods: {
    shan (index) {
      console.log(index)
      var i = this.test[index].id
      var params = new URLSearchParams()
      params.append('id', i)
      this.axios.post('api/shank', params).then(res => {
        console.log(res.data)
      })
      this.test.splice(index, 1)
    },
    show1 (index) {
      this.i = index
      this.tname = this.test[this.i].name
      this.tdan = this.test[this.i].dan
      this.tku = this.test[this.i].ku
      this.tid = this.test[this.i].id
      var hideobj = document.getElementById('hidebg')
      hideobj.style.display = 'block'
      document.getElementById('hidebox').style.display = 'block'
    },
    hide () {
      document.getElementById('hidebg').style.display = 'none'
      document.getElementById('hidebox').style.display = 'none'
      document.getElementById('hidebg1').style.display = 'none'
      document.getElementById('hidebox1').style.display = 'none'
    },
    xiu () {
      var na1 = this.tname
      var dan1 = this.tdan
      var ku1 = this.tku
      var id = this.tid
      var params = new URLSearchParams()
      params.append('name', na1)
      params.append('dan', dan1)
      params.append('ku', ku1)
      params.append('id', id)
      this.axios.post(`api/xiuk`, params).then(res => {
        document.getElementById('hidebg').style.display = 'none'
        document.getElementById('hidebox').style.display = 'none'
        location.reload()
      })
    },
    add () {
      var hideobj1 = document.getElementById('hidebg1')
      hideobj1.style.display = 'block'
      document.getElementById('hidebox1').style.display = 'block'
    },
    yes () {
      let y = new Date().getFullYear()
      let m = new Date().getMonth() + 1
      let d = new Date().getDate()
      let time2 = y + '-' + m + '-' + d
      var name2 = document.getElementById('tname1').value
      var dan2 = document.getElementById('tdan1').value
      var ku2 = document.getElementById('tku1').value
      var myselect1 = document.getElementById('select1')
      var index1 = myselect1.selectedIndex
      var lei1 = myselect1.options[index1].value
      var params = new URLSearchParams()
      params.append('name', name2)
      params.append('lei', lei1)
      params.append('dan', dan2)
      params.append('ku', ku2)
      params.append('time2', time2)
      this.axios.post(`api/addzong`, params).then(res => {
        document.getElementById('hidebg').style.display = 'none'
        document.getElementById('hidebox').style.display = 'none'
        location.reload()
      })
    }
  },
  mounted () {
    this.axios.get('api/ku').then(res => {
      console.log(res)
      this.test = res.data
      console.log(res.data)
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
    width: 205px;
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
    z-Index:2;}
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
