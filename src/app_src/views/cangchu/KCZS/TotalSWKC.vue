<template>
  <div id="TotalSWKC" class="app-container calendar-list-container">
    <el-row style="margin-bottom:10px;">
      <el-col :xs="5" :sm="5" :md="5" :lg="4" :xl="3">
        <el-radio class="radio" v-model="listQuery1.ISWZ" label="1">物资公司</el-radio>
        <el-radio class="radio" v-model="listQuery1.ISWZ" label="2">大港油田</el-radio>
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
        <el-button type="primary" icon="el-icon-search" @click="btnQuert1" size="mini">查询</el-button>
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
                <el-table-column
                  label="大类"
                  prop="DLCODE"
                  width="70"
                  show-overflow-tooltipshow-overflow-tooltip
                ></el-table-column>
                <el-table-column
                  label="项数"
                  prop="XM"
                  width="150"
                  show-overflow-tooltipshow-overflow-tooltip
                ></el-table-column>
                <el-table-column
                  label="数量"
                  prop="SL"
                  width="250"
                  show-overflow-tooltipshow-overflow-tooltip
                ></el-table-column>
                <el-table-column
                  label="计量单位"
                  prop="JLDW"
                  width="324"
                  show-overflow-tooltipshow-overflow-tooltip
                ></el-table-column>
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
              <el-pagination v-if="isPpage"
                background
                @size-change="handleSizeChange2"
                @current-change="handleCurrentChange2"
                :current-page="listQuery2.page"
                :page-sizes="[10,20,30, 50]"
                layout="total, sizes, prev, pager, next, jumper"
                :total="total2"
                style="text-align: center;"
              ></el-pagination>
            </template>
          </el-table-column>
          <el-table-column label="工厂编号">
            <template slot-scope="scope">
              <span>{{scope.row.WERKS}}</span>
            </template>
          </el-table-column>
          <el-table-column label="工厂名称">
            <template slot-scope="scope">
              <span>{{scope.row.WERKS_NAME|substringName}}</span>
            </template>
          </el-table-column>
          <el-table-column label="物资项数">
            <template slot-scope="scope">
              <span>{{scope.row.XM}}</span>
            </template>
          </el-table-column>
        </el-table>
        <el-pagination
          background
          @size-change="handleSizeChange1"
          @current-change="handleCurrentChange1"
          :current-page="listQuery1.page"
          :page-sizes="[10,20,30, 50]"
          layout="total, sizes, prev, pager, next, jumper"
          :total="total1"
        ></el-pagination>
      </el-col>
    </el-row>
    <el-dialog
      title="实物库存明细"
      :visible.sync="detailDialog"
      :modal="false"
      :modal-append-to-body="false"
      style="margin-top:10vh;margin-left:100px;"
      width="80%"
    >
      <el-row style="margin-bottom:10px;">
        <!-- <el-col :xs="5" :sm="5" :md="5" :lg="4" :xl="3">
        <el-radio class="radio" v-model="listQuery.ISWZ" label="1">物资公司</el-radio>
        <el-radio class="radio" v-model="listQuery.ISWZ" label="2">大港油田</el-radio>
      </el-col>
      <el-col :xs="5" :sm="5" :md="5" :lg="4" :xl="3">
        <el-input
          placeholder="请输入工厂编码"
          style="width:95%;"
          size="mini"
          v-model="listQuery.WERKS"
          clearable
        ></el-input>
      </el-col>
      <el-col :xs="5" :sm="5" :md="5" :lg="4" :xl="3">
        <el-input
          placeholder="请输入工厂名称"
          style="width:95%;"
          size="mini"
          v-model="listQuery.WERKS_NAME"
          clearable
        ></el-input>
        </el-col>-->
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
            <el-table-column label="状态" width="70" align="center" prop="ZT">
              <template slot-scope="scope">
                <img
                  v-if="scope.row.ZT=='01'"
                  src="../../../img/blue.jpg"
                  style="width:20px;height:15px;"
                />
                <img
                  v-if="scope.row.ZT=='02'"
                  src="../../../img/red.jpg"
                  style="width:20px;height:15px;"
                />
                <img
                  v-if="scope.row.ZT=='03'"
                  src="../../../img/yellow.jpg"
                  style="width:20px;height:15px;"
                />
              </template>
            </el-table-column>
            <el-table-column label="工厂编号" prop="WERKS" width="100" show-overflow-tooltip></el-table-column>
            <el-table-column label="工厂名称" width="150">
              <template slot-scope="scope">
                <span>{{scope.row.WERKS_NAME|substringName}}</span>
              </template>
            </el-table-column>
            <el-table-column label="物料组" prop="MATKL" width="100" show-overflow-tooltip></el-table-column>
            <el-table-column label="物料编码" width="120">
              <template slot-scope="scope">
                <span>{{scope.row.MATNR|fMATNR}}</span>
              </template>
            </el-table-column>
            <el-table-column label="物料描述" prop="MAKTX" :show-overflow-tooltip="true" width="300"></el-table-column>
            <el-table-column label="计量单位" prop="MEINS" width="100" show-overflow-tooltip></el-table-column>
            <el-table-column label="实存数量" prop="GESME" show-overflow-tooltip></el-table-column>
            <el-table-column label="存货状态">
              <template slot-scope="scope">
                <span>{{scope.row.ZSTATUS|fZSTATUS}}</span>
              </template>
            </el-table-column>
            <el-table-column label="库存地点编码" prop="LGORT" :show-overflow-tooltip="true" width="120"></el-table-column>
            <el-table-column
              label="库存地点"
              :show-overflow-tooltip="true"
              width="120"
              prop="LGORT_NAME"
            ></el-table-column>
          </el-table>
          <div style="padding-top:3px;">
            <img
              src="../../../img/blue.jpg"
              style="width:20px;height:15px;vertical-align:middle;margin-top:-2px"
            />
            <span>&nbsp;无动态（积压）</span>
            <img
              src="../../../img/red.jpg"
              style="width:20px;height:15px;vertical-align:middle;margin-top:-2px"
            />
            <span>&nbsp;报废或超期</span>
            <img
              src="../../../img/yellow.jpg"
              style="width:20px;height:15px;vertical-align:middle;margin-top:-2px"
            />
            <span>&nbsp;有保存期限&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;其他为正常</span>
          </div>
          <el-pagination
            background
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="listQuery.page"
            :page-sizes="[10,20,30, 50]"
            layout="total, sizes, prev, pager, next, jumper"
            :total="total"
            style="text-align: center;"
          ></el-pagination>
        </el-col>
      </el-row>
    </el-dialog>
  </div>
