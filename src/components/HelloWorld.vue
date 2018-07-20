<template>
  <div class="hello">
    <input type="button" value="点击获取数据" @click="getMsg">
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods : {
    getMsg(){
      var url = '/finsuitPhone/deal';
      var param = 'param_key:{"head":{"TYPE":"GET_PRD_RANK","SESSION_ID":"","TOKEN":"","DEVICE_ID":"","SYSTEM_TYPE":"h5","VERSION":""},"param":{"ORG_ID":"","SEARCH_NAME":"","SEARCH_PERIOD":"","SEARCH_RISK_LEVEL":"","PRD_TYPE":"2","QRY_TYPE":"","SORT_TYPE":"1","currentPage":"1"}}';
      this.$post(url,param).then(res=>{
        console.log(res);
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
