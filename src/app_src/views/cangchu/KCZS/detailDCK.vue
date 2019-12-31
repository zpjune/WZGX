<template>
  <div id="TotalZDWZ" class="app-container calendar-list-container">
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
          v-model="listQuery.info"
        ></el-input>
      </el-col>
      <el-col :xs="5" :sm="5" :md="5" :lg="4" :xl="3">
        <el-button type="primary" icon="el-icon-search" size="mini" @click="getList">查询</el-button>
        <!-- <el-button type="primary" icon="el-icon-document" size="mini">导出</el-button> -->
      </el-col>
    </el-row>
    <el-row>
      <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
        <!-- <el-table
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
          <el-table-column label="状态" width="70" align="center" prop="ZT">
            <template slot-scope="scope">
              <img
                v-if="scope.row.ZT==0"
                src="../../../img/blue.jpg"
                style="width:20px;height:15px;"
              >
              <img
                v-if="scope.row.ZT==1"
                src="../../../img/red.jpg"
                style="width:20px;height:15px;"
              >
              <img
                v-if="scope.row.ZT==2"
                src="../../../img/yellow.jpg"
                style="width:20px;height:15px;"
              >
            </template>
          </el-table-column>
          <el-table-column label="工厂编号" prop="GCBH"></el-table-column>
          <el-table-column label="物料组" prop="WLZ"></el-table-column>
          <el-table-column label="物料编码" prop="WLBM"></el-table-column>
          <el-table-column label="物料描述" prop="WLMS"></el-table-column>
          <el-table-column label="计量单位" prop="JLDW"></el-table-column>
          <el-table-column label="实存数量" prop="SCSL"></el-table-column>
          <el-table-column label="副计量单位" prop="FJLDW"></el-table-column>
          <el-table-column label="副计量数量" prop="FJLSL"></el-table-column>
          <el-table-column label="存货状态" prop="CHZT"></el-table-column>
          <el-table-column label="库存地点" prop="KCDD"></el-table-column>
        </el-table>
        <div style="padding-top:3px;">
        <img src="../../../img/blue.jpg" style="width:20px;height:15px;vertical-align:middle;margin-top:-2px"><span>&nbsp;无动态（积压）</span>
        <img src="../../../img/red.jpg" style="width:20px;height:15px;vertical-align:middle;margin-top:-2px"><span>&nbsp;报废或超期</span>
        <img src="../../../img/yellow.jpg" style="width:20px;height:15px;vertical-align:middle;margin-top:-2px"><span>&nbsp;有保存期限&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;其他为正常</span>
        </div>-->
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
         <el-table-column label="序号">
            <template slot-scope="scope">{{scope.$index+1}}</template>
          </el-table-column>
          <el-table-column label="出库单号" prop="ZCKTZD" width="150"></el-table-column>
          <!-- <el-table-column label="物料组" prop="MATKL"></el-table-column> -->
          <el-table-column label="物料编码" width="150">
            <template slot-scope="scope">
              {{scope.row.MATNR|substringWLCODE}}
            </template>
          </el-table-column>
          <el-table-column label="物料描述" prop="MAKTX" width="350"></el-table-column>
          <el-table-column label="计量单位" prop="JBJLDW"></el-table-column>
          <el-table-column label="待出库数量" prop="ZFHSL" width="100"></el-table-column>
          <el-table-column label="库存数量">
            <template slot-scope="scope">{{scope.row.ZFHSL|changeNum}}</template>
          </el-table-column>
          <el-table-column label="工厂编号" prop="WERKS"></el-table-column>
          <el-table-column label="单位名称"  width="150px">
            <template slot-scope="scope">
              {{scope.row.DW_NAME|substringName}}
            </template>
          </el-table-column>
          <!-- <el-table-column label="创建人" prop="CJR"></el-table-column> -->
          <el-table-column label="供货单位" prop="NAME1" width="250"></el-table-column>
          <el-table-column label="入库地点" prop="KCDD_NAME" width="250"></el-table-column>
        </el-table>
        <el-pagination
          background
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="1"
          :page-sizes="[10,20,30, 50]"
          :page-size="20"
          layout="total, sizes, prev, pager, next, jumper"
          :total="total"
          style="text-align: center;"
        ></el-pagination>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { GetDCKInfo } from "@/app_src/api/cangchu/KCZS/ZXK";
export default {
  name: "TotalZDWZ",
  props: ["FacCode"],
  data() {
    return {
      listloading: true,
      fac: [],
      listQuery: {
        limit: 10,
        page: 1,
        MATNR: "",
        info: "",
        FacCode: this.FacCode
      },
      total: 0
    };
  },
  methods: {
    getList() {
      this.listloading=true;
      GetDCKInfo(this.listQuery).then(response => {
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
  mounted() {
    //this.getList();
  },
  filters: {
    changeNum(val) {
      if (val === null || val === "") {
        return 0;
      } else {
        return val;
      }
    },
    substringWLCODE(val) {
      if (val.startsWith("0000000")) {
        return val.substring(7, 18);
      } else {
        return val;
      }
    },
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
    }
  }
};
</script>



<style lang="scss" scoped>
</style>


