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
                  <img src="../../../frame_src/imgs/notice.png" alt />
                </el-col>
                <el-col :span="14">
                  <span>仓储数据信息</span>
                </el-col>
                <el-col :span="8"></el-col>
              </el-row>
            </div>
            <div style="height:638px;">
              <el-row>
                <el-col :span="24" style="text-align:center">
                  <img
                    class="cangku_img"
                    @click="zongkucunclick"
                    src="../../../frame_src/imgs/zhongxinku.jpg"
                    alt="总库存"
                  />
                  <div>
                    <span>&nbsp;</span>
                  </div>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="24" style="text-align:center">
                  <img
                    class="cangku_img"
                    @click="zhongxinkuclick"
                    src="../../../frame_src/imgs/zhongxinku.jpg"
                    alt="中心库"
                  />
                  <div>
                    <span>&nbsp;</span>
                  </div>
                </el-col>
              </el-row>
              <div class="div_height"></div>
              <el-row>
                <el-col :span="24" style="text-align:center">
                  <img
                    class="cangku_img"
                    @click="zhuanyunku"
                    src="../../../frame_src/imgs/zhuanyunku.jpg"
                    alt="转运库"
                  />
                  <div>
                    <span>&nbsp;</span>
                  </div>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="24" style="text-align:center">
                  <img
                    class="cangku_img"
                    src="../../../frame_src/imgs/gangdong.jpg"
                    alt="港东器材库"
                    @click="gangdongclick"
                  />
                  <div>
                    <span>&nbsp;</span>
                  </div>
                </el-col>
              </el-row>
              <div class="div_height"></div>
              <el-row>
                <el-col :span="24" style="text-align:center">
                  <img
                    class="cangku_img"
                    src="../../../frame_src/imgs/zhongxinku.jpg"
                    alt="专用管分公司"
                    @click="zhuanyongguanclick"
                  />
                  <div>
                    <span>&nbsp;</span>
                  </div>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="24" style="text-align:center">
                  <img
                    class="cangku_img"
                    src="../../../frame_src/imgs/gangshi.jpg"
                    alt="港狮库"
                    @click="GSclick"
                  />
                  <div>
                    <span>&nbsp;</span>
                  </div>
                </el-col>
              </el-row>

              <div class="div_height"></div>
              <el-row>
                <el-col :span="24" style="text-align:center">
                  <img
                    class="cangku_img"
                    src="../../../frame_src/imgs/zhongxinku.jpg"
                    alt="华北地区集中储备库"
                  />
                  <!-- @click="HBclick" -->
                  <div>
                     <span>&nbsp;</span>
                  </div>
                </el-col>
                
              </el-row>
              <el-row>
                <el-col :span="24" style="text-align:center">
                  <img
                    class="cangku_img"
                    src="../../../frame_src/imgs/zhongxinku.jpg"
                    alt="厂现直供库"
                  />
                  <!-- @click="changxianzhiclick" -->
                  <div>
                     <span>&nbsp;</span>
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
                  <img src="../../../frame_src/imgs/notice.png" alt />
                </el-col>
                <el-col :span="14">
                  <span>生产数据信息</span>
                </el-col>
                <el-col :span="8"></el-col>
              </el-row>
            </div>
            <div style="height:1097px;word-wrap:break-word" class="icon" >
              <el-row>
                <el-col :span="4" style="text-align:center;">
                  <img
                    src="../../../frame_src/imgs/icon/33.png"
                    style="width:50px;height:50px;"
                    alt
                  />
                  <div style="font-size:12px;" class="icon-font">
                    <span>自采统计</span>
                  </div>
                </el-col>
                <el-col :span="4" style="text-align:center">
                  <img
                    src="../../../frame_src/imgs/icon/13.png"
                    style="width:50px;height:50px;"
                    alt
                  />
                  <div style="font-size:12px;" class="icon-font">
                    <span>统采统计</span>
                  </div>
                </el-col>
                <el-col :span="4" style="text-align:center">
                  <img
                    src="../../../frame_src/imgs/icon/12.png"
                    style="width:50px;height:50px;"
                    alt
                  />
                  <div style="font-size:12px;" class="icon-font">
                    <span>设备情况</span>
                  </div>
                </el-col>

                <el-col :span="4" style="text-align:center;">
                  <img
                    src="../../../frame_src/imgs/icon/16.png"
                    style="width:50px;height:50px;"
                    alt
                  />
                  <div style="font-size:12px;" class="icon-font">
                    <span>两金压控</span>
                  </div>
                </el-col>
                <el-col :span="4" style="text-align:center">
                  <img
                    src="../../../frame_src/imgs/icon/27.png"
                    style="width:50px;height:50px;"
                    alt
                  />
                  <div style="font-size:12px;" class="icon-font">
                    <span>降本增效</span>
                  </div>
                </el-col>
                <el-col :span="4" style="text-align:center">
                  <img src="../../../frame_src/imgs/icon/5.png" style="width:50px;height:50px;" alt />
                  <div style="font-size:12px;" class="icon-font">
                    <span>厂现直供</span>
                  </div>
                </el-col>
              </el-row>

              <el-row>
                <el-col :span="4" style="text-align:center;">
                  <img src="../../../frame_src/imgs/icon/7.png" style="width:50px;height:50px;" alt />
                  <div style="font-size:12px;" class="icon-font">
                    <span>钻井动态</span>
                  </div>
                </el-col>
                <el-col :span="4" style="text-align:center">
                  <img
                    src="../../../frame_src/imgs/icon/17.png"
                    style="width:50px;height:50px;"
                    alt
                  />
                  <div style="font-size:12px;" class="icon-font">
                    <span>月度消耗统计</span>
                  </div>
                </el-col>
                <el-col :span="4" style="text-align:center">
                  <img
                    src="../../../frame_src/imgs/icon/20.png"
                    style="width:50px;height:50px;"
                    alt
                  />
                  <div style="font-size:12px;" class="icon-font">
                    <span>到货周期统计</span>
                  </div>
                </el-col>

                <el-col :span="4" style="text-align:center;">
                  <img src="../../../frame_src/imgs/icon/9.png" style="width:50px;height:50px;" alt />
                  <div style="font-size:12px;" class="icon-font">
                    <span>库存变动统计</span>
                  </div>
                </el-col>
                <el-col :span="4" style="text-align:center">
                  <img
                    src="../../../frame_src/imgs/icon/32.png"
                    style="width:50px;height:50px;"
                    alt
                  />
                  <div style="font-size:12px;" class="icon-font">
                    <span>成本费用管理</span>
                  </div>
                </el-col>
                <el-col :span="4" style="text-align:center">
                  <img
                    src="../../../frame_src/imgs/icon/35.png"
                    style="width:50px;height:50px;"
                    alt
                  />
                  <div style="font-size:12px;" class="icon-font">
                    <span>市场收入预计</span>
                  </div>
                </el-col>
              </el-row>

              <el-row>
                <el-col :span="4" style="text-align:center;">
                  <img src="../../../frame_src/imgs/icon/1.png" style="width:50px;height:50px;" alt />
                  <div style="font-size:12px;" class="icon-font">
                    <span>物资销售统计</span>
                  </div>
                </el-col>
                <el-col :span="4" style="text-align:center">
                  <img src="../../../frame_src/imgs/icon/2.png" style="width:50px;height:50px;" alt />
                  <div style="font-size:12px;" class="icon-font">
                    <span>设备油耗统计</span>
                  </div>
                </el-col>
                <el-col :span="4" style="text-align:center">
                  <img src="../../../frame_src/imgs/icon/3.png" style="width:50px;height:50px;" alt />
                  <div style="font-size:12px;" class="icon-font">
                    <span>修理费用统计</span>
                  </div>
                </el-col>

                <el-col :span="4" style="text-align:center;">
                  <img src="../../../frame_src/imgs/icon/4.png" style="width:50px;height:50px;" alt />
                  <div style="font-size:12px;" class="icon-font">
                    <span>利润情况统计</span>
                  </div>
                </el-col>
                <el-col :span="4" style="text-align:center">
                  <img src="../../../frame_src/imgs/icon/6.png" style="width:50px;height:50px;" alt />
                  <div style="font-size:12px;" class="icon-font">
                    <span>市场占有率</span>
                  </div>
                </el-col>
                <el-col :span="4" style="text-align:center">
                  <img src="../../../frame_src/imgs/icon/8.png" style="width:50px;height:50px;" alt />
                  <div style="font-size:12px;" class="icon-font">
                    <span>作业计划查询</span>
                  </div>
                </el-col>
              </el-row>

              <el-row>
                <el-col :span="4" style="text-align:center;">
                  <img
                    src="../../../frame_src/imgs/icon/10.png"
                    style="width:50px;height:50px;"
                    alt
                  />
                  <div style="font-size:12px;" class="icon-font">
                    <span>外部市场创收</span>
                  </div>
                </el-col>
                <el-col :span="4" style="text-align:center">
                  <img
                    src="../../../frame_src/imgs/icon/11.png"
                    style="width:50px;height:50px;"
                    alt
                  />
                  <div style="font-size:12px;" class="icon-font">
                    <span>重点物资收发</span>
                  </div>
                </el-col>
                <el-col :span="4" style="text-align:center">
                  <img
                    src="../../../frame_src/imgs/icon/12.png"
                    style="width:50px;height:50px;"
                    alt
                  />
                  <div style="font-size:12px;" class="icon-font">
                    <span>重点生产信息</span>
                  </div>
                </el-col>

                <el-col :span="4" style="text-align:center;">
                  <img
                    src="../../../frame_src/imgs/icon/18.png"
                    style="width:50px;height:50px;"
                    alt
                  />
                  <div style="font-size:12px;" class="icon-font">
                    <span>基建维修计划</span>
                  </div>
                </el-col>
                <el-col :span="4" style="text-align:center">
                  <img
                    src="../../../frame_src/imgs/icon/19.png"
                    style="width:50px;height:50px;"
                    alt
                  />
                  <div style="font-size:12px;" class="icon-font">
                    <span>基建维修进度</span>
                  </div>
                </el-col>
                <el-col :span="4" style="text-align:center">
                  <img
                    src="../../../frame_src/imgs/icon/21.png"
                    style="width:50px;height:50px;"
                    alt
                  />
                  <div style="font-size:12px;" class="icon-font">
                    <span>生产预测表</span>
                  </div>
                </el-col>
              </el-row>

              <el-row>
                <el-col :span="4" style="text-align:center;">
                  <img
                    src="../../../frame_src/imgs/icon/25.png"
                    style="width:50px;height:50px;"
                    alt
                  />
                  <div style="font-size:12px;" class="icon-font">
                    <span>井位进度日报</span>
                  </div>
                </el-col>
                <el-col :span="4" style="text-align:center">
                  <img
                    src="../../../frame_src/imgs/icon/26.png"
                    style="width:50px;height:50px;"
                    alt
                  />
                  <div style="font-size:12px;" class="icon-font">
                    <span>油管朋度计划</span>
                  </div>
                </el-col>
                <el-col :span="4" style="text-align:center">
                  <img
                    src="../../../frame_src/imgs/icon/27.png"
                    style="width:50px;height:50px;"
                    alt
                  />
                  <div style="font-size:12px;" class="icon-font">
                    <span>油管月度统计</span>
                  </div>
                </el-col>

                <el-col :span="4" style="text-align:center;">
                  <img
                    src="../../../frame_src/imgs/icon/28.png"
                    style="width:50px;height:50px;"
                    alt
                  />
                  <div style="font-size:12px;" class="icon-font">
                    <span>配送物流跟踪</span>
                  </div>
                </el-col>
                <el-col :span="4" style="text-align:center">
                  <img
                    src="../../../frame_src/imgs/icon/29.png"
                    style="width:50px;height:50px;"
                    alt
                  />
                  <div style="font-size:12px;" class="icon-font">
                    <span>产能建设计划</span>
                  </div>
                </el-col>
                <el-col :span="4" style="text-align:center">
                  <img
                    src="../../../frame_src/imgs/icon/30.png"
                    style="width:50px;height:50px;"
                    alt
                  />
                  <div style="font-size:12px;" class="icon-font">
                    <span>井位需求计划</span>
                  </div>
                </el-col>
              </el-row>

              <el-row>
                <el-col :span="4" style="text-align:center;">
                  <img
                    src="../../../frame_src/imgs/icon/31.png"
                    style="width:50px;height:50px;"
                    alt
                  />
                  <div style="font-size:12px;" class="icon-font">
                    <span>设备运转记录</span>
                  </div>
                </el-col>
                <el-col :span="4" style="text-align:center">
                  <img
                    src="../../../frame_src/imgs/icon/32.png"
                    style="width:50px;height:50px;"
                    alt
                  />
                  <div style="font-size:12px;" class="icon-font">
                    <span>当日入库统计</span>
                  </div>
                </el-col>
                <el-col :span="4" style="text-align:center">
                  <img
                    src="../../../frame_src/imgs/icon/34.png"
                    style="width:50px;height:50px;"
                    alt
                  />
                  <div style="font-size:12px;" class="icon-font">
                    <span>当日出库统计</span>
                  </div>
                </el-col>

                <el-col :span="4" style="text-align:center;">
                  <img
                    src="../../../frame_src/imgs/icon/35.png"
                    style="width:50px;height:50px;"
                    alt
                  />
                  <div style="font-size:12px;" class="icon-font">
                    <span>油井改造措施</span>
                  </div>
                </el-col>
                <el-col :span="4" style="text-align:center">
                  <img
                    src="../../../frame_src/imgs/icon/36.png"
                    style="width:50px;height:50px;"
                    alt
                  />
                  <div style="font-size:12px;" class="icon-font">
                    <span>重点工作进度</span>
                  </div>
                </el-col>
                <el-col :span="4" style="text-align:center">
                  <img
                    src="../../../frame_src/imgs/icon/37.png"
                    style="width:50px;height:50px;"
                    alt
                  />
                  <div style="font-size:12px;" class="icon-font">
                    <span>生产产能统计</span>
                  </div>
                </el-col>
              </el-row>
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
      CHECK_STATE: "1"
    };
  },
  methods: {
    // drawline() {
    //   ///绘制echarts 柱状图
    //   let mycharts = this.$echarts.init(document.getElementById("pic1"));
    //   mycharts.setOption(this.ZJoption);
    // },
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
    zongkucunclick() {
      this.$router.push({ path: "/cangchu/KCZS/Total" });
    },
    gangdongclick() {
      this.$router.push({ path: "/cangchu/KCZS/GDQCKDetail" });
    },
    zhuanyongguanclick() {
      this.$router.push({ path: "/cangchu/KCZS/ZYGFGSDetail" });
    },
    changxianzhiclick() {
      this.$router.push({ path: "/cangchu/KCZS/CXZGKDetail" });
    },
    HBclick() {
      this.$router.push({ path: "/cangchu/KCZS/HBDetail" });
    },
    GSclick() {
      this.$router.push({ path: "/cangchu/KCZS/GSDetail" });
    }
  },
  created() {},
  mounted() {
    // this.drawlineKC();
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
  .pic1 {
    height: 250px;
    width: 100%;
  }
  .icon {
    .el-row {
      margin-top: 25px;
    }
    .icon-font:hover {
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
  height: 120px;
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
.div_height {
  height: 5px;
}
</style>

