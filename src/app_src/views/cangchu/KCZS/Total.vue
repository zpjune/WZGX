<template>
  <div id="total" class="app-container calendar-list-container">
    <div>
      <div style="float:left">
        <div>
          <img class="ho" @click="zhongxinkuclick" src="../../../img/cangku1.jpg">
        </div>
        <div style="text-align:center">
          <span>中心库</span>
        </div>
      </div>
      <div>
        <div>
          <img
            class="ho"
            style="margin-left:40px;"
            @click="zhongxinkuclick"
            src="../../../img/cangku2.jpg"
          >
        </div>
        <div style="padding-left:470px;">
          <span>转运库</span>
        </div>
      </div>
      <div style="clear:both"></div>
      <div style="float:left">
        <div>
        <img class="ho" @click="zhongxinkuclick" src="../../../img/cangku3.jpg">
        </div>
        <div style="text-align:center">
          <span>港东器材库</span>
        </div>
      </div>
      <div>
        <div>
        <img class="ho" style="margin-left:40px;" @click="zhongxinkuclick" src="../../../img/cangku4.jpg">
        </div>
        <div style="padding-left:440px;">
          <span>专用管分公司</span>
        </div>
      </div>
    </div>
    <!-- <el-row>
      <el-col :span="6">
        <div style="text-align:right" >
          <img class="ho" @click="zhongxinkuclick" src="../../../img/cangku1.jpg">
        </div>
        <div style="text-align:center"><span>中心库</span></div>
      </el-col>
      <el-col :span="1">
        <div style="height:2px;" >
         
        </div>
      </el-col>
      <el-col :span="12">
        <div style="text-align:left" >
          <img class="ho" @click="yuanlianhuaclick" src="../../../img/cangku2.jpg">
        </div>
        <div style="text-align:center"><span>转运库</span></div>
      </el-col>
    </el-row>
    <div style="height:15px"></div>
    <el-row>
    <el-col :span="8">
        <div class="dpic">
          <img class="ho" src="../../../img/cangku3.jpg">
        </div>
        <div style="text-align:center"><span>港东器材库</span></div>
      </el-col>
      <el-col :span="6">
        <div class="dpic">
          <img class="ho" src="../../../img/cangku4.jpg">
        </div>
        <div style="text-align:center"><span>专用管分公司</span></div>
      </el-col>
       <el-col :span="8">
        <div class="dpic">
          
        </div>
      </el-col>
    </el-row>-->
  </div>
</template>

<script>
export default {
  name: "toral",
  data() {
    return {};
  },
  methods: {
    zhongxinkuclick() {
      this.$router.push({ path: "/cangchu/KCZS/ZXK" });
    },
    yuanlianhuaclick() {
      this.$router.push({ path: "/cangchu/KCZS/YLH" });
    }
  }
};
</script>



<style lang="scss" scoped>
.dpic {
  text-align: center;
}
.ho {
  cursor: pointer;
}
img {
  width: 301px;
  height: 184px;
}
</style>


