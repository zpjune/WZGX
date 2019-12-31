<template>
  <div
    style="text-align:center"
    usemap="#planetmap"
    id="TotalGDQCK"
    class="app-container calendar-list-container"
  >
    <div class="box" id="box">
      <img
        id="GDPIC"
        src="../../../../img/GDPIC.jpg"
        border="0"
        usemap="#planetmap"
        alt="Planets"
        class="ZYCPIC"
        style="width:1000px;height:600px;vertical-align:text-top"
      />
      <map name="planetmap" id="planetmap">
        <area shape="rect" coords="87,135,207,162" title="7号库"  @click="enter('07')">
        <area shape="rect" coords="87,198,207,225" title="5号库"  @click="enter('05')">
        <area shape="rect" coords="99,107,216,131" title="8料台"  @click="enter('08')">
        <area shape="rect" coords="99,193,216,189" title="6料台"  @click="enter('06')">
        <area shape="rect" coords="99,224,216,249" title="4料台"  @click="enter('04')">
        <area shape="rect" coords="99,250,216,277" title="3号"  @click="enter('03')">
        <area shape="rect" coords="99,283,216,308" title="2料台"  @click="enter('02')">
        <area shape="rect" coords="99,310,216,336" title="1"  @click="enter('01')">
        <area shape="rect" coords="99,341,216,366" title="57料台"  @click="enter('57')">
        <area shape="rect" coords="247,166,426,191" title="18料台"  @click="enter('18')">
        <area shape="rect" coords="247,216,333,250" title="16"  @click="enter('16')">
        <area shape="rect" coords="337,216,423,250" title="17"  @click="enter('17')">
        <area shape="rect" coords="248,254,334,276" title="13料台"  @click="enter('13')">
        <area shape="rect" coords="336,254,409,276" title="14料台"  @click="enter('14')">
        <area shape="rect" coords="250,279,409,276" title="14料台"  @click="enter('14')">
        <area shape="rect" coords="250,278,334,295" title="11料台"  @click="enter('11')">
        <area shape="rect" coords="337,278,408,295" title="12料台"  @click="enter('12')">
        <area shape="rect" coords="250,313,408,295" title="10料棚"  @click="enter('10')">
        <area shape="rect" coords="250,360,434,400" title="9料场"  @click="enter('9')">
        <area shape="rect" coords="467,51,495,78" title="38"  @click="enter('38')">
        <area shape="rect" coords="497,51,525,78" title="39"  @click="enter('39')">
        <area shape="rect" coords="527,51,643,78" title="40料棚"  @click="enter('40')">
        <area shape="rect" coords="468,79,519,97" title="37料台"  @click="enter('37')">
        <area shape="rect" coords="484,99,524,122" title="32料台"  @click="enter('32')">
        <area shape="rect" coords="543,124,598,146" title="33料台"  @click="enter('33')">
        <area shape="rect" coords="485,147,524,169" title="29"  @click="enter('29')">
        <area shape="rect" coords="526,148,562,170" title="30"  @click="enter('30')">
        <area shape="rect" coords="565,148,597,171" title="31"  @click="enter('31')">
        <area shape="rect" coords="482,171,597,193" title="28料台"  @click="enter('28')">
        <area shape="rect" coords="482,210,547,244" title="26"  @click="enter('26')">
        <area shape="rect" coords="548,210,613,244" title="27"  @click="enter('27')">
        <area shape="rect" coords="485,273,613,308" title="24"  @click="enter('24')">
        <area shape="rect" coords="485,343,613,376" title="22"  @click="enter('22')">
        <area shape="rect" coords="642,90,701,164" title="54料场"  @click="enter('54')">
        <area shape="rect" coords="704,90,731,164" title="52料台"  @click="enter('52')">
        <area shape="rect" coords="732,90,772,163" title="53"  @click="enter('53')">
        <area shape="rect" coords="795,90,937,163" title="56料场"  @click="enter('56')">
        <area shape="rect" coords="648,210,690,242" title="49"  @click="enter('49')">
        <area shape="rect" coords="689,210,733,242" title="50"  @click="enter('50')">
        <area shape="rect" coords="733,210,774,242" title="51"  @click="enter('51')">
        <area shape="rect" coords="647,275,774,304" title="47"  @click="enter('47')">
        <area shape="rect" coords="647,342,774,378" title="45料棚"  @click="enter('45')">
        <area shape="rect" coords="646,392,710,427" title="43"  @click="enter('43')">
        <area shape="rect" coords="713,392,775,425" title="44"  @click="enter('44')">
        <area shape="rect" coords="646,429,775,450" title="42料台"  @click="enter('42')">
        <area shape="rect" coords="646,468,775,532" title="41料场"  @click="enter('41')">
        <area shape="rect" coords="795,206,944,528" title="55料场"  @click="enter('55')">
      </map>
      <!-- <map name="planetmap" id="planetmap">
        <area shape="rect" coords="55, 360, 169, 390" title="1号库" @click="OpenDialog('ZXK','01')" />
        <area shape="rect" coords="56, 328, 169, 359" title="2号料台" @click="OpenDialog('ZXK','02')" />
        <area shape="rect" coords="56, 286, 169, 315" title="3号库" @click="OpenDialog('ZXK','03')" />
        <area shape="rect" coords="56, 253, 169, 284" title="4号料台" @click="OpenDialog('ZXK','04')" />
        <area shape="rect" coords="56, 211, 169, 240" title="5号库" @click="OpenDialog('ZXK','05')" />
        <area shape="rect" coords="56, 178, 169, 208" title="6号料台" @click="OpenDialog('ZXK','06')" />
        <area shape="rect" coords="56, 135, 169, 166" title="7号库" @click="OpenDialog('ZXK','07')" />
        <area shape="rect" coords="56, 104, 169, 134" title="8号料台" @click="OpenDialog('ZXK','08')" />
        <area shape="rect" coords="56, 404, 169, 434" title="57料台" @click="OpenDialog('ZXK','57')" />
        <area shape="rect" coords="199, 252, 283, 290" title="16号库" @click="OpenDialog('ZXK','16')" />
        <area shape="rect" coords="284, 252, 355, 290" title="17号库" @click="OpenDialog('ZXK','17')" />
        <area
          shape="rect"
          coords="200, 293, 284, 320"
          title="13料台 "
          @click="OpenDialog('ZXK','13')"
        />
        <area
          shape="rect"
          coords="284, 293, 356, 320"
          title="14料台 "
          @click="OpenDialog('ZXK','14')"
        />
        <area
          shape="rect"
          coords="199, 323, 355, 346"
          title="12料台 "
          @click="OpenDialog('ZXK','12')"
        />
        <area
          shape="rect"
          coords="199, 398, 384, 441"
          title="10料棚 "
          @click="OpenDialog('ZXK','10')"
        />
        <area shape="rect" coords="199, 441, 384, 483" title="9料场 " @click="OpenDialog('ZXK','09')" />
        <area
          shape="rect"
          coords="199, 179, 369, 209"
          title="18料台 "
          @click="OpenDialog('ZXK','18')"
        />
        <area shape="rect" coords="418, 21, 464, 54" title="38号库 " @click="OpenDialog('ZXK','38')" />
        <area shape="rect" coords="468, 21, 512, 54" title="39号库 " @click="OpenDialog('ZXK','39')" />
        <area shape="rect" coords="515, 21, 629, 54" title="40料棚 " @click="OpenDialog('ZXK','40')" />
        <area shape="rect" coords="417, 57, 464, 87" title="37号库 " @click="OpenDialog('ZXK','37')" />
        <area shape="rect" coords="430, 93, 469, 124" title="34号库 " @click="OpenDialog('ZXK','34')" />
        <area shape="rect" coords="470, 93, 507, 124" title="35号库 " @click="OpenDialog('ZXK','35')" />
        <area shape="rect" coords="508, 93, 545, 124" title="36号库 " @click="OpenDialog('ZXK','36')" />
        <area
          shape="rect"
          coords="429, 124, 484, 154"
          title="32料棚 "
          @click="OpenDialog('ZXK','36')"
        />
        <area
          shape="rect"
          coords="488, 124, 542, 155"
          title="33料棚 "
          @click="OpenDialog('ZXK','33')"
        />
        <area
          shape="rect"
          coords="430, 186, 542, 216"
          title="28料台 "
          @click="OpenDialog('ZXK','28')"
        />
        <area
          shape="rect"
          coords="430, 242, 494, 287"
          title="26号库 "
          @click="OpenDialog('ZXK','26')"
        />
        <area
          shape="rect"
          coords="497, 242, 557, 275"
          title="27料台 "
          @click="OpenDialog('ZXK','27')"
        />
        <area
          shape="rect"
          coords="429, 280, 557, 310"
          title="25料台 "
          @click="OpenDialog('ZXK','25')"
        />
        <area
          shape="rect"
          coords="429, 327, 557, 364"
          title="24号库 "
          @click="OpenDialog('ZXK','24')"
        />
        <area
          shape="rect"
          coords="429, 364, 557, 396"
          title="23料台 "
          @click="OpenDialog('ZXK','23')"
        />
        <area
          shape="rect"
          coords="429, 420, 557, 453"
          title="22号库 "
          @click="OpenDialog('ZXK','22')"
        />
        <area
          shape="rect"
          coords="429, 455, 557, 483"
          title="21料台 "
          @click="OpenDialog('ZXK','21')"
        />
        <area
          shape="rect"
          coords="458, 504, 557, 534"
          title="20料台 "
          @click="OpenDialog('ZXK','20')"
        />
        <area
          shape="rect"
          coords="429, 554, 557, 650"
          title="19料台 "
          @click="OpenDialog('ZXK','19')"
        />
        <area shape="rect" coords="586, 78, 631, 177" title="54料场" @click="OpenDialog('ZXK','54')" />
        <area shape="rect" coords="633, 78, 660, 177" title="52" @click="OpenDialog('ZXK','52')" />
        <area shape="rect" coords="665, 79, 691, 179" title="53" @click="OpenDialog('ZXK','53')" />
        <area shape="rect" coords="589, 248, 628, 277" title="49号库" @click="OpenDialog('ZXK','49')" />
        <area shape="rect" coords="629, 246, 673, 277" title="50号库" @click="OpenDialog('ZXK','50')" />
        <area shape="rect" coords="675, 247, 716, 277" title="51号库" @click="OpenDialog('ZXK','51')" />
        <area shape="rect" coords="587, 278, 716, 308" title="48料台" @click="OpenDialog('ZXK','48')" />
        <area shape="rect" coords="587, 331, 716, 363" title="47号库" @click="OpenDialog('ZXK','47')" />
        <area shape="rect" coords="587, 366, 716, 396" title="46料台" @click="OpenDialog('ZXK','46')" />
        <area shape="rect" coords="587, 423, 716, 452" title="45料棚" @click="OpenDialog('ZXK','45')" />
        <area shape="rect" coords="589, 469, 650, 502" title="43号库" @click="OpenDialog('ZXK','43')" />
        <area shape="rect" coords="654, 465, 716, 503" title="44号库" @click="OpenDialog('ZXK','44')" />
        <area shape="rect" coords="587, 506, 716, 534" title="42料台" @click="OpenDialog('ZXK','42')" />
        <area shape="rect" coords="587, 265, 716, 649" title="41料场" @click="OpenDialog('ZXK','41')" />
        <area shape="rect" coords="429, 156, 467, 183" title="29号库" @click="OpenDialog('ZXK','29')" />
        <area shape="rect" coords="469, 156, 505, 186" title="30号库" @click="OpenDialog('ZXK','30')" />
        <area shape="rect" coords="507, 156, 543, 186" title="31号库" @click="OpenDialog('ZXK','31')" />
        <area shape="rect" coords="731, 80, 872, 178" title="56料场" @click="OpenDialog('ZXK','56')" />
        <area shape="rect" coords="731, 230, 888, 651" title="55料场" @click="OpenDialog('ZXK','55')" />
      </map>
      <div name="8号料台">
        <img
          src="../../../../img/red.jpg"
          alt
          id="flag0"
          title="积压"
          style=" position: absolute;left: 55px;z-index: 2;top: 17.3%;width: 12px;height: 12px;"
          v-show="StatusStr[(8-1)*3]==='1'"
        />
        <img
          src="../../../../img/blue.jpg"
          alt
          id="flag1"
          title="正常"
          style=" position: absolute;left: 157px;z-index: 2;top:17.3%;;width: 12px;height: 12px;"
          v-show="StatusStr[(8-1)*3+1]==='1'"
        />
        <img
          src="../../../../img/yellow.jpg"
          alt
          id="flag2"
          title="空缺"
          style=" position: absolute;left: 55px;z-index: 2;top: 20.4%;width: 12px;height: 12px;"
          v-show="StatusStr[(8-1)*3+2]==='1'"
        />
      </div>
      <div name="7号库房">
        <img
          src="../../../../img/red.jpg"
          alt
          id="flag3"
          title="积压"
          style=" position: absolute;left: 55px;z-index: 2;top: 22.5%;width: 12px;height: 12px;"
          v-show="StatusStr[(7-1)*3]==='1'"
        />
        <img
          src="../../../../img/blue.jpg"
          alt
          id="flag4"
          title="正常"
          style=" position: absolute;left: 157px;z-index: 2;top:22.5%;;width: 12px;height: 12px;"
          v-show="StatusStr[(7-1)*3+1]==='1'"
        />
        <img
          src="../../../../img/yellow.jpg"
          alt
          id="flag5"
          title="空缺"
          style=" position: absolute;left: 55px;z-index: 2;top: 25.6%;width: 12px;height: 12px;"
          v-show="StatusStr[(7-1)*3+2]==='1'"
        />
      </div>
      <div name="6料台">
        <img
          src="../../../../img/red.jpg"
          alt
          id="flag6"
          title="积压"
          style=" position: absolute;left: 55px;z-index: 2;top: 29.8%;width: 12px;height: 12px;"
          v-show="StatusStr[(6-1)*3]==='1'"
        />
        <img
          src="../../../../img/blue.jpg"
          alt
          id="flag7"
          title="正常"
          style=" position: absolute;left: 157px;z-index: 2;top:29.8%;;width: 12px;height: 12px;"
          v-show="StatusStr[(6-1)*3+1]==='1'"
        />
        <img
          src="../../../../img/yellow.jpg"
          alt
          id="flag8"
          title="空缺"
          style=" position: absolute;left: 55px;z-index: 2;top: 32.8%;width: 12px;height: 12px;"
          v-show="StatusStr[(6-1)*3+2]==='1'"
        />
      </div>
      <div name="5号库房">
        <img
          src="../../../../img/red.jpg"
          alt
          id="flag9"
          title="积压"
          style=" position: absolute;left: 55px;z-index: 2;top: 35%;width: 12px;height: 12px;"
          v-show="StatusStr[(5-1)*3]==='1'"
        />
        <img
          src="../../../../img/blue.jpg"
          alt
          id="flag10"
          title="正常"
          style=" position: absolute;left: 157px;z-index: 2;top:35%;;width: 12px;height: 12px;"
          v-show="StatusStr[(5-1)*3+1]==='1'"
        />
        <img
          src="../../../../img/yellow.jpg"
          alt
          id="flag11"
          title="空缺"
          style=" position: absolute;left: 55px;z-index: 2;top: 38.2%;width: 12px;height: 12px;"
          v-show="StatusStr[(5-1)*3+2]==='1'"
        />
      </div>
      <div name="4号料台">
        <img
          src="../../../../img/red.jpg"
          alt
          id="flag12"
          title="积压"
          style=" position: absolute;left: 55px;z-index: 2;top: 42.4%;width: 12px;height: 12px;"
          v-show="StatusStr[(4-1)*3]==='1'"
        />
        <img
          src="../../../../img/blue.jpg"
          alt
          id="flag13"
          title="正常"
          style=" position: absolute;left: 157px;z-index: 2;top:42.4%;width: 12px;height: 12px;"
          v-show="StatusStr[(4-1)*3+1]==='1'"
        />
        <img
          src="../../../../img/yellow.jpg"
          alt
          id="flag14"
          title="空缺"
          style=" position: absolute;left: 55px;z-index: 2;top: 45.2%;width: 12px;height: 12px;"
          v-show="StatusStr[(4-1)*3+2]==='1'"
        />
      </div>
      <div name="3号料台">
        <img
          src="../../../../img/red.jpg"
          alt
          id="flag15"
          title="积压"
          style=" position: absolute;left: 55px;z-index: 2;top: 47.5%;width: 12px;height: 12px;"
          v-show="StatusStr[(3-1)*3]==='1'"
        />
        <img
          src="../../../../img/blue.jpg"
          alt
          id="flag16"
          title="正常"
          style=" position: absolute;left: 157px;z-index: 2;top:47.5%;width: 12px;height: 12px;"
          v-show="StatusStr[(3-1)*3+1]==='1'"
        />
        <img
          src="../../../../img/yellow.jpg"
          alt
          id="flag17"
          title="空缺"
          style=" position: absolute;left: 55px;z-index: 2;top: 50.5%;width: 12px;height: 12px;"
          v-show="StatusStr[(3-1)*3+2]==='1'"
        />
      </div>
      <div name="2号料台">
        <img
          src="../../../../img/red.jpg"
          alt
          id="flag18"
          title="积压"
          style=" position: absolute;left: 55px;z-index: 2;top: 54.8%;width: 12px;height: 12px;"
          v-show="StatusStr[(2-1)*3]==='1'"
        />
        <img
          src="../../../../img/blue.jpg"
          alt
          id="flag19"
          title="正常"
          style=" position: absolute;left: 157px;z-index: 2;top:54.8%;width: 12px;height: 12px;"
          v-show="StatusStr[(2-1)*3+1]==='1'"
        />
        <img
          src="../../../../img/yellow.jpg"
          alt
          id="flag20"
          title="空缺"
          style=" position: absolute;left: 55px;z-index: 2;top: 57.8%;width: 12px;height: 12px;"
          v-show="StatusStr[(2-1)*3+2]==='1'"
        />
      </div>
      <div name="1号料台">
        <img
          src="../../../../img/red.jpg"
          alt
          id="flag21"
          title="积压"
          style=" position: absolute;left: 55px;z-index: 2;top: 60%;width: 12px;height: 12px;"
          v-show="StatusStr[(1-1)*3]==='1'"
        />
        <img
          src="../../../../img/blue.jpg"
          alt
          id="flag22"
          title="正常"
          style=" position: absolute;left: 157px;z-index: 2;top:60%;width: 12px;height: 12px;"
          v-show="StatusStr[(1-1)*3+1]==='1'"
        />
        <img
          src="../../../../img/yellow.jpg"
          alt
          id="flag23"
          title="空缺"
          style=" position: absolute;left: 55px;z-index: 2;top: 63%;width: 12px;height: 12px;"
          v-show="StatusStr[(1-1)*3+2]==='1'"
        />
      </div>
      <div name="57号料台">
        <img
          src="../../../../img/red.jpg"
          alt
          id="flag24"
          title="积压"
          style=" position: absolute;left: 55px;z-index: 2;top: 67.4%;width: 12px;height: 12px;"
          v-show="StatusStr[(57-1)*3]==='1'"
        />
        <img
          src="../../../../img/blue.jpg"
          alt
          id="flag25"
          title="正常"
          style=" position: absolute;left: 157px;z-index: 2;top:67.4%;width: 12px;height: 12px;"
          v-show="StatusStr[(57-1)*3+1]==='1'"
        />
        <img
          src="../../../../img/yellow.jpg"
          alt
          id="flag26"
          title="空缺"
          style=" position: absolute;left: 55px;z-index: 2;top: 70.4%;width: 12px;height: 12px;"
          v-show="StatusStr[(57-1)*3+2]==='1'"
        />
      </div>
      <div name="18料台">
        <img
          src="../../../../img/red.jpg"
          alt
          id="flag27"
          title="积压"
          style=" position: absolute;left: 199px;z-index: 2;top: 29.8%;width: 12px;height: 12px;"
          v-show="StatusStr[(18-1)*3]==='1'"
        />
        <img
          src="../../../../img/blue.jpg"
          alt
          id="flag28"
          title="正常"
          style=" position: absolute;left: 358px;z-index: 2;top:29.8%;;width: 12px;height: 12px;"
          v-show="StatusStr[(18-1)*3+1]==='1'"
        />
        <img
          src="../../../../img/yellow.jpg"
          alt
          id="flag29"
          title="空缺"
          style=" position: absolute;left: 199px;z-index: 2;top: 32.8%;width: 12px;height: 12px;"
          v-show="StatusStr[(18-1)*3+2]==='1'"
        />
      </div>
      <div name="16号料台">
        <img
          src="../../../../img/red.jpg"
          alt
          id="flag30"
          title="积压"
          style=" position: absolute;left: 199px;z-index: 2;top: 42.2%;width: 12px;height: 12px;"
          v-show="StatusStr[(16-1)*3]==='1'"
        />
        <img
          src="../../../../img/blue.jpg"
          alt
          id="flag31"
          title="正常"
          style=" position: absolute;left: 272px;z-index: 2;top:42.2%;width: 12px;height: 12px;"
           v-show="StatusStr[(16-1)*3+1]==='1'"
        />
        <img
          src="../../../../img/yellow.jpg"
          alt
          id="flag32"
          title="空缺"
          style=" position: absolute;left: 199px;z-index: 2;top: 46.5%;width: 12px;height: 12px;"
           v-show="StatusStr[(16-1)*3+2]==='1'"
        />
      </div>
      <div name="13号料台">
        <img
          src="../../../../img/red.jpg"
          alt
          id="flag33"
          title="积压"
          style=" position: absolute;left: 199px;z-index: 2;top: 48.7%;width: 12px;height: 12px;"
           v-show="StatusStr[(13-1)*3]==='1'"
        />
        <img
          src="../../../../img/blue.jpg"
          alt
          id="flag34"
          title="正常"
          style=" position: absolute;left: 272px;z-index: 2;top:48.7%;width: 12px;height: 12px;"
          v-show="StatusStr[(13-1)*3+1]==='1'"
        />
        <img
          src="../../../../img/yellow.jpg"
          alt
          id="flag35"
          title="空缺"
          style=" position: absolute;left: 199px;z-index: 2;top: 51.5%;width: 12px;height: 12px;"
          v-show="StatusStr[(13-1)*3+2]==='1'"
        />
      </div>
      <div name="11号料台">
        <img
          src="../../../../img/red.jpg"
          alt
          id="flag36"
          title="积压"
          style=" position: absolute;left: 199px;z-index: 2;top: 53.7%;width: 12px;height: 12px;"
          v-show="StatusStr[(11-1)*3]==='1'"
        />
        <img
          src="../../../../img/blue.jpg"
          alt
          id="flag37"
          title="正常"
          style=" position: absolute;left: 272px;z-index: 2;top:53.7%;width: 12px;height: 12px;"
          v-show="StatusStr[(11-1)*3+1]==='1'"
        />
        <img
          src="../../../../img/yellow.jpg"
          alt
          id="flag38"
          title="空缺"
          style=" position: absolute;left: 199px;z-index: 2;top: 55.6%;width: 12px;height: 12px;"
          v-show="StatusStr[(11-1)*3+2]==='1'"
        />
      </div>
      <div name="10号料鹏">
        <img
          src="../../../../img/red.jpg"
          alt
          id="flag39"
          title="积压"
          style=" position: absolute;left: 199px;z-index: 2;top: 66.4%;width: 12px;height: 12px;"
          v-show="StatusStr[(10-1)*3]==='1'"
        />
        <img
          src="../../../../img/blue.jpg"
          alt
          id="flag40"
          title="正常"
          style=" position: absolute;left: 371px;z-index: 2;top:66.4%;width: 12px;height: 12px;"
          v-show="StatusStr[(10-1)*3+1]==='1'"
        />
        <img
          src="../../../../img/yellow.jpg"
          alt
          id="flag41"
          title="空缺"
          style=" position: absolute;left: 199px;z-index: 2;top: 71.5%;width: 12px;height: 12px;"
          v-show="StatusStr[(10-1)*3+2]==='1'"
        />
      </div>
      <div name="9号料场">
        <img
          src="../../../../img/red.jpg"
          alt
          id="flag42"
          title="积压"
          style=" position: absolute;left: 199px;z-index: 2;top: 73.6%;width: 12px;height: 12px;"
          v-show="StatusStr[(9-1)*3]==='1'"
        />
        <img
          src="../../../../img/blue.jpg"
          alt
          id="flag43"
          title="正常"
          style=" position: absolute;left: 373px;z-index: 2;top:73.6%;width: 12px;height: 12px;"
          v-show="StatusStr[(9-1)*3+1]==='1'"
        />
        <img
          src="../../../../img/yellow.jpg"
          alt
          id="flag44"
          title="空缺"
          style=" position: absolute;left: 199px;z-index: 2;top: 78.5%;width: 12px;height: 12px;"
          v-show="StatusStr[(9-1)*3+2]==='1'"
        />
      </div>
      <div name="17号料台">
        <img
          src="../../../../img/red.jpg"
          alt
          id="flag45"
          title="积压"
          style=" position: absolute;left: 285px;z-index: 2;top: 42.2%;width: 12px;height: 12px;"
          v-show="StatusStr[(17-1)*3]==='1'"
        />
        <img
          src="../../../../img/blue.jpg"
          alt
          id="flag46"
          title="正常"
          style=" position: absolute;left: 343px;z-index: 2;top:42.2%;width: 12px;height: 12px;"
          v-show="StatusStr[(17-1)*3+1]==='1'"
        />
        <img
          src="../../../../img/yellow.jpg"
          alt
          id="flag47"
          title="空缺"
          style=" position: absolute;left: 285px;z-index: 2;top: 46.5%;width: 12px;height: 12px;"
          v-show="StatusStr[(17-1)*3+2]==='1'"
        />
      </div>
      <div name="14号料台">
        <img
          src="../../../../img/red.jpg"
          alt
          id="flag48"
          title="积压"
          style=" position: absolute;left: 285px;z-index: 2;top: 48.7%;width: 12px;height: 12px;"
          v-show="StatusStr[(14-1)*3]==='1'"
        />
        <img
          src="../../../../img/blue.jpg"
          alt
          id="flag49"
          title="正常"
          style=" position: absolute;left: 345px;z-index: 2;top:48.7%;width: 12px;height: 12px;"
          v-show="StatusStr[(14-1)*3+1]==='1'"
        />
        <img
          src="../../../../img/yellow.jpg"
          alt
          id="flag50"
          title="空缺"
          style=" position: absolute;left: 285px;z-index: 2;top: 51.5%;width: 12px;height: 12px;"
          v-show="StatusStr[(14-1)*3+2]==='1'"
        />
      </div>
      <div name="12号料台">
        <img
          src="../../../../img/red.jpg"
          alt
          id="flag51"
          title="积压"
          style=" position: absolute;left: 285px;z-index: 2;top: 53.7%;width: 12px;height: 12px;"
          v-show="StatusStr[(12-1)*3]==='1'"
        />
        <img
          src="../../../../img/blue.jpg"
          alt
          id="flag52"
          title="正常"
          style=" position: absolute;left: 344px;z-index: 2;top:53.7%;width: 12px;height: 12px;"
          v-show="StatusStr[(12-1)*3+1]==='1'"
        />
        <img
          src="../../../../img/yellow.jpg"
          alt
          id="flag53"
          title="空缺"
          style=" position: absolute;left: 285px;z-index: 2;top: 55.6%;width: 12px;height: 12px;"
          v-show="StatusStr[(12-1)*3+2]==='1'"
        />
      </div>
      <div name="38号库">
        <img
          src="../../../../img/red.jpg"
          alt
          id="flag54"
          title="积压"
          style=" position: absolute;left: 417px;z-index: 2;top: 3.7%;width: 12px;height: 12px;"
          v-show="StatusStr[(38-1)*3]==='1'"
        />
        <img
          src="../../../../img/blue.jpg"
          alt
          id="flag55"
          title="正常"
          style=" position: absolute;left: 452px;z-index: 2;top:3.7%;width: 12px;height: 12px;"
          v-show="StatusStr[(38-1)*3+1]==='1'"
        />
        <img
          src="../../../../img/yellow.jpg"
          alt
          id="flag56"
          title="空缺"
          style=" position: absolute;left: 417px;z-index: 2;top: 7%;width: 12px;height: 12px;"
          v-show="StatusStr[(38-1)*3+2]==='1'"
        />
      </div>
      <div name="37料棚">
        <img
          src="../../../../img/red.jpg"
          alt
          id="flag57"
          title="积压"
          style=" position: absolute;left: 417px;z-index: 2;top: 9.3%;width: 12px;height: 12px;"
          v-show="StatusStr[(37-1)*3]==='1'"
        />
        <img
          src="../../../../img/blue.jpg"
          alt
          id="flag58"
          title="正常"
          style=" position: absolute;left: 452px;z-index: 2;top:9.3%;width: 12px;height: 12px;"
          v-show="StatusStr[(37-1)*3+1]==='1'"
        />
        <img
          src="../../../../img/yellow.jpg"
          alt
          id="flag59"
          title="空缺"
          style=" position: absolute;left: 417px;z-index: 2;top: 12.6%;width: 12px;height: 12px;"
          v-show="StatusStr[(37-1)*3+2]==='1'"
        />
      </div>
      <div name="39号库">
        <img
          src="../../../../img/red.jpg"
          alt
          id="flag60"
          title="积压"
          style=" position: absolute;left: 467px;z-index: 2;top: 3.7%;width: 12px;height: 12px;"
          v-show="StatusStr[(39-1)*3]==='1'"
        />
        <img
          src="../../../../img/blue.jpg"
          alt
          id="flag61"
          title="正常"
          style=" position: absolute;left: 501px;z-index: 2;top:3.7%;width: 12px;height: 12px;"
          v-show="StatusStr[(39-1)*3+1]==='1'"
        />
        <img
          src="../../../../img/yellow.jpg"
          alt
          id="flag62"
          title="空缺"
          style=" position: absolute;left: 467px;z-index: 2;top: 7%;width: 12px;height: 12px;"
          v-show="StatusStr[(39-1)*3+2]==='1'"
        />
      </div>
      <div name="40料棚">
        <img
          src="../../../../img/red.jpg"
          alt
          id="flag63"
          title="积压"
          style=" position: absolute;left: 515px;z-index: 2;top: 3.7%;width: 12px;height: 12px;"
          v-show="StatusStr[(40-1)*3]==='1'"
        />
        <img
          src="../../../../img/blue.jpg"
          alt
          id="flag64"
          title="正常"
          style=" position: absolute;left: 618px;z-index: 2;top:3.7%;width: 12px;height: 12px;"
          v-show="StatusStr[(40-1)*3+1]==='1'"
        />
        <img
          src="../../../../img/yellow.jpg"
          alt
          id="flag65"
          title="空缺"
          style=" position: absolute;left: 515px;z-index: 2;top: 7.2%;width: 12px;height: 12px;"
          v-show="StatusStr[(40-1)*3+2]==='1'"
        />
      </div>
      <div name="34号库">
        <img
          src="../../../../img/red.jpg"
          alt
          id="flag66"
          title="积压"
          style=" position: absolute;left: 430px;z-index: 2;top: 15.6%;width: 12px;height: 12px;"
          v-show="StatusStr[(34-1)*3]==='1'"
        />
        <img
          src="../../../../img/blue.jpg"
          alt
          id="flag67"
          title="正常"
          style=" position: absolute;left: 457px;z-index: 2;top:15.6%;width: 12px;height: 12px;"
          v-show="StatusStr[(34-1)*3+1]==='1'"
        />
        <img
          src="../../../../img/yellow.jpg"
          alt
          id="flag68"
          title="空缺"
          style=" position: absolute;left: 430px;z-index: 2;top: 18.6%;width: 12px;height: 12px;"
          v-show="StatusStr[(34-1)*3+2]==='1'"
        />
      </div>
      <div name="35号库">
        <img
          src="../../../../img/red.jpg"
          alt
          id="flag69"
          title="积压"
          style=" position: absolute;left: 470px;z-index: 2;top: 15.6%;width: 12px;height: 12px;"
          v-show="StatusStr[(35-1)*3]==='1'"
        />
        <img
          src="../../../../img/blue.jpg"
          alt
          id="flag70"
          title="正常"
          style=" position: absolute;left: 495px;z-index: 2;top:15.6%;width: 12px;height: 12px;"
          v-show="StatusStr[(35-1)*3+1]==='1'"
        />
        <img
          src="../../../../img/yellow.jpg"
          alt
          id="flag71"
          title="空缺"
          style=" position: absolute;left: 470px;z-index: 2;top: 18.6%;width: 12px;height: 12px;"
          v-show="StatusStr[(35-1)*3+2]==='1'"
        />
      </div>
      <div name="36号库">
        <img
          src="../../../../img/red.jpg"
          alt
          id="flag72"
          title="积压"
          style=" position: absolute;left: 508px;z-index: 2;top: 15.6%;width: 12px;height: 12px;"
          v-show="StatusStr[(36-1)*3]==='1'"
        />
        <img
          src="../../../../img/blue.jpg"
          alt
          id="flag73"
          title="正常"
          style=" position: absolute;left: 532px;z-index: 2;top:15.6%;width: 12px;height: 12px;"
          v-show="StatusStr[(36-1)*3+1]==='1'"
        />
        <img
          src="../../../../img/yellow.jpg"
          alt
          id="flag74"
          title="空缺"
          style=" position: absolute;left: 508px;z-index: 2;top: 18.6%;width: 12px;height: 12px;"
          v-show="StatusStr[(36-1)*3+2]==='1'"
        />
      </div>
      <div name="29号库">
        <img
          src="../../../../img/red.jpg"
          alt
          id="flag75"
          title="积压"
          style=" position: absolute;left: 429px;z-index: 2;top: 26%;width: 12px;height: 12px;"
          v-show="StatusStr[(29-1)*3]==='1'"
        />
        <img
          src="../../../../img/blue.jpg"
          alt
          id="flag76"
          title="正常"
          style=" position: absolute;left: 456px;z-index: 2;top:26%;width: 12px;height: 12px;"
          v-show="StatusStr[(29-1)*3+1]==='1'"
        />
        <img
          src="../../../../img/yellow.jpg"
          alt
          id="flag77"
          title="空缺"
          style=" position: absolute;left: 429px;z-index: 2;top: 28.9%;width: 12px;height: 12px;"
          v-show="StatusStr[(29-1)*3+2]==='1'"
        />
      </div>
      <div name="30号库">
        <img
          src="../../../../img/red.jpg"
          alt
          id="flag78"
          title="积压"
          style=" position: absolute;left: 469px;z-index: 2;top: 26%;width: 12px;height: 12px;"
          v-show="StatusStr[(30-1)*3]==='1'"
        />
        <img
          src="../../../../img/blue.jpg"
          alt
          id="flag79"
          title="正常"
          style=" position: absolute;left: 494px;z-index: 2;top:26%;width: 12px;height: 12px;"
          v-show="StatusStr[(30-1)*3+1]==='1'"
        />
        <img
          src="../../../../img/yellow.jpg"
          alt
          id="flag80"
          title="空缺"
          style=" position: absolute;left: 469px;z-index: 2;top: 28.9%;width: 12px;height: 12px;"
          v-show="StatusStr[(30-1)*3+2]==='1'"
        />
      </div>
      <div name="31号库">
        <img
          src="../../../../img/red.jpg"
          alt
          id="flag81"
          title="积压"
          style=" position: absolute;left: 507px;z-index: 2;top: 26%;width: 12px;height: 12px;"
          v-show="StatusStr[(31-1)*3]==='1'"
        />
        <img
          src="../../../../img/blue.jpg"
          alt
          id="flag82"
          title="正常"
          style=" position: absolute;left: 531px;z-index: 2;top:26%;width: 12px;height: 12px;"
          v-show="StatusStr[(31-1)*3+1]==='1'"
        />
        <img
          src="../../../../img/yellow.jpg"
          alt
          id="flag83"
          title="空缺"
          style=" position: absolute;left: 507px;z-index: 2;top: 29%;width: 12px;height: 12px;"
          v-show="StatusStr[(31-1)*3+2]==='1'"
        />
      </div>
      <div name="32号料台">
        <img
          src="../../../../img/red.jpg"
          alt
          id="flag84"
          title="积压"
          style=" position: absolute;left: 430px;z-index: 2;top: 20.8%;width: 12px;height: 12px;"
          v-show="StatusStr[(32-1)*3]==='1'"
        />
        <img
          src="../../../../img/blue.jpg"
          alt
          id="flag85"
          title="正常"
          style=" position: absolute;left: 473px;z-index: 2;top:20.8%;width: 12px;height: 12px;"
          v-show="StatusStr[(32-1)*3+1]==='1'"
        />
        <img
          src="../../../../img/yellow.jpg"
          alt
          id="flag86"
          title="空缺"
          style=" position: absolute;left: 430px;z-index: 2;top: 23.6%;width: 12px;height: 12px;"
          v-show="StatusStr[(32-1)*3+2]==='1'"
        />
      </div>
      <div name="33号料台">
        <img
          src="../../../../img/red.jpg"
          alt
          id="flag87"
          title="积压"
          style=" position: absolute;left: 488px;z-index: 2;top: 20.8%;width: 12px;height: 12px;"
          v-show="StatusStr[(33-1)*3]==='1'"
        />
        <img
          src="../../../../img/blue.jpg"
          alt
          id="flag88"
          title="正常"
          style=" position: absolute;left: 531px;z-index: 2;top:20.8%;width: 12px;height: 12px;"
          v-show="StatusStr[(33-1)*3+1]==='1'"
        />
        <img
          src="../../../../img/yellow.jpg"
          alt
          id="flag89"
          title="空缺"
          style=" position: absolute;left: 488px;z-index: 2;top: 23.6%;width: 12px;height: 12px;"
          v-show="StatusStr[(33-1)*3+2]==='1'"
        />
      </div>
      <div name="28料台">
        <img
          src="../../../../img/red.jpg"
          alt
          id="flag90"
          title="积压"
          style=" position: absolute;left: 429px;z-index: 2;top: 31%;width: 12px;height: 12px;"
          v-show="StatusStr[(28-1)*3]==='1'"
        />
        <img
          src="../../../../img/blue.jpg"
          alt
          id="flag91"
          title="正常"
          style=" position: absolute;left: 531px;z-index: 2;top:31%;width: 12px;height: 12px;"
          v-show="StatusStr[(28-1)*3+1]==='1'"
        />
        <img
          src="../../../../img/yellow.jpg"
          alt
          id="flag92"
          title="空缺"
          style=" position: absolute;left: 429px;z-index: 2;top: 34%;width: 12px;height: 12px;"
          v-show="StatusStr[(28-1)*3+2]==='1'"
        />
      </div>
      <div name="26号库">
        <img
          src="../../../../img/red.jpg"
          alt
          id="flag93"
          title="积压"
          style=" position: absolute;left: 430px;z-index: 2;top: 40.4%;width: 12px;height: 12px;"
          v-show="StatusStr[(26-1)*3]==='1'"
        />
        <img
          src="../../../../img/blue.jpg"
          alt
          id="flag94"
          title="正常"
          style=" position: absolute;left: 482px;z-index: 2;top:40.4%;width: 12px;height: 12px;"
          v-show="StatusStr[(26-1)*3+1]==='1'"
        />
        <img
          src="../../../../img/yellow.jpg"
          alt
          id="flag95"
          title="空缺"
          style=" position: absolute;left: 430px;z-index: 2;top: 44.4%;width: 12px;height: 12px;"
          v-show="StatusStr[(26-1)*3+2]==='1'"
        />
      </div>
      <div name="27号库">
        <img
          src="../../../../img/red.jpg"
          alt
          id="flag96"
          title="积压"
          style=" position: absolute;left: 497px;z-index: 2;top: 40.4%;width: 12px;height: 12px;"
          v-show="StatusStr[(27-1)*3]==='1'"
        />
        <img
          src="../../../../img/blue.jpg"
          alt
          id="flag97"
          title="正常"
          style=" position: absolute;left: 545px;z-index: 2;top:40.4%;width: 12px;height: 12px;"
          v-show="StatusStr[(26-1)*3+1]==='1'"
        />
        <img
          src="../../../../img/yellow.jpg"
          alt
          id="flag98"
          title="空缺"
          style=" position: absolute;left: 497px;z-index: 2;top: 44.4%;width: 12px;height: 12px;"
          v-show="StatusStr[(26-1)*3+2]==='1'"
        />
      </div>
      <div name="25料台">
        <img
          src="../../../../img/red.jpg"
          alt
          id="flag99"
          title="积压"
          style=" position: absolute;left: 429px;z-index: 2;top: 46.5%;width: 12px;height: 12px;"
          v-show="StatusStr[(25-1)*3]==='1'"
        />
        <img
          src="../../../../img/blue.jpg"
          alt
          id="flag100"
          title="正常"
          style=" position: absolute;left: 546px;z-index: 2;top:46.5%;width: 12px;height: 12px;"
          v-show="StatusStr[(25-1)*3+1]==='1'"
        />
        <img
          src="../../../../img/yellow.jpg"
          alt
          id="flag101"
          title="空缺"
          style=" position: absolute;left: 429px;z-index: 2;top: 49.5%;width: 12px;height: 12px;"
          v-show="StatusStr[(25-1)*3+2]==='1'"
        />
      </div>
      <div name="24号库">
        <img
          src="../../../../img/red.jpg"
          alt
          id="flag102"
          title="积压"
          style=" position: absolute;left: 429px;z-index: 2;top: 54.6%;width: 12px;height: 12px;"
          v-show="StatusStr[(24-1)*3]==='1'"
        />
        <img
          src="../../../../img/blue.jpg"
          alt
          id="flag103"
          title="正常"
          style=" position: absolute;left: 546px;z-index: 2;top:54.6%;width: 12px;height: 12px;"
          v-show="StatusStr[(24-1)*3+1]==='1'"
        />
        <img
          src="../../../../img/yellow.jpg"
          alt
          id="flag104"
          title="空缺"
          style=" position: absolute;left: 429px;z-index: 2;top: 58.8%;width: 12px;height: 12px;"
          v-show="StatusStr[(24-1)*3+2]==='1'"
        />
      </div>
      <div name="23料台">
        <img
          src="../../../../img/red.jpg"
          alt
          id="flag105"
          title="积压"
          style=" position: absolute;left: 429px;z-index: 2;top: 61%;width: 12px;height: 12px;"
          v-show="StatusStr[(23-1)*3]==='1'"
        />
        <img
          src="../../../../img/blue.jpg"
          alt
          id="flag106"
          title="正常"
          style=" position: absolute;left: 546px;z-index: 2;top:61%;width: 12px;height: 12px;"
          v-show="StatusStr[(24-1)*3+1]==='1'"
        />
        <img
          src="../../../../img/yellow.jpg"
          alt
          id="flag107"
          title="空缺"
          style=" position: absolute;left: 429px;z-index: 2;top: 64%;width: 12px;height: 12px;"
          v-show="StatusStr[(24-1)*3+2]==='1'"
        />
      </div>
      <div name="22号库">
        <img
          src="../../../../img/red.jpg"
          alt
          id="flag108"
          title="积压"
          style=" position: absolute;left: 429px;z-index: 2;top: 70%;width: 12px;height: 12px;"
          v-show="StatusStr[(22-1)*3]==='1'"
        />
        <img
          src="../../../../img/blue.jpg"
          alt
          id="flag109"
          title="正常"
          style=" position: absolute;left: 546px;z-index: 2;top:70%;width: 12px;height: 12px;"
          v-show="StatusStr[(22-1)*3+1]==='1'"
        />
        <img
          src="../../../../img/yellow.jpg"
          alt
          id="flag110"
          title="空缺"
          style=" position: absolute;left: 429px;z-index: 2;top: 73.5%;width: 12px;height: 12px;"
          v-show="StatusStr[(22-1)*3+2]==='1'"
        />
      </div>
      <div name="21料台">
        <img
          src="../../../../img/red.jpg"
          alt
          id="flag111"
          title="积压"
          style=" position: absolute;left: 429px;z-index: 2;top: 75.6%;width: 12px;height: 12px;"
          v-show="StatusStr[(21-1)*3]==='1'"
        />
        <img
          src="../../../../img/blue.jpg"
          alt
          id="flag112"
          title="正常"
          style=" position: absolute;left: 546px;z-index: 2;top:75.6%;width: 12px;height: 12px;"
          v-show="StatusStr[(21-1)*3+1]==='1'"
        />
        <img
          src="../../../../img/yellow.jpg"
          alt
          id="flag113"
          title="空缺"
          style=" position: absolute;left: 429px;z-index: 2;top: 78.5%;width: 12px;height: 12px;"
          v-show="StatusStr[(21-1)*3+2]==='1'"
        />
      </div>
      <div name="20料台">
        <img
          src="../../../../img/red.jpg"
          alt
          id="flag114"
          title="积压"
          style=" position: absolute;left: 458px;z-index: 2;top: 84%;width: 12px;height: 12px;"
          v-show="StatusStr[(20-1)*3]==='1'"
        />
        <img
          src="../../../../img/blue.jpg"
          alt
          id="flag115"
          title="正常"
          style=" position: absolute;left: 546px;z-index: 2;top:84%;width: 12px;height: 12px;"
          v-show="StatusStr[(20-1)*3+1]==='1'"
        />
        <img
          src="../../../../img/yellow.jpg"
          alt
          id="flag116"
          title="空缺"
          style=" position: absolute;left: 458px;z-index: 2;top: 86.8%;width: 12px;height: 12px;"
          v-show="StatusStr[(20-1)*3+2]==='1'"
        />
      </div>
      <div name="19料场">
        <img
          src="../../../../img/red.jpg"
          alt
          id="flag117"
          title="积压"
          style=" position: absolute;left: 429px;z-index: 2;top: 92.3%;width: 12px;height: 12px;"
          v-show="StatusStr[(19-1)*3]==='1'"
        />
        <img
          src="../../../../img/blue.jpg"
          alt
          id="flag118"
          title="正常"
          style=" position: absolute;left: 546px;z-index: 2;top:92.3%;width: 12px;height: 12px;"
          v-show="StatusStr[(19-1)*3+1]==='1'"
        />
        <img
          src="../../../../img/yellow.jpg"
          alt
          id="flag119"
          title="空缺"
          style=" position: absolute;left: 429px;z-index: 2;top: 106.5%;width: 12px;height: 12px;"
          v-show="StatusStr[(19-1)*3+2]==='1'"
        />
      </div>
      <div name="54料场">
        <img
          src="../../../../img/red.jpg"
          alt
          id="flag120"
          title="积压"
          style=" position: absolute;left: 587px;z-index: 2;top: 13.1%;width: 12px;height: 12px;"
          v-show="StatusStr[(54-1)*3]==='1'"
        />
        <img
          src="../../../../img/blue.jpg"
          alt
          id="flag121"
          title="正常"
          style=" position: absolute;left: 618px;z-index: 2;top:13.1%;width: 12px;height: 12px;"
          v-show="StatusStr[(54-1)*3+1]==='1'"
        />
        <img
          src="../../../../img/yellow.jpg"
          alt
          id="flag122"
          title="空缺"
          style=" position: absolute;left: 587px;z-index: 2;top: 27.6%;width: 12px;height: 12px;"
          v-show="StatusStr[(54-1)*3+2]==='1'"
        />
      </div>
      <div name="52料台">
        <img
          src="../../../../img/red.jpg"
          alt
          id="flag123"
          title="积压"
          style=" position: absolute;left: 632px;z-index: 2;top: 13.1%;width: 12px;height: 12px;"
          v-show="StatusStr[(52-1)*3]==='1'"
        />
        <img
          src="../../../../img/blue.jpg"
          alt
          id="flag124"
          title="正常"
          style=" position: absolute;left: 648px;z-index: 2;top:13.1%;width: 12px;height: 12px;"
          v-show="StatusStr[(52-1)*3+1]==='1'"
        />
        <img
          src="../../../../img/yellow.jpg"
          alt
          id="flag125"
          title="空缺"
          style=" position: absolute;left: 632px;z-index: 2;top: 27.6%;width: 12px;height: 12px;"
          v-show="StatusStr[(52-1)*3+2]==='1'"
        />
      </div>
      <div name="53号库">
        <img
          src="../../../../img/red.jpg"
          alt
          id="flag126"
          title="积压"
          style=" position: absolute;left: 664px;z-index: 2;top: 13.1%;width: 12px;height: 12px;"
          v-show="StatusStr[(53-1)*3]==='1'"
        />
        <img
          src="../../../../img/blue.jpg"
          alt
          id="flag127"
          title="正常"
          style=" position: absolute;left: 679px;z-index: 2;top:13.1%;width: 12px;height: 12px;"
          v-show="StatusStr[(53-1)*3+1]==='1'"
        />
        <img
          src="../../../../img/yellow.jpg"
          alt
          id="flag128"
          title="空缺"
          style=" position: absolute;left: 664px;z-index: 2;top: 27.8%;width: 12px;height: 12px;"
          v-show="StatusStr[(53-1)*3+2]==='1'"
        />
      </div>
      <div name="49号库">
        <img
          src="../../../../img/red.jpg"
          alt
          id="flag129"
          title="积压"
          style=" position: absolute;left:588px;z-index: 2;top: 41.4%;width: 12px;height: 12px;"
          v-show="StatusStr[(49-1)*3]==='1'"
        />
        <img
          src="../../../../img/blue.jpg"
          alt
          id="flag130"
          title="正常"
          style=" position: absolute;left: 616px;z-index: 2;top:41.4%;width: 12px;height: 12px;"
          v-show="StatusStr[(49-1)*3+1]==='1'"
        />
        <img
          src="../../../../img/yellow.jpg"
          alt
          id="flag131"
          title="空缺"
          style=" position: absolute;left: 588px;z-index: 2;top: 44.2%;width: 12px;height: 12px;"
          v-show="StatusStr[(49-1)*3+2]==='1'"
        />
      </div>
      <div name="50号库">
        <img
          src="../../../../img/red.jpg"
          alt
          id="flag132"
          title="积压"
          style=" position: absolute;left:630px;z-index: 2;top: 41.2%;width: 12px;height: 12px;"
          v-show="StatusStr[(50-1)*3]==='1'"
        />
        <img
          src="../../../../img/blue.jpg"
          alt
          id="flag133"
          title="正常"
          style=" position: absolute;left: 660px;z-index: 2;top:41.2%;width: 12px;height: 12px;"
          v-show="StatusStr[(50-1)*3+1]==='1'"
        />
        <img
          src="../../../../img/yellow.jpg"
          alt
          id="flag134"
          title="空缺"
          style=" position: absolute;left: 630px;z-index: 2;top: 44.2%;width: 12px;height: 12px;"
          v-show="StatusStr[(50-1)*3+2]==='1'"
        />
      </div>
      <div name="51号库">
        <img
          src="../../../../img/red.jpg"
          alt
          id="flag135"
          title="积压"
          style=" position: absolute;left:674px;z-index: 2;top: 41.2%;width: 12px;height: 12px;"
          v-show="StatusStr[(51-1)*3]==='1'"
        />
        <img
          src="../../../../img/blue.jpg"
          alt
          id="flag136"
          title="正常"
          style=" position: absolute;left: 704px;z-index: 2;top:41.2%;width: 12px;height: 12px;"
          v-show="StatusStr[(51-1)*3+1]==='1'"
        />
        <img
          src="../../../../img/yellow.jpg"
          alt
          id="flag137"
          title="空缺"
          style=" position: absolute;left: 674px;z-index: 2;top: 44.2%;width: 12px;height: 12px;"
          v-show="StatusStr[(51-1)*3+2]==='1'"
        />
      </div>
      <div name="48料台">
        <img
          src="../../../../img/red.jpg"
          alt
          id="flag138"
          title="积压"
          style=" position: absolute;left:587px;z-index: 2;top: 46.5%;width: 12px;height: 12px;"
          v-show="StatusStr[(48-1)*3]==='1'"
        />
        <img
          src="../../../../img/blue.jpg"
          alt
          id="flag139"
          title="正常"
          style=" position: absolute;left: 704px;z-index: 2;top:46.5%;width: 12px;height: 12px;"
          v-show="StatusStr[(48-1)*3+1]==='1'"
        />
        <img
          src="../../../../img/yellow.jpg"
          alt
          id="flag140"
          title="空缺"
          style=" position: absolute;left: 587px;z-index: 2;top: 49.5%;width: 12px;height: 12px;"
          v-show="StatusStr[(48-1)*3+2]==='1'"
        />
      </div>
      <div name="47号库">
        <img
          src="../../../../img/red.jpg"
          alt
          id="flag141"
          title="积压"
          style=" position: absolute;left:587px;z-index: 2;top: 55%;width: 12px;height: 12px;"
          v-show="StatusStr[(47-1)*3]==='1'"
        />
        <img
          src="../../../../img/blue.jpg"
          alt
          id="flag142"
          title="正常"
          style=" position: absolute;left: 704px;z-index: 2;top:55%;width: 12px;height: 12px;"
          v-show="StatusStr[(47-1)*3+1]==='1'"
        />
        <img
          src="../../../../img/yellow.jpg"
          alt
          id="flag143"
          title="空缺"
          style=" position: absolute;left: 587px;z-index: 2;top: 58.8%;width: 12px;height: 12px;"
          v-show="StatusStr[(47-1)*3+2]==='1'"
        />
      </div>
      <div name="46料台">
        <img
          src="../../../../img/red.jpg"
          alt
          id="flag144"
          title="积压"
          style=" position: absolute;left:587px;z-index: 2;top: 61%;width: 12px;height: 12px;"
          v-show="StatusStr[(46-1)*3]==='1'"
        />
        <img
          src="../../../../img/blue.jpg"
          alt
          id="flag145"
          title="正常"
          style=" position: absolute;left: 704px;z-index: 2;top:61%;width: 12px;height: 12px;"
          v-show="StatusStr[(46-1)*3+1]==='1'"
        />
        <img
          src="../../../../img/yellow.jpg"
          alt
          id="flag146"
          title="空缺"
          style=" position: absolute;left: 587px;z-index: 2;top: 64%;width: 12px;height: 12px;"
          v-show="StatusStr[(46-1)*3+2]==='1'"
        />
      </div>
      <div name="47料棚">
        <img
          src="../../../../img/red.jpg"
          alt
          id="flag147"
          title="积压"
          style=" position: absolute;left:587px;z-index: 2;top: 70.5%;width: 12px;height: 12px;"
          v-show="StatusStr[(47-1)*3]==='1'"
        />
        <img
          src="../../../../img/blue.jpg"
          alt
          id="flag148"
          title="正常"
          style=" position: absolute;left: 704px;z-index: 2;top:70.5%;width: 12px;height: 12px;"
          v-show="StatusStr[(47-1)*3+1]==='1'"
        />
        <img
          src="../../../../img/yellow.jpg"
          alt
          id="flag149"
          title="空缺"
          style=" position: absolute;left: 587px;z-index: 2;top: 73.5%;width: 12px;height: 12px;"
          v-show="StatusStr[(47-1)*3+2]==='1'"
        />
      </div>
      <div name="43号库">
        <img
          src="../../../../img/red.jpg"
          alt
          id="flag150"
          title="积压"
          style=" position: absolute;left:588px;z-index: 2;top: 78.2%;width: 12px;height: 12px;"
          v-show="StatusStr[(43-1)*3]==='1'"
        />
        <img
          src="../../../../img/blue.jpg"
          alt
          id="flag151"
          title="正常"
          style=" position: absolute;left: 638px;z-index: 2;top:78.2%;width: 12px;height: 12px;"
          v-show="StatusStr[(43-1)*3+1]==='1'"
        />
        <img
          src="../../../../img/yellow.jpg"
          alt
          id="flag152"
          title="空缺"
          style=" position: absolute;left: 588px;z-index: 2;top: 81.8%;width: 12px;height: 12px;"
          v-show="StatusStr[(43-1)*3+2]==='1'"
        />
      </div>
      <div name="44号库">
        <img
          src="../../../../img/red.jpg"
          alt
          id="flag153"
          title="积压"
          style=" position: absolute;left:654px;z-index: 2;top: 78.2%;width: 12px;height: 12px;"
          v-show="StatusStr[(44-1)*3]==='1'"
        />
        <img
          src="../../../../img/blue.jpg"
          alt
          id="flag154"
          title="正常"
          style=" position: absolute;left: 704px;z-index: 2;top:78.2%;width: 12px;height: 12px;"
          v-show="StatusStr[(44-1)*3+1]==='1'"
        />
        <img
          src="../../../../img/yellow.jpg"
          alt
          id="flag155"
          title="空缺"
          style=" position: absolute;left: 654px;z-index: 2;top: 81.8%;width: 12px;height: 12px;"
          v-show="StatusStr[(44-1)*3+2]==='1'"
        />
      </div>
      <div name="42料台">
        <img
          src="../../../../img/red.jpg"
          alt
          id="flag156"
          title="积压"
          style=" position: absolute;left:587px;z-index: 2;top: 84.2%;width: 12px;height: 12px;"
          v-show="StatusStr[(42-1)*3]==='1'"
        />
        <img
          src="../../../../img/blue.jpg"
          alt
          id="flag157"
          title="正常"
          style=" position: absolute;left: 704px;z-index: 2;top:84.2%;width: 12px;height: 12px;"
          v-show="StatusStr[(42-1)*3+1]==='1'"
        />
        <img
          src="../../../../img/yellow.jpg"
          alt
          id="flag158"
          title="空缺"
          style=" position: absolute;left: 587px;z-index: 2;top: 87%;width: 12px;height: 12px;"
          v-show="StatusStr[(42-1)*3+2]==='1'"
        />
      </div>
      <div name="41料场">
        <img
          src="../../../../img/red.jpg"
          alt
          id="flag159"
          title="积压"
          style=" position: absolute;left:587px;z-index: 2;top: 94.4%;width: 12px;height: 12px;"
          v-show="StatusStr[(41-1)*3]==='1'"
        />
        <img
          src="../../../../img/blue.jpg"
          alt
          id="flag160"
          title="正常"
          style=" position: absolute;left: 704px;z-index: 2;top:94.4%;width: 12px;height: 12px;"
          v-show="StatusStr[(41-1)*3+1]==='1'"
        />
        <img
          src="../../../../img/yellow.jpg"
          alt
          id="flag161"
          title="空缺"
          style=" position: absolute;left: 587px;z-index: 2;top: 106.5%;width: 12px;height: 12px;"
          v-show="StatusStr[(41-1)*3+2]==='1'"
        />
      </div>
      <div name="56料场">
        <img
          src="../../../../img/red.jpg"
          alt
          id="flag162"
          title="积压"
          style=" position: absolute;left:731px;z-index: 2;top: 13.1%;width: 12px;height: 12px;"
          v-show="StatusStr[(56-1)*3]==='1'"
        />
        <img
          src="../../../../img/blue.jpg"
          alt
          id="flag163"
          title="正常"
          style=" position: absolute;left: 862px;z-index: 2;top:13.1%;width: 12px;height: 12px;"
          v-show="StatusStr[(56-1)*3+1]==='1'"
        />
        <img
          src="../../../../img/yellow.jpg"
          alt
          id="flag164"
          title="空缺"
          style=" position: absolute;left: 731px;z-index: 2;top: 27.8%;width: 12px;height: 12px;"
          v-show="StatusStr[(56-1)*3+2]==='1'"
        />
      </div>
      <div name="55料场">
        <img
          src="../../../../img/red.jpg"
          alt
          id="flag165"
          title="积压"
          style=" position: absolute;left:731px;z-index: 2;top: 38.1%;width: 12px;height: 12px;"
          v-show="StatusStr[(55-1)*3]==='1'"
        />
        <img
          src="../../../../img/blue.jpg"
          alt
          id="flag166"
          title="正常"
          style=" position: absolute;left: 876px;z-index: 2;top:38.1%;width: 12px;height: 12px;"
          v-show="StatusStr[(55-1)*3+1]==='1'"
        />
        <img
          src="../../../../img/yellow.jpg"
          alt
          id="flag167"
          title="空缺"
          style=" position: absolute;left: 731px;z-index: 2;top: 106.5%;width: 12px;height: 12px;"
          v-show="StatusStr[(55-1)*3+2]==='1'"
        />
      </div> -->
      <img 
        src="../../../../img/zhinanzhen.png"
        id="ZXKPIC"
        border="0"
        alt="Planets"
        style="height:100px;width:100px;vertical-align:text-top"
      />
    </div>
    <!-- <div name="标识图片">
      <img id="ZYCPIC" src="../../../../img/库房2.png" border="0" class="kufang" />库房
      <img id="ZYCPIC" src="../../../../img/料棚.png" border="0" class="liaopeng" />料棚
    </div> -->
    <kucunzhanshidetail
      :kcmxdialogVisible="kcmxDialog"
      @listenToChildEvent="closeDialog"
      ref="kucunzhanshidetail"
    ></kucunzhanshidetail>
    <div>
      <FloatingWindow ref="FloatingWindow"></FloatingWindow>
    </div>
  </div>
