<template>
  <div id="bg">
    <div id="ss">
      <div id="text">销售管理系统</div>
      <div id="bd">
        <div id="lg" v-if="!isReg" >
          <div>用户登录</div>
          <hr style="margin-top:5px;border:0;background: linear-gradient(to right, rgba(65,105,225,1),rgba(255,255,255,0));height:3px;"/>
          <div style="color:#808080;font-size: 15px;font-family: 宋体;text-align: center;margin-top: 10px;"><hr style="width:100px;display: inline-block"/>欢迎使用本系统<hr style="width:100px;display: inline-block"/></div>
          <div id="d">
            <form action="" class="form1">
              <input type="text" id="tt" name="nameid1" placeholder="请输入用户名" ><br>
              <input type="text" id="ttt" name="pass" placeholder="请输入密码" ><br>
              <button id="btn1" @mousedown="ms()"  @mouseup="ml()" @click="den()"> 登录 </button><br>
              <button id="btn2" @mousedown="ms2()"  @mouseup="ml2()" @click="c1()"> 注册 </button>
            </form>
          </div>
        </div>
        <div id="lg1" v-else >
          <div>用户注册</div>
          <hr style="margin-top:5px;border:0;background: linear-gradient(to right, rgba(65,105,225,1),rgba(255,255,255,0));height:3px;"/>
          <div style="color:#808080;font-size: 15px;font-family: 宋体;text-align: center;margin-top: 10px;"><hr style="width:100px;display: inline-block"/>欢迎使用本系统<hr style="width:100px;display: inline-block"/></div>
          <div id="d1">
            <form action="" name="form2">
              <input type="text" id="t4" name="name" placeholder="请输入用户名"><br>
              <input type="text" id="t5" name="xing" placeholder="请输入真实姓名"><br>
              <span style="font-size: 15px">性别：</span>
              <select id="select">
                <option value="男">男</option>
                <option value="女">女</option>
              </select>
              <input type="text" id="t1" name="phone" placeholder="请输入手机号"><br>
              <input type="text" id="t2"  name="pass" placeholder="请输入密码"><br>
              <input type="text" id="t3" placeholder="请确认密码"><br>
              <button id="btn3" @mousedown="ms3()"  @mouseup="ml3()" @click="c2()"> 注册 </button><br>
              <button id="btn4" @mousedown="ms4()"  @mouseup="ml4()" @click="c1()"> 取消 </button>
            </form>
          </div>
        </div>
      </div>
      <div style="text-align: center;margin-top: 50px;font-size: 14px;">
        <div>感谢您的使用</div>
        <div>您的浏览是给我们最大的支持</div>
      </div>
    </div>
  </div>
</template>

