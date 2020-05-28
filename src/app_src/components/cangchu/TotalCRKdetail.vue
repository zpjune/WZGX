<template>
  <div id="TotalCRKdetail" class="app-container calendar-list-container">
    <el-dialog
      :title="CRKTitle"
      :visible.sync="crkdialog"
      :modal="false"
      @close="CloseDialog"
      :modal-append-to-body="false"
      style="margin-top:10vh;margin-left:100px;"
      width="50%"
    >
      <el-table
        :key="tableKey"
        :data="list"
        :header-cell-class-name="tableRowClassName"
        v-loading="listLoading"
        element-loading-text="给我一点时间"
        border
        fit
        highlight-current-row
        style="width: 100%"
        size="mini"
        id="table"
      >
        <el-table-column min-width="100px" align="center" label="单位" fixed="left">
          <template slot-scope="scope">
            <span>{{scope.row.WERKS_NAME|substringName}}</span>
          </template>
        </el-table-column>
        <el-table-column min-width="100px" align="center" label="入库金额(万)" fixed="left">
          <template slot-scope="scope">
            <span>{{scope.row.RKJE}}</span>
          </template>
        </el-table-column>
        <!-- <el-table-column min-width="100px" align="center" label="入库量" fixed="left">
          <template slot-scope="scope">
            <span >{{scope.row.RKL}}</span>
          </template>
        </el-table-column> -->
        <el-table-column min-width="100px" align="center" label="出库金额(万)" fixed="left">
          <template slot-scope="scope">
            <span>{{scope.row.CKJE}}</span>
          </template>
        </el-table-column>
        <!-- <el-table-column min-width="100px" align="center" label="出库量" fixed="left">
          <template slot-scope="scope">
            <span >{{scope.row.CKL}}</span>
          </template>
        </el-table-column> -->
      </el-table>
      <div class="pagination-container" style="text-align:center;">
        <el-pagination
          background
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="listQuery.page"
          :page-sizes="[10,20,30,40]"
          :page-size="listQuery.limit"
          layout="total, sizes, prev, pager, next, jumper"
          :total="total"
        ></el-pagination>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { getCRKDetail} from "@/app_src/api/cangchu/KCZS/Total";
export default {
  name: "TotalCRKdetail",
  data() {
    return {
      crkdialog: false,
      CRKTitle:'出入库明细',
      tableKey: 0,
      total: 0,
      list: [],
      listQuery: {
        page: 1,
        limit: 10,
         year:"",
      month:"",
      ISWZ:"1"
      },
      listLoading: false,
     month:''
    };
  },
  filters:{
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
  },
  props: ["CRKdetaildialogVisible","RCKDetailTitle","pmonth","pyear","iswz"],
  methods: {
    CloseDialog() {
      this.$emit("listenToChildEvent", false);
    },
    getList() {
      let newmonth="0"+this.month;
      if(this.month>9){
        newmonth=this.month;
      }
      this.listQuery.month=newmonth;
     // let query={year:this.year,month:newmonth,ISWZ:this.ISWZ}
      getCRKDetail(this.listQuery).then(res=>{
        if(res.data.code===2000){
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
    tableRowClassName({ row, rowIndex }) {
      // 表头行的 className 的回调方法，也可以使用字符串为所有表头行设置一个固定的 className。
      if (rowIndex === 0) {
        return "el-button--primary is-active"; // 'warning-row'
      } // 'el-button--primary is-plain'// 'warning-row'
      return "";
    }
  },
  watch: {
    CRKdetaildialogVisible(val) {
      this.crkdialog = val; //新增result的watch，监听变更并同步到myResult上
    },
    RCKDetailTitle(val){
      this.CRKTitle=val;
    },
    pmonth(val){
        this.month=val;
    },
    pyear(val){
      this.listQuery.year=val;
    },
    iswz(val){
      this.listQuery.ISWZ=val;
    },
    crkdialog(val){
      if(val==true){
        this.listQuery.page = 1;
        this.getList();
      }
      
    }
  },
  created(){
    
  }
};
</script>
<style  lang="scss" scoped>
</style>