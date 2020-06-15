<template>
    <div>
      <div style="width:1198px;height:1000px;background:#f6f6fa;border-left: 0;border-top: 0;border-right: 2px solid #cdcdcd;border-bottom: 2px solid #cdcdcd;">
        <table style="">
          <tr style="width:1196px;background: #ffffff;height: 50px;display:inline-block;border:1px solid black;">
            <th>商品名称</th>
            <th>单价</th>
            <th>出售数量</th>
            <th style="border: 0">金额总和</th>
          </tr>
          <tr  v-for="(aa, index) in test" :key="index">
            <td>{{aa.name}}</td>
            <td>{{aa.dan}}</td>
            <td>{{aa.chu}}</td>
            <td>{{aa.jin}}</td>
            </tr>
        </table>
      </div>
    </div>
</template>

<script>
export default {
  name: 'Xs',
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
      this.axios.post('api/shan', params).then(res => {
        console.log(res.data)
      })
      this.test.splice(index, 1)
    }
  },
  mounted () {
    this.axios.get('api/xs').then(res => {
      console.log(res)
      this.test = res.data
      console.log(res.data)
    })
  }
}
</script>

<style scoped>
  th{
    width: 300px;
    background: #ffffff;
    height: 48px;
    border-right: 1px solid black;
  }
  td{
    display: inline-block;
    width: 298px;
    height: 48px;
    float: left;
    background: #ffffff;
    line-height: 48px;
    border: 0;
  }
</style>
