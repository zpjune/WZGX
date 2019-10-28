<template>
  <div id="ZYKDetail" class="app-container calendar-list-container">
    <el-collapse v-model="activeCangku" style="width:98%;margin-left:20px">
      <el-collapse-item name="1">
        <template slot="title">
          <i class="header-icon el-icon-star-on" style="font-weight:bold">实物库存情况</i>
        </template>
        <div style="overflow-x: scroll;">
        <ZYK :FacCode="FacCode"></ZYK>
        </div>
      </el-collapse-item>
      <el-collapse-item name="2" @click.native="getDetailJYWZData()">
        <template slot="title">
          <i class="header-icon el-icon-s-help" style="font-weight:bold">积压物资统计</i>
        </template>
        <detailJYWZ DKCODE="01"></detailJYWZ>
      </el-collapse-item>
      <el-collapse-item name="3">
        <template slot="title">
          <i class="header-icon el-icon-s-platform" style="font-weight:bold">重点物资储备统计</i>
        </template>
        <detailZDWZ></detailZDWZ>
      </el-collapse-item>
      <el-collapse-item name="4">
        <template slot="title">
          <i class="header-icon el-icon-s-flag" style="font-weight:bold">重点物资出入库统计</i>
        </template>
        <detailZDWZCRK></detailZDWZCRK>
      </el-collapse-item>
      <el-collapse-item name="5">
        <template slot="title">
          <i class="header-icon el-icon-eleme" style="font-weight:bold">待入库统计</i>
        </template>
        <detailDRK :FacCode="FacCode"></detailDRK>
      </el-collapse-item>
      <el-collapse-item name="6">
        <template slot="title">
          <i class="header-icon el-icon-s-promotion" style="font-weight:bold">待出库统计</i>
        </template>
        <detailDCK :FacCode="FacCode"></detailDCK>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script>
import ZYK from "@/app_src/views/cangchu/KCZS/ZYK";
import detailJYWZ from "@/app_src/views/cangchu/KCZS/detailJYWZ";
import detailZDWZ from "@/app_src/views/cangchu/KCZS/detailZDWZ";
import detailZDWZCRK from "@/app_src/views/cangchu/KCZS/detailZDWZCRK";
import detailDRK from "@/app_src/views/cangchu/KCZS/detailDRK";
import detailDCK from "@/app_src/views/cangchu/KCZS/detailDCK";
export default {
  name: "ZYKDetail",
  data() {
    return {
      activeCangku: "1",
      param:'ZYK',
      FacCode:"01",
    };
  },
  components: {
    ZYK,
    detailJYWZ,
    detailZDWZ,
    detailZDWZCRK,
    detailDRK,
    detailDCK
  },
  methods: {
      getDetailJYWZData(){
          this.$refs.detailJYWZ.ParentClick(this.param);
      }
  },
  mounted() {}
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