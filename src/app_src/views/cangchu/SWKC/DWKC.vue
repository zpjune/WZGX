<template>
  <div id="DWKC" class="app-container calendar-list-container">
    <el-row style="margin-bottom:10px;">
        <el-col :xs="5" :sm="5" :md="5" :lg="4" :xl="3">
        <el-input placeholder="请输入工厂" style="width:95%;" size="mini" clearable></el-input>
      </el-col>
      <el-col :xs="5" :sm="5" :md="5" :lg="4" :xl="3">
        <el-input placeholder="请输入库存地点编码" style="width:95%;" size="mini" clearable></el-input>
      </el-col>
      <el-col :xs="5" :sm="5" :md="5" :lg="4" :xl="3">
        <el-input placeholder="请输入库存地点" style="width:95%;" size="mini" clearable></el-input>
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
          :header-cell-class-name="tableRowClassName"
          v-loading="listloading"
          element-loading-text="给我一点时间"
          border
          fit
          highlight-current-row
          style="width: 100%"
        >
          
          <el-table-column label="工厂编号" prop="GCBH"></el-table-column>
          <el-table-column label="计量单位" prop="JLDW" width="80"></el-table-column>
          <el-table-column label="实存数量" prop="SCSL"></el-table-column>
          <el-table-column label="存货状态" prop="CHZT"></el-table-column>
          <el-table-column label="库存地点" prop="KCDD"></el-table-column>
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
  name: "DWKC",
  data() {
    return {
      listloading: false,
      fac: [
        {
          ZT: 0,
          GCBH: "C27D",
          JLDW: "吨",
          SCSL: 20,
          CHZT: "已上架",
          KCDD: "中心库"
        },
        {
          ZT: 3,
          GCBH: "C27C",
         
          JLDW: "吨",
          SCSL: 10,
          CHZT: "已上架",
          KCDD: "转运库"
        },
        {
          ZT: 1,
          GCBH: "C274",
         
          JLDW: "吨",
          SCSL: 50,
          CHZT: "已上架",
          KCDD: "中心库"
        },
        {
          ZT: 3,
          GCBH: "C27D",
         
          JLDW: "吨",
          SCSL: 30,
          CHZT: "已上架",
          KCDD: "港东器材库"
        },
        {
          ZT: 2,
          GCBH: "C27C",
          
          JLDW: "吨",
          SCSL: 20,
          CHZT: "已上架",
          KCDD: "中心库"
        },
        {
          ZT: 0,
          GCBH: "C274",
          
          JLDW: "吨",
          SCSL: 20,
          CHZT: "已上架",
          KCDD: "中心库"
        },
        {
          ZT: 3,
          GCBH: "C274",
         
          JLDW: "吨",
          SCSL: 20,
          CHZT: "已上架",
          KCDD: "中心库"
        }
      ]
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


