<template>
    <div class="a1">
        
        <div class="h-left">
       中学心理管理系统
        </div>
        <div class="h-right">
            <ul>
                <li>首页</li>
                <li>提醒</li>
                <li>帮助</li>
                <li>你好<span>XXX</span></li>
                <li>退出</li>
            </ul>
        </div>
    </div>
</template>

<script>
<<<<<<< HEAD
=======
   import $ from "jquery";
   
>>>>>>> de26c39ac5acef032fb661e3e8444bb2b77babe6
    export default {
        
    }
</script>

<style lang="scss" scoped>
.a1{
    height: 40px;
    // width: 100%;
    background-color: #FCE7E7;
}
   .h-left{
       float: left;
       height: 40px;
       line-height: 40px;
   }
    .h-right{
       float: right;
       height: 40px;

       >ul{
           float: right;
           height: 40px;
           line-height: 40px;

           >li{
               float: left;
               margin-right: 20px;
           }
       }
   }
   
</style>