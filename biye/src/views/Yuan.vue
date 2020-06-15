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
            <input type="button" value="删除" @click="shan(index)" style="width: 100px;height: 30px;border:0;background: linear-gradient(to top left, rgba(255,0,0,1),rgba(255,0,0,0.9),rgba(255,0,0,0));border-radius: 5px;color: white;font-weight: bold">
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Yuan',
  data () {
    return {
      test: {}
    }
  },
  methods: {
    shan (index) {
      console.log(index)
      var i = this.test[index].id
      var params = new URLSearchParams()
      params.append('id', i)
      this.axios.post('api/shany', params).then(res => {
        console.log(res.data)
      })
      this.test.splice(index, 1)
    }
  },
  mounted () {
    this.axios.get('api/yuan').then(res => {
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
    width: 204px;
    height: 48px;
    float: left;
    background: #ffffff;
    line-height: 48px;
  }
</style>
