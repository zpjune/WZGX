<template>
  <div id="TotalZDWZ" class="app-container calendar-list-container">
    <el-row style="margin-bottom:10px;">
      <el-col :xs="5" :sm="5" :md="5" :lg="4" :xl="3">
        <el-input
          placeholder="请输入工厂名称"
          style="width:95%;"
          size="mini"
          v-model="listQuery.WERKS_NAME"
          clearable
        ></el-input>
      </el-col>
      <el-col :xs="5" :sm="5" :md="5" :lg="4" :xl="3">
        <el-input
          placeholder="请输入库存地点"
          style="width:95%;"
          size="mini"
          v-model="listQuery.LGORTNAME"
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
        <el-input
          placeholder="请输入物料编码"
          style="width:95%;"
          size="mini"
          v-model="listQuery.MATNR"
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
          style="width: 100%"
        >
          <el-table-column label="工厂编号" prop="WERKS"></el-table-column>
          <el-table-column label="工厂名称" width="230">
            <template slot-scope="scope">
              {{scope.row.WERKS_NAME|substringName}}
            </template>
          </el-table-column>
          <el-table-column label="物料组" prop="MATKL"></el-table-column>
          <el-table-column label="物料编码" :show-overflow-tooltip="true" >
            <template slot-scope="scope">
              {{scope.row.MATNR|substringWLCODE}}
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
  </div>
</template>

<script>
import { getZDWZCB } from "@/app_src/api/cangchu/KCZS/Total";
export default {
  name: "TotalZDWZ",
   filters:{
    fZSTATUS:function(val){
      if(val==='03'){
        return '质检';
      }
      if(val==='04'){
        return '上架';
      }
    }
  },
  data() {
    return {
      listloading: false,
      list: [],
      total:0,
      listQuery: {
        page: 1,
        limit: 10,
        WERKS_NAME: "",
        LGORTNAME: "",
        MATNR: "",
        MATKL: ""
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
      getZDWZCB(this.listQuery).then(res => {
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
    }
  },
  mounted(){
    //this.getList();
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


