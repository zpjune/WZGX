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
                  <span>可视化仓储</span>
                </el-col>
                <el-col :span="8"></el-col>
              </el-row>
            </div>
            <div class="cangku_div">
              <el-row>
                <el-col :span="12" style="text-align:center">
                  <img
                    class="cangku_img"
                    style="margin-right:-30px;"
                    @click="zhongxinkuclick"
                    src="../../../frame_src/imgs/cangku1.jpg"
                    alt="中心库"
                  >
                  <div>
                    <span>中心库</span>
                  </div>
                </el-col>
                <el-col :span="12" style="text-align:center">
                  <img
                    class="cangku_img"
                    style="margin-left:-30px;"
                    @click="zhuanyunku"
                    src="../../../frame_src/imgs/cangku2.jpg"
                    alt="转运库"
                  >
                  <div>
                    <span>转运库</span>
                  </div>
                </el-col>
              </el-row>
              <div style="height:5px;"></div>
              <el-row>
                <el-col :span="12" style="text-align:center">
                  <img
                    class="cangku_img"
                    style="margin-right:-30px;"
                    src="../../../frame_src/imgs/cangku3.jpg"
                    alt="港东器材库"
                  >
                  <div>
                    <span>港东器材库</span>
                  </div>
                </el-col>
                <el-col :span="12" style="text-align:center">
                  <img
                    class="cangku_img"
                    style="margin-left:-30px;"
                    src="../../../frame_src/imgs/cangku4.jpg"
                    alt="专用管分公司"
                  >
                  <div>
                    <span>专用管分公司</span>
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
                  <span>资金统计</span>
                </el-col>
                <el-col :span="8"></el-col>
              </el-row>
            </div>
            <div class="cangku_div">
              <el-row class="panel-group" :gutter="10">
                <el-col :xs="12" :sm="12" :lg="8" class="card-panel-col">
                  <div class="card-panel" @click="handleSetLineChartData('ZJ')">
                    <div class="card-panel-icon-wrapper icon-message">
                      <i class="el-icon-s-finance" style="font-size:48px;"></i>
                    </div>
                    <div class="card-panel-description">
                      <div class="card-panel-text">整体库存资金</div>
                      <count-to
                        class="card-panel-num"
                        :startVal="0"
                        :endVal="81212"
                        :duration="3000"
                      ></count-to>
                    </div>
                  </div>
                </el-col>
                <el-col :xs="12" :sm="12" :lg="8" class="card-panel-col">
                  <div class="card-panel" @click="handleSetLineChartData('CB')">
                    <div class="card-panel-icon-wrapper icon-money">
                      <i class="el-icon-s-grid" style="font-size:48px;"></i>
                    </div>
                    <div class="card-panel-description">
                      <div class="card-panel-text">重点物资储备</div>
                      <count-to
                        class="card-panel-num"
                        :startVal="0"
                        :endVal="9280"
                        :duration="3200"
                      ></count-to>
                    </div>
                  </div>
                </el-col>
                <el-col :xs="12" :sm="12" :lg="8" class="card-panel-col">
                  <div class="card-panel" @click="handleSetLineChartData('KC')">
                    <div class="card-panel-icon-wrapper icon-shoppingCard">
                      <i class="el-icon-s-data" style="font-size:48px;"></i>
                    </div>
                    <div class="card-panel-description">
                      <div class="card-panel-text">库存量</div>
                      <count-to
                        class="card-panel-num"
                        :startVal="0"
                        :endVal="13600"
                        :duration="3600"
                      ></count-to>
                    </div>
                  </div>
                </el-col>
              </el-row>
              <!-- <div style="height:5px;"></div> -->
              <el-row class="panel-chart">
                <el-col :span="24" style="text-align:center;margin:0;padding:0;">
                  <div id="pic1" class="pic1"></div>
                  <!-- <div id="picKC" class="pic1 v-show="this.CHECK_STATE=='3'"></div>-->
                </el-col>
              </el-row>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </div>
    <div class="containerBottom">
      <el-row :gutter="20" type="flex" justify="center">
        <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="11">
          <el-card>
            <div slot="header" class="header">
              <el-row>
                <el-col :span="1">
                  <img src="../../../frame_src/imgs/notice.png" alt class="pic">
                </el-col>
                <el-col :span="22">
                  <span>重点物资出入库统计</span>
                </el-col>
              </el-row>
            </div>
            <div style="width:100%;height:470px" id="pic2"></div>
          </el-card>
        </el-col>

        <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="11">
          <el-card>
            <div slot="header" class="header">
              <el-row>
                <el-col :span="1">
                  <img src="../../../frame_src/imgs/notice.png" alt>
                </el-col>
                <el-col :span="22">
                  <span>积压物资统计</span>
                </el-col>
              </el-row>
            </div>
            <div style="width:100%;height:470px" id="pic3"></div>
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
import {
  getMonthData,
  getNotice,
  getLv,
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
      ZDWZoption: {
        color: ["#f4516c"],
        tooltip: {
          trigger: "axis",
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        grid: {
          left: "0%",
          right: "0%",
          bottom: "0%",
          containLabel: true
        },
        xAxis: {
          type: "category",
          data: ["中心库", "运转库", "港东器材库", "专用管分公司"],
          axisTick: {
            alignWithLabel: true
          }
        },
        yAxis: {
          type: "value"
        },
        series: [
          {
            name: "重点物资储备",
            barWidth: "40%",
            data: [120, 200, 150, 80],
            type: "bar"
          }
        ]
      },
      ZJoption: {
        color: ["#3398DB"],
        tooltip: {
          trigger: "axis",
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        grid: {
          left: "0%",
          right: "0%",
          bottom: "0%",
          containLabel: true
        },
        xAxis: [
          {
            type: "category",
            data: ["中心库", "运转库", "港东器材库", "专用管分公司"],
            axisTick: {
              alignWithLabel: true
            }
          }
        ],
        yAxis: [
          {
            type: "value"
          }
        ],
        series: [
          {
            name: "整体资金",
            type: "bar",
            barWidth: "40%",
            data: [500, 520, 200, 334]
          }
        ]
      },
      KCoption: {
        color: ["#34bfa3"],
        tooltip: {
          trigger: "axis",
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        grid: {
          left: "0%",
          right: "0%",
          bottom: "0%",
          containLabel: true
        },
        xAxis: [
          {
            type: "category",
            data: ["中心库", "运转库", "港东器材库", "专用管分公司"],
            axisTick: {
              alignWithLabel: true
            }
          }
        ],
        yAxis: [
          {
            type: "value"
          }
        ],
        series: [
          {
            name: "库存",
            type: "bar",
            barWidth: "40%",
            data: [1500, 1520, 1200, 1334]
          }
        ]
      },
      currentRole: "adminDashboard",
      noticeList: [
        {
          NOTICE_TITLE: "关于物资供销数据挖掘系统项目开发通知",
          NOTICE_DATETIME: "2019-05-22"
        },
        {
          NOTICE_TITLE: "关于物资供销公司仓库使用通知",
          NOTICE_DATETIME: "2019-05-23"
        },
        {
          NOTICE_TITLE: "关于物资供销公司保管员工作量通告",
          NOTICE_DATETIME: "2019-05-24"
        },
        {
          NOTICE_TITLE: "关于物资供销公司岗位职责通告",
          NOTICE_DATETIME: "2019-05-25"
        },
        {
          NOTICE_TITLE: "关于物资供销公司运动会通知",
          NOTICE_DATETIME: "2019-05-26"
        }
      ],
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
      option: {
        title: {
          //text: "纳税人员统计图"
          //subtext: "Feature Sample: Gradient Color, Shadow, Click Zoom"
        },
        xAxis: {
          data: [],
          axisLabel: {
            inside: true,
            textStyle: {
              color: "#fff"
            }
          },
          axisTick: {
            show: false
          },
          axisLine: {
            show: false
          },
          z: 10
        },
        yAxis: {
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            textStyle: {
              color: "#999"
            }
          }
        },
        dataZoom: [
          {
            type: "inside"
          }
        ],
        series: [
          {
            // For shadow
            type: "bar",
            itemStyle: {
              normal: { color: "rgba(0,0,0,0.05)" }
            },
            barGap: "-100%",
            barCategoryGap: "40%",
            data: [],
            animation: false
          },
          {
            type: "bar",
            barMaxWidth: 80,
            itemStyle: {
              normal: {
                color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  { offset: 0, color: "#83bff6" },
                  { offset: 0.5, color: "#188df0" },
                  { offset: 1, color: "#188df0" }
                ])
              },
              emphasis: {
                color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  { offset: 0, color: "#2378f7" },
                  { offset: 0.7, color: "#2378f7" },
                  { offset: 1, color: "#83bff6" }
                ])
              }
            },
            data: []
          }
        ]
      },

      option2: {
        //归档图options
        title: {
          //text: "归档图"
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross",
            label: {
              backgroundColor: "#6a7985"
            }
          }
        },
        legend: {
          data: []
        },
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true
        },
        xAxis: [],
        yAxis: [
          {
            type: "value"
          }
        ],
        series: []
      },

      option1: {
        color: ["#6495ED", "#6A5ACD", "#4cabce", "#e5323e"],
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow"
          }
        },
        legend: {
          data: []
        },
        toolbox: {
          show: true,
          orient: "vertical",
          left: "right",
          top: "center",
          feature: {
            mark: { show: true },
            dataView: { show: true, readOnly: false },
            magicType: { show: true, type: ["line", "bar", "stack", "tiled"] },
            restore: { show: true },
            saveAsImage: { show: true }
          }
        },
        calculable: true,
        xAxis: [],
        yAxis: [
          {
            type: "value"
          }
        ],
        series: []
      }
    };
  },
  methods: {
    handleSetLineChartData(type) {
      if (type == "ZJ") {
        this.CHECK_STATE = "1";
        this.drawline();
      } else if (type == "CB") {
        this.CHECK_STATE = "2";

        this.drawlineZD();
      } else if (type == "KC") {
        this.CHECK_STATE = "3";

        this.drawlineKC();
      }
    },
    drawline() {
      ///绘制echarts 柱状图
      let mycharts = this.$echarts.init(document.getElementById("pic1"));
      mycharts.setOption(this.ZJoption);
    },
    drawlineZD() {
      ///绘制echarts 柱状图
      // let mycharts = this.$echarts.init(document.getElementById("picZD"));
      let mycharts = this.$echarts.init(document.getElementById("pic1"));
      mycharts.setOption(this.ZDWZoption);
    },
    drawlineKC() {
      ///绘制echarts 柱状图
      // let mycharts = this.$echarts.init(document.getElementById("picKC"));
      let mycharts = this.$echarts.init(document.getElementById("pic1"));
      mycharts.setOption(this.KCoption);
    },

    drawline1() {
      let mycharts1 = this.$echarts.init(document.getElementById("pic2"));
      mycharts1.setOption(this.option1);
    },
    drawline2() {
      //绘制echarts 折线图
      let mycharts2 = this.$echarts.init(document.getElementById("pic3"));
      mycharts2.setOption(this.option2);
    },
    getMonthData() {
      let items = [
        {
          中心库: 21317,
          转运库: 21234,
          原炼化分公司: 33074,
          港东器材库: 12222,
          专用管分公司: 55548
        }
      ];
      this.option.xAxis.data = Object.keys(items[0]);
      this.option.series[1].data = Object.values(items[0]);
      this.drawline();
      // getMonthData(this.temp).then(response => {
      //   if (response.data.code === 2000) {
      //     this.option.xAxis.data = Object.keys(response.data.items[0]);
      //     this.option.series[1].data = Object.values(response.data.items[0]);
      //     this.drawline();
      //   }
      // });
    },
    getLv() {
      let items = [
        { "1月": 18632, "2月": 20575, "3月": 37232 ,"4月": 18632, "5月": 20575, "6月": 27232 }
       // { TaxRate: "出库工作量", "1月": 18632, "2月": 20575, "3月": 7232 ,"4月": 18632, "5月": 20575, "6月": 7232 }
      ];
      this.changeLvData(items);
      this.drawline2();
      // getLv(this.temp).then(response => {
      //   if (response.data.code === 2000) {
      //     this.changeLvData(response.data.items);
      //     this.drawline2();
      //   }
      // });
    },
    // changeLvData(data) {
    //   let na = "";
    //   let arr = [];
    //   let Xop = [];
    //   let SL = [];
    //   data.forEach(item => {
    //     na = Object.values(item)[0];
    //     arr = Object.values(item);
    //     arr.splice(0, 1);
    //     this.option2.series.push({
    //       name: na,
    //       type: "line",
    //       areaStyle: {},
    //       data: arr
    //     });
    //     Xop = Object.keys(data[0]);
    //     Xop.slice(0, 1);
    //     this.option2.xAxis.push({
    //       type: "category",
    //       boundaryGap: false,
    //       data: Xop
    //     });
    //   });
    // },
    changeLvData(data) {
      let na = "";
      let Xlist = [];
      let arr = [];
      let namelist = [];
      data.forEach(item => {
        na = Object.values(item)[0];
        //na += "%";
        namelist.push(na);
        arr = Object.values(item);
        arr.splice(0, 1);
        this.option2.series.push({
          name: na,
          type: "line",
          data: arr,
          areaStyle: { normal: {} }
        });
      });
      Xlist = Object.keys(data[0]);
      Xlist.splice(0, 1);
      this.option2.xAxis.push({
        type: "category",
        boundaryGap: false,
        data: Xlist
      });
      this.option2.legend.data = namelist;
    },
    CompareData() {
      let item = [
        { mm: 1, KS: 98366.06, DJ: 35699 },
        { mm: 2, KS: 100702.29, DJ: 103453.27 },
        { mm: 3, KS: 114047.24, DJ: 122994.45 },
        { mm: 4, KS: 98366.06, DJ: 35699 },
        { mm: 5, KS: 100702.29, DJ: 103453.27 },
        { mm: 6, KS: 114047.24, DJ: 122994.45 }
      ];
      this.changeCompareData(item);
      this.drawline1();
      // CompareData(this.temp).then(response => {
      //   if (response.data.code === 2000) {
      //     this.changeCompareData(response.data.items);
      //     this.drawline1();
      //   }
      // });
    },
    changeCompareData(data) {
      let arr1 = [];
      let arr2 = [];
      let mon = [];
      let temp = "";
      data.forEach(item => {
        (temp = item.mm + "月"), mon.push(temp);
        arr1.push(item.KS);
        arr2.push(item.DJ);
      });
      this.option1.series.push({
        name: "出库",
        type: "bar",
        barGap: 0,
        label: "出库",
        data: arr1,
        barMaxWidth: 30
      });
      this.option1.series.push({
        name: "入库",
        type: "bar",
        barGap: 0,
        label: "入库",
        data: arr2,
        barMaxWidth: 35
      });
      this.option1.legend.data = ["出库", "入库"];
      this.option1.xAxis.push({
        type: "category",
        axisTick: { show: false },
        data: mon
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
      this.$router.push({ path: "/cangchu/KCZS/YLH" });
    }
  },
  created() {},
  mounted() {
    this.drawline();
    //  this.drawlineZD();
    // this.drawlineKC();
    this.getLv();
    this.CompareData();
    this.getNotice();
  },
  computed: {
    ...mapGetters(["roles"])
  },
  fliters: {
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
  .containerBottom {
    margin-top: 20px;
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
}
.el-card {
  font-family: "微软雅黑";
  min-height: 555px;
}
.cangku_img {
  width: 300px;
  height: 200px;
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
</style>

