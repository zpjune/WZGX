<template>
  <div id="TotalZDWZNEW" class="app-container calendar-list-container">
    <el-row style="margin-bottom:10px;">
      <el-col :xs="5" :sm="5" :md="5" :lg="4" :xl="3">
        <el-input
          placeholder="请输入物料编码"
          style="width:95%;"
          size="mini"
          v-model="listQuery.MATNR"
          clearable
        ></el-input>
      </el-col>
      <el-col :xs="5" :sm="5" :md="5" :lg="4" :xl="3">
        <el-input
          placeholder="请输入物料组编码"
          style="width:95%;"
          size="mini"
          v-model="listQuery.MATKL"
          clearable
        ></el-input>
      </el-col>
      <el-col :xs="5" :sm="5" :md="5" :lg="4" :xl="3">
        <el-button type="primary" icon="el-icon-search" @click="btnQuert" size="mini">查询</el-button>
        <!-- <el-button type="primary" icon="el-icon-document" size="mini">导出</el-button> -->
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
        >
          <el-table-column label="物料编码" :show-overflow-tooltip="true" width="150">
            <template slot-scope="scope" >
                  <span>{{scope.row.MATNR|fMATNR}}</span>
               </template>
          </el-table-column>
          <el-table-column label="物料组" prop="MATKL"  width="120" ></el-table-column>
          <el-table-column label="物料描述" prop="MAKTX" :show-overflow-tooltip="true" width="350"></el-table-column>
          <el-table-column label="计量单位" prop="MEINS" width="120"></el-table-column>
          <el-table-column label="实存数量" prop="GESME"  width="150" ></el-table-column>
             <el-table-column label="操作"  width="120" align="center">
            <template slot-scope="scope">
              <el-button
                type="primary"
                size="mini"
                @click="btnDetail(scope.row)"
              >明细</el-button>
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
          :total="total"
          style="text-align: center;"
        ></el-pagination>
      </el-col>
    </el-row>
     <el-dialog
      title="重点物资明细"
      :visible.sync="detailDialog"
      :modal="false"
      :modal-append-to-body="false"
      style="margin-top:10vh;margin-left:100px;"
      width="60%"
    >
    <div >
    <el-row style="margin-bottom:10px;">
      <el-col :xs="5" :sm="5" :md="5" :lg="5" :xl="4">
        <el-input
          placeholder="请输入工厂编码"
          style="width:95%;"
          size="mini"
          v-model="listQueryDetail.WERKS"
          clearable
        ></el-input>
      </el-col>
      <el-col :xs="5" :sm="5" :md="5" :lg="4" :xl="4">
        <el-input
          placeholder="请输入工厂名称"
          style="width:95%;"
          size="mini"
          v-model="listQueryDetail.WERKS_NAME"
          clearable
        ></el-input>
      </el-col>
      <el-col :xs="5" :sm="5" :md="5" :lg="4" :xl="4">
        <el-input
          placeholder="请输入库存地点"
          style="width:95%;"
          size="mini"
          v-model="listQueryDetail.LGORTNAME"
          clearable
        ></el-input>
      </el-col>
      <el-col :xs="5" :sm="5" :md="5" :lg="4" :xl="3">
        <el-button type="primary" icon="el-icon-search" @click="btnQuerDetail" size="mini">查询</el-button>
      </el-col> 
    </el-row>
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
       <el-table-column label="工厂编号" width="80" prop="WERKS"></el-table-column>
          <el-table-column label="工厂名称" :show-overflow-tooltip="true" width="120">
             <template slot-scope="scope" >
                  <span>{{scope.row.WERKS_NAME|fWERISNAME}}</span>
               </template>
          </el-table-column>
          <el-table-column label="物料组" prop="MATKL">
          </el-table-column>
          <el-table-column label="物料编码" width="90" :show-overflow-tooltip="true" >
             <template slot-scope="scope" >
                  <span>{{scope.row.MATNR|fMATNR}}</span>
               </template>
          </el-table-column>
          <el-table-column label="物料描述" prop="MAKTX" :show-overflow-tooltip="true" width="300"></el-table-column>
          <el-table-column label="计量单位" prop="MEINS" width="80"></el-table-column>
          <el-table-column label="实存数量" prop="GESME"></el-table-column>
          <el-table-column label="最低储备" prop="MINHAVING"></el-table-column>
          <el-table-column label="最高储备" prop="MAXHAVING"></el-table-column>
          <el-table-column label="存货状态" width="90">
               <template slot-scope="scope" >
                  <span>{{scope.row.ZSTATUS|fZSTATUS}}</span>
               </template>
          </el-table-column>
          <el-table-column label="库存地点编码" width="95" prop="LGORT"></el-table-column>
          <el-table-column label="库存地点" :show-overflow-tooltip="true" prop="LGORT_NAME"></el-table-column>
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
    </div>
    </el-dialog>
  </div>
</template>

<script>
import { getZDWZCBTOTAL,getZDWZCBTOTALDETAIL } from "@/app_src/api/cangchu/KCZS/Total";
export default {
  name: "TotalZDWZNEW",
   filters:{
    fZSTATUS:function(val){
      if(val==='03'){
        return '质检';
      }
      if(val==='04'){
        return '上架';
      }
    },
    fMATNR:function(val){
        return val.substring(7);
    },
    fWERISNAME:function(val){
        return val.substring(12);
    }
  },
  data() {
    return {
      listloading: false,
      detailDialog:false,
      list: [],
      total:0,
      listQuery: {
        page: 1,
        limit: 10,
        MATNR: "",
        MATKL: ""
      },listDetail:[],
      totalDetail:0,
       listQueryDetail: {
        MATNR:"",
        WERKS: "",
        WERKS_NAME: "",
        LGORTNAME: "",
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
   btnQuert(){
      this.listQuery.limit=10;
      this.listQuery.page=1;
      this.getList();
    },
    getList() {
      getZDWZCBTOTAL(this.listQuery).then(res => {
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
    getListDetail(){
       getZDWZCBTOTALDETAIL(this.listQueryDetail).then(res => {
        if (res.data.code === 2000) {
           this.listDetail=res.data.items;
           this.totalDetail=res.data.total;
        }
      });
    },
    btnDetail(row){
      this.detailDialog=true;
      this.listQueryDetail.MATNR=row.MATNR;
      this.getListDetail();
    },
    btnQuerDetail(){
        this.getListDetail();
    },
    handleSizeChangeDetail(val) {
      this.listQueryDetail.limit = val
      this.getListDetail();
    },
    handleCurrentChangeDetail(val) {
      this.listQueryDetail.page = val
      this.getListDetail();
    },
  },
  mounted(){
    //this.getList();
  }
};
</script>



<style lang="scss" scoped>
</style>


