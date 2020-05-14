<template>
  <div class="app-container calendar-list-container">
    <div class="containerTop">
      <el-row :gutter="20" type="flex" justify="center">
        <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="11">
          <el-card>
            <!-- <div slot="header" class="header">
              <el-row>
                <el-col :span="2">
                  <img src="../../../frame_src/imgs/notice.png" alt>
                </el-col>
                <el-col :span="14">
                  <span>通知公告</span>
                </el-col>
                <el-col :span="8">
                  <el-button size="mini" type="primary" style="float:right;" @click="getMore">查看更多</el-button>
                </el-col>
              </el-row>
            </div>-->
            <div slot="header" class="header">
               
              <el-row>
                <el-col :span="1">
                  <img src="../../../frame_src/imgs/notice.png" alt>
                </el-col>
                <el-col :span="14">
                  <span>仓储数据信息</span>
                </el-col>
                <el-col :span="8"></el-col>
              </el-row>
            </div>
            <div style="height:638px;">
              <el-row>
                <el-col :span="12" style="text-align:center">
                  <img
                    class="cangku_img"
                     @click="zongkucunclick"
                    src="../../../frame_src/imgs/zongku.jpg"
                    alt="总库存"
                  >
                  <div>
                    <span>总库存</span>
                  </div>
                </el-col>
               <el-col :span="12" style="text-align:center">
                  <img
                    class="cangku_img"
                    @click="zhongxinkuclick"
                    src="../../../frame_src/imgs/zhongxinku1.jpg"
                    alt="中心库"
                  >
                  <div>
                    <span>中心库</span>
                  </div>
                </el-col>
              </el-row>
              <div class="div_height"></div>
              <el-row>
                  <el-col :span="12" style="text-align:center">
                  <img
                    class="cangku_img"
                    @click="zhuanyunku"
                    src="../../../frame_src/imgs/zhuanyunku1.jpg"
                    alt="转运库"
                  >
                  <div>
                    <span>转运库</span>
                  </div>
                  </el-col>
                <el-col :span="12" style="text-align:center">
                  <img
                    class="cangku_img"
                    src="../../../frame_src/imgs/gangdong1.jpg"
                    alt="港东器材库"
                    @click="gangdongclick"
                  >
                  <div>
                    <span>港东器材库</span>
                  </div>
                </el-col>
              </el-row>
              <div class="div_height"></div>
              <el-row>
                <el-col :span="12" style="text-align:center">
                  <img
                    class="cangku_img"
                    src="../../../frame_src/imgs/zhuanyongguan.jpg"
                    alt="专用管分公司"
                    @click="zhuanyongguanclick"
                  >
                  <div>
                    <span>专用管分公司</span>
                  </div>
                </el-col>
                <el-col :span="12" style="text-align:center">
                  <img
                    class="cangku_img"
                    src="../../../frame_src/imgs/cangku5.jpg"
                    alt="港狮库"
                    @click="GSclick"
                  >
                  <div>
                    <span>港狮库</span>
                  </div>
                </el-col>
              </el-row>
              
              <div class="div_height"></div>
              <el-row>
                <el-col :span="12" style="text-align:center">
                  <img
                    class="cangku_img"
                    src="../../../frame_src/imgs/huabeidiqujizhongchubeiku.png"
                    alt="华北地区集中储备库"
                    
                  >
                  <!-- @click="HBclick" -->
                  <div>
                    <span>华北地区集中储备库</span>
                  </div>
                </el-col>
                <el-col :span="12" style="text-align:center">
                  <img
                    class="cangku_img"
                    src="../../../frame_src/imgs/changxianzhigong.png"
                    alt="厂现直供库"
                    
                  >
                  <!-- @click="changxianzhiclick" -->
                  <div>
                    <span>厂现直供库</span>
                  </div>
                </el-col>
              </el-row>
              
            </div>
          </el-card>
        </el-col>
        <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="11">
          <el-card>
            <div slot="header" class="header">
              <el-row>
                <el-col :span="1">
                  <img src="../../../frame_src/imgs/notice.png" alt>
                </el-col>
                <el-col :span="14">
                  <span>账务库存信息</span>
                </el-col>
                <el-col :span="8"></el-col>
              </el-row>
            </div>
            <div style="height:773px;word-wrap:break-word" class="icon" >
              <!-- <el-row>
                <el-col :span="4" style="text-align:center;" >
                  <img src="../../../frame_src/imgs/icon/33.png" style="width:50px;height:50px;" alt>
                  <div style="font-size:12px;" class="icon-font" ><span>自采统计</span></div>
                </el-col>
              </el-row> -->
               
              <el-row>
                <el-col :xs="6" :sm="6" :lg="6" style="text-align:right">
                  <el-row>
                    <el-col
                      :span="24">
                       <img src="../../../app_src/img/renminbi2.png" style="width:85px;height:85px" />
                  </el-col>
                  </el-row>
                </el-col>
                <el-col :xs="6" :sm="6" :lg="6">
                  <el-row>
                    <el-col
                      :span="24"
                      style="font-weight:bold;font-size:18px;text-align:center;color:#696969;padding-top:10px;"
                    >物资供销公司总资金</el-col>
                  </el-row>
                  <el-row>
                    <el-col :span="24" style="font-weight:bold;font-size:22px;text-align:center">
                      <count-to
                        :start-val="0"
                        :end-val="totalwzziji"
                        :duration="3000"
                        :decimals="2"
                        class="card-panel-num"
                      />万
                    </el-col>
                  </el-row>
                </el-col>
                <el-col :xs="3" :sm="3" :lg="3" style="text-align:right">
                  <el-row>
                    <el-col
                      :span="24">
                       <img src="../../../app_src/img/renminbi.png" style="width:85px;height:85px" />
                  </el-col>
                  </el-row>
                </el-col>
                <el-col :xs="6" :sm="6" :lg="6">
                  <el-row>
                    <el-col
                      :span="24"
                      style="font-weight:bold;font-size:18px;text-align:center;color:#696969;padding-top:10px;"
                    >大港油田总资金</el-col>
                  </el-row>
                  <el-row>
                    <el-col :span="24" style="font-weight:bold;font-size:22px;text-align:center">
                      <count-to
                        :start-val="0"
                        :end-val="totalwzziji"
                        :duration="3000"
                        :decimals="2"
                        class="card-panel-num"
                      />万
                    </el-col>
                  </el-row>
                </el-col>
              </el-row>
             <row>
                <el-col>
                  <div style="height:50px"></div>
                   <div id="pic2" style="width:100%;height:550px;"></div>
                 </el-col>
             </row>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </div>
    <!-- <el-dialog :visible.sync="detailVisible" title="详情" width="800px">
      <el-card>
        <el-form ref="dataForm" :model="temp">
          <el-row type="flex">
            <el-col :span="2"></el-col>
            <el-col :span="20">
              <div class="noticecontent">
                <div slot="header" class="header" style="text-align:center;">
                  <span style="font-size:20px;font-weight:bold;">{{temp.NOTICE_TITLE}}</span>
                </div>
                <div class="content">
                  <el-row>
                    <el-col :span="24">
                      <p v-html="temp.NOTICE_CONTENT"></p>
                    </el-col>
                  </el-row>
                </div>
                <el-row v-if="detailList!=null">
                  <el-col :span="24">
                    附件：
                    <div style="margin-left:25px;" v-for="(item,key) in detailList" :key="key">
                      <el-button
                        @click="downLoad(item)"
                        type="primary"
                        size="text"
                      >{{item.FILE_NAME}}</el-button>
                    </div>
                     <a target="blank" :href="baseurl+item.FILE_URL" v-for="(item,key) in detailList" :key="key">{{item.FILE_NAME}}</a> 
                  </el-col>
                </el-row>
                <div class="foot">
                  <el-row>
                    <el-col :span="24">作者：{{temp.CREATER}} 发布时间：{{temp.CREATE_DATE | parseTime}}</el-col>
                  </el-row>
                </div>
              </div>
            </el-col>
          </el-row>
        </el-form>
      </el-card>
    </el-dialog>-->
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import adminDashboard from "./admin";
import CountTo from "vue-count-to";
import { GetKCZJ, } from "@/app_src/api/cangchu/KCZS/Total";
import {
  getMonthData,
  getNotice,
  CompareData,
  getNoticeDetail
} from "@/frame_src/api/Home";
import { parseTime } from "@/frame_src/utils";
// import editorDashboard from './editor'

