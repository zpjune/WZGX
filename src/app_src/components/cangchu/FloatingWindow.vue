<template>
  <div id="FlaotingWindow" class="FlaotingWindow">
    <el-dialog :visible.sync="seen" title="库存概况" width="80%">
      <el-card>
        <div>
          <el-table
            size="mini"
            :data="list2"
            :header-cell-class-name="tableRowClassName"
            v-loading="listloading"
            element-loading-text="给我一点时间"
            border
            fit
            highlight-current-row
            style="width: 100%;min-height:400px;"
            :modal="false"
            :modal-append-to-body="false"
            @expand-change="expandChange1"
            :expand-row-keys="expands1"
            :row-key="getRowKeys1"
          >
            <el-table-column type="expand">
              <template slot-scope="scope">
                <span v-if="false">{{scope.row}}</span>
                <el-table
                  size="mini"
                  :data="list"
                  :header-cell-class-name="tableRowClassName"
                  v-loading="listloading"
                  element-loading-text="给我一点时间"
                  border
                  fit
                  highlight-current-row
                  style="width: 100%;min-height:400px;"
                  :modal="false"
                  :modal-append-to-body="false"
                  @expand-change="expandChange"
                  :expand-row-keys="expands"
                  :row-key="getRowKeys"
                >
                  <el-table-column type="expand">
                    <template slot-scope="scope">
                      <span v-if="false">{{scope.row}}</span>
                      <el-row style="margin-bottom:10px;">
                        <el-col :xs="6" :sm="6" :md="6" :lg="5" :xl="4">
                          <el-input
                            placeholder="请输入工厂编码"
                            style="width:95%;"
                            size="mini"
                            v-model="listQuery1.LGORT"
                            clearable
                          ></el-input>
                        </el-col>
                        <el-col :xs="6" :sm="6" :md="6" :lg="5" :xl="4">
                          <el-input
                            placeholder="请输入物料组编码"
                            style="width:95%;"
                            size="mini"
                            v-model="listQuery1.MATKL"
                            clearable
                          ></el-input>
                        </el-col>
                        <el-col :xs="6" :sm="6" :md="6" :lg="5" :xl="4">
                          <el-input
                            placeholder="请输入物料编码"
                            style="width:95%;"
                            size="mini"
                            v-model="listQuery1.MATNR"
                            clearable
                          ></el-input>
                        </el-col>
                        <el-col :xs="5" :sm="5" :md="5" :lg="4" :xl="3">
                          <el-button
                            type="primary"
                            icon="el-icon-search"
                            @click="getList1"
                            size="mini"
                          >查询</el-button>
                          <!-- <el-button type="primary" icon="el-icon-document" size="mini">导出</el-button> -->
                        </el-col>
                      </el-row>
                      <el-table
                        size="mini"
                        :data="list1"
                        :header-cell-class-name="tableRowClassName"
                        v-loading="listloading"
                        element-loading-text="给我一点时间"
                        border
                        fit
                        highlight-current-row
                        style="width: 100%"
                      >
                        <!-- <el-table-column label="状态" width="70" align="center" prop="ZT">
                    <template slot-scope="scope">
                      <img
                        v-if="scope.row.ZT=='01'"
                        src="../../img/blue.jpg"
                        style="width:20px;height:15px;"
                      />
                      <img
                        v-if="scope.row.ZT=='02'"
                        src="../../img/red.jpg"
                        style="width:20px;height:15px;"
                      />
                      <img
                        v-if="scope.row.ZT=='03'"
                        src="../../img/yellow.jpg"
                        style="width:20px;height:15px;"
                      />
                    </template>
                        </el-table-column>-->
                        <el-table-column
                          label="工厂编号"
                          prop="WERKS"
                          width="100"
                          show-overflow-tooltip
                        ></el-table-column>
                        <el-table-column label="工厂名称" width="250">
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
                        <el-table-column
                          label="物料描述"
                          prop="MAKTX"
                          :show-overflow-tooltip="true"
                          width="300"
                        ></el-table-column>
                        <el-table-column
                          label="计量单位"
                          prop="MEINS"
                          width="100"
                          show-overflow-tooltip
                        ></el-table-column>
                        <el-table-column label="实存数量" prop="GESME" show-overflow-tooltip></el-table-column>
                        <el-table-column label="存货状态">
                          <template slot-scope="scope">
                            <span>{{scope.row.ZSTATUS|fZSTATUS}}</span>
                          </template>
                        </el-table-column>
                        <el-table-column
                          label="库存地点编码"
                          prop="LGORT"
                          :show-overflow-tooltip="true"
                          width="120"
                        ></el-table-column>
                        <el-table-column
                          label="库存地点"
                          :show-overflow-tooltip="true"
                          width="120"
                          prop="LGORT_NAME"
                        ></el-table-column>
                      </el-table>
                      <!-- <div style="padding-top:3px;">
                  <img
                    src="../../img/blue.jpg"
                    style="width:20px;height:15px;vertical-align:middle;margin-top:-2px"
                  />
                  <span>&nbsp;无动态（积压）</span>
                  <img
                    src="../../img/red.jpg"
                    style="width:20px;height:15px;vertical-align:middle;margin-top:-2px"
                  />
                  <span>&nbsp;报废或超期</span>
                  <img
                    src="../../img/yellow.jpg"
                    style="width:20px;height:15px;vertical-align:middle;margin-top:-2px"
                  />
                  <span>&nbsp;有保存期限&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;其他为正常</span>
                      </div>-->
                      <el-pagination
                        background
                        @size-change="handleSizeChange1"
                        @current-change="handleCurrentChange1"
                        :current-page="listQuery1.page"
                        :page-sizes="[10,20,30, 50]"
                        :page-size="listQuery1.limit"
                        layout="total, sizes, prev, pager, next, jumper"
                        :total="total1"
                        style="text-align: center;"
                      ></el-pagination>
                    </template>
                  </el-table-column>
                  <el-table-column label="大类" prop="DL" show-overflow-tooltip></el-table-column>
                  <el-table-column label="项数" prop="SL" show-overflow-tooltip></el-table-column>
                  <el-table-column label="数量" show-overflow-tooltip>
                    <template slot-scope="scope">{{scope.row.GESME|changeNum}}</template>
                  </el-table-column>
                  <el-table-column label="计量单位" prop="MEINS" show-overflow-tooltip></el-table-column>
                </el-table>
                <div class="pagination-container" style="text-align:center;">
                  <el-pagination
                    background
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                    :current-page="1"
                    :page-sizes="[10,20,30,40]"
                    :page-size="10"
                    layout="total, sizes, prev, pager, next, jumper"
                    :total="total"
                  ></el-pagination>
                </div>
              </template>
            </el-table-column>
            <el-table-column label="主要物资" prop="DLNAME" width="250"></el-table-column>
            <el-table-column label="项数" prop="SL"></el-table-column>
            <el-table-column label="数量">
              <template slot-scope="scope">{{scope.row.GESME|changeNum}}</template>
            </el-table-column>
            <el-table-column label="单位" prop="MEINS"></el-table-column>
            <el-table-column label="容仓量"></el-table-column>
            <el-table-column label="容积量"></el-table-column>
          </el-table>
        </div>
      </el-card>
    </el-dialog>
  </div>
