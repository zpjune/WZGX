<template>
  <div id="JYWZ" class="app-container calendar-list-container">
    <TotalJYWZ></TotalJYWZ>
  </div>
</template>

<script>
import TotalJYWZ from "@/app_src/views/cangchu/KCZS/TotalJYWZ";
export default {
  name: "JYWZ",
  data() {
    return {
     
    };
  },
  components:{
    TotalJYWZ
  },
  methods: {
    tableRowClassName({ row, rowIndex }) {
      // 表头行的 className 的回调方法，也可以使用字符串为所有表头行设置一个固定的 className。
      if (rowIndex === 0) {
        return "el-button--primary is-active"; // 'warning-row'
      } // 'el-button--primary is-plain'// 'warning-row'
      return "";
    }}
};
</script>



<style lang="scss" scoped>
</style>


