<template>
  <div id="TotalZDWZCRK" class="app-container calendar-list-container">
    <div id="divzdwz">
      <el-card id="taoguan" class="box-card">
        <div slot="header" class="clearfix">
          <a @click="setQueryZDWL('套管')" title="套管">套&nbsp;&nbsp;&nbsp;&nbsp;管</a>
        </div>
        <div class="text item">
          <count-to
            :start-val="0"
            :end-val="TotalCount.TG"
            :duration="3000"
            class="card-panel-num"
          />
          {{TotalCount.TGDW}}
        </div>
      </el-card>

      <el-card id="youguan" class="box-card">
        <div slot="header" class="clearfix">
          <a @click="setQueryZDWL('油管')" title="油管">油&nbsp;&nbsp;&nbsp;&nbsp;管</a>
        </div>
        <div class="text item">
          <count-to
            :start-val="0"
            :end-val="TotalCount.YG"
            :duration="3000"
            class="card-panel-num"
          />
          {{TotalCount.YGDW}}
        </div>
      </el-card>

      <el-card id="zjsf" class="box-card">
        <div slot="header" class="clearfix">
          <a @click="setQueryZDWL('重晶石粉')" title="重晶石粉">重晶石粉</a>
        </div>
        <div class="text item">
          <count-to
            :start-val="0"
            :end-val="TotalCount.ZJSF"
            :duration="3000"
            class="card-panel-num"
          />
          {{TotalCount.ZJSFDW}}
        </div>
      </el-card>

      <el-card id="yjsn" class="box-card">
        <div slot="header" class="clearfix">
          <a @click="setQueryZDWL('水泥')" title="水泥">油井水泥</a>
        </div>
        <div class="text item">
          <count-to
            :start-val="0"
            :end-val="TotalCount.SN"
            :duration="3000"
            class="card-panel-num"
          />
          {{TotalCount.SNDW}}
        </div>
      </el-card>

      <el-card id="ylzcj" class="box-card">
        <div slot="header" class="clearfix">
          <a @click="setQueryZDWL('支撑剂')" title="支撑剂">压裂支撑剂</a>
        </div>
        <div class="text item">
          <count-to
            :start-val="0"
            :end-val="TotalCount.ZCJ"
            :duration="3000"
            class="card-panel-num"
          />
          {{TotalCount.ZCJDW}}
        </div>
      </el-card>

      <el-card id="zjnjcl" class="box-card">
        <div slot="header" class="clearfix">
          <a @click="setQueryZDWL('钻井泥浆材料')" title="钻井泥浆材料">钻井泥浆材料</a>
        </div>
        <div class="text item">
          <count-to
            :start-val="0"
            :end-val="TotalCount.ZJNJCL"
            :duration="5000"
            class="card-panel-num"
          />
          {{TotalCount.ZJNJCLDW}}
        </div>
      </el-card>

      <el-card id="chaiyou" class="box-card">
        <div slot="header" class="clearfix">
          <a @click="setQueryZDWL('柴油')" title="柴油">柴&nbsp;&nbsp;&nbsp;&nbsp;油</a>
        </div>
        <div class="text item">
          <count-to
            :start-val="0"
            :end-val="TotalCount.CX"
            :duration="5000"
            class="card-panel-num"
          />
          {{TotalCount.CXDW}}
        </div>
      </el-card>
    </div>
    <div style="clear:both;height:10px"></div>

    <TotalZDWZNEW ref="TotalZDWZNEW"></TotalZDWZNEW>
    <el-row style="margin-bottom:10px;">
      <el-col :xs="5" :sm="5" :md="5" :lg="4" :xl="2">
        <el-date-picker
          v-model="year"
          style="width:95%;"
          size="mini"
          type="year"
          :clearable="false"
        ></el-date-picker>
      </el-col>
      <el-col :xs="5" :sm="5" :md="5" :lg="4" :xl="2">
        <el-select v-model="Query.MATNR" style="width:95%" size="mini">
          <el-option
            v-for="item in opZDWZ"
            :key="item.WL_CODE"
            :label="item.WL_NAME"
            :value="item.WL_CODE"
          ></el-option>
        </el-select>
      </el-col>
      <el-col :span="4">
        <el-button type="primary" icon="el-icon-search" @click="btnQuery" size="mini">查询</el-button>
      </el-col>
    </el-row>

    <div style="clear:both"></div>
    <el-row style="overflow-x: scroll;">
      <el-col :xs="24" :sm="24" :lg="24">
        <div id="picZDWZBH" style="width:3500px;height:400px;padding-top:10px;"></div>
      </el-col>
    </el-row>
    <el-row style="overflow-x: scroll;">
      <el-col :xs="24" :sm="24" :lg="24">
        <div id="picZDWZCRK" style="width:3500px;height:400px;padding-top:10px;"></div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import {
  getZDWZCRK,
  getZDWZCRKDetail,
  getZDWZPZ
} from "@/app_src/api/cangchu/KCZS/Total";
import { GetWLCount } from "@/app_src/api/cangchu/KCZS/ZXK";
import CountTo from "vue-count-to";
import TotalZDWZNEW from "@/app_src/views/cangchu/KCZS/TotalZDWZNEW";
export default {
  name: "TotalZDWZCRK",
  components: {
    TotalZDWZNEW,
    CountTo
  },
  data() {
    return {
      year: "",
      TotalCount: {
        TG: 0,
        TGDW: "",
        YG: 0,
        YGDW: "",
        ZJSF: 0,
        ZJSFDW: "",
        SN: 0,
        SNDW: "",
        ZCJ: 0,
        ZCJDW: "",
        ZJNJCL: 0,
        ZJNJCLDW: "",
        CX: 0,
        CXDW: ""
      },
      OldTotalCount: {
        TG: 0,
        TGDW: "",
        YG: 0,
        YGDW: "",
        ZJSF: 0,
        ZJSFDW: "",
        SN: 0,
        SNDW: "",
        ZCJ: 0,
        ZCJDW: "",
        ZJNJCL: 0,
        ZJNJCLDW: "",
        CX: 0,
        CXDW: ""
      },
      TotalCountQuery: {
        DKCODE: this.DKCODE
      },
      Query: {
        year: "",
        MATNR: ""
      },
      opZDWZ: [],
      QueryZDWL: {
        WL_NAME: ""
      },
      options: {
        title: {
          text: "重点物资每周变化情况"
        },
        tooltip: {
          trigger: "axis"
        },
        color: ["#20B2AA", "#465967", "#C23531"],
        legend: {
          data: ["最高储备", "现有库存", "最低储备"]
        },
        grid: {
          left: "2%",
          right: "3%",
          bottom: "3%",
          containLabel: true
        },
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: []
        },
        yAxis: {
          type: "value"
        },
        series: [
          {
            name: "最高储备",
            type: "line",
            // stack: "总量",
            itemStyle: {
              normal: {
                lineStyle: {
                  color: "#20B2AA" //折线的颜色
                }
              }
            },
            data: [] //[120, 132, 101, 134, 90, 230, 210]
          },
          {
            name: "现有库存",
            type: "line",
            //stack: "总量",
            data: [], //[220, 182, 191, 234, 290, 330, 310]
            itemStyle: {
              normal: {
                label: {
                  show: true, //开启显示
                  position: "top", //在上方显示
                  textStyle: {
                    //数值样式
                    color: "black",
                    fontSize: 10
                  }
                },
                lineStyle: {
                  color: "#465967" //折线的颜色
                }
              }
            }
          },
          {
            name: "最低储备",
            type: "line",
            // stack: "总量",
            itemStyle: {
              normal: {
                lineStyle: {
                  color: "#C23531" //折线的颜色
                }
              }
            },
            data: [] //[150, 232, 201, 154, 190, 330, 410]
          }
        ]
      },
      optionCRK: {
        title: {
          text: "重点物资出入库情况",
          subtext: ""
        },
        grid: {
          left: "2.5%",
          right: "3%",
          bottom: "3%",
          containLabel: true
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
              // "1月",
              // "2月"
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
            data: [], //[2.0]
            itemStyle: {
              normal: {
                color: "#20B2AA",
                label: {
                  show: true, //开启显示
                  position: "top", //在上方显示
                  textStyle: {
                    //数值样式
                    color: "black",
                    fontSize: 10
                  }
                }
              }
            }
          },
          {
            name: "出库",
            type: "bar",
            data: [], // [2.0]
            itemStyle: {
              normal: {
                label: {
                  show: true, //开启显示
                  position: "top", //在上方显示
                  textStyle: {
                    //数值样式
                    color: "black",
                    fontSize: 10
                  }
                }
              }
            }
          }
        ]
      }
    };
  },
  methods: {
    tableRowClassName({ row, rowIndex }) {
      // 表头行的 className 的回调方法，也可以使用字符串为所有表头行设置一个固定的 className。
      if (rowIndex === 0) {
        return "el-button--primary is-active"; // 'warning-row'
      } // 'el-button--primary is-plain'// 'warning-row'
      return "";
    },
    drawlineZDWZBH() {
      //重点物资变化情况 折线图
      ///绘制echarts 饼状图

      let mycharts = this.$echarts.init(document.getElementById("picZDWZBH"));
      mycharts.setOption(this.options, true);
      // mycharts.on("click", function(param) {
      //   _this.crkDetailTitle = param.dataIndex + 1 + "月份出入库明细";
      //   //param.dataIndex 0开始 第几组柱状图 param.seriesIndex 0开始 每组里的第几个柱子 param.seriesName 每个柱子的名字
      //   _this.crklyear = _this.dataYear;
      //   _this.crklmonth = param.dataIndex + 1;
      //   _this.openDialog();
      // });
    },
    drawlineZDWZCRK() {
      //重点物资变化情况 折线图
      ///绘制echarts 饼状图
      let mycharts = this.$echarts.init(document.getElementById("picZDWZCRK"));
      mycharts.setOption(this.optionCRK, true);
    },
    GetWLCount() {
      GetWLCount(this.TotalCountQuery).then(res => {
        if (res.data.code === 2000) {
          this.TotalCount.TG = res.data.TG[0];
          this.TotalCount.TGDW = res.data.TG[1];
          this.TotalCount.YG = res.data.YG[0];
          this.TotalCount.YGDW = res.data.YG[1];
          this.TotalCount.ZJSF = res.data.ZJSF[0];
          this.TotalCount.ZJSFDW = res.data.ZJSF[1];
          this.TotalCount.SN = res.data.SN[0];
          this.TotalCount.SNDW = res.data.SN[1];
          this.TotalCount.ZCJ = res.data.ZCJ[0];
          this.TotalCount.ZCJDW = res.data.ZCJ[1];
          this.TotalCount.ZJNJCL = res.data.ZJNJCL[0];
          this.TotalCount.ZJNJCLDW = res.data.ZJNJCL[1];
          this.TotalCount.CX = res.data.CX[0];
          this.TotalCount.CXDW = res.data.CX[1];
          this.OldTotalCount = Object.assign({}, this.TotalCount);
        }
      });
    },
    resetCount() {
      this.TotalCount.YG = 0;
      this.TotalCount.TG = 0;
      this.TotalCount.ZJSF = 0;
      this.TotalCount.SN = 0;
      this.TotalCount.ZCJ = 0;
      this.TotalCount.ZJNJCL = 0;
      this.TotalCount.CX = 0;
      setTimeout(this.setNewCount, 3000);
    },
    setNewCount() {
      this.TotalCount.YG = this.OldTotalCount.YG;
      this.TotalCount.TG = this.OldTotalCount.TG;
      this.TotalCount.ZJSF = this.OldTotalCount.ZJSF;
      this.TotalCount.SN = this.OldTotalCount.SN;
      this.TotalCount.ZCJ = this.OldTotalCount.ZCJ;
      this.TotalCount.ZJNJCL = this.OldTotalCount.ZJNJCL;
      this.TotalCount.CX = this.OldTotalCount.CX;
    },
    stopResetCount() {
      clearInterval(this.resetCount);
    },
    getList() {
      this.Query.year = this.year.toString().substr(11, 4);
      getZDWZCRK(this.Query).then(res => {
        if (res.data.code === 2000) {
          let zgcb = [];
          let zdcb = [];
          let kc = [];
          let rk = [];
          let ck = [];
          for (let index = 0; index < 52; index++) {
            zgcb.push(res.data.items.ZGCB[0].MAXHAVING);
            if (index < res.data.items.KC.length) {
              kc.push(res.data.items.KC[index].GESME);
            } else {
              kc.push(0);
            }

            zdcb.push(res.data.items.ZGCB[0].MINHAVING);
            //出入库
            let arr_rk = res.data.items.RK.filter((v, i) => {
              return index + 1 == parseInt(v.WEEK);
            });
            if (arr_rk.length > 0) {
              rk.push(arr_rk[0].ZSJDHSL);
            } else {
              rk.push(0);
            }
            //出库
            let arr_ck = res.data.items.CK.filter((v, i) => {
              return index + 1 == parseInt(v.WEEK);
            });
            if (arr_ck.length > 0) {
              ck.push(arr_ck[0].ZSJFHSL);
            } else {
              ck.push(0);
            }
          }
          this.options.series[0].data = zgcb;
          this.options.series[1].data = kc;
          this.options.series[2].data = zdcb;
          this.drawlineZDWZBH();
          this.optionCRK.series[0].data = rk;
          this.optionCRK.series[1].data = ck;
          this.drawlineZDWZCRK();
        }
      });
      let temp = {
        MAKTX: ""
      };
      if (this.QueryZDWL.WL_NAME === null || this.QueryZDWL.WL_NAME == "") {
        temp.MAKTX = "套管";
      } else {
        temp.MAKTX = this.QueryZDWL.WL_NAME;
      }
      console.log(temp);
      this.$refs.TotalZDWZNEW.getQueryValue(temp);
      this.GetWLCount();
      setInterval(this.resetCount, 8000);
    },
    setQueryZDWL(val) {
      this.QueryZDWL.WL_NAME = val;
      this.getZDWZPZ();
      this.btnQuery();
    },
    getZDWZPZ() {
      getZDWZPZ(this.QueryZDWL).then(res => {
        this.opZDWZ = res.data.items;
        this.Query.MATNR = res.data.items[0].WL_CODE;
      });
    },
    btnQuery() {
      let temp = {
        MAKTX: this.QueryZDWL.WL_NAME
      };
      this.$refs.TotalZDWZNEW.getQueryValue(temp);
      this.getList();
    },
    init() {
      let arr = [];
      for (let index = 1; index < 53; index++) {
        arr.push("第" + index + "周");
      }
      this.options.xAxis.data = arr;
      this.optionCRK.xAxis[0].data = arr;
    }
  },
  created() {
    this.year = new Date();
  },
  mounted() {
    this.init();
  },
  destroyed() {
    clearInterval(this.resetCount);
  }
};
</script>