export default {
  name: "dashboard",
  // components: { adminDashboard, editorDashboard },
  components: { adminDashboard, CountTo },
  data() {
    return {
      currentRole: "adminDashboard",
      detailList: [],
      temp: {
        orgcode: this.$store.state.user.orgCode,
        systime: this.$store.state.user.sysTime,
        limit: 6,
        page: 1
      },
      listQuery: {
        limit: 10,
        page: 1,
        id: null
      },
      baseurl: process.env.BASE_API,
      detailVisible: false,
      CHECK_STATE: "1",
      totalwzziji:0,
      totalwzziji:0,
      totalziji:0,
       option2: {
        title: {
          text: "各单位库存资金",
          subtext: "",
          x: "center"
        },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c}万({d}%)"
        },
//         legend: {
//           orient: "vertical",
//           left: "75%",
//            textStyle : {
//                            fontSize :17   //文字的字体大小
//                          },
//           data: [
//             "本部工厂",
//             "物采中心",
//             "专用管分公司",
//             "外贸分公司",
//             "油品分公司",
//             "气体供销公司",
//             "港狮分公司",
//             "港南分公司",
//             "港骅分公司",
//             "港东分公司",
//             "港西分公司",
//             "矿区分公司",
//             "炼化分公司",
//             "油区分公司",
//             "设利用分公司",
//             "外部市场"
//           ]
//         },
        itemStyle: {
          emphasis: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: "rgba(0, 0, 0, 0.5)"
          },
           
          normal: {
            color: function(params) {
              //自定义颜色
              var colorList = [
                //"rgb(252,157,154)",
                "rgb(249,205,173)",
                "rgb(254,67,101)",
                "rgb(200,200,169)",
                "rgb(131,175,155)",
                "rgb(182,194,154)",
                "rgb(138,151,123)",
                "rgb(244,208,0)",
                "rgb(229,131,8)",
                "rgb(220,87,18)"
              ];
              return colorList[params.dataIndex];
            }
          }
        },
        series: [
          {
            name: "总库存",
            type: "pie",
            radius: "75%",
            center: ["50%", "50%"],
            label: {
              normal: {
                show: true,
                  //formatter: "{b}: {c}万({d}%)"
                  formatter: "{d}%",
                  position: "top",
                  align: "left",
                  textStyle : {
                                    fontSize :20   //文字的字体大小
                                }
              }
            },
            labelLine:{
              show:false
            },
            data: [
            ],
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)"
              }
            }
          }//,
      //     {
      //       name: "总库存",
      //       type: "pie",
      //       radius: "65%",
      //       center: ["45%", "50%"],
      //       label: {
      //         normal: {
      //           show: true,
      //             formatter: "{b}: {c}万",
      //             position: "outer",
      //             align: "left"
      //         }
      //       },
      //       labelLine:{
      //         show:false
      //       },
      //       data: [
      //       ],
      //       itemStyle: {
      //         emphasis: {
      //           shadowBlur: 10,
      //           shadowOffsetX: 0,
      //           shadowColor: "rgba(0, 0, 0, 0.5)"
      //         },
      //       }
      //     }
         ]
       }

    };
  },
  methods: {
    // drawline() {
    //   ///绘制echarts 柱状图
    //   let mycharts = this.$echarts.init(document.getElementById("pic1"));
    //   mycharts.setOption(this.ZJoption);
    // },
     drawline2() {
      ///绘制echarts 饼状图
      let mycharts = this.$echarts.init(document.getElementById("pic2"));
      mycharts.setOption(this.option2, true);
      // setTimeout(() => {
      //   mycharts.resize();
      // }, 1500);
    },
     getKCZJ() {
      GetKCZJ().then(res => {
        if (res.data.code === 2000) {
          //港东C27C  港西 C27D 油区 C27G  港狮 C279 港华 C27B
          let arr = new Array(10);
          arr[0] = { value: res.data.items.C271, name: "本部工厂" };
          arr[1] = { value: res.data.items.C274, name: "物采中心" };
          arr[2] = { value: res.data.items.C275, name: "专用管分公司" };
          arr[3] = { value: res.data.items.C277, name: "油品分公司" };
          arr[4] = { value: res.data.items.C279, name: "港狮分公司" };
          arr[5] = { value: res.data.items.C27B, name: "港骅分公司" };
          arr[6] = { value: res.data.items.C27C, name: "港东分公司" };
          arr[7] = { value: res.data.items.C27D, name: "港西分公司" };
          arr[8] = { value: res.data.items.C27G, name: "油区分公司" };
          arr[9] = { value: res.data.items.C27I, name: "外部市场" };
          this.option2.series[0].data = arr;
          this.totalziji = res.data.items.TOTAL;
          this.totalwzziji = res.data.items.TOTALWZ;
          this.drawline2();
        }
      });
      },
    getNotice() {
      getNotice(this.temp).then(response => {
        if (response.data.code === 2000) {
          this.noticeList = response.data.items;
        }
      });
    },
    goToContent(data) {
      // let id = data.NOTICE_ID.toString();
      // this.$router.push({ path: "noticeViews/noticecontent/" + id });
      this.detailVisible = true;
      this.temp = Object.assign({}, data);
      this.listQuery.id = data.NOTICE_ID;
      this.getNoticeDetail();
    },
    getNoticeDetail() {
      getNoticeDetail(this.listQuery).then(response => {
        if (response.data.code === 2000) {
          this.detailList = response.data.items;
        }
      });
    },
    downLoad(data) {
      window.open(this.baseurl + data.FILE_URL);
    },
    getMore() {
      this.$router.push({ path: "noticeViews/noticelist/" });
    },
    zhongxinkuclick() {
      this.$router.push({ path: "/cangchu/KCZS/ZXKDetail" });
    },
    zhuanyunku() {
      this.$router.push({ path: "/cangchu/KCZS/ZYKDetail" });
    },
    zongkucunclick(){
      this.$router.push({ path: "/cangchu/KCZS/Total" });
    },
    gangdongclick(){
      this.$router.push({ path: "/cangchu/KCZS/GDQCKDetail" });
    },
    zhuanyongguanclick(){
      this.$router.push({ path: "/cangchu/KCZS/ZYGFGSDetail" });

    },
    changxianzhiclick(){
      this.$router.push({ path: "/cangchu/KCZS/CXZGKDetail" });
    },
     HBclick(){
      this.$router.push({ path: "/cangchu/KCZS/HBDetail" });

    },
    GSclick(){
      this.$router.push({ path: "/cangchu/KCZS/GSDetail" });
    }
  },
  created() {},
  mounted() {
    // this.drawlineKC();
    //this.getNotice();
    this.getKCZJ();
  },
  computed: {
    ...mapGetters(["roles"])
  },
  filters: {
    parseTime
  }
  /* created() {
    if (!this.roles.includes('admin')) {
      this.currentRole = 'editorDashboard'
    }
  } */
};
</script>


