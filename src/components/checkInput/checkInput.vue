<template>
    <div id="checkInput">
        <input :value="msg" @input="checkInput">
        <span class="notice">{{notice}}</span>
    </div>
</template>
<script>
export default {
    props: ['type'],
    data: function() {
        return {
            msg: '',
            notice: ''
        }
    },
    methods: {
        checkInput(e) {
            this.msg = e.target.value
            var index = this.msg.length
                /*                 数字                */
            if (this.type == "number") {
                if (/^[A-Za-z]+$/.test(this.msg[index - 1]) || /^[\u4e00-\u9fa5],{0,}$/.test(this.msg[index - 1])) {
                    this.notice = "wrong type!"
                    this.msg = this.msg.substring(0, index - 1)
                } else {
                    this.notice = ''
                }
            }
            /*                 电话号码                */
            if (this.type == "phone") {
                if (/^[A-Za-z]+$/.test(this.msg[index - 1]) || /^[\u4e00-\u9fa5],{0,}$/.test(this.msg[index - 1])) {
                    this.msg = this.msg.substring(0, index - 1)
                    this.notice = 'wrong type!'
                } else {
                    this.notice = ''
                }
                this.msg = this.msg.substring(0, 12)
            }
            /*                  中文                */
            if (this.type == "chinese") {
                if (/^[A-Za-z]+$/.test(this.msg[index - 1]) || /^[0-9]*$/.test(this.msg[index - 1])) {
                    this.msg = this.msg.substring(0, index - 1)
                    this.notice = 'wrong type'
                } else {
                    this.notice = ''
                }
            }
            /*                  e-mail                */
            if (this.type == "e-mail") {
                this.notice = 'input e-mail!'
                if (/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(this.msg)) {
                    this.notice = ''
                }
            }
        }
    }
}
</script>
<style>
#checkInput {
    display: block;
    position: absolute;
    height: 100%;
    width: 52%;
    right: 0;
    margin-top: 20px;
}

.notice {
    display: inline-block;
    height: 21px;
    width: 200px;
    position: absolute;
    left: 30%;
}

input {
    position: absolute;
    left: 0;
}
</style>
