<template>
  <div id="total" class="app-container calendar-list-container">
    <el-collapse v-model="activeCangku" style="width:98%;margin-left:20px">
      <el-collapse-item name="1">
        <template slot="title">
          <i class="header-icon el-icon-star-on" style="font-weight:bold">库存资金统计</i>
        </template>
        <el-row style="overflow-x: scroll;">
          <el-col :xs="12" :sm="12" :lg="7">
            <div id="pic1" class="pic1" style="width:55%;margin-left:30%;padding-top:80px">
              <el-row>
                <el-col :xs="12" :sm="10" :lg="10">
                  <img src="../../../img/renminbi.png" style="width:80px;height:80px">
                </el-col>
                <el-col :xs="12" :sm="14" :lg="14">
                  <el-row>
                    <el-col :span="24" style="font-weight:bold;font-size:25px">总资金</el-col>
                  </el-row>
                  <el-row>
                    <el-col :span="24" style="font-weight:bold;font-size:15px"> <count-to :start-val="0" :end-val="1500000000" :duration="3000" class="card-panel-num" />元</el-col>
                  </el-row>
                </el-col>
              </el-row>
            </div>
          </el-col>
          <el-col :xs="12" :sm="12" :lg="10">
            <div id="pic2" style="width:714px;height:280px;margin-top:15px"></div>
          </el-col>
        </el-row>
      </el-collapse-item>
      <el-collapse-item name="2">
        <template slot="title">
          <i class="header-icon el-icon-s-help" style="font-weight:bold">实物库存统计</i>
        </template>
        <TotalSWKC></TotalSWKC>
      </el-collapse-item>
      <el-collapse-item name="3">
        <template slot="title">
          <i class="header-icon el-icon-s-flag" style="font-weight:bold">重点物资储备统计</i>
        </template>
        <TotalZDWZDetail></TotalZDWZDetail>
      </el-collapse-item>
      <el-collapse-item name="4">
        <template slot="title">
          <i class="header-icon el-icon-s-flag" style="font-weight:bold">重点物资出入库统计</i>
        </template>
        <TotalZDWZCRK></TotalZDWZCRK>
      </el-collapse-item>
      <el-collapse-item name="5">
        <template slot="title">
          <i class="header-icon el-icon-s-flag" style="font-weight:bold">积压物资统计</i>
        </template>
        <TotalJYWZ></TotalJYWZ>
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
        ></TotalCRKdetail>
      </el-collapse-item>
      <el-collapse-item name="8">
        <template slot="title">
          <i class="header-icon el-icon-s-promotion" style="font-weight:bold">保管员工作量统计</i>
        </template>
        <TotalBGYGZL></TotalBGYGZL>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script>
import TotalSWKC from "@/app_src/views/cangchu/KCZS/TotalSWKC";
import TotalZDWZDetail from "@/app_src/views/cangchu/KCZS/TotalZDWZDetail";
import TotalZDWZCRK from "@/app_src/views/cangchu/KCZS/TotalZDWZCRK";
import TotalBGYGZL from "@/app_src/views/cangchu/KCZS/TotalBGYGZL";
import TotalCRKdetail from "@/app_src/components/cangchu/TotalCRKdetail";
import TotalJYWZ from "@/app_src/views/cangchu/KCZS/TotalJYWZ";
import CountTo from 'vue-count-to'
export default {
  name: "total",
  components: {
    CountTo,
    TotalSWKC, //实物库存
    TotalZDWZDetail, //重点物资
    TotalZDWZCRK, //重点物资出入库
    TotalBGYGZL, //保管员工作量
    TotalCRKdetail, //出入库统计详情页
    TotalJYWZ
  },
  data() {
    return {
      activeCangku: "1",
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
          data: ["港东供销", "港西供销", "油区供销", "港狮供销", "港骅供销"]
        },
        series: [
          {
            name: "总库存",
            type: "pie",
            radius: "65%",
            center: ["50%", "53%"],
            label: {
              normal: {
                show: true,
                formatter: "{b}: {c}亿({d}%)"
              }
            },
            data: [
              { value: 0.2, name: "港东供销" },
              { value: 0.5, name: "港西供销" },
              { value: 0.1, name: "油区供销" },
              { value: 0.3, name: "港狮供销" },
              { value: 0.4, name: "港骅供销" }
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
          {
            name: "入库",
            type: "bar",
            data: [
              2.0,
              4.9,
              7.0,
              23.2,
              25.6,
              76.7,
              135.6,
              162.2,
              32.6,
              20.0,
              6.4,
              3.3
            ]
          },
          {
            name: "出库",
            type: "bar",
            data: [
              2.6,
              5.9,
              9.0,
              26.4,
              28.7,
              70.7,
              175.6,
              182.2,
              48.7,
              18.8,
              6.0,
              2.3
            ]
          }
        ]
      },
      crkDialog: false, //出入库详情 弹窗
      crkDetailTitle: "",
      dataYear: "" //出入库查询日期选择
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
    drawlineCRK() {
      let _this = this;
      ///绘制echarts 饼状图
      let mycharts = this.$echarts.init(document.getElementById("picCRK"));
      mycharts.setOption(this.optioncrk, true);
      mycharts.on("click", function(param) {
        _this.openDialog();
        _this.crkDetailTitle = param.dataIndex + 1 + "月份出入库明细";
        console.log(param.dataIndex);
        console.log(param.seriesIndex);
        console.log(param.seriesName);
      });
    },
    closeDialog(val) {
      this.crkDialog = val;
    },
    openDialog() {
      this.crkDialog = true;
    },
    handleFlush() {},
    getTime() {
      let date = new Date();
      this.dataYear = date.getFullYear().toString();
    }
  },
  mounted() {
    this.getTime();
    this.drawline2();
    this.drawlineCRK();
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