<style lang="scss" scoped>
.fixed-width .el-button--mini {
  width: 80px;
}
.app-container /deep/.el-dialog__header {
  padding: 20px 20px 0px;
  text-align: center;
}
.zdwz {
  width: 200px;
  height: 75px;
}
.diva {
  width: 130px;
  height: 44px;
  //float: left;
  clear: both;
  //margin-right: 2px;
}
.divb {
  margin-top: 20px;
  width: 120;
  height: 40px;
  //float: left;
  border-color: #98bf21;
  font-weight: bold;
  font-size: 18px;
  text-align: center;
  //border: 1px;
  //border-top-style:dotted;
  // border-right-style: solid;
  // border-bottom-style: dotted;
  // border-left-style: solid;
  //margin-right: 2px;
}
#divzdwz {
  .text {
    font-size: 18px;
    font-weight: bold;
  }
  .clearfix {
    font-size: 16px;
    font-weight: bold;
  }
  .item {
    margin-bottom: 10px;
  }

  .box-card {
    float: left;
    margin-right: 30px;
    margin-bottom: 10px;
    width: 150px;
    height: 130px;
    text-align: center;
  }
  #taoguan{
  /deep/ .el-card__header {
    background: #FF6666;
    padding: 12px 5px;
  }
  /deep/  .el-card__body{
    background: #FFCC99;
  }}
  #youguan{
  /deep/ .el-card__header {
    background: #99CC33;
    padding: 12px 5px;
  }
  /deep/  .el-card__body{
    background: #99CCFF;
  }}
  #zjsf{
  /deep/ .el-card__header {
    background: #FFCC00;
    padding: 12px 5px;
  }
  /deep/  .el-card__body{
    background: #FFCCCC;
  }}
  #yjsn{
  /deep/ .el-card__header {
    background: #ddd;
    padding: 12px 5px;
  }
  /deep/  .el-card__body{
    background: #CCCC99;
  }}
  #ylzcj{
  /deep/ .el-card__header {
    background: #CC99CC;
    padding: 12px 5px;
  }
  /deep/  .el-card__body{
    background: #66CCCC;
  }}
  #zjnjcl{
  /deep/ .el-card__header {
    background: #339999;
    padding: 12px 5px;
  }
  /deep/  .el-card__body{
    background: #FF9900;
  }}
  #chaiyou{
  /deep/ .el-card__header {
    background: #CCCC00;
    padding: 12px 5px;
  }
  /deep/  .el-card__body{
    background: #FF99CC;
  }}
}
</style>


