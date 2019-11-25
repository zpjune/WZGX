<template>
  <div
    style="text-align:center"
    usemap="#planetmap"
    id="TotalZYK"
    class="app-container calendar-list-container"
  >
    <!-- <img src="../../../../img/ZXKdetail.png" border="0" usemap="#planetmap" alt="Planets" />
    <map name="planetmap" id="planetmap">
      <area shape="rect" coords="274, 120, 331, 384" @click="OpenDialog" />
      <area shape="rect" coords="1334, 170, 1393, 236" @click="OpenDialog" />
    </map>-->

    <!-- <img src="../../../../img/ZYKPIC.png" border="0" usemap="#planetmap" alt="Planets" />
    <map name="planetmap" id="planetmap">
      <area shape="rect" coords="280, 43, 316, 76" title="1号库" @click="OpenDialog('ZYK',1)" />
      <area shape="rect" coords="474, 200, 617, 230" title="1号活动料棚" @click="OpenDialog('ZYK',1.1)" />
      <area shape="rect" coords="473, 148, 617, 179" title="2号活动料棚" @click="OpenDialog('ZYK',2)" />
      <area shape="rect" coords="473, 44, 509, 75" title="5号库" @click="OpenDialog('ZYK',5)" />
      <area shape="rect" coords="511, 44, 547, 75" title="6号库" @click="OpenDialog('ZYK',6)" />
      <area shape="rect" coords="549, 44, 580, 75" title="7号库" @click="OpenDialog('ZYK',7)" />
      <area shape="rect" coords="582, 44, 616, 75" title="8号库" @click="OpenDialog('ZYK',8)" />
      <area shape="rect" coords="352, 304, 387, 334" title="9号库" @click="OpenDialog('ZYK',9)" />
      <area shape="rect" coords="389, 304, 424, 334" title="10号库" @click="OpenDialog('ZYK',10)" />
      <area shape="rect" coords="473, 304, 507, 334" title="11号库" @click="OpenDialog('ZYK',11)" />
      <area shape="rect" coords="509, 304, 543, 334" title="12号库" @click="OpenDialog('ZYK',12)" />
      <area shape="rect" coords="545, 304, 581, 334" title="13号库" @click="OpenDialog('ZYK',13)" />
      <area shape="rect" coords="583, 304, 619, 334" title="14号库" @click="OpenDialog('ZYK',14)" />
    </map>-->

    <div class="box" id="box">
      <img
        id="GSPIC"
        src="../../../../img/GSPIC.png"
        border="0"
        usemap="#planetmap"
        alt="Planets"
        class="ZYCPIC"
      />
      <map name="planetmap" id="planetmap">
        <area shape="rect" coords="270, 326, 521, 365" title="1号库" @click="OpenDialog('ZXK','01')" />
        <area shape="rect" coords="270, 365, 521, 405" title="2号库" @click="OpenDialog('ZXK','02')" />
        <area
          shape="rect"
          coords="270, 408, 521, 446"
          title="7号活动料棚"
          @click="OpenDialog('ZYK','07')"
        />
        <area shape="rect" coords="270, 450, 416, 487" title="4号库" @click="OpenDialog('ZYK','04')" />
        <area shape="rect" coords="426, 35, 557, 261" title="5料场" @click="OpenDialog('ZYK','05')" />
        <area
          shape="rect"
          coords="557, 34, 593, 189"
          title="6号活动料棚"
          @click="OpenDialog('ZYK','06')"
        />
        <area shape="rect" coords="138, 107, 255, 137" title="9料台" @click="OpenDialog('ZYK','09')" />
        <area shape="rect" coords="137, 139, 257, 167" title="8料台" @click="OpenDialog('ZYK','08')" />
        <area shape="rect" coords="114, 377, 148, 490" title="3号库" @click="OpenDialog('ZYK','03')" />
      </map>
      <div name="1号区域">
        <img
          src="../../../../img/red.jpg"
          alt
          id="flag0"
          title="积压"
          style=" position: absolute;left: 269px;z-index: 2;top: 54.2%;width: 12px;height: 12px;"
          v-show="StatusStr[3*(1-1)]==='1'"
        />
        <img
          src="../../../../img/blue.jpg"
          alt
          id="flag1"
          title="正常"
          style=" position: absolute;left: 508px;z-index: 2;top:54.2%;;width: 12px;height: 12px;"
          v-show="StatusStr[3*(1-1)+1]==='1'"
        />
        <img
          src="../../../../img/yellow.jpg"
          alt
          id="flag2"
          title="空缺"
          style=" position: absolute;left: 269px;z-index: 2;top: 58.8%;width: 12px;height: 12px;"
          v-show="StatusStr[3*(1-1)+2]==='1'"
        />
      </div>
      <div name="2号区域">
        <img
          src="../../../../img/red.jpg"
          alt
          id="flag3"
          title="积压"
          style=" position: absolute;left: 269px;z-index: 2;top: 61%;width: 12px;height: 12px;"
          v-show="StatusStr[3*(2-1)]==='1'"
        />
        <img
          src="../../../../img/blue.jpg"
          alt
          id="flag4"
          title="正常"
          style=" position: absolute;left: 508px;z-index: 2;top:61%;;width: 12px;height: 12px;"
          v-show="StatusStr[3*(2-1)+1]==='1'"
        />
        <img
          src="../../../../img/yellow.jpg"
          alt
          id="flag5"
          title="空缺"
          style=" position: absolute;left: 269px;z-index: 2;top: 65.8%;width: 12px;height: 12px;"
          v-show="StatusStr[3*(2-1)+2]==='1'"
        />
      </div>
      <div name="7号料棚">
        <img
          src="../../../../img/red.jpg"
          alt
          id="flag6"
          title="积压"
          style=" position: absolute;left: 269px;z-index: 2;top: 68%;width: 12px;height: 12px;"
          v-show="StatusStr[3*(7-1)]==='1'"
        />
        <img
          src="../../../../img/blue.jpg"
          alt
          id="flag7"
          title="正常"
          style=" position: absolute;left: 508px;z-index: 2;top:68%;;width: 12px;height: 12px;"
          v-show="StatusStr[3*(7-1)+1]==='1'"
        />
        <img
          src="../../../../img/yellow.jpg"
          alt
          id="flag8"
          title="空缺"
          style=" position: absolute;left: 269px;z-index: 2;top: 72.8%;width: 12px;height: 12px;"
          v-show="StatusStr[3*(7-1)+2]==='1'"
        />
      </div>
      <div name="4号区域">
        <img
          src="../../../../img/red.jpg"
          alt
          id="flag9"
          title="积压"
          style=" position: absolute;left: 269px;z-index: 2;top: 75%;width: 12px;height: 12px;"
          v-show="StatusStr[3*(4-1)]==='1'"
        />
        <img
          src="../../../../img/blue.jpg"
          alt
          id="flag10"
          title="正常"
          style=" position: absolute;left: 405px;z-index: 2;top:75%;;width: 12px;height: 12px;"
          v-show="StatusStr[3*(4-1)+1]==='1'"
        />
        <img
          src="../../../../img/yellow.jpg"
          alt
          id="flag11"
          title="空缺"
          style=" position: absolute;left: 269px;z-index: 2;top: 79.4%;width: 12px;height: 12px;"
          v-show="StatusStr[3*(4-1)+2]==='1'"
        />
      </div>
      <div name="5号料场">
        <img
          src="../../../../img/red.jpg"
          alt
          id="flag12"
          title="积压"
          style=" position: absolute;left: 425px;z-index: 2;top: 5.7%;width: 12px;height: 12px;"
          v-show="StatusStr[3*(5-1)]==='1'"
        />
        <img
          src="../../../../img/blue.jpg"
          alt
          id="flag13"
          title="正常"
          style=" position: absolute;left: 544px;z-index: 2;top:5.7%;;width: 12px;height: 12px;"
          v-show="StatusStr[3*(5-1)+1]==='1'"
        />
        <img
          src="../../../../img/yellow.jpg"
          alt
          id="flag14"
          title="空缺"
          style=" position: absolute;left: 425px;z-index: 2;top: 41.5%;width: 12px;height: 12px;"
          v-show="StatusStr[3*(5-1)+2]==='1'"
        />
      </div>
      <div name="9料台">
        <img
          src="../../../../img/red.jpg"
          alt
          id="flag15"
          title="积压"
          style=" position: absolute;left: 137px;z-index: 2;top: 17.7%;width: 12px;height: 12px;"
          v-show="StatusStr[3*(9-1)]==='1'"
        />
        <img
          src="../../../../img/blue.jpg"
          alt
          id="flag16"
          title="正常"
          style=" position: absolute;left: 244px;z-index: 2;top:17.7%;;width: 12px;height: 12px;"
          v-show="StatusStr[3*(9-1)+1]==='1'"
        />
        <img
          src="../../../../img/yellow.jpg"
          alt
          id="flag17"
          title="空缺"
          style=" position: absolute;left: 137px;z-index: 2;top: 20.8%;width: 12px;height: 12px;"
          v-show="StatusStr[3*(9-1)+2]==='1'"
        />
      </div>
      <div name="8料台">
        <img
          src="../../../../img/red.jpg"
          alt
          id="flag18"
          title="积压"
          style=" position: absolute;left: 137px;z-index: 2;top: 23%;width: 12px;height: 12px;"
          v-show="StatusStr[3*(8-1)]==='1'"
        />
        <img
          src="../../../../img/blue.jpg"
          alt
          id="flag19"
          title="正常"
          style=" position: absolute;left: 244px;z-index: 2;top:23%;;width: 12px;height: 12px;"
          v-show="StatusStr[3*(8-1)+1]==='1'"
        />
        <img
          src="../../../../img/yellow.jpg"
          alt
          id="flag20"
          title="空缺"
          style=" position: absolute;left: 137px;z-index: 2;top: 26%;width: 12px;height: 12px;"
          v-show="StatusStr[3*(8-1)+2]==='1'"
        />
      </div>
      <div name="3号区域">
        <img
          src="../../../../img/red.jpg"
          alt
          id="flag21"
          title="积压"
          style=" position: absolute;left: 113px;z-index: 2;top: 62.8%;width: 12px;height: 12px;"
          v-show="StatusStr[3*(3-1)]==='1'"
        />
        <img
          src="../../../../img/blue.jpg"
          alt
          id="flag22"
          title="正常"
          style=" position: absolute;left: 136px;z-index: 2;top:62.8%;width: 12px;height: 12px;"
          v-show="StatusStr[3*(3-1)+1]==='1'"
        />
        <img
          src="../../../../img/yellow.jpg"
          alt
          id="flag23"
          title="空缺"
          style=" position: absolute;left: 113px;z-index: 2;top: 79.6%;width: 12px;height: 12px;"
          v-show="StatusStr[3*(3-1)+2]==='1'"
        />
      </div>
    </div>
    <div name="标识图片">
      <img id="ZYCPIC" src="../../../../img/库房2.png" border="0" class="kufang" />库房
      <img id="ZYCPIC" src="../../../../img/料棚.png" border="0" class="liaopeng" />料棚
    </div>
    <kucunzhanshidetail
      :kcmxdialogVisible="kcmxDialog"
      @listenToChildEvent="closeDialog"
      ref="kucunzhanshidetail"
    ></kucunzhanshidetail>
  </div>
