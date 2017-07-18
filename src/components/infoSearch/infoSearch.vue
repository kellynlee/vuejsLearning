<template>
    <div>
      <div class="searchBar">
            <el-row :gutter="10">
                <el-col :span="2">
                    <div class="grid-content-search "></div>
                </el-col>
                <el-col :span="20">
                    <div class="grid-content-search bg-purple-light">
                        <el-col :span="6">
                            <div class="grid-content-search">
                                <el-input type="text" v-model="name" placeholder="input name" class="inputPosition">
                            </div>
                        </el-col>
                        <el-col :span="6">
                            <div class="grid-content-search ">
                            <el-select v-model="sexuality" class="inputPosition">
                              <el-option v-for="option in options"
                              :label="option.label"
                              :value="option.value"></el-option>
                            </el-select>
                            </div>
                        </el-col>
                        <el-col :span="6">
                            <div class="grid-content-search ">
                                <el-input type="text" v-model="age" placeholder="input age" class="inputPosition">
                            </div>
                        </el-col>
                        <el-col :span="6" class="btnPosition">
                            <el-button-group>
                            <el-button type="primary" v-on:click="isClick" > search</el-button>
                            <el-button v-on:click="reSearch"> research</el-button>
                            <el-button @click="dialogVisible = true">Add</el-button>
                            <el-dialog title="Add New Info" v-model="dialogVisible" size="large">
                            <el-form :inline="true" :model="toAdd">
                                <el-form-item label="Name">
                                    <el-input v-model="toAdd.name" placeholder="Name"></el-input>
                                </el-form-item>
                                <el-form-item label="Sexuality">
                                    <el-select v-model="toAdd.sexuality" placeholder="Sexuality">
                                        <el-option label="Famale" value="Female"></el-option>
                                        <el-option label="Male" value="Male"></el-option>
                                    </el-select>
                                </el-form-item>
                                <el-form-item label="Age">
                                    <el-input v-model="toAdd.age" placeholder="Age"></el-input>
                                </el-form-item>
                            </el-form>
                            <span slot="footer" class="dialog-footer">
                          <el-button type="primary" @click="addInfo">confirm</el-button>
                        <el-button @click="dialogVisible = false">cancel</el-button>
                      </span>
                        </el-dialog>
                            </el-button-group>
                        </el-col>
                    </div>
                </el-col>
                <el-col :span="2">
                    <div class="grid-content-show "></div>
                </el-col>
            </el-row>
        </div>
        <div class="show">
            <el-row :gutter="10">
                <el-col :span="2">
                    <div class="grid-content-show "></div>
                </el-col>
                <el-col :span="20">
                    <div class="grid-content-show ">
                        <el-row :gutter="5">
                            <el-col :span="2">
                                <div class="grid-content-show "></div>
                            </el-col>
                            <el-col :span="20">
                                <div class="grid-content-show ">
                                  <info-to-show
                                   ref="child"
                                  :nameMsg="name"
                                  :sexualityMsg="sexuality"
                                  :ageMsg="age"
                                  :addMsg="toAdd"></info-to-show>
                                </div>
                            </el-col>
                            <el-col :span="2">
                                <div class="grid-content-show "></div>
                            </el-col>
                        </el-row>
                    </div>
                </el-col>
                <el-col :span="2">
                    <div class="grid-content-show "></div>
                </el-col>
            </el-row>
        </div>
        <router-view></router-view>
    </div>
</template>
<script>
import infoToShow from './infoToShow'
export default{
  data:function (){
    return{
      toAdd:{
        name:'',
        sexuality:'',
        age:''
      },
      dialogVisible:false,
      name:'',
      sexuality:'',
      age:'',
      options:[
      {
        value:'Female',
        label:'Female'
      },
      {
        value:'Male',
        label:'Male'
      }
      ]
    }
  },
  components:{infoToShow},
  methods:{
    isClick:function(){
      this.$refs.child.eventHandler(1)
    },
    reSearch:function(){
      this.$refs.child.searchAgain(1)
      this.name = ''
      this.sexuality = ''
      this.age = ''
    },
    addInfo:function(){
      this.$refs.child.addNew(1)
      this.dialogVisible = false
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
    //background-color: #ecf0f1;
}

#app {
    position: absolute;
    height: 100%;
    width: 100%;
    display: block;
    margin: 0 auto;
    text-align: center;
}

.searchBar {
    position: absolute;
    height: 80px;
    width: 100%;
}
.show{
  position: absolute;
  margin-top: 100px;
  height: 200px;
  width: 100%;
}
.el-row {
    margin-bottom: 20px;
    display: block;
    $:lasr-child {
        margin-bottom: 0;
    }
}

.el-col {
    border-radius: 4px;
}

.bg-purple-light {
    background: #ecf0f1;
}

.grid-content-search {
    border-radius: 4px;
    min-height: 80px;
}

.grid-content-show {
    border-radius: 4px;
    min-height: 200px;
}

.row-bg {
    padding: 10px 0;
}
.inputPosition{
  margin-top: 25px;

}
.btnPosition{
  padding-top: 25px;
}
</style>
