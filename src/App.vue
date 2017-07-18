<template>
<div>
  <el-row>
    <el-col :span="4" :offset="4">
      <el-popover
        ref="search"
        placement="top-start"
        title="信息检索编辑"
        width="200"
        trigger="hover"
        content="使用elementUI组件完成开发，实现了表格信息的增、删、改、查这四种基本操作。">
      </el-popover>
      <el-button type="primary" @click="swichToSearch" v-popover:search>信息检索编辑</el-button>
    </el-col>
    <el-col :span="4"> 
    <el-popover
        ref="shift"
        placement="top-start"
        title="信息穿梭框"
        width="200"
        trigger="hover"
        content="实现选中任意一边，点击切换，向另一边增加数据，同向或不选会有信息提示"> 
      </el-popover>
      <el-button type="primary" @click="swichToShift" v-popover:shift>数据穿梭框</el-button>
    </el-col>
    <el-col :span="4">  
    <el-popover
        ref="table"
        placement="top-start"
        title="表格"
        width="200"
        trigger="hover"
        content="vue初探，使用v-for渲染表格，点击name会进行排序">
      </el-popover>
      <el-button type="primary" @click="swichToTable" v-popover:table>表格</el-button>
    </el-col>
    <el-col :span="4">  
    <el-popover
        ref="check"
        placement="top-start"
        title="输入检查"
        width="200"
        trigger="hover"
        content="联系使用不同的正则表达式来进行输入检查，vue父子组件传参初探">
    </el-popover>
      <el-button type="primary" @click="swichToCheck" v-popover:check>输入检查</el-button>
    </el-col>
  </el-row>
  <el-row v-if="!isChoosen">
      <el-col :offset="8">
        <img src="./assets/logo.png">
      <el-row>
        <span>学习vuejs的过程中进行的一些练习小项目，hover显示详情：）</span>
      </el-row>
      </el-col>
  </el-row>
  <router-view></router-view>
</div>
</template>

<script>
  export default {
    data:function (){
      return {
        isChoosen:''
      }
    },
    methods:{
      swichToSearch:function () {
        this.isChoosen = true
        this.$router.push({
          name:'SearchList'
        })
      },
      swichToShift:function () {
        this.isChoosen = true
        this.$router.push({
          name:'ShiftingList'
        })
      },
      swichToTable:function () {
        this.isChoosen = true
        this.$router.push({
          name:'TableComponent'
        })
      },
      swichToCheck:function () {
        this.isChoosen = true
        this.$router.push({
          name:'CheckInput'
        })
      }
    },
    mounted:function () {
      if (this.$route.path == '/'){
        this.isChoosen = false
      }else{
        this.isChoosen = true
      }
    }
  }
</script>