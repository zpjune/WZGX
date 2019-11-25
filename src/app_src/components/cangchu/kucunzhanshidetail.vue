<template>
  <div class="app-container calendar-list-container">
    <el-dialog
      title="库存明细"
      :visible.sync="kcmxdialog"
      @close="CloseDialog"
      :modal="false"
      :modal-append-to-body="false"
      style="margin-top:10vh;margin-left:100px;"
      width="60%"
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
        <el-table-column label="状态" width="70" align="center" prop="ZT">
          <template slot-scope="scope">
            <img
              v-if="scope.row.ZSTATUS==0"
              src="../../img/blue.jpg"
              style="width:20px;height:15px;"
            />
            <img
              v-if="scope.row.ZSTATUS=='04'"
              src="../../img/red.jpg"
              style="width:20px;height:15px;"
              title="积压"
            />
            <img
              v-if="scope.row.ZSTATUS==2"
              src="../../img/yellow.jpg"
              style="width:20px;height:15px;"
            />
          </template>
        </el-table-column>
        <el-table-column label="工厂编号" prop="WERKS" width="80"></el-table-column>
        <el-table-column label="物料组" prop="MATKL" width="100"></el-table-column>
        <el-table-column label="物料编码" prop="MATNR"></el-table-column>
        <el-table-column label="物料描述" prop="MAKTX" width="300"></el-table-column>
        <el-table-column label="计量单位" prop="MEINS" width="80"></el-table-column>
        <el-table-column label="实存数量" prop="GESME" width="80"></el-table-column>
        <el-table-column label="存货状态" prop="ZSTATUS" width="80"></el-table-column>
      </el-table>
      <div style="padding-top:3px;">
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
      </div>
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
    </el-dialog>
  </div>
</template>

<script>
import { GetStatusDetail } from "@/app_src/api/cangchu/KCZS/ZXK";
export default {
  name: "kucunzhanshidetail",
  props: ["kcmxdialogVisible"],
  data() {
    return {
      kcmxdialog: false,
      tableKey: 0,
      total: 0,
      list: [],
      listQuery: {
        page: 1,
        limit: 10,
        LGPLA: ""
      },
      listLoading: true
    };
  },
  methods: {
    CloseDialog() {
      this.$emit("listenToChildEvent", false);
    },
    tableRowClassName({ row, rowIndex }) {
      // 表头行的 className 的回调方法，也可以使用字符串为所有表头行设置一个固定的 className。
      if (rowIndex === 0) {
        return "el-button--primary is-active"; // 'warning-row'
      } // 'el-button--primary is-plain'// 'warning-row'
      return "";
    },
    getValue(val) {
      this.listQuery.LGPLA = val;
    },
    getList() {
      this.listLoading = true;
      GetStatusDetail(this.listQuery).then(response => {
        if (response.data.code === 2000) {
          this.list = response.data.items;
          this.total = response.data.total;
          this.listLoading = false;
        } else {
          this.listLoading = false;
          this.$notify({
            position: "bottom-right",
            title: "失败",
            message: response.data.message,
            type: "error",
            duration: 2000
          });
        }
      });
    },
    handleSizeChange(val) {
      this.listQuery.limit = val;
      console.log(val);
      this.getList();
    },
    handleCurrentChange(val) {
      this.listQuery.page = val;
      this.getList();
    }
  },
  watch: {
    kcmxdialogVisible(val) {
      this.kcmxdialog = val; //新增result的watch，监听变更并同步到myResult上
      // var aa=document.querySelectorAll('.el-dialog__header');
      // aa[0].style.background="#C0C0C0";
    }
  },
  mounted() {
    //this.getList();
  }
};
</script>
<style  lang="scss" scoped>
</style>