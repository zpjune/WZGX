<template>
  <div
    style="text-align:center"
    usemap="#planetmap"
    id="TotalZYK"
    class="app-container calendar-list-container"
  >
    <!-- <img src="../../../img/ZXKdetail.png" border="0" usemap="#planetmap" alt="Planets" />
    <map name="planetmap" id="planetmap">
      <area shape="rect" coords="274, 120, 331, 384" @click="OpenDialog" />
      <area shape="rect" coords="1334, 170, 1393, 236" @click="OpenDialog" />
    </map>-->

    <!-- <img src="../../../img/ZYKPIC.png" border="0" usemap="#planetmap" alt="Planets" />
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
        id="ZYCPIC"
        src="../../../img/ZYKPIC.png"
        border="0"
        usemap="#planetmap"
        alt="Planets"
        class="ZYCPIC"
      />
      <map name="planetmap" id="planetmap">
        <area shape="rect" coords="280, 43, 316, 76" title="1号库" @click="OpenDialog('ZYK',1)" />
        <area
          shape="rect"
          coords="474, 200, 617, 230"
          title="1号活动料棚"
          @click="OpenDialog('ZYK',1.1)"
        />
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
      </map>
      <img
        src="../../../img/red.jpg"
        alt
        id="flag0"
        title="积压"
        style=" position: absolute;left: 279px;z-index: 2;top: 7%;width: 12px;height: 12px;"
      />
      <img
        src="../../../img/blue.jpg"
        alt
        id="flag1"
        title="积压"
        style=" position: absolute;left: 304px;z-index: 2;top: 7%;width: 12px;height: 12px;"
      />
      <img
        src="../../../img/yellow.jpg"
        alt
        id="flag2"
        title="积压"
        style=" position: absolute;left: 279px;z-index: 2;top: 10.5%;width: 12px;height: 12px;"
      />
      <img
        src="../../../img/yellow.jpg"
        alt
        id="flag3"
        title="积压"
        style=" position: absolute;left: 289px;z-index: 2;top: 10.5%;width: 12px;height: 12px;"
      />
      <img
        src="../../../img/yellow.jpg"
        alt
        id="flag4"
        title="积压"
        style=" position: absolute;left: 299px;z-index: 2;top: 10.5%;width: 12px;height: 12px;"
      />
      <img
        src="../../../img/yellow.jpg"
        alt
        id="flag5"
        title="积压"
        style=" position: absolute;left: 310px;z-index: 2;top: 10.5%;width: 12px;height: 12px;"
      />
      <img
        src="../../../img/yellow.jpg"
        alt
        id="flag6"
        title="积压"
        style=" position: absolute;left: 320px;z-index: 2;top: 10.5%;width: 12px;height: 12px;"
      />
      <img
        src="../../../img/yellow.jpg"
        alt
        id="flag7"
        title="积压"
        style=" position: absolute;left: 330px;z-index: 2;top: 10.5%;width: 12px;height: 12px;"
      />
      <img
        src="../../../img/yellow.jpg"
        alt
        id="flag8"
        title="积压"
        style=" position: absolute;left: 340px;z-index: 2;top: 10.5%;width: 12px;height: 12px;"
      />
      <img
        src="../../../img/yellow.jpg"
        alt
        id="flag9"
        title="积压"
        style=" position: absolute;left: 350px;z-index: 2;top: 10.5%;width: 12px;height: 12px;"
      />
      <img
        src="../../../img/yellow.jpg"
        alt
        id="flag10"
        title="积压"
        style=" position: absolute;left: 360px;z-index: 2;top: 10.5%;width: 12px;height: 12px;"
      />
      <img
        src="../../../img/yellow.jpg"
        alt
        id="flag11"
        title="积压"
        style=" position: absolute;left: 370px;z-index: 2;top: 10.5%;width: 12px;height: 12px;"
      />
      <img
        src="../../../img/yellow.jpg"
        alt
        id="flag12"
        title="积压"
        style=" position: absolute;left: 380px;z-index: 2;top: 10.5%;width: 12px;height: 12px;"
      />
      <img
        src="../../../img/yellow.jpg"
        alt
        id="flag13"
        title="积压"
        style=" position: absolute;left: 390px;z-index: 2;top: 10.5%;width: 12px;height: 12px;"
      />
      <img
        src="../../../img/yellow.jpg"
        alt
        id="flag14"
        title="积压"
        style=" position: absolute;left: 400px;z-index: 2;top: 10.5%;width: 12px;height: 12px;"
      />
      <img
        src="../../../img/yellow.jpg"
        alt
        id="flag15"
        title="积压"
        style=" position: absolute;left: 410px;z-index: 2;top: 10.5%;width: 12px;height: 12px;"
      />
      <img
        src="../../../img/yellow.jpg"
        alt
        id="flag16"
        title="积压"
        style=" position: absolute;left: 420px;z-index: 2;top: 10.5%;width: 12px;height: 12px;"
      />
      <img
        src="../../../img/yellow.jpg"
        alt
        id="flag17"
        title="积压"
        style=" position: absolute;left: 430px;z-index: 2;top: 10.5%;width: 12px;height: 12px;"
      />
      <img
        src="../../../img/yellow.jpg"
        alt
        id="flag18"
        title="积压"
        style=" position: absolute;left: 440px;z-index: 2;top: 10.5%;width: 12px;height: 12px;"
      />
      <img
        src="../../../img/yellow.jpg"
        alt
        id="flag19"
        title="积压"
        style=" position: absolute;left: 450px;z-index: 2;top: 10.5%;width: 12px;height: 12px;"
      />
      <img
        src="../../../img/yellow.jpg"
        alt
        id="flag20"
        title="积压"
        style=" position: absolute;left: 460px;z-index: 2;top: 10.5%;width: 12px;height: 12px;"
      />

      <img
        src="../../../img/yellow.jpg"
        alt
        id="flag21"
        title="积压"
        style=" position: absolute;left: 470px;z-index: 2;top: 10.5%;width: 12px;height: 12px;"
      />
      <img
        src="../../../img/yellow.jpg"
        alt
        id="flag22"
        title="积压"
        style=" position: absolute;left: 480px;z-index: 2;top: 10.5%;width: 12px;height: 12px;"
      />
      <img
        src="../../../img/yellow.jpg"
        alt
        id="flag23"
        title="积压"
        style=" position: absolute;left: 490px;z-index: 2;top: 10.5%;width: 12px;height: 12px;"
      />
      <img
        src="../../../img/yellow.jpg"
        alt
        id="flag24"
        title="积压"
        style=" position: absolute;left: 500px;z-index: 2;top: 10.5%;width: 12px;height: 12px;"
      />
      <img
        src="../../../img/yellow.jpg"
        alt
        id="flag25"
        title="积压"
        style=" position: absolute;left: 510px;z-index: 2;top: 10.5%;width: 12px;height: 12px;"
      />
      <img
        src="../../../img/yellow.jpg"
        alt
        id="flag26"
        title="积压"
        style=" position: absolute;left: 520px;z-index: 2;top: 10.5%;width: 12px;height: 12px;"
      />
      <img
        src="../../../img/yellow.jpg"
        alt
        id="flag27"
        title="积压"
        style=" position: absolute;left: 530px;z-index: 2;top: 10.5%;width: 12px;height: 12px;"
      />
      <img
        src="../../../img/yellow.jpg"
        alt
        id="flag28"
        title="积压"
        style=" position: absolute;left: 540px;z-index: 2;top: 10.5%;width: 12px;height: 12px;"
      />
      <img
        src="../../../img/yellow.jpg"
        alt
        id="flag29"
        title="积压"
        style=" position: absolute;left: 570px;z-index: 2;top: 10.5%;width: 12px;height: 12px;"
      />
      <img
        src="../../../img/yellow.jpg"
        alt
        id="flag30"
        title="积压"
        style=" position: absolute;left: 580px;z-index: 2;top: 10.5%;width: 12px;height: 12px;"
      />
      <img
        src="../../../img/yellow.jpg"
        alt
        id="flag31"
        title="积压"
        style=" position: absolute;left: 590px;z-index: 2;top: 10.5%;width: 12px;height: 12px;"
      />
      <img
        src="../../../img/yellow.jpg"
        alt
        id="flag32"
        title="积压"
        style=" position: absolute;left: 600px;z-index: 2;top: 10.5%;width: 12px;height: 12px;"
      />
      <img
        src="../../../img/yellow.jpg"
        alt
        id="flag33"
        title="积压"
        style=" position: absolute;left: 610px;z-index: 2;top: 10.5%;width: 12px;height: 12px;"
      />
      <img
        src="../../../img/yellow.jpg"
        alt
        id="flag34"
        title="积压"
        style=" position: absolute;left: 620px;z-index: 2;top: 10.5%;width: 12px;height: 12px;"
      />
      <img
        src="../../../img/yellow.jpg"
        alt
        id="flag35"
        title="积压"
        style=" position: absolute;left: 630px;z-index: 2;top: 10.5%;width: 12px;height: 12px;"
      />
      <img
        src="../../../img/yellow.jpg"
        alt
        id="flag36"
        title="积压"
        style=" position: absolute;left: 640px;z-index: 2;top: 10.5%;width: 12px;height: 12px;"
      />
      <img
        src="../../../img/yellow.jpg"
        alt
        id="flag37"
        title="积压"
        style=" position: absolute;left: 650px;z-index: 2;top: 10.5%;width: 12px;height: 12px;"
      />
      <img
        src="../../../img/yellow.jpg"
        alt
        id="flag38"
        title="积压"
        style=" position: absolute;left: 660px;z-index: 2;top: 10.5%;width: 12px;height: 12px;"
      />
      <img
        src="../../../img/yellow.jpg"
        alt
        id="flag39"
        title="积压"
        style=" position: absolute;left: 670px;z-index: 2;top: 10.5%;width: 12px;height: 12px;"
      />
      <img
        src="../../../img/yellow.jpg"
        alt
        id="flag40"
        title="积压"
        style=" position: absolute;left: 680px;z-index: 2;top: 10.5%;width: 12px;height: 12px;"
      />
      <img
        src="../../../img/yellow.jpg"
        alt
        id="flag41"
        title="积压"
        style=" position: absolute;left: 690px;z-index: 2;top: 10.5%;width: 12px;height: 12px;"
      />
      <img
        src="../../../img/yellow.jpg"
        alt
        id="flag42"
        title="积压"
        style=" position: absolute;left: 700px;z-index: 2;top: 10.5%;width: 12px;height: 12px;"
      />
      <img
        src="../../../img/yellow.jpg"
        alt
        id="flag43"
        title="积压"
        style=" position: absolute;left: 710px;z-index: 2;top: 10.5%;width: 12px;height: 12px;"
      />
      <img
        src="../../../img/yellow.jpg"
        alt
        id="flag44"
        title="积压"
        style=" position: absolute;left: 720px;z-index: 2;top: 10.5%;width: 12px;height: 12px;"
      />
      <img
        src="../../../img/yellow.jpg"
        alt
        id="flag45"
        title="积压"
        style=" position: absolute;left: 730px;z-index: 2;top: 10.5%;width: 12px;height: 12px;"
      />
      <img
        src="../../../img/yellow.jpg"
        alt
        id="flag46"
        title="积压"
        style=" position: absolute;left: 740px;z-index: 2;top: 10.5%;width: 12px;height: 12px;"
      />
      <img
        src="../../../img/yellow.jpg"
        alt
        id="flag47"
        title="积压"
        style=" position: absolute;left: 750px;z-index: 2;top: 10.5%;width: 12px;height: 12px;"
      />
      <img
        src="../../../img/yellow.jpg"
        alt
        id="flag48"
        title="积压"
        style=" position: absolute;left: 760px;z-index: 2;top: 10.5%;width: 12px;height: 12px;"
      />
      <img
        src="../../../img/yellow.jpg"
        alt
        id="flag49"
        title="积压"
        style=" position: absolute;left: 770px;z-index: 2;top: 10.5%;width: 12px;height: 12px;"
      />
      <img
        src="../../../img/yellow.jpg"
        alt
        id="flag50"
        title="积压"
        style=" position: absolute;left: 780px;z-index: 2;top: 10.5%;width: 12px;height: 12px;"
      />
      <img
        src="../../../img/yellow.jpg"
        alt
        id="flag51"
        title="积压"
        style=" position: absolute;left: 790px;z-index: 2;top: 10.5%;width: 12px;height: 12px;"
      />
      <img
        src="../../../img/yellow.jpg"
        alt
        id="flag52"
        title="积压"
        style=" position: absolute;left: 800px;z-index: 2;top: 10.5%;width: 12px;height: 12px;"
      />
      <img
        src="../../../img/yellow.jpg"
        alt
        id="flag53"
        title="积压"
        style=" position: absolute;left: 810px;z-index: 2;top: 10.5%;width: 12px;height: 12px;"
      />
      <img
        src="../../../img/yellow.jpg"
        alt
        id="flag54"
        title="积压"
        style=" position: absolute;left: 820px;z-index: 2;top: 10.5%;width: 12px;height: 12px;"
      />
      <img
        src="../../../img/yellow.jpg"
        alt
        id="flag55"
        title="积压"
        style=" position: absolute;left: 830px;z-index: 2;top: 10.5%;width: 12px;height: 12px;"
      />
      <img
        src="../../../img/yellow.jpg"
        alt
        id="flag56"
        title="积压"
        style=" position: absolute;left: 840px;z-index: 2;top: 10.5%;width: 12px;height: 12px;"
      />
      <img
        src="../../../img/yellow.jpg"
        alt
        id="flag57"
        title="积压"
        style=" position: absolute;left: 850px;z-index: 2;top: 10.5%;width: 12px;height: 12px;"
      />
      <img
        src="../../../img/yellow.jpg"
        alt
        id="flag58"
        title="积压"
        style=" position: absolute;left: 860px;z-index: 2;top: 10.5%;width: 12px;height: 12px;"
      />
      <img
        src="../../../img/yellow.jpg"
        alt
        id="flag59"
        title="积压"
        style=" position: absolute;left: 870px;z-index: 2;top: 10.5%;width: 12px;height: 12px;"
      />
      <img
        src="../../../img/yellow.jpg"
        alt
        id="flag60"
        title="积压"
        style=" position: absolute;left: 880px;z-index: 2;top: 10.5%;width: 12px;height: 12px;"
      />
      <img
        src="../../../img/yellow.jpg"
        alt
        id="flag61"
        title="积压"
        style=" position: absolute;left: 890px;z-index: 2;top: 10.5%;width: 12px;height: 12px;"
      />
      <img
        src="../../../img/yellow.jpg"
        alt
        id="flag62"
        title="积压"
        style=" position: absolute;left: 900px;z-index: 2;top: 10.5%;width: 12px;height: 12px;"
      />
      <img
        src="../../../img/yellow.jpg"
        alt
        id="flag63"
        title="积压"
        style=" position: absolute;left: 910px;z-index: 2;top: 10.5%;width: 12px;height: 12px;"
      />
      <img
        src="../../../img/yellow.jpg"
        alt
        id="flag64"
        title="积压"
        style=" position: absolute;left: 920px;z-index: 2;top: 10.5%;width: 12px;height: 12px;"
      />
      <img
        src="../../../img/yellow.jpg"
        alt
        id="flag65"
        title="积压"
        style=" position: absolute;left: 930px;z-index: 2;top: 10.5%;width: 12px;height: 12px;"
      />
      <img
        src="../../../img/yellow.jpg"
        alt
        id="flag66"
        title="积压"
        style=" position: absolute;left: 940px;z-index: 2;top: 10.5%;width: 12px;height: 12px;"
      />
      <img
        src="../../../img/yellow.jpg"
        alt
        id="flag67"
        title="积压"
        style=" position: absolute;left: 950px;z-index: 2;top: 10.5%;width: 12px;height: 12px;"
      />
      <img
        src="../../../img/yellow.jpg"
        alt
        id="flag68"
        title="积压"
        style=" position: absolute;left: 960px;z-index: 2;top: 10.5%;width: 12px;height: 12px;"
      />
      <img
        src="../../../img/yellow.jpg"
        alt
        id="flag69"
        title="积压"
        style=" position: absolute;left: 970px;z-index: 2;top: 10.5%;width: 12px;height: 12px;"
      />
      <img
        src="../../../img/yellow.jpg"
        alt
        id="flag70"
        title="积压"
        style=" position: absolute;left: 980px;z-index: 2;top: 10.5%;width: 12px;height: 12px;"
      />
      <img
        src="../../../img/yellow.jpg"
        alt
        id="flag71"
        title="积压"
        style=" position: absolute;left: 990px;z-index: 2;top: 10.5%;width: 12px;height: 12px;"
      />
      <img
        src="../../../img/yellow.jpg"
        alt
        id="flag72"
        title="积压"
        style=" position: absolute;left: 1000px;z-index: 2;top: 10.5%;width: 12px;height: 12px;"
      />
      <img
        src="../../../img/yellow.jpg"
        alt
        id="flag73"
        title="积压"
        style=" position: absolute;left: 1010px;z-index: 2;top: 10.5%;width: 12px;height: 12px;"
      />
      <img
        src="../../../img/yellow.jpg"
        alt
        id="flag74"
        title="积压"
        style=" position: absolute;left: 1020px;z-index: 2;top: 10.5%;width: 12px;height: 12px;"
      />
      <img
        src="../../../img/yellow.jpg"
        alt
        id="flag75"
        title="积压"
        style=" position: absolute;left: 1030px;z-index: 2;top: 10.5%;width: 12px;height: 12px;"
      />
      <img
        src="../../../img/yellow.jpg"
        alt
        id="flag76"
        title="积压"
        style=" position: absolute;left: 1040px;z-index: 2;top: 10.5%;width: 12px;height: 12px;"
      />
      <img
        src="../../../img/yellow.jpg"
        alt
        id="flag77"
        title="积压"
        style=" position: absolute;left: 1050px;z-index: 2;top: 10.5%;width: 12px;height: 12px;"
      />
      <img
        src="../../../img/yellow.jpg"
        alt
        id="flag78"
        title="积压"
        style=" position: absolute;left: 1060px;z-index: 2;top: 10.5%;width: 12px;height: 12px;"
      />
      <img
        src="../../../img/yellow.jpg"
        alt
        id="flag79"
        title="积压"
        style=" position: absolute;left: 1070px;z-index: 2;top: 10.5%;width: 12px;height: 12px;"
      />
      <img
        src="../../../img/yellow.jpg"
        alt
        id="flag80"
        title="积压"
        style=" position: absolute;left: 1080px;z-index: 2;top: 10.5%;width: 12px;height: 12px;"
      />
      <img
        src="../../../img/yellow.jpg"
        alt
        id="flag81"
        title="积压"
        style=" position: absolute;left: 1090px;z-index: 2;top: 10.5%;width: 12px;height: 12px;"
      />
      <img
        src="../../../img/yellow.jpg"
        alt
        id="flag82"
        title="积压"
        style=" position: absolute;left: 1100px;z-index: 2;top: 10.5%;width: 12px;height: 12px;"
      />
      <img
        src="../../../img/yellow.jpg"
        alt
        id="flag83"
        title="积压"
        style=" position: absolute;left: 1110px;z-index: 2;top: 10.5%;width: 12px;height: 12px;"
      />
      <img
        src="../../../img/yellow.jpg"
        alt
        id="flag84"
        title="积压"
        style=" position: absolute;left: 1120px;z-index: 2;top: 10.5%;width: 12px;height: 12px;"
      />
      <img
        src="../../../img/yellow.jpg"
        alt
        id="flag85"
        title="积压"
        style=" position: absolute;left: 1130px;z-index: 2;top: 10.5%;width: 12px;height: 12px;"
      />
      <img
        src="../../../img/yellow.jpg"
        alt
        id="flag86"
        title="积压"
        style=" position: absolute;left: 1140px;z-index: 2;top: 10.5%;width: 12px;height: 12px;"
      />
      <img
        src="../../../img/yellow.jpg"
        alt
        id="flag87"
        title="积压"
        style=" position: absolute;left: 1160px;z-index: 2;top: 10.5%;width: 12px;height: 12px;"
      />
    </div>
    <kucunzhanshidetail :kcmxdialogVisible="kcmxDialog" @listenToChildEvent="closeDialog"></kucunzhanshidetail>
  </div>
