<template>
  <div id="ZYKDetail" class="app-container calendar-list-container">
    <el-collapse v-model="activeCangku" style="width:98%;margin-left:20px" @change="change">
      <el-collapse-item name="7">
        <template slot="title">
          <i class="header-icon el-icon-star-on" style="font-weight:bold">实物库存情况</i>     
        </template>
        <TotalSWKC ref="TotalSWKC" :FacCode="FacCode"></TotalSWKC>
      </el-collapse-item>
      <el-collapse-item name="1">
        <template slot="title">
          <i class="header-icon el-icon-star-on" style="font-weight:bold">实物库存平面图</i>
        </template>

        <div style="overflow-x: scroll;">
          <ZYK :FacCode="FacCode" ref="ZYK"></ZYK>
        </div>
      </el-collapse-item>
      <el-collapse-item name="5">
        <template slot="title">
          <i class="header-icon el-icon-eleme" style="font-weight:bold">计划入库情况</i>
        </template>
        <detailDRK :FacCode="FacCode" ref="detailDRK"></detailDRK>
      </el-collapse-item>
      <el-collapse-item name="6">
        <template slot="title">
          <i class="header-icon el-icon-s-promotion" style="font-weight:bold">计划出库情况</i>
        </template>
        <detailDCK :FacCode="FacCode" ref="detailDCK"></detailDCK>
      </el-collapse-item>
      <el-collapse-item name="2" @click.native="getDetailJYWZData()">
        <template slot="title">
          <i class="header-icon el-icon-s-help" style="font-weight:bold">积压物资统计</i>
        </template>
        <detailJYWZ DKCODE="01" ref="detailJYWZ"></detailJYWZ>
      </el-collapse-item>
      <!-- <el-collapse-item name="3">
        <template slot="title">
          <i class="header-icon el-icon-s-platform" style="font-weight:bold">重点物资储备统计</i>
        </template>
        <detailZDWZNEW DKCODE="01" ref="detailZDWZNEW"></detailZDWZNEW>
      </el-collapse-item>-->
      <!-- <el-collapse-item name="4">
        <template slot="title">
          <i class="header-icon el-icon-s-flag" style="font-weight:bold">重点物资统计</i>
        </template>
        <detailZDWZCRK DKCODE="01" ref="detailZDWZCRK"></detailZDWZCRK>
      </el-collapse-item>-->
      <el-collapse-item name="4">
        <template slot="title">
          <i class="header-icon el-icon-s-flag" style="font-weight:bold">实物出入库情况</i>
        </template>
        <detailSWCRK DKCODE="01" ref="detailSWCRK"></detailSWCRK>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script>
import ZYK from "@/app_src/views/cangchu/KCZS/ZYK";
import detailJYWZ from "@/app_src/views/cangchu/KCZS/detailJYWZ";
import detailZDWZNEW from "@/app_src/views/cangchu/KCZS/detailZDWZNEW";
import detailZDWZCRK from "@/app_src/views/cangchu/KCZS/detailZDWZCRK";
import detailSWCRK from "@/app_src/views/cangchu/KCZS/detailSWCRK";
import detailDRK from "@/app_src/views/cangchu/KCZS/detailDRK";
import detailDCK from "@/app_src/views/cangchu/KCZS/detailDCK";
import TotalSWKC from "@/app_src/views/cangchu/KCZS/TotalSWKC";
export default {
  name: "ZYKDetail",
  data() {
    return {
      activeCangku: "7",
      param: "ZYK",
      FacCode: "01",
      OldArr: ["7"] //用于记录当前激活的面板名称,1号面板默认打开
    };
  },
  components: {
    ZYK,
    detailJYWZ,
    detailZDWZNEW,
    detailZDWZCRK,
    detailDRK,
    detailDCK,
    TotalSWKC,
    detailSWCRK
  },
  methods: {
    getDetailJYWZData() {
      //this.$refs.detailJYWZ.ParentClick(this.param);
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
          this.$refs.ZYK.getList();

          break;
        case "2":
          this.$refs.detailJYWZ.getList();
          break;
        case "3":
          this.$refs.detailZDWZNEW.getList();
          break;
        case "4":
          this.$refs.detailSWCRK.GetCRKSL();
          break;
        case "5":
          this.$refs.detailDRK.getList();
          break;
        case "6":
          this.$refs.detailDCK.getList();
          break;
        case "7":
          this.$refs.TotalSWKC.getList1();
          break;
        default:
          break;
      }
    }
  },
  mounted() {
    //this.$refs.detailZDWZCRK.getZDWZPZ();
    //this.$refs.TotalSWKC.getList1();
    //this.$refs.ZYK.getList();
    this.$refs.TotalSWKC.getList1();
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
.app-container /deep/ .el-collapse-item__header {
  background: #f8f8ff !important;
}
</style>