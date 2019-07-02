<template>
  <div class="app-container calendar-list-container ">
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
                v-if="scope.row.ZT==0"
                src="../../img/blue.jpg"
                style="width:20px;height:15px;"
              >
              <img
                v-if="scope.row.ZT==1"
                src="../../img/red.jpg"
                style="width:20px;height:15px;"
              >
              <img
                v-if="scope.row.ZT==2"
                src="../../img/yellow.jpg"
                style="width:20px;height:15px;"
              >
            </template>
          </el-table-column>
          <el-table-column label="工厂编号" prop="GCBH"></el-table-column>
          <el-table-column label="物料组" prop="WLZ"></el-table-column>
          <el-table-column label="物料编码" prop="WLBM"></el-table-column>
          <el-table-column label="物料描述" prop="WLMS" width="300"></el-table-column>
          <el-table-column label="计量单位" prop="JLDW" width="80"></el-table-column>
          <el-table-column label="实存数量" prop="SCSL"></el-table-column>
          <el-table-column label="存货状态" prop="CHZT"></el-table-column>
        </el-table>
        <div style="padding-top:3px;">
        <img src="../../img/blue.jpg" style="width:20px;height:15px;vertical-align:middle;margin-top:-2px"><span>&nbsp;无动态（积压）</span>
        <img src="../../img/red.jpg" style="width:20px;height:15px;vertical-align:middle;margin-top:-2px"><span>&nbsp;报废或超期</span>
        <img src="../../img/yellow.jpg" style="width:20px;height:15px;vertical-align:middle;margin-top:-2px"><span>&nbsp;有保存期限&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;其他为正常</span>
        </div>
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
  name: "kucunzhanshidetail",
  data() {
    return {
      kcmxdialog: false,
      tableKey: 0,
      total: 5,
      list: [
        {
          ZT: 0,
          GCBH: "C27D",
          WLZ: "36010101",
          WLBM: "10003153483",
          WLMS: "台式机 戴尔 7050MT Intel i7 7700 3.6G",
          JLDW: "吨",
          SCSL: 20,
          CHZT: "已上架",
          KCDD: "中心库"
        },
        {
          ZT: 3,
          GCBH: "C27C",
          WLZ: "36010101",
          WLBM: "10003153483",
          WLMS: "台式机 戴尔 Optiplex 7050MT (i7-7700 3.6GHz*⑴",
          JLDW: "吨",
          SCSL: 10,
          CHZT: "已上架",
          KCDD: "转运库"
        },
        {
          ZT: 1,
          GCBH: "C274",
          WLZ: "17021117",
          WLBM: "10001506386",
          WLMS: "氯化钾",
          JLDW: "吨",
          SCSL: 50,
          CHZT: "已上架",
          KCDD: "中心库"
        },
        {
          ZT: 3,
          GCBH: "C27D",
          WLZ: "12020611",
          WLBM: "11002298694",
          WLMS: "水解聚丙烯腈铵盐",
          JLDW: "吨",
          SCSL: 30,
          CHZT: "已上架",
          KCDD: "港东器材库"
        },
        {
          ZT: 2,
          GCBH: "C27C",
          WLZ: "12020612",
          WLBM: "C271",
          WLMS: "高压水井阀门",
          JLDW: "吨",
          SCSL: 20,
          CHZT: "已上架",
          KCDD: "中心库"
        },
        {
          ZT: 0,
          GCBH: "C274",
          WLZ: "12020612",
          WLBM: "11001999718",
          WLMS: "钻井液用树脂",
          JLDW: "吨",
          SCSL: 20,
          CHZT: "已上架",
          KCDD: "中心库"
        },
        {
          ZT: 3,
          GCBH: "C274",
          WLZ: "17020202",
          WLBM: "11000857869",
          WLMS: "烧碱",
          JLDW: "吨",
          SCSL: 20,
          CHZT: "已上架",
          KCDD: "中心库"
        }
      ],
      listQuery: {
        page: 1,
        limit: 10
      },
      listLoading: false
    };
  },
  props: ["kcmxdialogVisible"],
  methods: {
    CloseDialog() {
      this.$emit("listenToChildEvent", false);
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
    kcmxdialogVisible(val) {
      this.kcmxdialog = val; //新增result的watch，监听变更并同步到myResult上
     // var aa=document.querySelectorAll('.el-dialog__header');
      // aa[0].style.background="#C0C0C0";
    }
  }
 
};
</script>
<style  lang="scss" scoped>
   
</style>