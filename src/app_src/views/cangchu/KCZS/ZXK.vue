<template>
  <div
    style="text-align:center"
    usemap="#planetmap"
    id="TotalZXK"
    class="app-container calendar-list-container"
  >
    <!-- <img src="../../../img/ZXKdetail.png" border="0" usemap="#planetmap" alt="Planets" />
    <map name="planetmap" id="planetmap">
      <area shape="rect" coords="274, 120, 331, 384" @click="OpenDialog" />
      <area shape="rect" coords="1334, 170, 1393, 236" @click="OpenDialog" />
    </map>-->
    <div id="box" class="box">
      <img src="../../../img/ZXKPIC.png" id="ZXKPIC" border="0" usemap="#planetmap" alt="Planets" />
      <map name="planetmap" id="planetmap">
        <area shape="rect" coords="777, 18, 811, 57" title="1号库" @click="OpenDialog('ZXK','01')" />
        <area shape="rect" coords="777, 59, 811, 98" title="2号库" @click="OpenDialog('ZXK','02')" />
        <area shape="rect" coords="777, 100, 811, 139" title="3号库" @click="OpenDialog('ZXK','03')" />
        <area shape="rect" coords="777, 141, 811, 180" title="4号库" @click="OpenDialog('ZXK','04')" />
        <area shape="rect" coords="777, 182, 811, 221" title="5号库" @click="OpenDialog('ZXK','05')" />
        <area shape="rect" coords="777, 223, 811, 262" title="6号库" @click="OpenDialog('ZXK','06')" />
        <area shape="rect" coords="777, 264, 811, 303" title="7号库" @click="OpenDialog('ZXK','07')" />
        <area shape="rect" coords="777, 305, 811, 344" title="8号库" @click="OpenDialog('ZXK','08')" />
        <area shape="rect" coords="777, 346, 811, 385" title="9号库" @click="OpenDialog('ZXK','09')" />
        <area shape="rect" coords="777, 387, 811, 426" title="10号库" @click="OpenDialog('ZXK','10')" />
        <area shape="rect" coords="777, 428, 811, 467" title="11号库" @click="OpenDialog('ZXK','11')" />
        <area shape="rect" coords="692, 225, 739, 255" title="12号库" @click="OpenDialog('ZXK','12')" />
        <!-- <area shape="rect" coords="80, 215, 126, 245" title="12号库" @click="OpenDialog('ZXK','12')" />
        <area shape="rect" coords="80, 237, 126, 277" title="12号库" @click="OpenDialog('ZXK','12.2')" /> -->
        <area shape="rect" coords="692, 257, 739, 287" title="13号库" @click="OpenDialog('ZXK','13')" />
        <area shape="rect" coords="692, 289, 739, 319" title="14号库" @click="OpenDialog('ZXK','14')" />
        <area shape="rect" coords="524, 288, 645, 370" title="15号库" @click="OpenDialog('ZXK','15')" />
        <area shape="rect" coords="464, 215, 523, 296" title="16料场" @click="OpenDialog('ZXK','16')" />
        <area shape="rect" coords="318, 215, 438, 418" title="17料场" @click="OpenDialog('ZXK','17')" />
        <area shape="rect" coords="260, 215, 293, 348" title="18号活动棚" @click="OpenDialog('ZXK','18')" />
        <area shape="rect" coords="225, 215, 258, 348" title="19号活动棚" @click="OpenDialog('ZXK','19')" />
        <area shape="rect" coords="188, 38, 222, 192" title="20号料场" @click="OpenDialog('ZXK','20')" />
        <area shape="rect" coords="224, 38, 256, 192" title="21号活动料棚" @click="OpenDialog('ZXK','21')" />
        <area shape="rect" coords="258, 38, 292, 192" title="22号活动料棚" @click="OpenDialog('ZXK','22')" />
        <area shape="rect" coords="331, 38, 367, 192" title="23号料场" @click="OpenDialog('ZXK','23')" />
        <area shape="rect" coords="369, 38, 405, 192" title="24号活动料棚" @click="OpenDialog('ZXK','24')" />
        <area shape="rect" coords="407, 38, 443, 192" title="25号活动料棚" @click="OpenDialog('ZXK','25')" />
        <area shape="rect" coords="462, 163, 511, 192" title="26号库" @click="OpenDialog('ZXK','26')" />
      </map>
      <div name="1号区域">
        <img
          src="../../../img/red.jpg"
          alt
          id="flag0"
          title="积压"
          style=" position: absolute;left: 775px;z-index: 2;top: 2.6%;width: 12px;height: 12px;"
           v-show="StatusStr[3*(1-1)]==='1'"
        />
        <img
          src="../../../img/blue.jpg"
          alt
          id="flag1"
          title="正常"
          style=" position: absolute;left: 798px;z-index: 2;top: 2.6%;width: 12px;height: 12px;"
           v-show="StatusStr[3*(1-1)+1]==='1'"
        />
        <img
          src="../../../img/yellow.jpg"
          alt
          id="flag2"
          title="空缺"
          style=" position: absolute;left: 775px;z-index: 2;top: 7.5%;width: 12px;height: 12px;"
           v-show="StatusStr[3*(1-1)+2]==='1'"
        />
      </div>
      <div name="2号区域">
        <img
          src="../../../img/red.jpg"
          alt
          id="flag3"
          title="积压"
          style=" position: absolute;left: 775px;z-index: 2;top: 9.6%;width: 12px;height: 12px;"
           v-show="StatusStr[3*(2-1)]==='1'"
        />
        <img
          src="../../../img/blue.jpg"
          alt
          id="flag4"
          title="正常"
          style=" position: absolute;left: 798px;z-index: 2;top: 9.6%;width: 12px;height: 12px;"
          v-show="StatusStr[3*(2-1)+1]==='1'"
        />
        <img
          src="../../../img/yellow.jpg"
          alt
          id="flag5"
          title="空缺"
          style=" position: absolute;left: 775px;z-index: 2;top: 14.4%;width: 12px;height: 12px;"
          v-show="StatusStr[3*(2-1)+2]==='1'"
        />
      </div>
      <div name="3号区域">
        <img
          src="../../../img/red.jpg"
          alt
          id="flag6"
          title="积压"
          style=" position: absolute;left: 775px;z-index: 2;top: 16.5%;width: 12px;height: 12px;"
          v-show="StatusStr[3*(3-1)]==='1'"
        />
        <img
          src="../../../img/blue.jpg"
          alt
          id="flag7"
          title="正常"
          style=" position: absolute;left: 798px;z-index: 2;top: 16.5%;width: 12px;height: 12px;"
          v-show="StatusStr[3*(3-1)+1]==='1'"
        />
        <img
          src="../../../img/yellow.jpg"
          alt
          id="flag8"
          title="空缺"
          style=" position: absolute;left: 775px;z-index: 2;top: 21.4%;width: 12px;height: 12px;"
          v-show="StatusStr[3*(3-1)+2]==='1'"
        />
      </div>
      <div name="4号区域">
        <img
          src="../../../img/red.jpg"
          alt
          id="flag9"
          title="积压"
          style=" position: absolute;left: 775px;z-index: 2;top: 23.5%;width: 12px;height: 12px;"
          v-show="StatusStr[3*(4-1)]==='1'"
        />
        <img
          src="../../../img/blue.jpg"
          alt
          id="flag10"
          title="正常"
          style=" position: absolute;left: 798px;z-index: 2;top: 23.5%;width: 12px;height: 12px;"
          v-show="StatusStr[3*(4-1)+1]==='1'"
        />
        <img
          src="../../../img/yellow.jpg"
          alt
          id="flag11"
          title="空缺"
          style=" position: absolute;left: 775px;z-index: 2;top: 28.4%;width: 12px;height: 12px;"
          v-show="StatusStr[3*(4-1)+2]==='1'"
        />
      </div>
      <div name="5号区域">
        <img
          src="../../../img/red.jpg"
          alt
          id="flag12"
          title="积压"
          style=" position: absolute;left: 775px;z-index: 2;top: 30.5%;width: 12px;height: 12px;"
          v-show="StatusStr[3*(5-1)]==='1'"
        />
        <img
          src="../../../img/blue.jpg"
          alt
          id="flag13"
          title="正常"
          style=" position: absolute;left: 798px;z-index: 2;top: 30.5%;width: 12px;height: 12px;"
          v-show="StatusStr[3*(5-1)+1]==='1'"
        />
        <img
          src="../../../img/yellow.jpg"
          alt
          id="flag14"
          title="空缺"
          style=" position: absolute;left: 775px;z-index: 2;top: 35.4%;width: 12px;height: 12px;"
          v-show="StatusStr[3*(5-1)+2]==='1'"
        />
      </div>
      <div name="6号区域">
        <img
          src="../../../img/red.jpg"
          alt
          id="flag15"
          title="积压"
          style=" position: absolute;left: 775px;z-index: 2;top: 37.4%;width: 12px;height: 12px;"
          v-show="StatusStr[3*(6-1)]==='1'"
        />
        <img
          src="../../../img/blue.jpg"
          alt
          id="flag16"
          title="正常"
          style=" position: absolute;left: 798px;z-index: 2;top: 37.4%;width: 12px;height: 12px;"
          v-show="StatusStr[3*(5-1)]+1==='1'"
        />
        <img
          src="../../../img/yellow.jpg"
          alt
          id="flag17"
          title="空缺"
          style=" position: absolute;left: 775px;z-index: 2;top: 42.2%;width: 12px;height: 12px;"
          v-show="StatusStr[3*(5-1)+2]==='1'"
        />
      </div>
      <div name="7号区域">
        <img
          src="../../../img/red.jpg"
          alt
          id="flag18"
          title="积压"
          style=" position: absolute;left: 775px;z-index: 2;top: 44.3%;width: 12px;height: 12px;"
          v-show="StatusStr[3*(7-1)]==='1'"
        />
        <img
          src="../../../img/blue.jpg"
          alt
          id="flag19"
          title="正常"
          style=" position: absolute;left: 798px;z-index: 2;top: 44.3%;width: 12px;height: 12px;"
          v-show="StatusStr[3*(7-1)+1]==='1'"
        />
        <img
          src="../../../img/yellow.jpg"
          alt
          id="flag20"
          title="空缺"
          style=" position: absolute;left: 775px;z-index: 2;top: 49.1%;width: 12px;height: 12px;"
          v-show="StatusStr[3*(8-1)+2]==='1'"
        />
      </div>
      <div name="8号区域">
        <img
          src="../../../img/red.jpg"
          alt
          id="flag21"
          title="积压"
          style=" position: absolute;left: 775px;z-index: 2;top: 51.2%;width: 12px;height: 12px;"
          v-show="StatusStr[3*(8-1)]==='1'"
        />
        <img
          src="../../../img/blue.jpg"
          alt
          id="flag22"
          title="正常"
          style=" position: absolute;left: 798px;z-index: 2;top: 51.2%;width: 12px;height: 12px;"
          v-show="StatusStr[3*(8-1)+1]==='1'"
        />
        <img
          src="../../../img/yellow.jpg"
          alt
          id="flag23"
          title="空缺"
          style=" position: absolute;left: 775px;z-index: 2;top: 56%;width: 12px;height: 12px;"
          v-show="StatusStr[3*(8-1)+2]==='1'"
        />
      </div>
      <div name="9号区域">
        <img
          src="../../../img/red.jpg"
          alt
          id="flag24"
          title="积压"
          style=" position: absolute;left: 775px;z-index: 2;top: 58.1%;width: 12px;height: 12px;"
          v-show="StatusStr[3*(9-1)]==='1'"
        />
        <img
          src="../../../img/blue.jpg"
          alt
          id="flag25"
          title="正常"
          style=" position: absolute;left: 798px;z-index: 2;top: 58.1%;width: 12px;height: 12px;"
          v-show="StatusStr[3*(9-1)+1]==='1'"
        />
        <img
          src="../../../img/yellow.jpg"
          alt
          id="flag26"
          title="空缺"
          style=" position: absolute;left: 775px;z-index: 2;top: 63%;width: 12px;height: 12px;"
          v-show="StatusStr[3*(9-1)+2]==='1'"
        />
      </div>
      <div name="10号区域">
        <img
          src="../../../img/red.jpg"
          alt
          id="flag27"
          title="积压"
          style=" position: absolute;left: 775px;z-index: 2;top: 65.1%;width: 12px;height: 12px;"
          v-show="StatusStr[3*(10-1)]==='1'"
        />
        <img
          src="../../../img/blue.jpg"
          alt
          id="flag28"
          title="正常"
          style=" position: absolute;left: 798px;z-index: 2;top: 65.1%;width: 12px;height: 12px;"
          v-show="StatusStr[3*(10-1)+1]==='1'"
        />
        <img
          src="../../../img/yellow.jpg"
          alt
          id="flag29"
          title="空缺"
          style=" position: absolute;left: 775px;z-index: 2;top: 69.9%;width: 12px;height: 12px;"
          v-show="StatusStr[3*(10-1)+2]==='1'"
        />
      </div>
      <div name="11号区域">
        <img
          src="../../../img/red.jpg"
          alt
          id="flag30"
          title="积压"
          style=" position: absolute;left: 775px;z-index: 2;top: 72%;width: 12px;height: 12px;"
          v-show="StatusStr[3*(11-1)]==='1'"
        />
        <img
          src="../../../img/blue.jpg"
          alt
          id="flag31"
          title="正常"
          style=" position: absolute;left: 798px;z-index: 2;top: 72%;width: 12px;height: 12px;"
          v-show="StatusStr[3*(11-1)+1]==='1'"
        />
        <img
          src="../../../img/yellow.jpg"
          alt
          id="flag32"
          title="空缺"
          style=" position: absolute;left: 775px;z-index: 2;top: 76.9%;width: 12px;height: 12px;"
          v-show="StatusStr[3*(11-1)+2]==='1'"
        />
      </div>
      <div name="12号区域">
        <img
          src="../../../img/red.jpg"
          alt
          id="flag33"
          title="积压"
          style=" position: absolute;left: 691px;z-index: 2;top: 37.4%;width: 12px;height: 12px;"
          v-show="StatusStr[3*(12-1)]==='1'"
        />
        <img
          src="../../../img/blue.jpg"
          alt
          id="flag34"
          title="正常"
          style="position: absolute;left: 726px;z-index: 2;top: 37.4%;width: 12px;height: 12px;"
          v-show="StatusStr[3*(12-1)+1]==='1'"
        />
        <img
          src="../../../img/yellow.jpg"
          alt
          id="flag35"
          title="空缺"
          style="position: absolute;left: 691px;z-index: 2;top: 40.3%;width: 12px;height: 12px;"
          v-show="StatusStr[3*(12-1)+2]==='1'"
        />
      </div>
      <div name="13号区域">
        <img
          src="../../../img/red.jpg"
          alt
          id="flag36"
          title="积压"
          style=" position: absolute;left: 691px;z-index: 2;top: 42.5%;width: 12px;height: 12px;"
          v-show="StatusStr[3*(13-1)]==='1'"
        />
        <img
          src="../../../img/blue.jpg"
          alt
          id="flag37"
          title="正常"
          style="position: absolute;left: 726px;z-index: 2;top: 42.5%;width: 12px;height: 12px;"
          v-show="StatusStr[3*(13-1)+1]==='1'"
        />
        <img
          src="../../../img/yellow.jpg"
          alt
          id="flag38"
          title="空缺"
          style="position: absolute;left: 691px;z-index: 2;top: 45.6%;width: 12px;height: 12px;"
          v-show="StatusStr[3*(13-1)+2]==='1'"
        />
      </div>
      <div name="14号区域">
        <img
          src="../../../img/red.jpg"
          alt
          id="flag39"
          title="积压"
          style=" position: absolute;left: 691px;z-index: 2;top: 47.7%;width: 12px;height: 12px;"
          v-show="StatusStr[3*(14-1)]==='1'"
        />
        <img
          src="../../../img/blue.jpg"
          alt
          id="flag40"
          title="正常"
          style="position: absolute;left: 726px;z-index: 2;top: 47.7%;width: 12px;height: 12px;"
          v-show="StatusStr[3*(14-1)+1]==='1'"
        />
        <img
          src="../../../img/yellow.jpg"
          alt
          id="flag41"
          title="空缺"
          style="position: absolute;left: 691px;z-index: 2;top: 50.6%;width: 12px;height: 12px;"
          v-show="StatusStr[3*(14-1)+2]==='1'"
        />
      </div>
      <div name="15号区域">
        <img
          src="../../../img/red.jpg"
          alt
          id="flag42"
          title="积压"
          style=" position: absolute;left: 523px;z-index: 2;top: 47.9%;width: 12px;height: 12px;"
          v-show="StatusStr[3*(15-1)]==='1'"
        />
        <img
          src="../../../img/blue.jpg"
          alt
          id="flag43"
          title="正常"
          style="position: absolute;left: 631px;z-index: 2;top: 47.9%;width: 12px;height: 12px;"
          v-show="StatusStr[3*(15-1)+1]==='1'"
        />
        <img
          src="../../../img/yellow.jpg"
          alt
          id="flag44"
          title="空缺"
          style="position: absolute;left: 523px;z-index: 2;top: 59.45%;width: 12px;height: 12px;"
          v-show="StatusStr[3*(15-1)+2]==='1'"
        />
      </div>
      <div name="16号区域">
        <img
          src="../../../img/red.jpg"
          alt
          id="flag45"
          title="积压"
          style=" position: absolute;left: 463px;z-index: 2;top: 35.7%;width: 12px;height: 12px;"
          v-show="StatusStr[3*(16-1)]==='1'"
        />
        <img
          src="../../../img/blue.jpg"
          alt
          id="flag46"
          title="正常"
          style="position: absolute;left: 510px;z-index: 2;top: 35.7%;width: 12px;height: 12px;"
          v-show="StatusStr[3*(16-1)+1]==='1'"
        />
        <img
          src="../../../img/yellow.jpg"
          alt
          id="flag47"
          title="空缺"
          style="position: absolute;left: 463px;z-index: 2;top: 47.4%;width: 12px;height: 12px;"
          v-show="StatusStr[3*(16-1)+2]==='1'"
        />
      </div>
      <div name="17号区域">
        <img
          src="../../../img/red.jpg"
          alt
          id="flag48"
          title="积压"
          style=" position: absolute;left: 318px;z-index: 2;top: 35.5%;width: 12px;height: 12px;"
          v-show="StatusStr[3*(17-1)]==='1'"
        />
        <img
          src="../../../img/blue.jpg"
          alt
          id="flag49"
          title="正常"
          style="position: absolute;left: 426px;z-index: 2;top: 35.7%;width: 12px;height: 12px;"
          v-show="StatusStr[3*(17-1)+1]==='1'"
        />
        <img
          src="../../../img/yellow.jpg"
          alt
          id="flag50"
          title="空缺"
          style="position: absolute;left: 318px;z-index: 2;top: 68.2%;width: 12px;height: 12px;"
          v-show="StatusStr[3*(17-1)+2]==='1'"
        />
      </div>
      <div name="18号区域">
        <img
          src="../../../img/red.jpg"
          alt
          id="flag54"
          title="积压"
          style=" position: absolute;left: 259px;z-index: 2;top: 35.7%;width: 12px;height: 12px;"
          v-show="StatusStr[3*(18-1)]==='1'"
        />
        <img
          src="../../../img/blue.jpg"
          alt
          id="flag55"
          title="正常"
          style="position: absolute;left: 282px;z-index: 2;top: 35.7%;width: 12px;height: 12px;"
          v-show="StatusStr[3*(18-1)+1]==='1'"
        />
        <img
          src="../../../img/yellow.jpg"
          alt
          id="flag56"
          title="空缺"
          style="position: absolute;left: 259px;z-index: 2;top: 56%;width: 12px;height: 12px;"
          v-show="StatusStr[3*(18-1)+2]==='1'"
        />
      </div>
      <div name="19号区域">
        <img
          src="../../../img/red.jpg"
          alt
          id="flag51"
          title="积压"
          style=" position: absolute;left: 223px;z-index: 2;top: 35.7%;width: 12px;height: 12px;"
          v-show="StatusStr[3*(19-1)]==='1'"
        />
        <img
          src="../../../img/blue.jpg"
          alt
          id="flag52"
          title="正常"
          style="position: absolute;left: 246px;z-index: 2;top: 35.7%;width: 12px;height: 12px;"
          v-show="StatusStr[3*(19-1)+1]==='1'"
        />
        <img
          src="../../../img/yellow.jpg"
          alt
          id="flag53"
          title="空缺"
          style="position: absolute;left: 223px;z-index: 2;top: 56%;width: 12px;height: 12px;"
          v-show="StatusStr[3*(19-1)+2]==='1'"
        />
      </div>
      <div name="20号区域">
        <img
          src="../../../img/red.jpg"
          alt
          id="flag57"
          title="积压"
          style=" position: absolute;left: 187px;z-index: 2;top: 6.2%;width: 12px;height: 12px;"
          v-show="StatusStr[3*(20-1)]==='1'"
        />
        <img
          src="../../../img/blue.jpg"
          alt
          id="flag58"
          title="正常"
          style="position: absolute;left: 210px;z-index: 2;top: 6.2%;width: 12px;height: 12px;"
          v-show="StatusStr[3*(20-1)+1]==='1'"
        />
        <img
          src="../../../img/yellow.jpg"
          alt
          id="flag59"
          title="空缺"
          style="position: absolute;left: 187px;z-index: 2;top: 30%;width: 12px;height: 12px;"
          v-show="StatusStr[3*(20-1)+2]==='1'"
        />
      </div>
      <div name="22号区域">
        <img
          src="../../../img/red.jpg"
          alt
          id="flag60"
          title="积压"
          style=" position: absolute;left: 259px;z-index: 2;top: 6.2%;width: 12px;height: 12px;"
          v-show="StatusStr[3*(22-1)]==='1'"
        />
        <img
          src="../../../img/blue.jpg"
          alt
          id="flag61"
          title="正常"
          style="position: absolute;left: 282px;z-index: 2;top: 6.2%;width: 12px;height: 12px;"
          v-show="StatusStr[3*(22-1)+1]==='1'"
        />
        <img
          src="../../../img/yellow.jpg"
          alt
          id="flag62"
          title="空缺"
          style="position: absolute;left: 259px;z-index: 2;top: 30%;width: 12px;height: 12px;"
          v-show="StatusStr[3*(22-1)+2]==='1'"
        />
      </div>
      <div name="21号区域">
        <img
          src="../../../img/red.jpg"
          alt
          id="flag63"
          title="积压"
          style=" position: absolute;left: 223px;z-index: 2;top: 6.2%;width: 12px;height: 12px;"
          v-show="StatusStr[3*(21-1)]==='1'"
        />
        <img
          src="../../../img/blue.jpg"
          alt
          id="flag64"
          title="正常"
          style="position: absolute;left: 246px;z-index: 2;top: 6.2%;width: 12px;height: 12px;"
          v-show="StatusStr[3*(21-1)+1]==='1'"
        />
        <img
          src="../../../img/yellow.jpg"
          alt
          id="flag65"
          title="空缺"
          style="position: absolute;left: 223px;z-index: 2;top: 30%;width: 12px;height: 12px;"
          v-show="StatusStr[3*(21-1)+2]==='1'"
        />
      </div>
      <div name="23号区域">
        <img
          src="../../../img/red.jpg"
          alt
          id="flag66"
          title="积压"
          style=" position: absolute;left: 331px;z-index: 2;top: 6.2%;width: 12px;height: 12px;"
          v-show="StatusStr[3*(23-1)]==='1'"
        />
        <img
          src="../../../img/blue.jpg"
          alt
          id="flag67"
          title="正常"
          style="position: absolute;left: 354px;z-index: 2;top: 6.2%;width: 12px;height: 12px;"
          v-show="StatusStr[3*(23-1)+1]==='1'"
        />
        <img
          src="../../../img/yellow.jpg"
          alt
          id="flag68"
          title="空缺"
          style="position: absolute;left: 331px;z-index: 2;top: 30%;width: 12px;height: 12px;"
          v-show="StatusStr[3*(23-1)+2]==='1'"
        />
      </div>
      <div name="24号区域">
        <img
          src="../../../img/red.jpg"
          alt
          id="flag69"
          title="积压"
          style=" position: absolute;left: 367px;z-index: 2;top: 6.2%;width: 12px;height: 12px;"
          v-show="StatusStr[3*(24-1)]==='1'"
        />
        <img
          src="../../../img/blue.jpg"
          alt
          id="flag70"
          title="正常"
          style="position: absolute;left: 390px;z-index: 2;top: 6.2%;width: 12px;height: 12px;"
          v-show="StatusStr[3*(24-1)+1]==='1'"
        />
        <img
          src="../../../img/yellow.jpg"
          alt
          id="flag71"
          title="空缺"
          style="position: absolute;left: 367px;z-index: 2;top: 30%;width: 12px;height: 12px;"
          v-show="StatusStr[3*(24-1)+2]==='1'"
        />
      </div>
      <div name="25号区域">
        <img
          src="../../../img/red.jpg"
          alt
          id="flag72"
          title="积压"
          style=" position: absolute;left: 403px;z-index: 2;top: 6.2%;width: 12px;height: 12px;"
          v-show="StatusStr[3*(25-1)]==='1'"
        />
        <img
          src="../../../img/blue.jpg"
          alt
          id="flag73"
          title="正常"
          style="position: absolute;left: 426px;z-index: 2;top: 6.2%;width: 12px;height: 12px;"
          v-show="StatusStr[3*(25-1)+1]==='1'"
        />
        <img
          src="../../../img/yellow.jpg"
          alt
          id="flag74"
          title="空缺"
          style="position: absolute;left: 403px;z-index: 2;top: 30%;width: 12px;height: 12px;"
          v-show="StatusStr[3*(25-1)+2]==='1'"
        />
      </div>
      <div name="26号区域">
        <img
          src="../../../img/red.jpg"
          alt
          id="flag75"
          title="积压"
          style=" position: absolute;left: 462px;z-index: 2;top: 27%;width: 12px;height: 12px;"
          v-show="StatusStr[3*(26-1)]==='1'"
        />
        <img
          src="../../../img/blue.jpg"
          alt
          id="flag76"
          title="正常"
          style="position: absolute;left: 498px;z-index: 2;top: 27%;width: 12px;height: 12px;"
          v-show="StatusStr[3*(26-1)+1]==='1'"
        />
        <img
          src="../../../img/yellow.jpg"
          alt
          id="flag77"
          title="空缺"
          style="position: absolute;left: 462px;z-index: 2;top: 30%;width: 12px;height: 12px;"
          v-show="StatusStr[3*(26-1)+2]==='1'"
        />
      </div>
    </div>

    <kucunzhanshidetail :kcmxdialogVisible="kcmxDialog" @listenToChildEvent="closeDialog" ref="kucunzhanshidetail"></kucunzhanshidetail>
  </div>
