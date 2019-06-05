<template>
  <div id="WLZJ" class="app-container calendar-list-container">
    <el-row style="margin-bottom:10px;">
      <el-col :xs="5" :sm="5" :md="5" :lg="4" :xl="3">
        <el-input placeholder="请输入物料编码" style="width:95%;" size="mini" clearable></el-input>
      </el-col>
      <el-col :xs="5" :sm="5" :md="5" :lg="4" :xl="3">
        <el-button type="primary" icon="el-icon-search" size="mini">查询</el-button>
        <el-button type="primary" icon="el-icon-document" size="mini">导出</el-button>
      </el-col>
    </el-row>
    <el-row>
      <el-col :xs="24" :sm="20" :md="20" :lg="20" :xl="18">
        <!-- <el-table
          size="mini"
          :data="goods"
          :header-cell-class-name="tableRowClassName"
          v-loading="listloading"
          element-loading-text="给我一点时间"
          border
          fit
          highlight-current-row
          style="width: 100%"
          row-key="MATKL"
          lazy
          :load="load"
        >
          <el-table-column label="工厂代码" prop="BWKEY"></el-table-column>
          <el-table-column label="大类" prop="MATKL"></el-table-column>
          <el-table-column label="中类" prop="MATKL1"></el-table-column>
          <el-table-column label="小类" prop="MATKL2"></el-table-column>
          <el-table-column label="品名" prop="MATKL3"></el-table-column>
          <el-table-column label="金额" prop="SALK3"></el-table-column>
        </el-table>-->
        <el-table
          :data="goods"
          style="width: 100%"
          row-key="id"
          border
          size="mini"
          :header-cell-class-name="tableRowClassName"
          v-loading="listloading"
          element-loading-text="给我一点时间"
          fit
          highlight-current-row
        >
          <!-- <el-table-column label="大类" prop="MATKL"></el-table-column> -->
          <el-table-column label="物料编码" prop="CODE"></el-table-column>
          <el-table-column label="物料名称" prop="MATKL3"></el-table-column>
          <el-table-column label="数量" prop="SALK3"></el-table-column>
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
  name: "WLZJ",
  data() {
    return {
      listloading: false,
      goods: [
        {
          id: 1,
          MATKL3: "冶金原料及铸铁管",
          CODE: "01",
          SALK3: 1000000,
          children: [
            {
              id: 11,
              MATKL3: "黑色金属矿采选产品",
              SALK3: 1000000,
              CODE: "0101",
              children: [
                {
                  id: 111,
                  MATKL3: "铁矿石",
                  SALK3: 1000000,
                  CODE: "010101",
                  children: [
                    {
                      id: 1111,
                      MATKL3: "赤铁矿",
                      SALK3: 1000000,
                      CODE: "01010101"
                    },
                    {
                      id: 1112,
                      MATKL3: "褐铁矿",
                      SALK3: 1000000,
                      CODE: "01010102"
                    },
                    {
                      id: 1113,
                      MATKL3: "磁铁矿",
                      SALK3: 1000000,
                      CODE: "01010103"
                    },
                    {
                      id: 1114,
                      MATKL3: "菱铁矿",
                      SALK3: 1000000,
                      CODE: "01010104"
                    }
                  ]
                }
              ]
            },
            {
              id: 12,
              MATKL3: "有色金属矿采选产品",
              SALK3: 1000000,
              CODE: "0102",
              children: [
                {
                  id: 121,
                  MATKL3: "铝矿",
                  SALK3: 1000000,
                  CODE: "010202",
                  children: [
                    {
                      id: 1211,
                      MATKL3: "铝土矿",
                      SALK3: 1000000,
                      CODE: "01020201"
                    },
                    {
                      id: 1212,
                      MATKL3: "铝选矿",
                      SALK3: 1000000,
                      CODE: "01020202"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          id: 2,
          MATKL3: "石油专用管材",
          CODE: "02",
          SALK3: 1000000
        },
        {
          id: 3,
          MATKL3: "普通钢材",
          CODE: "03",
          SALK3: 1000000
        },
        {
          id: 4,
          MATKL3: "金属丝、金属绳",
          CODE: "04",
          SALK3: 1000000
        },
        {
          id: 5,
          MATKL3: "有色金属及加工材",
          CODE: "05",
          SALK3: 1000000
        },
        {
          id: 6,
          MATKL3: "建筑五金",
          CODE: "06",
          SALK3: 1000000
        },
        {
          id: 7,
          MATKL3: "石油及产品",
          CODE: "07",
          SALK3: 1000000
        },
        {
          id: 8,
          MATKL3: "煤炭",
          CODE: "08",
          SALK3: 1000000
        },
        {
          id: 9,
          MATKL3: "非金属建筑材料",
          CODE: "09",
          SALK3: 1000000
        },
        {
          id: 10,
          MATKL3: "水泥及制品",
          CODE: "10",
          SALK3: 1000000
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
    createRandomData() {
      let arr = [
        "中心库",
        "转运库",
        "专用管分公司",
        "原炼化分公司",
        "港东器材库",
        "辅助器材库"
      ];
    }
  },
  mounted() {}
};
</script>



<style lang="scss" scoped>
</style>


