<template>
  <div
    style="text-align:center"
    usemap="#planetmap"
    id="TotalZYK"
    class="app-container calendar-list-container"
  >
    <!-- <img src="../../../img/ZXKdetail.png" border="0" usemap="#planetmap" alt="Planets" />
    <map name="planetmap" id="planetmap">
      <area shape="rect" coords="274, 120, 331, 384" @click="OpenDialog" />
      <area shape="rect" coords="1334, 170, 1393, 236" @click="OpenDialog" />
    </map>-->

    <img src="../../../img/ZYKPIC.png" border="0" usemap="#planetmap" alt="Planets" />
    <map name="planetmap" id="planetmap">
      <area shape="rect" coords="280, 43, 316, 76" title="1号库" @click="OpenDialog('ZYK',1)" />
      <area shape="rect" coords="474, 200, 617, 230" title="1号活动料棚" @click="OpenDialog('ZYK',1.1)" />
      <area shape="rect" coords="473, 148, 617, 179" title="2号活动料棚" @click="OpenDialog('ZYK',2)" />
      <area shape="rect" coords="473, 44, 509, 75" title="5号库" @click="OpenDialog('ZYK',5)" />
      <area shape="rect" coords="511, 44, 547, 75" title="6号库" @click="OpenDialog('ZYK',6)" />
      <area shape="rect" coords="549, 44, 580, 75" title="7号库" @click="OpenDialog('ZYK',7)" />
      <area shape="rect" coords="582, 44, 616, 75" title="8号库" @click="OpenDialog('ZYK',8)" />
      <area shape="rect" coords="352, 304, 387, 334" title="9号库" @click="OpenDialog('ZYK',9)" />
      <area shape="rect" coords="389, 304, 424, 334" title="10号库" @click="OpenDialog('ZYK',10)" />
      <area shape="rect" coords="473, 304, 507, 334" title="11号库" @click="OpenDialog('ZYK',11)" />
      <area shape="rect" coords="509, 304, 543, 334" title="12号库" @click="OpenDialog('ZYK',12)" />
      <area shape="rect" coords="545, 304, 581, 334" title="13号库" @click="OpenDialog('ZYK',13)" />
      <area shape="rect" coords="583, 304, 619, 334" title="14号库" @click="OpenDialog('ZYK',14)" />
    </map>
    <kucunzhanshidetail :kcmxdialogVisible="kcmxDialog" @listenToChildEvent="closeDialog"></kucunzhanshidetail>
  </div>
</template>

<script>
import kucunzhanshidetail from "@/app_src/components/cangchu/kucunzhanshidetail";
export default {
  name: "TotalZYK",
  data() {
    return {
      kcmxDialog: false
    };
  },
  components: {
    kucunzhanshidetail
  },
  methods: {
    OpenDialog(type,val) {
      this.kcmxDialog = true;
      console.log(type+val);
    },
    closeDialog(val) {
      this.kcmxDialog = val;
    }
  }
};
</script>



<style lang="scss" scoped>
.app-container {
  padding-top: 2px;
}
.app-container /deep/ .el-dialog__body {
  background: #c0c0c0 !important;
}
.app-container /deep/ .el-dialog__header {
  background: #c0c0c0 !important;
}
</style>


