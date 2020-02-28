<template>
  <div id="detailSWCRKdetail" class="app-container calendar-list-container">
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
            <span>{{scope.row.WERKS_NAME}}</span>
          </template>
        </el-table-column>
        <el-table-column min-width="100px" align="center" v-if="this.TYP=='0'" label="入库量" fixed="left">
          <template slot-scope="scope">
            <span >{{scope.row.MENGE}}</span>
          </template>
        </el-table-column>
        <el-table-column min-width="100px" align="center" v-if="this.TYP=='0'" label="入库量单位" fixed="left">
          <template slot-scope="scope">
            <span >{{scope.row.MEINS}}</span>
          </template>
        </el-table-column>
         <el-table-column min-width="100px" v-if="this.TYP=='1'" align="center" label="出库量" fixed="left">
          <template slot-scope="scope">
            <span >{{scope.row.MENGE}}</span>
          </template>
        </el-table-column>
        <el-table-column min-width="100px" align="center" v-if="this.TYP=='1'" label="出库量单位" fixed="left">
          <template slot-scope="scope">
            <span >{{scope.row.MEINS}}</span>
          </template>
        </el-table-column>
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
import { getSWCRKDetail} from "@/app_src/api/cangchu/KCZS/ZXK";
export default {
  name: "detailSWCRKdetail",
  data() {
    return {
      crkdialog: false,
      CRKTitle:'出入库明细',
      tableKey: 0,
      total: 0,
      list: [],
      month:'',
      listQuery: {
        page: 1,
        limit: 10,
        dkcode:'',
        year:"",
         month:"" ,
         typ:'' 
      },
      listLoading: false,
      
    };
  },
  props: ["SWCRKdetaildialogVisible","SWRCKDetailTitle","pmonth","pyear","DDKCODE","TYP"],
  methods: {
    CloseDialog() {
      this.$emit("listenToChildEvent", false);
    },
     handleSizeChange(val) {
      this.listQuery.limit = val
      this.getList()
    },
    handleCurrentChange(val) {
      this.listQuery.page = val
      this.getList()
    },
    getList() {
      let newmonth="0"+this.month;
      if(this.month>9){
        newmonth=this.month;
      }
      this.listQuery.month=newmonth;
      getSWCRKDetail(this.listQuery).then(res=>{
        if(res.data.code===2000){
          this.list=res.data.items;
          this.total=res.data.total;
        }
      });
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
    SWCRKdetaildialogVisible(val) {
      this.crkdialog = val; //新增result的watch，监听变更并同步到myResult上
    },
    SWRCKDetailTitle(val){
      this.CRKTitle=val;
    },
    pmonth(val){
        this.month=val;
    },
    pyear(val){
      this.listQuery.year=val;
    },
    DDKCODE(val){
      this.listQuery.dkcode=val;
    },
     TYP(val){
      this.listQuery.typ=val;
    },
    crkdialog(val){
      if(val==true){
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