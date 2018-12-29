<template>
    <div class="scrren">
     <!-- 初始页面 -->
     <div class="top1">
       <div class="left">
           <img src="../../assets/2018-12-28_153635.png" alt="" style="width:50px;height:50px;">
       </div>
       <div class="right">
          <div class="help">
              <span>XXX</span>
              <i>&nbsp;使用帮助</i>
          </div>
          <div class="dear">
              亲爱的xxx,欢迎登陆心理管理系统

          </div>
           <div class="btn">
               点击下方磁片。快捷进入相应的办公界面
           </div>
       </div>
     </div>
     <div class="box">
       <div class="box1">
            <div class="box11">
              <div class="b1">
                   <img src="../../assets/2018-12-28_153635.png" alt="" style="width:100%;height:100%;">
              </div>
              <div class="b2">
                <span>最新通知</span>
                <i>暂无通知</i>
              </div>
          </div>
           <div class="box22">
            <div class="a1">
            人员管top
            </div>
            <div class="a2">
            人员管bottom
            </div>
           </div>
       </div>
       <div class="box2">
           <div>1</div>
           <div>2</div>
           <div>3</div>
           <div>4</div>
       </div>

     </div>
    </div>
</template>

<script>
import $ from "jquery";
$(function(){
    $(".box11 .b1").mouseover(function(){
     $(this).css({transform: 'rotateY(180deg)', transition: "all 1s ease" })   
     }).mouseout(function(){
     $(this).css({transform: 'rotateY(0deg)', transition: "all 1s ease" })   
     })
     $(".box22").mouseover(function(){
     $(this).css({transform: 'rotateY(0deg)', transition: "all 1s ease" })   
     })
})
    export default {
        
    }
</script>

<style lang="scss" scoped>
 .top1{
     height: 112px;
     border-bottom: 1px solid #BDC0C3;
     padding-left: 24px;
     padding-top: 18px;
     >.left{
         display: inline-block;
         width: 75px;
        
         text-align: center;
         
     }
     >.right{
         display: inline-block;
      >.help{
          margin-bottom: 10px;
          >span{
              margin-right: 40px;
          }
      }
      >.dear{
          margin-bottom: 10px;
      }
      >.btn{
          background-color: #fff;
      }
     }
 }
 .box{
     padding-left: 20px;
     margin-top: 10px;
     >.box1{
         height: 92px;
         position: relative;
         >.box11{
            float: left;
             height: 100%;
             width: 300px;
             background-color: #999999;
              >.b1{
             float: left;
             height: 100%;
             width: 140px;
             background-color: rebeccapurple;
             box-sizing: border-box;
             border: 7px solid #CCCCCC;
                }
            // >.b1:hover{
            //     transform: rotateY(360deg);
            //     transition: all 1s ease;
                
            // }
            >.b2{
                float: left;
                >span,i{
                     display: block;
                    margin-top: 10px;
                    margin-left: 20px;
                }
            }
         }
        >.box22{
             position: absolute;
             left: 310px;
             top:0;
             float: left;
             height: 100%;
             width: 300px;
             margin-left: 10px;
             background-color: blue;
             overflow: hidden;
             >.a1,.a2{
                 width: 100%;
                 height: 100%;
             }

        }
      
     }
 }
</style>