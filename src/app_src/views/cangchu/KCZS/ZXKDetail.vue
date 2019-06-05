<template>
  <div id="ZXKDetail" class="app-container calendar-list-container">
    <el-collapse v-model="activeCangku" style="width:98%;margin-left:20px">
      <el-collapse-item  name="1">
         <template slot="title" >
      <i class="header-icon el-icon-star-on" style="font-weight:bold">库存资金情况</i>
    </template>
        <el-row>
          <el-col :span="6">
            <div id="pic1" @click="CKclick" style="cursor: pointer;" class="pic1"></div>
          </el-col>
          <el-col :span="10">
            <div id="pic2" class="pic1"></div>
          </el-col>
        </el-row>
      </el-collapse-item>
      <el-collapse-item  name="2">
        <template slot="title" >
      <i class="header-icon el-icon-s-help" style="font-weight:bold">实物库存情况</i>
    </template>
        <SWKC></SWKC>
      </el-collapse-item>
      <el-collapse-item  name="3">
        <template slot="title" >
      <i class="header-icon el-icon-s-platform" style="font-weight:bold">积压物资情况</i>
    </template>
        <JYKC></JYKC>
      </el-collapse-item>
      <el-collapse-item name="4">
        <template slot="title" >
      <i class="header-icon el-icon-s-flag" style="font-weight:bold">重点物资情况</i>
    </template>
        <el-row>
          <el-col :span="6">
            <div id="pic5" style="width:448px;height:300px;"></div>
          </el-col>
          <el-col :span="10">
            <div id="pic6" style="height:300px;width:753px;margin-left:100px"></div>
          </el-col>
        </el-row>
      </el-collapse-item>
      <el-collapse-item  name="5">
         <template slot="title" >
      <i class="header-icon el-icon-eleme" style="font-weight:bold">出入库情况</i>
    </template>
        <el-row>
          <el-col :span="6">
            <div id="pic7" style="width:448px;height:300px;"></div>
          </el-col>
          <el-col :span="10">
            <div id="pic8" style="height:300px;width:753px;margin-left:100px"></div>
          </el-col>
        </el-row>
      </el-collapse-item>
      <el-collapse-item  name="6">
        <template slot="title" >
      <i class="header-icon el-icon-s-promotion" style="font-weight:bold">出入库工作量统计</i>
    </template>
        <el-row>
          <el-col :span="6">
            <div id="pic9" style="width:448px;height:300px;"></div>
          </el-col>
          <el-col :span="10">
            <div id="pic10" style="height:300px;width:753px;margin-left:100px"></div>
          </el-col>
        </el-row>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script>
