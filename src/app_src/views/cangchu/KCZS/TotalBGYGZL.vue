<template>
  <div id="TotalBGYGZL" class="app-container calendar-list-container">
    <el-row style="margin-bottom:10px;">
      <el-col :xs="5" :sm="5" :md="5" :lg="4" :xl="3">
        <el-date-picker
          v-model="month"
          style="width:95%;"
          size="mini"
          type="month"
          placeholder="选择月"
        ></el-date-picker>
      </el-col>
      <el-col :xs="5" :sm="5" :md="5" :lg="4" :xl="3">
        <el-input placeholder="员工姓名" style="width:95%;" v-model="listQuery.workerName"  size="mini" clearable></el-input>
      </el-col>
      <el-col :xs="5" :sm="5" :md="5" :lg="4" :xl="3">
        <el-button type="primary" icon="el-icon-search" @click="btnQuery" size="mini">查询</el-button>
        <!-- <el-button type="primary" icon="el-icon-document" size="mini">导出</el-button> -->
      </el-col>
    </el-row>
    <el-row>
      <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
        <el-table
          size="mini"
          :data="list"
          element-loading-text="给我一点时间"
          border
          fit
          highlight-current-row
          style="width: 100%"
        >
          <el-table-column label="员工编号" prop="ERNAME"></el-table-column>
          <el-table-column label="姓名" prop="WORKER_NAME"></el-table-column>
          <el-table-column label="单位" prop="WERKS_NAME"></el-table-column>

          <el-table-column label="工作量合计（项）" prop="XMHJ"></el-table-column>
          <el-table-column label="数量统计" align="center">
            <el-table-column label="吨" prop="HJ_DUN"></el-table-column>
            <el-table-column label="米" prop="HJ_MI"></el-table-column>
            <el-table-column label="个或其他" prop="HJ_QT"></el-table-column>
          </el-table-column>
          <el-table-column label="收料（项）" prop="RKHJ"></el-table-column>
          <el-table-column label="收入数量" align="center">
            <el-table-column label="吨" prop="RK_DUN"></el-table-column>
            <el-table-column label="米" prop="RK_MI"></el-table-column>
            <el-table-column label="个或其他" prop="RK_QT"></el-table-column>
          </el-table-column>
          <el-table-column label="明细">
            <template slot-scope="scope">
              <el-button
                type="primary"
                size="mini"
                @click="btnRKDetail(scope.row)"
              >明细</el-button>
            </template>
          </el-table-column>
          <el-table-column label="发料（项）" prop="CKHJ"></el-table-column>
          <el-table-column label="发出数量" align="center">
            <el-table-column label="吨" prop="CK_DUN"></el-table-column>
            <el-table-column label="米" prop="CK_MI"></el-table-column>
            <el-table-column label="个或其他" prop="CK_QT"></el-table-column>
          </el-table-column>
          <el-table-column label="明细">
            <template slot-scope="scope">
              <el-button
                type="primary"
                size="mini"
                @click="btnCKDetail(scope.row)"
              >明细</el-button>
            </template>
          </el-table-column>
          <el-table-column label="主要物资"></el-table-column>
        </el-table>

        <el-pagination
          background
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="listQuery.page"
          :page-sizes="[10,20,30, 50]"
          :page-size="listQuery.limit"
          layout="total, sizes, prev, pager, next, jumper"
          :total="total"
          style="text-align: center;"
        ></el-pagination>
      </el-col>
    </el-row>
    <el-dialog
      :title="detailTitle"
      :visible.sync="detailDialog"
      :modal="false"
      :modal-append-to-body="false"
      style="margin-top:10vh;margin-left:100px;"
      width="60%"
    >
      <el-table
        :data="listDetail"
        :header-cell-class-name="tableRowClassName"
        element-loading-text="给我一点时间"
        border
        fit
        highlight-current-row
        style="width: 100%"
        size="mini"
        id="table"
      >
        <el-table-column min-width="100px" align="center" width="100" label="单位编码" fixed="left">
          <template slot-scope="scope">
            <span>{{scope.row.WERKS}}</span>
          </template>
        </el-table-column>
        <el-table-column min-width="100px" align="center" label="单位名称" fixed="left">
          <template slot-scope="scope">
            <span>{{scope.row.WERKS_NAME}}</span>
          </template>
        </el-table-column>
        <el-table-column min-width="100px" align="center" width="125" label="入/出库通知单" fixed="left">
          <template slot-scope="scope">
            <span >{{scope.row.TZD}}</span>
          </template>
        </el-table-column>
        <el-table-column min-width="100px" align="center" width="60" label="行号" fixed="left">
          <template slot-scope="scope">
            <span>{{scope.row.ITEMS}}</span>
          </template>
        </el-table-column>
        <el-table-column min-width="100px" align="center" label="数量" fixed="left">
          <template slot-scope="scope">
            <span >{{scope.row.NSOLM}}</span>
          </template>
        </el-table-column>
        <el-table-column min-width="100px" align="center" width="80" label="单位" fixed="left">
          <template slot-scope="scope">
            <span >{{scope.row.JBJLDW}}</span>
          </template>
        </el-table-column>
        <el-table-column min-width="100px" align="center" :show-overflow-tooltip="true" width="175" label="物料描述" fixed="left">
          <template slot-scope="scope">
            <span >{{scope.row.MAKTX}}</span>
          </template>
        </el-table-column>
        <el-table-column min-width="100px" align="center" label="上/下架日期" fixed="left">
          <template slot-scope="scope">
            <span >{{scope.row.ERDAT}}</span>
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
import { getBGYGZL,getBGYGZLDetail} from "@/app_src/api/cangchu/KCZS/Total";
export default {
  name: "TotalBGYGZL",
  data() {
    return {
      list: [],
      month:"",
      listQuery: {
        month:"",
        workerName:"",
        page: 1,
        limit: 10
      },
      total:0,
      detailTitle:"",
      detailDialog:false,
      listDetail:[],
      totalDetail:0,
       listQueryDetail: {
        nianyue:"",
        TZDType:"",
        workerCode:"",
        page: 1,
        limit: 10
      },
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
        this.listQuery.month=this.month.getFullYear().toString()+'0'+(this.month.getMonth()+1).toString();
      }
      else{
        this.listQuery.month=this.month.getFullYear().toString()+(this.month.getMonth()+1).toString();
      }
      getBGYGZL(this.listQuery).then(res=>{
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
    btnRKDetail(row) {
      this.listQueryDetail.nianyue=row.NIANYUE;
      this.listQueryDetail.workerCode=row.ERNAME;
      this.listQueryDetail.TZDType="1";
        this.getListDetail();//1入库
        this.detailTitle="收入明细";
        this.detailDialog=true;
    },
    btnCKDetail(row) {
      this.listQueryDetail.nianyue=row.NIANYUE;
      this.listQueryDetail.workerCode=row.ERNAME;
      this.listQueryDetail.TZDType="2";
        this.getListDetail();//2出库
        this.detailTitle="发出明细";
        this.detailDialog=true;
    },
    getListDetail(){
      getBGYGZLDetail(this.listQueryDetail).then(res=>{
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
  },
  created(){
    this.month=new Date();
    //this.getList();
  }
};
</script>



<style lang="scss" scoped>
</style>