</template>

<script>
import kucunzhanshidetail from "@/app_src/components/cangchu/kucunzhanshidetail";
import { GetFacStatus } from "@/app_src/api/cangchu/KCZS/ZXK";
export default {
  name: "TotalZXK",
  props:["FacCode"],
  data() {
    return {
      kcmxDialog: false,
      width: 0,
      oldwidth: 0,
      listQuery: {
        FacCode: this.FacCode
      },
      statusCode:"",
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
       this.statusCode=this.FacCode+val;
      this.kcmxDialog = true;
      this.$refs.kucunzhanshidetail.getValue(this.statusCode);
      this.$refs.kucunzhanshidetail.getList();
      this.kcmxDialog = true;
      //console.log(type + val);
    },
    closeDialog(val) {
      this.kcmxDialog = val;
    },
    getPoint() {
      //let t=document.getElementById("TotalZYK").offsetLeft;
      let w = document.getElementById("ZXKPIC").offsetLeft;
      this.width = w;
    },
    setStyle(val) {
      let maxName = 78;
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
        this.width = document.getElementById("ZXKPIC").offsetLeft;
      });
    }
  },
  mounted() {
    this.getPoint();
    this.setStyle(this.width);
    this.observer();
  },
  created(){
    this.getList();
  }
};
</script>



<style lang="scss" scoped>
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
}
</style>


