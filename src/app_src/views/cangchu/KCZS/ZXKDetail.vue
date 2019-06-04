<template>
  <div id="ZXKDetail" class="app-container calendar-list-container">
    <el-collapse v-model="activeCangku" accordion style="width:98%;margin-left:20px">
      <el-collapse-item title="库存资金情况" name="1"></el-collapse-item>
      <el-collapse-item title="实物库存情况" name="2"></el-collapse-item>
      <el-collapse-item title="积压库存情况" name="3"></el-collapse-item>
      <el-collapse-item title="重点物资情况" name="4"></el-collapse-item>
      <el-collapse-item title="出入库情况" name="5">

           
          
      </el-collapse-item>
      <el-collapse-item title="工作量情况" name="6"></el-collapse-item>
    </el-collapse>
  </div>
</template>

<script>
export default {
  name: "ZXKDetail",
  data() {
    return {
      activeCangku: "1",
      activeName: "first",
      activeGZL: "first"
    };
  },
  components: {},
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    }
  }
};
</script>



<style lang="scss" scoped>
</style>