<template>
  <div id="ZDWZ" class="app-container calendar-list-container">
    <TotalZDWZDetail ref="TotalZDWZDetail"></TotalZDWZDetail>
  </div>
</template>

<script>
import TotalZDWZDetail from "@/app_src/views/cangchu/KCZS/TotalZDWZDetail";
export default {
  name: "ZDWZ",
  data() {
    return {};
  },
  components: {
    TotalZDWZDetail //重点物资
  },
  methods: {
    tableRowClassName({ row, rowIndex }) {
      // 表头行的 className 的回调方法，也可以使用字符串为所有表头行设置一个固定的 className。
      if (rowIndex === 0) {
        return "el-button--primary is-active"; // 'warning-row'
      } // 'el-button--primary is-plain'// 'warning-row'
      return "";
    },
    getList() {
      this.$refs.TotalZDWZDetail.getList();
    }
  },
  mounted() {
    this.getList();
  },
  
};
</script>



<style lang="scss" scoped>
</style>


