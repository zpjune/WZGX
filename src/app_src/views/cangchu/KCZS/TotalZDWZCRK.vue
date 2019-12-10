<template>
  <div id="TotalZDWZCRK" class="app-container calendar-list-container">
    <el-row style="margin-bottom:10px;">
      <el-col :xs="5" :sm="5" :md="5" :lg="2" :xl="2">
        <el-date-picker
          v-model="year"
          style="width:95%;"
          size="mini"
          type="year"
          :clearable="false"
        ></el-date-picker>
      </el-col>
      <el-col :xs="8" :sm="8" :md="8" :lg="8" :xl="8">
        <el-select v-model="Query.MATNR" style="width:300px;" size="mini">
          <el-option
            v-for="item in opZDWZ"
            :key="item.WL_CODE"
            :label="item.WL_NAME"
            :value="item.WL_CODE"
          ></el-option>
        </el-select>
         <el-button type="primary" icon="el-icon-search"  @click="btnQuery" size="mini">查询</el-button>
      </el-col>
      
    </el-row>
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
export default {
  name: "TotalZDWZCRK",
  data() {
    return {
      year: "",
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
            stack: "总量",
            data: [] //[120, 132, 101, 134, 90, 230, 210]
          },
          {
            name: "现有库存",
            type: "line",
            stack: "总量",
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
                }
              }
            }
          },
          {
            name: "最低储备",
            type: "line",
            stack: "总量",
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
              kc.push(res.data.items.KC[0].GESME);
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
    },
    getZDWZPZ() {
      getZDWZPZ(this.QueryZDWL).then(res => {
        this.opZDWZ = res.data.items;
        this.Query.MATNR = res.data.items[0].WL_CODE;
      });
    },
    btnQuery() {
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
</style>