import SWKC from "@/app_src/views/cangchu/KCGL/SWKC";
import JYKC from "@/app_src/views/cangchu/JYWZ/JYKC";
export default {
  name: "ZXKDetail",
  data() {
    return {
      activeCangku: "1",
      option1: {
        title: {
          text: "总资金",
          subtext: "",
          x: "center"
        },
        color: ["#32CD32"],
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b}: {c}亿"
        },
        legend: {
          orient: "vertical",
          x: "left",
          data: ["库存资金"]
        },
        series: [
          {
            name: "中心库",
            type: "pie",
            radius: ["50%", "70%"],
            avoidLabelOverlap: false,
            label: {
              normal: {
                show: false,
                position: "center"
              },
              emphasis: {
                show: true,
                textStyle: {
                  fontSize: "30",
                  fontWeight: "bold"
                }
              }
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            data: [{ value: 1.5, name: "库存资金" }]
          }
        ]
      },
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
            name: "中心库",
            type: "pie",
            radius: "70%",
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
      option5: {
        title: {
          text: "总资金",
          subtext: "",
          x: "center"
        },
        color: ["#f6da22"],
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b}: {c}吨"
        },
        legend: {
          orient: "vertical",
          x: "left",
          data: ["重点物资"]
        },
        series: [
          {
            name: "中心库",
            type: "pie",
            radius: ["50%", "70%"],
            avoidLabelOverlap: false,
            label: {
              normal: {
                show: false,
                position: "center"
              },
              emphasis: {
                show: true,
                textStyle: {
                  fontSize: "30",
                  fontWeight: "bold"
                }
              }
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            data: [{ value: 126, name: "重点物资" }]
          }
        ]
      },
      option6: {
        xAxis: {
          type: "category",
          data: ["油管", "套管", "重晶石粉", "油井水泥", "柴油"]
        },
        yAxis: {
          type: "value"
        },
        series: [
          {
            data: [5, 10, 50, 25, 36],
            type: "line"
          }
        ]
      },
      option7: {
        title: {
          text: "总资金",
          subtext: "",
          x: "center"
        },
        //color: ["#32CD32"],
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b}: {c}亿"
        },
        legend: {
          orient: "vertical",
          x: "left",
          data: ["出库","入库"]
        },
        series: [
          {
            name: "中心库",
            type: "pie",
            radius: ["50%", "70%"],
            avoidLabelOverlap: false,
            label: {
              normal: {
                show: false,
                position: "center"
              },
              emphasis: {
                show: true,
                textStyle: {
                  fontSize: "30",
                  fontWeight: "bold"
                }
              }
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            data: [{ value: 2.5, name: "出库" }, { value: 5, name: "入库" }]
          }
        ]
      },
      option8: {
        title: {
          text: "出入库统计"
        },
        tooltip: {
          trigger: "axis"
        },
        legend: {
          data: ["出库", "入库"]
        },
        grid: {
          left: "3%",
          right: "4%",
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
          data: [
            "2019-01",
            "2019-02",
            "2019-03",
            "2019-04",
            "2019-05",
            "2019-06"
          ]
        },
        yAxis: {
          type: "value"
        },
        series: [
          {
            name: "出库",
            type: "line",
            stack: "总量",
            data: [0.2, 0.8, 0.15, 0.6, 0.25, 0.3, 0.2]
          },
          {
            name: "入库",
            type: "line",
            stack: "总量",
            data: [1.3, 0.5, 1.5, 0.8, 0.2, 0.3, 0.4]
          }
        ]
      },
      option9: {
        title: {
          text: "总资金",
          subtext: "",
          x: "center"
        },
        //color: ["#32CD32"],
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b}: {c}吨"
        },
        legend: {
          orient: "vertical",
          x: "left",
          data: ["出库","入库"]
        },
        series: [
          {
            name: "中心库",
            type: "pie",
            radius: ["50%", "70%"],
            avoidLabelOverlap: false,
            label: {
              normal: {
                show: false,
                position: "center"
              },
              emphasis: {
                show: true,
                textStyle: {
                  fontSize: "30",
                  fontWeight: "bold"
                }
              }
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            data: [{ value: 20, name: "出库" }, { value: 15, name: "入库" }]
          }
        ]
      },
      option10: {
            title: {
          text: "工作量统计统计"
        },
        tooltip: {
          trigger: "axis"
        },
        legend: {
          data: ["出库", "入库"]
        },
        grid: {
          left: "3%",
          right: "4%",
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
          data: [
            "2019-01",
            "2019-02",
            "2019-03",
            "2019-04",
            "2019-05",
            "2019-06"
          ]
        },
        yAxis: {
          type: "value"
        },
        series: [
          {
            name: "出库",
            type: "line",
            stack: "总量",
            data: [2, 3, 5, 1.5, 2.5, 3, 1]
          },
          {
            name: "入库",
            type: "line",
            stack: "总量",
            data: [1, 3, 1.5, 3.5, 2, 6, 3]
          }
        ]
      }
    };
  },
  components: {
    SWKC,
    JYKC
  },
  methods: {
    drawline1() {
      ///绘制echarts 饼状图
      let mycharts = this.$echarts.init(document.getElementById("pic1"));
      mycharts.setOption(this.option1, true);
    },
    drawline2() {
      ///绘制echarts 饼状图
      let mycharts = this.$echarts.init(document.getElementById("pic2"));
      mycharts.setOption(this.option2, true);
    },
    drawline5() {
      ///绘制echarts 饼状图
      let mycharts = this.$echarts.init(document.getElementById("pic5"));
      mycharts.setOption(this.option5, true);
    },
    drawline6() {
      ///绘制echarts 饼状图
      let mycharts = this.$echarts.init(document.getElementById("pic6"));
      mycharts.setOption(this.option6, true);
    },
    drawline7() {
      ///绘制echarts 饼状图
      let mycharts = this.$echarts.init(document.getElementById("pic7"));
      mycharts.setOption(this.option7, true);
    },
    drawline8() {
      ///绘制echarts 饼状图
      let mycharts = this.$echarts.init(document.getElementById("pic8"));
      mycharts.setOption(this.option8, true);
    },
    drawline9() {
      ///绘制echarts 饼状图
      let mycharts = this.$echarts.init(document.getElementById("pic9"));
      mycharts.setOption(this.option9, true);
    },
    drawline10() {
      ///绘制echarts 饼状图
      let mycharts = this.$echarts.init(document.getElementById("pic10"));
      mycharts.setOption(this.option10, true);
    },
    CKclick(){
      this.$router.push({ path: "/cangchu/KCZS/ZXK" });
    }
  },
  mounted() {
    this.drawline1();
    this.drawline2();
    this.drawline5();
    this.drawline6();
    this.drawline7();
    this.drawline8();
    this.drawline9();
    this.drawline10();
  }
};
</script>



<style lang="scss" scoped>
.pic1 {
  width: 100%;
  height: 300px;
}
canvas {
  width: 100% !important;
}
.app-container /deep/ .el-collapse-item__header{
  background: #F8F8FF !important;
}
</style>