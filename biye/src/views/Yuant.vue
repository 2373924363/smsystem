<template>
  <div style="width:1198px;height:1000px;background:#f6f6fa;border-left: 0;border-top: 0;border-right: 2px solid #cdcdcd;border-bottom: 2px solid #cdcdcd;">
    <table style="">
      <tr style="width:1196px;background: #ffffff;height: 50px;display:inline-block;border:1px solid black;">
        <th>商品名称</th>
        <th style="width: 100px">单价</th>
        <th>购买数量</th>
        <th>消费金额</th>
        <th style="width: 250px">购买日期</th>
        <th style="width: 380px;border: 0">操作</th>
      </tr>
      <tr  v-for="(aa, index) in test" :key="index">
        <td>{{aa.name}}</td>
        <td  style="width: 80px">{{aa.dan}}</td>
        <td style="width: 210px">{{aa.shu}}</td>
        <td style="width: 150px">{{aa.jin}}</td>
        <td style="width: 240px">{{aa.time}}</td>
        <td style="width: 340px;border: 0">
          <input type="button" value="退货" @click="tui(index)"  style="width: 100px;height: 30px;border:0;background: linear-gradient(to top left, rgba(255,0,0,1),rgba(255,0,0,0.9),rgba(255,0,0,0));border-radius: 5px;color: white;font-weight: bold">
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: 'Yuant',
  data () {
    return {
      test: {},
      test1: {}
    }
  },
  methods: {
    tui (index) {
      console.log(index)
      var i = this.test[index].id
      var name = this.test[index].name
      var jin = this.test[index].jin
      var shu = this.test[index].shu
      var shu1 = this.test[index].shu
      console.log(name)
      console.log(jin)
      console.log(shu)
      var params = new URLSearchParams()
      params.append('id', i)
      params.append('name', name)
      params.append('jin', jin)
      params.append('shu', shu)
      params.append('shu1', shu1)
      this.axios.post('api/yuantui', params).then(res => {
        console.log(res.data)
      })
      this.axios.post('api/yuankuh', params).then(res => {
        console.log(res.data)
      })
      this.test.splice(index, 1)
    }
  },
  mounted () {
    this.axios.get('api/yuanmaic').then(res => {
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
    width: 177px;
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
