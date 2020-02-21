<template>
  <div id="WLCX" class="app-container calendar-list-container">
    <el-row style="margin-bottom:10px;">
      <el-col :xs="5" :sm="5" :md="5" :lg="4" :xl="3">
        <el-input
          placeholder="请输入物料编码"
          style="width:95%;"
          size="mini"
          clearable
          v-model="listQuery.MATNR"
        ></el-input>
      </el-col>
      <el-col :xs="5" :sm="5" :md="5" :lg="4" :xl="3">
        <el-input
          placeholder="请输入物料描述"
          style="width:95%;"
          size="mini"
          clearable
          v-model="listQuery.MAKTX"
        ></el-input>
      </el-col>
      <!-- <el-col :xs="5" :sm="5" :md="5" :lg="4" :xl="3">
        <el-input placeholder="请输入库存地点" style="width:95%;" size="mini" clearable v-model="listQuery.LGORT_NAME"></el-input>
      </el-col>-->
      <el-col :xs="5" :sm="5" :md="5" :lg="4" :xl="3">
        <el-button type="primary" icon="el-icon-search" size="mini" @click="getList">查询</el-button>
        <!-- <el-button type="primary" icon="el-icon-document" size="mini">导出</el-button> -->
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
          <el-table-column label="物料名称" prop="MAKTX" width="400"></el-table-column>
          <el-table-column label="物料编号">
            <template slot-scope="scope">
              {{scope.row.MATNR|substringWLCODE}}
            </template>
          </el-table-column>
          <el-table-column label="实存数量" prop="GESME"></el-table-column>
          <el-table-column label="计量单位" prop="MEINS"></el-table-column>
          <el-table-column label="库存状态" >
            <template slot-scope="scope">
              {{scope.row.ZSTATUS|fZSTATUS}}
            </template>
          </el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <el-button type="primary" size="mini" @click="getDetail(scope.row)">详情</el-button>
            </template>
          </el-table-column>
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
    <el-dialog title="物料详情" :visible.sync="show">
      <el-card>
        <el-table
          size="mini"
          :data="Detail"
          :header-cell-class-name="tableRowClassName"
          v-loading="listloading"
          element-loading-text="给我一点时间"
          border
          fit
          highlight-current-row
          style="width: 100%"
        >
          <el-table-column label="工厂名称" >
            <template slot-scope="scope">
              {{scope.row.WERKS_NAME|substringName}}
            </template>
          </el-table-column>
          <el-table-column label="库存地点" prop="LGORT_NAME"></el-table-column>
          <el-table-column label="库存数量" prop="GESME"></el-table-column>
          <el-table-column label="计量单位" prop="MEINS"></el-table-column>
          <el-table-column label="库存状态" >
            <template slot-scope="scope">
              {{scope.row.ZSTATUS|fZSTATUS}}
            </template>
          </el-table-column>
        </el-table>
        <el-pagination
          background
          @size-change="handleSizeChange1"
          @current-change="handleCurrentChange1"
          :current-page="1"
          :page-sizes="[10,20,30, 50]"
          layout="total, sizes, prev, pager, next, jumper"
          :total="total1"
          style="text-align: center;"
        ></el-pagination>
      </el-card>
    </el-dialog>
  </div>
</template>

<script>
import { GetWLTotalInfo, GetWLDetail } from "@/app_src/api/cangchu/SWKC/WLCX";
export default {
  name: "WLCX",
  data() {
    return {
      listloading: false,
      listloading1: false,
      fac: [],
      Detail: [],
      listQuery: {
        limit: 10,
        page: 1,
        MATNR: "",
        MAKTX: ""
      },
      DetailListQuery: {
        limit: 10,
        page: 1,
        MATNR: ""
      },
      total: 0,
      total1: 0,
      show: false
    };
  },
  methods: {
    getList() {
      GetWLTotalInfo(this.listQuery).then(response => {
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
    getDetail(data) {
      this.DetailListQuery = {
        limit: 10,
        page: 1,
        MATNR: data.MATNR
      };
      GetWLDetail(this.DetailListQuery).then(response => {
        if (response.data.code === 2000) {
          this.Detail = response.data.items;
          this.total1 = response.data.total;
          this.show = true;
          this.listloading1 = false;
        } else {
          this.listloading1 = false;
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
    },
    handleSizeChange1(val) {
      this.listQuery.limit = val;
      this.getDetail();
    },
    handleCurrentChange1(val) {
      this.listQuery.page = val;
      this.getDetail();
    }
  },
  mounted() {
    this.getList();
  },
  filters: {
    substringName(val) {
      if (val === null || val === "") {
        return "";
      }
      if (val.startsWith("大港油田公司")) {
        let str = val.replace("大港油田公司", "");
        if (str.startsWith("物资供销公司")) {
          return str.replace("物资供销公司", "");
        } else {
          return str;
        }
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
    substringWLCODE(val) {
      if (val.startsWith("0000000")) {
        return val.substring(7, 18);
      } else {
        return val;
      }
    }
  }
};
</script>



<style lang="scss" scoped>
</style>


