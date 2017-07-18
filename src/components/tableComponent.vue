<template>
<div id = "tableComponent">
<table>
    	<tr>
    		<th v-on:click = "sortByKey(persons,counter++)">Name</th>
    		<th>PhoneNumber</th>
    	</tr>
    	<tr v-for = "person in persons">
    		<td>{{person.name}}</td>
    		<td>{{person.phoneNum}}</td>
    		<td>{{searchInfo}}</td>
    	</tr>
    </table>
    </div>
</template>
<script>
export default{
	data: function () {
		return {
      counter: '0',
	  persons:[
				{
					name: 'Tlice',
					phoneNum: '1240',
					id : '1'
				},
				{
					name: 'Aom',
					phoneNum: '1256',
					id : '2'
				},
				{
					name: 'Jack',
					phoneNum: '5749',
					id : '3'
				}
			]
		}
	},
	props:['myMessage'],
	methods:{
		sortByKey: function (persons,counter) {
      if (counter%2){
        persons.sort(function(a,b){
        if(a.name<b.name){
          return -1;
        }else if(a.name==b.name){
          return 0;
        }else{
          return 1;
        }
      })
      }
      else{
        persons.sort(function(a,b){
          if(a.name<b.name){
            return 1;
          }
          else{
            if(a.name == b.name){
              return 0;
            }
            else{
              return -1;
            }
          }
        })
      }
	}
  },
 computed:{
 	 searchInfo:function(){
 	 	if(this.myMessage ==='')
 	 		{return 'nothing!'
 	 		 console.log(1)
 	 }
 	 	else if(this.myMessage == this.persons.name)
 	 		{return 'found!'
 	 	console.log(2)
 	 }
  	
  }
 }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#tableComponent{
  margin-top: 20px;
  position: absolute;
  left: 30%
}
</style>
