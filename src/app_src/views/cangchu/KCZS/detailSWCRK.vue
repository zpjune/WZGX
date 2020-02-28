<template>
  <div id="detailSWCRK" class="app-container calendar-list-container">
    <el-date-picker
      v-model="dataYear"
      style="width:120px"
      type="year"
      placeholder="选择年"
      size="mini"
      :clearable="false"
    ></el-date-picker>
    <el-button style="margin-left:5px" type="primary" size="mini" @click="handleFlush">刷新</el-button>

    <el-row style="overflow-x: scroll;">
      <el-col :xs="20" :sm="15" :lg="10">
        <div id="picDetailSWCRK" style="width:1300px;height:400px;padding-top:10px;"></div>
      </el-col>
    </el-row>
    <detailSWCRKdetail
      :SWCRKdetaildialogVisible="crkDialog"
      :SWRCKDetailTitle="crkDetailTitle"
      @listenToChildEvent="closeDialog"
      :pmonth="crklmonth"
      :pyear="crklyear"
      :DDKCODE="dkcode"
      :TYP="typ"
      ref="detailSWCRKdetail"
    ></detailSWCRKdetail>
  </div>
</template>
      
<script>
import detailSWCRKdetail from "@/app_src/views/cangchu/KCZS/detailSWCRKdetail";
import {GetCRKSL} from "@/app_src/api/cangchu/KCZS/ZXK";
export default {
  name: "detailSWCRK",
  data() {
    return {
      dataYear:'',
      crkDialog: false,
      crkDetailTitle: "",
      crklmonth: "",
      crklyear: "",
      dkcode:'',
      typ:'',//0入库  1 出库
      optioncrk: {
        title: {
          text: "实物出入库情况",
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
    };
  },
  components: {
    detailSWCRKdetail
  },
  props:["DKCODE"],
  methods: {
    handleFlush() {
      if (this.dataYear.toString().length > 4) {
        //初始化时是字符串格式，当选择日期的时候是date格式，如果不是初始化刷新需要转成字符串
        this.dataYear = this.dataYear.getFullYear().toString();
      }
      this.GetCRKSL();
    },
    closeDialog(val) {
      this.crkDialog = val;
    },
      getTime() {
      let date = new Date();
      this.dataYear = date.getFullYear().toString();
    },
    drawlineCRK() {
      let _this = this;
      ///绘制echarts 柱状图
      let mycharts = this.$echarts.init(document.getElementById("picDetailSWCRK"));
      mycharts.setOption(this.optioncrk, true);
      mycharts.on("click", function(param) {
        _this.crkDetailTitle = param.dataIndex + 1 + "月份实物出入库明细";
        //param.dataIndex 0开始 第几组柱状图 param.seriesIndex 0开始 每组里的第几个柱子 param.seriesName 每个柱子的名字
        _this.crklyear = _this.dataYear;
        _this.crklmonth = param.dataIndex + 1;
        _this.typ=param.seriesIndex;
        _this.dkcode=_this.DKCODE;
        _this.openDialog();
      });
    },
     openDialog() {
      this.crkDialog = true;
    },
    GetCRKSL() {
      let queryparam = { year: this.dataYear, DKCODE:this.DKCODE};
      GetCRKSL(queryparam).then(res => {
        if (res.data.code === 2000) {
          let arrCKSL = new Array();
          let arrRKSL = new Array();
          for (let index = 1; index < 13; index++) {
            let cksl = 0;
            let rksl = 0;
            res.data.items[0].forEach(item => {
              //有的月份没有出入库金额，所以要补0
              if (parseInt(item.MONTH) === index) {
                cksl = item.MENGE;
                return;
              }
            });
            arrCKSL.push(cksl);
            res.data.items[1].forEach(item => {
              if (parseInt(item.MONTH) === index) {
                rksl = item.MENGE;
                return;
              }
            });
            arrRKSL.push(rksl);
          }
          this.optioncrk.series = [
            {
              name: "入库",
              type: "bar",
              data: arrRKSL,
              itemStyle: { normal: { color: "#20B2AA" } }
            },
            { name: "出库", type: "bar", data: arrCKSL }
          ];
          this.drawlineCRK();
        }
      });
    }
  },
  mounted(){
    this.getTime();
  }
};
</script>
      
<style>
</style>