</template>

<script>
import kucunzhanshidetail from "@/app_src/components/cangchu/kucunzhanshidetail";
import { GetFacStatus } from "@/app_src/api/cangchu/KCZS/ZXK";
export default {
  name: "TotalZYK",
  props: ["FacCode"],
  data() {
    return {
      kcmxDialog: false,
      width: 0,
      oldwidth: 0,
      listQuery: {
        FacCode: this.FacCode
      },
      statusCode: "",
      StatusStr: ""
    };
  },
  watch: {
    width(val) {
      //this.setStyle(val);
      this.debounce(this.setStyle(val), 5000);
    }
  },
  components: {
    kucunzhanshidetail
  },
  methods: {
    getList() {
      GetFacStatus(this.listQuery).then(response => {
        if (response.data.code === 2000) {
          this.StatusStr = response.data.items;
        }
        this.setStyle(this.width);
      });
    },
    OpenDialog(type, val) {
      this.statusCode = this.FacCode + val;
      this.kcmxDialog = true;
      this.$refs.kucunzhanshidetail.getValue(this.statusCode);
      this.$refs.kucunzhanshidetail.getList();
      //console.log(type + val);
    },
    closeDialog(val) {
      this.kcmxDialog = val;
    },
    getPoint() {
      //let t=document.getElementById("TotalZYK").offsetLeft;
      let w = document.getElementById("GSPIC").offsetLeft;
      this.width = w;
    },
    setStyle(val) {
      let maxName = 24;
      for (let i = 0; i < maxName; i++) {
        let name = "flag" + i.toString();
        let currentWidth = document.getElementById(name).style.left;
        let targetWidth =
          parseInt(currentWidth.trim("px")) + val - this.oldwidth + "px";
        document.getElementById(name).style.left = targetWidth;
      }
      this.oldwidth = this.width;
    },
    debounce(fn, delay) {
      var delay = delay || 200;
      var timer;
      return function() {
        var th = this;
        var args = arguments;
        if (timer) {
          clearTimeout(timer);
        }
        timer = setTimeout(function() {
          timer = null;
          fn.apply(th, args);
        }, delay);
      };
    },
    observer() {
      var elementResizeDetectorMaker = require("element-resize-detector");
      var erd = elementResizeDetectorMaker();
      let w = 0;
      erd.listenTo(document.getElementById("box"), element => {
        this.width = document.getElementById("GSPIC").offsetLeft;
      });
    }
  },
  mounted() {
    this.getPoint();
    //this.setStyle(this.width);
    this.observer();
    this.setStyle(this.width);
  },
  created() {
    this.getList();
  }
};
</script>



<style lang="scss" >
#TotalZYK {
  .app-container {
    padding-top: 2px;
  }
  .app-container /deep/ .el-dialog__body {
    background: #c0c0c0 !important;
  }
  .app-container /deep/ .el-dialog__header {
    background: #c0c0c0 !important;
  }
  .box {
    position: relative;
    height: 600px;
    .GSPIC {
      position: absolute;
      z-index: 1;
      right: 25%;
    }
    // .flag1 {
    //   position: absolute;
    //   z-index: 2;
    //   left: 41.1%;
    //   top: 10.5%;
    //   width: 12px;
    //   height: 12px;
    // }
    // .flag2 {
    //   position: absolute;
    //   z-index: 2;
    //   left: 42.538%;
    //   top: 7%;
    //   width: 12px;
    //   height: 12px;
    // }
  }
  .kufang {
    width: 55px;
    height: 60px;
  }
  .liaopeng {
    width: 70px;
    height: 60px;
    margin-left: 50px;
  }
}
</style>


