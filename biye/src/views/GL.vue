<template>
    <div id="app">
      <div style="width:1198px;height:1000px;background:#f6f6fa;border-left: 0;border-top: 0;border-right: 2px solid #cdcdcd;border-bottom: 2px solid #cdcdcd;">
        <table style="">
          <tr style="width:1196px;background: #ffffff;height: 50px;display:inline-block;border:1px solid black;">
            <th>姓名</th>
            <th style="width: 100px">性别</th>
            <th style="width: 250px">联系电话</th>
            <th>用户名</th>
            <th>密码</th>
            <th style="width: 380px;border: 0">操作</th>
          </tr>
          <tr  v-for="(aa, index) in test" :key="index">
            <td style="width: 180px">{{aa.name}}</td>
            <td style="width: 100px">{{aa.xing}}</td>
            <td style="width: 210px">{{aa.phone}}</td>
            <td style="width: 190px">{{aa.nameid}}</td>
            <td style="width: 175px">{{aa.pass}}</td>
            <td style="width: 340px;">
              <input type="button" value="编辑"  @click="show1(index)" style="width: 100px;height: 30px;border:0;background: linear-gradient(to top left, rgba(30,144,255,1),rgba(30,144,255,0.9),rgba(30,144,255,0));border-radius: 5px;color: white;font-weight: bold">
              <input type="button" id="shan" @click="shan(index)" value="删除" style="width: 100px;height: 30px;border:0;background: linear-gradient(to top left, rgba(255,0,0,1),rgba(255,0,0,0.9),rgba(255,0,0,0));border-radius: 5px;color: white;font-weight: bold">
            </td>
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
              <td style="width: 50px">姓名:</td>
              <td style="width: 200px"><input type="text" id="tname1" style="height: 20px;border-radius: 5px;border: 2px solid #cdcdcd;padding-left: 10px;" placeholder="请输入真实姓名"></td>
            </tr>
            <tr>
              <td style="width: 50px">性别:</td>
              <td style="width: 60px">
                <select id="select1">
                  <option value="男">男</option>
                  <option value="女">女</option>
                </select>
              </td>
            </tr>
            <tr >
              <td style="width: 50px">电话:</td>
              <td style="width: 200px"><input type="text" id="tphone1" style="height: 20px;border-radius: 5px;border: 2px solid #cdcdcd;padding-left: 10px;" placeholder="请输入联系电话"></td>
            </tr>
            <tr >
              <td style="width: 50px">用户名:</td>
              <td style="width: 200px"><input type="text" id="tnameid1" style="height: 20px;border-radius: 5px;border: 2px solid #cdcdcd;padding-left: 10px;" placeholder="请输入用户名"></td>
            </tr>
            <tr >
              <td style="width: 50px">密码:</td>
              <td style="width: 200px"><input type="text" id="tpass1" style="height: 20px;border-radius: 5px;border: 2px solid #cdcdcd;padding-left: 10px;" placeholder="请输入密码"></td>
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
              <td style="width: 50px">姓名:</td>
              <td style="width: 200px"><input type="text" id="tname" style="height: 20px;border-radius: 5px;border: 2px solid #cdcdcd;padding-left: 10px;" v-model="tname"></td>
            </tr>
            <tr>
              <td style="width: 50px">性别:</td>
              <td style="width: 60px">
                <select id="select">
                <option value="男">男</option>
                <option value="女">女</option>
                </select>
              </td>
            </tr>
            <tr >
              <td style="width: 50px">电话:</td>
              <td style="width: 200px"><input type="text" id="tphone" style="height: 20px;border-radius: 5px;border: 2px solid #cdcdcd;padding-left: 10px;" v-model="tphone"></td>
            </tr>
            <tr >
              <td style="width: 50px">密码:</td>
              <td style="width: 200px"><input type="text" id="tpass" style="height: 20px;border-radius: 5px;border: 2px solid #cdcdcd;padding-left: 10px;" v-model="tpass"></td>
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
  name: 'GL',
  data () {
    return {
      test: {},
      i: {},
      tname: {},
      tphone: {},
      tpass: {},
      na1: '',
      tid: {}
    }
  },
  methods: {
    shan (index) {
      console.log(index)
      var i = this.test[index].id
      var params = new URLSearchParams()
      params.append('id', i)
      this.axios.post('api/shan', params).then(res => {
        console.log(res.data)
      })
      this.test.splice(index, 1)
    },
    show1 (index) {
      this.i = index
      this.tname = this.test[this.i].name
      this.tphone = this.test[this.i].phone
      this.tpass = this.test[this.i].pass
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
      var phone1 = this.tphone
      var pss1 = this.tpass
      var id = this.tid
      var myselect = document.getElementById('select')
      var index = myselect.selectedIndex
      var xin = myselect.options[index].value
      var params = new URLSearchParams()
      params.append('name', na1)
      params.append('xing', xin)
      params.append('phone', phone1)
      params.append('pass', pss1)
      params.append('id', id)
      this.axios.post(`api/xiu`, params).then(res => {
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
      var name2 = document.getElementById('tname1').value
      var phone2 = document.getElementById('tphone1').value
      var nameid2 = document.getElementById('tnameid1').value
      var pass2 = document.getElementById('tpass1').value
      var myselect1 = document.getElementById('select1')
      var index1 = myselect1.selectedIndex
      var xin1 = myselect1.options[index1].value
      var params = new URLSearchParams()
      params.append('name', name2)
      params.append('xing', xin1)
      params.append('phone', phone2)
      params.append('nameid', nameid2)
      params.append('pass', pass2)
      this.axios.post(`api/addg`, params).then(res => {
        document.getElementById('hidebg').style.display = 'none'
        document.getElementById('hidebox').style.display = 'none'
        location.reload()
      })
    }
  },
  mounted () {
    this.axios.get('api/list').then(res => {
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
    width: 198px;
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
