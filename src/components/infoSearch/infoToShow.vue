<template>
    <div id="infoToShow">
        <el-col :span="1">
        </el-col>
        <el-col :span="22">
            <el-table :data="persons" style="width:100%">
                <el-table-column type="selection" width="55">
                </el-table-column>
                <el-table-column prop="name" label="Name">
                </el-table-column>
                <el-table-column prop="sexuality" label="Sexuality">
                </el-table-column>
                <el-table-column prop="age" label="Age">
                </el-table-column>
                <el-table-column>
                    <template scope="scope">
                        <el-button size="small" @click="editHandler(scope.$index,scope.row)">Edit</el-button>
                        <el-dialog title="Edit Information" v-model="dialogVisible" size="large">
                            <el-form :inline="true" :model="afterEdit">
                                <el-form-item label="Name">
                                    <el-input v-model="afterEdit.name" placeholder="Name"></el-input>
                                </el-form-item>
                                <el-form-item label="Sexuality">
                                    <el-select v-model="afterEdit.sexuality" placeholder="Sexuality">
                                        <el-option label="Famale" value="Female"></el-option>
                                        <el-option label="Male" value="Male"></el-option>
                                    </el-select>
                                </el-form-item>
                                <el-form-item label="Age">
                                    <el-input v-model="afterEdit.age" placeholder="Age"></el-input>
                                </el-form-item>
                            </el-form>
                            <span slot="footer" class="dialog-footer">
                			    <el-button type="primary" @click="editInfo()">confirm</el-button>
                				<el-button @click="dialogVisible = false">cancel</el-button>
                			</span>
                        </el-dialog>
                        <el-button size="small" type="danger" @click="deleteInfo(scope.$index,scope.row)">Delete</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </el-col>
        <el-col :span="1">
        </el-col>
    </div>