<style lang="scss" scoped>
.app-container {
  .containerTop {
    .header {
      font-weight: bold;
      font-size: 20px;
      max-height: 30px;
      img {
        width: 25px;
        height: 25px;
      }
    }
    .noticetitle： {
      font-size: 20px;
    }
    .noticetitle:hover {
      text-decoration: underline;
      color: red;
      cursor: pointer;
    }
  }
  .pic1 {
    height: 250px;
    width: 100%;
  }
  .icon{
    .el-row{
      margin-top: 25px;
    }
    .icon-font:hover{
      color: #36a3f7;
      font-size: 2em;
      text-decoration: underline;
      cursor: pointer;
    }
  }
}
.el-card {
  font-family: "微软雅黑";
  min-height: 555px;
}
.cangku_img {
  width: 80%;
  height: 180px;
  cursor: pointer;
}
.panel-chart {
  height: 200px;
  margin-top: 18px;
  .card-panel-col {
    margin-bottom: 0px;
  }
}
.panel-group {
  height: 120px;
  margin-top: 18px;
  .card-panel-col {
    margin-bottom: 0px;
  }
  .card-panel {
    height: 108px;
    cursor: pointer;
    font-size: 12px;
    position: relative;
    overflow: hidden;
    color: #666;
    background: #fff;
    box-shadow: 4px 4px 40px rgba(0, 0, 0, 0.05);
    border-color: rgba(0, 0, 0, 0.05);
    &:hover {
      .card-panel-icon-wrapper {
        color: #fff;
      }
      .icon-people {
        width: 80px;
        height: 80px;
        background: #40c9c6;
      }
      .icon-message {
        width: 80px;
        height: 80px;
        background: #36a3f7;
      }
      .icon-money {
        width: 80px;
        height: 80px;
        background: #f4516c;
      }
      .icon-shoppingCard {
        width: 80px;
        height: 80px;
        background: #34bfa3;
      }
    }
    .icon-people {
      width: 80px;
      height: 80px;
      color: #40c9c6;
    }
    .icon-message {
      width: 80px;
      height: 80px;
      color: #36a3f7;
    }
    .icon-money {
      width: 80px;
      height: 80px;
      color: #f4516c;
    }
    .icon-shoppingCard {
      width: 80px;
      height: 80px;
      color: #34bfa3;
    }
    .card-panel-icon-wrapper {
      float: left;
      margin: 14px 0 0 14px;
      padding: 16px;
      transition: all 0.38s ease-out;
      border-radius: 6px;
    }
    .card-panel-icon {
      float: left;

      font-size: 12px;
      width: 50px;
      height: 50px;
    }
    .card-panel-description {
      float: right;
      font-weight: bold;
      margin: 26px;
      margin-left: 0px;
      .card-panel-text {
        line-height: 18px;
        color: rgba(0, 0, 0, 0.45);
        font-size: 16px;
        margin-bottom: 12px;
      }
      .card-panel-num {
        font-size: 20px;
      }
    }
  }
}
.div_height{
  height: 5px;
}
</style>

