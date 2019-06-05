<template>
  <div id="ZXKDetail" class="app-container calendar-list-container">
    <el-collapse v-model="activeCangku" style="width:98%;margin-left:20px">
      <el-collapse-item title="库存资金情况" name="1">
        <el-row>
          <el-col :span="6">
            <div id="pic1" class="pic1"></div>
          </el-col>
          <el-col :span="10">
            <div id="pic2" class="pic1"></div>
          </el-col>
        </el-row>
      </el-collapse-item>
      <el-collapse-item title="实物库存情况" name="2">
        <SWKC></SWKC>
      </el-collapse-item>
      <el-collapse-item title="积压库存情况" name="3">
        <el-row>
          <el-col :span="6">
            <div id="pic3" style="width:448px;height:300px;"></div>
          </el-col>
          <el-col :span="15">
            <div style="width:100%">
              <div id="pic4" style="height:300px;width:753px;margin-left:100px"></div>
            </div>
          </el-col>
        </el-row>
      </el-collapse-item>
      <el-collapse-item title="重点物资情况" name="4">
        <el-row>
          <el-col :span="6">
            <div id="pic5" style="width:448px;height:300px;"></div>
          </el-col>
          <el-col :span="10">
            <div id="pic6" style="height:300px;width:753px;margin-left:100px"></div>
          </el-col>
        </el-row>
      </el-collapse-item>
      <el-collapse-item title="出库情况" name="5">
        <JJCK1></JJCK1>
      </el-collapse-item>
      <el-collapse-item title="入库情况" name="6">
        <JJCK1></JJCK1>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script>
import SWKC from "@/app_src/views/cangchu/KCGL/SWKC";
import JJCK1 from "@/app_src/views/cangchu/CRKGL/JJCK1";
import JJRK1 from "@/app_src/views/cangchu/CRKGL/JJRK1";
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
          text: "各单位资金情况",
          subtext: "",
          x: "center"
        },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} 亿({d}%)"
        },
        legend: {
          orient: "vertical",
          left: "right",
          data: ["直接访问", "邮件营销", "联盟广告", "视频广告", "搜索引擎"]
        },
        series: [
          {
            name: "中心库",
            type: "pie",
            radius: ["50%", "70%"],
            //center: ["50%", "60%"],
            data: [
              { value: 0.2, name: "直接访问" },
              { value: 0.3, name: "邮件营销" },
              { value: 0.5, name: "联盟广告" },
              { value: 0.4, name: "视频广告" },
              { value: 0.1, name: "搜索引擎" }
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
      option3: {
        title: {
          text: "总资金",
          subtext: "",
          x: "center"
        },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b}: {c}亿"
        },
        legend: {
          orient: "vertical",
          x: "left",
          data: ["积压库存"]
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
            data: [{ value: 0.3, name: "积压库存" }]
          }
        ]
      },
      option4: {
        color: ["#CD0000"],
        tooltip: {
          trigger: "axis",
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true
        },
        xAxis: [
          {
            type: "category",
            data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
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
            name: "",
            type: "bar",
            barWidth: "60%",
            data: [10, 52, 200, 334, 390, 330, 220]
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
          formatter: "{a} <br/>{b}: {c}亿"
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
            data: [{ value: 0.8, name: "重点物资" }]
          }
        ]
      },
      option6: {
    xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
        type: 'value'
    },
    series: [{
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: 'line'
    }]
}
    };
  },
  components: {
    SWKC,
    JJCK1,
    JJRK1
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
    drawline3() {
      ///绘制echarts 饼状图
      let mycharts = this.$echarts.init(document.getElementById("pic3"));
      mycharts.setOption(this.option3, true);
    },
    drawline4() {
      ///绘制echarts 饼状图
      let mycharts = this.$echarts.init(document.getElementById("pic4"));
      mycharts.setOption(this.option4, true);
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
    }
  },
  mounted() {
    this.drawline1();
    this.drawline2();
    this.drawline3();
    this.drawline4();
    this.drawline5();
    this.drawline6();
  }
};
</script>



<style lang="scss" scoped>
.pic1 {
  width: 100%;
  height: 300px;
}
canvas{
  width:100%!important;
}
</style>