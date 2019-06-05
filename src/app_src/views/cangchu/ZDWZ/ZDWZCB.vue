<template>
  <div id="SWKC" class="app-container calendar-list-container">
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
        <el-button type="primary" icon="el-icon-search" size="mini">查询</el-button>
        <el-button type="primary" icon="el-icon-document" size="mini">导出</el-button>
      </el-col>
    </el-row>
    <el-row>
      <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
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
        <el-table-column label="序号" width="100" prop="non"></el-table-column>
          <el-table-column label="物料编码" prop="MATNR"></el-table-column>
          <el-table-column label="物料名称" prop="MATNRNAME"></el-table-column>
          <el-table-column label="库存地点编号" prop="LGORTCODE"></el-table-column>
          <el-table-column label="库存地点" prop="LGORT"></el-table-column>
          <el-table-column label="数量" prop="GESME"></el-table-column>
        </el-table>
        <el-pagination
          background
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="1"
          :page-sizes="[10,20,30, 50]"
          :page-size="20"
          layout="total, sizes, prev, pager, next, jumper"
          :total="18"
          style="text-align: center;"
        ></el-pagination>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "SWKC",
  data() {
    return {
      listloading: false,
      fac: [
          {
          non:1,
          MATNR: "05020201",
          MATNRNAME:"铸造铝合金锭",
          LGORTCODE:"C271",
          LGORT: "仓库二东区71号",
          GESME: 900
        },
        
          {
            non:2,
          MATNR: "05120901",
          MATNRNAME:"铝合金角材",
          LGORTCODE:"C2W1",
          LGORT: "仓库二西区1号",
          GESME: 800
        },
        {non:3,
          MATNR: "05210802",
          MATNRNAME:"铸造碳化钨粉",
          LGORTCODE:"C271",
          LGORT: "仓库二东区71号",
          GESME: 900
        },
          {non:4,
          MATNR: "05190801",
          MATNRNAME:"钛粉",
          LGORTCODE:"C2W1",
          LGORT: "仓库二西区1号",
          GESME: 800
        },
        {non:5,
          MATNR: "04010302 ",
          MATNRNAME:"冷顶锻用合金钢丝",
          LGORTCODE:"C2W1",
          LGORT: "仓库二西区1号",
          GESME: 800
        },
        {non:6,
          MATNR: "04010402",
          MATNRNAME:"滤机用不锈钢丝",
          LGORTCODE:"C271",
          LGORT: "仓库二东区71号",
          GESME: 900
        },
        {non:7,
          MATNR: "05010202",
          MATNRNAME:"电解铜",
          LGORTCODE:"C2W1",
          LGORT: "仓库二西区1号",
          GESME: 800
        },
        {
          non:8,
          MATNR: "05020201",
          MATNRNAME:"铸造铝合金锭",
          LGORTCODE:"C271",
          LGORT: "仓库二东区71号",
          GESME: 900
        },
          {
            non:9,
          MATNR: "05110216",
          MATNRNAME:"白铜矩形管",
          LGORTCODE:"C2W1",
          LGORT: "仓库二西区1号",
          GESME: 800
        },
        {non:10,
          MATNR: "05120206",
          MATNRNAME:"铝合金滴形管",
          LGORTCODE:"C271",
          LGORT: "仓库二东区71号",
          GESME: 900
        },
          {non:11,
          MATNR: "05120901",
          MATNRNAME:"铝合金角材",
          LGORTCODE:"C2W1",
          LGORT: "仓库二西区1号",
          GESME: 800
        },
        {non:12,
          MATNR: "05210802",
          MATNRNAME:"铸造碳化钨粉",
          LGORTCODE:"C271",
          LGORT: "仓库二东区71号",
          GESME: 900
        },
          {non:13,
          MATNR: "05190801",
          MATNRNAME:"钛粉",
          LGORTCODE:"C2W1",
          LGORT: "仓库二西区1号",
          GESME: 800
        },
        {non:14,
          MATNR: "05180101",
          MATNRNAME:"镁合金棒",
          LGORTCODE:"C271",
          LGORT: "仓库二东区71号",
          GESME: 900
        },
         {non:15,
          MATNR: "05010202",
          MATNRNAME:"电解铜",
          LGORTCODE:"C2W1",
          LGORT: "仓库二西区1号",
          GESME: 800,
          JE:1000
        },
        {non:16,
          MATNR: "05020201",
          MATNRNAME:"铸造铝合金锭",
          LGORTCODE:"C271",
          LGORT: "仓库二东区71号",
          GESME: 900
        },
          {non:17,
          MATNR: "05110216",
          MATNRNAME:"白铜矩形管",
          LGORTCODE:"C2W1",
          LGORT: "仓库二西区1号",
          GESME: 800,
          JE:1000
        },
        {non:18,
          MATNR: "05120206",
          MATNRNAME:"铝合金滴形管",
          LGORTCODE:"C271",
          LGORT: "仓库二东区71号",
          GESME: 900
        }
        ,
        {non:'合计',
          MATNR: "",
          MATNRNAME:"",
          LGORTCODE:"",
          LGORT: "",
          GESME: 15400
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


