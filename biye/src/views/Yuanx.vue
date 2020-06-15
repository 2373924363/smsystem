<template>
  <div id="app">
    <div style="width:1198px;height:1000px;background:#f6f6fa;border-left: 0;border-top: 0;border-right: 2px solid #cdcdcd;border-bottom: 2px solid #cdcdcd;">
      <table style="font-family: 楷体;font-size: 30px;" id="t">
        <tr  style=" width:1196px;background: #ffffff;height: 70px;display:inline-block;">
          <td style="text-align: right;width: 440px;height: 48px;display: inline-block;margin-right: 20px">真实姓名:</td>
          <td style="text-align: left;width: 440px;height: 48px;display: inline-block;">{{test1.name}}</td>
        </tr>
        <tr  style=" width:1196px;background: #ffffff;height: 70px;display:inline-block;">
          <td style="text-align: right;width: 440px;height: 48px;display: inline-block;margin-right: 20px">性别:</td>
          <td style="text-align: left;width: 440px;height: 48px;display: inline-block;">{{test1.xing}}</td>
        </tr>
        <tr  style=" width:1196px;background: #ffffff;height: 70px;display:inline-block;">
          <td  style="text-align: right;width: 440px;height: 48px;display: inline-block;margin-right: 20px">联系电话:</td>
          <td style="text-align: left;width: 440px;height: 48px;display: inline-block;">{{test1.phone}}</td>
        </tr>
        <tr  style=" width:1196px;background: #ffffff;height: 70px;display:inline-block;">
          <td  style="text-align: right;width: 440px;height: 48px;display: inline-block;margin-right: 20px">用户名:</td>
          <td style="text-align: left;width: 440px;height: 48px;display: inline-block;">{{test1.nameid}}</td>
        </tr>
        <tr  style=" width:1196px;background: #ffffff;height: 70px;display:inline-block;">
          <td  style="text-align: right;width: 440px;height: 48px;display: inline-block;margin-right: 20px">密码:</td>
          <td style="text-align: left;width: 440px;height: 48px;display: inline-block;">{{test1.pass}}</td>
        </tr>
      </table>
      <div id="add" @click="show1">编辑</div>
    </div>
    <div id="hidebg"></div>
    <div id="hidebox">
      <div style="width: 500px;height: 25px">
        <span style="float:left;left:0;color: rgba(123,104,238,1);display: inline-block">编辑</span>
        <span @click="hide()" style="cursor:pointer;float:right;right: 10px;">关闭</span>
      </div>
      <hr style="border:0;height: 2px;background:linear-gradient(to right, rgba(123,104,238,1),rgba(123,104,238,0.9),rgba(123,104,238,0));margin: 5px 0;">
      <div>
        <table id="t2">
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
  name: 'Yuanx',
  data () {
    return {test1: {}, tname: {}, tphone: {}, tpass: {}, nid: {}}
  },
  methods: {
    show1 () {
      this.tname = this.test1.name
      this.tphone = this.test1.phone
      this.tpass = this.test1.pass
      var hideobj = document.getElementById('hidebg')
      hideobj.style.display = 'block'
      document.getElementById('hidebox').style.display = 'block'
    },
    hide () {
      document.getElementById('hidebg').style.display = 'none'
      document.getElementById('hidebox').style.display = 'none'
    },
    yes () {
      var na1 = this.tname
      var phone1 = this.tphone
      var pss1 = this.tpass
      var id = this.nid
      var myselect = document.getElementById('select')
      var index = myselect.selectedIndex
      var xin = myselect.options[index].value
      var params = new URLSearchParams()
      params.append('name', na1)
      params.append('xing', xin)
      params.append('phone', phone1)
      params.append('pass', pss1)
      params.append('id', id)
      this.axios.post(`api/yuanxx`, params).then(res => {
        document.getElementById('hidebg').style.display = 'none'
        document.getElementById('hidebox').style.display = 'none'
        location.reload()
      })
    }
  },
  mounted () {
    this.nid = sessionStorage.getItem('id')
    var nid1 = this.nid
    console.log(this.nid)
    var params = new URLSearchParams()
    params.append('id', nid1)
    this.axios.post(`api/yuanx`, params).then(res => {
      var test1 = res.data
      this.test1 = test1[0]
    })
  }
}
</script>

<style scoped>
  #t2>td{
    display: inline-block;
    width: 198px;
    height: 48px;
    float: left;
    background: #ffffff;
    line-height: 48px;
    border: 0;
  }
 #hidebg{ position:absolute;left:0px;top:0px;
    background-color:#000;
    width:100%;  /*宽度设置为100%，这样才能使隐藏背景层覆盖原页面*/
    height: 1300px;
    filter:alpha(opacity=60);  /*设置透明度为60%*/
    opacity:0.6;  /*非IE浏览器下设置透明度为60%*/
    display:none;
    z-Index:3;}
 #hidebox{position:fixed;width:500px;height:300px;top:35%;left:35%;border-radius: 5px;background-color:#fff;display:none;z-Index:3;padding: 10px;}
  #add{
    width: 1198px;
    height: 40px;
    background: linear-gradient(to top, rgba(0,255,127,1),rgba(60,179,113,1),rgba(0,255,127,0.9),rgba(0,255,127,0.9),rgba(0,255,127,0.9),rgba(0,255,127,0.9),rgba(0,255,127,0.9),rgba(0,255,127,0));
    color: white;
    font-size: 20px;
    line-height: 40px;
    border-radius: 50px;
    margin-top: 10px;
    display: block;
    cursor: pointer;
  }
  input::placeholder{
    color:#aab2bd;
  }
  #t2>tr>td{
    display: inline-block;
    width: 198px;
    height: 48px;
    float: left;
    background: #ffffff;
    line-height: 48px;
    border: 0;
  }
</style>
