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
        @row-dblclick="rowDoubleClick"
      >
        <el-table-column min-width="100px" align="center" label="库存地点" fixed="left">
          <template slot-scope="scope">
            <span>{{scope.row.kcdd}}</span>
          </template>
        </el-table-column>
        <el-table-column min-width="100px" align="center" label="入库金额" fixed="left">
          <template slot-scope="scope">
            <span>{{scope.row.rkje}}</span>
          </template>
        </el-table-column>
        <el-table-column min-width="100px" align="center" label="入库量" fixed="left">
          <template slot-scope="scope">
            <span >{{scope.row.rkl}}</span>
          </template>
        </el-table-column>
        <el-table-column min-width="100px" align="center" label="出库金额" fixed="left">
          <template slot-scope="scope">
            <span>{{scope.row.ckje}}</span>
          </template>
        </el-table-column>
        <el-table-column min-width="100px" align="center" label="出库量" fixed="left">
          <template slot-scope="scope">
            <span >{{scope.row.ckl}}</span>
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
export default {
  name: "TotalCRKdetail",
  data() {
    return {
      crkdialog: false,
      CRKTitle:'出入库明细',
      tableKey: 0,
      total: 5,
      list: [
       
      ],
      listQuery: {
        page: 1,
        limit: 10
      },
      listLoading: false,
      year:"",
      month:""
    };
  },
  props: ["CRKdetaildialogVisible","RCKDetailTitle","pmonth","pyear"],
  methods: {
    CloseDialog() {
      this.$emit("listenToChildEvent", false);
    },
    handleEdit(index, row) {
      console.log(index, row);
    },
    rowDoubleClick(row, column, event) {
    },
    handleUpdate(row) {
      row.isSet = false;
    },
    handleSizeChange(val) {},
    handleCurrentChange(val) {},
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
      this.year=val;
    }
  }
};
</script>
<style  lang="scss" scoped>
</style>