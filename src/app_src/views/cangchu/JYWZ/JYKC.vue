<template>
  <div id="JYKC" class="app-container calendar-list-container">
    <el-row style="margin-bottom:10px;">
      <el-col :xs="5" :sm="5" :md="5" :lg="4" :xl="3">
        <el-input placeholder="请输入库存地点" style="width:95%;" size="mini" clearable></el-input>
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
          :data="goods"
          :header-cell-class-name="tableRowClassName"
          v-loading="listloading"
          element-loading-text="给我一点时间"
          border
          fit
          highlight-current-row
          style="width: 100%"
        >
        <el-table-column label="序号" width="80" prop="NON"></el-table-column>
          <el-table-column label="库存地点" width="80" prop="LGORT"></el-table-column>
          <el-table-column label="物料编码" width="100" prop="MATNR"></el-table-column>
          <el-table-column label="大类" prop="MATKL"></el-table-column>
          <el-table-column label="中类" prop="MATKL1"></el-table-column>
          <el-table-column label="小类" prop="MATKL2"></el-table-column>
          <el-table-column label="品名" prop="MATKL3"></el-table-column>
          <el-table-column label="金额" width="100" prop="SALK3"></el-table-column>
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
  name: "JYKC",
  data() {
    return {
      listloading: false,
      goods: [
         {
           NON:1,
          LGORT: "C271",
          MATNR: "20002264284",
          MATKL: "45  消防器材",
          MATKL1: "4502  消防器械",
          MATKL2: "450203  消火栓",
          MATKL3: "45020303  室外地下消火栓",
          SALK3: 1500000
        },
        {NON:2,
          LGORT: "C271",
          MATNR: "11004421013",
          MATKL: "39  小型机械",
          MATKL1: "3905  机动车检测维修设备及工具",
          MATKL2: "390505  汽车发动机维修加工设备及工具",
          MATKL3: "39050507  气缸体平面磨床",
          SALK3: 1300000
        },
        {
          NON:3,
          LGORT: "C2W1",
          MATNR: "11001889505",
          MATKL: "39  小型机械",
          MATKL1: "3905  机动车检测维修设备及工具",
          MATKL2: "390508  汽车底盘维修加工设备及工具",
          MATKL3: "39050815  制动盘切削机",
          SALK3: 14000000
        },
        {
          NON:4,
          LGORT: "C2W1",
          MATNR: "10001506386",
          MATKL: "37  石油专用仪器、仪表",
          MATKL1: "3705  石油产品分析仪器",
          MATKL2: "370505  超声波分析仪器",
          MATKL3: "37050503  超声波含砂监测仪",
          SALK3: 1000000
        },
        {
          NON:5,
          LGORT: "C271",
          MATNR: "11004421013",
          MATKL: "39  小型机械",
          MATKL1: "3905  机动车检测维修设备及工具",
          MATKL2: "390505  汽车发动机维修加工设备及工具",
          MATKL3: "39050507  气缸体平面磨床",
          SALK3: 1300000
        },
        {
          NON:6,
          LGORT: "C2W1",
          MATNR: "11001889505",
          MATKL: "39  小型机械",
          MATKL1: "3905  机动车检测维修设备及工具",
          MATKL2: "390508  汽车底盘维修加工设备及工具",
          MATKL3: "39050815  制动盘切削机",
          SALK3: 14000000
        },
        {
          NON:7,
          LGORT: "C271",
          MATNR: "20002264284",
          MATKL: "39  小型机械",
          MATKL1: "3905  机动车检测维修设备及工具",
          MATKL2: "390509  汽车电气设备及车用辅助装置检修设备及工具",
          MATKL3: "39050923  蓄电池活化仪",
          SALK3: 1500000
        },

        {
          NON:8,
          LGORT: "C2W1",
          MATNR: "10001506386",
          MATKL: "40  工具、量具、刃具、磨具",
          MATKL1: "4001  普通工具",
          MATKL2: "400101  扳手",
          MATKL3: "40010116  棘轮扳手",
          SALK3: 1400000
        },
        {
          NON:9,
          LGORT: "C271",
          MATNR: "11004421013",
          MATKL: "40  工具、量具、刃具、磨具",
          MATKL1: "4001  普通工具",
          MATKL2: "400101  扳手",
          MATKL3: "40010136  强力气动扳手",
          SALK3: 1300000
        },
        {
          NON:10,
          LGORT: "C2W1",
          MATNR: "11001889505",
          MATKL: "40  工具、量具、刃具、磨具",
          MATKL1: "4001  普通工具",
          MATKL2: "400102  钳子",
          MATKL3: "40010224  针嘴钳",
          SALK3: 14000000
        },
        {
          NON:11,
          LGORT: "C271",
          MATNR: "20002264284",
          MATKL: "45  消防器材",
          MATKL1: "4502  消防器械",
          MATKL2: "450203  消火栓",
          MATKL3: "45020303  室外地下消火栓",
          SALK3: 1500000
        },
        {NON:12,
          LGORT: "C271",
          MATNR: "11004421013",
          MATKL: "39  小型机械",
          MATKL1: "3905  机动车检测维修设备及工具",
          MATKL2: "390505  汽车发动机维修加工设备及工具",
          MATKL3: "39050507  气缸体平面磨床",
          SALK3: 1300000
        },
        {NON:13,
          LGORT: "C2W1",
          MATNR: "11001889505",
          MATKL: "39  小型机械",
          MATKL1: "3905  机动车检测维修设备及工具",
          MATKL2: "390508  汽车底盘维修加工设备及工具",
          MATKL3: "39050815  制动盘切削机",
          SALK3: 14000000
        },
        {NON:14,
          LGORT: "C271",
          MATNR: "20002264284",
          MATKL: "39  小型机械",
          MATKL1: "3905  机动车检测维修设备及工具",
          MATKL2: "390509  汽车电气设备及车用辅助装置检修设备及工具",
          MATKL3: "39050923  蓄电池活化仪",
          SALK3: 1500000
        },
         {NON:15,
          LGORT: "C2W1",
          MATNR: "10001506386",
          MATKL: "40  工具、量具、刃具、磨具",
          MATKL1: "4001  普通工具",
          MATKL2: "400101  扳手",
          MATKL3: "40010116  棘轮扳手",
          SALK3: 1400000
        },
        {NON:16,
          LGORT: "C271",
          MATNR: "11004421013",
          MATKL: "40  工具、量具、刃具、磨具",
          MATKL1: "4001  普通工具",
          MATKL2: "400101  扳手",
          MATKL3: "40010136  强力气动扳手",
          SALK3: 1300000
        },
        {NON:17,
          LGORT: "C2W1",
          MATNR: "11001889505",
          MATKL: "40  工具、量具、刃具、磨具",
          MATKL1: "4001  普通工具",
          MATKL2: "400102  钳子",
          MATKL3: "40010224  针嘴钳",
          SALK3: 14000000
        },
        {NON:18,
          LGORT: "C271",
          MATNR: "20002264284",
          MATKL: "45  消防器材",
          MATKL1: "4502  消防器械",
          MATKL2: "450203  消火栓",
          MATKL3: "45020303  室外地下消火栓",
          SALK3: 1500000
        },
        {NON:'合计',
          LGORT: "",
          MATNR: "",
          MATKL: "",
          MATKL1: "",
          MATKL2: " ",
          MATKL3: " ",
          SALK3: 45000000
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


