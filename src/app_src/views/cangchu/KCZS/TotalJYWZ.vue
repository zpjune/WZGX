<template>
  <div id="TotalSWKC" class="app-container calendar-list-container">
    <el-row style="margin-bottom:10px;">
      <el-col :xs="5" :sm="5" :md="5" :lg="4" :xl="3">
        <el-radio class="radio" v-model="ISWZ" label="1">物资公司</el-radio>
        <el-radio class="radio" v-model="ISWZ" label="2">大港油田</el-radio>
      </el-col>
      <el-col :xs="5" :sm="5" :md="5" :lg="4" :xl="3">
        <el-input
          placeholder="请输入工厂编码"
          style="width:95%;"
          size="mini"
          v-model="listQuery1.WERKS"
          clearable
        ></el-input>
      </el-col>
      <el-col :xs="5" :sm="5" :md="5" :lg="4" :xl="3">
        <el-button type="primary" icon="el-icon-search" @click="getList1" size="mini">查询</el-button>
      </el-col>
    </el-row>
    <el-row>
      <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
        <el-table
          size="mini"
          :data="list1"
          :header-cell-class-name="tableRowClassName"
          v-loading="listloading1"
          element-loading-text="给我一点时间"
          border
          fit
          highlight-current-row
          style="width: 100%"
          @expand-change="expandChange"
          :expand-row-keys="expands"
          :row-key="getRowKeys"
        >
          <el-table-column type="expand">
            <template slot-scope="scope">
              <div style="display:none">{{scope.row.WERKS}}</div>
              <el-table
                size="mini"
                :data="list2"
                :header-cell-class-name="tableRowClassName"
                v-loading="listloading1"
                element-loading-text="给我一点时间"
                border
                fit
                highlight-current-row
                style="width: 100%"
              >
                <el-table-column label="大类" prop="DLCODE" width="70" show-overflow-tooltip></el-table-column>
                <el-table-column label="项数" prop="SL" width="150" show-overflow-tooltip></el-table-column>
                <el-table-column label="数量" prop="GESME" width="250" show-overflow-tooltip></el-table-column>
                <el-table-column label="金额" prop="SALK3" width="250" show-overflow-tooltip></el-table-column>
                <el-table-column label="计量单位" prop="MEINS" width="324" show-overflow-tooltip></el-table-column>
                <el-table-column label="操作" width="120">
                  <template slot-scope="scope">
                    <el-button
                      type="primary"
                      icon="el-icon-search"
                      @click="btnQuert2(scope.row)"
                      size="mini"
                    >查看详情</el-button>
                  </template>
                </el-table-column>
              </el-table>
              <el-pagination
                background
                @size-change="handleSizeChange2"
                @current-change="handleCurrentChange2"
                :current-page="listQuery2.page"
                :page-sizes="[10,20,30, 50]"
                :page-size="listQuery2.limit"
                layout="total, sizes, prev, pager, next, jumper"
                :total="total2"
                style="text-align: center;"
              ></el-pagination>
            </template>
          </el-table-column>
          <el-table-column label="工厂编号" width="200">
            <template slot-scope="scope">
              <span>{{scope.row.WERKS}}</span>
            </template>
          </el-table-column>
          <el-table-column label="工厂名称" width="400">
            <template slot-scope="scope">
              <span>{{scope.row.WERKS_NAME|fWERKSNAME}}</span>
            </template>
          </el-table-column>
          <el-table-column label="物资项数" width="380">
            <template slot-scope="scope">
              <span>{{scope.row.SL}}</span>
            </template>
          </el-table-column>
          <el-table-column label="金额" width="380">
            <template slot-scope="scope">
              <span>{{scope.row.SALK3}}</span>
            </template>
          </el-table-column>
        </el-table>
        <el-pagination
          background
          @size-change="handleSizeChange1"
          @current-change="handleCurrentChange1"
          :current-page="listQuery1.page"
          :page-sizes="[10,20,30, 50]"
          :page-size="listQuery1.limit"
          layout="total, sizes, prev, pager, next, jumper"
          :total="total1"
          
        ></el-pagination>
        <el-dialog
          :visible.sync="detailDialog"
          title="积压库存明细"
          :modal="false"
          :modal-append-to-body="false"
          style="margin-top:10vh;margin-left:100px;"
          width="80%"
        >
          <!-- <el-col :xs="5" :sm="5" :md="5" :lg="4" :xl="3">
            <el-input
              placeholder="请输入工厂编码"
              style="width:95%;"
              size="mini"
              v-model="listQuery.WERKS"
              clearable
            ></el-input>
          </el-col> -->
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
            <el-table-column label="工厂编号" prop="WERKS" width="100" show-overflow-tooltip></el-table-column>
            <el-table-column label="工厂名称" prop="WERKS_NAME" width="250" show-overflow-tooltip></el-table-column>
            <el-table-column label="物料组" prop="MATKL" width=100 show-overflow-tooltip></el-table-column>
            <el-table-column label="物料编码" width="120">
              <template slot-scope="scope">
                <span>{{scope.row.MATNR|fMATNR}}</span>
              </template>
            </el-table-column>
            <el-table-column label="物料描述" prop="MAKTX" :show-overflow-tooltip="true" width="300" ></el-table-column>
            <el-table-column label="计量单位" prop="MEINS" width="100" show-overflow-tooltip></el-table-column>
            <el-table-column label="实存数量" prop="GESME" show-overflow-tooltip></el-table-column>
            <el-table-column label="金额" prop="SALK3" show-overflow-tooltip></el-table-column>
            <el-table-column label="存货状态">
              <template slot-scope="scope">
                <span>{{scope.row.ZSTATUS|fZSTATUS}}</span>
              </template>
            </el-table-column>
            <el-table-column label="库存地点编码" prop="LGORT" show-overflow-tooltip></el-table-column>
            <el-table-column label="库存地点" :show-overflow-tooltip="true" prop="LGORT_NAME" ></el-table-column>
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
        </el-dialog>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { GetJYWZ,GetDLJYWZ,GetTotalJYWZ } from "@/app_src/api/cangchu/KCZS/Total";