</template>

<script>
import kucunzhanshidetail from "@/app_src/components/cangchu/kucunzhanshidetail";
import FloatingWindow from "@/app_src/components/cangchu/FloatingWindow";
import { GetFacStatus } from "@/app_src/api/cangchu/KCZS/ZXK";
export default {
  name: "GDQCK",
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
    kucunzhanshidetail,
    FloatingWindow
  },
  methods: {
    testMethod() {
      this.getPoint();
      this.observer();
      this.setStyle(this.width);
    },
    setStyle(val) {
      let maxName = 200;
      for (let i = 0; i < maxName; i++) {
        let name = "flag" + i.toString();
        let ele = document.getElementById(name);
        let currentWidth;
        if (ele !== null) {
          currentWidth = ele.style.left;
        } else {
          break;
        }
        //let currentWidth = document.getElementById(name).style.left;
        let targetWidth =
          parseInt(currentWidth.trim("px")) + val - this.oldwidth + "px";
        document.getElementById(name).style.left = targetWidth;
      }
      this.oldwidth = this.width;
    },
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
      let w = document.getElementById("GDPIC").offsetLeft;
      this.width = w;
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
        this.width = document.getElementById("GDPIC").offsetLeft;
      });
    },
    enter(data) {
      console.log(this.FacCode + data)
      this.$refs.FloatingWindow.enter(this.FacCode + data);
    },
  },
  mounted() {
    //this.getPoint();//获取当前平面图width方法
    ////this.setStyle(this.width);//初始化放置点位方法
    //this.observer();//监听当前PIC DOM的方法
    //this.setStyle(this.width);//初始化设置点位方法
  },
  created() {
    //this.getList();//获取平面图点位状态方法
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


