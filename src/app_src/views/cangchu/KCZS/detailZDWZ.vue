<template>
  <div id="TotalZDWZ" class="app-container calendar-list-container">
    <el-row style="margin-bottom:10px;">
      <el-col :xs="5" :sm="5" :md="5" :lg="4" :xl="3">
        <el-input placeholder="请输入库存地点编码" style="width:95%;" size="mini" clearable></el-input>
      </el-col>
      <el-col :xs="5" :sm="5" :md="5" :lg="4" :xl="3">
        <el-input placeholder="请输入库存地点" style="width:95%;" size="mini" clearable></el-input>
      </el-col>
      <el-col :xs="5" :sm="5" :md="5" :lg="4" :xl="3">
        <el-input placeholder="请输入物料编码" style="width:95%;" size="mini" clearable></el-input>
      </el-col>
      <el-col :xs="5" :sm="5" :md="5" :lg="4" :xl="3">
        <el-input placeholder="请输入物料名称" style="width:95%;" size="mini" clearable></el-input>
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
        <el-table-column label="序号" width="70" align="center" prop="non">
          </el-table-column>
          <el-table-column label="物料组" prop="WLZ"></el-table-column>
          <el-table-column label="物料编码" prop="WLBM"></el-table-column>
          <el-table-column label="物料名称" prop="WLMC"></el-table-column>
          <el-table-column label="规格型号" prop="GGXH"></el-table-column>
          <el-table-column label="计量单位" prop="JLDW"></el-table-column>
          <el-table-column label="最低储备" prop="ZDCB"></el-table-column>
          <el-table-column label="最高储备" prop="ZGCB"></el-table-column>
          <el-table-column label="现有库存" prop="XYKC"></el-table-column>
          <el-table-column label="存放地点" prop="KCDD"></el-table-column>
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
  name: "TotalZDWZ",
  data() {
    return {
      listloading: false,
      fac: [
         {
          non: 1,
          WLZ: "07030302",
          WLBM: "10000513978",
          WLMC: "柴油",
          GGXH:'0#（国六）',
          JLDW: "吨",
          ZDCB: 300,
          ZGCB: 1600,
          XYKC: "",
          KCDD: ""
        },{
          non: 2,
          WLZ: "07030302",
          WLBM: "11000922113",
          WLMC: "柴油",
          GGXH:'-20#（国六）',
          JLDW: "吨",
          ZDCB: 200,
          ZGCB: 1300,
          XYKC: "",
          KCDD: ""
        },
        {
          non: 3,
          WLZ: "07030302",
          WLBM: "11000922112",
          WLMC: "柴油",
          GGXH:'0#（国六）',
          JLDW: "吨",
          ZDCB: 300,
          ZGCB: 1600,
          XYKC: "",
          KCDD: ""
        },
        {
          non: 4,
          WLZ: "02040101",
          WLBM: "20002020707",
          WLMC: "无缝套管",
          GGXH:'139.7*7.72N80L',
          JLDW: "吨",
          ZDCB: 300,
          ZGCB: 1700,
          XYKC: "",
          KCDD: ""
        },
        {
          non: 5,
          WLZ: "07030302",
          WLBM: "11004684489",
          WLMC: "柴油",
          GGXH:'0#（国六）',
          JLDW: "吨",
          ZDCB: 300,
          ZGCB: 1600,
          XYKC: "",
          KCDD: ""
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


