

    <template v-if="userId==1">
      <div class="nav">
        <ul class="left">
          <li class="firstnav">
            <span>人员管理</span>
            <i>1</i>
          </li>
          <li>
            <span>测评中心</span>
            <i>2</i>
          </li>
          <li>
            <span>咨询中心</span>
            <i>3</i>
          </li>
          <li>
            <span>档案中心</span>
            <i>2</i>
          </li>
          <li>
            <span>拓展辅导</span>
            <i>3</i>
          </li>
          <li>
            <span>文章管理</span>
            <i>2</i>
          </li>
          <li>
            <span>系统管理</span>
            <i>3</i>
          </li>
        </ul>
        <ul class="right">
          <li>
            <ul>
              <!-- <li>1.1</li> -->
              <!-- <li>1.2</li>
              <li>1.3</li>-->
              <el-row class="tac">
                <el-col :span="12">
                  <h5>人员管理</h5>
                  <el-menu
                    default-active="2"
                    class="el-menu-vertical-demo"
                    @open="handleOpen"
                    @close="handleClose"
                    background-color="#666666"
                    text-color="#fff"
                    active-text-color="#fff"
                  >
                    <el-menu-item index="1">
                      <span slot="title">单位组别设置</span>
                    </el-menu-item>

                    <el-submenu index="2">
                      <template slot="title">
                        <span>管理员管理</span>
                      </template>
                      <el-menu-item-group>
                        <el-menu-item index="2-1">选项1</el-menu-item>
                        <el-menu-item index="2-2">选项2</el-menu-item>
                        <el-menu-item index="2-3">选项3</el-menu-item>
                        <el-menu-item index="2-4">选项4</el-menu-item>
                      </el-menu-item-group>
                    </el-submenu>

                    <el-submenu index="3" background-color="#35383B">
                      <template slot="title">
                        <span>学生管理</span>
                      </template>
                      <el-menu-item-group>
                        <el-menu-item index="3-1">选项1</el-menu-item>
                        <el-menu-item index="3-2">选项2</el-menu-item>
                      </el-menu-item-group>
                      <el-menu-item-group title>
                        <el-menu-item index="3-3">选项3</el-menu-item>
                      </el-menu-item-group>
                      <el-submenu index="3-4">
                        <template slot="title">选项4</template>
                        <el-menu-item index="3-4-1">选项1</el-menu-item>
                      </el-submenu>
                    </el-submenu>

                    <el-menu-item index="4">
                      <span slot="title">导航4</span>
                    </el-menu-item>

                    <el-menu-item index="5">
                      <span slot="title">导航5</span>
                    </el-menu-item>
                  </el-menu>
                </el-col>
              </el-row>
            </ul>
          </li>
          <li>
            <ul>
              <li>2.1</li>
              <li>2.2</li>
              <li>2.3</li>
            </ul>
          </li>
          <li>
            <ul>
              <li>3.1</li>
              <li>3.2</li>
              <li>3.3</li>
            </ul>
          </li>
          <li>
            <ul>
              <li>4.1</li>
              <li>4.2</li>
              <li>4.3</li>
            </ul>
          </li>
          <li>
            <ul>
              <li>5.1</li>
              <li>5.2</li>
              <li>5.3</li>
            </ul>
          </li>
          <li>
            <ul>
              <li>6.1</li>
              <li>6.2</li>
              <li>6.3</li>
            </ul>
          </li>
          <li>
            <ul>
              <li>7.1</li>
              <li>7.2</li>
              <li>7.3</li>
            </ul>
          </li>
        </ul>
      </div>
    </template>

    <template v-else="userId==2">
      <div class="nav">
        <ul class="left">
          <li class="firstnav">
            <span>人员</span>
            <i>1</i>
          </li>
          <li>
            <span>测评中心</span>
            <i>2</i>
          </li>
          <li>
            <span>咨询中心</span>
            <i>3</i>
          </li>
          <li>
            <span>档案中心</span>
            <i>2</i>
          </li>
          <li>
            <span>拓展辅导</span>
            <i>3</i>
          </li>
          <li>
            <span>文章管理</span>
            <i>2</i>
          </li>
          <li>
            <span>系统管理</span>
            <i>3</i>
          </li>
        </ul>
        <ul class="right">
          <li>
            <ul>
              <!-- <li>1.1</li> -->
              <!-- <li>1.2</li>
              <li>1.3</li>-->
              <el-row class="tac">
                <el-col :span="12">
                  <h5>人员管理</h5>
                  <el-menu
                    default-active="2"
                    class="el-menu-vertical-demo"
                    @open="handleOpen"
                    @close="handleClose"
                    background-color="#666666"
                    text-color="#fff"
                    active-text-color="#fff"
                  >
                    <el-menu-item index="1">
                      <span slot="title">单位组别设置</span>
                    </el-menu-item>

                    <el-submenu index="2">
                      <template slot="title">
                        <span>管理员管理</span>
                      </template>
                      <el-menu-item-group>
                        <el-menu-item index="2-1">选项1</el-menu-item>
                        <el-menu-item index="2-2">选项2</el-menu-item>
                        <el-menu-item index="2-3">选项3</el-menu-item>
                        <el-menu-item index="2-4">选项4</el-menu-item>
                      </el-menu-item-group>
                    </el-submenu>

                    <el-submenu index="3" background-color="#35383B">
                      <template slot="title">
                        <span>学生管理</span>
                      </template>
                      <el-menu-item-group>
                        <el-menu-item index="3-1">选项1</el-menu-item>
                        <el-menu-item index="3-2">选项2</el-menu-item>
                      </el-menu-item-group>
                      <el-menu-item-group title>
                        <el-menu-item index="3-3">选项3</el-menu-item>
                      </el-menu-item-group>
                      <el-submenu index="3-4">
                        <template slot="title">选项4</template>
                        <el-menu-item index="3-4-1">选项1</el-menu-item>
                      </el-submenu>
                    </el-submenu>

                    <el-menu-item index="4">
                      <span slot="title">导航4</span>
                    </el-menu-item>

                    <el-menu-item index="5">
                      <span slot="title">导航5</span>
                    </el-menu-item>
                  </el-menu>
                </el-col>
              </el-row>
            </ul>
          </li>
          <li>
            <ul>
              <li>2.1</li>
              <li>2.2</li>
              <li>2.3</li>
            </ul>
          </li>
          <li>
            <ul>
              <li>3.1</li>
              <li>3.2</li>
              <li>3.3</li>
            </ul>
          </li>
          <li>
            <ul>
              <li>4.1</li>
              <li>4.2</li>
              <li>4.3</li>
            </ul>
          </li>
          <li>
            <ul>
              <li>5.1</li>
              <li>5.2</li>
              <li>5.3</li>
            </ul>
          </li>
          <li>
            <ul>
              <li>6.1</li>
              <li>6.2</li>
              <li>6.3</li>
            </ul>
          </li>
          <li>
            <ul>
              <li>7.1</li>
              <li>7.2</li>
              <li>7.3</li>
            </ul>
          </li>
        </ul>
      </div>
    </template>






