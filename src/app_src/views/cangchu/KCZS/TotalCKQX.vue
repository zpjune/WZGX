<template>
  <div id="TotalCKQX" class="app-container calendar-list-container">
    <el-row style="margin-bottom:10px;">
      <el-col :xs="5" :sm="5" :md="5" :lg="4" :xl="3">
        <el-input placeholder="请输入库存地点编码" style="width:95%;" size="mini" clearable></el-input>
      </el-col>
      <el-col :xs="5" :sm="5" :md="5" :lg="4" :xl="3">
        <el-input placeholder="请输入库存地点" style="width:95%;" size="mini" clearable></el-input>
      </el-col>
      <el-col :xs="5" :sm="5" :md="5" :lg="4" :xl="3">
        <el-input placeholder="请输入物料编码" style="width:95%;" size="mini" clearable></el-input>
      </el-col>
      <el-col :xs="5" :sm="5" :md="5" :lg="4" :xl="3">
        <el-input placeholder="请输入物料名称" style="width:95%;" size="mini" clearable></el-input>
      </el-col>
      <el-col :xs="5" :sm="5" :md="5" :lg="4" :xl="3">
        <el-button type="primary" icon="el-icon-search" size="mini" @click="createData">查询</el-button>
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
          show-summary
        >
          <el-table-column label="类号">
            <template slot-scope="scope">{{scope.$index+1}}</template>
          </el-table-column>
          <el-table-column label="大类名称" prop="name"></el-table-column>
          <el-table-column label="出库合计" prop="HJ"></el-table-column>
          <el-table-column label="油田公司未上市企业" width="140PX" prop="WSH"></el-table-column>
          <el-table-column label="油田公司上市企业" prop="SH"></el-table-column>
          <el-table-column label="渤海钻探" prop="BHZT"></el-table-column>
          <el-table-column label="渤海装备" prop="BHZB"></el-table-column>
          <el-table-column label="福山油田" prop="FSYT"></el-table-column>
          <el-table-column label="煤层气" prop="MCQ"></el-table-column>
          <el-table-column label="冀东油田" prop="JDYT"></el-table-column>
          <el-table-column label="其他中石油企业" prop="QT"></el-table-column>
          <el-table-column label="大港石化" prop="DGSH"></el-table-column>
          <el-table-column label="社会外销" prop="SHWX"></el-table-column>
        </el-table>
        <el-pagination
          background
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="1"
          :page-sizes="[10,20,30, 50]"
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
  name: "TotalCKQX",
  data() {
    return {
      listloading: false,
      fac: [
        {
          ZT: 0,
          GCBH: "11002298694",
          WLZ: "12020611",
          WLBM: "C271",
          WLMS: "",
          JLDW: "吨",
          SCSL: 20,
          FJLDW: "根",
          FJLSL: 2000,
          CHZT: "已上架",
          KCDD: "中心库"
        },
        {
          ZT: 3,
          GCBH: "12002298691",
          WLZ: "12365478",
          WLBM: "C271",
          WLMS: "",
          JLDW: "吨",
          SCSL: 10,
          FJLDW: "方",
          FJLSL: 100,
          CHZT: "已上架",
          KCDD: "转运库"
        },
        {
          ZT: 1,
          GCBH: "13202298456",
          WLZ: "12365489",
          WLBM: "C271",
          WLMS: "",
          JLDW: "吨",
          SCSL: 50,
          FJLDW: "箱",
          FJLSL: 2000,
          CHZT: "已上架",
          KCDD: "中心库"
        },
        {
          ZT: 3,
          GCBH: "11002298699",
          WLZ: "12020611",
          WLBM: "C271",
          WLMS: "",
          JLDW: "吨",
          SCSL: 30,
          FJLDW: "桶",
          FJLSL: 200,
          CHZT: "已上架",
          KCDD: "港东器材库"
        },
        {
          ZT: 2,
          GCBH: "11002298695",
          WLZ: "12020612",
          WLBM: "C271",
          WLMS: "",
          JLDW: "吨",
          SCSL: 20,
          FJLDW: "根",
          FJLSL: 2000,
          CHZT: "已上架",
          KCDD: "中心库"
        },
        {
          ZT: 0,
          GCBH: "11002298696",
          WLZ: "12020613",
          WLBM: "C271",
          WLMS: "",
          JLDW: "吨",
          SCSL: 20,
          FJLDW: "根",
          FJLSL: 2000,
          CHZT: "已上架",
          KCDD: "中心库"
        },
        {
          ZT: 3,
          GCBH: "11002298697",
          WLZ: "12020614",
          WLBM: "C271",
          WLMS: "",
          JLDW: "吨",
          SCSL: 20,
          FJLDW: "根",
          FJLSL: 2000,
          CHZT: "已上架",
          KCDD: "中心库"
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
    handleCurrentChange() {},
    createData() {
      let name = [
        "冶金原料及铸铁管",
        "石油专用管材",
        "普通钢材",
        "金属丝、金属绳",
        "有色金属及加工材",
        "建筑五金",
        "石油及产品",
        "煤炭",
        "非金属建筑材料",
        "水泥及制品"
      ];
      let tempData = {
        name: "",
        HJ: "",
        WSH: "",
        SH: "",
        BHZT: "",
        BHZB: "",
        FSYT: "",
        MCQ: "",
        JDYT: "",
        QT: "",
        DGSH: "",
        SHWX: ""
      };
      let DataList=[];
      for(let i=0;i<name.length-1;i++){
        tempData={
          name:name[i],      
          WSH:Math.round(Math.random()*100),
          SH:Math.round(Math.random()*100),
          BHZT:Math.round(Math.random()*100),
          BHZB:Math.round(Math.random()*100),
          FSYT:Math.round(Math.random()*100),
          MCQ:Math.round(Math.random()*100),
          JDYT:Math.round(Math.random()*100),
          QT:Math.round(Math.random()*100),
          DGSH:Math.round(Math.random()*100),
          SHWX:Math.round(Math.random()*100),
        }
        tempData.HJ=tempData.WSH+tempData.SH+tempData.BHZT+tempData.BHZB+tempData.FSYT+tempData.MCQ+tempData.JDYT+tempData.QT+tempData.DGSH+tempData.SHWX
        DataList.push(tempData);
      }
      this.fac=DataList;
    }
  },
  mounted(){
    this.createData();
  }
};
</script>



<style lang="scss" scoped>
</style>


