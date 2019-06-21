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
        {
          isSet: false,
          kcdd: "中心库",
          rkje: "1.5亿",
          rkl: "100",
          ckje: "0.5亿",
          ckl: 1000
        },
        {
          isSet: false,
          kcdd: "转运库",
          rkje: "0.1亿",
          rkl: "150",
          ckje: "0.2亿",
          ckl: 1000
        },
        {
          isSet: false,
          kcdd: "港东器材库",
          rkje: "1.5亿",
          rkl: "122.5",
          ckje: "0.5亿",
          ckl: 1000
        },
        {
          isSet: false,
          kcdd: "专用管分公司",
          rkje: "0.3亿",
          rkl: "37",
          ckje: "0.2亿",
          ckl: 1000
        },
        {
          isSet: false,
          kcdd: "厂现直供库",
          rkje: "0.3亿",
          rkl: "26",
          ckje: "0.8亿",
          ckl: 1000
        }
        ,
        {
          isSet: false,
          kcdd: "直达料",
          rkje: "0.3亿",
          rkl: "26",
          ckje: "0.8亿",
          ckl: 1000
        }
      ],
      listQuery: {
        page: 1,
        limit: 10
      },
      listLoading: false
    };
  },
  props: ["CRKdetaildialogVisible","RCKDetailTitle"],
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
      console.log("d-----");
      console.log(val);
      this.crkdialog = val; //新增result的watch，监听变更并同步到myResult上
      // var aa=document.querySelectorAll('.el-dialog__header');
      // aa[0].style.background="#C0C0C0";
    },
    RCKDetailTitle(val){
      this.CRKTitle=val;
    }
  }
};
</script>
<style  lang="scss" scoped>
</style>