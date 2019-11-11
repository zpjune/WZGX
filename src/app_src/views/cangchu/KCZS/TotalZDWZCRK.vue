<template>
  <div id="TotalZDWZCRK" class="app-container calendar-list-container">
    <el-row style="margin-bottom:10px;">
      <el-col :xs="5" :sm="5" :md="5" :lg="4" :xl="2">
        <el-date-picker
          v-model="month"
          style="width:95%;"
          size="mini"
          type="month"
          :clearable="false"
        ></el-date-picker>
      </el-col>
      <el-col :xs="5" :sm="5" :md="5" :lg="4" :xl="3">
        <el-input placeholder="请输入物料编码" style="width:95%;" size="mini" clearable></el-input>
      </el-col>
      <el-col :xs="5" :sm="5" :md="5" :lg="4" :xl="5">
        <el-button type="primary" icon="el-icon-search" @click="btnQuery" size="mini">查询</el-button>
        <el-button type="primary" icon="el-icon-document" size="mini">导出</el-button>
      </el-col>
    </el-row>
    <el-row>
      <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
        <el-table
          size="mini"
          :data="list"
          :header-cell-class-name="tableRowClassName"
          v-loading="listloading"
          element-loading-text="给我一点时间"
          border
          fit
          highlight-current-row
          style="width: 100%"
        >
          <el-table-column label="物料组" width="100" prop="MATKL"></el-table-column>
          <el-table-column label="物料编码" width="150" prop="WL_CODE"></el-table-column>
          <el-table-column label="物料描述" width="280" :show-overflow-tooltip="true" prop="MAKTX"></el-table-column>
          <el-table-column label="计量单位" width="100" prop="MEINS"></el-table-column>
          <el-table-column label="最低储备" width="120" prop="MAXHAVING"></el-table-column>
          <el-table-column label="最高储备" width="120" prop="MAXHAVING"></el-table-column>
          <el-table-column label="现有库存" width="150" prop="GESME"></el-table-column>
          <el-table-column label="月度入库" width="150" prop="RKSL"></el-table-column>
          <el-table-column label="累计入库" width="150" prop="RKSUMSL"></el-table-column>
          <el-table-column label="月度消耗" width="150" prop="CKSL"></el-table-column>
          <el-table-column label="累计消耗" width="150" prop="CKSUMSL"></el-table-column>
          <el-table-column
            align="center"
            label="操作"
            width="100px"
            class-name="small-padding fixed-width"
          >
            <template slot-scope="scope">
              <el-button
                type="primary"
                style="width:80px"
                size="mini"
                @click="DetailClick(scope.row)"
              >查看去向</el-button>
            </template>
          </el-table-column>
        </el-table>
        <el-pagination
          background
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="listQuery.page"
          :page-sizes="[10,20,30, 50]"
          :page-size="listQuery.limit"
          layout="total, sizes, prev, pager, next, jumper"
          :total="5"
          style="text-align: center;"
        ></el-pagination>
      </el-col>
    </el-row>
    <el-dialog
      title="去向明细表"
      :visible.sync="quxiangDialogVisible"
      :modal="false"
      :modal-append-to-body="false"
      style="margin-top:10vh;margin-left:100px;"
      width="50%"
    >
      <!-- <el-button type="primary" style="float:right" size="mini">导出</el-button> -->
      <el-table
        :data="listDetail"
        :header-cell-class-name="tableRowClassName"
        v-loading="listloading"
        element-loading-text="给我一点时间"
        border
        fit
        height="350"
        highlight-current-row
        style="width: 100%"
        size="mini"
        id="table"
      >
        <el-table-column min-width="100px" align="center" label="(领料)单位" fixed="left">
          <template slot-scope="scope">
            <span>{{scope.row.WERKS_NAME}}</span>
          </template>
        </el-table-column>
        <el-table-column min-width="100px" align="center" label="消耗数量" fixed="left">
          <template slot-scope="scope">
            <span>{{scope.row.SL}}</span>
          </template>
        </el-table-column>
      </el-table>
      <div class="pagination-container" style="text-align:center;">
        <el-pagination
          background
          @size-change="handleSizeChangeDetail"
          @current-change="handleCurrentChangeDetail"
          :current-page="listQueryDetail.page"
          :page-sizes="[10,20,30,40]"
          :page-size="listQueryDetail.limit"
          layout="total, sizes, prev, pager, next, jumper"
          :total="totalDetail"
        ></el-pagination>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { getZDWZCRK,getZDWZCRKDetail} from "@/app_src/api/cangchu/KCZS/Total";
export default {
  name: "TotalZDWZCRK",
  data() {
    return {
      listloading: false,
      quxiangDialogVisible: false,
      month:"",
      listQuery: {
        page: 1,
        limit: 10,
        yearmonth: "",
        MATNR: ""
      },
      list: [],
      total:0,
      listDetail: [],
      totalDetail:0,
      listQueryDetail:{
        MATNR:"",
        MONTH:"",
        page: 1,
        limit: 10
      }
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
    getList(){
      if(this.month.getMonth()<=8){
        this.listQuery.yearmonth=this.month.getFullYear().toString()+'0'+(this.month.getMonth()+1).toString();
      }
      else{
        this.listQuery.yearmonth=this.month.getFullYear().toString()+(this.month.getMonth()+1).toString();
      }
      getZDWZCRK(this.listQuery).then(res=>{
           if (res.data.code === 2000) {
           this.list=res.data.items;
           this.total=res.data.total;
        }
      });
    },
    handleSizeChange(val) {
      this.listQuery.limit = val
      this.getList()
    },
    handleCurrentChange(val) {
      this.listQuery.page = val
      this.getList()
    },
    btnQuery(){
      this.listQuery.limit=10;
      this.listQuery.page=1;
      this.getList();
    },
    getListDetail(){
       getZDWZCRKDetail(this.listQueryDetail).then(res=>{
           if (res.data.code === 2000) {
           this.listDetail=res.data.items;
           this.totalDetail=res.data.total;
        }
      });
    },
      handleSizeChangeDetail(val) {
      this.listQueryDetail.limit = val
      this.getListDetail()
    },
    handleCurrentChangeDetail(val) {
      this.listQueryDetail.page = val
      this.getListDetail()
    },
    DetailClick(row) {
      this.listQueryDetail.MATNR=row.WL_CODE;
      this.listQueryDetail.MONTH=row.MONTH;
      this.getListDetail();
      this.quxiangDialogVisible = true;
    },
  },
  created(){
    this.month=new Date();
    this.getList();
  }
};
</script>



<style lang="scss" scoped>
.fixed-width .el-button--mini {
  width: 80px;
}
.app-container /deep/.el-dialog__header {
  padding: 20px 20px 0px;
  text-align: center;
}
</style>


