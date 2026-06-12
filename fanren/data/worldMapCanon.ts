import type { WorldMapNode } from '../types';
// 由 agent 叢集審計《凡人修仙傳》620 正史地點自動生成（game_db/_audit/gen_canon_nodes.cjs）。
// 261 個正史地點，含劇情閘（隱匿/信物/封印）；進度閘以所屬大區為準（見 engine/mapGate）。
export const WORLD_MAP_CANON: WorldMapNode[] = [
 {
  "id": "mingShaZhiDi",
  "name": "鳴煞之地",
  "tier": "spirit",
  "parentId": "fengYuanDaLu",
  "description": "風元大陸上血河與兩儀微塵陣所在之地，靈界大乘聯手對抗真仙馬良的決戰場，戰後被兩儀微塵陣自爆夷為巨大盆地。",
  "connections": [
   "fengYuanDaLu"
  ],
  "firstVolume": 11
 },
 {
  "id": "tianLingJing",
  "name": "天靈境",
  "tier": "spirit",
  "parentId": "fengYuanDaLu",
  "description": "人族三皇之一靈皇的勢力範圍，魔劫將首攻此處，擎天通靈樹附近成為魔族入侵要道。",
  "connections": [
   "fengYuanDaLu"
  ],
  "firstVolume": 8
 },
 {
  "id": "muMianCheng",
  "name": "木棉城",
  "tier": "spirit",
  "parentId": "muZuLingDi",
  "description": "各族聯軍駐紮的大本營，昔日木族第二大城，以數千丈擎天巨木為支柱建成的十幾層巨城，敖嘯、莫簡離坐鎮於此。",
  "connections": [
   "muZuLingDi"
  ],
  "firstVolume": 10
 },
 {
  "id": "yiXianTian",
  "name": "一線天",
  "tier": "spirit",
  "parentId": "manHuangShiJie",
  "description": "上黑雲下黃風、中間一道白光天縫的奇異地形，內棲風蛟群、狂風遠超外界十倍、神念無法離體，是通往木族最快捷卻最危險的通道。",
  "connections": [
   "manHuangShiJie"
  ],
  "firstVolume": 3
 },
 {
  "id": "fuLingShan",
  "name": "伏靈山",
  "tier": "spirit",
  "parentId": "fengYuanDaLu",
  "description": "靈族聖山，靈王駐地，山頂有紫氣堂；聖山本身為威能極強的異寶，合體以下嚴禁靠近三萬里。",
  "connections": [
   "fengYuanDaLu"
  ],
  "firstVolume": 11,
  "access": {
   "requiresFlag": "靈族聖山禁制解除"
  }
 },
 {
  "id": "ziMuFeng",
  "name": "子母峰",
  "tier": "human",
  "parentId": "yunMengShanMai",
  "description": "落雲宗東側的山峰，韓立在此設修煉洞府、弟子居於子峰，並在此衝擊化神失敗。",
  "connections": [
   "yunMengShanMai"
  ],
  "firstVolume": 7
 },
 {
  "id": "yiTianCheng",
  "name": "倚天城",
  "tier": "spirit",
  "parentId": "tianYuanChengSpirit",
  "description": "倚天門等四大宗門聯合守衛的人族城池，防禦僅次於天淵城，魔劫中遭萬象魔騎與珈輪戰魔大軍圍攻、兩名太上長老隕落。",
  "connections": [
   "tianYuanChengSpirit"
  ],
  "firstVolume": 10
 },
 {
  "id": "jiuXianShan",
  "name": "九仙山",
  "tier": "spirit",
  "parentId": "xuanWuJing",
  "description": "坐落於玄武境與妖狐之地交界的靈山，擁有極品靈脈，是人妖兩族千年萬寶大會的召開地。",
  "connections": [
   "xuanWuJing"
  ],
  "firstVolume": 10
 },
 {
  "id": "caiXiaShan",
  "name": "彩霞山",
  "tier": "human",
  "parentId": "jingZhou",
  "description": "鏡州第二大山，原名落鳳山，七玄門百年前遷此設立總門，方圓十幾里山脈盡屬其下。",
  "connections": [
   "jingZhou"
  ],
  "firstVolume": 1
 },
 {
  "id": "ningCuiDao",
  "name": "凝翠島",
  "tier": "human",
  "parentId": "luanXingHai",
  "description": "亂星海外星海較近的妖獸島之一，設有傳送石屋及豐樂商盟等商鋪，是修士出海捕妖的重要中轉據點。",
  "connections": [
   "luanXingHai"
  ],
  "firstVolume": 4
 },
 {
  "id": "qinYeLing",
  "name": "秦葉嶺",
  "tier": "human",
  "parentId": "yueGuo",
  "description": "越國境內昔日秦家與葉家並存之地，秦家衰亡後唯葉家興盛，升仙令為秦家祖傳之物。",
  "connections": [
   "yueGuo"
  ],
  "firstVolume": 1
 },
 {
  "id": "qianHuoZhiDi",
  "name": "乾火之地",
  "tier": "spirit",
  "parentId": "fengYuanDaLu",
  "description": "小修羅界中的地下熔岩湖，空魚族棲息之地，修羅蛛族將空魚族圈養於此。",
  "connections": [
   "fengYuanDaLu"
  ],
  "firstVolume": 11,
  "access": {
   "hidden": true
  }
 },
 {
  "id": "wanYueShanMai",
  "name": "萬月山脈",
  "tier": "spirit",
  "parentId": "xueTianDaLu",
  "description": "血天大陸上天鼎宮藏身之地，天鼎宮現世前修煉者大量聚集並發生殺戮，血魄本體冰魄於此尋線索。",
  "connections": [
   "xueTianDaLu"
  ],
  "firstVolume": 11
 },
 {
  "id": "jinXiFangShi",
  "name": "晉西坊市",
  "tier": "human",
  "parentId": "jinJing",
  "description": "晉京城西的大型坊市與拍賣會舉辦地，附設九霄殿（元嬰級拍賣）與寶光殿（結丹級拍賣）。",
  "connections": [
   "jinJing"
  ],
  "firstVolume": 6
 },
 {
  "id": "qingYuanGong",
  "name": "青元宮",
  "tier": "spirit",
  "parentId": "fengYuanDaLu",
  "description": "韓立以無涯海元合島最高峰為中心建立的宮殿與門派，下轄眾多弟子。",
  "connections": [
   "fengYuanDaLu"
  ],
  "firstVolume": 11
 },
 {
  "id": "heiYu",
  "name": "黑域",
  "tier": "spirit",
  "parentId": "tianYuanJing",
  "description": "黑域組織管理的隱秘交換空間，入口以銀色巨門在雷雲中開啟，內為充滿黑氣異獸的藍光世界，定期舉辦頂尖秘密交換大會。",
  "connections": [
   "tianYuanJing"
  ],
  "firstVolume": 10,
  "access": {
   "hidden": true,
   "requiresItem": "黑域入場信物"
  }
 },
 {
  "id": "fuLiZhaoZe",
  "name": "浮黎沼澤",
  "tier": "spirit",
  "parentId": "tianYuanChengSpirit",
  "description": "天淵城外蠻荒世界的一級巡查危險區域，神念受阻、迷霧重重，棲居圭蟲銀頭獸蠻獸人，常有異族探子潛伏監視天淵城。",
  "connections": [
   "tianYuanChengSpirit"
  ],
  "firstVolume": 8
 },
 {
  "id": "tianDingGong",
  "name": "天鼎宮",
  "tier": "spirit",
  "parentId": "xueTianDaLu",
  "description": "百萬年前飛升的天鼎真人遺留洞府，位於血天大陸萬月山脈，以萬丈五色巨門與封印守護，內有百餘片分區光幕宮殿群。",
  "connections": [
   "xueTianDaLu"
  ],
  "firstVolume": 11,
  "access": {
   "hidden": true,
   "requiresFlag": "天鼎真人封印解除"
  }
 },
 {
  "id": "xuLingDian",
  "name": "虛靈殿",
  "tier": "human",
  "parentId": "beiMingDao",
  "description": "北冥島小極宮寒驪秘境內的三座宮殿群，以上古傳送陣及空間裂縫相連，乃小極宮最終防線。",
  "connections": [
   "beiMingDao"
  ],
  "firstVolume": 6,
  "access": {
   "hidden": true,
   "requiresItem": "寒驪秘境傳送信物"
  }
 },
 {
  "id": "xuanYuDong",
  "name": "玄玉洞",
  "tier": "human",
  "parentId": "beiMingDao",
  "description": "北冥島虛靈殿地下充滿玄玉寒氣的洞窟，盛產萬年玄玉，寒驪上人衝擊化神期的秘密場所，韓立曾在此大戰取走千餘塊萬年玄玉。",
  "connections": [
   "beiMingDao"
  ],
  "firstVolume": 6,
  "access": {
   "hidden": true
  }
 },
 {
  "id": "wanNuTa",
  "name": "萬奴塔",
  "tier": "demon",
  "parentId": "huanYeCheng",
  "description": "幻夜城的重要勢力，出售奴隸及各類秘術，韓立曾高價購得魔晶傀儡煉製低中階秘術。",
  "connections": [
   "huanYeCheng"
  ],
  "firstVolume": 10
 },
 {
  "id": "yueLuDian",
  "name": "岳麓殿",
  "tier": "human",
  "parentId": "huangFengGu",
  "description": "黃楓谷巫鈞山最重要收藏地，存放法器丹藥密術書籍及配方，內設傳送陣與玄陽火地，有結丹期長老坐鎮。",
  "connections": [
   "huangFengGu"
  ],
  "firstVolume": 2
 },
 {
  "id": "heiYinShanMai",
  "name": "黑隱山脈",
  "tier": "spirit",
  "parentId": "tianPengShengCheng",
  "description": "黑冥半島上韓立開闢洞府苦修之處，盛產木鈴花等靈草、棲息多種妖獸，受天鵬族統治。",
  "connections": [
   "tianPengShengCheng"
  ],
  "firstVolume": 9
 },
 {
  "id": "fengLingTa",
  "name": "封靈塔",
  "tier": "spirit",
  "parentId": "tianPengShengCheng",
  "description": "天鵬聖城內的八棱塔形建築，高六七百丈，表面符號散發黑氣、被七色光幕封禁，乃聖城禁地無人敢近。",
  "connections": [
   "tianPengShengCheng"
  ],
  "firstVolume": 9,
  "access": {
   "hidden": true,
   "requiresFlag": "封靈塔七色光幕解除"
  }
 },
 {
  "id": "zhenLingZhiXue",
  "name": "真靈之穴",
  "tier": "spirit",
  "parentId": "moJinShanMai",
  "description": "魔金山脈深處需以真靈之血配合法陣喚醒穴靈開啟之地，內藏真麟本源，穴靈遭天外魔君分魂附身控制吞噬探索者。",
  "connections": [
   "moJinShanMai"
  ],
  "firstVolume": 9,
  "access": {
   "hidden": true,
   "requiresItem": "真靈之血"
  }
 },
 {
  "id": "tianWaiTian",
  "name": "天外天",
  "tier": "spirit",
  "parentId": "fengYuanDaLu",
  "description": "鳴煞之地上空分割為黑白兩色天地的奇特空間，懸浮無數巨石與殿堂，各族強者於此聚集等待馬良到來。",
  "connections": [
   "fengYuanDaLu"
  ],
  "firstVolume": 11,
  "access": {
   "hidden": true
  }
 },
 {
  "id": "wuYaHai",
  "name": "無涯海",
  "tier": "spirit",
  "parentId": "fengYuanDaLu",
  "description": "靈界人妖兩族之間的大海，韓立居所青元宮所在的元合島位於此處，其閉關修煉與飛昇之劫皆在此進行。",
  "connections": [
   "fengYuanDaLu"
  ],
  "firstVolume": 11
 },
 {
  "id": "xiaoLingTian",
  "name": "小靈天",
  "tier": "spirit",
  "parentId": "lingJie",
  "description": "類似廣寒界的碎裂界面，七八個異族與人族混居，在虛空中以一定軌跡緩緩移動、入口難尋，朱果兒出身地。",
  "connections": [
   "lingJie"
  ],
  "firstVolume": 10,
  "access": {
   "hidden": true,
   "requiresItem": "小靈天界面入口圖"
  }
 },
 {
  "id": "luoRiZhiMu",
  "name": "落日之墓",
  "tier": "spirit",
  "parentId": "tianYuanJing",
  "description": "天元境與妖族邊境的廣大危險秘境，人妖兩族可入內尋天材地寶，古獸妖獸盤踞，另有混沌谷、炙光潭等要地。",
  "connections": [
   "tianYuanJing"
  ],
  "firstVolume": 8,
  "access": {
   "hidden": true
  }
 },
 {
  "id": "yinShaDao",
  "name": "銀鯊島",
  "tier": "human",
  "parentId": "luanXingHai",
  "description": "星宮在亂星海外海的重要據點，外海妖獸騷亂期間戒嚴，有傳送陣通往內海。",
  "connections": [
   "luanXingHai"
  ],
  "firstVolume": 7
 },
 {
  "id": "heiMingWuHai",
  "name": "黑冥霧海",
  "tier": "spirit",
  "parentId": "tianPengShengCheng",
  "description": "黑冥半島黑隱山脈附近的廣大黑霧海域，陰氣極重能吸草木靈氣並禁空，深處潛藏九幽冥屍，與冥河之地有空間裂縫相連。",
  "connections": [
   "tianPengShengCheng"
  ],
  "firstVolume": 9,
  "access": {
   "hidden": true
  }
 },
 {
  "id": "tianLanCaoYuan",
  "name": "天瀾草原",
  "tier": "human",
  "parentId": "muLanCaoYuan",
  "description": "突兀人對慕蘭草原的稱呼，韓立前往大晉途中需穿越此地，遭突兀族追殺後偽裝潛行。",
  "connections": [
   "muLanCaoYuan"
  ],
  "firstVolume": 6
 },
 {
  "id": "hanLiMiJing",
  "name": "寒驪秘境",
  "tier": "human",
  "parentId": "beiMingDao",
  "description": "小極宮真正駐紮地，內有三座虛靈殿與大型傳送陣，最終啟動空間裂縫轉移。",
  "connections": [
   "beiMingDao"
  ],
  "firstVolume": 6,
  "access": {
   "hidden": true,
   "requiresFlag": "寒驪秘境禁制開啟"
  }
 },
 {
  "id": "wanZhangMoYuan",
  "name": "萬丈魔淵",
  "tier": "human",
  "parentId": "tianNan",
  "description": "天南七靈島附近海域的魔氣濃郁深淵，韓立第二元嬰借魔氣灌體於此修煉。",
  "connections": [
   "tianNan"
  ],
  "firstVolume": 7,
  "access": {
   "hidden": true
  }
 },
 {
  "id": "xiaoXiuLuoJie",
  "name": "小修羅界",
  "tier": "spirit",
  "parentId": "fengYuanDaLu",
  "description": "上古修羅界崩潰後遺落的殘界，內有三輪綠日與修羅蛛等上古生物，修羅蛛一族於此建天蛛城。",
  "connections": [
   "fengYuanDaLu"
  ],
  "firstVolume": 11,
  "access": {
   "hidden": true,
   "requiresFlag": "小修羅界入口顯現"
  }
 },
 {
  "id": "moFen",
  "name": "魔墳",
  "tier": "spirit",
  "parentId": "mingHeZhiDi",
  "description": "外空魔頭被蜉蝣族長老擊殺後的埋葬之地，屍骸在陰氣滋潤下部分通靈。",
  "connections": [
   "mingHeZhiDi"
  ],
  "firstVolume": 9,
  "access": {
   "hidden": true
  }
 },
 {
  "id": "kunWuDian",
  "name": "昆吾殿",
  "tier": "human",
  "parentId": "kunWuShan",
  "description": "昆吾山核心殿堂，供桌藏化龍璽等寶物，北極元光封鎖殿內，通道設金磁靈木重力禁制。",
  "connections": [
   "kunWuShan"
  ],
  "firstVolume": 6,
  "access": {
   "hidden": true,
   "requiresFlag": "北極元光封鎖解除"
  }
 },
 {
  "id": "zhenMoTa",
  "name": "鎮魔塔",
  "tier": "human",
  "parentId": "kunWuShan",
  "description": "昆吾山倒建九層塔，塔尖朝下越下所鎮妖魔越強，本弧鎮壓元剎聖祖分身。",
  "connections": [
   "kunWuShan"
  ],
  "firstVolume": 6,
  "access": {
   "hidden": true,
   "requiresFlag": "鎮魔塔封印解除"
  }
 },
 {
  "id": "qiYunShanMai",
  "name": "齊雲山脈",
  "tier": "spirit",
  "parentId": "xueTianDaLu",
  "description": "血天大陸山脈，附近八國十九宗人口遭神秘血祭大規模消滅，碧影委託追查。",
  "connections": [
   "xueTianDaLu"
  ],
  "firstVolume": 11
 },
 {
  "id": "huangQuanDiHuo",
  "name": "黃泉地火",
  "tier": "spirit",
  "parentId": "fengYuanDaLu",
  "description": "靈界倚天城附近七峰山脈中心，地火極寒蘊含黃粱石靈，傳為通往冥界入口之一。",
  "connections": [
   "fengYuanDaLu"
  ],
  "firstVolume": 10,
  "access": {
   "hidden": true
  }
 },
 {
  "id": "anShouSenLin",
  "name": "暗獸森林",
  "tier": "spirit",
  "parentId": "guangHanJie",
  "description": "廣寒界一片巨大黑色森林，深處有王級金色暗獸，是穿越廣寒界的主要障礙。",
  "connections": [
   "guangHanJie"
  ],
  "firstVolume": 9
 },
 {
  "id": "tianMaHuangYuan",
  "name": "天馬荒原",
  "tier": "spirit",
  "parentId": "tianYuanJing",
  "description": "天元境與萬妙境交界的一望無際廢靈荒地，六翼於此屠滅藍水宗並吸收玄陰晶壁。",
  "connections": [
   "tianYuanJing"
  ],
  "firstVolume": 10
 },
 {
  "id": "yuTianShan",
  "name": "玉田山",
  "tier": "human",
  "parentId": "daJin",
  "description": "大晉湳郡太昌府名靈山，白露書院與皇清觀所在，擁有上佳靈脈。",
  "connections": [
   "daJin"
  ],
  "firstVolume": 6
 },
 {
  "id": "qiYuanDao",
  "name": "奇淵島",
  "tier": "human",
  "parentId": "luanXingHai",
  "description": "外星海第四卷主要活動地，曾有黑石城，後被深淵妖獸攻破成高階妖獸盤踞之地。",
  "connections": [
   "luanXingHai"
  ],
  "firstVolume": 4
 },
 {
  "id": "xueHeCheng",
  "name": "血鶴城",
  "tier": "spirit",
  "parentId": "xueTianDaLu",
  "description": "血骨門控制的重城，城側有雙湖，商業繁榮龍蛇混雜，蕭冥長年坐鎮。",
  "connections": [
   "xueTianDaLu"
  ],
  "firstVolume": 11
 },
 {
  "id": "jinHanXianGong",
  "name": "金翰仙宮",
  "tier": "immortal",
  "parentId": "xianJie",
  "description": "九元觀在真仙界的附屬仙宮，宮主為紫衣婦人，懸浮於雲霧海上方數百座山峰之間。",
  "connections": [
   "xianJie"
  ],
  "firstVolume": 11
 },
 {
  "id": "qiLingShan",
  "name": "奇靈山",
  "tier": "human",
  "parentId": "tianLuoGuo",
  "description": "魔道六宗之一御靈宗的山門所在，位於天羅國西部。",
  "connections": [
   "tianLuoGuo"
  ],
  "firstVolume": 5
 },
 {
  "id": "yeHuaCheng",
  "name": "葉樺城",
  "tier": "human",
  "parentId": "dongYuGuo",
  "description": "東裕國昌州離谷最近的大城，距萬嶺山脈萬里，眾多修仙者入住等待入谷。",
  "connections": [
   "dongYuGuo"
  ],
  "firstVolume": 6
 },
 {
  "id": "chiMoHai",
  "name": "赤魔海",
  "tier": "spirit",
  "parentId": "fengYuanDaLu",
  "description": "赤紅色海水的大洋，環繞黑冥半島，多棲息強大海獸。",
  "connections": [
   "fengYuanDaLu"
  ],
  "firstVolume": 9
 },
 {
  "id": "shenYuanCheng",
  "name": "深淵城",
  "tier": "spirit",
  "parentId": "lingJie",
  "description": "靈界蠻荒邊境的中轉站，墨靈聖舟前往靈族途中於此短暫停留接見長老。",
  "connections": [
   "lingJie"
  ],
  "firstVolume": 11
 },
 {
  "id": "xingYunGe",
  "name": "星雲閣",
  "tier": "spirit",
  "parentId": "fuJiaoCheng",
  "description": "雷鳴大陸伏蛟城中的要地建築，韓立在此與千機子等人進行靈藥交易。",
  "connections": [
   "fuJiaoCheng"
  ],
  "firstVolume": 9
 },
 {
  "id": "baiLuShuYuan",
  "name": "白露書院",
  "tier": "human",
  "parentId": "daJin",
  "description": "建於玉田山幻雲峰的儒門修仙宗門，以培養浩然之氣為核心，招收弟子不定期。",
  "connections": [
   "daJin"
  ],
  "firstVolume": 6
 },
 {
  "id": "heiYeSenLin",
  "name": "黑葉森林",
  "tier": "spirit",
  "parentId": "manHuangShiJie",
  "description": "木族最邊緣的龐大森林，葉帶幽黑花紋，有銀色夢羅靈樹監控全境，由銀階木靈主事。",
  "connections": [
   "manHuangShiJie"
  ],
  "firstVolume": 9
 },
 {
  "id": "kuiXingDao2",
  "name": "奎星島",
  "tier": "human",
  "parentId": "luanXingHai",
  "description": "亂星海內海島嶼，文思月一家及田琴兒所在，有傳送陣連接天南。",
  "connections": [
   "luanXingHai"
  ],
  "firstVolume": 7
 },
 {
  "id": "jiangGuo",
  "name": "姜國",
  "tier": "human",
  "parentId": "tianNan",
  "description": "夾在越國與天羅國之間的小國，本弧前半月已被魔道六宗攻陷。",
  "connections": [
   "tianNan"
  ],
  "firstVolume": 3
 },
 {
  "id": "anYuanCheng",
  "name": "安遠城",
  "tier": "spirit",
  "parentId": "tianYuanJing",
  "description": "天元境偏遠小城，可居住近億人，本弧中遭四路獸群聯合攻破。",
  "connections": [
   "tianYuanJing"
  ],
  "firstVolume": 8
 },
 {
  "id": "heiShuiShanMai",
  "name": "黑水山脈",
  "tier": "spirit",
  "parentId": "fengYuanDaLu",
  "description": "靈界人族領域山脈，有隱宗一脈藏身，天馬門弟子最初打算投靠之處。",
  "connections": [
   "fengYuanDaLu"
  ],
  "firstVolume": 10,
  "access": {
   "hidden": true
  }
 },
 {
  "id": "daHuKuangDian",
  "name": "大湖（礦點所在湖泊）",
  "tier": "spirit",
  "parentId": "guangHanJie",
  "description": "廣寒界一眼望不到邊的巨型湖泊，棲息大量飛虹魚，湖心島高峰含石茧族所需黑紫礦石。",
  "connections": [
   "guangHanJie"
  ],
  "firstVolume": 9
 },
 {
  "id": "tongLingDian",
  "name": "通靈殿",
  "tier": "spirit",
  "parentId": "yunCheng",
  "description": "萬古族在雲城八雲山附近城堡的重要議事殿堂，門口由兩具煉虛頂階通靈傀儡守衛。",
  "connections": [
   "yunCheng"
  ],
  "firstVolume": 9
 },
 {
  "id": "xuanYangHuoDi",
  "name": "玄陽火地",
  "tier": "human",
  "parentId": "huangFengGu",
  "description": "黃楓谷岳麓殿借用地肺之火的專門場所，可代替先天真火煉丹煉器，乃韓立謀製築基丹的關鍵地。",
  "connections": [
   "huangFengGu"
  ],
  "firstVolume": 2
 },
 {
  "id": "bingYuanDao",
  "name": "冰淵島",
  "tier": "human",
  "parentId": "daJin",
  "description": "冰海中的島嶼，冰鳳一族之主冰鳳所在之地，與小極宮歷史上素有恩怨。",
  "connections": [
   "daJin"
  ],
  "firstVolume": 6
 },
 {
  "id": "xiaoJiGongBingCheng",
  "name": "小極宮冰城",
  "tier": "human",
  "parentId": "beiMingDao",
  "description": "小極宮主要據點，外圍布有多層禁制大陣，後被車老妖以萬妖幡所破。",
  "connections": [
   "beiMingDao"
  ],
  "firstVolume": 6,
  "access": {
   "requiresFlag": "小極宮冰城禁制大陣破除"
  }
 },
 {
  "id": "lvZongZhaoZe",
  "name": "綠蹤沼澤",
  "tier": "human",
  "parentId": "yunMengShanMai",
  "description": "雲夢山中部古劍門與落雲宗交界的盆谷，常瀰淡粉紅瘴氣，乃雪雲狐棲息地，韓立等曾於此捕狐。",
  "connections": [
   "yunMengShanMai"
  ],
  "firstVolume": 5
 },
 {
  "id": "qingJiaoFeng",
  "name": "青蛟峰",
  "tier": "spirit",
  "parentId": "fuJiaoCheng",
  "description": "雷鳴大陸伏蛟城西百里形似飛天蛟龍的山峰，韓立與向之禮在此相約，血影於此被誅滅。",
  "connections": [
   "fuJiaoCheng"
  ],
  "firstVolume": 9
 },
 {
  "id": "fengYuanGuo",
  "name": "豐原國",
  "tier": "human",
  "parentId": "jiuGuoMeng",
  "description": "九國盟靠近慕蘭草原的三國之一，韓立逃出慕蘭草原後途經，彼時已被慕蘭法士先鋒佔據。",
  "connections": [
   "jiuGuoMeng"
  ],
  "firstVolume": 5
 },
 {
  "id": "wuYuanFu",
  "name": "五原府",
  "tier": "human",
  "parentId": "daJin",
  "description": "大晉遼州下轄府城之一，曹夢容師門玄玉道與犀靈宗的紛爭發生於其附近。",
  "connections": [
   "daJin"
  ],
  "firstVolume": 6
 },
 {
  "id": "huangShaLaoGuaiTuCheng",
  "name": "黃沙老怪土城",
  "tier": "demon",
  "parentId": "huanXiaoShaMo",
  "description": "黃沙老怪埋於魔界沙漠地下的金色宮殿土城，乃多界大乘聚會之所。",
  "connections": [
   "huanXiaoShaMo"
  ],
  "firstVolume": 11,
  "access": {
   "hidden": true
  }
 },
 {
  "id": "tianXingZongFangShi",
  "name": "天星宗坊市（星塵閣）",
  "tier": "human",
  "parentId": "yuanWuGuo",
  "description": "元武國天星宗所設坊市，以星塵閣為核心，韓立曾在此購置陣旗、委託煉器。",
  "connections": [
   "yuanWuGuo"
  ],
  "firstVolume": 3
 },
 {
  "id": "jinZhiKongJianXianRenGong",
  "name": "禁制空間（仙人宮殿）",
  "tier": "spirit",
  "parentId": "guangHanJie",
  "description": "廣寒界遺址廢墟破禁後傳送進入的異空間，有數百丈垂直山峰與紫濛宮殿，山道設萬階禁空禁制，宮內含主殿偏殿密室藥園。",
  "connections": [
   "guangHanJie"
  ],
  "firstVolume": 9,
  "access": {
   "hidden": true,
   "requiresFlag": "廣寒界遺址廢墟禁制破除"
  }
 },
 {
  "id": "baoFengShan",
  "name": "暴風山",
  "tier": "human",
  "parentId": "renJie",
  "description": "陰冥之地東北角光禿禿的通天巨山，千丈以上有陰冥之風，山腰迷幻之霧，山巔聚飛行陰獸，乃唯一可能逃出陰冥之地之處。",
  "connections": [
   "renJie"
  ],
  "firstVolume": 4
 },
 {
  "id": "baiZhuShanTianFuMen",
  "name": "白竹山天符門",
  "tier": "human",
  "parentId": "renJie",
  "description": "華雲州開江鎮附近的末流小修仙宗門，以化靈符、六丁天甲符、降靈符三大密符傳承，韓立曾於此研習符籙。",
  "connections": [
   "renJie"
  ],
  "firstVolume": 6
 },
 {
  "id": "shiMoZhiDi",
  "name": "始魔之地（虛空水域）",
  "tier": "demon",
  "parentId": "moJie",
  "description": "螟蟲之母被封印的上古虛空水域，韓立等大乘在此與蟲母元神化身及本體交戰，蟲母死後此虛空隨即崩塌。",
  "connections": [
   "moJie"
  ],
  "firstVolume": 11,
  "access": {
   "hidden": true,
   "requiresFlag": "始魔之地虛空水域封印解除"
  }
 },
 {
  "id": "bingHunGu",
  "name": "冰魂谷",
  "tier": "human",
  "parentId": "zhenHuanShan",
  "description": "太一門所在真桓山的神秘禁地，白姓化神修士閉關所在，常年冰雪覆蓋、靈氣匱乏。",
  "connections": [
   "zhenHuanShan"
  ],
  "firstVolume": 6,
  "access": {
   "hidden": true
  }
 },
 {
  "id": "jinYuZong",
  "name": "金玉宗",
  "tier": "spirit",
  "parentId": "tianYuanJing",
  "description": "天元境一中小宗門，擁有九玄明玉潭，每年接受煉體士浸泡換取結交關係。",
  "connections": [
   "tianYuanJing"
  ],
  "firstVolume": 8
 },
 {
  "id": "hanJiaCun",
  "name": "山邊小村（韓家村）",
  "tier": "human",
  "parentId": "jingZhou",
  "description": "越國鏡州偏僻貧苦的農村，韓立出生地，全村靠山吃山。",
  "connections": [
   "jingZhou"
  ],
  "firstVolume": 1
 },
 {
  "id": "sunYunZhen",
  "name": "隼雲鎮",
  "tier": "human",
  "parentId": "daJin",
  "description": "大晉遼州關寧府孔趙董三大世家共管的修仙世俗小鎮，居民為三家外系凡人，參王大會於附近雪陵山外圍舉行。",
  "connections": [
   "daJin"
  ],
  "firstVolume": 6
 },
 {
  "id": "tianXingChengShengShan",
  "name": "聖山（天星城聖山）",
  "tier": "human",
  "parentId": "tianXingCheng",
  "description": "亂星海星宮主峰，山腹深處有洞窟收藏元磁山，乃凌氏父母生前修煉之所。",
  "connections": [
   "tianXingCheng"
  ],
  "firstVolume": 7
 },
 {
  "id": "heiWuLin",
  "name": "黑霧林",
  "tier": "spirit",
  "parentId": "diYuan",
  "description": "地淵三層被陰霧籠罩的密林，外傳入內便無法出，實為木青布下禁制所致。",
  "connections": [
   "diYuan"
  ],
  "firstVolume": 9,
  "access": {
   "hidden": true,
   "requiresFlag": "地淵三層黑霧林禁制解除"
  }
 },
 {
  "id": "shengHuangCheng",
  "name": "聖皇城",
  "tier": "spirit",
  "parentId": "fengYuanDaLu",
  "description": "莫簡離鎮守的人族最大據點，魔族大軍未正面攻打，許芊羽等許家族人避居於此。",
  "connections": [
   "fengYuanDaLu"
  ],
  "firstVolume": 10
 },
 {
  "id": "xuanJingDao",
  "name": "玄晶道",
  "tier": "human",
  "parentId": "renJie",
  "description": "冰火道中冰屬性極端環境的險道，本弧出現銀光鼠，青易居士與極陰祖師分別走此道。",
  "connections": [
   "renJie"
  ],
  "firstVolume": 4,
  "access": {
   "hidden": true
  }
 },
 {
  "id": "shenChi",
  "name": "神池",
  "tier": "spirit",
  "parentId": "mingHeZhiDi",
  "description": "冥河之地陰骨山脈地下宮殿中的翠綠水池，白霧繚繞靈氣精純，冥河神乳蘊於其中，由一對雌雄冥雷獸守護。",
  "connections": [
   "mingHeZhiDi"
  ],
  "firstVolume": 9,
  "access": {
   "hidden": true,
   "requiresFlag": "冥河之地陰骨山脈神池守護解除"
  }
 },
 {
  "id": "yinGuShanMai",
  "name": "陰骨山脈",
  "tier": "spirit",
  "parentId": "mingHeZhiDi",
  "description": "冥河之地內部的灰色山脈，中心有巨型盆地，盆地中央被黑色光幕覆蓋，冥河神乳即藏其下。",
  "connections": [
   "mingHeZhiDi"
  ],
  "firstVolume": 9
 },
 {
  "id": "wanLingShanMai",
  "name": "萬嶺山脈",
  "tier": "human",
  "parentId": "dongYuGuo",
  "description": "東裕國昌州綿延廣大的山脈，長年被五色瘴氣封鎖，約每五十年瘴氣消褪一次，屆時修仙者大量湧入採藥尋寶。",
  "connections": [
   "dongYuGuo"
  ],
  "firstVolume": 6,
  "access": {
   "hidden": true,
   "requiresFlag": "萬嶺山脈五色瘴氣消褪"
  }
 },
 {
  "id": "zhongLouFu",
  "name": "中婁府",
  "tier": "human",
  "parentId": "daJin",
  "description": "大晉南疆府城之一，位於普雲府旁，韓立被逆星盤傳送後的落地之處。",
  "connections": [
   "daJin"
  ],
  "firstVolume": 6
 },
 {
  "id": "luoRiCheng",
  "name": "落日城",
  "tier": "spirit",
  "parentId": "tianYuanJing",
  "description": "靈界天無境城池，第一修士為煉虛初期的黃粱靈君，城主藍城主為化神中期，城外即落日之墓。",
  "connections": [
   "tianYuanJing"
  ],
  "firstVolume": 8
 },
 {
  "id": "xuGuo",
  "name": "胥國",
  "tier": "human",
  "parentId": "tianNan",
  "description": "天南一國，天恨老怪完成偷襲任務後將獲劃此地作為立派之所。",
  "connections": [
   "tianNan"
  ],
  "firstVolume": 5
 },
 {
  "id": "xueYanShan",
  "name": "血焰山",
  "tier": "spirit",
  "parentId": "diYuan",
  "description": "地淵五層地血老怪長居的黑色巨山，山腹傀儡迷宮密布，核心為漂浮於熔岩湖上的血焰宮與血煉堂。",
  "connections": [
   "diYuan"
  ],
  "firstVolume": 9,
  "access": {
   "hidden": true
  }
 },
 {
  "id": "hanJiaBao",
  "name": "韓家堡",
  "tier": "human",
  "parentId": "jingZhou",
  "description": "韓氏世家大族新居地，韓天嘯為當代家主，位於越國鏡州。",
  "connections": [
   "jingZhou"
  ],
  "firstVolume": 5
 },
 {
  "id": "longJiaJuDian",
  "name": "隴家世家聯盟據點",
  "tier": "spirit",
  "parentId": "fengYuanDaLu",
  "description": "隴家老祖聯合十三世家打造的千萬里山脈要塞，大小十幾城池互為犄角，隴家太上長老坐鎮。",
  "connections": [
   "fengYuanDaLu"
  ],
  "firstVolume": 10
 },
 {
  "id": "yuanHeDao",
  "name": "元合島",
  "tier": "spirit",
  "parentId": "lingJie",
  "description": "無涯海中方圓萬里大島，布置兩儀萬引大陣，青元宮座落其上，為韓立新洞府所在。",
  "connections": [
   "lingJie"
  ],
  "firstVolume": 11
 },
 {
  "id": "shuangXieShan",
  "name": "南疆郡雙蝎山",
  "tier": "human",
  "parentId": "daJin",
  "description": "大晉南疆潮雲府常年瘴氣籠罩的毒蝎產地，韓立在此收取五瓶天雷，富姓長老等於此謀劃培嬰丹。",
  "connections": [
   "daJin"
  ],
  "firstVolume": 6
 },
 {
  "id": "haiYuanDao",
  "name": "海猿島",
  "tier": "human",
  "parentId": "luanXingHai",
  "description": "亂星海偏僻中型島嶼，無島主管轄，因盛產海猿妖獸而聚集低階散修，韓立曾在此閉關結丹四年。",
  "connections": [
   "luanXingHai"
  ],
  "firstVolume": 4
 },
 {
  "id": "yinMingZhiDi",
  "name": "陰冥之地",
  "tier": "human",
  "parentId": "renJie",
  "description": "充滿絕靈之氣、方圓百里的封閉異域，法力永久封禁，棲居人類村落、陰獸與妖獸，每隔數年才與外界相通一次。",
  "connections": [
   "renJie"
  ],
  "firstVolume": 4,
  "access": {
   "hidden": true,
   "requiresFlag": "陰冥之地通道開啟"
  }
 },
 {
  "id": "qingLuoShaMo",
  "name": "青羅沙漠",
  "tier": "spirit",
  "parentId": "tianYuanJing",
  "description": "天元境內空間裂縫頻發之地，韓立初入靈界的落腳處，有蝎潮週期，後被六翼霜蚣清場殆盡。",
  "connections": [
   "tianYuanJing"
  ],
  "firstVolume": 8
 },
 {
  "id": "yuanCiShan",
  "name": "元磁山（天星島聖山）",
  "tier": "human",
  "parentId": "luanXingHai",
  "description": "天星雙聖修煉元磁神光之所，防守天下無雙，修士只要處其覆蓋範圍戰力大增。",
  "connections": [
   "luanXingHai"
  ],
  "firstVolume": 7
 },
 {
  "id": "cangKunMiDong",
  "name": "蒼坤秘洞（玉璣閣）",
  "tier": "human",
  "parentId": "muLanCaoYuan",
  "description": "蒼坤上人在慕蘭草原邊緣石山內設置的秘密洞府，外設太妙神禁，內有玉璣閣兩層，藏墜魔谷寶物及功法卷軸。",
  "connections": [
   "muLanCaoYuan"
  ],
  "firstVolume": 5,
  "access": {
   "hidden": true,
   "requiresFlag": "太妙神禁破除"
  }
 },
 {
  "id": "xueJiangCheng",
  "name": "雪江小城",
  "tier": "human",
  "parentId": "daJin",
  "description": "大晉遼州關寧府小城，三大世家遷移隼雲鎮原居民之處，韓立在此尋馮家老僕取得密窟地圖。",
  "connections": [
   "daJin"
  ],
  "firstVolume": 6
 },
 {
  "id": "yinJiaoShan",
  "name": "銀蛟山",
  "tier": "human",
  "parentId": "daJin",
  "description": "大晉南疆蜿蜒如巨蛇的銀葉山脈，頭部有多座活火山，韓立曾在其地下裂縫中耗數月煉製三焰扇。",
  "connections": [
   "daJin"
  ],
  "firstVolume": 6
 },
 {
  "id": "rongYanLu",
  "name": "熔巖路",
  "tier": "human",
  "parentId": "daJin",
  "description": "冰火道中的火屬性極端險境，設熔岩沼澤、含鐵火蟻群的黑沙漠、熔岩河，飛行即遭閃電劈殺。",
  "connections": [
   "daJin"
  ],
  "firstVolume": 4,
  "access": {
   "hidden": true,
   "requiresItem": "冰火道路引"
  }
 },
 {
  "id": "tongLingZhanBao",
  "name": "通靈戰堡",
  "tier": "spirit",
  "parentId": "yunCheng",
  "description": "萬古族在雲城八雲山的總部，本弧中成為撤離前的臨時指揮中心。",
  "connections": [
   "yunCheng"
  ],
  "firstVolume": 9
 },
 {
  "id": "moKeJie",
  "name": "摩柯界",
  "tier": "immortal",
  "parentId": "xianJie",
  "description": "比靈界更強大的界面，龍島懸浮於其附近星空，韓立由此進入龍島。",
  "connections": [
   "xianJie"
  ],
  "firstVolume": 12
 },
 {
  "id": "feiXianTai",
  "name": "飛仙臺",
  "tier": "immortal",
  "parentId": "beiHanXianYu",
  "description": "供下界修士飛升抵達仙界的接引高台，中有乳白溫泉池，四周覆蔚藍光幕，地處偏遠少有監察使到訪。",
  "connections": [
   "beiHanXianYu"
  ],
  "firstVolume": 13
 },
 {
  "id": "tianShuiHe",
  "name": "天水河",
  "tier": "human",
  "parentId": "muLanCaoYuan",
  "description": "天瀾草原第一大河，上游與大晉舜江相連，韓立曾在此以假死術封凍沉河逃入大晉。",
  "connections": [
   "muLanCaoYuan"
  ],
  "firstVolume": 6
 },
 {
  "id": "kuiXingCheng",
  "name": "魁星城",
  "tier": "human",
  "parentId": "kuiXingDao",
  "description": "魁星島第一大城，含天都街修士交易區及雲夢閣。",
  "connections": [
   "kuiXingDao"
  ],
  "firstVolume": 4
 },
 {
  "id": "leiYunGe",
  "name": "雷雲閣",
  "tier": "spirit",
  "parentId": "moJinShanMai",
  "description": "魔金山脈外側的城鎮閣樓，為入山探險者出發前的聚集點，韓立等人曾在此與彥姓老者、綠髮異族接觸。",
  "connections": [
   "moJinShanMai"
  ],
  "firstVolume": 9
 },
 {
  "id": "fuYeLin",
  "name": "腐葉林",
  "tier": "spirit",
  "parentId": "diYuan",
  "description": "地淵二層穢氣最凝結之地，低矮腐葉樹密布，水潭旁長有冥焰果樹。",
  "connections": [
   "diYuan"
  ],
  "firstVolume": 9,
  "access": {
   "hidden": true
  }
 },
 {
  "id": "taiYueShanMaiYue",
  "name": "太嶽山脈",
  "tier": "human",
  "parentId": "yueGuo",
  "description": "越國境內綿延山脈，黃楓谷即坐落其間，撤離隊伍出發後須穿越此山。",
  "connections": [
   "yueGuo"
  ],
  "firstVolume": 3
 },
 {
  "id": "xunXiangZhai",
  "name": "熏香寨",
  "tier": "demon",
  "parentId": "tieShaLing",
  "description": "青翼族四大駐地之一，以三座山峰為依靠、紫色香木環繞並布有禁制，核心族人聚居於藏靈閣。",
  "connections": [
   "tieShaLing"
  ],
  "firstVolume": 10
 },
 {
  "id": "leiYunZhen",
  "name": "雷雲鎮",
  "tier": "spirit",
  "parentId": "moJinShanMai",
  "description": "青靈雲海中以雷雲閣為中心的石屋小鎮，發放進入魔金山脈所需的辟雷傘。",
  "connections": [
   "moJinShanMai"
  ],
  "firstVolume": 9
 },
 {
  "id": "wanHuaShanMai",
  "name": "萬花山脈",
  "tier": "demon",
  "parentId": "moJie",
  "description": "魔界聖界中景色秀美的山脈，邪蓮聖祖居所所在，中心矗立朝天峰。",
  "connections": [
   "moJie"
  ],
  "firstVolume": 11
 },
 {
  "id": "tianJiDian",
  "name": "天機殿",
  "tier": "human",
  "parentId": "daJin",
  "description": "天機閣總殿，藏於芥子遊離空間，每數年自行改換入口位置，精美宮殿群懸浮半空。",
  "connections": [
   "daJin"
  ],
  "firstVolume": 7,
  "access": {
   "hidden": true,
   "requiresItem": "天機閣入殿信物"
  }
 },
 {
  "id": "tianLanZhuDi",
  "name": "天瀾聖殿駐地",
  "tier": "human",
  "parentId": "tianLanShengDian",
  "description": "天瀾聖殿指定的進貢部落中繼駐地，巨型石柱法陣護城，設有供修仙者歇息的青石殿。",
  "connections": [
   "tianLanShengDian"
  ],
  "firstVolume": 6
 },
 {
  "id": "heiHuCheng",
  "name": "黑葫城",
  "tier": "demon",
  "parentId": "moJie",
  "description": "魔界聖界高原上的魔族城池，曾遭螟蟲海圍攻兩日，韓立出手解圍。",
  "connections": [
   "moJie"
  ],
  "firstVolume": 11
 },
 {
  "id": "qingYunShanKui",
  "name": "青雲山",
  "tier": "human",
  "parentId": "kuiXingDao",
  "description": "魁星島靈眼所在地，由天柱、天宵、天門三大主峰及三百餘小峰組成，為修士洞府集中處。",
  "connections": [
   "kuiXingDao"
  ],
  "firstVolume": 4
 },
 {
  "id": "huangSeShaMo",
  "name": "黃色沙漠",
  "tier": "human",
  "parentId": "renJie",
  "description": "陰冥之地高牆村落附近的廣闊沙漠，定期颳起人類無法存活的黑色陰風。",
  "connections": [
   "renJie"
  ],
  "firstVolume": 4,
  "access": {
   "hidden": true
  }
 },
 {
  "id": "minZhou",
  "name": "閩州",
  "tier": "human",
  "parentId": "xiGuo",
  "description": "溪國七州中緊鄰無邊海、面積最大的一州，韓立三人初入溪國的落腳地。",
  "connections": [
   "xiGuo"
  ],
  "firstVolume": 5
 },
 {
  "id": "guiYuanZhiDi",
  "name": "鬼冤之地",
  "tier": "human",
  "parentId": "xuTianDian",
  "description": "虛天殿第一關，灰白鬼霧充斥、死者化為厲魄，設鬼王、鬼夜叉等危機，通過後抵達花園空間。",
  "connections": [
   "xuTianDian"
  ],
  "firstVolume": 4,
  "access": {
   "hidden": true,
   "requiresFlag": "虛天殿封印解除"
  }
 },
 {
  "id": "xueZhouZhiMen",
  "name": "血咒之門",
  "tier": "human",
  "parentId": "zhuiMoGu",
  "description": "墜魔谷深處水潭底鐘乳洞中以上古修士精血封印的拱形石門，門刻獨角鬼頭浮現血光，南隴侯世代口傳秘地。",
  "connections": [
   "zhuiMoGu"
  ],
  "firstVolume": 6,
  "access": {
   "hidden": true,
   "requiresFlag": "血咒之門精血封印解除"
  }
 },
 {
  "id": "lingYanZhiShuDongKu",
  "name": "靈眼之樹洞窟",
  "tier": "human",
  "parentId": "yueGuo",
  "description": "三派禁地內巨型鐘乳石洞窟，靈眼之樹生長於石林中心，外覆淡金色光罩保護。",
  "connections": [
   "yueGuo"
  ],
  "firstVolume": 5,
  "access": {
   "hidden": true,
   "requiresItem": "三派禁地入禁信物"
  }
 },
 {
  "id": "bingShaZhiDi",
  "name": "冰煞之地",
  "tier": "spirit",
  "parentId": "diYuan",
  "description": "地淵二層著名危地，晶瑩幽黑冰川一望無際，棲息大量冰煞妖物，傳聞有冰煞妖王。",
  "connections": [
   "diYuan"
  ],
  "firstVolume": 9,
  "access": {
   "hidden": true
  }
 },
 {
  "id": "baYunShan",
  "name": "八雲山",
  "tier": "spirit",
  "parentId": "yunCheng",
  "description": "雲城內八座極品靈脈靈山，開有大量洞府供修煉者租用，韓立曾安置於雲夢山。",
  "connections": [
   "yunCheng"
  ],
  "firstVolume": 9
 },
 {
  "id": "shanYueGu",
  "name": "山岳谷",
  "tier": "spirit",
  "parentId": "moJinShanMai",
  "description": "魔金山脈邊緣深不可測的山谷，眾修士法盤感應到芝仙波動，黑淵鰐棲居附近。",
  "connections": [
   "moJinShanMai"
  ],
  "firstVolume": 9,
  "access": {
   "hidden": true
  }
 },
 {
  "id": "bingXueShanZiFengShan",
  "name": "冰雪山與紫楓山",
  "tier": "spirit",
  "parentId": "manHuangShiJie",
  "description": "蠻荒界內以幻陣遮隱的雙峰標誌地，聯隊秘密會合的集合地點。",
  "connections": [
   "manHuangShiJie"
  ],
  "firstVolume": 9,
  "access": {
   "hidden": true
  }
 },
 {
  "id": "chenShuiZhen",
  "name": "沉水鎮",
  "tier": "demon",
  "parentId": "moJie",
  "description": "魔界城鎮，血光聖祖本體在此截殺韓立，此戰後其遺骸被發現而轟動魔界。",
  "connections": [
   "moJie"
  ],
  "firstVolume": 10
 },
 {
  "id": "moZuMoCheng",
  "name": "魔族魔城",
  "tier": "spirit",
  "parentId": "fengYuanDaLu",
  "description": "血光聖祖化身於風元大陸魔斑破裂處主持建造的三角巨塔魔族城市，百里石牆環繞並布祭壇放魔氣。",
  "connections": [
   "fengYuanDaLu"
  ],
  "firstVolume": 10
 },
 {
  "id": "feiCuiCaoYuan",
  "name": "翡翠草原",
  "tier": "spirit",
  "parentId": "tianYuanJing",
  "description": "天元境內青狼獸棲息地，獸潮爆發源頭之一，過往車隊全員膽寒穿越。",
  "connections": [
   "tianYuanJing"
  ],
  "firstVolume": 8
 },
 {
  "id": "baoGuangGe",
  "name": "寶光閣",
  "tier": "human",
  "parentId": "xuTianDian",
  "description": "虛天殿外殿閣樓之一，分兩層藏有上古古寶，二層以球形光罩保護數十件古寶。",
  "connections": [
   "xuTianDian"
  ],
  "firstVolume": 4,
  "access": {
   "hidden": true,
   "requiresFlag": "虛天殿封印解除"
  }
 },
 {
  "id": "hongHuDao",
  "name": "紅瑚島",
  "tier": "human",
  "parentId": "luanXingHai",
  "description": "外星海中由大量鮮紅珊瑚礁堆積而成的環形小島，韓立曾在此布下三陣以霓裳草誘殺妖獸。",
  "connections": [
   "luanXingHai"
  ],
  "firstVolume": 4
 },
 {
  "id": "huXinDao",
  "name": "湖心島",
  "tier": "spirit",
  "parentId": "guangHanJie",
  "description": "廣寒界大湖中由高灰峰與低翠峰組成的島嶼，高峰含稀有礦石、低峰生長靈藥。",
  "connections": [
   "guangHanJie"
  ],
  "firstVolume": 9
 },
 {
  "id": "fengMoMen",
  "name": "封魔門",
  "tier": "spirit",
  "parentId": "diYuan",
  "description": "地淵入口處的銀色巨門，由守衛駐守，須以法陣與木牌開啟，門外為數百丈高青灰色巨牆。",
  "connections": [
   "diYuan"
  ],
  "firstVolume": 9,
  "access": {
   "requiresItem": "地淵開門木牌"
  }
 },
 {
  "id": "heiMingBanDao",
  "name": "黑冥半島",
  "tier": "spirit",
  "parentId": "fengYuanDaLu",
  "description": "風元大陸邊緣赤魔海中的巨型半島，一半被黑冥霧海籠罩、另一半為黑隱山脈，靈氣濃郁。",
  "connections": [
   "fengYuanDaLu"
  ],
  "firstVolume": 9
 },
 {
  "id": "yinChuanLvZhou",
  "name": "銀川綠洲",
  "tier": "demon",
  "parentId": "huanXiaoShaMo",
  "description": "幻嘯沙漠中的天然綠洲，白家設有據點，留守弟子曾離奇失蹤（為礦脈魔靈所殺）。",
  "connections": [
   "huanXiaoShaMo"
  ],
  "firstVolume": 10
 },
 {
  "id": "yuHuangDing",
  "name": "玉皇頂",
  "tier": "spirit",
  "parentId": "fengYuanDaLu",
  "description": "飛靈族聯席長老會召集各分支聖子試煉前匯聚的巨峰建築群，設有較技場、偏殿等設施。",
  "connections": [
   "fengYuanDaLu"
  ],
  "firstVolume": 9
 },
 {
  "id": "wanLingDian",
  "name": "萬靈殿",
  "tier": "human",
  "parentId": "renJie",
  "description": "萬靈谷山壁中開鑿的大殿，大典期間供各世家長老家主聚集商議。",
  "connections": [
   "renJie"
  ],
  "firstVolume": 10
 },
 {
  "id": "shenHaiBaiYuGong",
  "name": "深海白玉宮殿",
  "tier": "human",
  "parentId": "renJie",
  "description": "不明深海中骷髏守護者的居所，十二座青銅古燈感應靈獸狀態，疑為某大勢力的隱秘基地。",
  "connections": [
   "renJie"
  ],
  "firstVolume": 9,
  "access": {
   "hidden": true
  }
 },
 {
  "id": "chiRongShanMai",
  "name": "赤融山脈",
  "tier": "spirit",
  "parentId": "fengYuanDaLu",
  "description": "連綿數百萬里的活火山脈，盛產火屬性靈石與礦材，赫連商盟黑焦峰拍賣大會入口所在。",
  "connections": [
   "fengYuanDaLu"
  ],
  "firstVolume": 11
 },
 {
  "id": "zhenLongZhiDao",
  "name": "真龍之島",
  "tier": "human",
  "parentId": "renJie",
  "description": "存在於數個界面間獨立空間的傳說之島，棲居各種天地生靈以真龍為主，廣靈道果大會在此召開。",
  "connections": [
   "renJie"
  ],
  "firstVolume": 11,
  "access": {
   "hidden": true
  }
 },
 {
  "id": "xuJia",
  "name": "許家",
  "tier": "spirit",
  "parentId": "fengYuanDaLu",
  "description": "真靈大族之一許家，冰魄先祖血魂昏迷於此。",
  "connections": [
   "fengYuanDaLu"
  ],
  "firstVolume": 11
 },
 {
  "id": "tianShuGe",
  "name": "天書閣",
  "tier": "spirit",
  "parentId": "shengDao",
  "description": "聖島上收藏萬餘種秘術的藏術閣，可以秘術換秘術。",
  "connections": [
   "shengDao"
  ],
  "firstVolume": 11
 },
 {
  "id": "yingXianGong",
  "name": "迎仙宮",
  "tier": "spirit",
  "parentId": "xuanWuJing",
  "description": "九仙山九座山峰各設一座，專供合體修士居住，韓立住第五峰，萬骨真人住頂峰，隴家住第九峰。",
  "connections": [
   "xuanWuJing"
  ],
  "firstVolume": 10
 },
 {
  "id": "muXianDian",
  "name": "木仙殿",
  "tier": "spirit",
  "parentId": "diYuan",
  "description": "木青在地淵三層黑霧林的據點，四周布有強力禁制，傳送陣可直達地淵各層。",
  "connections": [
   "diYuan"
  ],
  "firstVolume": 9,
  "access": {
   "hidden": true,
   "requiresFlag": "地淵三層黑霧林禁制破除"
  }
 },
 {
  "id": "xuRiShaMo",
  "name": "旭日沙漠",
  "tier": "spirit",
  "parentId": "guangHanJie",
  "description": "廣寒界中的極端高溫地域，詭異日光令煉虛存在半日內化灰，眾修不敢進入。",
  "connections": [
   "guangHanJie"
  ],
  "firstVolume": 9
 },
 {
  "id": "jinMaCheng",
  "name": "金馬城",
  "tier": "human",
  "parentId": "yuanWuGuo",
  "description": "元武國城鎮，韓立與齊雲霄相約見面之地，城內清泉茶舍為齊雲霄聯絡點。",
  "connections": [
   "yuanWuGuo"
  ],
  "firstVolume": 3
 },
 {
  "id": "yuanGuiDao",
  "name": "元龜島",
  "tier": "human",
  "parentId": "luanXingHai",
  "description": "亂星海中島嶼，赤火老怪的根據地。",
  "connections": [
   "luanXingHai"
  ],
  "firstVolume": 4
 },
 {
  "id": "kunLingGu",
  "name": "困靈谷",
  "tier": "demon",
  "parentId": "kuLingDao",
  "description": "苦靈島兩座翠綠巨峰之間的山谷，內有靈霄天柱及洗靈池傳送法陣。",
  "connections": [
   "kuLingDao"
  ],
  "firstVolume": 10,
  "access": {
   "hidden": true
  }
 },
 {
  "id": "qingLingYunHai",
  "name": "青靈雲海",
  "tier": "spirit",
  "parentId": "moJinShanMai",
  "description": "由青色濃霧與無盡雷電構成的天然屏障，唯一可合法進入魔金山脈的通道。",
  "connections": [
   "moJinShanMai"
  ],
  "firstVolume": 9
 },
 {
  "id": "lingMiaoYuan",
  "name": "靈緲園",
  "tier": "human",
  "parentId": "zhuiMoGu",
  "description": "傳說中位於靈界與人界交界的特殊空間，整個墜魔谷即上古修士為看守此地而建，鬼靈門宗主視之為入谷真正目標。",
  "connections": [
   "zhuiMoGu"
  ],
  "firstVolume": 6,
  "access": {
   "hidden": true,
   "requiresFlag": "墜魔谷內谷封印開啟"
  }
 },
 {
  "id": "luoChaoCaoYuan",
  "name": "落潮草原",
  "tier": "spirit",
  "parentId": "xueTianDaLu",
  "description": "血天大陸的妖獸之地草原，韓立一行在此搜尋上古祭壇未果。",
  "connections": [
   "xueTianDaLu"
  ],
  "firstVolume": 11
 },
 {
  "id": "nanWuCheng",
  "name": "南烏城",
  "tier": "human",
  "parentId": "yueGuo",
  "description": "越國城鎮，輝明師伯弟子執行任務的所在地，鍾衛娘赴此邀請陳巧倩等援軍。",
  "connections": [
   "yueGuo"
  ],
  "firstVolume": 3
 },
 {
  "id": "huangMingDao",
  "name": "皇明島",
  "tier": "human",
  "parentId": "luanXingHai",
  "description": "亂星海內海中型島嶼，有上古廢棄傳送陣（魔道改造後單向接收），韓立由外海傳送至此。",
  "connections": [
   "luanXingHai"
  ],
  "firstVolume": 4
 },
 {
  "id": "tianPengZuShengCheng",
  "name": "天鵬族聖城",
  "tier": "spirit",
  "parentId": "tianPengShengCheng",
  "description": "天鵬族大長老金悅坐鎮之地，韓立化形大鵬震動聖城以尋求進入地淵。",
  "connections": [
   "tianPengShengCheng"
  ],
  "firstVolume": 10
 },
 {
  "id": "yuYangCheng",
  "name": "虞陽城",
  "tier": "spirit",
  "parentId": "tianYuanJing",
  "description": "天元境煉體士最集中的古城之一，天元聖皇早年修煉之地，設有聖塔典藏炼體法門，為靈具製造重鎮。",
  "connections": [
   "tianYuanJing"
  ],
  "firstVolume": 8
 },
 {
  "id": "feiLingDian",
  "name": "飛靈殿",
  "tier": "spirit",
  "parentId": "tianYuanChengSpirit",
  "description": "天淵城中專供飛升修士及其後裔暫住的殿閣，分多層，化神修士居第四層。",
  "connections": [
   "tianYuanChengSpirit"
  ],
  "firstVolume": 8
 },
 {
  "id": "hanLiTai",
  "name": "寒驪臺",
  "tier": "human",
  "parentId": "xuTianDian",
  "description": "虛天殿內殿三層的百餘丈高臺，外有天罡罩禁制，臺頂祭壇下方以乾藍冰焰封印虛天鼎之大洞。",
  "connections": [
   "xuTianDian"
  ],
  "firstVolume": 4,
  "access": {
   "hidden": true,
   "requiresFlag": "虛天殿封印解除"
  }
 },
 {
  "id": "taiHeCheng",
  "name": "泰和城",
  "tier": "human",
  "parentId": "yuanWuGuo",
  "description": "距紫道山最近的凡人城鎮，韓立偽裝散修時暫住於此。",
  "connections": [
   "yuanWuGuo"
  ],
  "firstVolume": 5
 },
 {
  "id": "guangGuiCheng",
  "name": "廣貴城",
  "tier": "human",
  "parentId": "lanZhou",
  "description": "嵐州最南部小城，三面環山一面靠湖，太南山位於其西面四十里。",
  "connections": [
   "lanZhou"
  ],
  "firstVolume": 2
 },
 {
  "id": "baiChiShan",
  "name": "白池山",
  "tier": "human",
  "parentId": "yuanWuGuo",
  "description": "元武國散修聚會之地，西峰頂部設有古寺和石亭，定期舉辦小型聚會。",
  "connections": [
   "yuanWuGuo"
  ],
  "firstVolume": 3
 },
 {
  "id": "lianGuYa",
  "name": "煉骨崖",
  "tier": "human",
  "parentId": "qiXuanMen",
  "description": "七玄門入門三段考核場地，由竹林坡、疊積岩壁與三十餘丈垂直懸崖組成，正午前登頂者合格。",
  "connections": [
   "qiXuanMen"
  ],
  "firstVolume": 1
 },
 {
  "id": "xueShiShanMai",
  "name": "血石山脈",
  "tier": "demon",
  "parentId": "moJie",
  "description": "魔界東邊荒僻山脈，資源匱乏、魔族稀少，為韓立等人進入魔界的落腳點。",
  "connections": [
   "moJie"
  ],
  "firstVolume": 10
 },
 {
  "id": "lanHuDao",
  "name": "藍湖島",
  "tier": "spirit",
  "parentId": "fengYuanDaLu",
  "description": "火瑚群島南方海域被冰雪覆蓋的冰島，原為銀鮫居士聚族之所，遭雙頭怪蛾入侵，銀鮫居士於此陨落。",
  "connections": [
   "fengYuanDaLu"
  ],
  "firstVolume": 9
 },
 {
  "id": "heLianDiXia",
  "name": "赫連商盟地下世界",
  "tier": "spirit",
  "parentId": "fengYuanDaLu",
  "description": "黑焦峰下方的地下洞天，設有小型城鎮、商鋪及拍賣會場，為赫連商盟在風元的核心據點。",
  "connections": [
   "fengYuanDaLu"
  ],
  "firstVolume": 11,
  "access": {
   "hidden": true,
   "requiresItem": "赫連商盟令牌"
  }
 },
 {
  "id": "xueLianFeng",
  "name": "霜郡雪連峰",
  "tier": "human",
  "parentId": "daJin",
  "description": "大晉北部霜郡的靈地山峰，韓立驅逐李家後佔據閉關十餘年，周圍自成禁區。",
  "connections": [
   "daJin"
  ],
  "firstVolume": 6
 },
 {
  "id": "jinJiaCheng",
  "name": "金甲城",
  "tier": "spirit",
  "parentId": "leiMingDaLu",
  "description": "天雲十三族在該區域最大的城市兼要塞，韓立逃離時的目標，惜未能抵達。",
  "connections": [
   "leiMingDaLu"
  ],
  "firstVolume": 9
 },
 {
  "id": "feiYunGu",
  "name": "翡雲谷",
  "tier": "demon",
  "parentId": "moJie",
  "description": "魔界中六極的養傷之地，宝花在此施展玄天靈域斬殺六極，奪回始祖之位。",
  "connections": [
   "moJie"
  ],
  "firstVolume": 11
 },
 {
  "id": "kuMenDao",
  "name": "苦門島",
  "tier": "human",
  "parentId": "luanXingHai",
  "description": "亂星海內海中黃沙門獨占的大型島嶼，港口繁盛，凡人城市數座，韓立脫困後在此短暫停留。",
  "connections": [
   "luanXingHai"
  ],
  "firstVolume": 7
 },
 {
  "id": "baoLingSi",
  "name": "寶靈寺",
  "tier": "human",
  "parentId": "kunWuShan",
  "description": "玉田山上與白露書院相鄰的佛宗道場，藏有一口青蟬鐘。",
  "connections": [
   "kunWuShan"
  ],
  "firstVolume": 6
 },
 {
  "id": "feiXianFeng",
  "name": "飛仙峰",
  "tier": "spirit",
  "parentId": "fengYuanDaLu",
  "description": "九仙山最高峰，萬寶大殿所在地，人妖兩族千年萬寶大會的主場。",
  "connections": [
   "fengYuanDaLu"
  ],
  "firstVolume": 10
 },
 {
  "id": "lingBieDao",
  "name": "靈鱉島",
  "tier": "human",
  "parentId": "wuBianHai",
  "description": "七靈島之一，昔年由魏無涯等人贈予韓立，後轉讓落雲宗管理，奎煥等弟子駐守。",
  "connections": [
   "wuBianHai"
  ],
  "firstVolume": 7
 },
 {
  "id": "ziDaoShan",
  "name": "紫道山",
  "tier": "human",
  "parentId": "yuanWuGuo",
  "description": "元武國西部付家主堡所在，長年被毒雲紫瘴陣的紫霧籠罩。",
  "connections": [
   "yuanWuGuo"
  ],
  "firstVolume": 5
 },
 {
  "id": "xueSeJinDi",
  "name": "血色禁地",
  "tier": "human",
  "parentId": "jianZhou",
  "description": "七大派共同管理的天地靈藥產地，每五年開放一次，分外圍與中心三層，平時封閉。",
  "connections": [
   "jianZhou"
  ],
  "firstVolume": 3,
  "access": {
   "hidden": true
  }
 },
 {
  "id": "qiLingDao",
  "name": "七靈島",
  "tier": "human",
  "parentId": "wuBianHai",
  "description": "大漩渦附近浮現的七座上佳靈脈小島，原為上古封印大陣一部分，靈龜、靈鳳、靈鰲等分屬太真門、合歡宗、落雲宗。",
  "connections": [
   "wuBianHai"
  ],
  "firstVolume": 6
 },
 {
  "id": "leiKongDao",
  "name": "雷空島",
  "tier": "human",
  "parentId": "luanXingHai",
  "description": "亂星海外海銀鯊島以北的優秀靈脈島嶼，盛產稀有靈藥並設有坊市，韓立曾在此截殺妙鶴真人。",
  "connections": [
   "luanXingHai"
  ],
  "firstVolume": 7
 },
 {
  "id": "yueYangGong",
  "name": "岳陽宮",
  "tier": "human",
  "parentId": "tianYueShanMai",
  "description": "正道十大宗門前五之一，位於天岳山脈南天峰，飼養昊陽鳥，有元嬰後期修士坐鎮。",
  "connections": [
   "tianYueShanMai"
  ],
  "firstVolume": 6
 },
 {
  "id": "lingZuLingDi",
  "name": "靈族領地",
  "tier": "spirit",
  "parentId": "lingJie",
  "description": "神秘的靈族聚居地，靈王手持三清雷霄符，韓立與莫簡離曾計劃前往交易。",
  "connections": [
   "lingJie"
  ],
  "firstVolume": 11
 },
 {
  "id": "taiNanShan",
  "name": "太南山",
  "tier": "human",
  "parentId": "taiNanGu",
  "description": "嵐州第四高山，高逾三千米常年霧繞，山頂有太南寺，北坡迷霧處即太南谷入口。",
  "connections": [
   "taiNanGu"
  ],
  "firstVolume": 2
 },
 {
  "id": "beiMingBingDao",
  "name": "北冥冰島",
  "tier": "human",
  "parentId": "daJin",
  "description": "北夜小極宮所在，地處天元陰脈寒眼之上，寒髓產地，定期遭高階妖獸攻打。",
  "connections": [
   "daJin"
  ],
  "firstVolume": 6
 },
 {
  "id": "tianLingCheng",
  "name": "天靈城",
  "tier": "spirit",
  "parentId": "fengYuanDaLu",
  "description": "人族三大皇城之一，本弧被魔族大軍激戰五月後攻陷，靈皇重傷突圍，城中擎天巨樹被砍倒。",
  "connections": [
   "fengYuanDaLu"
  ],
  "firstVolume": 10
 },
 {
  "id": "xueLingShanMai",
  "name": "雪陵山脈",
  "tier": "human",
  "parentId": "daJin",
  "description": "綿延萬里的大山脈，深處暗藏炫曜王古墓，時有修士離奇失蹤，馮家密窟亦建於其外圍。",
  "connections": [
   "daJin"
  ],
  "firstVolume": 6
 },
 {
  "id": "waiGu",
  "name": "外谷",
  "tier": "human",
  "parentId": "zhuiMoGu",
  "description": "墜魔谷外圍區域，空間裂縫較少，四周有上古禁制，瘴氣散去後各路修士首先落腳之處。",
  "connections": [
   "zhuiMoGu"
  ],
  "firstVolume": 6
 },
 {
  "id": "tianZhuShan",
  "name": "天柱山",
  "tier": "human",
  "parentId": "xiGuo",
  "description": "溪國孤峰，高萬餘丈，陰羅宗長老選此設傳送陣與韓立約見。",
  "connections": [
   "xiGuo"
  ],
  "firstVolume": 5
 },
 {
  "id": "qiongLaiShan",
  "name": "瓊籟山",
  "tier": "spirit",
  "parentId": "manHuangShiJie",
  "description": "天淵城附近數十萬里廣的巨型山脈，靈氣濃厚，內有數座小靈礦及天然靈藥地，韓立選為修煉靈地。",
  "connections": [
   "manHuangShiJie"
  ],
  "firstVolume": 8
 },
 {
  "id": "dongShiCheng",
  "name": "東石城",
  "tier": "human",
  "parentId": "kuiXingDao",
  "description": "魁星島東部的白石城市，每月一次開市日，為斗法比賽及行商挑戰的舉辦地。",
  "connections": [
   "kuiXingDao"
  ],
  "firstVolume": 4
 },
 {
  "id": "zhongJianShanMai",
  "name": "中劍山脈",
  "tier": "spirit",
  "parentId": "fengYuanDaLu",
  "description": "倚天城萬里外的山脈，魔族大軍真正主力精銳部隊的駐紮地。",
  "connections": [
   "fengYuanDaLu"
  ],
  "firstVolume": 10
 },
 {
  "id": "cuiYanCheng",
  "name": "翠煙城",
  "tier": "spirit",
  "parentId": "lingJie",
  "description": "靈族中部最大城池，銀月等人的留守據點。",
  "connections": [
   "lingJie"
  ],
  "firstVolume": 11
 },
 {
  "id": "heiShuiHu",
  "name": "黑水湖",
  "tier": "spirit",
  "parentId": "lingJie",
  "description": "靈天要塞旁的天然奇毒水域，棲息大量玄蜍獸，飛行法寶速度大減。",
  "connections": [
   "lingJie"
  ],
  "firstVolume": 11
 },
 {
  "id": "tuLongZhen",
  "name": "土龍鎮",
  "tier": "demon",
  "parentId": "huanXiaoShaMo",
  "description": "幻嘯沙漠邊緣附近的小型集鎮，韓立與羽衣少女在此補給青魔晶時遭獸尊殿長老追蹤。",
  "connections": [
   "huanXiaoShaMo"
  ],
  "firstVolume": 10
 },
 {
  "id": "jinGuYuan",
  "name": "金鼓原",
  "tier": "human",
  "parentId": "yueGuo",
  "description": "越國與車騎國交界的廣闊平原，七派與魔道六宗消耗戰的主戰場，韓立曾在此駐守獵殺魔修。",
  "connections": [
   "yueGuo"
  ],
  "firstVolume": 3
 },
 {
  "id": "wanQinLing",
  "name": "萬禽嶺",
  "tier": "spirit",
  "parentId": "guangHanJie",
  "description": "廣寒界中棲息萬計靈禽及三只上古凶禽的危險地域，緊鄰八凶海。",
  "connections": [
   "guangHanJie"
  ],
  "firstVolume": 9
 },
 {
  "id": "cuiLongShan",
  "name": "翠瀧山",
  "tier": "spirit",
  "parentId": "tianYuanChengSpirit",
  "description": "天淵城轄區內靈氣最足的山脈，韓立在此爭得一處方圓二萬里的廣大靈地。",
  "connections": [
   "tianYuanChengSpirit"
  ],
  "firstVolume": 8
 },
 {
  "id": "tianZhuCheng",
  "name": "天蛛城",
  "tier": "spirit",
  "parentId": "fengYuanDaLu",
  "description": "小修羅界中修羅蛛族母羅仙子的石城要塞，無門戶，布置有大化白蓮禁制，後搬遷至沙漠地下。",
  "connections": [
   "fengYuanDaLu"
  ],
  "firstVolume": 11,
  "access": {
   "hidden": true,
   "requiresFlag": "大化白蓮禁制解除"
  }
 },
 {
  "id": "nanJiangJun",
  "name": "南疆郡",
  "tier": "human",
  "parentId": "daJin",
  "description": "大晉南部由十餘家中等宗門自治之郡，修士擅用毒驅蟲，大宗門難以涉足。",
  "connections": [
   "daJin"
  ],
  "firstVolume": 6
 },
 {
  "id": "tongTianWuHai",
  "name": "通天霧海",
  "tier": "human",
  "parentId": "luanXingHai",
  "description": "亂星海中隱煞門長期匿居之處，孫師叔曾在此藏匿數十年。",
  "connections": [
   "luanXingHai"
  ],
  "firstVolume": 4,
  "access": {
   "hidden": true
  }
 },
 {
  "id": "feiCuiMoCheng",
  "name": "翡翠魔城",
  "tier": "demon",
  "parentId": "moJie",
  "description": "魔界一座城池，韓立曾在此被四大魔尊攔截，蟹道人一擊擊殺四尊後揚長而去。",
  "connections": [
   "moJie"
  ],
  "firstVolume": 10
 },
 {
  "id": "huoYangTuCheng",
  "name": "火陽族土城",
  "tier": "spirit",
  "parentId": "fengYuanDaLu",
  "description": "火雲島上火陽族主要聚居地，有三層禁制護城，中央廣場立有青銅圓錐法器。",
  "connections": [
   "fengYuanDaLu"
  ],
  "firstVolume": 9
 },
 {
  "id": "tianMaCheng",
  "name": "天馬城",
  "tier": "human",
  "parentId": "luanXingHai",
  "description": "落潮草原邊緣設有傳送法陣的城市，韓立由此傳入小世界據點。",
  "connections": [
   "luanXingHai"
  ],
  "firstVolume": 11
 },
 {
  "id": "longDao",
  "name": "龍島",
  "tier": "immortal",
  "parentId": "xianJie",
  "description": "摩柯界真龍一族聖地，半圓形巨大島嶼懸浮星空，廣靈道果大會在此舉辦。",
  "connections": [
   "xianJie"
  ],
  "firstVolume": 12
 },
 {
  "id": "haiYuan",
  "name": "海淵（深淵）",
  "tier": "human",
  "parentId": "luanXingHai",
  "description": "外星海奇淵島南方縱橫千萬里、深不可測的巨大深淵，曾為高階妖丹產地，後因妖獸暴動成為禁區。",
  "connections": [
   "luanXingHai"
  ],
  "firstVolume": 4
 },
 {
  "id": "biYunShan",
  "name": "碧雲山",
  "tier": "human",
  "parentId": "yuanWuGuo",
  "description": "元武國境內的靈茶產地山嶺，辛如音曾在此採茶遭煉氣期修士圍困。",
  "connections": [
   "yuanWuGuo"
  ],
  "firstVolume": 3
 },
 {
  "id": "xiLingChi",
  "name": "洗靈池（淨靈蓮）",
  "tier": "demon",
  "parentId": "moJie",
  "description": "魔界中心的天地奇珍秘境，洗靈池為化仙池前身可脫胎換骨，淨靈蓮為七竅一氣蓮前身可增慧根，被視為進階大乘的重要機緣。",
  "connections": [
   "moJie"
  ],
  "firstVolume": 10,
  "access": {
   "hidden": true
  }
 },
 {
  "id": "heiJiaoFeng",
  "name": "黑焦峰",
  "tier": "spirit",
  "parentId": "fengYuanDaLu",
  "description": "赤融山脈中心三座品字形黑色山峰，赫連商盟地下世界入口玄天門所在。",
  "connections": [
   "fengYuanDaLu"
  ],
  "firstVolume": 11,
  "access": {
   "hidden": true
  }
 },
 {
  "id": "lvHai",
  "name": "綠海",
  "tier": "spirit",
  "parentId": "lingJie",
  "description": "小靈天中綠靈族的控制核心區域，密林茂盛，連接小靈天的通道出口即在此處。",
  "connections": [
   "lingJie"
  ],
  "firstVolume": 11
 },
 {
  "id": "sangXingDao",
  "name": "桑星島",
  "tier": "human",
  "parentId": "luanXingHai",
  "description": "亂星海西南三大主島之一，與魁星島、尾星島並列。",
  "connections": [
   "luanXingHai"
  ],
  "firstVolume": 4
 },
 {
  "id": "moHuDao",
  "name": "魔湖島",
  "tier": "human",
  "parentId": "luanXingHai",
  "description": "湖水碧綠不沉凡人、盛產翠銅的海島，湖底藏有蠻胡子的藏寶洞府。",
  "connections": [
   "luanXingHai"
  ],
  "firstVolume": 7
 },
 {
  "id": "nanGenShaMo",
  "name": "南艮大沙漠",
  "tier": "spirit",
  "parentId": "manHuangShiJie",
  "description": "上古天鳳與火鱷大戰所形成的廣大沙漠，前往木族必經之路，兩側為太獸山脈與蛟淵大峽谷，中為影族試煉伏擊地帶。",
  "connections": [
   "manHuangShiJie"
  ],
  "firstVolume": 9
 },
 {
  "id": "muJieDaZhen",
  "name": "木界大陣",
  "tier": "spirit",
  "parentId": "muZuLingDi",
  "description": "木族布置覆蓋整片疆域的超大型防禦陣法，設有多個陣眼，本弧激發二號陣眼令整座大陣自爆。",
  "connections": [
   "muZuLingDi"
  ],
  "firstVolume": 10,
  "access": {
   "hidden": true
  }
 },
 {
  "id": "baXiongHai",
  "name": "八兇海",
  "tier": "spirit",
  "parentId": "guangHanJie",
  "description": "廣寒界中棲息八隻上古凶獸的海域，韓立三人曾落入此處遭遇鎮海猿。",
  "connections": [
   "guangHanJie"
  ],
  "firstVolume": 9
 },
 {
  "id": "weiXingDao",
  "name": "尾星島",
  "tier": "human",
  "parentId": "luanXingHai",
  "description": "亂星海西南三大主島之一，島主詹台，毛道友為其弟子。",
  "connections": [
   "luanXingHai"
  ],
  "firstVolume": 4
 },
 {
  "id": "yaoShouHaiYuan",
  "name": "妖獸海淵",
  "tier": "human",
  "parentId": "luanXingHai",
  "description": "奇淵島附近深不可測的海淵，高階妖獸頻出，曾有八級妖獸出沒紀錄。",
  "connections": [
   "luanXingHai"
  ],
  "firstVolume": 4,
  "access": {
   "hidden": true
  }
 },
 {
  "id": "qiXuanDian",
  "name": "七玄殿",
  "tier": "human",
  "parentId": "luoRiFeng",
  "description": "七玄門總殿，由數座青石殿宇組成，野狼幫攻山時將其團團圍住。",
  "connections": [
   "luoRiFeng"
  ],
  "firstVolume": 1
 },
 {
  "id": "xiaoHuanShan",
  "name": "小寰山",
  "tier": "human",
  "parentId": "xiaoHuanDao",
  "description": "小寰島西端山脈，有高矮兩座山峰，韓立在此建真假雙洞府並布三套大陣。",
  "connections": [
   "xiaoHuanDao"
  ],
  "firstVolume": 4
 },
 {
  "id": "feiLingZuLingDi",
  "name": "飛靈族領地",
  "tier": "spirit",
  "parentId": "fengYuanDaLu",
  "description": "飛靈族諸族聚居地，越隆的碧原小築在此附近。",
  "connections": [
   "fengYuanDaLu"
  ],
  "firstVolume": 11
 },
 {
  "id": "xueSeShiLianJinDi",
  "name": "血色試煉禁地（環形山）",
  "tier": "human",
  "parentId": "huangFengGu",
  "description": "七派五日試煉的環形山禁地，內有靈藥、妖獸、石殿地道及地下沼澤密室。",
  "connections": [
   "huangFengGu"
  ],
  "firstVolume": 3,
  "access": {
   "hidden": true
  }
 },
 {
  "id": "zhuLingTang",
  "name": "鑄靈堂",
  "tier": "human",
  "parentId": "kunWuShan",
  "description": "昆吾山煉器場所，內有化靈殿與極品火池，韓立在此得太陰真火與古火鼎。",
  "connections": [
   "kunWuShan"
  ],
  "firstVolume": 6
 },
 {
  "id": "penDiJiTan",
  "name": "盆地祭壇",
  "tier": "human",
  "parentId": "zhuiMoGu",
  "description": "墜魔谷內谷中心數百丈高的白石梯形祭壇，四角立麒麟石像，頂部為靈緲園空間裂縫入口，登壇設逐層增重禁制。",
  "connections": [
   "zhuiMoGu"
  ],
  "firstVolume": 6,
  "access": {
   "hidden": true
  }
 },
 {
  "id": "bingHuoDao",
  "name": "冰火道",
  "tier": "human",
  "parentId": "xuTianDian",
  "description": "虛天殿第二關，分熔岩路與玄晶道兩條通道，本弧被星宮暗放鐵火蟻與銀光鼠禁制。",
  "connections": [
   "xuTianDian"
  ],
  "firstVolume": 4,
  "access": {
   "hidden": true,
   "requiresItem": "虛天殿圖"
  }
 },
 {
  "id": "miYunXiongLinZhaoZe",
  "name": "密雲兇林沼澤",
  "tier": "spirit",
  "parentId": "fengYuanDaLu",
  "description": "妖族著名凶地，毒霧毒蟲遍布、化神以下九死一生，司南四方壇飄忽出沒其間。",
  "connections": [
   "fengYuanDaLu"
  ],
  "firstVolume": 11,
  "access": {
   "hidden": true
  }
 },
 {
  "id": "fengLinCheng",
  "name": "楓林城",
  "tier": "spirit",
  "parentId": "tianYuanJing",
  "description": "離許家最近的修士城市，韓立與許芊羽自天淵城傳送後的第一站。",
  "connections": [
   "tianYuanJing"
  ],
  "firstVolume": 10
 },
 {
  "id": "shiCheng",
  "name": "石城",
  "tier": "spirit",
  "parentId": "lingJie",
  "description": "小修羅界修羅蛛族主城，布有強力禁制光幕。",
  "connections": [
   "lingJie"
  ],
  "firstVolume": 11
 },
 {
  "id": "guMoFengYinKongJian",
  "name": "古魔封印空間",
  "tier": "human",
  "parentId": "renJie",
  "description": "人界與聖界交界間隙的異空間，魔氣濃密，封印三十餘丈雙頭四臂古魔本體，乃廢棄靈緲園遺址之一。",
  "connections": [
   "renJie"
  ],
  "firstVolume": 6,
  "access": {
   "hidden": true,
   "requiresFlag": "古魔封印解除"
  }
 },
 {
  "id": "zhuiMoNeiGu",
  "name": "內谷",
  "tier": "human",
  "parentId": "zhuiMoGu",
  "description": "墜魔谷核心區域，以上古血光禁制圈禁，靈氣紊亂、空間裂縫密集，保存上古遺骸、火蟾巢穴及靈緲園。",
  "connections": [
   "zhuiMoGu"
  ],
  "firstVolume": 6,
  "access": {
   "hidden": true,
   "requiresFlag": "墜魔谷血光禁制解除"
  }
 },
 {
  "id": "baiFengFeng",
  "name": "白鳳峰",
  "tier": "human",
  "parentId": "luoYunZong",
  "description": "落雲宗六奇峰之一，多為女修居住，宋姓女修白鳳仙的洞府所在。",
  "connections": [
   "luoYunZong"
  ],
  "firstVolume": 5
 },
 {
  "id": "huoYunOreVein",
  "name": "火雲石礦脈（地下熔巖湖）",
  "tier": "demon",
  "parentId": "huanXiaoShaMo",
  "description": "白家於幻嘯沙漠深處掌控的極品火雲石礦脈，地下藏巨型熔岩湖，後為魔獸與礦脈所化魔靈盤踞。",
  "connections": [
   "huanXiaoShaMo"
  ],
  "firstVolume": 10,
  "access": {
   "hidden": true
  }
 },
 {
  "id": "hengShuiCheng",
  "name": "橫水城",
  "tier": "spirit",
  "parentId": "leiMingDaLu",
  "description": "雷鳴大陸天雲十三族大城，曾被殷尊者率角蚩族大軍包圍攻打。",
  "connections": [
   "leiMingDaLu"
  ],
  "firstVolume": 9
 },
 {
  "id": "huoHuQunDao",
  "name": "火瑚群島",
  "tier": "spirit",
  "parentId": "leiMingDaLu",
  "description": "雷鳴大陸外海的群島，多種族聚居，有廢棄傳送陣，後因海獸吞空雲晶成孤立區域。",
  "connections": [
   "leiMingDaLu"
  ],
  "firstVolume": 9
 },
 {
  "id": "renZuTianLingJing",
  "name": "人族天靈境",
  "tier": "spirit",
  "parentId": "fengYuanDaLu",
  "description": "靈界人族三境之一，懸浮高空飛島上供奉混沌萬靈榜玉壁，追蹤天地靈寶動向。",
  "connections": [
   "fengYuanDaLu"
  ],
  "firstVolume": 8
 },
 {
  "id": "caiXiaShanMai",
  "name": "彩霞山脈",
  "tier": "human",
  "parentId": "jingZhou",
  "description": "鏡州境內綿延十幾里的山脈，七玄門遷居於此，韓立曾在此秘密碰頭及閉關。",
  "connections": [
   "jingZhou"
  ],
  "firstVolume": 1
 },
 {
  "id": "qiangZheZhiZhanXiaoShiJie",
  "name": "強者之戰小世界",
  "tier": "spirit",
  "parentId": "lingJie",
  "description": "介於商盟控制區與冥界之間的獨立小世界，商盟與陰司五王在此舉行強者之戰，設五座決鬥場與重重禁制。",
  "connections": [
   "lingJie"
  ],
  "firstVolume": 11,
  "access": {
   "hidden": true,
   "requiresFlag": "強者之戰禁制開啟"
  }
 },
 {
  "id": "xuJiaShanMai",
  "name": "許家山脈",
  "tier": "spirit",
  "parentId": "tianYuanJing",
  "description": "冰魄仙子後人許家所在的山脈，底部有精銅礦脈但靈氣偏薄，護族大陣為殘缺版迷蜃幻境。",
  "connections": [
   "tianYuanJing"
  ],
  "firstVolume": 10
 },
 {
  "id": "longZhou",
  "name": "隴州",
  "tier": "human",
  "parentId": "daJin",
  "description": "大晉中西部交界之州，岳陽宮與魔木宗把持，多毒蟲靈獸。",
  "connections": [
   "daJin"
  ],
  "firstVolume": 6
 },
 {
  "id": "jinTa",
  "name": "禁塔",
  "tier": "human",
  "parentId": "yueGuo",
  "description": "血色禁地中心區第三層高達百丈的巨型寶塔，被強大禁制封鎖，煉氣期弟子無法進入，其中秘密至今未解。",
  "connections": [
   "yueGuo"
  ],
  "firstVolume": 3,
  "access": {
   "hidden": true,
   "requiresFlag": "血色禁地中心區禁制解除"
  }
 },
 {
  "id": "kuZhuDao",
  "name": "苦竹島",
  "tier": "human",
  "parentId": "daJin",
  "description": "大晉鄰海的孤島，常年藍霧籠罩，苦竹老人以天桑神樹為陣眼布下萬木大陣。",
  "connections": [
   "daJin"
  ],
  "firstVolume": 6
 },
 {
  "id": "huangQingGuan",
  "name": "皇清觀",
  "tier": "human",
  "parentId": "kunWuShan",
  "description": "三皇觀之一的女修道觀，設於玉田山，暗中為大晉皇族葉家服務並秘密煉製重寶。",
  "connections": [
   "kunWuShan"
  ],
  "firstVolume": 6
 },
 {
  "id": "ziWeiHai",
  "name": "紫薇海",
  "tier": "spirit",
  "parentId": "fengYuanDaLu",
  "description": "靈界一片海域，人面蛟一族的洞府所在，藍姓老翁等人曾誤入此地擄走人面蛟幼女。",
  "connections": [
   "fengYuanDaLu"
  ],
  "firstVolume": 9
 },
 {
  "id": "shiJiDian",
  "name": "石磯殿",
  "tier": "immortal",
  "parentId": "beiHanXianYu",
  "description": "北寒仙域一大勢力，高升所屬門派，設登天閣收藏高階仙家功法，待遇飛升仙人優厚。",
  "connections": [
   "beiHanXianYu"
  ],
  "firstVolume": 13
 },
 {
  "id": "guanNingFu",
  "name": "關寧府",
  "tier": "human",
  "parentId": "daJin",
  "description": "大晉遼州最西端府城，孔趙董馮四大世家根據地，韓立曾來此尋找馮家密窟。",
  "connections": [
   "daJin"
  ],
  "firstVolume": 6
 },
 {
  "id": "huanYunFeng",
  "name": "幻雲峰",
  "tier": "human",
  "parentId": "kunWuShan",
  "description": "玉田山中白露書院所在的山峰。",
  "connections": [
   "kunWuShan"
  ],
  "firstVolume": 6
 },
 {
  "id": "tianYuanShengCheng",
  "name": "天元聖城（靈皇城）",
  "tier": "spirit",
  "parentId": "fengYuanDaLu",
  "description": "靈皇居所，魔斑最大的人族要地，以通天巨樹為中心建有重重防禦，六極聖祖曾率大軍合圍。",
  "connections": [
   "fengYuanDaLu"
  ],
  "firstVolume": 10
 },
 {
  "id": "zhongXinQuBloodForbidden",
  "name": "中心區",
  "tier": "human",
  "parentId": "yueGuo",
  "description": "血色禁地核心地帶，佔禁地三分之一以上，石牆圍成外層花園、環形山迷霧靈藥區與禁塔三層。",
  "connections": [
   "yueGuo"
  ],
  "firstVolume": 3,
  "access": {
   "hidden": true,
   "requiresFlag": "血色禁地禁制解除"
  }
 },
 {
  "id": "xueJinShiLianJinDi",
  "name": "血禁試煉禁地",
  "tier": "human",
  "parentId": "yueGuo",
  "description": "越國境內被上古風屬性古禁封閉的試煉禁地，每五年解禁五天，煉氣期弟子入內採藥，門派廝殺激烈。",
  "connections": [
   "yueGuo"
  ],
  "firstVolume": 2,
  "access": {
   "hidden": true,
   "requiresFlag": "血色禁地上古風屬性古禁解禁"
  }
 },
 {
  "id": "qingLiangCheng",
  "name": "青良城",
  "tier": "human",
  "parentId": "linZhou",
  "description": "越國藺州一普通小城，鄰近燕翎堡與燕梁山。",
  "connections": [
   "linZhou"
  ],
  "firstVolume": 3
 },
 {
  "id": "huoYunDao",
  "name": "火雲島",
  "tier": "spirit",
  "parentId": "leiMingDaLu",
  "description": "火瑚群島中的中型島嶼，火陽族居住，有火山與土城，是韓立療傷之處。",
  "connections": [
   "leiMingDaLu"
  ],
  "firstVolume": 9
 },
 {
  "id": "shuangFengDao",
  "name": "雙峰島",
  "tier": "human",
  "parentId": "luanXingHai",
  "description": "外星海兩座巨峰相鄰的島嶼，妙音門新坊市設於地下世界，韓立曾在此斬殺雲天嘯。",
  "connections": [
   "luanXingHai"
  ],
  "firstVolume": 4
 },
 {
  "id": "xuanWuHuangCheng",
  "name": "玄武皇城",
  "tier": "spirit",
  "parentId": "fengYuanDaLu",
  "description": "玄武霸皇與萬年巨龜坐鎮的人族要地，公認安全之地，白果兒曾攜門下弟子前往投靠。",
  "connections": [
   "fengYuanDaLu"
  ],
  "firstVolume": 10
 },
 {
  "id": "qianZhuShengTang",
  "name": "千竹教聖堂",
  "tier": "human",
  "parentId": "jiXiZhiDi",
  "description": "千竹教數千年前消失的秘密密室，藏大衍神君殘魄及其傀儡遺物，廢棄多年、石門禁制大半失效。",
  "connections": [
   "jiXiZhiDi"
  ],
  "firstVolume": 13,
  "access": {
   "hidden": true
  }
 },
 {
  "id": "tianQuanFeng",
  "name": "天泉峰",
  "tier": "human",
  "parentId": "luoYunZong",
  "description": "落雲宗六奇峰之一，韓立所屬，峰主辛姓結丹中期修士，以制符煉丹為主。",
  "connections": [
   "luoYunZong"
  ],
  "firstVolume": 5
 },
 {
  "id": "xueLingShanMai2",
  "name": "雪嶺山脈",
  "tier": "human",
  "parentId": "daJin",
  "description": "大晉北部山脈，炫烨王古墓所在地，韓立曾被困於狂沙上人的黃沙大陣於此。",
  "connections": [
   "daJin"
  ],
  "firstVolume": 6
 },
 {
  "id": "cheQiGuo",
  "name": "車騎國",
  "tier": "human",
  "parentId": "tianNan",
  "description": "夾於天羅國與越國之間的小國，與姜國同期被魔道六宗攻陷。",
  "connections": [
   "tianNan"
  ],
  "firstVolume": 3
 },
 {
  "id": "lingMiaoCanHai",
  "name": "靈緲園殘骸空間",
  "tier": "human",
  "parentId": "zhuiMoGu",
  "description": "墜魔谷空間裂縫偶露的上古靈緲園殘骸，數十丈大、靈氣濃密，設銀焰禁制可焚滅古魔，藏珍稀靈草。",
  "connections": [
   "zhuiMoGu"
  ],
  "firstVolume": 6,
  "access": {
   "hidden": true,
   "requiresFlag": "墜魔谷空間裂縫開啟"
  }
 },
 {
  "id": "huanXingShan",
  "name": "環形山",
  "tier": "human",
  "parentId": "xuTianDian",
  "description": "終年大霧封鎖，遍生妖獸與天地靈藥，須以月陽寶珠驅霧方能進入。",
  "connections": [
   "xuTianDian"
  ],
  "firstVolume": 3,
  "access": {
   "hidden": true,
   "requiresItem": "月陽寶珠"
  }
 },
 {
  "id": "nanJun",
  "name": "湳郡",
  "tier": "human",
  "parentId": "daJin",
  "description": "大晉北中部交界富庶之地，信佛奉道之風盛行、書院遍布。",
  "connections": [
   "daJin"
  ],
  "firstVolume": 6
 },
 {
  "id": "sanPaiJinDi",
  "name": "三派禁地（聖地）",
  "tier": "human",
  "parentId": "yunMengShanMai",
  "description": "落雲宗、古劍門、百巧院三派共有禁地，位於四面環山無名山谷，設元嬰級禁制，內藏靈眼之樹。",
  "connections": [
   "yunMengShanMai"
  ],
  "firstVolume": 5,
  "access": {
   "hidden": true,
   "requiresFlag": "三派元嬰級禁制解除"
  }
 },
 {
  "id": "jiMiaoHuanJing",
  "name": "極妙幻境",
  "tier": "human",
  "parentId": "xuTianDian",
  "description": "虛天殿第三關，長廊以美色誘惑、黑殿以恐懼幻影考驗修士心志。",
  "connections": [
   "xuTianDian"
  ],
  "firstVolume": 4,
  "access": {
   "hidden": true
  }
 },
 {
  "id": "wanLingTai",
  "name": "萬靈臺",
  "tier": "spirit",
  "parentId": "tianYuanJing",
  "description": "四面環山巨谷中的圓形石台，人族真靈世家每三千年於此祭祀萬靈獸換取潛靈令並重排世家名次。",
  "connections": [
   "tianYuanJing"
  ],
  "firstVolume": 10,
  "access": {
   "hidden": true
  }
 },
 {
  "id": "muJieSanShiLiuZhen",
  "name": "木界三十六天絕陣陣區",
  "tier": "spirit",
  "parentId": "muZuLingDi",
  "description": "方圓百萬里、三十六處陣群組成的超級大陣區域，以三十六顆後備聖樹為核心陣眼。",
  "connections": [
   "muZuLingDi"
  ],
  "firstVolume": 10
 },
 {
  "id": "shanHuQunDao",
  "name": "珊瑚群島",
  "tier": "spirit",
  "parentId": "xuanWuJing",
  "description": "魔界邊境海域暴魔一族駐守的節點通道所在地，眾人於此強闖通道進入魔界。",
  "connections": [
   "xuanWuJing"
  ],
  "firstVolume": 10
 },
 {
  "id": "yinSiXiaoShiJie",
  "name": "小世界（陰司小世界）",
  "tier": "spirit",
  "parentId": "xueTianDaLu",
  "description": "血天大陸附近的小世界，陰司鬼王與商盟強者爭奪後六四分成、商盟取六成資源。",
  "connections": [
   "xueTianDaLu"
  ],
  "firstVolume": 11,
  "access": {
   "hidden": true
  }
 },
 {
  "id": "lingTianYaoSai",
  "name": "靈天要塞",
  "tier": "spirit",
  "parentId": "fengYuanDaLu",
  "description": "靈族七大要塞之一，形似巨型山峰城池，含靈天監察系統，韓立一行繞行潛入。",
  "connections": [
   "fengYuanDaLu"
  ],
  "firstVolume": 11
 },
 {
  "id": "hunDunGu",
  "name": "混沌谷",
  "tier": "spirit",
  "parentId": "tianYuanJing",
  "description": "落日之墓內灰霧瀰漫之谷，無法土遁，中心有炙光潭與沉睡的獨目上古巨人，後成三族大戰主戰場。",
  "connections": [
   "tianYuanJing"
  ],
  "firstVolume": 8,
  "access": {
   "hidden": true
  }
 },
 {
  "id": "bingHai",
  "name": "冰海",
  "tier": "human",
  "parentId": "beiMingDao",
  "description": "北冥島以北的萬里冰川之海，棲息大量高階妖獸，曾有十級冰鳳目擊，與小極宮有古代約定。",
  "connections": [
   "beiMingDao"
  ],
  "firstVolume": 6
 },
 {
  "id": "lingBaoGe",
  "name": "靈寶閣",
  "tier": "human",
  "parentId": "kunWuShan",
  "description": "昆吾山上古修士存放寶物之所，葉家大長老帶人前往搜尋通天靈寶。",
  "connections": [
   "kunWuShan"
  ],
  "firstVolume": 6,
  "access": {
   "hidden": true,
   "requiresItem": "化龍璽"
  }
 },
 {
  "id": "wanTengDao",
  "name": "萬藤道",
  "tier": "spirit",
  "parentId": "diYuan",
  "description": "地淵二層一株直徑里許的超大藤條植物聳立之區域，曾有金冥蛾群出沒。",
  "connections": [
   "diYuan"
  ],
  "firstVolume": 9,
  "access": {
   "hidden": true
  }
 }
];
