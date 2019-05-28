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
          <el-table-column label="工厂" prop="WERKS"></el-table-column>
          <el-table-column label="订单类型" prop="BSART"></el-table-column>
          <el-table-column label="采购凭证号" prop="EBELN" width="150px"></el-table-column>
          <el-table-column label="采购凭证项目编号" prop="EBELP" width="150px"></el-table-column>
          <el-table-column label="计划单号" prop="ZSEQU" width="150px"></el-table-column>
          <el-table-column label="采购申请编号" prop="BANFN" width="150px"></el-table-column>
          <el-table-column label="采购凭证的项目编号" prop="ZSEQU" width="150px"></el-table-column>
          <el-table-column label="供应商或债权人的帐号" prop="LIFNR" width="170px"></el-table-column>
          <el-table-column label="物料编号" prop="MATNR" width="170px"></el-table-column>
          <el-table-column label="物料组" prop="MATKL" width="170px"></el-table-column>
          <el-table-column label="采购订单数量" prop="MENGE" width="170px"></el-table-column>
          <el-table-column label="收货数量" prop="ZDHSL" width="170px"></el-table-column>
          <el-table-column label="实际到货数量" prop="ZSJDHSL" width="170px"></el-table-column>
          <el-table-column label="基本计量单位" prop="MEINS" width="170px"></el-table-column>
          <el-table-column label="副计量数量" prop="ZDHSL1" width="170px"></el-table-column>
          <el-table-column label="副计量单位 " prop="ZMEINS" width="170px"></el-table-column>
          <el-table-column label="退货项目" prop="RETPO" width="170px"></el-table-column>
          <el-table-column label="库存地点" prop="LGORT" width="150px"></el-table-column>
          <el-table-column label="代储代销标识" prop="ZDCDX" width="150px"></el-table-column>
          <el-table-column label="特殊库存标识" prop="SOBKZ" width="150px"></el-table-column>
          <el-table-column label="WBS 要素" prop="PSPEL" width="150px"></el-table-column>
          <el-table-column label="移动类型（库存管理）" prop="BWART" width="150px"></el-table-column>
          <el-table-column label="库存地点" prop="GRUND" width="150px"></el-table-column>
          <el-table-column label="记录创建日期" prop="ZCJRQ" width="150px"></el-table-column>
          <el-table-column label="创建人" prop="ZCJR" width="150px"></el-table-column>
          <el-table-column label="状态" prop="ZSTATUS"></el-table-column>
          <el-table-column label="输入时间" prop="CJSJ" width="150px"></el-table-column>
          <el-table-column label="仓库号/混合仓库" prop="ZCDH" width="150px"></el-table-column>
          <el-table-column label="物料凭证编号" prop="MBLNR" width="150px"></el-table-column>
          <el-table-column label="物料凭证中的项目" prop="ZEILE" width="150px"></el-table-column>
          <el-table-column label="凭证中的过账日期" prop="BUDAT" width="150px"></el-table-column>
          <el-table-column label="数量" prop="ZDGZSL" width="150px"></el-table-column>
          <el-table-column label="必检物资" prop="ZBJWZ" width="150px"></el-table-column>
          <el-table-column label="创建类型" prop="ZCJLX" width="150px"></el-table-column>
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
          ZDHTZD:'1-20170118-00011',
          ZITEM:'1',
          WERKS:'C27D',
          BSART:'X001 ',
          EBELN:'4502877730',
          EBELP:'10',
          ZSEQU:'0',
          BANFN:'',
          BNFPO:'0',
          LIFNR:'1000545015',
          MATNR:'10001506386',
          MATKL:'17021117',
          MENGE:'120',
          ZDHSL:'60',
          ZSJDHSL:'0',
          MEINS:'T0',
          ZDHSL1:'0',
          ZMEINS:'',
          RETPO:'',
          LGORT:'C2W1',
          ZDCDX:'',
          SOBKZ:'',
          PSPEL:'0',
          BWART:'',
          GRUND:'',
          ZCJR:'80364638',
          ZCJRQ:'20170118',
          CJSJ:'110303'
        },
         {
          ZDHTZD:'1-20170118-00012',
          ZITEM:'1',
          WERKS:'C27D',
          BSART:'X001 ',
          EBELN:'4502877731',
          EBELP:'10',
          ZSEQU:'0',
          BANFN:'',
          BNFPO:'0',
          LIFNR:'1000545015',
          MATNR:'10001506387',
          MATKL:'17021118',
          MENGE:'120',
          ZDHSL:'60',
          ZSJDHSL:'0',
          MEINS:'T0',
          ZDHSL1:'0',
          ZMEINS:'',
          RETPO:'',
          LGORT:'C2W1',
          ZDCDX:'',
          SOBKZ:'',
          PSPEL:'0',
          BWART:'',
          GRUND:'',
          ZCJR:'80364639',
          ZCJRQ:'20170119',
          CJSJ:'110304'
        },
         {
          ZDHTZD:'1-20170118-00013',
          ZITEM:'1',
          WERKS:'C27D',
          BSART:'X001 ',
          EBELN:'4502877733',
          EBELP:'10',
          ZSEQU:'0',
          BANFN:'',
          BNFPO:'0',
          LIFNR:'1000545018',
          MATNR:'10001506389',
          MATKL:'17021119',
          MENGE:'120',
          ZDHSL:'60',
          ZSJDHSL:'0',
          MEINS:'T0',
          ZDHSL1:'0',
          ZMEINS:'',
          RETPO:'',
          LGORT:'C2W1',
          ZDCDX:'',
          SOBKZ:'',
          PSPEL:'0',
          BWART:'',
          GRUND:'',
          ZCJR:'80364639',
          ZCJRQ:'20170182',
          CJSJ:'110303'
        },
         {
          ZDHTZD:'1-20170118-00022',
          ZITEM:'1',
          WERKS:'C27D',
          BSART:'X001 ',
          EBELN:'4502877730',
          EBELP:'10',
          ZSEQU:'0',
          BANFN:'',
          BNFPO:'0',
          LIFNR:'1000545067',
          MATNR:'100015063689',
          MATKL:'17021149',
          MENGE:'120',
          ZDHSL:'60',
          ZSJDHSL:'0',
          MEINS:'T0',
          ZDHSL1:'0',
          ZMEINS:'',
          RETPO:'',
          LGORT:'C2W1',
          ZDCDX:'',
          SOBKZ:'',
          PSPEL:'0',
          BWART:'',
          GRUND:'',
          ZCJR:'80364638',
          ZCJRQ:'20170118',
          CJSJ:'110303'
        },
         {
          ZDHTZD:'1-20170118-00069',
          ZITEM:'1',
          WERKS:'C27D',
          BSART:'X001 ',
          EBELN:'4502877778',
          EBELP:'10',
          ZSEQU:'0',
          BANFN:'',
          BNFPO:'0',
          LIFNR:'1000545090',
          MATNR:'10001506357',
          MATKL:'17021117',
          MENGE:'120',
          ZDHSL:'60',
          ZSJDHSL:'0',
          MEINS:'T0',
          ZDHSL1:'0',
          ZMEINS:'',
          RETPO:'',
          LGORT:'C2W1',
          ZDCDX:'',
          SOBKZ:'',
          PSPEL:'0',
          BWART:'',
          GRUND:'',
          ZCJR:'80364687',
          ZCJRQ:'20170195',
          CJSJ:'110303'
        },
         {
          ZDHTZD:'1-20170118-00057',
          ZITEM:'1',
          WERKS:'C27D',
          BSART:'X001 ',
          EBELN:'4502877730',
          EBELP:'10',
          ZSEQU:'0',
          BANFN:'',
          BNFPO:'0',
          LIFNR:'10005450657',
          MATNR:'10001506398',
          MATKL:'17021117',
          MENGE:'120',
          ZDHSL:'60',
          ZSJDHSL:'0',
          MEINS:'T0',
          ZDHSL1:'0',
          ZMEINS:'',
          RETPO:'',
          LGORT:'C2W1',
          ZDCDX:'',
          SOBKZ:'',
          PSPEL:'0',
          BWART:'',
          GRUND:'',
          ZCJR:'803646846',
          ZCJRQ:'20170157',
          CJSJ:'110303'
        },
         {
          ZDHTZD:'1-20170118-0068',
          ZITEM:'1',
          WERKS:'C27D',
          BSART:'X001 ',
          EBELN:'45028777587',
          EBELP:'10',
          ZSEQU:'0',
          BANFN:'',
          BNFPO:'0',
          LIFNR:'1000545025',
          MATNR:'10001506667',
          MATKL:'17021117',
          MENGE:'120',
          ZDHSL:'60',
          ZSJDHSL:'0',
          MEINS:'T0',
          ZDHSL1:'0',
          ZMEINS:'',
          RETPO:'',
          LGORT:'C2W1',
          ZDCDX:'',
          SOBKZ:'',
          PSPEL:'0',
          BWART:'',
          GRUND:'',
          ZCJR:'80364638',
          ZCJRQ:'20170118',
          CJSJ:'110303'
        }, {
          ZDHTZD:'1-20170118-00589',
          ZITEM:'1',
          WERKS:'C27D',
          BSART:'X001 ',
          EBELN:'4502877730',
          EBELP:'10',
          ZSEQU:'0',
          BANFN:'',
          BNFPO:'0',
          LIFNR:'1000545015',
          MATNR:'10001506386',
          MATKL:'17021117',
          MENGE:'120',
          ZDHSL:'60',
          ZSJDHSL:'0',
          MEINS:'T0',
          ZDHSL1:'0',
          ZMEINS:'',
          RETPO:'',
          LGORT:'C2W1',
          ZDCDX:'',
          SOBKZ:'',
          PSPEL:'0',
          BWART:'',
          GRUND:'',
          ZCJR:'80364638',
          ZCJRQ:'20170118',
          CJSJ:'110303'
        },
         {
          ZDHTZD:'1-20170118-000658',
          ZITEM:'1',
          WERKS:'C27D',
          BSART:'X001 ',
          EBELN:'4502877730',
          EBELP:'10',
          ZSEQU:'0',
          BANFN:'',
          BNFPO:'0',
          LIFNR:'1000545015',
          MATNR:'10001506386',
          MATKL:'17021117',
          MENGE:'120',
          ZDHSL:'60',
          ZSJDHSL:'0',
          MEINS:'T0',
          ZDHSL1:'0',
          ZMEINS:'',
          RETPO:'',
          LGORT:'C2W1',
          ZDCDX:'',
          SOBKZ:'',
          PSPEL:'0',
          BWART:'',
          GRUND:'',
          ZCJR:'80364638',
          ZCJRQ:'20170118',
          CJSJ:'110303'
        },
         {
          ZDHTZD:'1-20170118-05898',
          ZITEM:'1',
          WERKS:'C27D',
          BSART:'X001 ',
          EBELN:'4502877730',
          EBELP:'10',
          ZSEQU:'0',
          BANFN:'',
          BNFPO:'0',
          LIFNR:'1000545015',
          MATNR:'10001506386',
          MATKL:'17021117',
          MENGE:'120',
          ZDHSL:'60',
          ZSJDHSL:'0',
          MEINS:'T0',
          ZDHSL1:'0',
          ZMEINS:'',
          RETPO:'',
          LGORT:'C2W1',
          ZDCDX:'',
          SOBKZ:'',
          PSPEL:'0',
          BWART:'',
          GRUND:'',
          ZCJR:'80364638',
          ZCJRQ:'20170118',
          CJSJ:'110303'
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


