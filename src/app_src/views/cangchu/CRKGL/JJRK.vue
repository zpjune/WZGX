<template>
  <div id="JJRK" class="app-container calendar-list-container">
    <el-row style="margin-bottom:10px;">
      <el-col :xs="5" :sm="5" :md="5" :lg="4" :xl="3">
        <el-input placeholder="请输入工厂" style="width:95%;" size="mini" clearable></el-input>
        
      </el-col>
      <el-col :xs="5" :sm="5" :md="5" :lg="4" :xl="3">
          <el-date-picker type="datetime" placeholder="选择日期时间段" size="mini" style="width:90%" ></el-date-picker>
      </el-col>
      <el-col :xs="5" :sm="5" :md="5" :lg="4" :xl="3">
        <el-button type="primary" icon="el-icon-search" size="mini">查询</el-button>
      </el-col>
    </el-row>
    <el-row>
      <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
        <el-table
          size="mini"
          :data="goods"
          :header-cell-class-name="tableRowClassName"
          v-loading="listloading"
          element-loading-text="给我一点时间"
          border
          fit
          highlight-current-row
          style="width: 100%"
        >
          <el-table-column label="入库通知单号" prop="ZDHTZD" fixed width="150px"></el-table-column>
          <el-table-column label="入库通知单行号" prop="ZITEM" width="150px"></el-table-column>
          <el-table-column label="出库通知单号" prop="ZCKTZD" width="150px"></el-table-column>
          <el-table-column label="出库通知单行号" prop="ZCITEM" width="150px"></el-table-column>
          <el-table-column label="工厂" prop="WERKS"></el-table-column>
          <el-table-column label="物料编码" prop="MATNR" width="150px"></el-table-column>
          <el-table-column label="物料组" prop="MATKL"></el-table-column>
          <el-table-column label="采购凭证号" prop="EBELN" width="150px"></el-table-column>
          <el-table-column label="采购凭证项目编号" prop="EBELP" width="150px"></el-table-column>
          <el-table-column label="计划单号" prop="ZSEQU" width="150px"></el-table-column>
          <el-table-column label="预留编号" prop="RSNUM" width="150px"></el-table-column>
          <el-table-column label="预留行项目编号" prop="RSPOS" width="150px"></el-table-column>
          <el-table-column label="领料单号" prop="ZPLDH" width="150px"></el-table-column>
          <el-table-column label="供应商编码" prop="LIFNR" width="150px"></el-table-column>
          <el-table-column label="采购订单数量" prop="MENGE" width="120px"></el-table-column>
          <el-table-column label="库存地点" prop="LGORT" width="150px"></el-table-column>
          <el-table-column label="记录创建日期" prop="ZCJRQ" width="150px"></el-table-column>
          <el-table-column label="创建人" prop="ZCJR" width="150px"></el-table-column>
          <el-table-column label="状态" prop="ZSTATUS"></el-table-column>
        </el-table>
        <el-pagination
          background
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="1"
          :page-sizes="[10,20,30, 50]"
          :page-size="1"
          layout="total, sizes, prev, pager, next, jumper"
          :total="1"
          style="text-align: center;"
        ></el-pagination>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "JJRK",
  data() {
    return {
      listloading: false,
      goods: [
        {
            ZDHTZD:"QQSSAD21576832",
            ZITEM:"DASDWDBUJA12768",
            ZCKTZD:"ADUYFSJ27632",
            ZCITEM:"uydabkgda8576320",
            WERKS:"天津创智",
            MATNR:"dsahgjasbk876842",
            MATKL:"一组",
            EBELN:"diysauyf21768432",
            EBELP:"DYIUFJKD9876343",
            ZSEQU:"dasiuifs879432",
            RSNUM:"daiydisau4687",
            RSPOS:"duyiajk32",
            ZPLDH:"daskhu79841",
            ZLDITEM:"dkjhsad9803",
            LIFNR:"hdjah7632185",
            MENGE:"iughdasi7529",
            LGORT:"天津",
            ZCJRQ:"2019-05-23",
            ZCJR:"admin",
            ZSTATUS:"正常"
        },
         {
            ZDHTZD:"QASDGSAD21576832",
            ZITEM:"DASDWDBUJA12768",
            ZCKTZD:"ADUYFSJ27632",
            ZCITEM:"uydabkgda8576320",
            WERKS:"天津创智",
            MATNR:"dsahgjasbk876842",
            MATKL:"一组",
            EBELN:"diysauyf21768432",
            EBELP:"DYIUFJKD9876343",
            ZSEQU:"dasiuifs879432",
            RSNUM:"daiydisau4687",
            RSPOS:"duyiajk32",
            ZPLDH:"daskhu79841",
            ZLDITEM:"dkjhsad9803",
            LIFNR:"hdjah7632185",
            MENGE:"iughdasi7529",
            LGORT:"天津",
            ZCJRQ:"2019-05-23",
            ZCJR:"admin",
            ZSTATUS:"正常"
        },
         {
            ZDHTZD:"QQSSAD21576832",
            ZITEM:"DASDWDBUJA12768",
            ZCKTZD:"ADUYFSJ27632",
            ZCITEM:"uydabkgda8576320",
            WERKS:"天津创智",
            MATNR:"dsahgjasbk876842",
            MATKL:"一组",
            EBELN:"diysauyf21768432",
            EBELP:"DYIUFJKD9876343",
            ZSEQU:"dasiuifs879432",
            RSNUM:"daiydisau4687",
            RSPOS:"duyiajk32",
            ZPLDH:"daskhu79841",
            ZLDITEM:"dkjhsad9803",
            LIFNR:"hdjah7632185",
            MENGE:"iughdasi7529",
            LGORT:"天津",
            ZCJRQ:"2019-05-23",
            ZCJR:"admin",
            ZSTATUS:"正常"
        },
         {
            ZDHTZD:"QQAD21576832",
            ZITEM:"DASDWD2768",
            ZCKTZD:"ADUYFSJ27632",
            ZCITEM:"uydda8576320",
            WERKS:"天津创智",
            MATNR:"dsahgjasbk876842",
            MATKL:"一组",
            EBELN:"diysauyf21768432",
            EBELP:"DYIUFJKD9876343",
            ZSEQU:"dasiuifs879432",
            RSNUM:"daiydisau4687",
            RSPOS:"duyiajk32",
            ZPLDH:"daskhu79841",
            ZLDITEM:"dkjhsad9803",
            LIFNR:"hdjah7632185",
            MENGE:"iughdasi7529",
            LGORT:"天津",
            ZCJRQ:"2019-05-23",
            ZCJR:"admin",
            ZSTATUS:"正常"
        },
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


