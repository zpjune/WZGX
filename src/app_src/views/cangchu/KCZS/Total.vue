<template>
  <div id="total" class="app-container calendar-list-container">
    <el-row>
      <el-col :span="8">
        <div class="dpic">
          <img class="ho" @click="zhongxinkuclick" src="../../../img/zhongxinku.png">
        </div>
      </el-col>
      <el-col :span="8">
        <div class="dpic">
          <img class="ho" @click="yuanlianhuaclick" src="../../../img/yuanlianhua.png">
        </div>
      </el-col>
       <el-col :span="8">
        <div class="dpic">
          <img class="ho" src="../../../img/gangdong.png">
        </div>
      </el-col>
    </el-row>
    <div style="height:15px"></div>
    <el-row>
    <el-col :span="8">
        <div class="dpic">
          <img class="ho" src="../../../img/zhuanyunku.png">
        </div>
      </el-col>
      <el-col :span="8">
        <div class="dpic">
          <img class="ho" src="../../../img/zhuanyongguan.png">
        </div>
      </el-col>
       <el-col :span="8">
        <div class="dpic">
          
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "toral",
  data() {
    return {};
  },
  methods: {
      zhongxinkuclick(){
         this.$router.push({path:'/cangchu/KCZS/ZXK'});
      },
       yuanlianhuaclick(){
         this.$router.push({path:'/cangchu/KCZS/YLH'});
      }
  }
};
</script>



<style lang="scss" scoped>
.dpic{
    text-align: center;
}
.ho{
    cursor:pointer;
}
</style>