<script>
import $ from "jquery";
$(function() {
  //循环注册属性
  $(".right>li:eq(0)")
    .siblings()
    .hide();
  $(".left>li").each(function(index) {
    $(this).attr("suoyin", index);
  });
  $(".left>li:eq(0)")
    .siblings()
    .on("mouseover", function() {
      console.log($(this));
      $(this).css({ width: "100px", transition: "all 0.5s ease" });
    })
    .on("mouseout", function() {
      $(this).css({ width: "60px", transition: "all 0.5s ease" });
    });
  //  $(".left>li:eq(0)")
  //       .siblings()
  //       .each(function() {
  //         $(this)
  //           .mouseover(function() {
  //             $(this).css({ width: "100px", transition: "all 0.5s ease" });
  //           })
  //           .mouseout(function() {
  //             $(this).css({ width: "60px", transition: "all 0.5s ease" });
  //           });
  //       });

  //点击事件发生后发生的hover事件

  $(".left>li").click(function() {
    //点击出现相应的右框和兄弟元素的hover事件
    var index = $(this).attr("suoyin");
    $(".right>li:eq(" + index + ")").show();
    $(this)
      .off("mouseover")
      .css({ width: "60px", backgroundColor: "rgb(153,153,153)" })
      .siblings()
      .css({ backgroundColor: "rgb(9,134,207" });
    // $(this).off("mouseout");
    $(".right>li:eq(" + index + ")")
      .siblings()
      .hide();
    $(this)
      .siblings()
      .each(function() {
        $(this)
          .mouseover(function() {
            $(this).css({ width: "100px", transition: "all 0.5s ease" });
          })
          .mouseout(function() {
            $(this).css({ width: "60px", transition: "all 0.5s ease" });
          });
      });
  });
});

export default {
  name: "Navbar",
  data() {
    return {
      userId: 1
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>

<style lang="scss" scoped>
h5 {
  height: 100px;
  text-align: center;
  line-height: 100px;
  font-size: 25px;
  border-bottom: 1px solid #727272;
}
.el-col {
  width: 100%;
  background-color: rgb(102, 102, 102);
}
.nav {
  width: 270px;
  height: 1250px;
  background-color: blueviolet;
  position: relative;
  > .left {
    position: absolute;
    width: 60px;
    top: 0;
    left: 0;
    height: 1250px;
    background-color: rgb(86, 160, 199);

    > li {
      background-color: rgb(22, 155, 213);
      height: 50px;
      width: 60px;
      line-height: 50px;
      text-align: center;
      position: relative;
      color: black;
      overflow: hidden;
      cursor: pointer;
      //   text-overflow:ellipsis;
      //   white-space: nowrap;
      span {
        display: inline-block;
        width: 60px;
        position: absolute;
        left: 0;
        font-size: 12px;
      }
      i {
        //    position: absolute;
        width: 50px;
        margin-left: 60px;
        //    left: -100%;
      }
    }
    .firstnav {
      background-color: rgb(153, 153, 153);
    }
  }
  > .right {
    // width: 219px;
    margin-left: 60px;
    background-color: rgb(102, 102, 102);
    height: 100%;
  }
}
</style>