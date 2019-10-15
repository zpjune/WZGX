<template>
  <div id="DWZJ" class="app-container calendar-list-container">
    <el-row style="margin-bottom:10px;">
      <el-col :xs="5" :sm="5" :md="5" :lg="4" :xl="3">
        <el-input placeholder="请输入工厂编码" style="width:95%;" size="mini" clearable v-model="listQuery.BWKEY"></el-input>
      </el-col>
      <el-col :xs="5" :sm="5" :md="5" :lg="4" :xl="3">
        <el-input placeholder="请输入工厂名称" style="width:95%;" size="mini" clearable v-model="listQuery.BWKEY_NAME"></el-input>
      </el-col>
      <el-col :xs="5" :sm="5" :md="5" :lg="4" :xl="3">
        <el-button type="primary" icon="el-icon-search" size="mini" @click="getList">查询</el-button>
        <el-button type="primary" icon="el-icon-document" size="mini">导出</el-button>
      </el-col>
    </el-row>
    <el-row>
      <el-col :xs="16" :sm="16" :md="16" :lg="15" :xl="14">
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
          <el-table-column label="工厂编码" prop="BWKEY"></el-table-column>
          <el-table-column label="工厂名称" prop="BWKEY_NAME"></el-table-column>
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
          :total="total"
          style="text-align: center;"
        ></el-pagination>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { GetFacMoney } from "@/app_src/api/cangchu/ERPZJ/DWZJ";
export default {
  name: "DWZJ",
  data() {
    return {
      listloading: false,
      fac: [],
      listQuery:{
        page:1,
        limit:10,
        BWKEY:"",
        BWKEY_NAME:"",
      },
      total:0,
    };
  },
  methods: {
    getList() {
      GetFacMoney(this.listQuery).then(response => {
        if (response.data.code === 2000) {
          this.fac = response.data.items;
          this.total = response.data.total;
          this.listloading = false;
        } else {
          this.listloading = false;
          this.$notify({
            position: "bottom-right",
            title: "失败",
            message: response.data.message,
            type: "error",
            duration: 2000
          });
        }
      });
    },
    tableRowClassName({ row, rowIndex }) {
      // 表头行的 className 的回调方法，也可以使用字符串为所有表头行设置一个固定的 className。
      if (rowIndex === 0) {
        return "el-button--primary is-active"; // 'warning-row'
      } // 'el-button--primary is-plain'// 'warning-row'
      return "";
    },
    handleSizeChange(val) {
      this.listQuery.limit=val;
      this.getList();
    },
    handleCurrentChange(val) {
      this.listQuery.page=val;
      this.getList();
    },
  },
  mounted(){
    this.getList();
  }
};
</script>



<style lang="scss" scoped>
</style>