</template>

<script>
import {
  GetSWKC,
  GetSWKCDW,
  GetSWKCDL
} from "@/app_src/api/cangchu/KCZS/Total";
export default {
  props: ["FacCode"],
  name: "TotalSWKC",
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
  },
  data() {
    return {
      listloading: false,
      listQuery: {
        page: 1,
        limit: 10,
        ISWZ: "1",
        WERKS: "",
        WERKS_NAME: "",
        LGORTNAME: "",
        MATNR: "",
        MATKL: "",
        DLCODE: ""
      },
      list: [],
      total: 0,
      listloading1: false,
      listQuery1: {
        page: 1,
        limit: 10,
        ISWZ: "1",
        WERKS: "",
        LGPLA: this.FacCode
      },
      list1: [],
      total1: 0,
      listQuery2: {
        page: 1,
        limit: 10,
        WERKS: "",
        LGPLA: this.FacCode
      },
      list2: [],
      total2: 0,
      isPpage:false,
      //设置row-key只展示一行
      expands: [], //只展开一行放入当前行id
      getRowKeys(row) {
        //获取当前行id
        // console.log(row)
        return row.WERKS; //这里看这一行中需要根据哪个属性值是id
      },
      detailDialog: false
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
    btnQuert() {
      this.listQuery.limit = 10;
      this.listQuery.page = 1;
      this.getList();
    },
    getList() {
      GetSWKC(this.listQuery).then(res => {
        if (res.data.code === 2000) {
          this.list = res.data.items;
          this.total = res.data.total;
        }
      });
    },
    handleSizeChange(val) {
      this.listQuery.limit = val;
      this.getList();
    },
    handleCurrentChange(val) {
      this.listQuery.page = val;
      this.getList();
    },
    btnQuert1() {
      this.listQuery1.limit = 10;
      this.listQuery1.page = 1;
      this.getList1();
    },
    getList1() {
      GetSWKCDW(this.listQuery1).then(res => {
        if (res.data.code === 2000) {
          this.list1 = res.data.items;
          this.total1 = res.data.total;
        }
      });
    },
    handleSizeChange1(val) {
      this.listQuery1.limit = val;
      this.getList1();
    },
    handleCurrentChange1(val) {
      this.listQuery1.page = val;
      this.getList1();
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
    handleSizeChange1(val) {
      this.listQuery1.limit = val;
      this.getList1();
    },
    handleCurrentChange1(val) {
      this.listQuery1.page = val;
      this.getList1();
    },
    getList2() {
      this.list2 = [];
      this.total2 = 0;
      this.isPpage=false;
      GetSWKCDL(this.listQuery2).then(res => {
        if (res.data.code === 2000) {
          this.list2 = res.data.items;
          this.total2 = res.data.total;
        }
        this.isPpage=true;
      });
    },
    handleSizeChange2(val) {
      this.listQuery2.limit = val;
      this.getList2();
    },
    handleCurrentChange2(val) {
      this.listQuery2.page = val;
      this.getList2();
    },
    btnQuert2(row) {
      this.listQuery.WERKS = this.listQuery2.WERKS;
      this.listQuery.DLCODE = row.DLCODE;
      this.getList();
      this.detailDialog = true;
    }
  },
  mounted() {
    //this.getList1();
    //this.getList();
  }
};
</script>



<style lang="scss" scoped>
</style>


