<template>
  <div id="ZHCX" class="app-container calendar-list-container">
    <el-row style="margin-bottom:10px;">
      <el-col :xs="5" :sm="5" :md="5" :lg="4" :xl="3">
        <el-input placeholder="请输入工厂编码" style="width:95%;" size="mini" clearable></el-input>
      </el-col>
      <el-col :xs="5" :sm="5" :md="5" :lg="4" :xl="3">
        <el-input placeholder="请输入大类编码" style="width:95%;" size="mini" clearable></el-input>
      </el-col>
      <el-col :xs="5" :sm="5" :md="5" :lg="4" :xl="3">
        <el-input placeholder="请输入中类编码" style="width:95%;" size="mini" clearable></el-input>
      </el-col>
      <el-col :xs="5" :sm="5" :md="5" :lg="4" :xl="3">
        <el-input placeholder="请输入小类编码" style="width:95%;" size="mini" clearable></el-input>
      </el-col>
      <el-col :xs="5" :sm="5" :md="5" :lg="4" :xl="3">
        <el-input placeholder="请输入品名编码" style="width:95%;" size="mini" clearable></el-input>
      </el-col>
      <el-col :xs="5" :sm="5" :md="5" :lg="4" :xl="3">
        <el-button type="primary" icon="el-icon-search" size="mini">查询</el-button>
        <el-button type="primary" icon="el-icon-document" size="mini">导出</el-button>
      </el-col>
    </el-row>
    <el-row>
      <el-col :xs="24" :sm="22" :md="20" :lg="20" :xl="18">
        <el-table
          size="mini"
          :data="goods"
          :header-cell-class-name="tableRowClassName"
          v-loading="listloading"
          element-loading-text="给我一点时间"
          border
          fit
          highlight-current-row
          style="width: 100%"
        >
          <el-table-column label="工厂代码" prop="BWKEY"></el-table-column>
          <el-table-column label="大类" prop="MATKL"></el-table-column>
          <el-table-column label="中类" prop="MATKL1"></el-table-column>
          <el-table-column label="小类" prop="MATKL2"></el-table-column>
          <el-table-column label="品名" prop="MATKL3"></el-table-column>
          <el-table-column label="金额" prop="SALK3"></el-table-column>
        </el-table>
        <el-pagination
          background
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="1"
          :page-sizes="[10,20,30, 50]"
          :page-size="1"
          layout="total, sizes, prev, pager, next, jumper"
          :total="1"
          style="text-align: center;"
        ></el-pagination>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "ZHCX",
  data() {
    return {
      listloading: false,
      goods: [
        {
          BWKEY: "创智信息技术",
          MATKL: "服装类",
          MATKL1: "裙子",
          MATKL2: "超短裙",
          MATKL3: "未知类",
          SALK3: 1000000
        },
        {
          BWKEY: "辽河数码",
          MATKL: "鞋类",
          MATKL1: "凉鞋",
          MATKL2: "露脚凉鞋",
          MATKL3: "未知类",
          SALK3: 1000000
        },
        {
          BWKEY: "天津XX贸易公司",
          MATKL: "上衣",
          MATKL1: "女士上衣",
          MATKL2: "女士露肩上衣",
          MATKL3: "未知类",
          SALK3: 1000000
        },
         {
          BWKEY: "北京XX贸易公司",
          MATKL: "裤子",
          MATKL1: "七分裤",
          MATKL2: "男士休闲7分库",
          MATKL3: "未知类",
          SALK3: 1000000
        },
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


