<template>
  <div id="total" class="app-container calendar-list-container">
    <el-collapse v-model="activeCangku" style="width:98%;margin-left:20px" @change="change">
      <el-collapse-item name="1">
        <template slot="title">
          <i class="header-icon el-icon-star-on" style="font-weight:bold">库存资金统计</i>
        </template>
        <el-row style="overflow-x: scroll;">
          <el-col :xs="12" :sm="12" :lg="9">
            <div id="pic1" class="pic1" style="width:55%;margin-left:30%;padding-top:80px">
              <el-row>
                <el-col :xs="12" :sm="10" :lg="10" style="text-align:right">
                  <img src="../../../img/renminbi2.png" style="width:85px;height:85px" />
                </el-col>
                <el-col :xs="12" :sm="14" :lg="14">
                  <el-row>
                    <el-col
                      :span="24"
                      style="font-weight:bold;font-size:16px;text-align:center;color:#696969;padding-top:7px;"
                    >物资公司总资金</el-col>
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
            </div>

            <div id="pic1" class="pic1" style="width:55%;margin-left:30%;padding-top:20px">
              <el-row>
                <el-col :xs="12" :sm="10" :lg="10" style="text-align:right">
                  <img src="../../../img/renminbi.png" style="width:80px;height:80px" />
                </el-col>
                <el-col :xs="12" :sm="14" :lg="14">
                  <el-row>
                    <el-col
                      :span="24"
                      style="font-weight:bold;font-size:16px;text-align:center;color:#696969;padding-top:7px;"
                    >大港油田总资金</el-col>
                  </el-row>
                  <el-row>
                    <el-col :span="24" style="font-weight:bold;font-size:22px;text-align:center">
                      <count-to
                        :start-val="0"
                        :end-val="totalziji"
                        :duration="3000"
                        :decimals="2"
                        class="card-panel-num"
                      />万
                    </el-col>
                  </el-row>
                </el-col>
              </el-row>
            </div>
          </el-col>
          <el-col :xs="12" :sm="12" :lg="10">
            <div id="pic2" style="width:804px;height:550px;margin-top:15px"></div>
          </el-col>
        </el-row>
      </el-collapse-item>
      <el-collapse-item name="2">
        <template slot="title">
          <i class="header-icon el-icon-s-help" style="font-weight:bold">实物库存统计</i>
        </template>
        <TotalSWKC ref="TotalSWKC"></TotalSWKC>
      </el-collapse-item>
      <el-collapse-item name="3">
        <template slot="title">
          <i class="header-icon el-icon-s-flag" style="font-weight:bold">重点物资储备统计</i>
        </template>
        <TotalZDWZNEW ref="TotalZDWZNEW"></TotalZDWZNEW>
      </el-collapse-item>
      <el-collapse-item name="4">
        <template slot="title">
          <i class="header-icon el-icon-s-flag" style="font-weight:bold">重点物资出入库统计</i>
        </template>
        <TotalZDWZCRK ref="TotalZDWZCRK"></TotalZDWZCRK>
      </el-collapse-item>
      <el-collapse-item name="5">
        <template slot="title">
          <i class="header-icon el-icon-s-flag" style="font-weight:bold">积压物资统计</i>
        </template>
        <TotalJYWZ ref="TotalJYWZ"></TotalJYWZ>
      </el-collapse-item>
      <el-collapse-item name="6">
        <template slot="title">
          <i class="header-icon el-icon-s-platform" style="font-weight:bold">出入库情况统计</i>
        </template>
        <div>
          <el-date-picker
            v-model="dataYear"
            style="width:120px"
            type="year"
            placeholder="选择年"
            size="mini"
            :clearable="false"
          ></el-date-picker>
          <el-button style="margin-left:5px" type="primary" size="mini" @click="handleFlush">刷新</el-button>
        </div>
        <el-row style="overflow-x: scroll;">
          <el-col :xs="20" :sm="15" :lg="10">
            <div id="picCRK" style="width:1300px;height:400px;padding-top:10px;"></div>
          </el-col>
        </el-row>
        <TotalCRKdetail
          :CRKdetaildialogVisible="crkDialog"
          :RCKDetailTitle="crkDetailTitle"
          @listenToChildEvent="closeDialog"
          :pmonth="crklmonth"
          :pyear="crklyear"
          ref="TotalCRKdetail"
        ></TotalCRKdetail>
      </el-collapse-item>
      <el-collapse-item name="8">
        <template slot="title">
          <i class="header-icon el-icon-s-promotion" style="font-weight:bold">保管员工作量统计</i>
        </template>
        <TotalBGYGZL ref="TotalBGYGZL"></TotalBGYGZL>
      </el-collapse-item>
      <el-collapse-item name="9">
        <template slot="title">
          <i class="header-icon el-icon-eleme" style="font-weight:bold">待入库统计</i>
        </template>
        <detailDRK :FacCode="FacCode" ref="detailDRK"></detailDRK>
      </el-collapse-item>
      <el-collapse-item name="10">
        <template slot="title">
          <i class="header-icon el-icon-s-promotion" style="font-weight:bold">待出库统计</i>
        </template>
        <detailDCK :FacCode="FacCode" ref="detailDCK"></detailDCK>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script>