</template>

<script>
import kucunzhanshidetail from "@/app_src/components/cangchu/kucunzhanshidetail";
export default {
  name: "TotalZYK",
  data() {
    return {
      kcmxDialog: false,
      width: 0,
      oldwidth: 0
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
    OpenDialog(type, val) {
      this.kcmxDialog = true;
      //console.log(type + val);
    },
    closeDialog(val) {
      this.kcmxDialog = val;
    },
    getPoint() {
      //let t=document.getElementById("TotalZYK").offsetLeft;
      let w = document.getElementById("ZYCPIC").offsetLeft;
      this.width = w;
    },
    setStyle(val) {
      let maxName = 86;
      for (let i = 0; i < maxName; i++) {
        let name = "flag" + i.toString();
        let currentWidth = document.getElementById(name).style.left;
        let targetWidth =
          parseInt(currentWidth.trim("px")) + val - this.oldwidth + "px";
        document.getElementById(name).style.left = targetWidth;
      }
      this.oldwidth = this.width;
      console.log("do");
    },
    debounce(fn, delay) {
      var delay = delay || 200;
      console.log(delay);
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
        this.width = document.getElementById("ZYCPIC").offsetLeft;
      });
    }
  },
  mounted() {
    this.getPoint();
    this.setStyle(this.width);
    this.observer();
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
    .ZYCPIC {
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
}
</style>


