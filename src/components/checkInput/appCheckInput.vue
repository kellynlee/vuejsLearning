<template>
  <div>
  <div class= "selectStyle">
    <select v-model="selected" class="select">
    <option v-for="option in options" v-bind:value="option.value">
      {{option.value}}
    </option>
  </select>
  </div>
  <check-input v-bind:type="selected">
  </check-input>
  <router-view></router-view>
  </div>
</template>

<script>
import checkInput from './checkInput'
export default{
  components:{checkInput},
  data:function(){
    return {
      options:[
      {value:'number'},
      {value:'phone'},
      {value:'chinese'},
      {value:'e-mail'}
      ],
      selected:'select'
    }
  }
  }
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  //color: #2c3e50;
 // margin-top: 60px;
}
body {
  margin: 0px;
  padding-top: 20px;
  position: absolute;
  display: block;
  height: 100%;
  width: 100%;
  background-color: #ecf0f1;
}
#app {
  position: absolute;
  height: 100%;
  width: 100%;
//  background-color: #2ecc71;
  display: block;
  margin: 0 auto;
  text-align: center;
}
.selectStyle{
  display: inline;
  position: absolute;
  left: 25%;
  margin-top: 20px;
}
</style>