<script>
import store from '../store'
export default {
  name: 'Login',
  store,
  data () {
    return {
      isReg: false,
      test1: {},
      nameid: '',
      pass: '',
      nid: '',
      nameid1: {},
      nid3: {}
    }
  },
  methods: {
    ms () {
      var x = document.getElementById('btn1')
      x.style.background = 'linear-gradient(to top left, rgba(65,105,225,1),rgba(65,105,225,0.9),rgba(65,105,225,0))'
      x.style.borderRight = '2px solid #0000cd'
      x.style.borderBottom = '3px solid #0000cd'
    },
    ml () {
      var x = document.getElementById('btn1')
      x.style.background = 'linear-gradient(to top left, rgba(30,144,255,1),rgba(30,144,255,0.9),rgba(30,144,255,0))'
      x.style.borderRight = '2px solid #0000cd'
      x.style.borderBottom = '3px solid #0000cd'
    },
    ms2 () {
      var x = document.getElementById('btn2')
      x.style.background = 'linear-gradient(to top left, rgba(169,169,169,1),rgba(169,169,169,0.9),rgba(169,169,169,0))'
      x.style.borderRight = '2px solid #808080'
      x.style.borderBottom = '3px solid #808080'
    },
    ml2 () {
      var x = document.getElementById('btn2')
      x.style.background = 'linear-gradient(to top left, rgba(211,211,211,1),rgba(211,211,211,0.9),rgba(211,211,211,0))'
      x.style.borderRight = '2px solid #a9a9a9'
      x.style.borderBottom = '3px solid #a9a9a9'
    },
    ms3 () {
      var x = document.getElementById('btn3')
      x.style.background = 'linear-gradient(to top left, rgba(65,105,225,1),rgba(65,105,225,0.9),rgba(65,105,225,0))'
      x.style.borderRight = '2px solid #0000cd'
      x.style.borderBottom = '3px solid #0000cd'
    },
    ml3 () {
      var x = document.getElementById('btn3')
      x.style.background = 'linear-gradient(to top left, rgba(30,144,255,1),rgba(30,144,255,0.9),rgba(30,144,255,0))'
      x.style.borderRight = '2px solid #0000cd'
      x.style.borderBottom = '3px solid #0000cd'
    },
    ms4 () {
      var x = document.getElementById('btn4')
      x.style.background = 'linear-gradient(to top left, rgba(169,169,169,1),rgba(169,169,169,0.9),rgba(169,169,169,0))'
      x.style.borderRight = '2px solid #808080'
      x.style.borderBottom = '3px solid #808080'
    },
    ml4 () {
      var x = document.getElementById('btn4')
      x.style.background = 'linear-gradient(to top left, rgba(211,211,211,1),rgba(211,211,211,0.9),rgba(211,211,211,0))'
      x.style.borderRight = '2px solid #a9a9a9'
      x.style.borderBottom = '3px solid #a9a9a9'
    },
    c1 () {
      this.isReg = !this.isReg
      var x = document.getElementById('bd')
      x.style.height = 500 + 'px'
    },
    c2 () {
      var t4 = document.getElementById('t4').value
      var r1 = /^\D{2,16}$/
      if (!r1.test(t4)) {
        alert('用户名必须是2-16位，且不能含有数字')
        return false
      } else {
        var t2 = document.getElementById('t2').value
        var r2 = /^[a-zA-Z0-9]{4,10}$/
        if (!r2.test(t2)) {
          alert('密码必须是4-10位')
          return false
        } else {
          var t3 = document.getElementById('t3').value
          var t = document.getElementById('t2').value
          if (t3 !== t) {
            alert('重复密码必须与密码一致')
            return false
          } else {
            var t1 = document.getElementById('t1').value
            var r4 = /^1\d{10}$/
            if (!r4.test(t1)) {
              alert('手机号码必须是1开始的11位数字 ')
              return false
            } else {
              var t5 = document.getElementById('t5').value
              if (t5 === '') {
                alert('姓名不能为空')
                return false
              } else {
                var myselect = document.getElementById('select')
                var index = myselect.selectedIndex
                var xin = myselect.options[index].value
                var params = new URLSearchParams()
                params.append('name', t5)
                params.append('xing', xin)
                params.append('phone', t1)
                params.append('nameid', t4)
                params.append('pass', t2)
                this.axios.post(`api/tian`, params).then(res => {
                })
                this.isReg = !this.isReg
                return true
              }
            }
          }
        }
      }
    },
    den () {
      var tt = document.getElementById('tt')
      var ttt = document.getElementById('ttt')
      var pp = ttt.value
      var text = tt.value
      var txt = ''
      var ps = ''
      var nid2 = ''
      var le = 0
      this.axios.get('api/den1').then(res => {
        var r = res.data
        console.log(r)
        for (var i = 0; i < r.length; i++) {
          var n = r[i].nameid
          var p1 = r[i].pass
          var nid = r[i].id
          var l = r[i].lei
          if (text === n && pp === p1) {
            txt = n
            ps = p1
            nid2 = nid
            le = l
          }
        }
        if (text === txt && pp === ps) {
          if (le === 1) {
            alert('你好' + text + '管理员')
            sessionStorage.setItem('nameid', text)
            this.$router.push({
              name: '/Index',
              params: {
                nameid: text
              }
            })
          } else {
            alert('你好' + text + '员工')
            this.nameid1 = text
            this.nid3 = nid2
            sessionStorage.setItem('nameid', text)
            sessionStorage.setItem('id', nid2)
            store.commit('addItem', {
              value: this.nid3
            })
            this.$router.push({
              name: '/Yuanindex',
              params: {
                nameid: text,
                id: nid2
              }
            })
          }
        } else {
          alert('用户名或密码错误')
        }
      })
    }
  }

}
</script>