</template>

<script>
import {
  GetFloatWindowInfo,
  GetGetFloatWindowDetailInfo,
  GetFloatWindowFirstInfo
} from "@/app_src/api/cangchu/KCZS/ZXK";
export default {
  name: "FlaotingWindow",
  data() {
    return {
      seen: false,
      x: 0,
      y: 0,
      positionStyle: { top: "20px", left: "20px" },
      list: [],
      list1: [],
      list2: [],
      total: 0,
      total1: 0,
      listloading: false,
      QueryPamara: "",
      listQuery: {
        LGPLA: "",
        limit: 10,
        page: 1
      },
      listQuery1: {
        LGPLA: "",
        DLCODE: "",
        LGORT: "",
        MATNR: "",
        MATKL: "",
        page: 1,
        limit: 10
      },
      listQuery2: {
        LGPLA: ""
      },
      expands: [],
      expands1: [], //只展开一行放入当前行id
      getRowKeys(row) {
        //获取当前行id
        // console.log(row)
        return row.DL; //这里看这一行中需要根据哪个属性值是id
      },
      getRowKeys1(row) {
        //获取当前行id
        // console.log(row)
        return 1; //这里看这一行中需要根据哪个属性值是id
      }
    };
  },
  methods: {
    getList() {
      GetFloatWindowInfo(this.listQuery).then(res => {
        if (res.data.code === 2000) {
          this.list = res.data.items;
          this.total = res.data.total;
        }
      });
    },
    getList1() {
      this.listQuery1.LGPLA = this.QueryPamara;
      GetGetFloatWindowDetailInfo(this.listQuery1).then(res => {
        if (res.data.code === 2000) {
          this.list1 = res.data.items;
          this.total1 = res.data.total;
        }
      });
    },
    getList2() {
      GetFloatWindowFirstInfo(this.listQuery2).then(res => {
        if (res.data.code === 2000) {
          this.list2 = res.data.items;
        }
      });
    },
    enter(data) {
      this.QueryPamara = data;
      this.expands = [];
      this.expands1 = [];
      this.list = [];
      this.list1 = [];
      this.list2 = [];
      this.seen = true;
    },
    leave() {
      this.seen = false;
    },
    updateXY: function(event) {
      var delay = delay || 200;
      var timer;
      return function() {
        var th = this;
        var args = arguments;
        if (timer) {
          clearTimeout(timer);
        }
        timer = setTimeout(function() {
          timer = null;
          var e = event || window.event;
        }, delay);
      };
    },
    expandChange(row, expandedRows) {
      let that = this;
      if (expandedRows.length > 0) {
        that.expands = [];
        if (row) {
          that.expands.push(row.DL);
        }
        that.listQuery1.page = 1;
        that.listQuery1.limit = 10;
        that.listQuery1.DLCODE = row.DL;
        that.getList1();
      } else {
        that.expands = [];
      }
    },
    expandChange1(row, expandedRows) {
      let that = this;
      if (expandedRows.length > 0) {
        that.expands1 = [];
        if (row) {
          that.expands1.push(1);
        }
        this.listQuery = {
          LGPLA: this.QueryPamara,
          limit: 10,
          page: 1
        };
        that.getList();
      } else {
        that.expands1 = [];
      }
    },
    debounce(fn, delay) {
      var delay = delay || 200;
      let timer = null;
      return function() {
        let arg = arguments;

        clearTimeout(timer);

        timer = setTimeout(() => {
          fn.apply(this, arg);
        }, delay);
      };
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
      this.listQuery1.limit = val;
      this.getList1();
    },
    handleCurrentChange1(val) {
      this.listQuery1.page = val;
      this.getList1();
    }
  },
  watch: {
    QueryPamara(val) {
      this.listQuery2 = {
        LGPLA: val
      };
      this.getList2();
    }
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
    },
    changeNum(val) {
      if (val === "" || val === null) {
        return 0.0;
      } else {
        return val.toFixed(2);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
// .FlaotingWindow {
//   opacity: 0.9;
//   filter: alpha(opacity=90);
// }
</style>>