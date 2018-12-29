import Vue from 'vue'
import Router from 'vue-router'
import layout from '../views/layout/layout'
import school from '../views/layout/school'
import testList from "../views/test/testList"
import report from "../views/test/report"
import login from "../views/login/login"

Vue.use(Router)

export default new Router({
  routes: [
    //登陆页
    {path:"/login",
     name:'登陆',
     component:login
    },
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