</template>
<script>
export default {
    props: {
        nameMsg: String,
        sexualityMsg: String,
        ageMsg: String,
        addMsg:Object
    },
    data: function() {
        return {
        	index:-1,
            persons: [],
            dialogVisible: false,
            afterEdit: {
                name: '',
                sexuality: '',
                age: ''
            }
        }
    },
    methods: {
        initPersons: function() {
            return [{
                name: 'Alice',
                sexuality: 'Female',
                age: '15',
                id: 1
            }, {
                name: 'Tom',
                sexuality: 'Male',
                age: '25',
                id: 1
            }, {
                name: 'Jake',
                sexuality: 'Male',
                age: '5',
                id: 1
            }, {
                name: 'Janne',
                sexuality: 'Female',
                age: '65',
                id: 1
            }, {
                name: 'Howard',
                sexuality: 'Male',
                age: '36',
                id: 1
            }, {
                name: 'Alan',
                sexuality: 'Male',
                age: '14',
                id: 1
            }, {
                name: 'Sam',
                sexuality: 'Male',
                age: '22',
                id: 1
            }, {
                name: 'Jim',
                sexuality: 'Male',
                age: '22',
                id: 1
            }, {
                name: 'Jim',
                sexuality: 'Male',
                age: '13',
                id: 1
            }]
        },
        searchAgain: function() {
            this.persons = this.initPersons();
        },
        filterId: function(value, row) {
            return row.id === 1

        },
        eventHandler: function(msg) {
            var nameToSearch = this.nameMsg
            var ageToSearch = this.ageMsg
            var sexualityToSearch = this.sexualityMsg
            var nameIndex = -1
            var ageIndex = -1
            var sexIndex = -1
            var len = this.persons.length
                /******输入全部为空********/
            var temp = [];
            if (nameToSearch.length == 0 && ageToSearch.length == 0 && sexualityToSearch.length == 0) {
                alert('输入不能为空！')
            }
            /********全部输入********/
            else if (nameToSearch.length != 0 && ageToSearch.length != 0 && sexualityToSearch.length != 0) {
                for (var i = 0; i < len; i++) {
                    if (nameToSearch == this.persons[i].name) {
                        nameIndex = i
                        if (sexualityToSearch == this.persons[nameIndex].sexuality) {
                            if (ageToSearch == this.persons[nameIndex].age) {
                                break
                            } else {
                                alert('输入错误！')
                                nameIndex = -1
                                break
                            }
                        } else {
                            alert('输入错误！')
                            nameIndex = -1
                            break
                        }
                    } else {
                        alert('输入错误！')
                        nameIndex = -1
                        break
                    }
                }
                for (i = 0; i < len; i++) {
                    if (nameIndex == i) {
                        temp.push(this.persons[i])
                    } else {}
                }
                this.persons = temp
                return
            }
            /****************只输入名字********************/
            else if (nameToSearch.length != 0 && sexualityToSearch.length == 0 && ageToSearch.length == 0) {
                for (i = 0; i < len; i++) {
                    if (nameToSearch == this.persons[i].name) {
                        temp.push(this.persons[i])
                    } else {}
                }
                this.persons = temp
                return
            }
            /******************只输入年龄******************/
            else if (ageToSearch.length != 0 && sexualityToSearch.length == 0 && nameToSearch.length == 0) {
                for (i = 0; i < len; i++) {
                    if (ageToSearch == this.persons[i].age) {
                        temp.push(this.persons[i])
                    } else {}
                }
                this.persons = temp
                return
            }
            /******************只输入性别******************/
            else if (sexualityToSearch.length != 0 && nameToSearch == 0 && ageToSearch.length == 0) {
                for (i = 0; i < len; i++) {
                    if (sexualityToSearch == this.persons[i].sexuality) {
                        temp.push(this.persons[i])
                    } else {}
                }
                this.persons = temp
                return
            }
            /******************输入名字和年龄******************/
            else if (nameToSearch.length != 0 && ageToSearch != 0 && sexualityToSearch.length == 0) {
                for (i = 0; i < len; i++) {
                    if (nameToSearch == this.persons[i].name) {
                        nameIndex = i
                    }
                    if (ageToSearch == this.persons[i].age) {
                        ageIndex = i
                    }
                    if ((nameIndex == ageIndex) && nameIndex != -1 && ageIndex != -1) {
                        temp.push(this.persons[i])
                    } else {}
                }
                this.persons = temp
                return
            }
            /*******只输入年龄和性别********/
            else if (ageToSearch.length != 0 && sexualityToSearch.length != 0 && nameToSearch.length == 0) {
                for (i = 0; i < len; i++) {
                    if (ageToSearch == this.persons[i].age) {
                        ageIndex = i
                    }
                    if (sexualityToSearch == this.persons[i].sexuality) {
                        sexIndex = i
                    }
                    if ((sexIndex == ageIndex) && sexIndex != -1 && ageIndex != -1) {
                        temp.push(this.persons[i])
                    } else {

                    }
                }
                this.persons = temp
                return
            }
            /***********只输入名字和性别**********/
            else if (nameToSearch.length != 0 && sexualityToSearch.length != 0 && ageToSearch == 0) {
                for (i = 0; i < len; i++) {
                    if (nameToSearch == this.persons[i].name) {
                        nameIndex = i
                    }
                    if (sexualityToSearch == this.persons[i].sexuality) {
                        sexIndex = i
                    }
                    if ((nameIndex == sexIndex) && nameIndex != -1 && sexIndex != -1) {
                        temp.push(this.persons[i])
                    } else {

                    }
                }
                this.persons = temp
                return
            }
        },
        deleteInfo: function(index, row) {
            this.persons.splice(index, 1)
        },
        editInfo: function() {
        	var index = this.index
        	var nameToChange = this.afterEdit.name
        	var ageToChange = this.afterEdit.age
        	var sexToChange = this.afterEdit.sexuality
        	this.persons[index].name = nameToChange
        	this.persons[index].age = ageToChange
        	this.persons[index].sexuality = sexToChange
        	this.dialogVisible = false
        },
        editHandler:function(index,row){
        	this.dialogVisible = true
        	this.index = index
        },
        addNew:function(){
        	var temp = [
        	{
        		name:'',
        		sexuality:'',
        		age:''
        	}]
        	temp.name = this.addMsg.name
        	temp.sexuality = this.addMsg.sexuality
        	temp.age = this.addMsg.age
        	this.persons.push(temp)
        }
    },
    mounted: function() {
        this.persons = this.initPersons();
    }
}
</script>
<style scoped>
.el-col {
    border-radius: 4px;
}

.grid-content {
    border-radius: 4px;
    min-height: 500px;
}
</style>