<style scoped>
  #bg{
    width: 100%;
    height: 100vh;
    background-image: url("../assets/login.png");
    position: relative;
  }
  #ss{
    width: 600px;
    height: 500px;
    position:absolute;
    left:0;
    top: 0;
    bottom: 0;
    right: 0;
    margin: auto;}
  #bd{
    width: 600px;
    height: 400px;
    background-color: rgba(255,255,255,1);
    border-bottom:3px solid #cdcdcd;
    border-right:1px solid #cdcdcd;
    border-radius: 20px;
    padding: 10px;
    margin-top: 10px;
  }
  #lg,#lg1{
    color: #4169e1;
    font-family: 楷体;
    font-weight: bold;
    font-size: 24px;
  }
  #text{
    text-align: center;
    color: rgba(255,255,255,0.8);
    font-size: 50px;
    font-family: 楷体;
    font-weight: bold;
  }
  #d>form{
    width: 300px;
    margin: 10px auto;
    position: relative;
  }
  #d>form>input{
    width: 290px;
    height: 36px;
    border-radius: 5px;
    border: 2px solid #cdcdcd;
    margin-top: 20px;
    padding-left: 10px;
  }
  #d1>form{
    width: 300px;
    margin: 10px auto;
    position: relative;
  }
  #d1>form>input{
    width: 290px;
    height: 36px;
    border-radius: 5px;
    border: 2px solid #cdcdcd;
    margin-top: 10px;
    padding-left: 10px;
  }
  input::placeholder{
    color:#aab2bd;
  }
  #btn1, #btn2, #btn3, #btn4{
    width: 304px;
    height: 36px;
    border-radius: 5px;
    outline: none;
    cursor: pointer;
  }
  #btn1{
    color: #ffffff;
    background:linear-gradient(to top left, rgba(30,144,255,1),rgba(30,144,255,0.9),rgba(30,144,255,0));
    margin-top: 20px;
    border-right: 2px solid #1e90ff;
    border-bottom: 3px solid #1e90ff;
    border-left: 0;
    border-top: 0;
    font-size: 15px;
    font-weight: bold;
  }
  #btn2{
    color: #ffffff;
    background:linear-gradient(to top left, rgba(211,211,211,1),rgba(211,211,211,0.9),rgba(211,211,211,0));
    margin-top: 20px;
    border-right: 2px solid #a9a9a9;
    border-bottom: 3px solid #a9a9a9;
    border-left: 0;
    border-top: 0;
    font-size: 15px;
    font-weight: bold;
  }
  #btn3{
    color: #ffffff;
    background:linear-gradient(to top left, rgba(30,144,255,1),rgba(30,144,255,0.9),rgba(30,144,255,0));
    margin-top: 20px;
    border-right: 2px solid #1e90ff;
    border-bottom: 3px solid #1e90ff;
    border-left: 0;
    border-top: 0;
    font-size: 15px;
    font-weight: bold;
  }
  #btn4{
    color: #ffffff;
    background:linear-gradient(to top left, rgba(211,211,211,1),rgba(211,211,211,0.9),rgba(211,211,211,0));
    margin-top: 20px;
    border-right: 2px solid #a9a9a9;
    border-bottom: 3px solid #a9a9a9;
    border-left: 0;
    border-top: 0;
    font-size: 15px;
    font-weight: bold;
  }
  input{
    outline:none;
  }
</style>