export default {
  name: "TotalSWKC",
  data() {
    return {
      listloading: false,
      ISWZ:"1",
      listQuery: {
        DLCODE:"",
        MEINS:"",
        page: 1,
        limit: 10,
        ISWZ: "1",
        WERKS: "",
        WERKS_NAME: "",
        LGORTNAME: "",
        MATNR: "",
        MATKL: ""
      },
      listQuery1: {
        page: 1,
        limit: 10,
        ISWZ: "1",
        WERKS: ""
      },
      listQuery2: {
        ISWZ: "1",
        page: 1,
        limit: 10,
        WERKS: "",
      },
      list1: [],
      list2: [],
      list: [],
      total: 0,
      total1:0,
      total2:0,
      expands: [], //只展开一行放入当前行id
      getRowKeys(row) {
        //获取当前行id
        // console.log(row)
        return row.WERKS; //这里看这一行中需要根据哪个属性值是id
      },
      detailDialog: false,
      listloading1: false,
      detailDialog: false
    };
  },
  filters: {
    fZSTATUS: function(val) {
      if (val === "03") {
        return "质检";
      }
      if (val === "04") {
        return "上架";
      }
    },
    fMATNR: function(val) {
      return val.substring(7);
    },
    fWERKSNAME: function(val) {
      if (val != "") {
        if (val.indexOf("大港油田公司物资供销公司") != -1) {
          return val.substring(12);
        }
        if (val.indexOf("大港油田公司") != -1) {
          return val.substring(6);
        }
      } else {
        return val;
      }
    }
  },
  methods: {
    tableRowClassName({ row, rowIndex }) {
      // 表头行的 className 的回调方法，也可以使用字符串为所有表头行设置一个固定的 className。
      if (rowIndex === 0) {
        return "el-button--primary is-active"; // 'warning-row'
      } // 'el-button--primary is-plain'// 'warning-row'
      return "";
    },
    btnQuert() {
      this.listQuery.limit = 10;
      this.listQuery.page = 1;
      this.getList();
    },
    btnQuert2(row) {
      this.listQuery.WERKS = this.listQuery2.WERKS;
      this.listQuery.DLCODE = row.DLCODE;
      this.listQuery.MEINS=row.MEINS;
      this.getList();
      this.detailDialog = true;
    },
    getList() {
      this.listQuery.ISWZ=this.ISWZ;
      GetJYWZ(this.listQuery).then(res => {
        if (res.data.code === 2000) {
          this.list = res.data.items;
          this.total = res.data.total;
        }
      });
    },
    getList1(){
      this.listQuery1.ISWZ = this.ISWZ;
      this.expands=[];
      GetTotalJYWZ(this.listQuery1).then(response => {
        if (response.data.code === 2000) {
          this.list1 = response.data.items;
          this.total1 = response.data.total;
        }
      });
    },
    getList2() {
      this.listQuery2.ISWZ = this.ISWZ;
      GetDLJYWZ(this.listQuery2).then(response => {
        if (response.data.code === 2000) {
          this.list2 = response.data.items;
          this.total2 = response.data.total;
        }
      });
    },
    expandChange(row, expandedRows) {
      let that = this;
      if (expandedRows.length > 0) {
        that.expands = [];
        if (row) {
          that.expands.push(row.WERKS);
        }
        that.listQuery2.page = 1;
        that.listQuery2.limit = 10;
        that.listQuery2.WERKS = row.WERKS;
        that.getList2();
      } else {
        that.expands = [];
      }
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
      this.listQuery1.limit = val;
      this.getList1();
    },
    handleCurrentChange1(val) {
      this.listQuery1.page = val;
      this.getList1();
    },
    handleSizeChange2(val) {
      this.listQuery2.limit = val;
      this.getList2();
    },
    handleCurrentChange2(val) {
      this.listQuery2.page = val;
      this.getList2();
    }
  },
  mounted() {
    //this.getList();
  }
};
</script>



<style lang="scss" scoped>
</style>


