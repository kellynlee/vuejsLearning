<template>
    <div id="shiftingList">
        <div id="leftList">
            <ol>
                <li v-for="leftOption in leftOptions">
                    <input class="checkboxClass" type="checkbox" v-model="checkedOptions" v-bind:value="leftOption"> {{leftOption.label}}
                </li>
            </ol>
        </div>
        <div id="centerButton">
            <div class="btnClass">
                <button v-on:click="shiftToRight()">{{btnRightMsg}}</button>
            </div>
            <div>
              {{name}}
            </div>
            <div class="btnClass">
                <button v-on:click="shiftToLeft()">{{btnLeftMsg}}</button>
            </div>
        </div>
        <div id="rightList">
            <ol>
                <li v-for="rightOption in rightOptions">
                    <input class="checkboxClass" type="checkbox" v-model="checkedOptions" v-bind:value="rightOption" v-bind:class="'apple'"> {{rightOption.label}}
                </li>
            </ol>
        </div>
    </div>
</template>
<script>
export default {
  props:{
    name:String
  },
    data: function() {
        return {
          test:"qqqq",
            leftOptions: [{
                    label: 'apple',
                    id: 1
                }, {
                    label: 'banana',
                    id: 1
                }, {
                    label: 'pear',
                    id: 1
                }, {
                    label: 'strawberry',
                    id: 1
                }, {
                    label: 'watermallon',
                    id: 1
                }, {
                    label: 'mango',
                    id: 1
                }, {
                    label: 'blueberry',
                    id: 1
                }, {
                    label: 'grape',
                    id: 1
                }, {
                    label: 'tomato',
                    id: 1
                }, {
                    label: 'orange',
                    id: 1
                },

            ],
            btnRightMsg: '>',
            btnLeftMsg: '<',
            rightOptions: [],
            checkedOptions: []
        }
    },
    methods: {
        shiftToRight: function() { //向右边切换
            var index
            if (this.checkedOptions.length == 0 || this.leftOptions.length == 0) {
                alert('error') //错误操作
            } else if (this.checkedOptions.length == 10) //边界情况
            {
                var counter = this.checkedOptions.length
                for (var i = 0; i < counter; i++) {
                    if (this.checkedOptions[i].id == 1) {
                        this.checkedOptions[i].id = 2 //切换到左边后id变为2
                        this.rightOptions.push(this.checkedOptions[i])
                    }
                }
                this.leftOptions.splice(0, 10)
            } else {
                counter = this.checkedOptions.length
                var index
                for (i = 0; i < counter; i++) {
                    if (this.checkedOptions[i].id == 1) {
                        this.checkedOptions[i].id = 2 //切换到左边后id变为2
                        this.rightOptions.push(this.checkedOptions[i])
                        index = this.leftOptions.indexOf(this.checkedOptions[i])
                        this.leftOptions.splice(index, 1)
                    }
                }
            }
            this.checkedOptions = []
        },
        shiftToLeft: function() { //向右边切换

            var index
            if (this.checkedOptions.length == 0 || this.rightOptions.length == 0) {
                alert('error') //错误操作
            } else if (this.checkedOptions.length == 10) //边界情况
            {
                var counter = this.checkedOptions.length
                for (var i = 0; i < counter; i++) {
                    if (this.checkedOptions[i].id == 2) {
                        this.checkedOptions[i].id = 1 //切换到左边后id变为2
                        this.leftOptions.push(this.checkedOptions[i])
                    }
                }
                this.rightOptions.splice(0, 10)
            } else {
                counter = this.checkedOptions.length
                var index
                for (i = 0; i < counter; i++) {
                    if (this.checkedOptions[i].id == 2) {
                        this.checkedOptions[i].id = 1 //切换到左边后id变为2
                        this.leftOptions.push(this.checkedOptions[i])
                        index = this.rightOptions.indexOf(this.checkedOptions[i])
                        this.rightOptions.splice(index, 1)
                    }
                }
            }
            this.checkedOptions = []
        }
    }
}
</script>
<style scoped>
#shiftingList {
    display: inline;
}

#leftList {
    position: absolute;
    left: 15%;
    display: inline-block;
    //background-color: #1abc9c;
    height: 250px;
    width: 25%;
    float: left;
    border: 1px solid #bdc3c7;
    border-radius: 4px;
}

#rightList {
    position: absolute;
    right: 20%;
    display: inline-block;
    //background-color: #f1c40f;
    height: 250px;
    width: 25%;
    border: 1px solid #bdc3c7;
    border-radius: 4px;
}

#centerButton {
    position: absolute;
    display: inline;
    //background-color: #d35400;
    height: 100%;
    width: 10%;
    left: 43%;
}

li {
    list-style: none;
    text-align: left;
}

.btnClass {
    display: block;
    margin-top: 50px;
}

button {
    background-color: #1abc9c;
    border-radius: 4px;
    color: #ecf0f1;
    border-style: none;
    height: 30px;
    width: 50px;
}

button:hover {
    cursor: pointer;
    background-color: #ecf0f1;
    color: #1abc9c;
    transition: background-color 1s;
    -moz-transition: background-color 1s;
    -webkit-transition: background-color 1s;
    -o-transition: background-color 1s;
}

.checkcoxClass {}
</style>
