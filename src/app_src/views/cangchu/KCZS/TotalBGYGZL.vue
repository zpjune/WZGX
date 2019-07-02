<template>
  <div id="TotalBGYGZL" class="app-container calendar-list-container">
    <el-row style="margin-bottom:10px;">
      <el-col :xs="5" :sm="5" :md="5" :lg="4" :xl="3">
        <el-input placeholder="月份" style="width:95%;" size="mini" clearable></el-input>
      </el-col>
      <el-col :xs="5" :sm="5" :md="5" :lg="4" :xl="3">
        <el-input placeholder="员工姓名" style="width:95%;" size="mini" clearable></el-input>
      </el-col>
      <el-col :xs="5" :sm="5" :md="5" :lg="4" :xl="3">
        <el-button type="primary" icon="el-icon-search" size="mini">查询</el-button>
        <el-button type="primary" icon="el-icon-document" size="mini">导出</el-button>
      </el-col>
    </el-row>
    <el-row>
      <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
        <el-table
          size="mini"
          :data="fac"
         
          v-loading="listloading"
          element-loading-text="给我一点时间"
          border
          fit
          highlight-current-row
          style="width: 100%"
        >
          <el-table-column label="序号" prop="NON"></el-table-column>
          <el-table-column label="员工编号" prop="YGBH"></el-table-column>
          <el-table-column label="姓名" prop="XM"></el-table-column>
          <el-table-column label="单位" prop="DW"></el-table-column>

          <el-table-column label="工作量合计（项）" prop="GZLHJ" ></el-table-column>
          <el-table-column label="数量统计" align="center">
            <el-table-column label="吨" prop="HEJID"></el-table-column>
            <el-table-column label="米" prop="HJM"></el-table-column>
            <el-table-column label="个或其他" prop="GZLHJ"></el-table-column>
          </el-table-column>
          <el-table-column label="收料（项）" prop="GZLHJ"></el-table-column>
          <el-table-column label="收入数量" align="center">
            <el-table-column label="吨" prop="GZLHJ"></el-table-column>
            <el-table-column label="米" prop="GZLHJ"></el-table-column>
            <el-table-column label="个或其他" prop="GZLHJ"></el-table-column>
          </el-table-column>
          <el-table-column label="明细" prop="GZLHJ"></el-table-column>
          <el-table-column label="发料（项）" prop="GZLHJ"></el-table-column>
          <el-table-column label="发出数量" align="center">
            <el-table-column label="吨" prop="GZLHJ"></el-table-column>
            <el-table-column label="米" prop="GZLHJ"></el-table-column>
            <el-table-column label="个或其他" prop="GZLHJ"></el-table-column>
          </el-table-column>
          <el-table-column label="明细" prop="GZLHJ"></el-table-column>
          <el-table-column label="主要物资" prop="GZLHJ"></el-table-column>
        </el-table>

        <el-pagination
          background
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="1"
          :page-sizes="[10,20,30, 50]"
          :page-size="20"
          layout="total, sizes, prev, pager, next, jumper"
          :total="7"
          style="text-align: center;"
        ></el-pagination>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "TotalBGYGZL",
  data() {
    return {
      listloading: false,
      fac: []
    };
  },
  methods: {
    tableRowClassName({ row, rowIndex }) {
      // 表头行的 className 的回调方法，也可以使用字符串为所有表头行设置一个固定的 className。
      if (rowIndex === 0) {
        return "el-button--primary is-active"; // 'warning-row'
      } // 'el-button--primary is-plain'// 'warning-row'
      return "";
    },
    handleSizeChange() {},
    handleCurrentChange() {}
  }
};
</script>



<style lang="scss" scoped>
</style>


