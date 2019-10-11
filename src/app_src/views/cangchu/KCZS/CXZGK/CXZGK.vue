<template>
  <div
    style="text-align:center"
    usemap="#planetmap"
    id="TotalZXK"
    class="app-container calendar-list-container"
  >
    <!-- <img src="../../../img/ZXKdetail.png" border="0" usemap="#planetmap" alt="Planets" />
    <map name="planetmap" id="planetmap">
      <area shape="rect" coords="274, 120, 331, 384" @click="OpenDialog" />
      <area shape="rect" coords="1334, 170, 1393, 236" @click="OpenDialog" />
    </map>-->

    <img src="../../../../img/ZXKPIC.png" border="0" usemap="#planetmap" alt="Planets" />
    <map name="planetmap" id="planetmap">
      <area shape="rect" coords="777, 18, 811, 57" title="1号库" @click="OpenDialog('ZXK',1)" />
      <area shape="rect" coords="777, 59, 811, 98" title="2号库" @click="OpenDialog('ZXK',2)" />
      <area shape="rect" coords="777, 100, 811, 139" title="3号库" @click="OpenDialog('ZXK',3)" />
      <area shape="rect" coords="777, 141, 811, 180" title="4号库" @click="OpenDialog('ZXK',4)" />
      <area shape="rect" coords="777, 182, 811, 221" title="5号库" @click="OpenDialog('ZXK',5)" />
      <area shape="rect" coords="777, 223, 811, 262" title="6号库" @click="OpenDialog('ZXK',6)" />
      <area shape="rect" coords="777, 264, 811, 303" title="7号库" @click="OpenDialog('ZXK',7)" />
      <area shape="rect" coords="777, 305, 811, 344" title="8号库" @click="OpenDialog('ZXK',8)" />
      <area shape="rect" coords="777, 346, 811, 385" title="9号库" @click="OpenDialog('ZXK',9)" />
      <area shape="rect" coords="777, 387, 811, 426" title="10号库" @click="OpenDialog('ZXK',10)" />
      <area shape="rect" coords="777, 428, 811, 467" title="11号库" @click="OpenDialog('ZXK',11)" />
      <area shape="rect" coords="692, 225, 739, 255" title="12号库" @click="OpenDialog('ZXK',12)" />
      <area shape="rect" coords="692, 225, 739, 255" title="12号库" @click="OpenDialog('ZXK',12)" />
      <area shape="rect" coords="80, 215, 126, 245" title="12号库" @click="OpenDialog('ZXK',12.1)" />
      <area shape="rect" coords="80, 237, 126, 277" title="12号库" @click="OpenDialog('ZXK',12.2)" />
      <area shape="rect" coords="692, 257, 739, 287" title="13号库" @click="OpenDialog('ZXK',13)" />
      <area shape="rect" coords="692, 289, 739, 319" title="14号库" @click="OpenDialog('ZXK',14)" />
      <area shape="rect" coords="524, 288, 645, 370" title="15号库" @click="OpenDialog('ZXK',15)" />
      <area shape="rect" coords="464, 215, 523, 296" title="16料场" @click="OpenDialog('ZXK',16)" />
      <area shape="rect" coords="318, 215, 438, 418" title="17料场" @click="OpenDialog('ZXK',17)" />
      <area shape="rect" coords="260, 215, 293, 348" title="18号活动棚" @click="OpenDialog('ZXK',18)" />
      <area shape="rect" coords="225, 215, 258, 348" title="19号活动棚" @click="OpenDialog('ZXK',19)" />
      <area shape="rect" coords="188, 38, 222, 192" title="20号料场" @click="OpenDialog('ZXK',20)" />
      <area shape="rect" coords="224, 38, 256, 192" title="21号活动料棚" @click="OpenDialog('ZXK',21)" />
      <area shape="rect" coords="258, 38, 292, 192" title="22号活动料棚" @click="OpenDialog('ZXK',22)" />
      <area shape="rect" coords="331, 38, 367, 192" title="23号料场" @click="OpenDialog('ZXK',23)" />
      <area shape="rect" coords="369, 38, 405, 192" title="24号活动料棚" @click="OpenDialog('ZXK',24)" />
      <area shape="rect" coords="407, 38, 443, 192" title="25号活动料棚" @click="OpenDialog('ZXK',25)" />
      <area shape="rect" coords="462, 163, 511, 192" title="26号库" @click="OpenDialog('ZXK',26)" />
    </map>
    <kucunzhanshidetail :kcmxdialogVisible="kcmxDialog" @listenToChildEvent="closeDialog"></kucunzhanshidetail>
  </div>
</template>

<script>
import kucunzhanshidetail from "@/app_src/components/cangchu/kucunzhanshidetail";
export default {
  name: "TotalZXK",
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


