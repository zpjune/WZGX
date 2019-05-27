<template>
  <div id="ZHCX" class="app-container calendar-list-container">
    <el-row style="margin-bottom:10px;">
      <el-col :xs="5" :sm="5" :md="5" :lg="4" :xl="3">
        <el-input placeholder="请输入工厂编码" style="width:95%;" size="mini" clearable></el-input>
      </el-col>
      <el-col :xs="5" :sm="5" :md="5" :lg="4" :xl="3">
        <!-- <el-input placeholder="请选择物资分类" style="width:95%;" size="mini" clearable></el-input> -->
         <el-select
            size="mini"
            filterable
            clearable
            placeholder="请选择物资分类"
            v-model="categoryCode"
            style="width:95%;"
          >
            <el-option
              v-for="item in categoryList"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
      </el-col>
      <!-- <el-col :xs="5" :sm="5" :md="5" :lg="4" :xl="3">
        <el-input placeholder="请输入中类编码" style="width:95%;" size="mini" clearable></el-input>
      </el-col>
      <el-col :xs="5" :sm="5" :md="5" :lg="4" :xl="3">
        <el-input placeholder="请输入小类编码" style="width:95%;" size="mini" clearable></el-input>
      </el-col>-->
      <el-col :xs="5" :sm="5" :md="5" :lg="4" :xl="3">
        <el-input placeholder="请输入品名编码" style="width:95%;" size="mini" clearable></el-input>
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
          <el-table-column label="工厂编码" prop="BWKEY"></el-table-column>
          <el-table-column label="工厂名称" prop="GCNAME"></el-table-column>
          <el-table-column label="大类" prop="MATKL"></el-table-column>
          <el-table-column label="中类" prop="MATKL1"></el-table-column>
          <el-table-column label="小类" prop="MATKL2"></el-table-column>
          <el-table-column label="品名" prop="MATKL3"></el-table-column>
          <el-table-column label="金额" prop="SALK3"></el-table-column>
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
  name: "ZHCX",
  data() {
    return {
      listloading: false,
      categoryCode:"",
      categoryList: [
        {
          value: "大类",
          label: "大类"
        },
        {
          value: "中类",
          label: "中类"
        },
        {
          value: "小类",
          label: "小类"
        },
         {
          value: "品名",
          label: "品名"
        }
      ],
      goods: [
        {
          BWKEY: "ZXK9876",
          GCNAME: "中心库",
          MATKL: "01  冶金原料及铸铁管",
          MATKL1: "0101  黑色金属矿采选产品",
          MATKL2: "010101  铁矿石",
          MATKL3: "01010101  赤铁矿",
          SALK3: 1400000
        },
        {
          BWKEY: "ZYK0980",
          GCNAME: "转运库",
          MATKL: "01  冶金原料及铸铁管",
          MATKL1: "0103  废金属",
          MATKL2: "010301  废黑色金属",
          MATKL3: "01030101  废钢",
          SALK3: 1600000
        },
        {
          BWKEY: "ZYG8963",
          GCNAME: "专用管分公司",
          MATKL: "01  冶金原料及铸铁管",
          MATKL1: "0102  有色金属矿采选产品",
          MATKL2: "010213  稀有金属矿",
          MATKL3: "01021304  镉矿",
          SALK3: 1800000
        },
        {
          BWKEY: "YLH5247",
          GCNAME: "原炼化分公司",
          MATKL: "02  石油专用管材",
          MATKL1: "0202  钻杆",
          MATKL2: "020202  左旋螺纹钻杆",
          MATKL3: "02020201  左旋螺纹钻杆",
          SALK3: 1700000
        },
        {
          BWKEY: "QCK9043",
          GCNAME: "港东器材库",
          MATKL: "02  石油专用管材",
          MATKL1: "0202  钻杆",
          MATKL2: "020202  左旋螺纹钻杆",
          MATKL3: "02020203  左旋螺纹内外加厚钻杆",
          SALK3: 1500000
        },

         {
          BWKEY: "ZXK9876",
          GCNAME: "中心库",
          MATKL: "07  石油及产品",
          MATKL1: "0702  石油气体",
          MATKL2: "070202  炼厂气体",
          MATKL3: "07020203  工业丁烷",
          SALK3: 1400000
        },
        {
          BWKEY: "ZYK0980",
          GCNAME: "转运库",
          MATKL: "06  建筑五金",
          MATKL1: "0699  其它建筑五金",
          MATKL2: "069999  其它建筑五金",
          MATKL3: "06999901  篷布网",
          SALK3: 1600000
        },
        {
          BWKEY: "ZYG8963",
          GCNAME: "专用管分公司",
          MATKL: "06  建筑五金",
          MATKL1: "0699  其它建筑五金",
          MATKL2: "069903  钢制品",
          MATKL3: "06990317  宣传板支架",
          SALK3: 1800000
        },
        {
          BWKEY: "YLH5247",
          GCNAME: "原炼化分公司",
          MATKL: "09  非金属建筑材料",
          MATKL1: "0901  砖",
          MATKL2: "090102  烧结空心砖",
          MATKL3: "09010203  空心砌块",
          SALK3: 1700000
        },
        {
          BWKEY: "QCK9043",
          GCNAME: "港东器材库",
          MATKL: "11  木材及制品",
          MATKL1: "1101  原木",
          MATKL2: "110102  锯切用针叶树原木",
          MATKL3: "11010203  樟子松",
          SALK3: 1500000
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


