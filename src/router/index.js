import Vue from 'vue'
import Router from 'vue-router'
import layout from '../views/layout/layout'
import school from '../views/layout/school'
import testList from "../views/test/testList"
import report from "../views/test/report"
<<<<<<< HEAD
=======
import login from "../views/login/login"
>>>>>>> de26c39ac5acef032fb661e3e8444bb2b77babe6

Vue.use(Router)

export default new Router({
  routes: [
<<<<<<< HEAD
=======
    //登陆页
    {path:"/login",
     name:'登陆',
     component:login
    },
>>>>>>> de26c39ac5acef032fb661e3e8444bb2b77babe6
    //初始页
    { path: '/index',
      name: '生涯测评',
      component: layout,
      children:[
        {path:"school",name:"学校",component:school},
        {path:"testList",name:"测评报告",component:testList},
        {path:"report",name:"个体报告",component:report},
      ]
      
    },
    //重定向
    { path: '/',
     redirect: '/index/school',
    }
    
  ]
})
