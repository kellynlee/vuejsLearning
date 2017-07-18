import Vue from 'vue'
import Router from 'vue-router'
// import Hello from 'components/Hello'
import SearchList from '../components/infoSearch/infoSearch'
import ShiftingList from '../components/shiftingList'
import TableComponent from '../components/tableComponent'
import CheckInput from '../components/checkInput/appCheckInput'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/SearchList',
      name: 'SearchList',
      component: SearchList
    },
    {
      path: '/ShiftingList',
      name: 'ShiftingList',
      component: ShiftingList
    },
    {
    	path:'/TableComponent',
    	name:'TableComponent',
    	component:TableComponent
    },
    {
    	path:'/CheckInput',
    	name:'CheckInput',
    	component:CheckInput
    }
  ]
})
