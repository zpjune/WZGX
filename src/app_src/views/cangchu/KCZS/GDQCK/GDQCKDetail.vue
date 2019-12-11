<template>
  <div id="GDQCKDetail" class="app-container calendar-list-container">
    <el-collapse v-model="activeCangku" style="width:98%;margin-left:20px" @change="change">
      <el-collapse-item name="1">
        <template slot="title">
          <i class="header-icon el-icon-star-on" style="font-weight:bold">实物库存情况</i>
        </template>
        <div style="overflow-x: scroll;">
          <GDQCK ref="GDQCK" :FacCode='FacCode'></GDQCK>
        </div>
      </el-collapse-item>
      <el-collapse-item name="2">
        <template slot="title">
          <i class="header-icon el-icon-s-help" style="font-weight:bold">积压物资统计</i>
        </template>
        <detailJYWZ DKCODE="03" ref="detailJYWZ"></detailJYWZ>
      </el-collapse-item>
      <el-collapse-item name="3">
        <template slot="title">
          <i class="header-icon el-icon-s-platform" style="font-weight:bold">重点物资储备统计</i>
        </template>
        <detailZDWZNEW DKCODE="03" ref="detailZDWZNEW"></detailZDWZNEW>
      </el-collapse-item>
      <el-collapse-item name="4">
        <template slot="title">
          <i class="header-icon el-icon-s-flag" style="font-weight:bold">重点物资出入库统计</i>
        </template>
        <detailZDWZCRK DKCODE="03" ref="detailZDWZCRK"></detailZDWZCRK>
      </el-collapse-item>
      <el-collapse-item name="5">
        <template slot="title">
          <i class="header-icon el-icon-eleme" style="font-weight:bold">待入库统计</i>
        </template>
        <detailDRK :FacCode="FacCode" ref="detailDRK"></detailDRK>
      </el-collapse-item>
      <el-collapse-item name="6">
        <template slot="title">
          <i class="header-icon el-icon-s-promotion" style="font-weight:bold">待出库统计</i>
        </template>
        <detailDCK :FacCode="FacCode" ref="detailDCK"></detailDCK>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script>
import GDQCK from "@/app_src/views/cangchu/KCZS/GDQCK/GDQCK";
import detailJYWZ from "@/app_src/views/cangchu/KCZS/detailJYWZ";
import detailZDWZNEW from "@/app_src/views/cangchu/KCZS/detailZDWZNEW";
import detailZDWZCRK from "@/app_src/views/cangchu/KCZS/detailZDWZCRK";
import detailDRK from "@/app_src/views/cangchu/KCZS/detailDRK";
import detailDCK from "@/app_src/views/cangchu/KCZS/detailDCK";
export default {
  name: "GDQCKDetail",
  data() {
    return {
      activeCangku: "1",
      FacCode: "03",
      OldArr:["1"],
    };
  },
  components: {
    GDQCK,
    detailJYWZ,
    detailZDWZNEW,
    detailZDWZCRK,
    detailDRK,
    detailDCK
  },
  methods: {
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
          this.$refs.GDQCK.getList();
          break;
        case "2":
          this.$refs.detailJYWZ.getList();
          break;
        case "3":
          this.$refs.detailZDWZNEW.getList();
          break;
        case "4":
          this.$refs.detailZDWZCRK.getList();
          break;
        case "5":
          this.$refs.detailDRK.getList();
          break;
        case "6":
          this.$refs.detailDCK.getList();
          break;
        default:
          break;
      }
    }
  },
  mounted() {
    this.$refs.detailZDWZCRK.getZDWZPZ();
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