import TotalSWKC from "@/app_src/views/cangchu/KCZS/TotalSWKC";
import TotalZDWZNEW from "@/app_src/views/cangchu/KCZS/TotalZDWZNEW";
import TotalZDWZCRK from "@/app_src/views/cangchu/KCZS/TotalZDWZCRK";
import TotalBGYGZL from "@/app_src/views/cangchu/KCZS/TotalBGYGZL";
import TotalCRKdetail from "@/app_src/components/cangchu/TotalCRKdetail";
import TotalJYWZ from "@/app_src/views/cangchu/KCZS/TotalJYWZ";
import detailDRK from "@/app_src/views/cangchu/KCZS/detailDRK";
import detailDCK from "@/app_src/views/cangchu/KCZS/detailDCK";
import CountTo from "vue-count-to";
import { GetKCZJ, GetCRKJE } from "@/app_src/api/cangchu/KCZS/Total";
export default {
  name: "total",
  components: {
    CountTo,
    TotalSWKC, //实物库存
    TotalZDWZNEW, //重点物资
    TotalZDWZCRK, //重点物资出入库
    TotalBGYGZL, //保管员工作量
    TotalCRKdetail, //出入库统计详情页
    TotalJYWZ,
    detailDRK,
    detailDCK
  },
  data() {
    return {
      activeCangku: "1",
      totalziji: 0,
      totalwzziji: 0,
      OldArr: ["1"],
      FacCode:"",
      option2: {
        title: {
          text: "各单位库存资金",
          subtext: "",
          x: "center"
        },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c}亿 ({d}%)"
        },
        legend: {
          orient: "vertical",
          left: "right",
          data: [
            "本部工厂",
            "物采中心",
            "专用管分公司",
            "外贸分公司",
            "油品分公司",
            "气体供销公司",
            "港狮分公司",
            "港南分公司",
            "港骅分公司",
            "港东分公司",
            "港西分公司",
            "矿区分公司",
            "炼化分公司",
            "油区分公司",
            "设利用分公司",
            "外部市场"
          ]
        },
        series: [
          {
            name: "总库存",
            type: "pie",
            radius: "60%",
            center: ["50%", "50%"],
            label: {
              normal: {
                show: true,
                formatter: "{b}: {c}万({d}%)"
              }
            },
            data: [
              // { value: 0, name: "港东供销" },
              // { value: 0, name: "港西供销" },
              // { value: 0, name: "油区供销" },
              // { value: 0, name: "港狮供销" },
              // { value: 0, name: "港骅供销" },
              // { value: 0, name: "物采中心" },
              // { value: 0, name: "专用管分公司" },
              // { value: 0, name: "本部工厂" }
            ],
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)"
              }
            }
          }
        ]
      },
      optioncrk: {
        title: {
          text: "出入库情况",
          subtext: ""
        },
        tooltip: {
          trigger: "axis"
        },
        legend: {
          data: ["入库", "出库"]
        },
        toolbox: {
          show: true,
          feature: {
            dataView: { show: true, readOnly: false },
            magicType: { show: true, type: ["line", "bar"] },
            restore: { show: true },
            saveAsImage: { show: true }
          }
        },
        calculable: true,
        xAxis: [
          {
            type: "category",
            data: [
              "1月",
              "2月",
              "3月",
              "4月",
              "5月",
              "6月",
              "7月",
              "8月",
              "9月",
              "10月",
              "11月",
              "12月"
            ]
          }
        ],
        yAxis: [
          {
            type: "value"
          }
        ],
        series: [
          // {
          //   name: "入库",
          //   type: "bar",
          //   data: [
          //     2.0,
          //     4.9,
          //     7.0,
          //     23.2,
          //     25.6,
          //     76.7,
          //     135.6,
          //     162.2,
          //     32.6,
          //     20.0,
          //     6.4,
          //     3.3
          //   ]
          // },
          // {
          //   name: "出库",
          //   type: "bar",
          //   data: [
          //   ]
          // }
        ]
      },
      crkDialog: false, //出入库详情 弹窗
      crkDetailTitle: "",
      dataYear: "", //出入库查询日期选择
      crklmonth: "",
      crklyear: ""
    };
  },
  methods: {
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
    GetCRKJE() {
      let queryparam = { year: this.dataYear };
      GetCRKJE(queryparam).then(res => {
        if (res.data.code === 2000) {
          let arrCKJE = new Array();
          let arrRKJE = new Array();
          for (let index = 1; index < 13; index++) {
            let ckje = 0;
            let rkje = 0;
            res.data.items[0].forEach(item => {
              //有的月份没有出入库金额，所以要补0
              if (parseInt(item.MONTH) === index) {
                ckje = item.JE;
                return;
              }
            });
            arrCKJE.push(ckje);

            res.data.items[1].forEach(item => {
              if (parseInt(item.MONTH) === index) {
                rkje = item.JE;
                return;
              }
            });
            arrRKJE.push(rkje);
          }
          this.optioncrk.series = [
            { name: "入库", type: "bar", data: arrRKJE },
            { name: "出库", type: "bar", data: arrCKJE }
          ];
          this.drawlineCRK();
        }
      });
    },
    drawlineCRK() {
      let _this = this;
      ///绘制echarts 饼状图
      let mycharts = this.$echarts.init(document.getElementById("picCRK"));
      mycharts.setOption(this.optioncrk, true);
      mycharts.on("click", function(param) {
        _this.crkDetailTitle = param.dataIndex + 1 + "月份出入库明细";
        //param.dataIndex 0开始 第几组柱状图 param.seriesIndex 0开始 每组里的第几个柱子 param.seriesName 每个柱子的名字
        _this.crklyear = _this.dataYear;
        _this.crklmonth = param.dataIndex + 1;
        _this.openDialog();
      });
    },
    closeDialog(val) {
      this.crkDialog = val;
    },
    openDialog() {
      this.crkDialog = true;
    },
    handleFlush() {
      if (this.dataYear.toString().length > 4) {
        //初始化时是字符串格式，当选择日期的时候是date格式，如果不是初始化刷新需要转成字符串
        this.dataYear = this.dataYear.getFullYear().toString();
      }
      this.GetCRKJE();
    },
    getTime() {
      let date = new Date();
      this.dataYear = date.getFullYear().toString();
    },
    change(val) {
      let arr = new Set(this.OldArr);
      let arr1 = new Set(val);
      let diff = new Set([...arr1].filter(x => !arr.has(x)));
      this.OldArr = [...val];
      diff.forEach(item => {
        this.getData(item);
      });
    },
    getData(val) {
      switch (val) {
        case "1":
          //this.$refs.ZYGFGS.getList();
          break;
        case "2":
          this.$refs.TotalSWKC.getList();
          break;
        case "3":
          this.$refs.TotalZDWZNEW.getList();
          break;
        case "4":
          this.$refs.TotalZDWZCRK.getList();
          break;
        case "5":
          this.$refs.TotalJYWZ.getList();
          break;
        case "6":
          //this.$refs.TotalCRKdetail.getList();
          break;
        case "8":
          this.$refs.TotalBGYGZL.getList();
          break;
        case "9":
          this.$refs.detailDRK.getList();
          break;
        case "10":
          this.$refs.detailDCK.getList();
          break;
        default:
          break;
      }
    }
  },
  created() {},
  mounted() {
    this.getTime();
    this.getKCZJ();
    this.GetCRKJE();
    this.$refs.TotalZDWZCRK.getZDWZPZ();
  }
};
</script>



<style lang="scss" scoped>
.app-container /deep/ .el-collapse-item__header {
  background: #f8f8ff !important;
}
.pic1 {
  width: 100%;
  height: 300px;
}
</style>


