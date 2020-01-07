<template>
  <div id="SWKCZHCX" class="app-container calendar-list-container">
    <el-row style="margin-bottom:10px;">
         <el-col :xs="5" :sm="5" :md="5" :lg="4" :xl="3">
        <el-input placeholder="请输入工厂" style="width:95%;" size="mini" clearable v-model="listQuery.WERKS"></el-input>
      </el-col>
      <el-col :xs="5" :sm="5" :md="5" :lg="4" :xl="3">
        <el-input placeholder="请输入库存地点编码" style="width:95%;" size="mini" clearable v-model="listQuery.LGORT"></el-input>
      </el-col>
      <el-col :xs="5" :sm="5" :md="5" :lg="4" :xl="3">
        <el-input placeholder="请输入库存地点" style="width:95%;" size="mini" clearable v-model="listQuery.LGORT_NAME"></el-input>
      </el-col>
      <el-col :xs="5" :sm="5" :md="5" :lg="4" :xl="3">
        <el-input placeholder="请输入物料编码" style="width:95%;" size="mini" clearable v-model="listQuery.MATNR"></el-input>
      </el-col>
      <el-col :xs="5" :sm="5" :md="5" :lg="4" :xl="3">
        <el-input placeholder="请输入物料名称" style="width:95%;" size="mini" clearable v-model="listQuery.MAKTX"></el-input>
      </el-col>
      <el-col :xs="5" :sm="5" :md="5" :lg="4" :xl="3">
        <el-button type="primary" icon="el-icon-search" size="mini" @click="getList">查询</el-button>
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
          
          <el-table-column label="工厂编号" prop="WERKS"></el-table-column>
          <el-table-column label="物料组" prop="MATKL"></el-table-column>
           <el-table-column label="物料编码">
            <template slot-scope="scope">
              {{scope.row.MATNR|substringWLCODE}}
            </template>
          </el-table-column>
          <el-table-column label="物料描述" prop="MAKTX" width="300"></el-table-column>
          <el-table-column label="计量单位" prop="MEINS" width="80"></el-table-column>
          <el-table-column label="实存数量" prop="GESME"></el-table-column>
          <el-table-column label="存货状态" >
            <template slot-scope="scope">
              {{scope.row.ZSTATUS|fZSTATUS}}
            </template>
          </el-table-column>
          <el-table-column label="库存地点" prop="LGORT_NAME"></el-table-column>
        </el-table>
        
        <el-pagination
          background
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="1"
          :page-sizes="[10,20,30, 50]"
          layout="total, sizes, prev, pager, next, jumper"
          :total="total"
          style="text-align: center;"
        ></el-pagination>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { GetCompositeInfo } from "@/app_src/api/cangchu/SWKC/ZHCX";
export default {
  name: "SWKCZHCX",
  data() {
    return {
      listloading: false,
      fac: [
      ],
      listQuery:{
        WERKS:"",
        LGORT:"",
        LGORT_NAME:"",
        MATNR:"",
        MAKTX:"",
        page:1,
        limit:10
      },
      total:0,
    };
  },
  methods: {
    getList() {
      GetCompositeInfo(this.listQuery).then(response => {
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
      this.listQuery.limit = val;
      this.getList();
    },
    handleCurrentChange(val) {
      this.listQuery.page = val;
      this.getList();
    }
  },
  mounted(){
    this.getList();
  },
  filters:{
    substringWLCODE(val) {
      if (val.startsWith("0000000")) {
        return val.substring(7, 18);
      } else {
        return val;
      }
    },
    fZSTATUS: function(val) {
      if (val === "03") {
        return "质检";
      }
      if (val === "04") {
        return "上架";
      }
    },
  }
};
</script>



<style lang="scss" scoped>
</style>


