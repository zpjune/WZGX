<template>
  <div id="TotalZDWZ" class="app-container calendar-list-container">
    <el-row style="margin-bottom:10px;">
      <el-col :xs="5" :sm="5" :md="5" :lg="4" :xl="3">
        <el-input placeholder="请输入物料编码" style="width:95%;" size="mini" clearable></el-input>
      </el-col>
      <el-col :xs="5" :sm="5" :md="5" :lg="4" :xl="3">
        <el-input placeholder="请输入物料名称" style="width:95%;" size="mini" clearable></el-input>
      </el-col>
      <el-col :xs="5" :sm="5" :md="5" :lg="4" :xl="3">
        <el-button type="primary" icon="el-icon-search" size="mini">查询</el-button>
        <el-button type="primary" icon="el-icon-document" size="mini">导出</el-button>
      </el-col>
    </el-row>
    <el-row>
      <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
        <!-- <el-table
          size="mini"
          :data="fac"
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
                v-if="scope.row.ZT==0"
                src="../../../img/blue.jpg"
                style="width:20px;height:15px;"
              >
              <img
                v-if="scope.row.ZT==1"
                src="../../../img/red.jpg"
                style="width:20px;height:15px;"
              >
              <img
                v-if="scope.row.ZT==2"
                src="../../../img/yellow.jpg"
                style="width:20px;height:15px;"
              >
            </template>
          </el-table-column>
          <el-table-column label="工厂编号" prop="GCBH"></el-table-column>
          <el-table-column label="物料组" prop="WLZ"></el-table-column>
          <el-table-column label="物料编码" prop="WLBM"></el-table-column>
          <el-table-column label="物料描述" prop="WLMS"></el-table-column>
          <el-table-column label="计量单位" prop="JLDW"></el-table-column>
          <el-table-column label="实存数量" prop="SCSL"></el-table-column>
          <el-table-column label="副计量单位" prop="FJLDW"></el-table-column>
          <el-table-column label="副计量数量" prop="FJLSL"></el-table-column>
          <el-table-column label="存货状态" prop="CHZT"></el-table-column>
          <el-table-column label="库存地点" prop="KCDD"></el-table-column>
        </el-table>
        <div style="padding-top:3px;">
        <img src="../../../img/blue.jpg" style="width:20px;height:15px;vertical-align:middle;margin-top:-2px"><span>&nbsp;无动态（积压）</span>
        <img src="../../../img/red.jpg" style="width:20px;height:15px;vertical-align:middle;margin-top:-2px"><span>&nbsp;报废或超期</span>
        <img src="../../../img/yellow.jpg" style="width:20px;height:15px;vertical-align:middle;margin-top:-2px"><span>&nbsp;有保存期限&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;其他为正常</span>
        </div>-->
        <el-table
          size="mini"
          :data="fac"
          :header-cell-class-name="tableRowClassName"
          v-loading="listloading"
          element-loading-text="给我一点时间"
          border
          fit
          highlight-current-row
          style="width: 100%"
        >
          <el-table-column label="序号">
            <template slot-scope="scope">{{scope.$index+1}}</template>
          </el-table-column>
          <el-table-column label="入库单号" prop="DH"></el-table-column>
          <el-table-column label="物料组" prop="WLZ"></el-table-column>
          <el-table-column label="物料编码" prop="WLBM"></el-table-column>
          <el-table-column label="物料描述" prop="WLMS"></el-table-column>
          <el-table-column label="计量单位" prop="JLDW"></el-table-column>
          <el-table-column label="待入库数量" prop="SL"></el-table-column>
          <el-table-column label="库存数量" prop="SL"></el-table-column>
          <el-table-column label="工厂" prop="GC"></el-table-column>
          <el-table-column label="创建人" prop="CJR"></el-table-column>
          <el-table-column label="使用单位" prop="DW"></el-table-column>
          <el-table-column label="备注" prop="BZ"></el-table-column>
        </el-table>
        <el-pagination
          background
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="1"
          :page-sizes="[10,20,30, 50]"
          :page-size="20"
          layout="total, sizes, prev, pager, next, jumper"
          :total="7"
          style="text-align: center;"
        ></el-pagination>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "TotalZDWZ",
  data() {
    return {
      listloading: false,
      fac: [
        {
          DH: "201906019001",
          WLZ: "07030302",
          WLBM: "10000513978",
          WLMS: "建筑材料",
          JLDW: "T",
          SL: 500,
          DD: "中心库北侧",
          GC: "1号工厂",
          CJR: "管理员",
          DW: "供货一公司",
          BZ: ""
        },
        {
          DH: "201906019002",
          WLZ: "07030302",
          WLBM: "11000922113",
          WLMS: "建筑材料",
          JLDW: "T",
          SL: 200,
          DD: "中心库北侧",
          GC: "1号工厂",
          CJR: "管理员",
          DW: "供货一公司",
          BZ: ""
        },
        {
          DH: "201906019006",
          WLZ: "07030302",
          WLBM: "11000922112",
          WLMS: "建筑材料",
          JLDW: "T",
          SL: 276.5,
          DD: "中心库北侧",
          GC: "2号工厂",
          CJR: "管理员",
          DW: "供货一公司",
          BZ: ""
        },
        {
          DH: "201906019009",
          WLZ: "02040101",
          WLBM: "20002020707",
          WLMS: "建筑材料",
          JLDW: "T",
          SL: 1200,
          DD: "中心库北侧",
          GC: "3号工厂",
          CJR: "管理员",
          DW: "供货一公司",
          BZ: ""
        },
        {
          DH: "201906019089",
          WLZ: "07030302",
          WLBM: "11004684489",
          WLMS: "建筑材料",
          JLDW: "T",
          SL: 2100,
          DD: "中心库北侧",
          GC: "1号工厂",
          CJR: "管理员",
          DW: "供货一公司",
          BZ: ""
        },
        {
          DH: "201906019471",
          WLZ: "10010203",
          WLBM: "11003171287",
          WLMS: "建筑材料",
          JLDW: "T",
          SL: 500,
          DD: "中心库北侧",
          GC: "1号工厂",
          CJR: "管理员",
          DW: "供货一公司",
          BZ: ""
        },
        {
          DH: "2019060190098",
          WLZ: "10010203",
          WLBM: "20002020707",
          WLMS: "建筑材料",
          JLDW: "T",
          SL: 166,
          DD: "中心库北侧",
          GC: "1号工厂",
          CJR: "管理员",
          DW: "供货一公司",
          BZ: ""
        }
      ]
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
    handleSizeChange() {},
    handleCurrentChange() {}
  }
};
</script>



<style lang="scss" scoped>
</style>


