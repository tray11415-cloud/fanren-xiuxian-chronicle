import type { CanonNpcSource } from '../types';
// 由 game_db/index/agg_characters.json 決定性生成（649 名 NPC，含跨弧編年史時間窗）。
// 重生指令： node game_db/_wf/gen_npcs.cjs
export const CANON_NPCS: CanonNpcSource[] = [
 {
  "id": "韓立",
  "name": "韓立",
  "aliases": [
   "寒某",
   "姓韓小子",
   "青元子（洞府號）",
   "厲道友",
   "袁坤（喬裝）",
   "韓兄弟"
  ],
  "faction": "七玄門（墨大夫門下親傳弟子）",
  "importance": "protagonist",
  "bio": "農家少年，入七玄門後在墨大夫指導下苦修長春功；憑神秘小瓶催熟藥材、自行煉製靈藥突破第四層，五感大幅提升；隱瞞突破實情，被墨居仁強行攤牌。",
  "firstChapter": 1,
  "canonFate": "主動出走七玄門，踏上獨立修仙旅程，第一卷結束。；修為從築基中期降至煉氣三四層，以古傳送陣遁出天南；成功逃出小極宮虛靈殿，進入第七卷；進入五龍海空間節點，生死未卜；被寶花奪走玄天如意刃殘片；晉階合體後期；成功進階大乘期，人妖兩族第三位大乘老祖",
  "chronicle": [
   {
    "fromChapter": 1,
    "toChapter": 5,
    "locationId": "彩霞山",
    "realm": "凡人（未修煉的農家少年）",
    "status": "alive",
    "activity": "由三叔自山邊小村帶往青牛鎮、彩霞山，參加七玄門炼骨崖入門考核；力竭未登頂但獲記名弟子身份，被供奉墨大夫帶入神手谷。"
   },
   {
    "fromChapter": 6,
    "toChapter": 8,
    "locationId": "七玄門",
    "realm": "凡人（初習長春功，體內僅一縷寒氣）",
    "status": "alive",
    "activity": "在神手谷隨墨大夫學採藥煉藥與醫術，苦修無名口訣（長春功）半年生出奇異寒氣，獲認親傳弟子並通過轉正考核。"
   },
   {
    "fromChapter": 9,
    "toChapter": 14,
    "locationId": "七玄門",
    "realm": "煉氣期（長春功第一層）",
    "status": "alive",
    "activity": "藥力輔助下突破長春功第一層（經脈受內傷）；山路踢得砸不開的神秘綠瓶，秘藏皮袋，晴夜見其吸光點、第八日開瓶得一滴翠綠液體。"
   },
   {
    "fromChapter": 15,
    "toChapter": 21,
    "locationId": "彩霞山",
    "realm": "煉氣期（長春功第三層初階）",
    "status": "alive",
    "activity": "四年後長春功停滯於第三層初階，墨大夫獨自下山采藥；出谷結識金冬寶得門內情報、聞厲飛雨傳奇，溪邊救厲飛雨並識破抽髓丸換得人情。"
   },
   {
    "fromChapter": 22,
    "toChapter": 26,
    "locationId": "七玄門",
    "realm": "煉氣期（長春功第三層頂峰）",
    "status": "alive",
    "activity": "夜遭心魔入侵、憑平安符化解並衝至第三層頂峰，重拾綠瓶；試藥兔爆斃確認綠液催化威力，摸清七日一滴、催出百年至千年藥性、離瓶一刻鐘即消的規律。"
   },
   {
    "fromChapter": 27,
    "toChapter": 30,
    "locationId": "七玄門",
    "realm": "煉氣期（長春功第四層）",
    "status": "alive",
    "activity": "趁墨大夫未歸秘密催生藥材、煉成黃龍丹等四種靈藥，服丹突破長春功第四層、五感大進；隱瞞突破應付把脈，最終被歸來的墨居仁攤牌制伏、得知靈根與長春功真目的。"
   },
   {
    "fromChapter": 31,
    "toChapter": 41,
    "locationId": "彩霞山",
    "realm": "煉氣期（長春功第四至五層）",
    "status": "alive",
    "activity": "被尸蟲丸要挾後暗中圖強：與厲飛雨私下交易、默記七十四本眨眼劍譜、偵知野狼幫奸細並轉交厲飛雨，訂製短劍鐵鈴後留書出谷。"
   },
   {
    "fromChapter": 42,
    "toChapter": 43,
    "locationId": "彩霞山",
    "realm": "煉氣期（長春功第五至六層）",
    "status": "alive",
    "activity": "在荊棘山溝閉關約四個月，識破雲翅鳥監視，苦練羅煙步、斂息功、偽匿術、軟骨功，並靠靈藥將長春功衝破第六層，備齊暗器待約攤牌。"
   },
   {
    "fromChapter": 44,
    "toChapter": 51,
    "locationId": "彩霞山",
    "realm": "煉氣期（長春功第六層）",
    "status": "alive",
    "activity": "如約返谷取解藥後與墨大夫翻臉血鬥：破膛一劍、羅煙步避魔銀手、纏香絲毒計刺頸，連環反擊終仍被刀槍不入的鐵奴制服擒拿。"
   },
   {
    "fromChapter": 52,
    "toChapter": 60,
    "locationId": "彩霞山",
    "realm": "煉氣期（長春功第六層）",
    "status": "alive",
    "activity": "墨大夫以七鬼噬魂大法獲法力、定神符制身，押入奪舍石屋施術；韓立卻在神識夢戰中吞墨大夫元神、重創余子童，醒後識破全局並以毒液加玉帶短劍反殺余子童。"
   },
   {
    "fromChapter": 61,
    "toChapter": 64,
    "locationId": "七玄門",
    "realm": "煉氣期（長春功第六層頂峰）",
    "status": "alive",
    "activity": "於神手谷石屋以七毒水加陽光滅余子童元神，讀墨大夫遺書接受護妻女娶女兒換暖陽寶玉的死後交易，以引魂鐘收服張鐵屍殼曲魂"
   },
   {
    "fromChapter": 65,
    "toChapter": 74,
    "locationId": "七玄門",
    "realm": "煉氣期（長春功第六層→第七層）",
    "status": "alive",
    "activity": "偽書留守神手谷以神秘小瓶催生藥材行醫成韓神醫，自學掌握火彈術天眼術御風訣並融合罗煙步，以清靈散金針救治李長老，勸厲飛雨散功被拒"
   },
   {
    "fromChapter": 75,
    "toChapter": 90,
    "locationId": "彩霞山",
    "realm": "煉氣期（長春功第八層，法力超越昔日余子童肉身）",
    "status": "alive",
    "activity": "突破第八層創火彈術手持火球法武並用戰法，落沙坡伏擊後與厲飛雨換裝混入攻山潛入落日峰，公開御風訣身法簽死契入血斗，天眼術看穿金光上人並悟驅物術驅劍萌生奪劍之念"
   },
   {
    "fromChapter": 91,
    "toChapter": 94,
    "locationId": "彩霞山",
    "realm": "煉氣期（長春功第八層）",
    "status": "alive",
    "activity": "於落日峰死鬥場以驅物術奪金光上人劍符灰芒，再以火彈術配御風訣焚殺金光上人及賈天龍等野狼帮全體人馬，完勝死鬥。"
   },
   {
    "fromChapter": 95,
    "toChapter": 96,
    "locationId": "彩霞山",
    "realm": "煉氣期（長春功第八層）",
    "status": "alive",
    "activity": "混入人流隱匿下峰回神手谷，閉門謝客以驅物術精研劍符灰芒實戰，摸清其耗能、範圍、次數三大缺陷，並約厲飛雨次日會面。"
   },
   {
    "fromChapter": 97,
    "toChapter": 97,
    "locationId": "彩霞山",
    "realm": "煉氣期（長春功第八層）",
    "status": "alive",
    "activity": "提前潛入王絕楚臥室，以天眼術震懾先發制人，揭破高層殺己密謀，宣布永離彩霞山並達成養精丹秘密交易。"
   },
   {
    "fromChapter": 98,
    "toChapter": 99,
    "locationId": "越國",
    "realm": "煉氣期（長春功第八層）",
    "status": "alive",
    "activity": "留延壽秘藥別厲飛雨後，攜曲魂、雲翅鳥乘馬車東行五日返故鄉小村，遠觀小妹韓四丫出嫁與父母至親，轉身永別踏上修仙路。"
   },
   {
    "fromChapter": 100,
    "toChapter": 103,
    "locationId": "越國",
    "realm": "煉氣期（長春功第八層，身懷陰寒之毒）",
    "status": "alive",
    "activity": "歷時三月跋涉抵嘉元城，黑水巷遭劫殺反殺黑熊一夥，以腐心丸收服孫二狗為線人"
   },
   {
    "fromChapter": 104,
    "toChapter": 107,
    "locationId": "越國",
    "realm": "煉氣期（長春功第八層，陰毒約兩月將爆發）",
    "status": "alive",
    "activity": "駐匯源客棧研讀墨大夫遺書、聽取孫二狗情報，於香家酒樓監視墨府，遇藍衣修仙者並偵知吳劍鳴假冒弟子"
   },
   {
    "fromChapter": 108,
    "toChapter": 114,
    "locationId": "越國",
    "realm": "煉氣期（長春功第八層，身懷陰寒之毒）",
    "status": "alive",
    "activity": "夜潛墨府竊聽內情，投紋龍戒以關門弟子身份登門，與四位夫人周旋並在墨府後宅住下觀察虛實"
   },
   {
    "fromChapter": 115,
    "toChapter": 118,
    "locationId": "越國",
    "realm": "煉氣期（長春功第八層，身懷陰寒之毒）",
    "status": "alive",
    "activity": "與縞素設局的諸夫人攤牌，以火彈術立威、清靈散破千人醉，坦陳墨大夫死因後談成「誅一霸換寶玉」的框架"
   },
   {
    "fromChapter": 119,
    "toChapter": 125,
    "locationId": "越國",
    "realm": "煉氣期（長春功第八層，身懷陰寒之毒）",
    "status": "alive",
    "activity": "獲神仙大會線索，助孫二狗奪四平幫（瀟湘院毒殺沈重山等），與嚴氏締約定殺歐陽飛天，定位太南谷並安排嘉元城後路"
   },
   {
    "fromChapter": 126,
    "toChapter": 126,
    "locationId": "越國",
    "realm": "煉氣期（長春功第八層，陰毒已徹底清除）",
    "status": "alive",
    "activity": "奔襲獨霸山莊以劍符斬歐陽飛天，換得暖陽寶玉，南下途中拔毒半月根除陰毒，抵太南山結識萬小山"
   },
   {
    "fromChapter": 127,
    "toChapter": 129,
    "locationId": "越國",
    "realm": "煉氣期（長春功第八層）",
    "status": "alive",
    "activity": "從萬小山處習得境界靈根門派等修仙常識，經通音符開陣入太南谷，參加太南小會、初識青顏真人並觀察修仙界"
   },
   {
    "fromChapter": 130,
    "toChapter": 137,
    "locationId": "天南",
    "realm": "煉氣期（長春功第八層頂峰）",
    "status": "alive",
    "activity": "抵太南谷入夥松紋道士散修團，於交易廣場以黃龍丹金髓丸換飛行符、咒訣殘本、符紙、長春功全本、金竺筆與七星草種子，認識升仙大會制度與燕家兄妹。"
   },
   {
    "fromChapter": 138,
    "toChapter": 141,
    "locationId": "天南",
    "realm": "煉氣期（長春功第九層）",
    "status": "alive",
    "activity": "苦修十餘日突破長春功第九層，以飛行符換隱形法寶殘片，並由《青溪筆錄》確認手中令牌為黃楓谷所發升仙令、決定改持令拜師。"
   },
   {
    "fromChapter": 142,
    "toChapter": 151,
    "locationId": "黃楓谷",
    "realm": "煉氣期（長春功第九層）",
    "status": "alive",
    "activity": "出谷遭松紋道士手下襲殺、以符寶劍光斬殺黃衣人與大漢，持升仙令拜入黃楓谷成執事弟子，靈根測為四屬性缺金偽靈根，委曲放棄築基丹換得百藥園職位並埋殘片藏神秘小瓶。"
   },
   {
    "fromChapter": 152,
    "toChapter": 159,
    "locationId": "黃楓谷",
    "realm": "煉氣期（長春功第十一層）",
    "status": "alive",
    "activity": "兩年內藉神秘小瓶催熟藥草交差、服丹突破長春功十一層，赴岳麓殿抄錄築基丹定顏丹配方、購銀絲鼎、得知地肺之火可代先天真火，立志尋訪玉髓芝紫猴花天靈果三種天地主藥。"
   },
   {
    "fromChapter": 160,
    "toChapter": 160,
    "locationId": "黃楓谷",
    "realm": "煉氣期（長春功第十一層）",
    "status": "alive",
    "activity": "於傳功閣向吳風問明血禁試煉內情（七派每五年入禁地、煉氣期方可入內、存活率不足四分之一、半年後開試煉），返百藥園反覆權衡參戰利害"
   },
   {
    "fromChapter": 161,
    "toChapter": 164,
    "locationId": "黃楓谷",
    "realm": "煉氣期（長春功第十一層）",
    "status": "alive",
    "activity": "往岳麓殿確認情報後決意參戰，學斂氣術、秘密培植兩株千年黃精芝備戰；持令牌喬裝赴坊市，於萬寶樓以兩株千年黃精芝換得金蚨子母刃、玄鐵飛天盾、天雷子、金光磚符寶，並弄"
   },
   {
    "fromChapter": 165,
    "toChapter": 170,
    "locationId": "黃楓谷",
    "realm": "煉氣期（長春功第十一層）",
    "status": "alive",
    "activity": "返途夜宿石洞，竊聽陸師兄欲姦殺陳師妹奪丹，惡鬥三場以撤罩省力、吞草、中階靈石耗死陸師兄，奪兩枚築基丹，符寶報廢"
   },
   {
    "fromChapter": 171,
    "toChapter": 171,
    "locationId": "黃楓谷",
    "realm": "煉氣期（長春功第十一層）",
    "status": "alive",
    "activity": "毀屍滅跡、為陳師妹解毒後棄之，返百藥園閉關三日驅丹田異物，套問出築基丹直接吞服之法，又聞新難題"
   },
   {
    "fromChapter": 172,
    "toChapter": 179,
    "locationId": "黃楓谷",
    "realm": "煉氣期（長春功第十一層）",
    "status": "alive",
    "activity": "決意參加血色試煉、以龍鱗果搪塞王師叔完成報名，受馬師伯贈丹，隨李師祖騎銀甲角蟒赴荒山集合，旁觀三方立賭後與七大派一同破風刃大陣入禁地。"
   },
   {
    "fromChapter": 180,
    "toChapter": 185,
    "locationId": "血色禁地",
    "realm": "煉氣期（長春功第十一層）",
    "status": "alive",
    "activity": "傳送至烏龍潭，目睹靈獸山驅獸誘殺後繞路，撿得透明絲線，在一線天以土牢術、絲線、金光磚連殺嚴某與絡腮鬍子，第一日大清洗中於樹上恢復法力。"
   },
   {
    "fromChapter": 186,
    "toChapter": 190,
    "locationId": "血色禁地",
    "realm": "煉氣期（長春功第十一層）",
    "status": "alive",
    "activity": "出手救黃衫師姐、青索困多寶女，遭黃雀封嶽橫殺，最終以青蛟旗惑敵、引爆天雷子化封嶽為飛灰，拾得多寶女法器與封嶽踏雲靴、小刀符寶。"
   },
   {
    "fromChapter": 191,
    "toChapter": 196,
    "locationId": "血色禁地",
    "realm": "煉氣期（長春功第十一層）",
    "status": "alive",
    "activity": "進中心區避飛蛇、與鐘吾互換情報玉簡後樹洞休眠至第三日清晨；待月陽寶珠驅散環形山大霧後入山，制定專採未熟靈藥幼苗、以小綠瓶日後催熟的避鋒採藥策略。"
   },
   {
    "fromChapter": 197,
    "toChapter": 201,
    "locationId": "越京",
    "realm": "煉氣期（長春功第十一層）",
    "status": "alive",
    "activity": "在環形山以倒插子刃暗算上階巨蜈蚣、採紫猴花幼苗並割背殼，連採多處幼苗，最後趕至小石殿出手救靈獸山少女，與巨劍門武痴言某正面開戰，弧段於戰鬥中截止。"
   },
   {
    "fromChapter": 202,
    "toChapter": 207,
    "locationId": "血色禁地",
    "realm": "煉氣期（十一層）",
    "status": "alive",
    "activity": "血色試煉禁地第三至四日：滅口菡雲芝、殺巨劍門大漢採大量靈藥，潛入地下沼澤觀戰並合力屠墨蛟，獲整套蛟材與淫囊袋"
   },
   {
    "fromChapter": 208,
    "toChapter": 209,
    "locationId": "血色禁地",
    "realm": "煉氣期（十三層，南宮婉素女輪迴功渡力暫升）",
    "status": "alive",
    "activity": "因墨蛟淫囊袋催情與南宮婉合體，得其渡力法力暫升十三層，二人聯手打通地道脫困，金光磚符寶耗盡成廢"
   },
   {
    "fromChapter": 210,
    "toChapter": 214,
    "locationId": "黃楓谷",
    "realm": "煉氣期（十一層）",
    "status": "alive",
    "activity": "出禁地後上交靈藥助黃楓谷賭局、被李化元收為記名弟子僅得一粒築基丹，整理戰利品並進駐岳麓殿地火屋準備煉丹"
   },
   {
    "fromChapter": 215,
    "toChapter": 218,
    "locationId": "黃楓谷",
    "realm": "築基期（初期，青元劍訣第四層）",
    "status": "alive",
    "activity": "地火屋閉關近一年：半年煉出二十餘顆築基丹、連服八粒昏迷中築基成功，吸納殘餘藥力意外修成青元劍訣第四層獲劍芒護盾"
   },
   {
    "fromChapter": 219,
    "toChapter": 221,
    "locationId": "黃楓谷",
    "realm": "築基期（初期）",
    "status": "alive",
    "activity": "議事殿完成筑基登記領中階靈石與迷蹤旗，租雙瞳鼠在太岳山脈西北部尋得含靈眼之泉的天然岩洞，以銀輝劍開鑿為個人洞府"
   },
   {
    "fromChapter": 222,
    "toChapter": 228,
    "locationId": "天星城",
    "realm": "築基期（初期）",
    "status": "alive",
    "activity": "赴元武國天星宗坊市，秘店競賣會以千年紫桂花換顛倒五行陣殘品並結交齊雲霄，委託徐老以墨蛟材料煉出神風舟、青火瘴等頂階法器"
   },
   {
    "fromChapter": 229,
    "toChapter": 231,
    "locationId": "天星城",
    "realm": "築基期（初期）",
    "status": "alive",
    "activity": "歸途目睹千竹教黃龍傀儡大軍圍殺林師兄遂遁走，返洞府布好顛倒五行阵；林師兄誤闖中毒身亡、元神奪舍被韓立擒住，千竹教隨即圍攻洞府"
   },
   {
    "fromChapter": 232,
    "toChapter": 237,
    "locationId": "黃楓谷",
    "realm": "築基期（初期）",
    "status": "alive",
    "activity": "在太岳山脈洞府以顛倒五行陣捏碎林師兄元神，受雷萬鶴解圍，以靈草換得兩張古丹方，並從遺體玉簡獲大衍訣四層與傀儡真解。"
   },
   {
    "fromChapter": 238,
    "toChapter": 241,
    "locationId": "黃楓谷",
    "realm": "築基期（初期）",
    "status": "alive",
    "activity": "赴綠波洞正式拜師李化元為第八弟子，入藏書室以先天真火融銀色書頁，獲青元劍訣全套、三轉重元功及青竹蜂雲劍煉製法。"
   },
   {
    "fromChapter": 242,
    "toChapter": 243,
    "locationId": "黃楓谷",
    "realm": "築基期（初期，接近築基中期，差一層窗紙）",
    "status": "alive",
    "activity": "返洞府閉關四年，主修青元劍訣兼修制符達初上階，以煉氣散催功法力近築基中期，第四年丹藥因抗藥性失效，被李化元傳音召出關。"
   },
   {
    "fromChapter": 244,
    "toChapter": 246,
    "locationId": "黃楓谷",
    "realm": "築基期（初期，接近築基中期）",
    "status": "alive",
    "activity": "在綠波洞應對紅拂仙姑為董萱兒求雙修之事，委婉婉拒，由李化元改派其陪董萱兒南下赴燕家奪寶大會，遂啟程出發。"
   },
   {
    "fromChapter": 247,
    "toChapter": 261,
    "locationId": "越京",
    "realm": "築基期（初期，接近築基中期）",
    "status": "alive",
    "activity": "抵蔺州燕翎堡參加奪寶大會，目睹鬼靈門連勝、救助舊識墨彩環母女、得知魔道六宗五天後入侵的機密，識破鬼靈門陰火大陣血祭陷阱，弧末遭少主王蟬血雲遁術追殺苦戰脫身。"
   },
   {
    "fromChapter": 262,
    "toChapter": 271,
    "locationId": "越國",
    "realm": "築基期（初期）",
    "status": "alive",
    "activity": "靠青火瘴脫身王蟬追殺，被宣樂征召守靈石礦，修大衍訣、研傀儡術、煉一級二級傀儡；礦破遁入地下鐘乳洞，斬宣樂、耗死血蜘蛛、奪大挪移令與古傳送陣圖。"
   },
   {
    "fromChapter": 272,
    "toChapter": 273,
    "locationId": "越國",
    "realm": "築基期（中期）",
    "status": "alive",
    "activity": "閉關練成大衍訣第一層、青元劍訣第五層突破築基中期；派駐越國與車騎國交界的金鼓原前線一年，連殺十餘名魔道築基修士，於交易所購龍吟草、古丹方、聚靈丹藥材，巧遇陳巧倩"
   },
   {
    "fromChapter": 274,
    "toChapter": 278,
    "locationId": "天南",
    "realm": "築基期（中期）",
    "status": "alive",
    "activity": "拜見李化元受命赴越京護秦家；繞道元武國赴齊雲霄之約，歸還雲霄心得換改良陣旗，救辛如音並以八百年靈草委托其修復古傳送陣，訂半年之約。"
   },
   {
    "fromChapter": 279,
    "toChapter": 291,
    "locationId": "越京",
    "realm": "築基期（中期）",
    "status": "alive",
    "activity": "化名秦家偏支後人潛入越都秦宅充任護衛，與墨鳳舞相認並允諾誅五色門報仇；偵知散修失蹤黑幕而不介入；赴馨王宴警覺總管與小王爺的危險氣息、神識反制萧振，後門逼問封河澗"
   },
   {
    "fromChapter": 292,
    "toChapter": 296,
    "locationId": "越京",
    "realm": "筑基期（中期）",
    "status": "alive",
    "activity": "在越京以靈壓震懾萧姓祖孫並打追蹤標記，潛入馨王府以弄焰訣換黃龍丹、委吳老道監視，赴約得無名敛氣古書並一夜練成敛氣口訣大成，引介萧女拜師。"
   },
   {
    "fromChapter": 297,
    "toChapter": 305,
    "locationId": "越京",
    "realm": "筑基期（中期）",
    "status": "alive",
    "activity": "察覺紫光感應珠裂知吳老道遇害，赴城外丘陵以傀儡術生擒蒙山五友，驅毒解言咒並暗埋無常丹禁制，入住秦宅清音院摸清黑煞教，識破內應五妹以無常丹禁制將其毒殺。"
   },
   {
    "fromChapter": 306,
    "toChapter": 311,
    "locationId": "越京",
    "realm": "筑基期（中期）",
    "status": "alive",
    "activity": "夜潛馨王府撲空後追至破廟血戰，以多件頂階法器、遮天鐘、青元玉尺符寶逼退妖化鐵羅並生擒斷腿小王爺與斷臂王總管，連夜審訊查明黑煞教主李破雲藏身皇宮假山、皇帝成傀儡。"
   },
   {
    "fromChapter": 312,
    "toChapter": 316,
    "locationId": "越京",
    "realm": "筑基期（中期）",
    "status": "alive",
    "activity": "冷戰半月後迎黃楓谷援兵（劉靖、宋蒙、鍾衛娘、武炫）及陳巧倩等辉明門下援軍，獨入皇宮御花園竹林秘布齊雲霄所贈顛倒五行陣作保命後手，武炫失蹤後眾人定計兵分兩路闖宮。"
   },
   {
    "fromChapter": 317,
    "toChapter": 321,
    "locationId": "越京",
    "realm": "筑基期（中期）",
    "status": "alive",
    "activity": "夜闖皇宮以紫光球破冰妖四象陣，與舊識青紋以巨劍術死鬥幾乎破其青木真罩，逼出四大血侍合聚妖化；冰妖半妖化隱身掏心殺死師姐雪虹後，韓立救下王師兄並與隱形冰妖展開無形"
   },
   {
    "fromChapter": 322,
    "toChapter": 330,
    "locationId": "越京",
    "realm": "築基期（築基中期）",
    "status": "alive",
    "activity": "在越京剿滅黑煞教：斬冰妖、目睹劉靖被越皇殺害，以天雷子滅化身、顛倒五行陣困殺越皇，搜得血凝五行丹與功法玉簡。"
   },
   {
    "fromChapter": 331,
    "toChapter": 332,
    "locationId": "越京",
    "realm": "築基期（築基中期）",
    "status": "alive",
    "activity": "接李化元手令需赴邊界大營、秦宅任務取消；與同門分散歸程，白菊山送別將嫁秦家的陳巧倩後獨自展開私人行程。"
   },
   {
    "fromChapter": 333,
    "toChapter": 344,
    "locationId": "越國",
    "realm": "築基期（築基中期）",
    "status": "alive",
    "activity": "繞道嘉元城：為孫二狗解毒締契、暗植鑽心蟲於五色門主復仇、贈通靈玉予纓寧，再以引魂鐘逼供並擊殺御靈宗曲魂、滅金背妖螂。"
   },
   {
    "fromChapter": 345,
    "toChapter": 347,
    "locationId": "黃楓谷",
    "realm": "築基期（築基中期）",
    "status": "alive",
    "activity": "得奇蟲玉簡與綠煌劍後返黃楓谷；驚龍鐘八十一響、令狐老祖宣告七派大敗與靈獸山叛變，韓立毀洞府隨黃師叔精英隊撤離越國。"
   },
   {
    "fromChapter": 348,
    "toChapter": 351,
    "locationId": "越國",
    "realm": "築基期（築基中期）",
    "status": "alive",
    "activity": "撤退途中遭紅粉骷髏夫婦天火伏擊，韓立以青火瘴脫隊獨遁元武國；瞬殺付家二修士，得知齊雲霄已死、辛如音守寡贈典，諾結丹後滅付家。"
   },
   {
    "fromChapter": 352,
    "toChapter": 358,
    "locationId": "天南",
    "realm": "築基期（中期）",
    "status": "alive",
    "activity": "在元武國活動：竹屋為辛如音把脈承諾滅付家、取古傳送陣玉簡與陣旗陣盤，天星宗坊市委煉器並以定顏丹換紅線遁光針真元丹方，白池山打探越國局勢，定意修復古陣。"
   },
   {
    "fromChapter": 359,
    "toChapter": 360,
    "locationId": "越國",
    "realm": "築基期（中期）",
    "status": "alive",
    "activity": "潛回越國靈礦地下以幻形陣旗顛倒五行陣護住古傳送陣修復七日材料耗盡；夜遇被王蟬田姓男子董萱兒追殺的蒙面女修，誤認南宮婉而從林中飛出劫走，以匆促幻陣困住王蟬與田姓男"
   },
   {
    "fromChapter": 361,
    "toChapter": 363,
    "locationId": "越國",
    "realm": "煉氣期（三四層）",
    "status": "alive",
    "activity": "第361章先虛晃一招甩脫董萱兒、以陷地符藏身脫追；再為蒙面女子把脈遭輪迴真訣吸盡真元，修為於本章末自築基中期暴跌煉氣三四層；醒後知救錯人乃南宮屏，取靈石和元玉補"
   },
   {
    "fromChapter": 364,
    "toChapter": 367,
    "locationId": "亂星海",
    "realm": "炼气期（傳送後修為大損）",
    "status": "alive",
    "activity": "用大挪移令傳送至亂星海西南角孤島，乘神風舟登顧東主巨舟，憑王長青翻譯了解當地制度，應允代顧家斗法以換靈石與保人定居"
   },
   {
    "fromChapter": 368,
    "toChapter": 372,
    "locationId": "亂星海",
    "realm": "炼气期（恢復至五層）",
    "status": "alive",
    "activity": "木屋閉關恢復至炼气期五層，於東石城斗法獨得大島行商資格，赴登仙閣辦定居並約五年再賽，捨青雲山選靈氣稀薄的小寰島為私人修煉地"
   },
   {
    "fromChapter": 373,
    "toChapter": 374,
    "locationId": "亂星海",
    "realm": "筑基期（重進→頂峰／假丹境界，大衍訣第二層、身外化身、三轉重元功第一轉）",
    "status": "alive",
    "activity": "在小寰山建真假雙洞府布三套大陣，閉關廿載：恢復炼气九層後服三筑基丹重進筑基期、六年修成大衍訣第二層、祭煉身外化身、完成三轉重元功第一轉至筑基頂峰"
   },
   {
    "fromChapter": 375,
    "toChapter": 378,
    "locationId": "亂星海",
    "realm": "筑基期（頂峰／假丹境界，三轉重元功第一轉）",
    "status": "alive",
    "activity": "已完成三轉重元功第一轉、青元劍訣第六層、法力達筑基頂峰；出關赴魁星城天都街採購雪靈水天火液，得知降塵丹，應六連殿之約出海"
   },
   {
    "fromChapter": 379,
    "toChapter": 385,
    "locationId": "亂星海",
    "realm": "筑基期（頂峰／假丹境界）",
    "status": "alive",
    "activity": "隨六連殿六人圍捕嬰鯉獸，遭烏丑奪丹、長老滅口而逃；以碧水青甲陣斬殺結丹古長老，奪降塵丹五粒、混元缽等戰利品，潛海半月避追"
   },
   {
    "fromChapter": 386,
    "toChapter": 388,
    "locationId": "亂星海",
    "realm": "筑基期（頂峰／假丹境界，首次結丹失敗）",
    "status": "alive",
    "activity": "在海猿島閉關四年，輔助曲魂服血凝五行丹凝成煞丹（結丹初期），己身結丹失敗；返小寰島收穫噬金蟲，命曲魂斬殺執法修士後逃離西南海"
   },
   {
    "fromChapter": 389,
    "toChapter": 393,
    "locationId": "天星城",
    "realm": "筑基期（頂峰／假丹境界）",
    "status": "alive",
    "activity": "經邊界坊市了解星宮格局後抵天星城，租聖山三十九層洞府，培育噬金蟲、升血玉蜘蛛、造二百傀儡，最終由星空殿傳送陣赴外星海凝翠島獵妖"
   },
   {
    "fromChapter": 394,
    "toChapter": 397,
    "locationId": "亂星海",
    "realm": "築基期（後期，多次結丹未果）",
    "status": "alive",
    "activity": "在凝翠島購海域圖後獨自出海，於紅瑚島等珊瑚島群布三陣、以霓裳草誘殺五級妖獸五年，積數百妖丹後返天星城煉丹。"
   },
   {
    "fromChapter": 398,
    "toChapter": 398,
    "locationId": "天星城",
    "realm": "築基期（後期·三轉重元功二轉、大衍訣第三層）→結丹期（初期·金丹大成）",
    "status": "alive",
    "activity": "入洞府密室苦修三轉重元功與大衍訣，閉關六十年衝擊金丹，於第398章密室出關金丹大成、晉入結丹期。"
   },
   {
    "fromChapter": 399,
    "toChapter": 408,
    "locationId": "亂星海",
    "realm": "結丹期（初期·金丹大成）",
    "status": "alive",
    "activity": "出關後與妙音門范靜梅交易、得天雷竹線索，赴荒島奪貨遭極陰島圈套，以蛛網紫焰纏天都屍脫困，潛伏荒島地下一月。"
   },
   {
    "fromChapter": 409,
    "toChapter": 415,
    "locationId": "天星城",
    "realm": "結丹期（初期·妙音門名義長老）",
    "status": "alive",
    "activity": "返天星城任妙音門名義長老換得天雷竹，催成萬年金雷竹，開青竹小軒入世修心二十餘年，炼成七十二口青竹蜂雲劍收體培煉。"
   },
   {
    "fromChapter": 416,
    "toChapter": 423,
    "locationId": "亂星海",
    "realm": "結丹期（初期·青元劍訣第七層）",
    "status": "alive",
    "activity": "隨金青等赴荒島古修士遺址，以北斗兩儀陣破幻陣、與石蝶三月破多層禁制，放噬金虫斬持花籃古寶怪人奪寶，推倒封靈柱探七霞蓮遇黑影。"
   },
   {
    "fromChapter": 424,
    "toChapter": 429,
    "locationId": "亂星海",
    "realm": "結丹期（初期）",
    "status": "alive",
    "activity": "在古修士孤島洞府揭破妖蛇陷阱，同伴胡月石蝶金青接連喪命，與附身曲魂的玄骨上人蕭詧周旋談判，殘圖啟動指向西北後飛離孤島。"
   },
   {
    "fromChapter": 430,
    "toChapter": 430,
    "locationId": "亂星海",
    "realm": "結丹期（初期）",
    "status": "alive",
    "activity": "循殘圖飛往西北途中搭救舊識文樯及其女文思月，以青元劍芒一擊秒殺三名追殺的毒龍會築基修士。"
   },
   {
    "fromChapter": 431,
    "toChapter": 435,
    "locationId": "虛天殿",
    "realm": "結丹期（初期）",
    "status": "alive",
    "activity": "持殘圖進入懸浮高空的虛天殿大廳，目睹極陰祖師、萬天明、蠻胡子等正魔群雄雲集，與玄骨上人以九曲靈參為餌結盟，獲悉虛天鼎補天丹等內殿情報。"
   },
   {
    "fromChapter": 436,
    "toChapter": 445,
    "locationId": "虛天殿",
    "realm": "結丹期（初期）",
    "status": "alive",
    "activity": "傳送至鬼冤之地第一關，與紫靈仙子、元瑤同組穿越鬼霧、取玉真人辟火寶衣，合力以辟邪神雷誅滅三首虎妖鬼王，通過第一關並認出黑袍女修為舊識元瑤。"
   },
   {
    "fromChapter": 446,
    "toChapter": 453,
    "locationId": "虛天殿",
    "realm": "結丹期（初期）",
    "status": "alive",
    "activity": "傳送至蠻荒小型空間，隨玄骨至小石山以四象玄武陣捕住九曲靈參白兔化身，破解玄骨陰魂絲暗算、擊滅其體內鬼魂男子，逼玄骨交出靈參本體，弧末獨對極陰祖師黑雲壓境。"
   },
   {
    "fromChapter": 454,
    "toChapter": 457,
    "locationId": "虛天殿",
    "realm": "結丹期（初期）",
    "status": "alive",
    "activity": "於虛天殿外關遭極阴脅迫，被迫拜極阴為記名弟子得玄陰環，捲入血玉蜘蛛取虛天鼎的五份分寶協議。"
   },
   {
    "fromChapter": 458,
    "toChapter": 466,
    "locationId": "虛天殿",
    "realm": "結丹期（初期）",
    "status": "alive",
    "activity": "獲白犀佩寒冰珠護身入熔岩路，憑噬金蟲大軍掃滅鐵火蟻穿黑沙漠，救元瑤換得啼魂獸鳴魂珠青火雷，蟻后腹中取煉晶。"
   },
   {
    "fromChapter": 467,
    "toChapter": 471,
    "locationId": "虛天殿",
    "realm": "結丹期（初期）",
    "status": "alive",
    "activity": "通熔岩路抵石殿，入寶光閣以噬金蟲化黑甲切斷靈力與空間聯繫，一閣同奪暗紅披風與五色銅環兩件古寶並研究補力。"
   },
   {
    "fromChapter": 472,
    "toChapter": 473,
    "locationId": "虛天殿",
    "realm": "結丹期（初期）",
    "status": "alive",
    "activity": "戴極阴所贈婆羅珠手鏈，以大衍訣護心過極妙幻境美色關，識破並飛劍斬殺幻化小妹的白影，抵達內殿巨塔前。"
   },
   {
    "fromChapter": 474,
    "toChapter": 477,
    "locationId": "虛天殿",
    "realm": "結丹期（初期）",
    "status": "alive",
    "activity": "隨魔道入內殿迷宮，收集蛮胡子碾碎的狼首蛇衛傀儡殘骸（含兩把變形銅戈），於寒驪台後方青石夾層暗取一個陳舊卷軸。"
   },
   {
    "fromChapter": 478,
    "toChapter": 483,
    "locationId": "虛天殿",
    "realm": "結丹期（初期）",
    "status": "alive",
    "activity": "目睹萬天明金絲蠶取鼎失敗、私留三廢金絲蠶，奉命放血玉蜘蛛受狂暴之術提鼎，正魔大戰中退後觀戰待玄骨絲網罩火狼。"
   },
   {
    "fromChapter": 484,
    "toChapter": 495,
    "locationId": "虛天殿",
    "realm": "結丹期（初期）",
    "status": "alive",
    "activity": "在虛天殿內殿五層高台爭奪古寶，收玉如意，聯玄骨拉取虛天鼎成功，遭玄骨翻臉死鬥、致其修羅聖火反噬身亡，收乾藍冰珠、滅其殘魄，循畫軸逃離五層。"
   },
   {
    "fromChapter": 496,
    "toChapter": 499,
    "locationId": "虛天殿",
    "realm": "結丹期（初期）",
    "status": "alive",
    "activity": "傳送至內殿二層靈眼之泉密室遇元瑶，合作破陣取養魂木根須與萬年靈乳，被傳送出虛天殿至海面，分頭離去後研究虛天鼎與玉如意、清點所得。"
   },
   {
    "fromChapter": 500,
    "toChapter": 504,
    "locationId": "亂星海",
    "realm": "結丹期（初期）",
    "status": "alive",
    "activity": "得悉逆星盟攻打天星城，靈乳催速趕赴南明島補給；逢逆星盟攻陷南明島，以妙音門腰牌過盤查，擊殺兩名逆星盟修士、繳獲法寶並救下星宮執法凌玉靈。"
   },
   {
    "fromChapter": 505,
    "toChapter": 513,
    "locationId": "天星城",
    "realm": "結丹期（初期）",
    "status": "alive",
    "activity": "由凌玉靈作保入天星城，接受陣前斬敵的傳送條件後另設巧計：偷聽走私把柄、以胡月飛刀賄賂守陣修士、偽裝曲姓散修混入易敬七人隊伍，傳送至外星海奇淵島黑石城，定下潛修方"
   },
   {
    "fromChapter": 514,
    "toChapter": 516,
    "locationId": "亂星海",
    "realm": "結丹期（初期）",
    "status": "alive",
    "activity": "隨許雲遊奇渊島黑石城拍賣會、寸金閣問千葉露換記載玉簡並購玛瑙獸獨角，識破隨行者後獨自北飛十餘日再西進，覓得隱秘的霧海孤島決意建洞府。"
   },
   {
    "fromChapter": 517,
    "toChapter": 519,
    "locationId": "亂星海",
    "realm": "結丹期（初期）",
    "status": "alive",
    "activity": "在霧海孤島建洞府布多套霧陣、整頓蟲室靈獸與九曲靈參；研究玉簡推得五色圓珠即補天丹，以陰氣啟玄陰經習換形訣等秘術，研究虛天鼎半月無功而擱置。"
   },
   {
    "fromChapter": 520,
    "toChapter": 523,
    "locationId": "亂星海",
    "realm": "結丹期（初期）",
    "status": "alive",
    "activity": "閉關近一年昇煉七十二柄青竹蜂雲劍，破關目睹七級妖龜化形雷劫與八級毒蛟大戰並趁亂逃遁；返洞孵出三色噬金蟲，服六枚五色圓珠改造資質、製養魂木珠串。"
   },
   {
    "fromChapter": 524,
    "toChapter": 528,
    "locationId": "亂星海",
    "realm": "結丹期（初期）",
    "status": "alive",
    "activity": "出洞深入海域捕殺妖獸長達七年，積存數百枚六七級妖丹；返途遭秋鸠面等三修士偷窺誤認蟲魔，盤問後判明係碧雲門嫁禍、得知深淵獸潮與外海封閉局勢；背後極陰祖師（烏某）與"
   },
   {
    "fromChapter": 529,
    "toChapter": 532,
    "locationId": "亂星海",
    "realm": "結丹期（初期→中期）",
    "status": "alive",
    "activity": "回洞煉丹室一閉三年將丹術提升至傳說中煉丹大師以上；接著入閉關室苦修青元劍訣第八層長達十五六年，終由結丹初期突破結丹中期；期間傀儡救下誤闖的青靈門公孫杏一行，公孫"
   },
   {
    "fromChapter": 533,
    "toChapter": 540,
    "locationId": "亂星海",
    "realm": "結丹期（中期）",
    "status": "alive",
    "activity": "贈纏玉訣等寶留書放公孫杏自由、棄霧海洞府；又閉關二十餘年修第九層遇結丹後期瓶頸，出關經黃明礼引路赴秘市，易容厲先生重創雲天啸帶走文思月、奪古銅片，安頓文思月後取"
   },
   {
    "fromChapter": 541,
    "toChapter": 543,
    "locationId": "亂星海",
    "realm": "結丹期（中期）",
    "status": "alive",
    "activity": "研究古銅片確認為妖修功法無法修煉、確認服五色圓珠後資質近三靈根；赴奇渊裂風獸巢守候數月後潛入山洞採得黑色伴妖草，被九級妖修風希俘入水下洞府逼飲碧焰酒，等待突破結"
   },
   {
    "fromChapter": 544,
    "toChapter": 544,
    "locationId": "亂星海",
    "realm": "結丹期（中期→後期，本窗突破）",
    "status": "alive",
    "activity": "於風希珊瑚壁石室煉化碧焰酒，因乾藍冰珠腹中異動以酒包珠化危，一驚之下意外突破結丹後期大成，可操二十四柄飛劍。"
   },
   {
    "fromChapter": 545,
    "toChapter": 548,
    "locationId": "亂星海",
    "realm": "結丹期（後期）",
    "status": "alive",
    "activity": "被囚煉器室，以木靈力供風希、毒蛟、巨龜煉製雷鵬骨翅所成的風雷翅，歷時六個多月，被種風靈勁受制，暗中籌劃反撲。"
   },
   {
    "fromChapter": 549,
    "toChapter": 552,
    "locationId": "亂星海",
    "realm": "結丹期（後期）",
    "status": "alive",
    "activity": "以稀釋萬年靈液暗藏秘藥毒倒三妖，噬金蟲群啃殺毒蛟收其妖魂，踢龜妖與風希入地火池，奪未成形風雷翅破洞逃遁。"
   },
   {
    "fromChapter": 553,
    "toChapter": 556,
    "locationId": "亂星海",
    "realm": "結丹期（後期）",
    "status": "alive",
    "activity": "荒島以辟邪神雷穩翅認主、掌握雷遁術擺脫風希；轉赴雙峰島妙音門，被範夫人辨氣識破，定下除雲天嘯換傳送陣之約。"
   },
   {
    "fromChapter": 557,
    "toChapter": 560,
    "locationId": "亂星海",
    "realm": "結丹期（後期）",
    "status": "alive",
    "activity": "清剿傳送陣看守、誘殺雲天嘯，與來襲的妙鶴真人激戰且真容暴露，趁裂風本體追至之際搶先傳送回內海皇明島。"
   },
   {
    "fromChapter": 561,
    "toChapter": 566,
    "locationId": "亂星海",
    "realm": "結丹期（後期）",
    "status": "alive",
    "activity": "落點神鷲堂集結點被誤認執法使，反水斬丁老者、骷髅頭、惡漢救下元瑤，互贈靈液丹藥陣法，應允護元瑤施還魂術。"
   },
   {
    "fromChapter": 567,
    "toChapter": 573,
    "locationId": "亂星海",
    "realm": "結丹期（後期）",
    "status": "alive",
    "activity": "於玄陰小島護元瑤施還魂術，以巨猿傀儡驚退諸修、斬隱匿修士，與逆星盟少主溫天仁爆發激戰，陰魔斬斷臂、辟邪神雷滅真魔，戰至銀鐘扣下。"
   },
   {
    "fromChapter": 574,
    "toChapter": 576,
    "locationId": "亂星海",
    "realm": "結丹期（後期）",
    "status": "alive",
    "activity": "在亂星海鬼霧小島與逆星盟少主溫天仁激戰，以辟邪神雷滅其真魔化身，被八門金光鏡的金光神焰困住，靠萬年靈液耗對，直至鬼霧突至封禁全島法力。"
   },
   {
    "fromChapter": 577,
    "toChapter": 591,
    "locationId": "亂星海",
    "realm": "結丹期（後期，法力全失）",
    "status": "alive",
    "activity": "被黑色閃電傳送入陰冥之地，法力盡失，與梅凝在高牆村落腳；折臂並暗殺封天極、背下元嬰心得與妖族文字石碑、得通靈之氣短暫復力取出啼魂獸、接下天符門降靈符骨盒。"
   },
   {
    "fromChapter": 592,
    "toChapter": 594,
    "locationId": "亂星海",
    "realm": "結丹期（後期，法力全失）",
    "status": "alive",
    "activity": "帶梅凝至紅土村確認其兄遇難，以啼魂獸蒐集百餘塊阴冥兽晶並使其進化成銀猿，攀登暴風山，於迷霧中穿喉斬殺溫天仁、繳獲四象蟠龍帶，與重逢的紫靈仙子三人結伴。"
   },
   {
    "fromChapter": 595,
    "toChapter": 595,
    "locationId": "亂星海",
    "realm": "結丹期（後期）",
    "status": "alive",
    "activity": "於暴風山巔指揮銀猿與十口飛劍力戰上千飛行阴兽，待空間裂縫開啟、法力恢復，展風雷翅以雷遁挾紫靈、梅凝二女衝破回吸之力，脫離陰冥之地降落外界死寂海面。"
   },
   {
    "fromChapter": 596,
    "toChapter": 598,
    "locationId": "溪國",
    "realm": "結丹期（後期，大圓滿邊緣，丹藥失效）",
    "status": "alive",
    "activity": "與紫靈、梅凝南下抵溪國閩州，坦承天南出身，婉拒納梅凝為妾並贈妖丹，定下潛入雲夢山宗門靈脈苦修以衝假嬰之計。"
   },
   {
    "fromChapter": 599,
    "toChapter": 606,
    "locationId": "落雲宗",
    "realm": "結丹期（後期，偽裝煉氣十層）",
    "status": "alive",
    "activity": "斂息偽裝過問心術入落雲宗天泉峰，歸慕沛靈門下掌藥園，後山秘辟洞府布拘靈陣，習得血影遁、煉化邪氣與鳴魂珠，並結交奎焕赴綠蹤沼澤捕雪雲狐。"
   },
   {
    "fromChapter": 607,
    "toChapter": 616,
    "locationId": "落雲宗",
    "realm": "結丹期（後期，偽裝煉氣十層）",
    "status": "alive",
    "activity": "追雪雲狐入青金石密室，識破黑衣少婦尸魈騙局、收金符玉盒得靈眼之玉；玉如意銀狼奪舍靈狐，與銀月狼族殘魂達成入劍為器靈換自由的契約。"
   },
   {
    "fromChapter": 617,
    "toChapter": 625,
    "locationId": "天南",
    "realm": "結丹期（後期，偽裝煉氣十層，藉靈眼之玉苦修假嬰中）",
    "status": "alive",
    "activity": "點化銀月入青竹蜂雲劍，得知半年後試劍大會獎品明清靈水與定靈丹，藏拙過宗內選拔入選二十四席；啼魂獸與噬金蟲俱進化完成。"
   },
   {
    "fromChapter": 626,
    "toChapter": 636,
    "locationId": "雲夢山",
    "realm": "結丹期（假嬰前夕、對外偽裝煉氣期）",
    "status": "alive",
    "activity": "受宋師祖通明靈犀探心，以製符師身份參加三派試劍故取第九名，入三派禁地後趁正魔奪醇液混戰，以銀月替死、土遁巧取靈眼之樹靈根與定靈丹、明清靈水丹方，全身而退。"
   },
   {
    "fromChapter": 637,
    "toChapter": 638,
    "locationId": "落雲宗",
    "realm": "結丹期（假嬰／結丹大圓滿、結嬰中）",
    "status": "alive",
    "activity": "返小石山洞府移植靈眼之樹靈根與九曲靈參，抽參液催熟煉成九曲靈參丹，青元劍訣第九層大圓滿入假嬰；服定靈丹開始結嬰，引發方圓百里五色靈光天兆。"
   },
   {
    "fromChapter": 639,
    "toChapter": 647,
    "locationId": "落雲宗",
    "realm": "元嬰期（初期）",
    "status": "alive",
    "activity": "結嬰成功進入元嬰初期，加入落雲宗任太上長老、子母峰開府移樹，收慕沛靈為妾立三十年之約備顛鳳培元功，解讀大庚劍陣、初煉乾藍冰焰、初洗明清靈眼，隨後孤身啟程赴元武國"
   },
   {
    "fromChapter": 648,
    "toChapter": 655,
    "locationId": "天南",
    "realm": "元嬰期（初期）",
    "status": "alive",
    "activity": "偽裝散修潛入元武國，誅彭易雙凶並以辟邪神雷金網生擒至木靈嬰封入玉盒；於付天化壽誕之日隱身入付家堡，以噬金蟲飛劍與銀月滅盡付家嫡系及魔焰門兩護法，赴辛如音故居祭奠"
   },
   {
    "fromChapter": 656,
    "toChapter": 657,
    "locationId": "天南",
    "realm": "元嬰期（初期）",
    "status": "alive",
    "activity": "返元武國辛如音後人處了卻承諾、取得藏有玄牡化嬰大法的青色玉簡，以夢引術封婦人記憶後離去。"
   },
   {
    "fromChapter": 658,
    "toChapter": 659,
    "locationId": "黃楓谷",
    "realm": "元嬰期（初期）",
    "status": "alive",
    "activity": "返越國太岳山脈舊洞府收走靈眼之泉，誅殺撞見的鬼靈門弟子於洪一行、搜魂得知董璇兒曾尋己。"
   },
   {
    "fromChapter": 660,
    "toChapter": 663,
    "locationId": "青牛鎮",
    "realm": "元嬰期（初期）",
    "status": "alive",
    "activity": "重遊青牛鎮春香酒樓、潛入五里溝韓家宗祠認親祭祖，留噬金靈劍與精氣玉佩鎮族、贈丹後了卻塵緣飄然而去。"
   },
   {
    "fromChapter": 664,
    "toChapter": 668,
    "locationId": "越國",
    "realm": "元嬰期（初期）",
    "status": "alive",
    "activity": "經嘉元城後察覺御靈宗追蹤者，折返以風雷翅追剿碎魂門人與御靈宗修士，放走貌似小妹的菡雲芝、生擒柳玉。"
   },
   {
    "fromChapter": 669,
    "toChapter": 672,
    "locationId": "落雲宗",
    "realm": "元嬰期（初期）",
    "status": "alive",
    "activity": "攜柳玉返溪國落雲宗，套出五行靈嬰祕法、收柳玉為記名弟子改名柳眉，催熟六翼霜蚣得紫色魔火與蟲甲術，深研玄牡化嬰大法。"
   },
   {
    "fromChapter": 673,
    "toChapter": 676,
    "locationId": "天南",
    "realm": "元嬰期（初期，神識達元嬰中期水準）",
    "status": "alive",
    "activity": "閉關逾一年後，與呂長老、侍妾慕沛靈赴虞國交易會，途遇南陇侯強行交易，以神識化形與其神識比試打成平手。"
   },
   {
    "fromChapter": 677,
    "toChapter": 685,
    "locationId": "天南",
    "realm": "元嬰期（初期）",
    "status": "alive",
    "activity": "抵阗天城重逢火龍童子、赴晶龍閣換寶會換得赤精芝與六傀儡及上古傀儡術，認孫火為孫二狗後裔，第四日赴南陇侯密約。"
   },
   {
    "fromChapter": 686,
    "toChapter": 690,
    "locationId": "闐天城",
    "realm": "元嬰期（初期）",
    "status": "alive",
    "activity": "於闐天城密會受南陇侯之邀結奪寶之盟，發心魔誓後赴慕蘭，過黃土荒地以明清靈目看穿隱形法士並破陣脫困。"
   },
   {
    "fromChapter": 691,
    "toChapter": 696,
    "locationId": "慕蘭草原",
    "realm": "元嬰期（初期）",
    "status": "alive",
    "activity": "被穆上師駕御風車單獨追殺，以青竹蜂雲劍、銀鐘、乾藍冰焰激戰，冰封其肉身奪得千重峰與御風車，再赴約合會逼退追兵。"
   },
   {
    "fromChapter": 697,
    "toChapter": 706,
    "locationId": "慕蘭草原",
    "realm": "元嬰期（初期）",
    "status": "alive",
    "activity": "破太妙神禁入玉璣閣瓜分蒼坤遺寶，玉璣閣火併中冰封尤姓修士（致其形神俱滅）、陰魔斬重創王蝉後遁出，混出草原開四玉盒得望月訣與紫雲兜。"
   },
   {
    "fromChapter": 707,
    "toChapter": 711,
    "locationId": "天南",
    "realm": "元嬰期（初期）",
    "status": "alive",
    "activity": "出草原救下雷萬鶴、聶盈等舊人並嚇退覃上師，驚聞恩師李化元隕落、師門凋零，得知南宮婉將與魏離辰雙修大典，定折中三策決意阻婚。"
   },
   {
    "fromChapter": 712,
    "toChapter": 715,
    "locationId": "天南",
    "realm": "元嬰期（初期）",
    "status": "alive",
    "activity": "施換形訣喬裝管事袁坤潛入北凉國玲瓏山掩月宗，送匣引入南宮婉洞府相認情定，得知困心術真相，與南宮婉商議盜令牌脫身之策。"
   },
   {
    "fromChapter": 716,
    "toChapter": 721,
    "locationId": "掩月宗",
    "realm": "元嬰期（初期）",
    "status": "alive",
    "activity": "在南宮婉洞府設伏，與南宮婉聯手以辟邪神雷克血魔劍、輪回神光迷暈師姐，擒掩月宗大長老，奪兩儀環陽環與血魔劍，銷令牌後分手返闗天城。"
   },
   {
    "fromChapter": 722,
    "toChapter": 728,
    "locationId": "闐天城",
    "realm": "元嬰期（初期）",
    "status": "alive",
    "activity": "返闗天城與慕沛靈重逢（她已築基中期），會白書君、赴殿議聽軍情，拒回黃枫谷但以三寶換相助三次，玉和軒密會南陇侯璇璣子知兩儀環用途，領命赴黃龍山。"
   },
   {
    "fromChapter": 729,
    "toChapter": 731,
    "locationId": "天南",
    "realm": "元嬰期（初期）",
    "status": "alive",
    "activity": "抵黃龍山守千音幻化陣，認出故人墨玉珠之女李纓寧並贈丹藥噬金蟲球，於靜室鞏固紫羅極火，確認其威力強過乾藍冰焰。"
   },
   {
    "fromChapter": 732,
    "toChapter": 745,
    "locationId": "天南",
    "realm": "元嬰期（初期）",
    "status": "alive",
    "activity": "黃龍山守陣大戰：辟邪神雷瞬滅天哭先生、乾藍冰焰滅谷雙蒲附靈蛇怪，與乐上師激戰七番，以紫羅極火抗青銅油燈、被白蓮重創吐血，終藉銀月紫鎲兜奪走青銅油燈。"
   },
   {
    "fromChapter": 746,
    "toChapter": 747,
    "locationId": "天南",
    "realm": "元嬰期（初期，元氣大損）",
    "status": "alive",
    "activity": "雷遁帶銀月脫離仲神師，三施血影遁甩脫神識鎖定後潛入虞國山腹閉關靜養近半年，期間聲名大起。"
   },
   {
    "fromChapter": 748,
    "toChapter": 753,
    "locationId": "天南",
    "realm": "元嬰期（初期，元氣全復）",
    "status": "alive",
    "activity": "出關回歸天一城，化解南宮婉婚約、提庚精參戰條件，並與紫靈梅凝宋姓女子定議日後共入坠魔谷取靈燭果煉造化丹。"
   },
   {
    "fromChapter": 754,
    "toChapter": 763,
    "locationId": "天南",
    "realm": "元嬰期（初期）",
    "status": "alive",
    "activity": "靜室驅除青竹蜂雲劍青焰、煉成無名雷珠，出席頂層會議換得五塊庚精與玄天仙藤根莖，連夜煉降靈符四度失敗。"
   },
   {
    "fromChapter": 764,
    "toChapter": 775,
    "locationId": "天南",
    "realm": "元嬰期（初期）",
    "status": "alive",
    "activity": "御風車赴邊界大營，途遇萧翠儿贈寶；賭戰中以無名雷珠破血羅罩救人、聯銀月斃大上師肉身，纏鬥第四神師田鍾，戰至聖禽降世困魔大陣未決。"
   },
   {
    "fromChapter": 776,
    "toChapter": 783,
    "locationId": "慕蘭草原",
    "realm": "元嬰期（初期，776章降靈符附體暫達元嬰初期頂階，效用退去後復歸初期）",
    "status": "alive",
    "activity": "於天南慕蘭邊界大戰祭降靈符斬天虎、放啼魂獸吞銅甲煉屍、辟邪神雷滅黑袍女、聲東擊西奪元明古燈致聖禽自爆，逼成兩岸罷戰議和。"
   },
   {
    "fromChapter": 784,
    "toChapter": 792,
    "locationId": "落雲宗",
    "realm": "元嬰期（初期）",
    "status": "alive",
    "activity": "返宗驚見南宮婉中封魂咒冰封，閉關以庚精煉成大庚劍陣，赴天柱山傳送荒島，以劍陣與啼魂獸斬殺阴罗宗長老、搜魂得火蟾解咒之法，立極西墜魔谷救婉之策。"
   },
   {
    "fromChapter": 793,
    "toChapter": 795,
    "locationId": "落雲宗",
    "realm": "元嬰期（初期，開始修煉第二元嬰、至木靈嬰同化中）",
    "status": "alive",
    "activity": "以玄牡化嬰大法侵佔至木靈嬰種下第二元嬰，赴山腹以啼魂獸吞尸魈元神開煉天絕魔屍，諸事了結後帶銀月與慕沛靈乘御風車悄然啟程赴極西之地。"
   },
   {
    "fromChapter": 796,
    "toChapter": 801,
    "locationId": "墜魔谷",
    "realm": "元嬰期（初期）",
    "status": "alive",
    "activity": "從極西之地歸來，於葉樺城與紫靈、宋師侄重聚定下入谷尋靈燭果之計，與竹筒中大衍神君交涉得大衍訣第五層與傀儡術，途中解圍陳巧天聞陳巧倩終身未嫁。"
   },
   {
    "fromChapter": 802,
    "toChapter": 806,
    "locationId": "墜魔谷",
    "realm": "元嬰期（初期）",
    "status": "alive",
    "activity": "在萬嶺山臨時洞府閉關數月煉成三十餘具結丹級傀儡，出洞與南陇侯、鲁卫英訂三方分寶協議，谷外群修雲集後不顧魏無涯勸阻持墜魔令登單向傳送陣入谷。"
   },
   {
    "fromChapter": 807,
    "toChapter": 813,
    "locationId": "墜魔谷",
    "realm": "元嬰期（初期）",
    "status": "alive",
    "activity": "傳入外谷以明清靈眼破隱形裂縫西行與南陇侯、鲁卫英會合，破苍坤幻術入內谷通道，聯手傀儡飛劍法寶斬殺三首乌蛇古獸，以兩儀環護身穿越北極元光通道進入內谷。"
   },
   {
    "fromChapter": 814,
    "toChapter": 820,
    "locationId": "墜魔谷",
    "realm": "元嬰期（初期）",
    "status": "alive",
    "activity": "暗驅噬金蟲蒐集石壁罡銀沙礦脈，依苍坤路線圖穿越內谷，以碧鳩毒巨猿傀儡引開萬年紫紋蝎，佈水屬性法陣誘伏火蟾，以青竹蜂雲劍附冰焰辟邪神雷斬首破不滅之體取得火蟾妖丹。"
   },
   {
    "fromChapter": 821,
    "toChapter": 825,
    "locationId": "墜魔谷",
    "realm": "元嬰期（初期）",
    "status": "alive",
    "activity": "在古修遺骸分得紫色古鏡、靈料與七焰扇通天靈寶玉簡並暗取青蠶袍，激將大衍神君研究七焰扇仿製後取妖丹告辭，發現青蠶袍夾層墜魔谷地圖標記暫收待後再探。"
   },
   {
    "fromChapter": 826,
    "toChapter": 827,
    "locationId": "墜魔谷",
    "realm": "元嬰期（初期）",
    "status": "alive",
    "activity": "尚在內谷活動；此時南龍侯、魯衛英在另處密室破血咒之門、磨小須彌金剛陣，韓立尚未與紫靈會合。"
   },
   {
    "fromChapter": 828,
    "toChapter": 835,
    "locationId": "墜魔谷",
    "realm": "元嬰期（初期）",
    "status": "alive",
    "activity": "收回罡銀沙結晶、與紫靈會合，以神識化千追蹤鬼靈門、削峰布幻，斬殺綠洲黑白古獸取妖丹，並摘取靈燭果三枚。"
   },
   {
    "fromChapter": 836,
    "toChapter": 840,
    "locationId": "墜魔谷",
    "realm": "元嬰期（初期，接近中期）",
    "status": "alive",
    "activity": "於丘陵密室閉關煉製造化丹並服用，墜入幻境得高層天地領悟，悟冰焰收放與壓縮雷球新法，生服剩餘靈燭果，修為大進。"
   },
   {
    "fromChapter": 841,
    "toChapter": 852,
    "locationId": "墜魔谷",
    "realm": "元嬰期（初期，接近中期）",
    "status": "alive",
    "activity": "出關後援救令狐老祖與掩月宗大長老，與古魔分魂反覆鬥法，動用辟邪神雷、紫羅天火、傀儡群、大庚劍陣與血魔劍，並引魔入劍陣。"
   },
   {
    "fromChapter": 853,
    "toChapter": 855,
    "locationId": "墜魔谷",
    "realm": "元嬰期（初期頂階，借降靈符瞬達後回落初期）",
    "status": "alive",
    "activity": "以降靈符借毒蛟魂力催修為至元嬰初期頂階，血劍蓄芒決殺魔魂；遭空間裂縫捲入靈缈園殘骸，目睹銀焰焚魔，回收遺宝並探得紫色漿果靈草。"
   },
   {
    "fromChapter": 856,
    "toChapter": 857,
    "locationId": "墜魔谷",
    "realm": "元嬰期（初期）",
    "status": "alive",
    "activity": "困於坠魔谷內靈缈園殘骸空間，辨認上古靈藥備煉絳雲丹，尋得空間薄弱光點，定下苦修突破元嬰中期再斬障壁的計畫。"
   },
   {
    "fromChapter": 858,
    "toChapter": 858,
    "locationId": "墜魔谷",
    "realm": "元嬰期（中期）",
    "status": "alive",
    "activity": "苦修二十七年突破元嬰中期，以血魔劍配特殊符箓斬破空間薄弱點，破空而出落入東裕國寧州靈麟山靈泉儀式現場。"
   },
   {
    "fromChapter": 859,
    "toChapter": 861,
    "locationId": "天南",
    "realm": "元嬰期（中期）",
    "status": "alive",
    "activity": "向靈麟山三族打聽古魔分魂與無邊海大漩渦情報、贈斷金戈離去，回確認天絕魔尸困坠魔谷，重返落雲宗與程師兄吕洛重逢。"
   },
   {
    "fromChapter": 862,
    "toChapter": 865,
    "locationId": "落雲宗",
    "realm": "元嬰期（中期）",
    "status": "alive",
    "activity": "餵火蟾獸妖丹解南宮婉封魂咒、與慕沛靈定顛鳳培元功之約、收百巧院請函與煉傀儡材料，得知兩口飛劍下落不明。"
   },
   {
    "fromChapter": 866,
    "toChapter": 870,
    "locationId": "雲夢山",
    "realm": "元嬰期（中期）",
    "status": "alive",
    "activity": "赴百巧院觀乾坤塔認主禮、識破明馨媚術、應至陽上人之邀赴七靈島，並鬥勝古劍門金老怪，確立落雲宗為雲夢山第一宗。"
   },
   {
    "fromChapter": 871,
    "toChapter": 872,
    "locationId": "落雲宗",
    "realm": "元嬰期（中期）",
    "status": "alive",
    "activity": "閉關炼化最後一縷乾藍冰焰、參悟通寶訣第一層將虛天鼎封印入體培炼，並煉成元嬰級上古傀儡一只。"
   },
   {
    "fromChapter": 873,
    "toChapter": 878,
    "locationId": "溪國",
    "realm": "元嬰期（中期）",
    "status": "alive",
    "activity": "赴七靈島會三大修士、得知封印大陣危機與太真門秘史，獨潛魔氣深淵布置修復阵盤，收石碑殘片與四枚魔髓鑽、以魔氣修強阴羅幡，獲賜靈鰲島。"
   },
   {
    "fromChapter": 879,
    "toChapter": 879,
    "locationId": "落雲宗",
    "realm": "元嬰期（中期，第二元嬰大成）",
    "status": "alive",
    "activity": "閉關四年煉成黑綠色第二元嬰（玄化嬰大法、玄陰大法通玄變化之功），安排護宗後事，與銀月離開天南赴大晋。"
   },
   {
    "fromChapter": 880,
    "toChapter": 885,
    "locationId": "慕蘭草原",
    "realm": "築基期（中期，五鬼鎖神大法封印下；本相元嬰中期）",
    "status": "alive",
    "activity": "因催育噬金蟲撞見突兀長老遭追殺重傷、煞氣反噬，施五鬼鎖神大法封印修為偽裝寒仙師混入蒼鷺部車隊，炼成噬金蟲魔蟲妖尸，弧末遇猿鷲襲擊。"
   },
   {
    "fromChapter": 886,
    "toChapter": 900,
    "locationId": "大晉",
    "realm": "元嬰期（中期，被五鬼鎖神大法封印外顯築基中期）",
    "status": "alive",
    "activity": "喬裝突兀仙師「寒某」隨車隊穿越天澜草原，秒殺馮枕得密窟鑰匙、全滅九仙宮八修奪金焰石，後被天澜聖殿三人一獸追殺、以雙鼎吞聖鼎收聖獸後血影遁脫身。"
   },
   {
    "fromChapter": 901,
    "toChapter": 902,
    "locationId": "大晉",
    "realm": "煉氣期（血影遁過度耗損致自元嬰中期狂跌至炼氣期）",
    "status": "alive",
    "activity": "以假死術封冰沉天水河漂流一年餘入晉，於辽州舜江被曹家官船救起；修為跌至炼氣期，暫棲船上養傷並以指點曹夢容換取大晉修仙界情報。"
   },
   {
    "fromChapter": 903,
    "toChapter": 915,
    "locationId": "大晉",
    "realm": "築基期（自炼氣期恢復）",
    "status": "alive",
    "activity": "茅屋養傷八九月復至筑基期、敗馬玉林後離曹家；赴關寧府參王大會撿漏晶化妖丹、得金剛舍利，控孔斗取密窟地圖，入雪陵山脈冯家密窟取明王訣與舍利子，攜寶離開時遭山崩異變"
   },
   {
    "fromChapter": 916,
    "toChapter": 920,
    "locationId": "大晉",
    "realm": "元嬰期（中期，法力被封僅築基期可用）",
    "status": "alive",
    "activity": "雪嶺山脈被捲入炫烨王與方尖山二妖之爭，以雷遁、冰焰、金網斬殺元嬰中期青袍老者，逼退二妖，向炫烨王索得非本命天尸珠後遁走萬里。"
   },
   {
    "fromChapter": 921,
    "toChapter": 921,
    "locationId": "大晉",
    "realm": "元嬰期（中期，法力被封僅築基期可用）",
    "status": "alive",
    "activity": "荒山洞府閉關收寶：煉靈液為天尸珠去毒，以紫罗天火培煉雪晶珠納入丹田，啼魂獸以萬年尸焰完成金剛罩最後祭煉。"
   },
   {
    "fromChapter": 922,
    "toChapter": 930,
    "locationId": "大晉",
    "realm": "元嬰期（中期，明王訣第一層，法力仍被封）",
    "status": "alive",
    "activity": "修成明王訣第一層後，以甘家暗子與嚴先生為引混入玉田山，被華蓮仙姑納入皇清觀煉器殿，向韋老學煉器、探葉家奪寶陰謀，弧末嚴先生病故後悄然失蹤。"
   },
   {
    "fromChapter": 931,
    "toChapter": 934,
    "locationId": "大晉",
    "realm": "元嬰期（中期，明王訣第二層修煉中，法力仍被封）",
    "status": "alive",
    "activity": "一年多以多重化身在大晉南部搜集三焰扇材料，赴陇州天岳山脈以霓裳草誘妖，奪昊陽鸟五根火翎、收服七級土甲龍，全身而退並嫁禍魔木宗馬某。"
   },
   {
    "fromChapter": 935,
    "toChapter": 938,
    "locationId": "大晉",
    "realm": "元嬰期（中期，明王訣第二層修煉中，法力仍被封）",
    "status": "alive",
    "activity": "晋京途中重逢曹夢容等故人，感應本命青竹蜂雲劍落古魔之手而押後復仇；抵晋京誅馮掌柜與孔家伏兵，以梦引术探得炫烨王三尸出山困關寧三家的後續。"
   },
   {
    "fromChapter": 939,
    "toChapter": 945,
    "locationId": "晉京",
    "realm": "元嬰期（中期，明王訣第二層修煉中，法力仍被封）",
    "status": "alive",
    "activity": "於晋西坊市天機閣以赤精芝換雷靈晶、珍稀材料換天機府、參觀芥子空間，得引薦地下交易會大賺靈石；宝光殿前以厲飛雨假名化解天澜聖女林銀屏之危，並計取其貼身玉佩煉感應珠"
   },
   {
    "fromChapter": 946,
    "toChapter": 959,
    "locationId": "晉京",
    "realm": "元嬰期（中期）",
    "status": "alive",
    "activity": "在晉京坊市殺肖老兒奪寒髓、得回陽真水配方，於大拍賣會與地下交易會以魔髓鑽、靈石蒐集墨金五行玉玉橡膠庚精等傀儡材料，避開阴罗宗與林銀屏，遭古魔分魂伏擊靠血影遁脫逃"
   },
   {
    "fromChapter": 960,
    "toChapter": 966,
    "locationId": "大晉",
    "realm": "元嬰期（中期）",
    "status": "alive",
    "activity": "赴華雲州天符門歸還降靈符骨片、研習制符典籍並重遇向之禮，以客卿長老震懾煞陽宗換得化靈符，再入南海門屠蛟大會以庚精飛劍斬殺八級赤火蛟、奪蛟屍妖丹封蛟魂。"
   },
   {
    "fromChapter": 967,
    "toChapter": 972,
    "locationId": "大晉",
    "realm": "元嬰期（中期）",
    "status": "alive",
    "activity": "在外海無名荒島閉關一年多煉成人形高階傀儡，大衍神君裂魂入傀儡並坐化留下大衍寶經，韓立攜傀儡赴苦竹島以雷火弓威壓換得烏鳳翎三根，又以寒髓誘降土甲龍為靈獸。"
   },
   {
    "fromChapter": 973,
    "toChapter": 975,
    "locationId": "大晉",
    "realm": "元嬰期（中期）",
    "status": "alive",
    "activity": "南下南疆雙蝎山贈王姓女修變異鐵尾蝎、以聚靈法陣收五瓶天雷備三焰扇靈料，與富姓長老白瑶怡元姓大漢常芷芳會合，得知培嬰丹配方唯缺陰芝馬血肉主材料。"
   },
   {
    "fromChapter": 976,
    "toChapter": 977,
    "locationId": "昆吾山",
    "realm": "元嬰期（中期）",
    "status": "alive",
    "activity": "於萬毒谷外應富成之邀結盟下陰陽窟捕陰芝馬煉培嬰丹，冥河之頁鬼頭遇體內異物潰散，以口頭承諾代血誓，被富成暗中標記。"
   },
   {
    "fromChapter": 978,
    "toChapter": 978,
    "locationId": "昆吾山",
    "realm": "元嬰期（中期）",
    "status": "alive",
    "activity": "獨赴銀蛟山火脈秘境，耗數月於地下火山裂縫煉成至寶級三焰扇，並順帶以八級赤火蛟精魂煉成降靈符，戰力大增。"
   },
   {
    "fromChapter": 979,
    "toChapter": 985,
    "locationId": "昆吾山",
    "realm": "元嬰期（中期）",
    "status": "alive",
    "activity": "靠紫幽珠神光抵禦驚魄陰風入陰陽窟搜索，與白瑤怡同組斬孽猿、辨炼魂陣，於風穴取三塊黑晶，再以啼魂獸吞滅三具尸煞幹尸。"
   },
   {
    "fromChapter": 986,
    "toChapter": 993,
    "locationId": "昆吾山",
    "realm": "元嬰期（中期）",
    "status": "alive",
    "activity": "獨力力戰高階炼尸銀翅夜叉，貼降靈符催法力至中期頂峰、晶化飛針毀邪月幻鏡、三焰扇火鳳掃滅其數千年煞魂絲，激戰中與夜叉同被傳送大陣捲走。"
   },
   {
    "fromChapter": 994,
    "toChapter": 997,
    "locationId": "昆吾山",
    "realm": "元嬰期（中期）",
    "status": "alive",
    "activity": "傳入昆吾山腹，趁亂滅尸狼擒陰芝馬（夜叉脫禁遁走奪走晶化飛針），救出富成白瑤怡開爐煉丹，獲富成主動相贈三粒培嬰丹。"
   },
   {
    "fromChapter": 998,
    "toChapter": 1005,
    "locationId": "昆吾山",
    "realm": "元嬰期（中期）",
    "status": "alive",
    "activity": "隱匿上行藉土甲龍取晶碑、以五色珠破上古禁制脫困，於石亭與乾老魔不期而遇逼問封魂咒解法未果，遭花天奇打斷後隨各方暫時聯手深入昆吾山。"
   },
   {
    "fromChapter": 1006,
    "toChapter": 1011,
    "locationId": "昆吾山",
    "realm": "元嬰期（中期）",
    "status": "alive",
    "activity": "隨多方修士闖入昆吾山封印，以明清靈目破紫薇七星陣，獨闖鑄靈堂以三焰扇與六翼霜蚣寒氣打開化靈殿萬年火鼎。"
   },
   {
    "fromChapter": 1012,
    "toChapter": 1021,
    "locationId": "大晉",
    "realm": "元嬰期（中期，銀月甦醒）",
    "status": "alive",
    "activity": "得太陰真火與古火鼎、銀月甦醒；以三焰扇震散天澜圍堵，發降靈符硬抗金磁靈木重壓，穿北極元光逼近昆吾殿供桌寶物。"
   },
   {
    "fromChapter": 1022,
    "toChapter": 1027,
    "locationId": "大晉",
    "realm": "元嬰期（中期）",
    "status": "alive",
    "activity": "在供桌奪寶混戰中搶得木牌與書卷，以兩儀陽環操控北極元光降伏十級玄岩龜圭靈為靈獸，吞本命元牌定主僕並布陣埋伏乾老魔。"
   },
   {
    "fromChapter": 1028,
    "toChapter": 1032,
    "locationId": "大晉",
    "realm": "元嬰期（中期）",
    "status": "alive",
    "activity": "與圭靈聯手破五子同心魔合體，以魔髓飛刀碎血魔珠、虛天鼎擒乾老魔元嬰抽魂滅殺，金剛罩封五子魔，得儲物袋與兩杆阴罗幡。"
   },
   {
    "fromChapter": 1033,
    "toChapter": 1035,
    "locationId": "大晉",
    "realm": "元嬰期（中期）",
    "status": "alive",
    "activity": "滅阴罗宗黑衫長老得第三杆阴罗幡，落入塌陷鎮魔塔擋四散真人血刀、六層救白瑤怡，至第八層見八靈尺現世與銀月另一半精魂召喚。"
   },
   {
    "fromChapter": 1036,
    "toChapter": 1047,
    "locationId": "昆吾山",
    "realm": "元嬰中期",
    "status": "alive",
    "activity": "進鎮魔塔第八層，聯手眾修破石傀儡陣；以失神刺＋魔髓鑽飛刀斬殺糾纏多年的雙首四臂天南古魔，並從遺寶中奪回兩口失散的青竹蜂雲劍。"
   },
   {
    "fromChapter": 1048,
    "toChapter": 1054,
    "locationId": "昆吾山",
    "realm": "元嬰中期",
    "status": "alive",
    "activity": "黑風旗封閉空間後與尸熊夜叉混戰，以叱念真雷種制徐仙師與林銀屏元嬰，逼徐仙師交出噬金蟲催熟秘訣，隨空間碎裂被傳入第九層。"
   },
   {
    "fromChapter": 1055,
    "toChapter": 1065,
    "locationId": "昆吾山",
    "realm": "元嬰中期",
    "status": "alive",
    "activity": "在第九層祭壇以三焰扇助玄青子平山印、七妙真人赤鳴鼓三寶聯手壓制古魔；化靈符替身保命，暗令噬金蟲咬斷石柱斷魔氣，逼退元刹本體神念，續戰三頭六臂魔物。"
   },
   {
    "fromChapter": 1066,
    "toChapter": 1074,
    "locationId": "昆吾山",
    "realm": "元嬰期（中期）",
    "status": "alive",
    "activity": "於鎮魔塔第九層與元刹聖祖分身、珈輪戰魔死戰，以虛天鼎擋裂縫生還，激天晶碑重封魔氣，助銀月靈魂吞噬滅分神，收黑風旗殘骸與八靈尺，封靈大法封小瓶記憶後被逆星盤傳送出"
   },
   {
    "fromChapter": 1075,
    "toChapter": 1079,
    "locationId": "大晉",
    "realm": "元嬰期（中期，炼化培嬰丹後元嬰增半寸）",
    "status": "alive",
    "activity": "傳送落中婁府後北赴霜郡雪連峰，驅李家佈白霧幻阵與六翼霜蚣，閉關十餘年炼化培嬰丹（元嬰增半寸、再無瓶頸），重祭青竹蜂雲劍、默記八靈尺通寶訣、收服五子同心魔、初炼太"
   },
   {
    "fromChapter": 1080,
    "toChapter": 1095,
    "locationId": "大晉",
    "realm": "元嬰期（中期，炼化培嬰丹後元嬰增半寸）",
    "status": "alive",
    "activity": "入北冥島小極宮，以四條件換寒骊上人協助，藏經閣閱覽，入冰海採玄冰花炼玄冰丹、擊殺二妖救白瑶怡，會合五寒焰修士入虛靈殿玄玉洞布陣協助寒骊衝擊化神，暗以太陰真火吸玄"
   },
   {
    "fromChapter": 1096,
    "toChapter": 1102,
    "locationId": "大晉",
    "realm": "元嬰期（中期）",
    "status": "alive",
    "activity": "在小極宮虛靈殿地下玄玉洞，與龍夫人、摩鳩、欧阳、白夢馨輪流以五色寒焰替寒骊上人洗髓，並以明清靈目全程觀摩寒骊衝擊化神期（最終功虧一簣）。"
   },
   {
    "fromChapter": 1103,
    "toChapter": 1113,
    "locationId": "大晉",
    "realm": "元嬰期（中期）",
    "status": "alive",
    "activity": "寒骊反目索虛天鼎，韓立於玄玉洞連斬白夢馨、欧阳、摩鳩、龍夫人四人並封寒骊元嬰入碧綠禁瓶，以沉水取兩千餘塊萬年玄玉、搜魂得太陽精火與出口情報。"
   },
   {
    "fromChapter": 1114,
    "toChapter": 1120,
    "locationId": "大晉",
    "realm": "元嬰期（中期）",
    "status": "alive",
    "activity": "以乾蓝鼎開玄玉洞入虛靈殿，穿越各殿沿途斬殺八九級妖兽，在主殿入口被萬妖幡攝入、與車老妖幼童化身激鬥，兩度以破界符脫困、鎖定傳送高台。"
   },
   {
    "fromChapter": 1121,
    "toChapter": 1124,
    "locationId": "大晉",
    "realm": "元嬰期（中期）",
    "status": "alive",
    "activity": "在主殿目睹冰凤凤離冰焰壓制宫主、得知冰凤自壓境界之秘，與宫主及黃泉鬼母暫盟對抗二妖，最終虛天鼎自啟單向上古傳送陣、青光幕護身被傳出虛靈殿，進入第七卷。"
   },
   {
    "fromChapter": 1125,
    "toChapter": 1127,
    "locationId": "虛天殿",
    "realm": "元嬰期（中期）",
    "status": "alive",
    "activity": "傳送陣誤啟重返虛天殿，與十級冰鳳同困巨塔；聯手探查寒驪台控制法陣未果，遂入第二層靈眼之泉密室閉關。"
   },
   {
    "fromChapter": 1128,
    "toChapter": 1129,
    "locationId": "虛天殿",
    "realm": "元嬰期（後期）",
    "status": "alive",
    "activity": "靈眼之泉潛修八十年，先推中期巔峰再幾乎無礙突破元嬰後期；合力驅動法陣將虛天殿移出虛空降臨乱星海並傳送出殿，冰鳳殲混老魔後離去。"
   },
   {
    "fromChapter": 1130,
    "toChapter": 1139,
    "locationId": "亂星海",
    "realm": "元嬰期（後期）",
    "status": "alive",
    "activity": "走訪苦門島黃沙門換情報與高階靈石；天星城遇凌玉靈、與溫青試探各退一步獲客卿令牌；重逢文思月，為田琴兒驅毒並贈《陣法要訣》紫陰丸，約魁星島重會。"
   },
   {
    "fromChapter": 1140,
    "toChapter": 1145,
    "locationId": "亂星海",
    "realm": "元嬰期（後期）",
    "status": "alive",
    "activity": "海上目睹靈界巨禽跨界攻鬼霧並擒獲青色靈翎；雷空島坊市購高階靈石、布噬金蟲暗線，夜間設伏截殺妙鶴真人與黃昆，搜魂得極陰祖師駐碧靈島。"
   },
   {
    "fromChapter": 1146,
    "toChapter": 1154,
    "locationId": "亂星海",
    "realm": "元嬰期（後期）",
    "status": "alive",
    "activity": "潛入亂星海外星海碧靈島石峰借陰煞血尸入禁，以乾藍冰焰冰封擒殺極陰祖師了結宿怨、得托天魔功口訣；趁海族金蛟王奪島之亂劫得極品靈石，全身遁離。"
   },
   {
    "fromChapter": 1155,
    "toChapter": 1159,
    "locationId": "亂星海",
    "realm": "元嬰期（後期）",
    "status": "alive",
    "activity": "在碧靈島外海脫離金蛟王、保住木屬性極品靈石，返回銀鯊島，與天星雙聖於無名珊瑚島談判，以三次援手換突破化神玉簡與三塊半截萬里符。"
   },
   {
    "fromChapter": 1160,
    "toChapter": 1166,
    "locationId": "亂星海",
    "realm": "元嬰期（後期）",
    "status": "alive",
    "activity": "在魔湖島滅殺金花老祖、放六翼霜蚣追殺蛮師三弟子，潛入魔湖底洞府取得庚精與金闕玉書銀蝌文殘頁，並與虛天鼎中天澜聖獸達成合作之約。"
   },
   {
    "fromChapter": 1167,
    "toChapter": 1171,
    "locationId": "亂星海",
    "realm": "元嬰期（後期）",
    "status": "alive",
    "activity": "重臨小寰島、於奎星島收田琴兒，傳送回天南越國礦脈殺魔焰門、盤問近百年大事毀傳送陣，再赴元武國逼退化羽門、推斷田琴兒為辛如音轉世。"
   },
   {
    "fromChapter": 1172,
    "toChapter": 1178,
    "locationId": "落雲宗",
    "realm": "元嬰期（後期）",
    "status": "alive",
    "activity": "回落雲宗禁地與南宮婉相會、重布陣法，正式收田琴兒為徒，以氣息全無壓服古劍門百巧院，並於元嬰後期大典密殿中一人擊敗魏無涯、合歡老魔聯手。"
   },
   {
    "fromChapter": 1179,
    "toChapter": 1184,
    "locationId": "墜魔谷",
    "realm": "元嬰期（後期）",
    "status": "alive",
    "activity": "於子母峰閉關重祭七十二口青竹蜂雲劍、改煉風雷翅、凝練火靈絲與修煉破滅法目，得三女失蹤訊後赴墜魔谷以血月覓靈解救慕沛靈三女，迫退第二元嬰。"
   },
   {
    "fromChapter": 1185,
    "toChapter": 1190,
    "locationId": "亂星海",
    "realm": "元嬰期（後期，天南第一修士）",
    "status": "alive",
    "activity": "重返七靈島確認第二元嬰夺舍魔屍，入萬丈魔淵以三焰扇逼出之，配玄罡天煞陣與虛天鼎收押，返子母峰處置門下並以秘術抹其神識、附人形傀儡"
   },
   {
    "fromChapter": 1191,
    "toChapter": 1196,
    "locationId": "溪國",
    "realm": "元嬰期（後期）",
    "status": "alive",
    "activity": "攜天澜聖獸赴溪國荒原護渡十一波化形雷劫，斬變異獨角蚯得吸靈金角、以三器盛取帝流漿；天澜化形傳化界珠、木生珠、金剛訣等天機並改造疾風九變"
   },
   {
    "fromChapter": 1197,
    "toChapter": 1201,
    "locationId": "雲夢山",
    "realm": "元嬰期（後期）",
    "status": "alive",
    "activity": "於落雲宗舉行與南宮婉萬修大典雙修，會燕如嫣（鬼靈門）受贈血肢丹血魂鐲木靈珠並允調停、察合歡老魔暗謀，定木生珠轉化之策，並為菡雲芝敘舊、董萱兒神念解心魔"
   },
   {
    "fromChapter": 1202,
    "toChapter": 1202,
    "locationId": "雲夢山",
    "realm": "元嬰期（後期，閉關精進）",
    "status": "alive",
    "activity": "閉生死關逾百年：修成大衍訣末層、明王訣第三層、疾風九變，煉木生珠入體與毒鉤火龍柱法寶，六翼霜蚣升七級，收徒石堅賜大衍宝經"
   },
   {
    "fromChapter": 1203,
    "toChapter": 1214,
    "locationId": "亂星海",
    "realm": "元嬰期（後期大成接近）",
    "status": "alive",
    "activity": "出關得凌玉靈萬里符再赴亂星海，破陣救白水劍宗、入天星城以傀儡密殺仇人西門長老、得元磁神光，星宮大戰中隨萬天明遁遠海單戰，目睹其六極真魔功真身現身"
   },
   {
    "fromChapter": 1215,
    "toChapter": 1218,
    "locationId": "天星城",
    "realm": "元嬰期（後期）",
    "status": "alive",
    "activity": "於星宮終戰識破六道極聖真身，以三焰扇、虛天鼎、魔髓飛刀、人形傀儡諸寶斬滅其兩隻附體聖魔與元嬰，使六道形神俱滅，收繳儲物袋及囚有女修元嬰的綠色小瓶。"
   },
   {
    "fromChapter": 1219,
    "toChapter": 1223,
    "locationId": "天星城",
    "realm": "元嬰期（後期）",
    "status": "alive",
    "activity": "聽天澜童子講靈界五行合一、丹靈根、器靈根、小天劫；放出綠瓶中女修元嬰（溫夫人），溫夫人確認大仇得報後兵解自盡；破風火天絕大陣、斬蓝氏雙魔瓦解逆星盟；探元磁山五行"
   },
   {
    "fromChapter": 1224,
    "toChapter": 1224,
    "locationId": "落雲宗",
    "realm": "元嬰期（後期巔峰）",
    "status": "alive",
    "activity": "返回天南子母峰閉關五十餘年修成青元劍訣末層與寒焰五魔（晉入後期巔峰），中途與南宮婉出遊半年，最終於子母峰衝擊化神，靈雲爆裂功虧一簣。"
   },
   {
    "fromChapter": 1225,
    "toChapter": 1231,
    "locationId": "天南",
    "realm": "元嬰期（後期巔峰）",
    "status": "alive",
    "activity": "化神失敗後告別南宮婉再度遠遊，取道慕蘭草原赴大晉，尋天機殿求芥子空間秘術；以切磋勝雷音宗元智和尚，迫天機阁主粲苦交出芥子空間煉製秘術玉簡。"
   },
   {
    "fromChapter": 1232,
    "toChapter": 1238,
    "locationId": "大晉",
    "realm": "元嬰期（後期巔峰）",
    "status": "alive",
    "activity": "截殺阴罗宗宗主搜魂、奪第二顆滅仙珠，潛入阴罗宗灭杀七八名元嬰長老；誤殺風老怪後代遭追逐月餘，經向之禮調停，以空間節點資料與三方達成合作協議。"
   },
   {
    "fromChapter": 1239,
    "toChapter": 1244,
    "locationId": "天南",
    "realm": "元嬰期（後期巔峰）",
    "status": "alive",
    "activity": "隨向之禮、風老怪赴魔陀山見呼慶雷，宴上驚見舊識紫靈被強擄為侍妾，遂以寒髓換取呼慶雷解除紫靈禁制，並答應硬接呼慶雷一擊，殿外對峙決鬥在即。"
   },
   {
    "fromChapter": 1245,
    "toChapter": 1247,
    "locationId": "大晉",
    "realm": "元嬰期（後期大成）",
    "status": "alive",
    "activity": "在魔陀山魔宮接呼老魔一擊之約救出紫靈；偕紫靈遊歷數月情緣終結、紫靈離去，心境平復後獨赴大晉火獄禁地尋太陽精火。"
   },
   {
    "fromChapter": 1248,
    "toChapter": 1250,
    "locationId": "大晉",
    "realm": "元嬰期（後期大成）",
    "status": "alive",
    "activity": "深入火獄雾海，以太陰火鳥克火煞靈、死火山口布乾蓝冰焰法陣，誘銀翅小馬入陣，施驚神刺與五色寒焰將太陽精火捕入虛天鼎。"
   },
   {
    "fromChapter": 1251,
    "toChapter": 1256,
    "locationId": "亂星海",
    "realm": "元嬰期（後期大成）",
    "status": "alive",
    "activity": "回落雲宗以回陽水復活玄天仙藤並秘密守護，赴星宮以赤魂幡收元磁山、託凌玉靈查金蛟王，於乱星海荒島設伏擊殺金蛟王與風希，獲妖丹、淬骨訣、龍鱗果移植秘術。"
   },
   {
    "fromChapter": 1257,
    "toChapter": 1257,
    "locationId": "墜魔谷",
    "realm": "化神期（初期，新晉）",
    "status": "alive",
    "activity": "於坠魔谷芥子空間閉關三百年，修元磁神光大成、煉化元磁山，服三顆魔元丹突破化神初期；出關探望南宮婉，得知慕沛靈閉關突破元嬰時心魔反噬陨落。"
   },
   {
    "fromChapter": 1258,
    "toChapter": 1262,
    "locationId": "天南",
    "realm": "化神期（初期頂峰）",
    "status": "alive",
    "activity": "借绛云丹百餘年修至化神初期頂峰、青元劍訣大圓滿，命石堅奪千竹教；赴五龍海尋得空間節點小島，召田琴兒加強封印、與冰凤議定互下死禁聯手，七十年遊歷人界蒐羅金烁環等防"
   },
   {
    "fromChapter": 1263,
    "toChapter": 1265,
    "locationId": "天南",
    "realm": "化神期（初期頂峰）",
    "status": "alive",
    "activity": "回五龍海與南宮婉重逢、田琴兒龍吟之體解除，獲贈六丁天甲符、速返坠魔谷取玄天仙藤靈花靈果；最終與冰凤互下死禁、收回第二元嬰，乘洞天舟覆元磁山灰霞進入空間節點飛昇靈"
   },
   {
    "fromChapter": 1266,
    "toChapter": 1295,
    "locationId": "風元大陸",
    "realm": "化神期（法力全失，以金剛訣肉身代替；弧末金剛訣第七層瓶頸）",
    "status": "alive",
    "activity": "法力全失後以金剛訣自救，弧內突破第四層、借九玄明玉潭突破第六層，最終修至第七層瓶頸；以灵具師身份隱居"
   },
   {
    "fromChapter": 1296,
    "toChapter": 1325,
    "locationId": "天淵城",
    "realm": "開始：煉體士（金剛訣第七層接近大成，法力枯竭）；結束：化神初期（元嬰重凝、金剛訣大成、法力恢復）",
    "status": "alive",
    "activity": "吞噬噬炎獲噬靈天火與暫時火靈力，奪得神血，在山腹閉關百餘年突破，渡過兩色雷劫後入天淵城擔任青冥衛，並"
   },
   {
    "fromChapter": 1326,
    "toChapter": 1357,
    "locationId": "風元大陸",
    "realm": "化神中期",
    "status": "alive",
    "activity": "參加飛升修士聚會、婉拒萱姓仙子聯手邀請、修煉梵聖真魔功呈現法體雙修異象、等待噬金蟲催熟完成後接下神秘"
   },
   {
    "fromChapter": 1358,
    "toChapter": 1417,
    "locationId": "天淵城",
    "realm": "化神中期（苦修中，三次衝關未果）",
    "status": "alive",
    "activity": "本弧核心行動：偷取真靈之血、擊退銀階木靈、重煉風雷翅、參與真蟾獵殺行動、逃脫夜叉王、在黑冥半島苦修約"
   },
   {
    "fromChapter": 1418,
    "toChapter": 1447,
    "locationId": "天鵬聖城",
    "realm": "化神後期（本弧突破）",
    "status": "alive",
    "activity": "以人族身份潛入天鵬聖城，被迫成為天鵬第三聖子，炼化鯤鵬真血及紅雲舍利後突破化神後期，意外獲驚蟄訣，帶"
   },
   {
    "fromChapter": 1448,
    "toChapter": 1477,
    "locationId": "天淵城",
    "realm": "化神後期（高階靈將）",
    "status": "alive",
    "activity": "擊殺多名強敵，被四大妖王認定為辟邪神雷持有者而強行軟禁；渡過第二次小天劫，修成五色孔雀變身術，煉成甲"
   },
   {
    "fromChapter": 1478,
    "toChapter": 1507,
    "locationId": "冥河之地",
    "realm": "化神期（靈將，神通可比煉虛級）",
    "status": "alive",
    "activity": "被四大妖王脅迫進入冥河之地，以祭雷術破冥河禁制充當工具；識破攝魂珠控制，將計就計，以諸多符箓、噬金蟲"
   },
   {
    "fromChapter": 1508,
    "toChapter": 1567,
    "locationId": "天淵城",
    "realm": "煉虛期（剛突破）",
    "status": "alive",
    "activity": "從血色光陣逃脫，在火陽族療傷後斬殺乌罗王族，又滅殺雙頭怪蛾與變異海獸，修復傳送陣抵達雷鳴大陸，接受玉"
   },
   {
    "fromChapter": 1568,
    "toChapter": 1597,
    "locationId": "雲城",
    "realm": "煉虛初期",
    "status": "alive",
    "activity": "逃離綠光城後大戰合體初階圖老者，以春黎劍陣和元氣之劍逼退對方，入住雲城，購入天外魔甲，認主通靈傀儡「"
   },
   {
    "fromChapter": 1598,
    "toChapter": 1627,
    "locationId": "廣寒界",
    "realm": "煉虛初期（修煉中）",
    "status": "alive",
    "activity": "易容後出入四族拍賣會，拍得瑕疵琉璃天火液；受段天刃與彩流罂邀請加入廣寒界禁制破解計畫；以元磁神光、春"
   },
   {
    "fromChapter": 1628,
    "toChapter": 1657,
    "locationId": "天淵城",
    "realm": "煉虛後期",
    "status": "alive",
    "activity": "以三元斬、辟邪神雷祭雷術、春黎劍陣、玄天果實等手段斬殺聖階魔猿與鐵翅魔化身，並巧獲芝仙，收穫豐厚後成"
   },
   {
    "fromChapter": 1658,
    "toChapter": 1687,
    "locationId": "廣寒界",
    "realm": "煉虛初期",
    "status": "alive",
    "activity": "本弧中從魔金山脈逃出後，相繼提煉山岳巨猿真靈之血、確認玄天殘刃可用、得到璃水珠、研讀元合五極山煉製法"
   },
   {
    "fromChapter": 1688,
    "toChapter": 1717,
    "locationId": "天淵城",
    "realm": "煉虛後期（接近合體）",
    "status": "alive",
    "activity": "全弧主導戰局，以元磁神山、梵聖法相金身、玄天殘刃、噬金蟲、風雷翅、惊蛰訣山嶽巨猿等多種底牌展示驚人戰"
   },
   {
    "fromChapter": 1718,
    "toChapter": 1754,
    "locationId": "廣寒界",
    "realm": "煉虛後期頂峰（九階，廣寒界後進階）",
    "status": "alive",
    "activity": "從廣寒界歸來後修為大進；與翁姓青年立心魔誓約、完成靈藥交易、誅殺血影，最終啟動超級傳送陣離開雷鳴大陸"
   },
   {
    "fromChapter": 1755,
    "toChapter": 1784,
    "locationId": "天淵城",
    "realm": "煉虛後期→合體初期",
    "status": "alive",
    "activity": "歷百年歸途返回天淵城，修煉煉神術第一層大成後成功突破合體，婉拒天淵城及谷家邀請，轉交冰魄仙子血魂，歸"
   },
   {
    "fromChapter": 1785,
    "toChapter": 1844,
    "locationId": "魔界",
    "realm": "合體初期",
    "status": "alive",
    "activity": "以陰鳳草換得齊天鑼與聚靈樁、以玄光刃三換一得淨明丹與金篆卷軸及冰鳳；真靈大典上以梵聖法相金身震懾四方"
   },
   {
    "fromChapter": 1845,
    "toChapter": 1874,
    "locationId": "地淵",
    "realm": "合體中期",
    "status": "alive",
    "activity": "完成萬毒混元身七層大成、進階合體中期、再入地淵取傳送坐標、殺滅鱼店主、目送啼魂飛升、從青元子和虛靈手"
   },
   {
    "fromChapter": 1875,
    "toChapter": 2024,
    "locationId": "魔界",
    "realm": "合體後期",
    "status": "alive",
    "activity": "本弧突破合體後期，祭煉天戈符，強行施展涅盤聖體二涅變身斃殺匈姓魔尊，以噬金蟲合力吞滅血光聖祖化身，後"
   },
   {
    "fromChapter": 2025,
    "toChapter": 2084,
    "locationId": "幻夜城",
    "realm": "合體後期",
    "status": "alive",
    "activity": "以魔尊身份潛伏幻夜城，協助白家驅魔、煉化異魔金提升法力、購得魔晶傀儡秘術，後率眾穿越幻啸沙漠，以洞漩"
   },
   {
    "fromChapter": 2085,
    "toChapter": 2144,
    "locationId": "魔界",
    "realm": "合體後期（接近後期巔峰）",
    "status": "alive",
    "activity": "訂契約招募蟹道人，大鬧魔界後喬裝入藍瀑城，得大五行真光、血牙米、異魔金晶珠；重逢紫靈並知曉魔界大劫；"
   },
   {
    "fromChapter": 2145,
    "toChapter": 2174,
    "locationId": "靈界",
    "realm": "合體後期",
    "status": "alive",
    "activity": "本弧從魔界強行突破通道返回靈界，修煉神念秘術、涅盤聖體第二階，守住二號陣眼，先後擊殺多名圣祖化身。"
   },
   {
    "fromChapter": 2175,
    "toChapter": 2175,
    "locationId": "魔界",
    "realm": "合體後期",
    "status": "alive",
    "activity": "得知木族聖樹被毀及大長老隕落後，帶人族修士從二號陣眼撤退朝木棉城方向離去，以免被木界大陣自爆波及。"
   },
   {
    "fromChapter": 2176,
    "toChapter": 2205,
    "locationId": "靈界",
    "realm": "合體後期大圓滿→大乘期",
    "status": "alive",
    "activity": "本弧完成百脈煉寶訣大成、煉神術第二層大成、元合五極山第三座、修成多種神通，最終成功渡過五行之劫、真雷"
   },
   {
    "fromChapter": 2206,
    "toChapter": 2235,
    "locationId": "魔界",
    "realm": "大乘期",
    "status": "alive",
    "activity": "主持大乘慶典、重創黑梟王、入魔界解圍黑葫城、於始印之地地宮首用祭雷術及玄天斬靈劍斬殺人面蟲並聯手奇襲"
   },
   {
    "fromChapter": 2236,
    "toChapter": 2295,
    "locationId": "靈界",
    "realm": "大乘期",
    "status": "alive",
    "activity": "主導尋找小靈界入口、潛入靈族、與靈王談判、率眾進入小修羅界斬殺修羅蛛；以玄天斬靈劍、涅槃聖體、梵聖金"
   },
   {
    "fromChapter": 2296,
    "toChapter": 2325,
    "locationId": "青元宮",
    "realm": "大乘期",
    "status": "alive",
    "activity": "本弧在小修羅界取得山海珠洞天至寶、煉化玄武真血修成惊蟄訣第七種變身、收空魚族為附庸、建立元合島青元宮"
   },
   {
    "fromChapter": 2326,
    "toChapter": 2420,
    "locationId": "靈界",
    "realm": "大乘期",
    "status": "alive",
    "activity": "接受守護兩儀微塵陣陣眼任務，暗中命噬金蟲王刻靈紋以保全自身，遠觀戰場發現六翼旁有面貌酷似自己的白袍男"
   },
   {
    "fromChapter": 2421,
    "toChapter": 2450,
    "locationId": "無涯海",
    "realm": "大乘期（本弧末期接近飛昇之劫）",
    "status": "alive",
    "activity": "本弧斬殺真仙馬良、收服魔光與火須子、收回掌天瓶瓶靈、赴龍島得廣靈道果、分魂下界取北極元晶，最終備齊飛"
   },
   {
    "fromChapter": 2451,
    "toChapter": 2454,
    "locationId": "北寒仙域",
    "realm": "真仙境（剛飛升，仙元力尚未完全轉化）；番外回憶段為元嬰期後期",
    "status": "dead",
    "activity": "飛升北寒仙域，接受高升邀請暫赴石矶殿；另在回憶線中元嬰期獨闖千竹教聖堂，以養魂木換取大衍訣後三層。"
   }
  ]
 },
 {
  "id": "隴家老祖",
  "name": "隴家老祖",
  "aliases": [
   "隴老怪",
   "隴兄",
   "隴某",
   "隴道友"
  ],
  "faction": "人族隴家",
  "importance": "major",
  "bio": "修煉無情道神通，以肉身激發半龍之身與韓立（金罡妖猿形態）正面交手平手，懷疑韓立是聖島金罡妖猿",
  "firstChapter": 1785,
  "canonFate": "在偽仙儡自爆中化為飛灰，陨落身亡",
  "chronicle": [
   {
    "fromChapter": 1785,
    "toChapter": 2024,
    "locationId": "魔界",
    "realm": "合體中後期",
    "status": "alive",
    "activity": "提前來訪告知魔族三大始祖降臨訊息，領隊組織進入魔界的計劃，以凈雷瓶破除雷網，與人灵兩族成員共同硬闖通"
   },
   {
    "fromChapter": 2025,
    "toChapter": 2084,
    "locationId": "幻夜城",
    "realm": "合體後期",
    "status": "alive",
    "activity": "帶領靈界修士潛入魔界計劃；與韓立在幻夜城外匯合，設計引誘趙家兩名魔尊離城，讓同伴成功盜取八足魔蜥；帶"
   },
   {
    "fromChapter": 2085,
    "toChapter": 2114,
    "locationId": "魔源海",
    "realm": "合體後期",
    "status": "alive",
    "activity": "帶領隊伍深入魔源海，以上古石傀儡和金沙斧、半龍之體應戰元魇始祖，最終在偽仙儡自爆中陨落。"
   }
  ]
 },
 {
  "id": "林銀屏",
  "name": "林銀屏",
  "aliases": [
   "天瀾聖女",
   "天瀾圣女"
  ],
  "faction": "天瀾草原聖殿",
  "importance": "major",
  "bio": "赴大晋尋找奪走聖獸分身與鬼罗幡之人，在宝光殿前識破韓立偽裝懷疑，被韓立以假名「厉飞雨」矇混，且被計取貼身玉佩",
  "firstChapter": 916,
  "canonFate": "在空間裂縫中僥倖生還，受向之禮警告離開大晉返回天澜草原",
  "chronicle": [
   {
    "fromChapter": 916,
    "toChapter": 1095,
    "locationId": "大晉",
    "realm": "元嬰期",
    "status": "alive",
    "activity": "在空間裂縫中僥倖生還，受向之禮警告離開大晉返回天澜草原"
   }
  ]
 },
 {
  "id": "寶花",
  "name": "寶花",
  "aliases": [
   "寶花聖祖",
   "魔界前始祖",
   "寶花大人",
   "寶花",
   "前始祖",
   "智魔"
  ],
  "faction": "魔族聖族，魔金山脈隱藏勢力",
  "importance": "major",
  "bio": "持粉紅花樹異寶追逐雷雲子，要奪天昙花，從韓立身上強行取回玄天如意刃殘片，並以幻日大法壓制元刹與血光。",
  "firstChapter": 1935,
  "canonFate": "重新成為魔族三大始祖之一",
  "chronicle": [
   {
    "fromChapter": 1935,
    "toChapter": 2144,
    "locationId": "魔界",
    "realm": "大乘（修為未完全恢復）",
    "status": "alive",
    "activity": "重傷流亡中，以玄天靈域重創天泣鶴颜；被六極與藍瀑設陣圍殺，借韓立助陣脫困；贈小靈天情報換取恩情。"
   },
   {
    "fromChapter": 2206,
    "toChapter": 2265,
    "locationId": "靈界",
    "realm": "大乘期（前魔族始祖）",
    "status": "alive",
    "activity": "施展玄天靈域協助擊破虫母化身；激發土皇釘本源之力以打入虫母體內晶核；不惜自毀境界激發滅虫關鍵之力；戰"
   },
   {
    "fromChapter": 2421,
    "toChapter": 2450,
    "locationId": "無涯海",
    "realm": "魔族三始祖之一（大乘頂尖）",
    "status": "alive",
    "activity": "在峽谷上空與涅槃始祖談論韓立事蹟，決定閉關修煉；本弧僅提及但未直接出場戰鬥。"
   }
  ]
 },
 {
  "id": "王蟬",
  "name": "王蟬",
  "aliases": [
   "鬼靈門少主"
  ],
  "faction": "鬼靈門",
  "importance": "major",
  "bio": "天罗國鬼靈門少主，常戴銀色鬼臉面具，暗靈根體質，以血靈大法血雲遁術追殺韓立，佈陰火大陣意圖以眾修士魂魄為燕如嫣血祭。",
  "firstChapter": 232,
  "canonFate": "雙腿被斬，重傷昏迷",
  "chronicle": [
   {
    "fromChapter": 232,
    "toChapter": 363,
    "locationId": "越京",
    "realm": "結丹期",
    "status": "alive",
    "activity": "鬼靈門少主，追殺南宮屏，多次與韓立交鋒，最終被幻陣所困，古傳送陣激活後帶隊破開洞窟頂但未能阻止韓立傳"
   },
   {
    "fromChapter": 686,
    "toChapter": 715,
    "locationId": "天南",
    "realm": "結丹後期",
    "status": "alive",
    "activity": "與韓立有舊仇，本弧被韓立陰魔斬斬斷雙腿，昏迷不醒，由燕如嫣施法續肢。"
   },
   {
    "fromChapter": 796,
    "toChapter": 825,
    "locationId": "大晉",
    "realm": "結丹期",
    "status": "alive",
    "activity": "王天勝之子，持銀色面具入谷，跟隨鐘姓長老在外谷密林尋找標記，看似手足完好。"
   }
  ]
 },
 {
  "id": "極陰祖師",
  "name": "極陰祖師",
  "aliases": [
   "烏長老",
   "烏老弟",
   "極陰老祖",
   "烏某"
  ],
  "faction": "玄陰派／魔道",
  "importance": "major",
  "bio": "玄骨上人之逆徒，覬覦韓立身上某樣東西，本弧末率大批黑雲壓境追殺韓立。",
  "firstChapter": 424,
  "canonFate": "本弧被韓立以虛天鼎乾藍冰焰封凍擒獲，後由蛮胡子元嬰吞噬其元嬰完成大仇，肉身被韩立金弧化為碎尸，徹底殞命。",
  "chronicle": [
   {
    "fromChapter": 424,
    "toChapter": 543,
    "locationId": "亂星海",
    "realm": "元嬰期",
    "status": "alive",
    "activity": "潛伏奇渊島黑石城，策動碧雲門以「蟲魔」形象誣陷韓立，並向碧雲門齊姓道士透露虛天鼎秘密以借助其人手尋找"
   },
   {
    "fromChapter": 1125,
    "toChapter": 1154,
    "locationId": "虛天殿",
    "realm": "元嬰中期",
    "status": "dead",
    "activity": "昔年在虛天殿中追殺過韓立的仇家；被發現駐守碧靈島，正以陰火拷問蛮胡子元嬰以圖補天丹下落。"
   }
  ]
 },
 {
  "id": "寶花聖祖",
  "name": "寶花聖祖",
  "aliases": [
   "白衣女子",
   "白影女子",
   "宮裝女子",
   "窈窕人影",
   "寶花",
   "寶花大人"
  ],
  "faction": "魔族",
  "importance": "major",
  "bio": "本弧甦醒後命三魔布陣，帶黑淵鱷外出尋找恢復修為之物，為本弧潛在大威脅但與韓立無直接接觸。",
  "firstChapter": 1658,
  "canonFate": "前魔族三大始祖之一，法力未恢復，為奪取韓立身上某株靈藥（銀蓬）而潛伏苦靈島，以天魔之誓壓制元魇，最終與韓立完成交易得到銀蓬。",
  "chronicle": [
   {
    "fromChapter": 1658,
    "toChapter": 1687,
    "locationId": "天淵城",
    "realm": "聖祖（超越大乘的頂級存在，修為未恢復）",
    "status": "alive",
    "activity": "本弧甦醒後命三魔布陣，帶黑淵鱷外出尋找恢復修為之物，為本弧潛在大威脅但與韓立無直接接觸。"
   },
   {
    "fromChapter": 1875,
    "toChapter": 1904,
    "locationId": "風元大陸",
    "realm": "大乘期（受傷，神通未完全恢復）",
    "status": "alive",
    "activity": "在風元大陸搜索特定目標以恢復神通，強入木族聖地取走黑靈花；麾下有邪龍後裔黑甲大漢跟隨；自稱神通在聖界"
   },
   {
    "fromChapter": 1995,
    "toChapter": 2024,
    "locationId": "靈界",
    "realm": "受傷的大乘級（法力大損）",
    "status": "alive",
    "activity": "被天泣、鶴顏聯手打落境界、流落靈界的魔族頂尖強者，持天命銅錢和卜算神通暗中追蹤一行人，以天卜術尋找能"
   },
   {
    "fromChapter": 2055,
    "toChapter": 2084,
    "locationId": "魔界",
    "realm": "大乘期（魔族圣祖）",
    "status": "alive",
    "activity": "一直跟蹤韓立等人；在林家修士護送朱果兒途中設伏，以粉紅花瓣神通制服並搜魂林家修士，得知眾人前往洗靈池"
   },
   {
    "fromChapter": 2085,
    "toChapter": 2114,
    "locationId": "苦靈島",
    "realm": "大乘期（前三大始祖之一）",
    "status": "alive",
    "activity": "前魔族三大始祖之一，法力未恢復，為奪取韓立身上某株靈藥（銀蓬）而潛伏苦靈島，以天魔之誓壓制元魇，最終"
   }
  ]
 },
 {
  "id": "六極",
  "name": "六極",
  "aliases": [
   "六極聖祖"
  ],
  "faction": "魔族",
  "importance": "major",
  "bio": "頭生潔白雙角的魔族女子，負責指揮圍攻靈皇城的魔族大軍，麾下五六十名高階魔族；命令所有人手盡出、一戰建功。",
  "firstChapter": 1875,
  "canonFate": "被寶花形神俱滅，隕落",
  "chronicle": [
   {
    "fromChapter": 1875,
    "toChapter": 2144,
    "locationId": "魔界",
    "realm": "大乘（始祖，化身合體後期）",
    "status": "alive",
    "activity": "本弧以一具合體後期化身現身，奴役紫靈作備用化身，與藍瀑密謀圍殺宝花；因發現大五行真光蹤跡卻受制於事在"
   },
   {
    "fromChapter": 2236,
    "toChapter": 2265,
    "locationId": "靈界",
    "realm": "大乘期（魔族篡位始祖）",
    "status": "dead",
    "activity": "當年奪取宝花始祖之位，本弧被宝花以玄天靈域困於翡雲谷、斬殺其六大化身後徹底殞落，其秘密第七化身亦被黑"
   }
  ]
 },
 {
  "id": "六翼",
  "name": "六翼",
  "aliases": [
   "白袍青年"
  ],
  "faction": "風元大陸",
  "importance": "major",
  "bio": "昔日韓立的靈蟲，具白龍真血後天變異化形開靈智；修煉虬鬚大漢提供的「逆靈真陰大法」，屠滅藍水宗一行，準備入蛮荒修煉以期成就真靈之身。",
  "firstChapter": 1815,
  "canonFate": "被韓立以血契制服，答應千年內為韓立收集材料換取血契解除，同時承諾人族有難時出手三次。",
  "chronicle": [
   {
    "fromChapter": 1815,
    "toChapter": 1844,
    "locationId": "魔界",
    "realm": "煉虛後期（修煉逆靈真陰大法進階中）",
    "status": "alive",
    "activity": "昔日韓立的靈蟲，具白龍真血後天變異化形開靈智；修煉虬鬚大漢提供的「逆靈真陰大法」，屠滅藍水宗一行，準"
   },
   {
    "fromChapter": 2386,
    "toChapter": 2415,
    "locationId": "風元大陸",
    "realm": "大乘期",
    "status": "alive",
    "activity": "充當誘餌引馬良入沙漠伏擊圈，後以仙界寄神魂秘術借體逃脫，輾轉逃回風元大陸，被明尊延攬為誘敵的二次誘餌"
   },
   {
    "fromChapter": 2416,
    "toChapter": 2420,
    "locationId": "靈界",
    "realm": "大乘期（元氣大損）",
    "status": "alive",
    "activity": "充當誘餌引馬良入局，途中與冰鳳打賭韓立能否萬年內飛升；後被明尊派去持陣盤阻截阳鹿。"
   },
   {
    "fromChapter": 2421,
    "toChapter": 2450,
    "locationId": "無涯海",
    "realm": "大乘境界",
    "status": "alive",
    "activity": "被韓立以血契制服，答應千年內為韓立收集材料換取血契解除，同時承諾人族有難時出手三次。"
   }
  ]
 },
 {
  "id": "明尊",
  "name": "明尊",
  "aliases": [
   "明某",
   "明大人",
   "明道友",
   "明兄"
  ],
  "faction": "赫連商盟",
  "importance": "major",
  "bio": "以最高規格接待韓立，知曉韓立乃靈界前十強者；暗中縱容田飛兒帶走魘龍之血，維護商盟利益與安全。",
  "firstChapter": 2326,
  "canonFate": "本弧被魔光、火須子斬殺，其分魂元嬰精氣被魔光吸空，徹底隕滅。",
  "chronicle": [
   {
    "fromChapter": 2326,
    "toChapter": 2355,
    "locationId": "靈界",
    "realm": "大乘期",
    "status": "alive",
    "activity": "以最高規格接待韓立，知曉韓立乃靈界前十強者；暗中縱容田飛兒帶走魘龍之血，維護商盟利益與安全。"
   },
   {
    "fromChapter": 2386,
    "toChapter": 2415,
    "locationId": "風元大陸",
    "realm": "大乘期",
    "status": "alive",
    "activity": "血天之變後接任商盟主事，策劃風元大陸聯合抗仙行動，於天外天集結各族頂尖大乘，動用兩件玄天之宝和四名真"
   },
   {
    "fromChapter": 2416,
    "toChapter": 2420,
    "locationId": "靈界",
    "realm": "大乘期（商盟首領）",
    "status": "alive",
    "activity": "主持大局，部署兩儀微塵陣，私下與影子之人密謀借法陣獻祭消耗真仙，並暗算守陣眼之人。"
   },
   {
    "fromChapter": 2421,
    "toChapter": 2450,
    "locationId": "無涯海",
    "realm": "大乘（分魂技術使用者）",
    "status": "dead",
    "activity": "策劃鳴煞之地大戰，以分魂之術行事；利用兩儀微塵陣獻祭雲淡月梳等人增幅陣法；本尊（天外天）被法陣反噬重"
   }
  ]
 },
 {
  "id": "馬良",
  "name": "馬良",
  "aliases": [
   "降世真仙",
   "那名真仙",
   "兇魔",
   "此仙"
  ],
  "faction": "仙界九遠觀",
  "importance": "major",
  "bio": "剛破壁出關，心性過激曾血祭億萬生靈；被認為最有可能奉命下界追查叛逃者。",
  "firstChapter": 2266,
  "canonFate": "被韓立斬殺，元嬰被震碎，神魂被魔光吸收，徹底隕滅。",
  "chronicle": [
   {
    "fromChapter": 2266,
    "toChapter": 2295,
    "locationId": "靈界",
    "realm": "真仙（九元觀弟子）",
    "status": "alive",
    "activity": "剛破壁出關，心性過激曾血祭億萬生靈；被認為最有可能奉命下界追查叛逃者。"
   },
   {
    "fromChapter": 2386,
    "toChapter": 2415,
    "locationId": "風元大陸",
    "realm": "真仙（大半法力被封印）",
    "status": "alive",
    "activity": "本弧在血天連破天地大陣與黃風圖，殲滅十二大乘及碧影等頂尖強者，後前往雷鳴大陸鏖戰角蚩族，收服真靈阳鹿"
   },
   {
    "fromChapter": 2416,
    "toChapter": 2420,
    "locationId": "靈界",
    "realm": "真仙（降界，已恢復近乎全盛仙力）",
    "status": "alive",
    "activity": "率血河八條五爪血龍追入鳴煞之地，以碧綠巨傘化解法陣束縛，命阳鹿與赤紅小人分頭破壞兩處陣眼。"
   },
   {
    "fromChapter": 2421,
    "toChapter": 2450,
    "locationId": "無涯海",
    "realm": "真仙（仙界九遠觀弟子、九元道祖嫡傳）",
    "status": "dead",
    "activity": "下界尋找掌天瓶，以萬靈血璽、靈域神通滅殺大批大乘，被韓立以玄天斬靈劍斬首身亡。"
   }
  ]
 },
 {
  "id": "萬天明",
  "name": "萬天明",
  "aliases": [
   "萬大門主"
  ],
  "faction": "萬法門",
  "importance": "major",
  "bio": "正道領袖，入虛天殿疑圖虛天鼎，令極陰等魔道忌憚。",
  "firstChapter": 424,
  "canonFate": "萬法門門主，在天星雙聖陨落後進阶後期，整合逆星盟圍困天星城；最終揭露已修煉六極真魔功，真身顯現與韓立對決。",
  "chronicle": [
   {
    "fromChapter": 424,
    "toChapter": 453,
    "locationId": "虛天殿",
    "realm": "元嬰中期（推測）",
    "status": "alive",
    "activity": "正道領袖，入虛天殿疑圖虛天鼎，令極陰等魔道忌憚。"
   },
   {
    "fromChapter": 454,
    "toChapter": 513,
    "locationId": "亂星海",
    "realm": "元嬰中期",
    "status": "alive",
    "activity": "以假天羅真雷騙宝後以真雷珠元嬰御劍奪取補天丹，被蠻鬍子生擒脅迫后讓出補天丹，後追擊蠻鬍子。"
   },
   {
    "fromChapter": 1185,
    "toChapter": 1214,
    "locationId": "天星城",
    "realm": "元嬰後期",
    "status": "alive",
    "activity": "萬法門門主，在天星雙聖陨落後進阶後期，整合逆星盟圍困天星城；最終揭露已修煉六極真魔功，真身顯現與韓立"
   }
  ]
 },
 {
  "id": "葛天豪",
  "name": "葛天豪",
  "aliases": [],
  "faction": "陰羅宗",
  "importance": "major",
  "bio": "陰罗宗修士，與天澜聖女一同識破韓立包裹疑是鬼罗幡，最終被韓立虛張聲勢化解",
  "firstChapter": 916,
  "canonFate": "隨天澜一行進入封印，在廣場出手圍攻韓立，被三焰扇光暈波及重傷手臂，骨刀被毀。",
  "chronicle": [
   {
    "fromChapter": 916,
    "toChapter": 945,
    "locationId": "大晉",
    "realm": "元嬰中期",
    "status": "alive",
    "activity": "陰罗宗修士，與天澜聖女一同識破韓立包裹疑是鬼罗幡，最終被韓立虛張聲勢化解"
   },
   {
    "fromChapter": 946,
    "toChapter": 1005,
    "locationId": "晉京",
    "realm": "元嬰期",
    "status": "alive",
    "activity": "在晉京與林銀屏謀劃，派遣乾老魔大長老赶往南疆追查韓立。"
   },
   {
    "fromChapter": 1006,
    "toChapter": 1035,
    "locationId": "大晉",
    "realm": "元嬰中期",
    "status": "alive",
    "activity": "隨天澜一行進入封印，在廣場出手圍攻韓立，被三焰扇光暈波及重傷手臂，骨刀被毀。"
   }
  ]
 },
 {
  "id": "元剎",
  "name": "元剎",
  "aliases": [
   "元剎聖祖"
  ],
  "faction": "魔族",
  "importance": "major",
  "bio": "在六極護送下逃脫寶花追殺，與六極商議借錠龍丹激發化身潛力繼續爭奪靈界利益",
  "firstChapter": 1965,
  "canonFate": "修為永遠無法回到大乘，寿元有限",
  "chronicle": [
   {
    "fromChapter": 1965,
    "toChapter": 1994,
    "locationId": "靈界",
    "realm": "合體期化身",
    "status": "alive",
    "activity": "在六極護送下逃脫寶花追殺，與六極商議借錠龍丹激發化身潛力繼續爭奪靈界利益"
   },
   {
    "fromChapter": 2145,
    "toChapter": 2174,
    "locationId": "魔界",
    "realm": "大乘期（本體降臨）",
    "status": "alive",
    "activity": "本弧以本體降臨木族領地設伏韩立，施展水屬神通、本命魔相青狼、晶像獸，遭韩立識破並擊殺晶像獸後陷入苦戰"
   },
   {
    "fromChapter": 2236,
    "toChapter": 2265,
    "locationId": "靈界",
    "realm": "合體期以下（自廢大半修為）",
    "status": "alive",
    "activity": "當年背刺宝花、被驅逐荒地，本弧被韓立偶遇，自斷一臂了結舊怨後獲放行。"
   }
  ]
 },
 {
  "id": "元剎聖祖",
  "name": "元剎聖祖",
  "aliases": [
   "黑色狼首",
   "元剎聖祖分身",
   "藍袍女子",
   "元剎",
   "宮裝女子"
  ],
  "faction": "聖族",
  "importance": "major",
  "bio": "上古聖族統領之一，以分魂附身銀月妖狼，被昆吾三老封印於鎮魔塔底部萬年，本弧被古魔喚醒，謀求脫困。",
  "firstChapter": 1006,
  "canonFate": "分神被銀月靈魂吞噬消滅",
  "chronicle": [
   {
    "fromChapter": 1006,
    "toChapter": 1095,
    "locationId": "大晉",
    "realm": "化神期（分神，化為雙首黑狼）",
    "status": "alive",
    "activity": "以天輪化魔大法化大頭怪人為珈輪戰魔，引爆黑風旗製造空間裂縫破壞封印；最終被銀月以靈魂吞噬術消滅"
   },
   {
    "fromChapter": 1935,
    "toChapter": 1964,
    "locationId": "魔界",
    "realm": "大乘（化身）",
    "status": "alive",
    "activity": "持石魔殿、黑色古鏡，在黃泉地火外伏擊黑雨上人奪黃粱石靈情報，煉化第二元嬰分魂以追蹤韓立，寄身六極聖祖"
   }
  ]
 },
 {
  "id": "元魘",
  "name": "元魘",
  "aliases": [
   "元魘始祖",
   "元魘圣祖",
   "元魘聖祖"
  ],
  "faction": "魔族",
  "importance": "major",
  "bio": "因涅盤化身被殺而頒佈滅仙令懸賞追殺韓立；本弧未直接出場。",
  "firstChapter": 2115,
  "canonFate": "鎮守苦靈島，在瓶靈回歸時見證韓立收服瓶靈全程，但因忌憚韓立及蟹道人而未出手阻攔。",
  "chronicle": [
   {
    "fromChapter": 2115,
    "toChapter": 2144,
    "locationId": "魔界",
    "realm": "始祖",
    "status": "alive",
    "activity": "因涅盤化身被殺而頒佈滅仙令懸賞追殺韓立；本弧未直接出場。"
   },
   {
    "fromChapter": 2236,
    "toChapter": 2265,
    "locationId": "靈界",
    "realm": "大乘期（魔族三大始祖之一）",
    "status": "alive",
    "activity": "被韓立以交流修煉心得為由牽制，無法趕去援助六極；最終念及宝花之前的解救之情，默許宝花奪回始祖之位。"
   },
   {
    "fromChapter": 2421,
    "toChapter": 2450,
    "locationId": "苦靈島",
    "realm": "魔族三始祖之一（大乘頂尖）",
    "status": "alive",
    "activity": "鎮守苦靈島，在瓶靈回歸時見證韓立收服瓶靈全程，但因忌憚韓立及蟹道人而未出手阻攔。"
   }
  ]
 },
 {
  "id": "六足",
  "name": "六足",
  "aliases": [
   "六足道友"
  ],
  "faction": "蜉蝣族（出身）、地淵四大妖王",
  "importance": "major",
  "bio": "黑色斗篷神秘人，身上散發無生命氣息的寒氣，收集各層精純陰氣供鬼婆煉製玄鬼；在四大妖王中威信最高，多次調解紛爭",
  "firstChapter": 1448,
  "canonFate": "持淬晶磚獨吞冥河神乳，遭蜉蝣族小神巢蟲海圍攻後被迫撤退冥河之地，未能前往魔墳。",
  "chronicle": [
   {
    "fromChapter": 1448,
    "toChapter": 1477,
    "locationId": "天淵城",
    "realm": "合體期以上",
    "status": "alive",
    "activity": "黑色斗篷神秘人，身上散發無生命氣息的寒氣，收集各層精純陰氣供鬼婆煉製玄鬼；在四大妖王中威信最高，多次"
   },
   {
    "fromChapter": 1478,
    "toChapter": 1537,
    "locationId": "冥河之地",
    "realm": "合體後期",
    "status": "alive",
    "activity": "持淬晶磚獨吞冥河神乳，遭蜉蝣族小神巢蟲海圍攻後被迫撤退冥河之地，未能前往魔墳。"
   }
  ]
 },
 {
  "id": "木青",
  "name": "木青",
  "aliases": [
   "木仙子",
   "青木",
   "木仙谷主人",
   "木妹妹"
  ],
  "faction": "地淵四大妖王",
  "importance": "major",
  "bio": "靈木之魂凝形的合體妖王，謀圖借助韓立辟邪神雷破除冥河禁制取得冥河之地內寶物；親自傳授韓立祭雷之術兩年，以五色孔雀真靈之血為交換",
  "firstChapter": 1448,
  "canonFate": "遭金甲傀儡以五龍鍘偷襲重創（以桃李代僵秘術假死逃生）",
  "chronicle": [
   {
    "fromChapter": 1448,
    "toChapter": 1477,
    "locationId": "冥河之地",
    "realm": "合體期以上",
    "status": "alive",
    "activity": "靈木之魂凝形的合體妖王，謀圖借助韓立辟邪神雷破除冥河禁制取得冥河之地內寶物；親自傳授韓立祭雷之術兩年"
   },
   {
    "fromChapter": 1478,
    "toChapter": 1537,
    "locationId": "天淵城",
    "realm": "合體後期",
    "status": "dead",
    "activity": "施「木之領域」追蹤韓立，事先讓金靈（苍猿化身）守護本體靈木；晚一步到達韩立布陣之地，重新追蹤。"
   }
  ]
 },
 {
  "id": "王天古",
  "name": "王天古",
  "aliases": [],
  "faction": "鬼靈門",
  "importance": "major",
  "bio": "鬼靈門長老，王蝉之二伯，本弧中聯合雲姓老者等人倒戈，對韓立懷有殺意；最終韓立逃脫，王蝉被韓立重創。",
  "firstChapter": 686,
  "canonFate": "在古魔本體解封時的空間裂縫爆炸中陨落",
  "chronicle": [
   {
    "fromChapter": 686,
    "toChapter": 715,
    "locationId": "天南",
    "realm": "元嬰初期",
    "status": "alive",
    "activity": "鬼靈門長老，王蝉之二伯，本弧中聯合雲姓老者等人倒戈，對韓立懷有殺意；最終韓立逃脫，王蝉被韓立重創。"
   },
   {
    "fromChapter": 796,
    "toChapter": 855,
    "locationId": "大晉",
    "realm": "元嬰初期",
    "status": "alive",
    "activity": "鬼靈門門主師弟，識得「解體化形」大法，嘗試斬斷古魔化形血柱，其後轉移至錯誤空間中與門主共同遭遇古魔"
   }
  ]
 },
 {
  "id": "地血",
  "name": "地血",
  "aliases": [
   "血袍人",
   "地血老怪",
   "地血道友"
  ],
  "faction": "地淵四大妖王",
  "importance": "major",
  "bio": "雙煞魔體的合體妖王，實為主元神已融入千丈紫血傀儡；煉製大量血傀儡與靈侍，借韓立辟邪神雷強化紫血傀儡；私謀在冥河之地（魔墳）取得至寶令傀儡再次進階",
  "firstChapter": 1448,
  "canonFate": "在神池外留守的血袍人分身被五龍鍘斬殺",
  "chronicle": [
   {
    "fromChapter": 1448,
    "toChapter": 1477,
    "locationId": "冥河之地",
    "realm": "合體期以上",
    "status": "alive",
    "activity": "雙煞魔體的合體妖王，實為主元神已融入千丈紫血傀儡；煉製大量血傀儡與靈侍，借韓立辟邪神雷強化紫血傀儡；"
   },
   {
    "fromChapter": 1478,
    "toChapter": 1537,
    "locationId": "天淵城",
    "realm": "合體中後期",
    "status": "alive",
    "activity": "在靈侍中暗藏子午石追蹤韩立；最終同意往魔墳；遭蜉蝣族小神巢蟲海圍攻。"
   }
  ]
 },
 {
  "id": "血光聖祖",
  "name": "血光聖祖",
  "aliases": [
   "為首少年",
   "血袍少年",
   "血光大人",
   "血光",
   "血光老祖"
  ],
  "faction": "古魔界聖族",
  "importance": "major",
  "bio": "主持攻打天淵城附近區域的魔族聖祖化身，在祭壇上現身賜予魔氣強化；得知三名魔尊陨落後震怒，派血光晶衛追查。",
  "firstChapter": 1875,
  "canonFate": "化身大損，彩光塔靈性受損，紫言鼎被韓立奪走；後遭遇寶花時化身狼狽逃入乾坤盤",
  "chronicle": [
   {
    "fromChapter": 1875,
    "toChapter": 1904,
    "locationId": "天淵城",
    "realm": "合體後期大成（化身）",
    "status": "alive",
    "activity": "主持攻打天淵城附近區域的魔族聖祖化身，在祭壇上現身賜予魔氣強化；得知三名魔尊陨落後震怒，派血光晶衛追"
   },
   {
    "fromChapter": 1905,
    "toChapter": 1964,
    "locationId": "靈界",
    "realm": "大乘（三具化身，合體後期神通）",
    "status": "alive",
    "activity": "以三具化身降臨靈界，持彩光塔與紫言鼎，與元刹、寶花先後聯手追殺韓立，謀奪混沌二氣與鎮魔鎖。"
   }
  ]
 },
 {
  "id": "余子童",
  "name": "余子童",
  "aliases": [],
  "faction": "某修仙者家族（已出族）",
  "importance": "major",
  "bio": "以元神藏於墨大夫體內，暗中傳授夺舍術，設計讓墨大夫與韩立兩敗俱傷後漁翁得利，卻被韩立識破，弧末遭毒液攻擊並被追殺。",
  "firstChapter": 31,
  "canonFate": "弧末被毒液噴中受重創，生死未明。；本弧開篇即被韓立消滅元神，徹底死亡；已死",
  "chronicle": [
   {
    "fromChapter": 31,
    "toChapter": 90,
    "locationId": "七玄門",
    "realm": "元神（已被消滅）",
    "status": "alive",
    "activity": "元神被韓立以七毒水麻痺後再以陽光照射消滅，徹底死亡"
   },
   {
    "fromChapter": 100,
    "toChapter": 129,
    "locationId": "黃楓谷",
    "realm": "元神（已被消滅）",
    "status": "dead",
    "activity": "韓立在第117章中提及，其陰謀間接導致墨大夫之死"
   }
  ]
 },
 {
  "id": "妙鶴真人",
  "name": "妙鶴真人",
  "aliases": [],
  "faction": "逆星盟（暗投）、碧雲門",
  "importance": "major",
  "bio": "碧雲門太上長老，曾孤身多次出海搜尋蟲魔（即韓立），亦與妙音門范夫人合作參與清剿妖獸換幻夢石之事。",
  "firstChapter": 514,
  "canonFate": "被裂風獸打得肉身崩潰；本弧被韓立人形傀儡重創捕獲，下場死亡（胸口洞穿、元嬰被封印）。",
  "chronicle": [
   {
    "fromChapter": 514,
    "toChapter": 573,
    "locationId": "亂星海",
    "realm": "元嬰初期",
    "status": "alive",
    "activity": "偕雲天嘯回妙音門，見雲天嘯被殺後出手攻擊韓立，未能奈何韓立；韓立逃後被出現的裂風獸痛擊，肉身崩潰，元"
   },
   {
    "fromChapter": 1125,
    "toChapter": 1154,
    "locationId": "天南",
    "realm": "元嬰初期（夺舍重生後容顏轉換中）",
    "status": "dead",
    "activity": "昔年曾追殺韩立；夺舍重生後投靠逆星盟在雷空島擴張勢力，被韓立截殺，人形傀儡自背後洞穿其胸。"
   }
  ]
 },
 {
  "id": "李氏兄弟",
  "name": "李氏兄弟",
  "aliases": [
   "李氏兄弟"
  ],
  "faction": "鬼靈門",
  "importance": "major",
  "bio": "王蟬的兩名護衛，一老一幼（童子），凶名赫赫的結丹期修士，主持陰火大陣困住燕翎堡西峰筑基修士。",
  "firstChapter": 232,
  "canonFate": "一老一幼外貌的兩位鬼靈門長老，燕翎堡曾出場，識得古傳送陣，協助王蟬攻破顛倒五行陣。",
  "chronicle": [
   {
    "fromChapter": 232,
    "toChapter": 363,
    "locationId": "越京",
    "realm": "結丹期",
    "status": "alive",
    "activity": "一老一幼外貌的兩位鬼靈門長老，燕翎堡曾出場，識得古傳送陣，協助王蟬攻破顛倒五行陣。"
   }
  ]
 },
 {
  "id": "金光上人",
  "name": "金光上人",
  "aliases": [
   "侏儒"
  ],
  "faction": "秦葉嶺葉家（自稱）",
  "importance": "major",
  "bio": "侏儒修仙者，被賈天龍以五千兩黃金禮聘，擁有金光護罩符咒與飛劍術，在死契血斗中以飛劍格殺七玄門三師叔之一",
  "firstChapter": 61,
  "canonFate": "被韓立用火彈術當場焚殺，化為灰燼。；弧前已死於韓立之手",
  "chronicle": [
   {
    "fromChapter": 61,
    "toChapter": 159,
    "locationId": "七玄門",
    "realm": "炼气期（修仙資質極差）",
    "status": "dead",
    "activity": "秦家最後男丁，攜升仙令出逃多年，在七玄門事件中被韓立所殺，其升仙令轉為韓立所有"
   }
  ]
 },
 {
  "id": "金老怪",
  "name": "金老怪",
  "aliases": [
   "金武環",
   "金道友",
   "金老魔"
  ],
  "faction": "古劍門",
  "importance": "major",
  "bio": "古劍門大長老，閉關七八十年後出關，主動要求與韓立鬥法以決雲夢山排名，被乾藍冰焰光蓮凍封飛劍後認輸，古劍門從此居落雲宗之下。",
  "firstChapter": 856,
  "canonFate": "攜金胖子以度劫分魂聯手鳴老魔覓寶，空間崩塌時被韓立元磁神光黏附脫困後脫身，未對韓立追究。",
  "chronicle": [
   {
    "fromChapter": 856,
    "toChapter": 1184,
    "locationId": "落雲宗",
    "realm": "元嬰中期",
    "status": "alive",
    "activity": "古劍門大長老，親赴落雲宗確認韓立後期修為，大典後接受落雲宗主導地位。"
   },
   {
    "fromChapter": 1326,
    "toChapter": 1355,
    "locationId": "風元大陸",
    "realm": "煉虛期（度劫分魂到場）",
    "status": "alive",
    "activity": "攜金胖子以度劫分魂聯手鳴老魔覓寶，空間崩塌時被韓立元磁神光黏附脫困後脫身，未對韓立追究。"
   }
  ]
 },
 {
  "id": "金蛟王",
  "name": "金蛟王",
  "aliases": [],
  "faction": "蛟龍一族",
  "importance": "major",
  "bio": "海族首領，率化形妖修精銳全面進攻碧靈島，以化龍訣重創逆星盟元嬰中期長老，一枪洞穿唐老者護體，並向韓立投擲金枪未果。",
  "firstChapter": 1125,
  "canonFate": "被韓立擊殺，精魂被收",
  "chronicle": [
   {
    "fromChapter": 1125,
    "toChapter": 1265,
    "locationId": "天南",
    "realm": "十級妖修（化形）",
    "status": "dead",
    "activity": "被韓立設伏於荒島，以火靈絲、五魔等制住，自爆血肉以骨架精魂出逃仍被飛劍斬殺，精魂被韓立以綠瓶收取。"
   }
  ]
 },
 {
  "id": "風希",
  "name": "風希",
  "aliases": [
   "裂風獸"
  ],
  "faction": "妖族（裂風獸一族）",
  "importance": "major",
  "bio": "成年裂風獸妖修，已晉九級，不屬深淵海族陣營；因韓立修煉木屬性功法及敛氣術與其故人相似，留其性命；強迫韓立飲碧焰酒待其突破，以備借助木屬性靈力辦事。",
  "firstChapter": 514,
  "canonFate": "追殺韓立失敗，轉而痛擊妙鶴真人；被韓立擊殺，妖魂被吞噬",
  "chronicle": [
   {
    "fromChapter": 514,
    "toChapter": 573,
    "locationId": "亂星海",
    "realm": "化形期（九級裂風獸）",
    "status": "alive",
    "activity": "囚禁韓立煉製風雷翅，被韓立暗算受重傷入地火池後脫困，現本體追殺韓立，韓立傳送後轉而與妙鶴真人大戰，將"
   },
   {
    "fromChapter": 1245,
    "toChapter": 1265,
    "locationId": "天南",
    "realm": "九級妖修（化形）",
    "status": "dead",
    "activity": "為移植龍鱗果樹引金蛟王到荒島，被六翼霜蚣圍困後以秘術欲逃，最終被飛劍斬殺，妖魂被六翼霜蚣吞噬。"
   }
  ]
 },
 {
  "id": "烏丑",
  "name": "烏丑",
  "aliases": [
   "極陰島少主"
  ],
  "faction": "極陰島",
  "importance": "major",
  "bio": "極陰老祖之孫，修煉玄陰魔功，奪取嬰鯉獸妖丹，並受六連殿長老之托滅口在場其餘修士",
  "firstChapter": 364,
  "canonFate": "本弧内死亡（被玄骨殺滅）",
  "chronicle": [
   {
    "fromChapter": 364,
    "toChapter": 513,
    "locationId": "亂星海",
    "realm": "結丹期",
    "status": "dead",
    "activity": "極陰祖師之唯一後人，在高台上與玄骨對峙後被玄骨以鬼爪穿腹、綠火焚化。"
   }
  ]
 },
 {
  "id": "乾老魔",
  "name": "乾老魔",
  "aliases": [
   "五子同心魔",
   "乾兄",
   "乾道友"
  ],
  "faction": "陰羅宗",
  "importance": "major",
  "bio": "陰羅宗大長老，修煉「逆情斷天大法」，以五子同心魔化身施法，幾乎不死；在南疆坐鎮追查韓立，於昆吾山石亭處與韓立正面對峙，因花天奇等人介入暫緩衝突，轉而聯手入山。",
  "firstChapter": 976,
  "canonFate": "元嬰被韓立抽魂滅殺；推測已陨落（韓立擊殺）",
  "chronicle": [
   {
    "fromChapter": 976,
    "toChapter": 1005,
    "locationId": "昆吾山",
    "realm": "元嬰後期",
    "status": "alive",
    "activity": "陰羅宗大長老，修煉「逆情斷天大法」，以五子同心魔化身施法，幾乎不死；在南疆坐鎮追查韓立，於昆吾山石亭"
   },
   {
    "fromChapter": 1006,
    "toChapter": 1035,
    "locationId": "大晉",
    "realm": "元嬰後期",
    "status": "alive",
    "activity": "驅使五子同心魔激戰眾修士，以血影之身、血魔珠元嬰及阴罗幡應敵，最終被韓立以魔髓飛刀破珠、虛天鼎擒嬰後"
   },
   {
    "fromChapter": 1036,
    "toChapter": 1065,
    "locationId": "昆吾山",
    "realm": "元嬰後期",
    "status": "dead",
    "activity": "本弧中未出現，眾人提及其可能已在昆吾山陨落。"
   }
  ]
 },
 {
  "id": "陽鹿",
  "name": "陽鹿",
  "aliases": [
   "蹄龍"
  ],
  "faction": "馬良麾下",
  "importance": "major",
  "bio": "本弧先與泰雀、太雀聯手以法則之鍊困住馬良，後被馬良分化收服，訂立靈僕契約，以真魂丹為報酬成為馬良首位靈僕。",
  "firstChapter": 2386,
  "canonFate": "被韓立斬殺，韓立從其身上搜出一顆真魂丹。",
  "chronicle": [
   {
    "fromChapter": 2386,
    "toChapter": 2420,
    "locationId": "靈界",
    "realm": "大乘等階（馬良侍從）",
    "status": "alive",
    "activity": "接受馬良命令，持青沌傘分身和意念珠前去破壞北方陣眼，被六翼冰鳳持陣盤阻截。"
   },
   {
    "fromChapter": 2421,
    "toChapter": 2450,
    "locationId": "無涯海",
    "realm": "真靈（鹿首熊身）",
    "status": "alive",
    "activity": "被困光陣後脫困直撲阵眼，與韓立交戰，被韓立以涅槃真魔之體及玄天斬靈劍斬殺。"
   }
  ]
 },
 {
  "id": "筱虹",
  "name": "筱虹",
  "aliases": [
   "黑裙少婦",
   "黑鳳族少婦",
   "黑鳳族妖女",
   "筱仙子"
  ],
  "faction": "黑鳳族（七大妖族之一）",
  "importance": "major",
  "bio": "與白眉李修士密謀奪取葉穎天鳳血脈；回程途中轉而向韓立索取天鳳之翎；被韓立以連環神通活捉，以元磁神山鎮壓在地坑中。",
  "firstChapter": 1358,
  "canonFate": "被韓立活捉鎮壓，暫失行動能力。；被葉楚收入袖中，本弧內命運未明。",
  "chronicle": [
   {
    "fromChapter": 1358,
    "toChapter": 1417,
    "locationId": "天淵城",
    "realm": "化神期妖修",
    "status": "alive",
    "activity": "被韓立以元磁神山壓制後，儲物鐲被奪，被葉楚以翠芒絲網縮小收走。"
   },
   {
    "fromChapter": 1965,
    "toChapter": 1994,
    "locationId": "魔界",
    "realm": "炼虛期",
    "status": "alive",
    "activity": "受青龍收買，主導在兜元阁圍逼冰鳳，事後被韓立以神念印記威懾，次日登門賠罪"
   }
  ]
 },
 {
  "id": "銀翅夜叉",
  "name": "銀翅夜叉",
  "aliases": [
   "飛天尸",
   "煉尸",
   "綠毛怪物"
  ],
  "faction": "昆吾山",
  "importance": "major",
  "bio": "盤踞阴陽窟廣場數萬年的高階炼尸，精通土遁、風遁、金遁初步，以邪月幻鏡施展銀瞳幻術，養有尸狼、孽猿與尸煞化身；被三焰扇光輪廢去煞魂絲積累，傳送後藉機解脫束縛禁制逃入昆吾山。",
  "firstChapter": 976,
  "canonFate": "束縛禁制破碎，獲得自由，帶走韓立晶化飛針，現於昆吾山中遊蕩。；本命牌到手後脫離昆吾山；被元刹聖祖魔像滅殺",
  "chronicle": [
   {
    "fromChapter": 976,
    "toChapter": 1005,
    "locationId": "昆吾山",
    "realm": "接近金身月尸（高於元嬰後期）",
    "status": "alive",
    "activity": "盤踞阴陽窟廣場數萬年的高階炼尸，精通土遁、風遁、金遁初步，以邪月幻鏡施展銀瞳幻術，養有尸狼、孽猿與尸"
   },
   {
    "fromChapter": 1006,
    "toChapter": 1065,
    "locationId": "大晉",
    "realm": "十級妖兽（元嬰後期）",
    "status": "dead",
    "activity": "與狮禽兽及萬年尸熊合謀，聯手偷襲天澜修士；最終被元刹聖祖本體神念魔像一掌斃滅。"
   }
  ]
 },
 {
  "id": "樂姓女子",
  "name": "樂姓女子",
  "aliases": [
   "掌古燈女修",
   "樂上師"
  ],
  "faction": "慕蘭部族",
  "importance": "major",
  "bio": "持元明燈，以千年燈油召喚出慕蘭聖禽（青孔雀分身），是此戰最大殺招主角",
  "firstChapter": 746,
  "canonFate": "與仲姓儒生一同帶隊慕蘭法士在外谷破禁尋寶，談及灵禽在内谷失控問題",
  "chronicle": [
   {
    "fromChapter": 746,
    "toChapter": 775,
    "locationId": "天南",
    "realm": "元嬰中期",
    "status": "alive",
    "activity": "持元明燈，以千年燈油召喚出慕蘭聖禽（青孔雀分身），是此戰最大殺招主角"
   },
   {
    "fromChapter": 796,
    "toChapter": 855,
    "locationId": "大晉",
    "realm": "元嬰期（慕蘭法士）",
    "status": "alive",
    "activity": "與仲姓儒生一同帶隊慕蘭法士在外谷破禁尋寶，談及灵禽在内谷失控問題"
   }
  ]
 },
 {
  "id": "九夜",
  "name": "九夜",
  "aliases": [],
  "faction": "多眼魔麾下（人形魔獸）",
  "importance": "major",
  "bio": "擅長追蹤隱匿，受命追蹤殺死多眼魔的韓立等人",
  "firstChapter": 1598,
  "canonFate": "被天外魔君分魂（附身穴靈的怪脸）一擊滅殺。",
  "chronicle": [
   {
    "fromChapter": 1598,
    "toChapter": 1657,
    "locationId": "天淵城",
    "realm": "煉虛中期",
    "status": "dead",
    "activity": "兩耳尖尖的人形高階魔獸，一路跟蹤韓立等人並發出求援，在山崩時被怪脸以黑色巨劍一擊斬殺。"
   }
  ]
 },
 {
  "id": "六道極聖",
  "name": "六道極聖",
  "aliases": [
   "萬天明",
   "六道道友"
  ],
  "faction": "逆星盟（六道盟主）",
  "importance": "major",
  "bio": "逆星盟六道盟主，溫天仁之師，本弧僅被提及。",
  "firstChapter": 544,
  "canonFate": "被韓立徹底斬殺，形神俱滅",
  "chronicle": [
   {
    "fromChapter": 544,
    "toChapter": 573,
    "locationId": "亂星海",
    "realm": "元嬰期（推測）",
    "status": "alive",
    "activity": "逆星盟六道盟主，溫天仁之師，本弧僅被提及。"
   },
   {
    "fromChapter": 1215,
    "toChapter": 1244,
    "locationId": "天南",
    "realm": "元嬰後期（修煉六極真魔功）",
    "status": "alive",
    "activity": "乱星海第一魔修，偽裝萬天明多年，以六極真魔功召喚聖魔分念附體，最終被韓立形神俱滅。"
   }
  ]
 },
 {
  "id": "天風真君",
  "name": "天風真君",
  "aliases": [
   "方尖山天風真君"
  ],
  "faction": "方尖山二妖",
  "importance": "major",
  "bio": "以獻策為名誘使炫曜王離墓，背後設下圍殺圈套，意圖奪取炫曜王積累千年的寶物。",
  "firstChapter": 886,
  "canonFate": "與狂沙上人聯手圍困炫烨王，後一同遁走",
  "chronicle": [
   {
    "fromChapter": 886,
    "toChapter": 945,
    "locationId": "大晉",
    "realm": "元嬰期",
    "status": "alive",
    "activity": "與狂沙上人聯手圍困炫烨王，後一同遁走"
   }
  ]
 },
 {
  "id": "天瀾聖女",
  "name": "天瀾聖女",
  "aliases": [
   "銀袍女子",
   "林道友"
  ],
  "faction": "天瀾聖殿",
  "importance": "major",
  "bio": "主持聖獸召喚儀式，率徐、孫兩位大仙師追殺韓立，以聖鼎靈沙困住韓立卻被虛天鼎化解，聖鼎及聖獸俱失；決定赴大晋追查。",
  "firstChapter": 886,
  "canonFate": "曾傳授韓立催熟靈蟲的秘術，本弧僅被提及",
  "chronicle": [
   {
    "fromChapter": 886,
    "toChapter": 915,
    "locationId": "大晉",
    "realm": "元嬰中期",
    "status": "alive",
    "activity": "主持聖獸召喚儀式，率徐、孫兩位大仙師追殺韓立，以聖鼎靈沙困住韓立卻被虛天鼎化解，聖鼎及聖獸俱失；決定"
   },
   {
    "fromChapter": 1356,
    "toChapter": 1357,
    "locationId": "風元大陸",
    "realm": "元嬰中期",
    "status": "alive",
    "activity": "曾傳授韓立催熟靈蟲的秘術，本弧僅被提及"
   }
  ]
 },
 {
  "id": "木瑞",
  "name": "木瑞",
  "aliases": [
   "銀階木靈",
   "銀階下位靈師"
  ],
  "faction": "木族",
  "importance": "major",
  "bio": "黑葉森林主事銀階木靈，在情報交接地點設伏，率木猿兵包圍韓立等人；被葉楚的金色符陣暫時困住令眾人逃脫，最終被韓立等人甩開。",
  "firstChapter": 1358,
  "canonFate": "被噬金蟲重創，手臂與半身被吃去，雖藉樹木光點恢復但元氣大傷，最終決定放棄追殺韓立。",
  "chronicle": [
   {
    "fromChapter": 1358,
    "toChapter": 1387,
    "locationId": "黑葉森林",
    "realm": "銀階下位（相當於人族合體初期）",
    "status": "alive",
    "activity": "黑葉森林主事銀階木靈，在情報交接地點設伏，率木猿兵包圍韓立等人；被葉楚的金色符陣暫時困住令眾人逃脫，"
   },
   {
    "fromChapter": 1388,
    "toChapter": 1417,
    "locationId": "天淵城",
    "realm": "銀階下位（相當於合體期，但身負重傷）",
    "status": "alive",
    "activity": "追殺韓立，施展「人樹合一」化巨人幾乎無敵，被噬金蟲嚙食手臂後撤退。"
   }
  ]
 },
 {
  "id": "古魔",
  "name": "古魔",
  "aliases": [
   "雙首妖魔",
   "韓長老（葉家稱呼）",
   "血焰",
   "古魔化身"
  ],
  "faction": "聖族",
  "importance": "major",
  "bio": "療傷完畢後隨叶家群修進入昆吾山，以通曉上古典籍之名為葉家大長老提供破陣指引，實則另有圖謀；暗中蓄意破壞叶家掩飾法陣（疑）。",
  "firstChapter": 976,
  "canonFate": "以雙首四臂魔影現身，用五件魔器輔佐元刹聖祖脫困，在鎮魔塔第八層啟動法陣為聖祖解鏈。",
  "chronicle": [
   {
    "fromChapter": 976,
    "toChapter": 1005,
    "locationId": "昆吾山",
    "realm": "古魔（遠超元嬰）",
    "status": "alive",
    "activity": "療傷完畢後隨叶家群修進入昆吾山，以通曉上古典籍之名為葉家大長老提供破陣指引，實則另有圖謀；暗中蓄意破"
   },
   {
    "fromChapter": 1006,
    "toChapter": 1035,
    "locationId": "大晉",
    "realm": "元嬰期（古魔分魂）",
    "status": "alive",
    "activity": "以雙首四臂魔影現身，用五件魔器輔佐元刹聖祖脫困，在鎮魔塔第八層啟動法陣為聖祖解鏈。"
   }
  ]
 },
 {
  "id": "古魔分魂",
  "name": "古魔分魂",
  "aliases": [
   "魔化南龍侯",
   "第二元神",
   "葉家韓長老"
  ],
  "faction": "圣界",
  "importance": "major",
  "bio": "古魔本體主動放出以求脫困的第二元神，獲自主後反奪古魔本體軀體，最終因主元神要求合作先吞噬修士而暫時協作；被韓立困入大庚劍陣，後被空間裂縫帶入靈缈園殘骸",
  "firstChapter": 826,
  "canonFate": "在靈缈園殘骸空間被銀色禁制火焰徹底焚滅",
  "chronicle": [
   {
    "fromChapter": 826,
    "toChapter": 855,
    "locationId": "大晉",
    "realm": "元嬰中期（借南龍侯之軀）",
    "status": "alive",
    "activity": "古魔本體主動放出以求脫困的第二元神，獲自主後反奪古魔本體軀體，最終因主元神要求合作先吞噬修士而暫時協"
   },
   {
    "fromChapter": 946,
    "toChapter": 975,
    "locationId": "晉京",
    "realm": "元嬰初期（分魂殘修）",
    "status": "alive",
    "activity": "以叶家客卿長老身份潛伏晉京，持有被黑絲纏住的兩口金雷竹飛劍，在荒山伏擊韓立；瞬間殺滅恶火頭陀並吞噬元"
   }
  ]
 },
 {
  "id": "弘滅",
  "name": "弘滅",
  "aliases": [],
  "faction": "角蚩族（偽稱火月族）",
  "importance": "major",
  "bio": "混入天雲十三族中的角蚩族細作，以「火月族人」身份行事，圖謀韓立手中玉匣，被韓立以春黎劍陣幻術困住，本體遭元磁神山壓斃，元神被滅。",
  "firstChapter": 1538,
  "canonFate": "本體與元神皆被韓立滅殺；本弧開始前已被韓立擊殺",
  "chronicle": [
   {
    "fromChapter": 1538,
    "toChapter": 1597,
    "locationId": "天淵城",
    "realm": "煉虛",
    "status": "dead",
    "activity": "同時具火月族與角蚩族血脈的臥底，在綠光城中被韓立斬殺，是觸發本弧的引線。"
   }
  ]
 },
 {
  "id": "玄骨",
  "name": "玄骨",
  "aliases": [
   "老魔"
  ],
  "faction": "魔道（獨立鬼道修士，極陰祖師之師）",
  "importance": "major",
  "bio": "暗中跟隨韓立，與蛮胡子有舊，設法在取寶後出手對付極陰；最後以碧綠絲網罩住火狼及乌丑黑蟒",
  "firstChapter": 454,
  "canonFate": "本弧内死亡（被修羅聖火反噬焚化，殘魄被啼魂獸吸噬）",
  "chronicle": [
   {
    "fromChapter": 454,
    "toChapter": 513,
    "locationId": "亂星海",
    "realm": "偽裝結丹初期（實為鬼道高修）",
    "status": "dead",
    "activity": "殺死乌丑，與韓立合作取出虛天鼎，收取乾藍冰焰欲融合修羅聖火後翻臉殺韓立奪寶，最終修羅聖火失控被反噬焚"
   }
  ]
 },
 {
  "id": "白夢馨",
  "name": "白夢馨",
  "aliases": [],
  "faction": "北夜小極宮",
  "importance": "major",
  "bio": "白瑶怡的堂姐，修煉鳳離冰焰，奉寒骊之命試探韓立紫罗極火威力後加入突破化神儀式",
  "firstChapter": 1066,
  "canonFate": "本弧身死，元嬰被擊碎",
  "chronicle": [
   {
    "fromChapter": 1066,
    "toChapter": 1124,
    "locationId": "大晉",
    "realm": "元嬰中期",
    "status": "dead",
    "activity": "寒骊上人弟子，修凤離冰焰，持本命玄冰劍及雙尾人面蝎寶鏡，被韓立失神刺重傷後以人形傀儡魔髓飛刀洞穿小腹"
   }
  ]
 },
 {
  "id": "圭姓男子",
  "name": "圭姓男子",
  "aliases": [
   "圭道友",
   "銀蛟圭"
  ],
  "faction": "銀蛟之體（寄生者）",
  "importance": "major",
  "bio": "本體為銀蛟，在雷雲閣強迫越宗後被韓立壓制；入山後殘忍殺害三名藍袍修士以吸精血",
  "firstChapter": 1598,
  "canonFate": "被逼退，真麟本源落空，日後仍是潛在威脅。",
  "chronicle": [
   {
    "fromChapter": 1598,
    "toChapter": 1657,
    "locationId": "天淵城",
    "realm": "煉虛頂階（與韓立相當）",
    "status": "alive",
    "activity": "殺死越宗，搶先進入真靈之穴卻被穴靈體內靈種癱瘓；被韓立與纖纤聯手逼退，最終乘血色飛車離去。"
   }
  ]
 },
 {
  "id": "血合五子",
  "name": "血合五子",
  "aliases": [],
  "faction": "血天大陸",
  "importance": "major",
  "bio": "將大乘修為元嬰一分為五同修的五具分身，一同進入天鼎宮；蕭冥對其十分忌憚。",
  "firstChapter": 2326,
  "canonFate": "被滅",
  "chronicle": [
   {
    "fromChapter": 2326,
    "toChapter": 2385,
    "locationId": "靈界",
    "realm": "大乘期（後被血影子控制為傀儡）",
    "status": "alive",
    "activity": "知名五子組合，本弧中已被血影子改造為血肉傀儡並利用，最終在天鼎宮外被血骨門天闕的琉璃幻目識破，傀儡被"
   }
  ]
 },
 {
  "id": "吳九指",
  "name": "吳九指",
  "aliases": [
   "九指"
  ],
  "faction": "黑煞教（四大血侍）",
  "importance": "major",
  "bio": "少年散修奇才，擅長偷技，被韓立當場識破，後議論升仙大會時表現熱切",
  "firstChapter": 130,
  "canonFate": "昔日在韓立面前施展偷技的少年修士，如今成為黑煞教四大血侍之一，身散古怪黃光，因昔日青紋對其有救命之恩而出手援救青紋。",
  "chronicle": [
   {
    "fromChapter": 130,
    "toChapter": 159,
    "locationId": "黃楓谷",
    "realm": "長春功第八層大圓滿",
    "status": "alive",
    "activity": "少年散修奇才，擅長偷技，被韓立當場識破，後議論升仙大會時表現熱切"
   },
   {
    "fromChapter": 292,
    "toChapter": 321,
    "locationId": "越京",
    "realm": "筑基初期",
    "status": "alive",
    "activity": "昔日在韓立面前施展偷技的少年修士，如今成為黑煞教四大血侍之一，身散古怪黃光，因昔日青紋對其有救命之恩"
   }
  ]
 },
 {
  "id": "杜東",
  "name": "杜東",
  "aliases": [
   "千幻宗少主"
  ],
  "faction": "落雲宗天泉峰（疑為杜家後人）",
  "importance": "major",
  "bio": "與韓立同批入門，身上有詭異陰寒之氣，持疑似杜家鎮族之寶「寒月輪」，身份成謎；韓立刻意用眼神震懾使其主動疏遠。",
  "firstChapter": 596,
  "canonFate": "奪取醇液逃出，安然離開溪國",
  "chronicle": [
   {
    "fromChapter": 596,
    "toChapter": 625,
    "locationId": "天南",
    "realm": "煉氣期十層",
    "status": "alive",
    "activity": "與韓立同批入門，身上有詭異陰寒之氣，持疑似杜家鎮族之寶「寒月輪」，身份成謎；韓立刻意用眼神震懾使其主"
   },
   {
    "fromChapter": 626,
    "toChapter": 655,
    "locationId": "落雲宗",
    "realm": "結丹中期（大羅千幻訣真實修為）",
    "status": "alive",
    "activity": "以「大羅千幻訣」偽裝成落雲宗炼氣期弟子潛伏，在禁地現形，配合白姓儒生與天煞真君奪取醇液後逃脫"
   }
  ]
 },
 {
  "id": "谷雙蒲",
  "name": "谷雙蒲",
  "aliases": [],
  "faction": "御靈宗（實為慕蘭奸細）",
  "importance": "major",
  "bio": "以雙尾翡翠蛇毒殺陸大漢替身傀儡後圖謀竊取禁制令牌，暴露奸細身份，施展附靈術化為蛇怪，被韓立以乾藍冰焰和辟邪神雷滅殺。",
  "firstChapter": 716,
  "canonFate": "元嬰被辟邪神雷滅殺，形神俱滅；已死（前弧）",
  "chronicle": [
   {
    "fromChapter": 716,
    "toChapter": 775,
    "locationId": "天南",
    "realm": "元嬰初期",
    "status": "dead",
    "activity": "早已被韓立識破為慕蘭奸細並擊殺，本弧中僅被提及"
   }
  ]
 },
 {
  "id": "呼老魔",
  "name": "呼老魔",
  "aliases": [
   "木冠老者"
  ],
  "faction": "人族（風元大陸）",
  "importance": "major",
  "bio": "以翠峰卷軸向韓立發動一擊之約，最終承認韓立接下一擊，並在典禮後以近半萬年玄玉交換三顆魔元丹給韓立。",
  "firstChapter": 1245,
  "canonFate": "元神已被血影消融，與向之禮同歸於盡。",
  "chronicle": [
   {
    "fromChapter": 1245,
    "toChapter": 1265,
    "locationId": "天南",
    "realm": "化神期",
    "status": "alive",
    "activity": "以翠峰卷軸向韓立發動一擊之約，最終承認韓立接下一擊，並在典禮後以近半萬年玄玉交換三顆魔元丹給韓立。"
   },
   {
    "fromChapter": 1748,
    "toChapter": 1754,
    "locationId": "天淵城",
    "realm": "不明（元神已被血影吞噬）",
    "status": "alive",
    "activity": "當初與向之禮一同進入空間節點，其元神已被血影吞噬，面容出現在血影的面容變換中。"
   }
  ]
 },
 {
  "id": "金靈",
  "name": "金靈",
  "aliases": [
   "金靈",
   "金猿",
   "蒼猿金靈",
   "金老"
  ],
  "faction": "木青門下",
  "importance": "major",
  "bio": "木青的金毛蒼猿坐騎兼護衛，近身監視韓立；持兩口短劍，精通靈目神通；在神池外遭金甲傀儡以五龍鍘斬首，本體陨落。",
  "firstChapter": 1478,
  "canonFate": "被蜉蝣族金甲傀儡以五龍鍘斬殺本體陨落",
  "chronicle": [
   {
    "fromChapter": 1478,
    "toChapter": 1537,
    "locationId": "天淵城",
    "realm": "靈帥初階",
    "status": "alive",
    "activity": "原苍猿金靈主元神陨落，化身留存於木青本體靈木中；受木青命令守護本體靈木，持天木鏡及兩口長青木靈劍。"
   }
  ]
 },
 {
  "id": "青龍上人",
  "name": "青龍上人",
  "aliases": [
   "青龍前輩",
   "青龍道友"
  ],
  "faction": "九星宗",
  "importance": "major",
  "bio": "倚天城太上長老，以「鑄血塑靈大法」化身真龍牽制鐵隆，最終命令撤退並帶領四大宗門精英弟子經秘密傳送陣前往天淵城。",
  "firstChapter": 1905,
  "canonFate": "被豹麟獸擊殺，元嬰被吞，本命牌碎裂",
  "chronicle": [
   {
    "fromChapter": 1905,
    "toChapter": 1934,
    "locationId": "天淵城",
    "realm": "合體中期",
    "status": "alive",
    "activity": "倚天城太上長老，以「鑄血塑靈大法」化身真龍牽制鐵隆，最終命令撤退並帶領四大宗門精英弟子經秘密傳送陣前"
   },
   {
    "fromChapter": 1965,
    "toChapter": 1994,
    "locationId": "魔界",
    "realm": "合體中期（半妖之身）",
    "status": "dead",
    "activity": "強行脅迫冰鳳雙修，被韓立以三擊當眾力壓後羞憤離城，遭韓立在體內埋下靈漩邪光，城外被豹麟獸斬殺"
   }
  ]
 },
 {
  "id": "苗長老",
  "name": "苗長老",
  "aliases": [],
  "faction": "六連殿",
  "importance": "major",
  "bio": "六連殿結丹期客卿長老，以干天戈制伏嬰鯉獸，事後下令追殺知情者韓立和青算子，元氣大損後力戰韓立未竟",
  "firstChapter": 364,
  "canonFate": "韓立逃脫後下落不明",
  "chronicle": [
   {
    "fromChapter": 364,
    "toChapter": 393,
    "locationId": "亂星海",
    "realm": "結丹初期",
    "status": "alive",
    "activity": "六連殿結丹期客卿長老，以干天戈制伏嬰鯉獸，事後下令追殺知情者韓立和青算子，元氣大損後力戰韓立未竟"
   },
   {
    "fromChapter": 424,
    "toChapter": 453,
    "locationId": "虛天殿",
    "realm": "結丹期",
    "status": "alive",
    "activity": "與韓立昔日有舊怨（婴鲤兽事件），虛天殿中見到韓立露出怒色。"
   }
  ]
 },
 {
  "id": "凌源聖祖",
  "name": "凌源聖祖",
  "aliases": [
   "凌源大人"
  ],
  "faction": "青翼族",
  "importance": "major",
  "bio": "鐵沙嶺青翼族的保護者，一具化身常年坐鎮；本體疑閉生死關或已陨落，韓立等人計劃借助浑天珠應對化身。",
  "firstChapter": 2055,
  "canonFate": "化身被韓立聯手羽衣少女重傷",
  "chronicle": [
   {
    "fromChapter": 2055,
    "toChapter": 2114,
    "locationId": "魔界",
    "realm": "大乘期",
    "status": "alive",
    "activity": "青翼族靠山，化身在鐵沙嶺攔截韓立與羽衣少女，被重傷後退回，隨即閉關。"
   }
  ]
 },
 {
  "id": "孫師叔",
  "name": "孫師叔",
  "aliases": [],
  "faction": "青靈門",
  "importance": "major",
  "bio": "隱煞門實際首領，持有虛天殘圖，帶門下在外活動時被極陰老祖設計誣陷，與妙音門展開衝突，最終被赤火老怪和極陰老祖合圍俘獲",
  "firstChapter": 394,
  "canonFate": "被極陰老祖插入蓝光長針俘虜帶走",
  "chronicle": [
   {
    "fromChapter": 394,
    "toChapter": 543,
    "locationId": "亂星海",
    "realm": "築基初期",
    "status": "alive",
    "activity": "帶領青靈門弟子出海採靈藥，被鷹鳶獸追逐，誤闖韓立洞府附近被救。"
   }
  ]
 },
 {
  "id": "烏醜",
  "name": "烏醜",
  "aliases": [
   "烏少主",
   "少島主"
  ],
  "faction": "極陰島",
  "importance": "major",
  "bio": "極陰老祖之孫，作為設計圈套的明面主使，後被極陰老祖附身替換",
  "firstChapter": 394,
  "canonFate": "隨極陴祖師入虛天殿，充當其跟班。",
  "chronicle": [
   {
    "fromChapter": 394,
    "toChapter": 423,
    "locationId": "亂星海",
    "realm": "元嬰期（被極陰老祖附身）",
    "status": "alive",
    "activity": "極陰老祖之孫，作為設計圈套的明面主使，後被極陰老祖附身替換"
   },
   {
    "fromChapter": 424,
    "toChapter": 453,
    "locationId": "虛天殿",
    "realm": "不詳（元嬰期以下）",
    "status": "alive",
    "activity": "隨極陴祖師入虛天殿，充當其跟班。"
   }
  ]
 },
 {
  "id": "祝音子",
  "name": "祝音子",
  "aliases": [],
  "faction": "赤融族",
  "importance": "major",
  "bio": "赤融族首席聖子，七次獨自深入地淵，在玉皇頂設計試探韓立底細，與韓立短暫交手後以元磁山及雷電神通留有顧忌。",
  "firstChapter": 1418,
  "canonFate": "赤融族首席聖子，在試煉前預謀伏擊天鵬族；提前進入第三層尋找冥焰果，留下落魂鐘與尤姓師弟守候韓立",
  "chronicle": [
   {
    "fromChapter": 1418,
    "toChapter": 1447,
    "locationId": "地淵",
    "realm": "化神後期（近中阶靈帥神通）",
    "status": "alive",
    "activity": "赤融族首席聖子，七次獨自深入地淵，在玉皇頂設計試探韓立底細，與韓立短暫交手後以元磁山及雷電神通留有顧"
   },
   {
    "fromChapter": 1448,
    "toChapter": 1477,
    "locationId": "天淵城",
    "realm": "高階靈將",
    "status": "alive",
    "activity": "赤融族首席聖子，在試煉前預謀伏擊天鵬族；提前進入第三層尋找冥焰果，留下落魂鐘與尤姓師弟守候韓立"
   }
  ]
 },
 {
  "id": "清平道人",
  "name": "清平道人",
  "aliases": [],
  "faction": "天鼎真人一脈傳承",
  "importance": "major",
  "bio": "為天鼎宮而來，持天鼎真人傳承，與萬花夫人聯手找蕭冥合作；在較技場一見韓立梵聖之體後主動認負。",
  "firstChapter": 2326,
  "canonFate": "主導天鼎宮路線規劃，以巨大道人法相攻擊冰魄，戰敗後隨萧冥撤退。",
  "chronicle": [
   {
    "fromChapter": 2326,
    "toChapter": 2385,
    "locationId": "靈界",
    "realm": "大乘期",
    "status": "alive",
    "activity": "主導天鼎宮路線規劃，以巨大道人法相攻擊冰魄，戰敗後隨萧冥撤退。"
   }
  ]
 },
 {
  "id": "第二元嬰",
  "name": "第二元嬰",
  "aliases": [
   "黑袍人"
  ],
  "faction": "韓立",
  "importance": "major",
  "bio": "自爆赤血劍與鬼罗幡試圖逃脫，終被虛天鼎收押，自主神識被韓立抹去並附體人形傀儡驅使。",
  "firstChapter": 1185,
  "canonFate": "自主意識被抹去，淪為韓立傀儡驅使工具",
  "chronicle": [
   {
    "fromChapter": 1185,
    "toChapter": 1214,
    "locationId": "天南",
    "realm": "元嬰中期",
    "status": "alive",
    "activity": "自爆赤血劍與鬼罗幡試圖逃脫，終被虛天鼎收押，自主神識被韓立抹去並附體人形傀儡驅使。"
   },
   {
    "fromChapter": 1508,
    "toChapter": 1537,
    "locationId": "天淵城",
    "realm": "元嬰",
    "status": "alive",
    "activity": "閉關期間代韓立管理藥園、催熟靈植、接待妖獸；以啼魂變身韩立應付外客。"
   }
  ]
 },
 {
  "id": "陸師兄",
  "name": "陸師兄",
  "aliases": [
   "陸某"
  ],
  "faction": "黃楓谷",
  "importance": "major",
  "bio": "風系異靈根，傲慢記仇，因新入門的慕容兄弟搶了其唯一異靈根光環而嫉妒，與之正面交鋒",
  "firstChapter": 130,
  "canonFate": "本弧中被韓立以符寶巨劍斬殺，屍身被毀滅。",
  "chronicle": [
   {
    "fromChapter": 130,
    "toChapter": 171,
    "locationId": "黃楓谷",
    "realm": "煉氣期十二層（中階）",
    "status": "alive",
    "activity": "受董妮子唆使，欲對陳師妹施暴後殺人滅口以奪筑基丹，被韓立斬殺。"
   }
  ]
 },
 {
  "id": "魚姓店主",
  "name": "魚姓店主",
  "aliases": [
   "魚兄",
   "枯瘦中年人",
   "枯瘦男子",
   "魚某",
   "魚道友",
   "萬雷坊店主"
  ],
  "faction": "五光族（推測）",
  "importance": "major",
  "bio": "萬雷坊坊主，以青羅果引誘三人協助降伏雷兽，成功後以引雷珠謀害協助者，被韓立識破反制；持有含瑕疵須彌洞天圖，最終棄身份潛逃。",
  "firstChapter": 1418,
  "canonFate": "事敗後以秘術易容，通過地下傳送陣離開天鵬聖城，携雷兽前往五光族。；本弧死亡——元嬰被韓立金色電弧徹底擊滅",
  "chronicle": [
   {
    "fromChapter": 1418,
    "toChapter": 1447,
    "locationId": "天淵城",
    "realm": "煉虛後期（施法後跌至煉虛初期）",
    "status": "alive",
    "activity": "萬雷坊坊主，以青羅果引誘三人協助降伏雷兽，成功後以引雷珠謀害協助者，被韓立識破反制；持有含瑕疵須彌洞"
   },
   {
    "fromChapter": 1845,
    "toChapter": 1874,
    "locationId": "天鵬聖城",
    "realm": "合體初期（合體後期大成——借雷獸融合後）",
    "status": "dead",
    "activity": "昔年天鵬聖城中以青羅果詭計引韓立降服雷獸之神秘人，盜劫地淵礦脈後混入韓立傳送法陣；與雷獸融合為大乘初"
   }
  ]
 },
 {
  "id": "寒驪上人",
  "name": "寒驪上人",
  "aliases": [
   "師相",
   "寒驪兄",
   "師道友",
   "師某"
  ],
  "faction": "北夜小極宮",
  "importance": "major",
  "bio": "小極宮大長老，寿元将盡，研究出以五種極寒之焰刺激突破化神的秘術，邀韓立等五人協助；擁有乾藍冰焰與虛天鼎式樣的巨鼎",
  "firstChapter": 1066,
  "canonFate": "元嬰被韓立以銀針禁制封入碧綠禁瓶，生死未卜",
  "chronicle": [
   {
    "fromChapter": 1066,
    "toChapter": 1124,
    "locationId": "大晉",
    "realm": "元嬰後期（化神衝關失敗）",
    "status": "dead",
    "activity": "小極宮大長老，以五焰洗髓秘術衝擊化神瓶頸，失敗後翻臉強索虛天鼎，被韓立以人形傀儡、魔髓飛刀及八靈尺聯"
   }
  ]
 },
 {
  "id": "無垢老祖",
  "name": "無垢老祖",
  "aliases": [],
  "faction": "赫連商盟？（與華西仙子同行）",
  "importance": "major",
  "bio": "萬花夫人道侶，氣息深不可測，以紫色大手打開天鼎宮巨門與夫人一同入宮。",
  "firstChapter": 2326,
  "canonFate": "殺死華西仙子後離場",
  "chronicle": [
   {
    "fromChapter": 2326,
    "toChapter": 2385,
    "locationId": "靈界",
    "realm": "大乘期（半人半屍之身）",
    "status": "dead",
    "activity": "以「替靈大法」在大戰中突然殺死共謀華西仙子，取走其袖中漆黑陣盤後獨身遁走，其半屍身份被韓立靈目識破。"
   }
  ]
 },
 {
  "id": "華西仙子",
  "name": "華西仙子",
  "aliases": [],
  "faction": "血天大陸",
  "importance": "major",
  "bio": "無垢老祖道侶，美豔，為天鼎宮而來，二人合力入宮。",
  "firstChapter": 2326,
  "canonFate": "被無垢老祖殺死隕落",
  "chronicle": [
   {
    "fromChapter": 2326,
    "toChapter": 2385,
    "locationId": "靈界",
    "realm": "大乘期",
    "status": "dead",
    "activity": "以「無塵蛊」追蹤萧冥等人入天鼎宮，聯手對韓立發起攻勢，最終被無垢老祖以替靈大法刺穿元嬰隕落。"
   }
  ]
 },
 {
  "id": "雲天嘯",
  "name": "雲天嘯",
  "aliases": [],
  "faction": "妙音門（魔道）",
  "importance": "major",
  "bio": "妙音門長老兼秘市東主，試圖以白骨陰火阻止韓立帶走文思月，被韓立十二柄飛劍一擊重創。",
  "firstChapter": 514,
  "canonFate": "被韓立重傷，讓步；被韓立斬殺",
  "chronicle": [
   {
    "fromChapter": 514,
    "toChapter": 573,
    "locationId": "亂星海",
    "realm": "結丹初期（推測）",
    "status": "alive",
    "activity": "架空範夫人、竊走媚術玉簡，被韩立以五行環制住後一劍斬首。"
   }
  ]
 },
 {
  "id": "雲姓老者",
  "name": "雲姓老者",
  "aliases": [
   "云道友",
   "雲兄",
   "白衫老者"
  ],
  "faction": "鬼靈門（隱藏身份）",
  "importance": "major",
  "bio": "偽裝成散修、南陇侯百年摯友，實為鬼靈門隱藏長老，在玉璣閣突然暗算南陇侯，為鬼靈門奪取坠魔谷入谷路線圖，施展搜魂術計劃追擊南陇侯。",
  "firstChapter": 686,
  "canonFate": "天符門前長老，昔年被困陰冥之地，曾託韓立將降靈符煉製法歸還本門。",
  "chronicle": [
   {
    "fromChapter": 686,
    "toChapter": 715,
    "locationId": "天南",
    "realm": "元嬰中期",
    "status": "alive",
    "activity": "偽裝成散修、南陇侯百年摯友，實為鬼靈門隱藏長老，在玉璣閣突然暗算南陇侯，為鬼靈門奪取坠魔谷入谷路線圖"
   },
   {
    "fromChapter": 946,
    "toChapter": 975,
    "locationId": "大晉",
    "realm": "元嬰中期",
    "status": "alive",
    "activity": "天符門前長老，昔年被困陰冥之地，曾託韓立將降靈符煉製法歸還本門。"
   }
  ]
 },
 {
  "id": "黃龍",
  "name": "黃龍",
  "aliases": [
   "護教法王黃龍"
  ],
  "faction": "千竹教",
  "importance": "major",
  "bio": "千竹教護教法王，奉新教主命令追殺林師兄，以鐵精換得機關傀儡兽半部大衍訣線索為誘餌設下圈套，最終圍攻韓立洞府",
  "firstChapter": 202,
  "canonFate": "被雷萬鶴擊殺，本弧身亡",
  "chronicle": [
   {
    "fromChapter": 202,
    "toChapter": 261,
    "locationId": "越京",
    "realm": "築基期",
    "status": "dead",
    "activity": "千竹教領隊修士，率眾傀儡圍攻韓立洞府，被雷萬鶴銀色劍光連同其餘同伴一併斬殺。"
   }
  ]
 },
 {
  "id": "極陰老祖",
  "name": "極陰老祖",
  "aliases": [
   "烏前輩",
   "極陰祖師",
   "極陰老魔"
  ],
  "faction": "極陰島",
  "importance": "major",
  "bio": "極陰島祖師，閉關出關消息震懾了苗古兩位長老及眾多修士，乌丑以其威名橫行",
  "firstChapter": 364,
  "canonFate": "以附身大法附身少主烏醜，施展天都屍火誅殺修士；真目標是奪回孫師叔盜走的虛天殘圖，並收服赤火老怪為從屬",
  "chronicle": [
   {
    "fromChapter": 364,
    "toChapter": 393,
    "locationId": "極陰島",
    "realm": "元嬰期",
    "status": "alive",
    "activity": "極陰島祖師，閉關出關消息震懾了苗古兩位長老及眾多修士，乌丑以其威名橫行"
   },
   {
    "fromChapter": 394,
    "toChapter": 423,
    "locationId": "亂星海",
    "realm": "元嬰期",
    "status": "alive",
    "activity": "以附身大法附身少主烏醜，施展天都屍火誅殺修士；真目標是奪回孫師叔盜走的虛天殘圖，並收服赤火老怪為從屬"
   }
  ]
 },
 {
  "id": "溫天仁",
  "name": "溫天仁",
  "aliases": [
   "六道少主",
   "逆星盟少主",
   "六道傳人"
  ],
  "faction": "逆星盟神鷲堂（六道傳人）",
  "importance": "major",
  "bio": "六道極聖高徒、逆星盟少主，神識強大近乎元嬰期，以金針法宝、六極真魔幻影對韓立發動強攻，被陰魔斬斬断左臂後施化劫大法接回，繼以銀色巨鐘繼續追打。",
  "firstChapter": 544,
  "canonFate": "激戰中（弧段末尾未分勝負）；本弧於暴風山迷霧中被韓立斬殺",
  "chronicle": [
   {
    "fromChapter": 544,
    "toChapter": 595,
    "locationId": "亂星海",
    "realm": "結丹後期",
    "status": "alive",
    "activity": "使用八門金光鏡、金光神焰困住韓立，被困陰冥之地後同樣法力全失；在暴風山迷霧中遭韓立突襲，以青竹蜂雲劍"
   }
  ]
 },
 {
  "id": "碎魂真人",
  "name": "碎魂真人",
  "aliases": [],
  "faction": "碎魂門（魔道）",
  "importance": "major",
  "bio": "感應六師弟本命牌熄滅，命三名弟子追查凶手，最終因韓立已離越國而一無所獲。",
  "firstChapter": 656,
  "canonFate": "被血羅罩困住後，由韓立用雷珠破罩救出，隨即幫忙阻擋追擊的慕蘭大上師",
  "chronicle": [
   {
    "fromChapter": 656,
    "toChapter": 685,
    "locationId": "越國",
    "realm": "元嬰期",
    "status": "alive",
    "activity": "感應六師弟本命牌熄滅，命三名弟子追查凶手，最終因韓立已離越國而一無所獲。"
   },
   {
    "fromChapter": 746,
    "toChapter": 775,
    "locationId": "天南",
    "realm": "元嬰中期",
    "status": "alive",
    "activity": "被血羅罩困住後，由韓立用雷珠破罩救出，隨即幫忙阻擋追擊的慕蘭大上師"
   }
  ]
 },
 {
  "id": "萬花夫人",
  "name": "萬花夫人",
  "aliases": [
   "萬花道友"
  ],
  "faction": "血骨門太上長老",
  "importance": "major",
  "bio": "為天鼎宮而來，三尾黑焰法寶強大，持斬麟魔劍，在較技場被蕭冥三招與韓立一招分別擊敗，與清平道人一同入天鼎宮。",
  "firstChapter": 2326,
  "canonFate": "與萧冥一同入天鼎宮，聯手對韓立等人發動進攻，被黃金巨螃蟹牽制後隨萧冥撤退。",
  "chronicle": [
   {
    "fromChapter": 2326,
    "toChapter": 2385,
    "locationId": "靈界",
    "realm": "大乘期",
    "status": "alive",
    "activity": "與萧冥一同入天鼎宮，聯手對韓立等人發動進攻，被黃金巨螃蟹牽制後隨萧冥撤退。"
   }
  ]
 },
 {
  "id": "趙長老",
  "name": "趙長老",
  "aliases": [],
  "faction": "妙音門（後倒戈極陰島）",
  "importance": "major",
  "bio": "李長老至交，火爆性格，最初不信任韓立，后被韩立成功救治李長老一事折服",
  "firstChapter": 61,
  "canonFate": "叛變倒戈，成為極陰老祖棋子",
  "chronicle": [
   {
    "fromChapter": 61,
    "toChapter": 90,
    "locationId": "七玄門",
    "realm": "混圓掌",
    "status": "alive",
    "activity": "李長老至交，火爆性格，最初不信任韓立，后被韩立成功救治李長老一事折服"
   },
   {
    "fromChapter": 394,
    "toChapter": 423,
    "locationId": "亂星海",
    "realm": "結丹初期",
    "status": "alive",
    "activity": "妙音門客卿長老，暗中受極陰老祖控制，在對抗隱煞門時率先出手製造混亂，事後倒戈投靠烏醜/極陰老祖"
   }
  ]
 },
 {
  "id": "鳳仙子",
  "name": "鳳仙子",
  "aliases": [
   "冰鳳一族之主",
   "冰鳳",
   "冰海之主",
   "鳳仙子",
   "銀衫女子"
  ],
  "faction": "冰鳳族（昔人界妖修）",
  "importance": "major",
  "bio": "天地靈兽冰凤一族之主，天生空間神通，以凤離冰焰壓制小極宮衆人，視乾藍冰焰修士為族仇；在主殿以空間神通與韓立激鬥，幾乎截停傳送但因元氣大耗放棄。",
  "firstChapter": 1096,
  "canonFate": "本弧存活，仍在虛靈殿主殿",
  "chronicle": [
   {
    "fromChapter": 1096,
    "toChapter": 1124,
    "locationId": "大晉",
    "realm": "十級化形妖兽（近化神）",
    "status": "alive",
    "activity": "天地靈兽冰凤一族之主，天生空間神通，以凤離冰焰壓制小極宮衆人，視乾藍冰焰修士為族仇；在主殿以空間神通"
   },
   {
    "fromChapter": 1815,
    "toChapter": 1844,
    "locationId": "靈界",
    "realm": "結丹→化神（恢復化形後）",
    "status": "alive",
    "activity": "昔日與韓立同行入靈界的舊識，受傷跌落境界被人囚於冰籠；韩立在黑域大會以玄光刃換得，解除其體內禁制並助"
   }
  ]
 },
 {
  "id": "鳴老怪",
  "name": "鳴老怪",
  "aliases": [
   "憑鳴老怪"
  ],
  "faction": "不明",
  "importance": "major",
  "bio": "翁某師父，以翡翠蛟龍分神形態現身指揮翁某爭奪靈地，目的是獲取某位大能埋藏於該靈地的遺寶功法，借出千魂鈴助翁某出手。",
  "firstChapter": 1296,
  "canonFate": "曾試圖到韓立靈地取寶失敗，因飛升修士群體的存在而被好打發走，本弧僅被提及",
  "chronicle": [
   {
    "fromChapter": 1296,
    "toChapter": 1357,
    "locationId": "風元大陸",
    "realm": "煉虛初期（閉關祭炼靈寶中，已度六次大天劫）",
    "status": "alive",
    "activity": "曾試圖到韓立靈地取寶失敗，因飛升修士群體的存在而被好打發走，本弧僅被提及"
   }
  ]
 },
 {
  "id": "墨居仁",
  "name": "墨居仁",
  "aliases": [
   "鬼手",
   "墨大夫",
   "墨老"
  ],
  "faction": "七玄門神手谷（寄居）",
  "importance": "major",
  "bio": "本弧前期偽裝慈善師傅，暗中以大量藥物培養韓立修煉長春功，圖謀借其長春氣恢復自身精元；本弧末揭露真面目，以武力制住韓立逼迫就範。",
  "firstChapter": 1,
  "canonFate": "壽元僅剩一年，本弧末攤牌、強制韓立；本弧第五十七章奪舍失敗，元神被韓立吞噬，肉身暴斃。",
  "chronicle": [
   {
    "fromChapter": 1,
    "toChapter": 60,
    "locationId": "七玄門",
    "realm": "凡人（借七鬼噬魂大法短暫擁有法力）",
    "status": "dead",
    "activity": "以尸蟲丸和魔銀手控制並脅迫韓立，施行奪舍術，卻因韩立長春功遠勝預估而元神被吞噬暴斃。"
   }
  ]
 },
 {
  "id": "摩鳩大師",
  "name": "摩鳩大師",
  "aliases": [
   "摩鳩道友",
   "灰袍僧人"
  ],
  "faction": "佛門散修",
  "importance": "major",
  "bio": "修煉綠色寒焰（黑水冰焰類），慈眉善目的高僧，受邀協助寒骊突破化神期",
  "firstChapter": 1066,
  "canonFate": "本弧身死，被大庚劍陣所滅",
  "chronicle": [
   {
    "fromChapter": 1066,
    "toChapter": 1124,
    "locationId": "大晉",
    "realm": "元嬰中期",
    "status": "dead",
    "activity": "曾倒戈助韓立獲得乾藍鼎，後與龍夫人一同演戲坐收漁利，最終被大庚劍陣所殺；持有可破壞修士法力的火紅圓球"
   }
  ]
 },
 {
  "id": "樂姓女上師",
  "name": "樂姓女上師",
  "aliases": [
   "綠衫女子",
   "樂姓女子",
   "樂上師"
  ],
  "faction": "慕蘭族",
  "importance": "major",
  "bio": "慕蘭族崇高身份者，持慕蘭族傳承之寶青銅油燈，修煉「柔風訣」風遁術，以白莲法術、白緞帶法宝與韩立激戰，最終被銀月的紫鎲兜套住，銅燈被奪。",
  "firstChapter": 716,
  "canonFate": "操控元明古燈召喚聖禽，多次以燈焰灼殺接近者，被韓立以聲東擊西之計奪走主燈",
  "chronicle": [
   {
    "fromChapter": 716,
    "toChapter": 795,
    "locationId": "天南",
    "realm": "元嬰後期（慕蘭第一女上師）",
    "status": "alive",
    "activity": "操控元明古燈召喚聖禽，多次以燈焰灼殺接近者，被韓立以聲東擊西之計奪走主燈"
   }
  ]
 },
 {
  "id": "蕭冥",
  "name": "蕭冥",
  "aliases": [
   "蕭道友",
   "狂魔老祖",
   "狂魔"
  ],
  "faction": "血骨門（太上長老）",
  "importance": "major",
  "bio": "鎮守血鶴城，以九目血蟾真身擊敗萬花夫人，持有天鼎宮真鑰匙之一，與清平道人、萬花夫人合謀入天鼎宮，拍賣會後與韓立成為競爭者。",
  "firstChapter": 2326,
  "canonFate": "率萬花夫人和清平道人在天鼎宮中搶奪衣缽，最終認敗以三顆陰血晶賠禮後撤退。",
  "chronicle": [
   {
    "fromChapter": 2326,
    "toChapter": 2385,
    "locationId": "靈界",
    "realm": "大乘期",
    "status": "alive",
    "activity": "率萬花夫人和清平道人在天鼎宮中搶奪衣缽，最終認敗以三顆陰血晶賠禮後撤退。"
   }
  ]
 },
 {
  "id": "龍夫人",
  "name": "龍夫人",
  "aliases": [
   "老嫗",
   "老身"
  ],
  "faction": "柳翠派（小極宮外門分支）",
  "importance": "major",
  "bio": "修煉黃色極寒之焰，聲音年輕如少女，受邀協助寒骊突破化神期",
  "firstChapter": 1066,
  "canonFate": "本弧身死，被大庚劍陣所滅",
  "chronicle": [
   {
    "fromChapter": 1066,
    "toChapter": 1124,
    "locationId": "大晉",
    "realm": "元嬰中期",
    "status": "dead",
    "activity": "表面聯手助韓立，實為小極宮外門長老，和摩鳩大師聯手演戲迷惑韓立，最終被大庚劍陣斬殺。"
   }
  ]
 },
 {
  "id": "藍氏雙魔",
  "name": "藍氏雙魔",
  "aliases": [
   "藍氏兄妹"
  ],
  "faction": "逆星盟",
  "importance": "major",
  "bio": "男魔嗜殺曾屠兩座小島，女魔修「陰女煞陽訣」；昔年被天星雙聖追殺後隱遁，被萬天明秘密請出助陣，於大戰中現身對抗星宮元嬰長老。",
  "firstChapter": 1185,
  "canonFate": "被韓立斬殺",
  "chronicle": [
   {
    "fromChapter": 1185,
    "toChapter": 1244,
    "locationId": "天南",
    "realm": "元嬰後期",
    "status": "alive",
    "activity": "逆星盟凶悍雙魔，擅使蓝色魔氣與粉紅香霧，被五子同心魔壓制後最終被韓立截殺。"
   }
  ]
 },
 {
  "id": "轉輪王",
  "name": "轉輪王",
  "aliases": [
   "轉輪王"
  ],
  "faction": "陰司",
  "importance": "major",
  "bio": "提議以猖奴對決賭注放韓立逃跑，識破韓立風雷翅中的真靈氣息。",
  "firstChapter": 1388,
  "canonFate": "強者之戰中以棋局與碧影決勝，輸後按約讓出小世界四成資源，率四名鬼王離去。",
  "chronicle": [
   {
    "fromChapter": 1388,
    "toChapter": 1417,
    "locationId": "天淵城",
    "realm": "大夜叉王（遠超合體期）",
    "status": "alive",
    "activity": "提議以猖奴對決賭注放韓立逃跑，識破韓立風雷翅中的真靈氣息。"
   },
   {
    "fromChapter": 2386,
    "toChapter": 2415,
    "locationId": "靈界",
    "realm": "大乘期（陰司鬼王）",
    "status": "alive",
    "activity": "強者之戰中以棋局與碧影決勝，輸後按約讓出小世界四成資源，率四名鬼王離去。"
   }
  ]
 },
 {
  "id": "隴東",
  "name": "隴東",
  "aliases": [
   "隴兄",
   "血痣青年",
   "隴家少主"
  ],
  "faction": "隴家少主",
  "importance": "major",
  "bio": "表面配合任務，實為謀奪葉穎天鳳真血；以血晶摩訶劍召喚真龍之魄，成功奪走大半天鳳真血；後被韓立大庚劍陣逼入絕境，令血晶摩訶劍自爆，元神逃脫。",
  "firstChapter": 1358,
  "canonFate": "元神借自爆混亂逃脫，其真龍之血被韓立虛天鼎捕獲。",
  "chronicle": [
   {
    "fromChapter": 1358,
    "toChapter": 1387,
    "locationId": "天淵城",
    "realm": "化神後期大成（真靈世家，真龍血脈）",
    "status": "alive",
    "activity": "表面配合任務，實為謀奪葉穎天鳳真血；以血晶摩訶劍召喚真龍之魄，成功奪走大半天鳳真血；後被韓立大庚劍陣"
   },
   {
    "fromChapter": 1815,
    "toChapter": 1844,
    "locationId": "魔界",
    "realm": "炼虚期",
    "status": "alive",
    "activity": "昔日被韩立壞其謀算，對韩立懷深仇怨恨；萬靈台上以怨毒目光盯視，被韩立以蓝芒神念震懾，頭痛欲裂。"
   }
  ]
 },
 {
  "id": "櫻兒",
  "name": "櫻兒",
  "aliases": [
   "少城主",
   "櫻道友",
   "血裙少女"
  ],
  "faction": "修羅蛛族",
  "importance": "major",
  "bio": "天蛛城少城主，修煉血靈之術，正閉關參悟時間法則；弧末被族母呼出，以物靈回溯初成修補奕老者元嬰，戰鬥力超越合體期水準。",
  "firstChapter": 2266,
  "canonFate": "掌握時空法則之力，制服奕姓老者後主導與韓立等達成晶核換打撈的交易，取得鏤靈石後圖謀更深層領悟空間法則。",
  "chronicle": [
   {
    "fromChapter": 2266,
    "toChapter": 2325,
    "locationId": "靈界",
    "realm": "合體期（以時空秘術臨時提升至大乘水準）",
    "status": "alive",
    "activity": "掌握時空法則之力，制服奕姓老者後主導與韓立等達成晶核換打撈的交易，取得鏤靈石後圖謀更深層領悟空間法則"
   }
  ]
 },
 {
  "id": "鐵翅魔",
  "name": "鐵翅魔",
  "aliases": [
   "鐵翅魔大人"
  ],
  "faction": "魔金山脈",
  "importance": "major",
  "bio": "得知芝仙可用作化形魔魈後，派千餘魔獸掃蕩全山外來修士；部下巨蜍為其效命",
  "firstChapter": 1598,
  "canonFate": "三魔之一，玄天如意刃殘片保管者（其中一截被魔猿偷走），覲見聖祖後奉命布陣，保留另一截殘片護身。",
  "chronicle": [
   {
    "fromChapter": 1598,
    "toChapter": 1687,
    "locationId": "天淵城",
    "realm": "聖階",
    "status": "alive",
    "activity": "三魔之一，玄天如意刃殘片保管者（其中一截被魔猿偷走），覲見聖祖後奉命布陣，保留另一截殘片護身。"
   }
  ]
 },
 {
  "id": "九仙宮白衣女修",
  "name": "九仙宮白衣女修",
  "aliases": [],
  "faction": "九仙宮",
  "importance": "major",
  "bio": "下令滅口所有突兀人的結丹女修，被韓立第二元嬰驅使阴罗幡所化魔云吞噬。",
  "firstChapter": 886,
  "canonFate": "被韓立魔云吞噬，消失無蹤",
  "chronicle": [
   {
    "fromChapter": 886,
    "toChapter": 915,
    "locationId": "大晉",
    "realm": "結丹期",
    "status": "alive",
    "activity": "下令滅口所有突兀人的結丹女修，被韓立第二元嬰驅使阴罗幡所化魔云吞噬。"
   }
  ]
 },
 {
  "id": "力尊者",
  "name": "力尊者",
  "aliases": [
   "力老怪"
  ],
  "faction": "血光聖祖麾下魔族",
  "importance": "major",
  "bio": "以血脈秘術追蹤韓立，召集米尊者、藍尊者圍攻；化為三頭六臂古魔真身，施蝕血魔焰，最終被韓立以金色電弧、辟邪神火焚滅元嬰，在本弧内陨落。",
  "firstChapter": 1875,
  "canonFate": "被韓立擊殺",
  "chronicle": [
   {
    "fromChapter": 1875,
    "toChapter": 1904,
    "locationId": "魔界",
    "realm": "合體初期（變身後達合體中期）",
    "status": "dead",
    "activity": "以血脈秘術追蹤韓立，召集米尊者、藍尊者圍攻；化為三頭六臂古魔真身，施蝕血魔焰，最終被韓立以金色電弧、"
   }
  ]
 },
 {
  "id": "三全道人",
  "name": "三全道人",
  "aliases": [
   "三全兄"
  ],
  "faction": "碧原小筑",
  "importance": "major",
  "bio": "三頭蟒蛇化身，精通法陣，協助黃元子破除青元子外圍禁制，見勢不妙後棄黃元子獨逃。",
  "firstChapter": 2296,
  "canonFate": "逃脫",
  "chronicle": [
   {
    "fromChapter": 2296,
    "toChapter": 2325,
    "locationId": "靈界",
    "realm": "大乘期",
    "status": "alive",
    "activity": "三頭蟒蛇化身，精通法陣，協助黃元子破除青元子外圍禁制，見勢不妙後棄黃元子獨逃。"
   }
  ]
 },
 {
  "id": "三層女子（皮鞭女）",
  "name": "三層女子（皮鞭女）",
  "aliases": [],
  "faction": "地淵",
  "importance": "major",
  "bio": "身處地淵三層，以黑色巨靈花祭祀，命通靈怨猿兽八面兽追殺韓立三人，皮鞭可撕裂空間；本弧末段始終未現身。",
  "firstChapter": 1418,
  "canonFate": "身處地淵三層，以黑色巨靈花祭祀，命通靈怨猿兽八面兽追殺韓立三人，皮鞭可撕裂空間；本弧末段始終未現身。",
  "chronicle": [
   {
    "fromChapter": 1418,
    "toChapter": 1447,
    "locationId": "地淵",
    "realm": "未明（高阶地淵妖物或修士）",
    "status": "alive",
    "activity": "身處地淵三層，以黑色巨靈花祭祀，命通靈怨猿兽八面兽追殺韓立三人，皮鞭可撕裂空間；本弧末段始終未現身。"
   }
  ]
 },
 {
  "id": "尸魈",
  "name": "尸魈",
  "aliases": [
   "黑衣少婦"
  ],
  "faction": "無",
  "importance": "major",
  "bio": "曾修幽殺訣、嗜殺成性的元嬰修士死後化成的尸魈，被天火神鏈與青金石密室禁錮於雲夢山石壁中；以少婦分神騙韓立揭封印，被金符克制暫時無法動彈；其精魂被封在金符玉盒中，玉盒被韓立收走。",
  "firstChapter": 596,
  "canonFate": "精魂封印玉盒被韓立帶走，肉身仍被禁錮在石室中",
  "chronicle": [
   {
    "fromChapter": 596,
    "toChapter": 625,
    "locationId": "雲夢山",
    "realm": "元嬰中期（殘魂被封印）",
    "status": "alive",
    "activity": "曾修幽殺訣、嗜殺成性的元嬰修士死後化成的尸魈，被天火神鏈與青金石密室禁錮於雲夢山石壁中；以少婦分神騙"
   }
  ]
 },
 {
  "id": "不死王（夢祥）",
  "name": "不死王（夢祥）",
  "aliases": [
   "夢祥",
   "不死王"
  ],
  "faction": "夜叉族",
  "importance": "major",
  "bio": "以一擊斬開萬丈巨山，率夜叉大軍追殺人族修士，以猖奴賭鬥放韓立逃走；其最後一擊震壞傳送法盤。",
  "firstChapter": 1388,
  "canonFate": "以一擊斬開萬丈巨山，率夜叉大軍追殺人族修士，以猖奴賭鬥放韓立逃走；其最後一擊震壞傳送法盤。",
  "chronicle": [
   {
    "fromChapter": 1388,
    "toChapter": 1417,
    "locationId": "天淵城",
    "realm": "大夜叉王（遠超合體期）",
    "status": "alive",
    "activity": "以一擊斬開萬丈巨山，率夜叉大軍追殺人族修士，以猖奴賭鬥放韓立逃走；其最後一擊震壞傳送法盤。"
   }
  ]
 },
 {
  "id": "不滅天尊",
  "name": "不滅天尊",
  "aliases": [
   "不滅道友"
  ],
  "faction": "不滅洞",
  "importance": "major",
  "bio": "身具不滅之體，身受重創可迅速恢復，但終被噬金蟲王晶光連環斬，元嬰被逼出後隕滅。",
  "firstChapter": 2296,
  "canonFate": "本弧被噬金蟲王斬殺，隕落",
  "chronicle": [
   {
    "fromChapter": 2296,
    "toChapter": 2325,
    "locationId": "靈界",
    "realm": "大乘期",
    "status": "dead",
    "activity": "身具不滅之體，身受重創可迅速恢復，但終被噬金蟲王晶光連環斬，元嬰被逼出後隕滅。"
   }
  ]
 },
 {
  "id": "五色門門主",
  "name": "五色門門主",
  "aliases": [
   "李老者"
  ],
  "faction": "五色門",
  "importance": "major",
  "bio": "嘉元城五色門主，參與了當年墨府覆滅之事；韓立在墨玉珠勸阻下未直接殺其，但暗中植入鑽心蟲，留下遲效毒殺。",
  "firstChapter": 322,
  "canonFate": "本弧被韓立暗植鑽心蟲，一兩年後將心痛發作而亡",
  "chronicle": [
   {
    "fromChapter": 322,
    "toChapter": 351,
    "locationId": "越京",
    "realm": "無修為（凡人江湖高手）",
    "status": "alive",
    "activity": "嘉元城五色門主，參與了當年墨府覆滅之事；韓立在墨玉珠勸阻下未直接殺其，但暗中植入鑽心蟲，留下遲效毒殺"
   }
  ]
 },
 {
  "id": "五泣",
  "name": "五泣",
  "aliases": [],
  "faction": "多眼魔麾下",
  "importance": "major",
  "bio": "多眼魔得力手下，頭生烏黑巨角，率數百魔獸堵截韓立，以三角銅鏡凝聚三魔法力追擊，最終被韓立用元磁神光破隱身後電光轟殺。",
  "firstChapter": 1628,
  "canonFate": "被韓立擊殺，元神魂飛魄散。",
  "chronicle": [
   {
    "fromChapter": 1628,
    "toChapter": 1657,
    "locationId": "天淵城",
    "realm": "煉虛頂階（雙角人形魔獸）",
    "status": "dead",
    "activity": "多眼魔得力手下，頭生烏黑巨角，率數百魔獸堵截韓立，以三角銅鏡凝聚三魔法力追擊，最終被韓立用元磁神光破"
   }
  ]
 },
 {
  "id": "元剎聖祖分神",
  "name": "元剎聖祖分神",
  "aliases": [
   "黑甲女子",
   "古魔圣祖化身",
   "黑袍女子"
  ],
  "faction": "古魔界",
  "importance": "major",
  "bio": "以黑風旗展示通天靈寶威能、魔化銀狼之軀凝成真魔甲，召喚本體神念跨界降臨化為魔像大肆殺戮，最終神念因魔氣斷絕而消散，分神仍存並借化龍璽試圖重啟封印。",
  "firstChapter": 1036,
  "canonFate": "本體神念被強制消散，分神仍存",
  "chronicle": [
   {
    "fromChapter": 1036,
    "toChapter": 1065,
    "locationId": "大晉",
    "realm": "化神末期（以珑梦銀狼妖體為軀）",
    "status": "alive",
    "activity": "以黑風旗展示通天靈寶威能、魔化銀狼之軀凝成真魔甲，召喚本體神念跨界降臨化為魔像大肆殺戮，最終神念因魔"
   }
  ]
 },
 {
  "id": "元魘始祖",
  "name": "元魘始祖",
  "aliases": [
   "黑袍青年",
   "元魘"
  ],
  "faction": "魔族",
  "importance": "major",
  "bio": "魔界三大始祖之一，持玄天黑魔匕，屠殺靈界眾人；以九頭魔蟾法相被偽仙儡自爆重創、半截身軀消失，法力大損。",
  "firstChapter": 2085,
  "canonFate": "被偽仙儡自爆重傷，半截身軀被炸毀",
  "chronicle": [
   {
    "fromChapter": 2085,
    "toChapter": 2114,
    "locationId": "靈界",
    "realm": "大乘期（三大始祖之一）",
    "status": "alive",
    "activity": "魔界三大始祖之一，持玄天黑魔匕，屠殺靈界眾人；以九頭魔蟾法相被偽仙儡自爆重創、半截身軀消失，法力大損"
   }
  ]
 },
 {
  "id": "六極聖祖",
  "name": "六極聖祖",
  "aliases": [
   "六極"
  ],
  "faction": "魔族聖族",
  "importance": "major",
  "bio": "元刹的姐姐，以元刹化身肉身為寄體，從黑色玉棺中蘇醒，降臨靈界，得知混沌二氣情報後參與追殺。",
  "firstChapter": 1935,
  "canonFate": "元刹的姐姐，以元刹化身肉身為寄體，從黑色玉棺中蘇醒，降臨靈界，得知混沌二氣情報後參與追殺。",
  "chronicle": [
   {
    "fromChapter": 1935,
    "toChapter": 1964,
    "locationId": "靈界",
    "realm": "大乘（化身，本體兩成實力）",
    "status": "alive",
    "activity": "元刹的姐姐，以元刹化身肉身為寄體，從黑色玉棺中蘇醒，降臨靈界，得知混沌二氣情報後參與追殺。"
   }
  ]
 },
 {
  "id": "天外魔君",
  "name": "天外魔君",
  "aliases": [],
  "faction": "天外魔頭",
  "importance": "major",
  "bio": "藉心魔劫空間本體降臨，被韩立七枚金罡滅魔神雷重創，再以假神雷嚇退；臨走威脅飛升之劫時必報仇。",
  "firstChapter": 2176,
  "canonFate": "元氣大傷，逃離心魔空間",
  "chronicle": [
   {
    "fromChapter": 2176,
    "toChapter": 2205,
    "locationId": "靈界",
    "realm": "魔頭（神通可比大乘）",
    "status": "alive",
    "activity": "藉心魔劫空間本體降臨，被韩立七枚金罡滅魔神雷重創，再以假神雷嚇退；臨走威脅飛升之劫時必報仇。"
   }
  ]
 },
 {
  "id": "天哭先生",
  "name": "天哭先生",
  "aliases": [
   "黑袍法士"
  ],
  "faction": "慕蘭族（來自慕蘭草原另一邊的龐大帝國）",
  "importance": "major",
  "bio": "修煉天刹真魔功，魔化身形後以鬼陰爪攻擊，被韓立以辟邪神雷瞬間滅殺元嬰，是此行最先被殺的高阶法士。",
  "firstChapter": 716,
  "canonFate": "被辟邪神雷滅殺，形神俱滅",
  "chronicle": [
   {
    "fromChapter": 716,
    "toChapter": 745,
    "locationId": "天南",
    "realm": "元嬰初期",
    "status": "dead",
    "activity": "修煉天刹真魔功，魔化身形後以鬼陰爪攻擊，被韓立以辟邪神雷瞬間滅殺元嬰，是此行最先被殺的高阶法士。"
   }
  ]
 },
 {
  "id": "天煞真君",
  "name": "天煞真君",
  "aliases": [
   "天煞宗宗主"
  ],
  "faction": "魔道天煞宗",
  "importance": "major",
  "bio": "以附身大法遙控已潛伏多年的衛某，借衛某之軀與蓝前輩纏鬥，為杜東等人爭取脫逃時間",
  "firstChapter": 626,
  "canonFate": "附身時效結束，衛某被生擒",
  "chronicle": [
   {
    "fromChapter": 626,
    "toChapter": 655,
    "locationId": "天南",
    "realm": "元嬰期（境界不詳，附體施法）",
    "status": "alive",
    "activity": "以附身大法遙控已潛伏多年的衛某，借衛某之軀與蓝前輩纏鬥，為杜東等人爭取脫逃時間"
   }
  ]
 },
 {
  "id": "天鳴",
  "name": "天鳴",
  "aliases": [],
  "faction": "赤融族",
  "importance": "major",
  "bio": "率部埋伏截擊天鵬使者，企圖奪取木鈴花，告知天鵬族圣主已陨落，使用困魔網、通靈之蜂、火龍珠，最終被韓立逼退。",
  "firstChapter": 1388,
  "canonFate": "率部埋伏截擊天鵬使者，企圖奪取木鈴花，告知天鵬族圣主已陨落，使用困魔網、通靈之蜂、火龍珠，最終被韓立逼退。",
  "chronicle": [
   {
    "fromChapter": 1388,
    "toChapter": 1417,
    "locationId": "天淵城",
    "realm": "化神中期",
    "status": "alive",
    "activity": "率部埋伏截擊天鵬使者，企圖奪取木鈴花，告知天鵬族圣主已陨落，使用困魔網、通靈之蜂、火龍珠，最終被韓立"
   }
  ]
 },
 {
  "id": "木魁",
  "name": "木魁",
  "aliases": [],
  "faction": "不明",
  "importance": "major",
  "bio": "偷跟化仙宗二女入昆吾殿，欲搶奪供桌宝物，被昆吾三老殘留神念驅動三件寶物一擊蒸滅。",
  "firstChapter": 1006,
  "canonFate": "被昆吾三老神念驅寶一擊滅殺",
  "chronicle": [
   {
    "fromChapter": 1006,
    "toChapter": 1035,
    "locationId": "大晉",
    "realm": "不明（超強妖物）",
    "status": "dead",
    "activity": "偷跟化仙宗二女入昆吾殿，欲搶奪供桌宝物，被昆吾三老殘留神念驅動三件寶物一擊蒸滅。"
   }
  ]
 },
 {
  "id": "王天勝",
  "name": "王天勝",
  "aliases": [
   "鬼靈門宗主"
  ],
  "faction": "鬼靈門",
  "importance": "major",
  "bio": "鬼靈門宗主，主導坠魔令發放與傳送陣佈置，真正目標是上古「靈緲園」，以魏無涯為「震場」屏障，帶兵深入內谷尋找靈緲園入口。",
  "firstChapter": 796,
  "canonFate": "鬼靈門宗主，主導坠魔令發放與傳送陣佈置，真正目標是上古「靈緲園」，以魏無涯為「震場」屏障，帶兵深入內谷尋找靈緲園入口。",
  "chronicle": [
   {
    "fromChapter": 796,
    "toChapter": 825,
    "locationId": "大晉",
    "realm": "元嬰初期",
    "status": "alive",
    "activity": "鬼靈門宗主，主導坠魔令發放與傳送陣佈置，真正目標是上古「靈緲園」，以魏無涯為「震場」屏障，帶兵深入內"
   }
  ]
 },
 {
  "id": "王總管",
  "name": "王總管",
  "aliases": [
   "王護法"
  ],
  "faction": "黑煞教",
  "importance": "major",
  "bio": "馨王府王總管，黑煞教教主的堂兄，主持越京教務，被韓立斬斷一臂後生擒，由蒙山四友審訊取得口供。",
  "firstChapter": 292,
  "canonFate": "馨王府王總管，黑煞教教主的堂兄，主持越京教務，被韓立斬斷一臂後生擒，由蒙山四友審訊取得口供。",
  "chronicle": [
   {
    "fromChapter": 292,
    "toChapter": 321,
    "locationId": "越京",
    "realm": "煉氣期",
    "status": "alive",
    "activity": "馨王府王總管，黑煞教教主的堂兄，主持越京教務，被韓立斬斷一臂後生擒，由蒙山四友審訊取得口供。"
   }
  ]
 },
 {
  "id": "付天化",
  "name": "付天化",
  "aliases": [
   "付家老祖",
   "付家家主"
  ],
  "faction": "元武國付家",
  "importance": "major",
  "bio": "元武國付家家主，壽誕之日被韓立入堡尋仇，以土遁符逃脫後被銀月追殺身亡",
  "firstChapter": 626,
  "canonFate": "被銀月以妖狐迷香制殺",
  "chronicle": [
   {
    "fromChapter": 626,
    "toChapter": 655,
    "locationId": "天南",
    "realm": "結丹中期",
    "status": "alive",
    "activity": "元武國付家家主，壽誕之日被韓立入堡尋仇，以土遁符逃脫後被銀月追殺身亡"
   }
  ]
 },
 {
  "id": "古長老",
  "name": "古長老",
  "aliases": [],
  "faction": "六連殿",
  "importance": "major",
  "bio": "六連殿結丹期客卿長老，持混元缽追殺韓立，被韓立在碧水青甲陣中以傀儡、飛針夾擊斬殺",
  "firstChapter": 364,
  "canonFate": "被韓立斬殺，儲物袋（含降塵丹、混元缽等）被奪",
  "chronicle": [
   {
    "fromChapter": 364,
    "toChapter": 393,
    "locationId": "亂星海",
    "realm": "結丹初期",
    "status": "alive",
    "activity": "六連殿結丹期客卿長老，持混元缽追殺韓立，被韓立在碧水青甲陣中以傀儡、飛針夾擊斬殺"
   }
  ]
 },
 {
  "id": "古魔本體",
  "name": "古魔本體",
  "aliases": [
   "魔首人身",
   "魔物"
  ],
  "faction": "圣界",
  "importance": "major",
  "bio": "三十餘丈雙頭四臂被封印的古魔本體，施解體化形重組軀體後放出方圓十里的黑紫魔幕，與魏無涯激烈交戰；弧末正被眾修士圍攻",
  "firstChapter": 826,
  "canonFate": "弧末仍活躍，繼續戰鬥",
  "chronicle": [
   {
    "fromChapter": 826,
    "toChapter": 855,
    "locationId": "大晉",
    "realm": "上古高階古魔（接近元嬰後期以上）",
    "status": "alive",
    "activity": "三十餘丈雙頭四臂被封印的古魔本體，施解體化形重組軀體後放出方圓十里的黑紫魔幕，與魏無涯激烈交戰；弧末"
   }
  ]
 },
 {
  "id": "四散真人",
  "name": "四散真人",
  "aliases": [
   "鄭衛"
  ],
  "faction": "不明",
  "importance": "major",
  "bio": "持一口似魔龍刃的血刀，悄無聲息殺害富姓老者和阴罗宗長老、偷襲韩立，行事毫無顧忌、身份來歷神秘。",
  "firstChapter": 1006,
  "canonFate": "持一口似魔龍刃的血刀，悄無聲息殺害富姓老者和阴罗宗長老、偷襲韩立，行事毫無顧忌、身份來歷神秘。",
  "chronicle": [
   {
    "fromChapter": 1006,
    "toChapter": 1035,
    "locationId": "大晉",
    "realm": "元嬰中期",
    "status": "alive",
    "activity": "持一口似魔龍刃的血刀，悄無聲息殺害富姓老者和阴罗宗長老、偷襲韩立，行事毫無顧忌、身份來歷神秘。"
   }
  ]
 },
 {
  "id": "幼童魔尊（魂蟲族）",
  "name": "幼童魔尊（魂蟲族）",
  "aliases": [
   "魂珠兄"
  ],
  "faction": "魂蟲族",
  "importance": "major",
  "bio": "率七八十萬魂蟲大軍進入靈界，與青甲魔族（三目魔蟒族）聯手行動。",
  "firstChapter": 1875,
  "canonFate": "率七八十萬魂蟲大軍進入靈界，與青甲魔族（三目魔蟒族）聯手行動。",
  "chronicle": [
   {
    "fromChapter": 1875,
    "toChapter": 1904,
    "locationId": "靈界",
    "realm": "高階魔族（合體以上）",
    "status": "alive",
    "activity": "率七八十萬魂蟲大軍進入靈界，與青甲魔族（三目魔蟒族）聯手行動。"
   }
  ]
 },
 {
  "id": "玉骨人魔",
  "name": "玉骨人魔",
  "aliases": [],
  "faction": "未知",
  "importance": "major",
  "bio": "被上古修士禁锢在石山莫名空間中，翡翠蛟龍師徒等誤觸禁制令其脫困，引發空間崩塌；其遺骸（骨爪）逃出後被韓立捕獲，骨爪中藏有金闕玉書外頁。",
  "firstChapter": 1326,
  "canonFate": "空間崩塌後本體消滅，遺骸一隻骨爪被韓立奪得。",
  "chronicle": [
   {
    "fromChapter": 1326,
    "toChapter": 1355,
    "locationId": "風元大陸",
    "realm": "上古強大魔物",
    "status": "alive",
    "activity": "被上古修士禁锢在石山莫名空間中，翡翠蛟龍師徒等誤觸禁制令其脫困，引發空間崩塌；其遺骸（骨爪）逃出後被"
   }
  ]
 },
 {
  "id": "田姓男子",
  "name": "田姓男子",
  "aliases": [
   "妖異男子",
   "艷麗男子",
   "田公子"
  ],
  "faction": "合歡宗",
  "importance": "major",
  "bio": "合歡宗某長老之子，追殺南宮屏意圖以玄月吸陰功藉雙修突破築基後期，與王蟬聯手被韓立幻陣所困。",
  "firstChapter": 352,
  "canonFate": "合歡宗某長老之子，追殺南宮屏意圖以玄月吸陰功藉雙修突破築基後期，與王蟬聯手被韓立幻陣所困。",
  "chronicle": [
   {
    "fromChapter": 352,
    "toChapter": 363,
    "locationId": "越京",
    "realm": "築基中期",
    "status": "alive",
    "activity": "合歡宗某長老之子，追殺南宮屏意圖以玄月吸陰功藉雙修突破築基後期，與王蟬聯手被韓立幻陣所困。"
   }
  ]
 },
 {
  "id": "田鍾",
  "name": "田鍾",
  "aliases": [
   "第四神師"
  ],
  "faction": "慕蘭（法士）",
  "importance": "major",
  "bio": "慕蘭秘而不宣的第四神師，持天虎獸與青影化身專門對付韓立，被凤冰拖住",
  "firstChapter": 746,
  "canonFate": "慕蘭秘而不宣的第四神師，持天虎獸與青影化身專門對付韓立，被凤冰拖住",
  "chronicle": [
   {
    "fromChapter": 746,
    "toChapter": 775,
    "locationId": "天南",
    "realm": "元嬰後期（剛進階）",
    "status": "alive",
    "activity": "慕蘭秘而不宣的第四神師，持天虎獸與青影化身專門對付韓立，被凤冰拖住"
   }
  ]
 },
 {
  "id": "田鍾（第四神師）",
  "name": "田鍾（第四神師）",
  "aliases": [
   "第四神師"
  ],
  "faction": "慕蘭族",
  "importance": "major",
  "bio": "慕蘭第四神師，邊界大戰的主要對手之一，被鳳冰、白姓女修聯手壓制",
  "firstChapter": 776,
  "canonFate": "慕蘭第四神師，邊界大戰的主要對手之一，被鳳冰、白姓女修聯手壓制",
  "chronicle": [
   {
    "fromChapter": 776,
    "toChapter": 795,
    "locationId": "天南",
    "realm": "元嬰後期",
    "status": "alive",
    "activity": "慕蘭第四神師，邊界大戰的主要對手之一，被鳳冰、白姓女修聯手壓制"
   }
  ]
 },
 {
  "id": "白衣女子（聖祖）",
  "name": "白衣女子（聖祖）",
  "aliases": [
   "聖祖大人"
  ],
  "faction": "不明魔道勢力",
  "importance": "major",
  "bio": "與黑袍大漢一同抵達銀族傳送陣，擊殺銀族守衛，行蹤神秘，與海底密室血繭疑有關聯。",
  "firstChapter": 1755,
  "canonFate": "與黑袍大漢一同抵達銀族傳送陣，擊殺銀族守衛，行蹤神秘，與海底密室血繭疑有關聯。",
  "chronicle": [
   {
    "fromChapter": 1755,
    "toChapter": 1784,
    "locationId": "魔界",
    "realm": "合體以上（疑似大乘）",
    "status": "alive",
    "activity": "與黑袍大漢一同抵達銀族傳送陣，擊殺銀族守衛，行蹤神秘，與海底密室血繭疑有關聯。"
   }
  ]
 },
 {
  "id": "白姓儒生",
  "name": "白姓儒生",
  "aliases": [
   "青袍儒生",
   "白師叔"
  ],
  "faction": "正道盟浩然閣（潛伏古劍門）",
  "importance": "major",
  "bio": "正道盟浩然閣閣主門人，在古劍門潛伏逾百年，配合杜東奪取醇液，最終被付姓老者當場擊殺",
  "firstChapter": 626,
  "canonFate": "被付姓老者擊殺身亡",
  "chronicle": [
   {
    "fromChapter": 626,
    "toChapter": 655,
    "locationId": "天南",
    "realm": "結丹中期",
    "status": "dead",
    "activity": "正道盟浩然閣閣主門人，在古劍門潛伏逾百年，配合杜東奪取醇液，最終被付姓老者當場擊殺"
   }
  ]
 },
 {
  "id": "白鬼",
  "name": "白鬼",
  "aliases": [
   "白袍鬼女"
  ],
  "faction": "蜉蝣族旗下鬼物",
  "importance": "major",
  "bio": "面孔半面焦綠、半面嬌艷，精通隱身和空間瞬移神通，白袍可抵各種攻擊；曾在鬼霧中出手攻擊韓立，後奉命追蹤韓立，被啜魂獸以摄魂霞光生擒吞噬，萬里符落入韓立手中。",
  "firstChapter": 1478,
  "canonFate": "被啜魂獸吞噬陨落",
  "chronicle": [
   {
    "fromChapter": 1478,
    "toChapter": 1507,
    "locationId": "天淵城",
    "realm": "高階鬼物（近似煉虛期）",
    "status": "alive",
    "activity": "面孔半面焦綠、半面嬌艷，精通隱身和空間瞬移神通，白袍可抵各種攻擊；曾在鬼霧中出手攻擊韓立，後奉命追蹤"
   }
  ]
 },
 {
  "id": "白發美婦",
  "name": "白發美婦",
  "aliases": [
   "藍姐姐",
   "鬼婆",
   "藍道友"
  ],
  "faction": "地淵四大妖王",
  "importance": "major",
  "bio": "精通鬼道功法，統率八千陰甲玄鬼及秘藏精銳鬼兵；不惜將乾坤幡交給韓立作誘餌用；神池一戰苦戰冥雷獸兼抵禦五龍鍘，損耗極重。",
  "firstChapter": 1478,
  "canonFate": "精通鬼道功法，統率八千陰甲玄鬼及秘藏精銳鬼兵；不惜將乾坤幡交給韓立作誘餌用；神池一戰苦戰冥雷獸兼抵禦五龍鍘，損耗極重。",
  "chronicle": [
   {
    "fromChapter": 1478,
    "toChapter": 1507,
    "locationId": "天淵城",
    "realm": "合體期",
    "status": "alive",
    "activity": "精通鬼道功法，統率八千陰甲玄鬼及秘藏精銳鬼兵；不惜將乾坤幡交給韓立作誘餌用；神池一戰苦戰冥雷獸兼抵禦"
   }
  ]
 },
 {
  "id": "石崑",
  "name": "石崑",
  "aliases": [
   "石侖（別稱）"
  ],
  "faction": "南山三惡",
  "importance": "major",
  "bio": "惡修之首，挾持白果兒脅迫白化及交出千年血參，被韓立一根青絲洞穿頭顱當場斬殺",
  "firstChapter": 1785,
  "canonFate": "被韓立斬殺（本弧）",
  "chronicle": [
   {
    "fromChapter": 1785,
    "toChapter": 1814,
    "locationId": "魔界",
    "realm": "築基後期大成",
    "status": "alive",
    "activity": "惡修之首，挾持白果兒脅迫白化及交出千年血參，被韓立一根青絲洞穿頭顱當場斬殺"
   }
  ]
 },
 {
  "id": "石尊者",
  "name": "石尊者",
  "aliases": [
   "石道友"
  ],
  "faction": "血光聖祖麾下魔族",
  "importance": "major",
  "bio": "率魔獸大軍試探進攻天淵城，被七星精火大陣重創後狼狽逃脱。",
  "firstChapter": 1875,
  "canonFate": "率魔獸大軍試探進攻天淵城，被七星精火大陣重創後狼狽逃脱。",
  "chronicle": [
   {
    "fromChapter": 1875,
    "toChapter": 1904,
    "locationId": "天淵城",
    "realm": "合體期",
    "status": "alive",
    "activity": "率魔獸大軍試探進攻天淵城，被七星精火大陣重創後狼狽逃脱。"
   }
  ]
 },
 {
  "id": "穴靈（被天外魔君分魂附身）",
  "name": "穴靈（被天外魔君分魂附身）",
  "aliases": [
   "怪臉",
   "墨麒麟（變形後）"
  ],
  "faction": "天外魔君（分魂）",
  "importance": "major",
  "bio": "原為真靈之穴誕生的蜃氣，被天外魔君分魂控制，已吞噬同類三四個，掌握大吞滅術與無數黑色電弧，被啼魂獸刑獸神通鎖定後以天罰神矛滅殺。",
  "firstChapter": 1628,
  "canonFate": "被啜魂獸天罰神矛斬殺，屍身化為魔化之塵。",
  "chronicle": [
   {
    "fromChapter": 1628,
    "toChapter": 1657,
    "locationId": "天淵城",
    "realm": "不明（附身後威能巨大）",
    "status": "alive",
    "activity": "原為真靈之穴誕生的蜃氣，被天外魔君分魂控制，已吞噬同類三四個，掌握大吞滅術與無數黑色電弧，被啼魂獸刑"
   }
  ]
 },
 {
  "id": "仲神師",
  "name": "仲神師",
  "aliases": [
   "仲姓儒生"
  ],
  "faction": "慕蘭（法士）",
  "importance": "major",
  "bio": "追殺韓立四天四夜未果，後主持賭戰前交涉，大戰中被三大修士之一牽制",
  "firstChapter": 746,
  "canonFate": "追殺韓立四天四夜未果，後主持賭戰前交涉，大戰中被三大修士之一牽制",
  "chronicle": [
   {
    "fromChapter": 746,
    "toChapter": 775,
    "locationId": "天南",
    "realm": "元嬰後期",
    "status": "alive",
    "activity": "追殺韓立四天四夜未果，後主持賭戰前交涉，大戰中被三大修士之一牽制"
   }
  ]
 },
 {
  "id": "兇司王",
  "name": "兇司王",
  "aliases": [],
  "faction": "冥界陰司",
  "importance": "major",
  "bio": "牛首人身夺舍巨兽之身，持千鬼之力、五尊陰魔、第二元神等秘術與韓立大戰，最終被玄天斬靈劍截斬，元嬰被噬金蟲王斬滅，徹底隕落。",
  "firstChapter": 2356,
  "canonFate": "被韓立與噬金蟲王聯手斬殺隕落",
  "chronicle": [
   {
    "fromChapter": 2356,
    "toChapter": 2385,
    "locationId": "靈界",
    "realm": "陰司十王之一（相當大乘期）",
    "status": "dead",
    "activity": "牛首人身夺舍巨兽之身，持千鬼之力、五尊陰魔、第二元神等秘術與韓立大戰，最終被玄天斬靈劍截斬，元嬰被噬"
   }
  ]
 },
 {
  "id": "冰妖",
  "name": "冰妖",
  "aliases": [],
  "faction": "黑煞教（四大血侍）",
  "importance": "major",
  "bio": "全身散發白色寒氣，半妖化後可完全透明隱身，以寒爪偷襲殺死師姐雪虹，後與韓立展開隱形搏鬥。",
  "firstChapter": 292,
  "canonFate": "全身散發白色寒氣，半妖化後可完全透明隱身，以寒爪偷襲殺死師姐雪虹，後與韓立展開隱形搏鬥。",
  "chronicle": [
   {
    "fromChapter": 292,
    "toChapter": 321,
    "locationId": "越京",
    "realm": "筑基中期",
    "status": "alive",
    "activity": "全身散發白色寒氣，半妖化後可完全透明隱身，以寒爪偷襲殺死師姐雪虹，後與韓立展開隱形搏鬥。"
   }
  ]
 },
 {
  "id": "冰妖（血侍）",
  "name": "冰妖（血侍）",
  "aliases": [],
  "faction": "黑煞教",
  "importance": "major",
  "bio": "黑煞教血侍之一，半妖化後身體透明、速度極快，被韓立以絲線纏爪後亂劍斬殺。",
  "firstChapter": 322,
  "canonFate": "本弧死亡，被韓立斬殺",
  "chronicle": [
   {
    "fromChapter": 322,
    "toChapter": 351,
    "locationId": "越京",
    "realm": "築基期（半妖化）",
    "status": "dead",
    "activity": "黑煞教血侍之一，半妖化後身體透明、速度極快，被韓立以絲線纏爪後亂劍斬殺。"
   }
  ]
 },
 {
  "id": "匈姓魔尊",
  "name": "匈姓魔尊",
  "aliases": [
   "魔族大漢",
   "匈某",
   "魔族第一魔尊"
  ],
  "faction": "魔族",
  "importance": "major",
  "bio": "號稱聖祖之下第一魔尊，與韓立鬥法激烈，以九魔子母槍幾乎致命；肉身被韓立涅盤聖體巨掌斃殺，殘魂轉入三首魔獅傀儡後被天戈符斬滅。",
  "firstChapter": 1995,
  "canonFate": "元神被天戈符斬滅，徹底隕落",
  "chronicle": [
   {
    "fromChapter": 1995,
    "toChapter": 2024,
    "locationId": "魔界",
    "realm": "合體後期（近半步大乘）",
    "status": "dead",
    "activity": "號稱聖祖之下第一魔尊，與韓立鬥法激烈，以九魔子母槍幾乎致命；肉身被韓立涅盤聖體巨掌斃殺，殘魂轉入三首"
   }
  ]
 },
 {
  "id": "匈某",
  "name": "匈某",
  "aliases": [
   "匈兄",
   "第一魔尊"
  ],
  "faction": "魔族聖族",
  "importance": "major",
  "bio": "本弧末被血光从聖界召來，談妥以韓立身上所有財物為酬，在魔族總攻時專門對付韓立",
  "firstChapter": 1965,
  "canonFate": "本弧末被血光从聖界召來，談妥以韓立身上所有財物為酬，在魔族總攻時專門對付韓立",
  "chronicle": [
   {
    "fromChapter": 1965,
    "toChapter": 1994,
    "locationId": "魔界",
    "realm": "合體後期",
    "status": "alive",
    "activity": "本弧末被血光从聖界召來，談妥以韓立身上所有財物為酬，在魔族總攻時專門對付韓立"
   }
  ]
 },
 {
  "id": "多眼魔父",
  "name": "多眼魔父",
  "aliases": [
   "黑雲老怪"
  ],
  "faction": "魔金山脈",
  "importance": "major",
  "bio": "多眼魔之父，得知兒子被韓立所殺後，命手下九夜追蹤韓立",
  "firstChapter": 1598,
  "canonFate": "多眼魔之父，得知兒子被韓立所殺後，命手下九夜追蹤韓立",
  "chronicle": [
   {
    "fromChapter": 1598,
    "toChapter": 1627,
    "locationId": "天淵城",
    "realm": "不明（強大魔獸）",
    "status": "alive",
    "activity": "多眼魔之父，得知兒子被韓立所殺後，命手下九夜追蹤韓立"
   }
  ]
 },
 {
  "id": "多寶女",
  "name": "多寶女",
  "aliases": [],
  "faction": "掩月宗",
  "importance": "major",
  "bio": "掩月宗某長老後人，持有定器小鏡、侵蝕法器水晶球等多件古怪法器，壓制黃衫師姐，後被封嶽黃芒一劍穿透身亡。",
  "firstChapter": 172,
  "canonFate": "被封嶽符寶小刀一劍穿透身亡",
  "chronicle": [
   {
    "fromChapter": 172,
    "toChapter": 201,
    "locationId": "掩月宗",
    "realm": "煉氣期第十二層",
    "status": "alive",
    "activity": "掩月宗某長老後人，持有定器小鏡、侵蝕法器水晶球等多件古怪法器，壓制黃衫師姐，後被封嶽黃芒一劍穿透身亡"
   }
  ]
 },
 {
  "id": "旭天",
  "name": "旭天",
  "aliases": [
   "旭天玄靈"
  ],
  "faction": "器靈族",
  "importance": "major",
  "bio": "器靈族玄靈，帶骅光、噬炎等人潛入落日之墓追殺靈族叛逆，搶到神血後被韓立以噬炎身份騙走，最終被黃粱靈君與寰天奇聯手擊退。",
  "firstChapter": 1296,
  "canonFate": "器靈族玄靈，帶骅光、噬炎等人潛入落日之墓追殺靈族叛逆，搶到神血後被韓立以噬炎身份騙走，最終被黃粱靈君與寰天奇聯手擊退。",
  "chronicle": [
   {
    "fromChapter": 1296,
    "toChapter": 1325,
    "locationId": "風元大陸",
    "realm": "器靈族八大玄靈之一（等同煉虛期）",
    "status": "alive",
    "activity": "器靈族玄靈，帶骅光、噬炎等人潛入落日之墓追殺靈族叛逆，搶到神血後被韓立以噬炎身份騙走，最終被黃粱靈君"
   }
  ]
 },
 {
  "id": "羊老二",
  "name": "羊老二",
  "aliases": [],
  "faction": "雷海散修",
  "importance": "major",
  "bio": "出身雷海的散修，偽裝成炼虚修士在血鴉城拍賣場假拍聖砖，以第四塊泣靈聖砖誘炳千刃相談，被韓立紫言鼎困住後自爆魔器逃脫。",
  "firstChapter": 2025,
  "canonFate": "出身雷海的散修，偽裝成炼虚修士在血鴉城拍賣場假拍聖砖，以第四塊泣靈聖砖誘炳千刃相談，被韓立紫言鼎困住後自爆魔器逃脫。",
  "chronicle": [
   {
    "fromChapter": 2025,
    "toChapter": 2054,
    "locationId": "魔界",
    "realm": "合體中期",
    "status": "alive",
    "activity": "出身雷海的散修，偽裝成炼虚修士在血鴉城拍賣場假拍聖砖，以第四塊泣靈聖砖誘炳千刃相談，被韓立紫言鼎困住"
   }
  ]
 },
 {
  "id": "羽仙子",
  "name": "羽仙子",
  "aliases": [
   "嬌小女子"
  ],
  "faction": "聖族（冥羅聖祖旁系後人）",
  "importance": "major",
  "bio": "以粉色霧氣幻化四臂魔猿圍攻銀光仙子，搭档冷刃壓制二女；血光降臨後被派去追殺銀光仙子。",
  "firstChapter": 1905,
  "canonFate": "以粉色霧氣幻化四臂魔猿圍攻銀光仙子，搭档冷刃壓制二女；血光降臨後被派去追殺銀光仙子。",
  "chronicle": [
   {
    "fromChapter": 1905,
    "toChapter": 1934,
    "locationId": "魔界",
    "realm": "合體初期",
    "status": "alive",
    "activity": "以粉色霧氣幻化四臂魔猿圍攻銀光仙子，搭档冷刃壓制二女；血光降臨後被派去追殺銀光仙子。"
   }
  ]
 },
 {
  "id": "老嫗",
  "name": "老嫗",
  "aliases": [],
  "faction": "角蚩族",
  "importance": "major",
  "bio": "角蚩族追兵，持有金色法陣畫軸，最終被韓立所化大鵬雙爪撕裂。",
  "firstChapter": 1568,
  "canonFate": "被韓立鯤鵬變殺死",
  "chronicle": [
   {
    "fromChapter": 1568,
    "toChapter": 1597,
    "locationId": "天淵城",
    "realm": "煉虛（上族七八階）",
    "status": "dead",
    "activity": "角蚩族追兵，持有金色法陣畫軸，最終被韓立所化大鵬雙爪撕裂。"
   }
  ]
 },
 {
  "id": "至木靈嬰",
  "name": "至木靈嬰",
  "aliases": [
   "小人兒",
   "姥姥",
   "女童"
  ],
  "faction": "魔道御靈宗",
  "importance": "major",
  "bio": "御靈宗「至木靈嬰」，能吞噬修士生魂增長修為，免疫飛劍和辟邪神雷攻擊但無法抵禦其禁錮特性，被韓立以辟邪神雷金網封印于玉盒中",
  "firstChapter": 626,
  "canonFate": "被韓立以辟邪神雷金網生擒，封入玉盒",
  "chronicle": [
   {
    "fromChapter": 626,
    "toChapter": 655,
    "locationId": "天南",
    "realm": "元嬰初期（妖嬰形態）",
    "status": "alive",
    "activity": "御靈宗「至木靈嬰」，能吞噬修士生魂增長修為，免疫飛劍和辟邪神雷攻擊但無法抵禦其禁錮特性，被韓立以辟邪"
   }
  ]
 },
 {
  "id": "血甲傀儡",
  "name": "血甲傀儡",
  "aliases": [
   "蜉蝣族附神傀儡"
  ],
  "faction": "蜉蝣族",
  "importance": "major",
  "bio": "向姜前輩求助以小神巢廢品換取五龍鍘借用，召喚本體降臨冥河之地，以小神巢蟲海圍攻六足三妖王。",
  "firstChapter": 1508,
  "canonFate": "向姜前輩求助以小神巢廢品換取五龍鍘借用，召喚本體降臨冥河之地，以小神巢蟲海圍攻六足三妖王。",
  "chronicle": [
   {
    "fromChapter": 1508,
    "toChapter": 1537,
    "locationId": "冥河之地",
    "realm": "合體級（傀儡）",
    "status": "alive",
    "activity": "向姜前輩求助以小神巢廢品換取五龍鍘借用，召喚本體降臨冥河之地，以小神巢蟲海圍攻六足三妖王。"
   }
  ]
 },
 {
  "id": "血光",
  "name": "血光",
  "aliases": [
   "血袍少年",
   "血光圣祖"
  ],
  "faction": "魔族聖族",
  "importance": "major",
  "bio": "本弧中三大化身盡皆隕落、下令對天渊城展開圍攻，末章召來第一魔尊匈某準備應對韓立",
  "firstChapter": 1965,
  "canonFate": "三大化身全部隕落",
  "chronicle": [
   {
    "fromChapter": 1965,
    "toChapter": 1994,
    "locationId": "魔界",
    "realm": "魔族圣祖（化身降臨）",
    "status": "dead",
    "activity": "本弧中三大化身盡皆隕落、下令對天渊城展開圍攻，末章召來第一魔尊匈某準備應對韓立"
   }
  ]
 },
 {
  "id": "血光圣祖",
  "name": "血光圣祖",
  "aliases": [
   "血光"
  ],
  "faction": "魔界",
  "importance": "major",
  "bio": "率本體及兩大化身在沉水鎮截殺韓立，重傷後逃走，隨後被車騎恭、風邪趁機奪舍斬殺，元嬰被奪。",
  "firstChapter": 2115,
  "canonFate": "本弧內被車騎恭、風邪殺死，元嬰被囚魔鼎",
  "chronicle": [
   {
    "fromChapter": 2115,
    "toChapter": 2144,
    "locationId": "魔界",
    "realm": "大乘（圣祖）",
    "status": "dead",
    "activity": "率本體及兩大化身在沉水鎮截殺韓立，重傷後逃走，隨後被車騎恭、風邪趁機奪舍斬殺，元嬰被奪。"
   }
  ]
 },
 {
  "id": "血光聖祖化身",
  "name": "血光聖祖化身",
  "aliases": [
   "血袍少年",
   "血光道友"
  ],
  "faction": "魔族血光聖祖",
  "importance": "major",
  "bio": "統領魔族大軍攻天淵城，被谷長老等以太極圖困住，骷髅本體遭韓立噬金蟲吞滅，元嬰盡滅。",
  "firstChapter": 1995,
  "canonFate": "被噬金蟲吞滅，元嬰同滅，化身徹底隕落",
  "chronicle": [
   {
    "fromChapter": 1995,
    "toChapter": 2024,
    "locationId": "天淵城",
    "realm": "合體後期（化身）",
    "status": "dead",
    "activity": "統領魔族大軍攻天淵城，被谷長老等以太極圖困住，骷髅本體遭韓立噬金蟲吞滅，元嬰盡滅。"
   }
  ]
 },
 {
  "id": "血袍者",
  "name": "血袍者",
  "aliases": [],
  "faction": "地淵",
  "importance": "major",
  "bio": "地淵深層神秘人，以銅鏡遙視韓立行蹤，企圖將韓立神魂作為禮物送給「鬼婆子」以換取血魚。",
  "firstChapter": 1418,
  "canonFate": "地淵深層神秘人，以銅鏡遙視韓立行蹤，企圖將韓立神魂作為禮物送給「鬼婆子」以換取血魚。",
  "chronicle": [
   {
    "fromChapter": 1418,
    "toChapter": 1447,
    "locationId": "地淵",
    "realm": "未明",
    "status": "alive",
    "activity": "地淵深層神秘人，以銅鏡遙視韓立行蹤，企圖將韓立神魂作為禮物送給「鬼婆子」以換取血魚。"
   }
  ]
 },
 {
  "id": "血痣青年",
  "name": "血痣青年",
  "aliases": [
   "隴家公子"
  ],
  "faction": "隴家（真靈世家）",
  "importance": "major",
  "bio": "隴家公子，體內真龍血脈，藉拍賣壓軸三件寶物（墨麒麟鱗片、平海戈、陰陽化極訣）引誘各真靈世家子弟現身，設局勾引天凰血脈女修。",
  "firstChapter": 1326,
  "canonFate": "隴家公子，體內真龍血脈，藉拍賣壓軸三件寶物（墨麒麟鱗片、平海戈、陰陽化極訣）引誘各真靈世家子弟現身，設局勾引天凰血脈女修。",
  "chronicle": [
   {
    "fromChapter": 1326,
    "toChapter": 1355,
    "locationId": "風元大陸",
    "realm": "不詳",
    "status": "alive",
    "activity": "隴家公子，體內真龍血脈，藉拍賣壓軸三件寶物（墨麒麟鱗片、平海戈、陰陽化極訣）引誘各真靈世家子弟現身，"
   }
  ]
 },
 {
  "id": "血影",
  "name": "血影",
  "aliases": [],
  "faction": "邪魔類存在",
  "importance": "major",
  "bio": "吞噬向之禮與呼老魔元神合為一體，以向之禮身份潛伏，以巨靈符灰白光絲癱瘓韓立後發動奇襲。",
  "firstChapter": 1748,
  "canonFate": "被韓立梵聖金身所化金色大手擒住，噬靈真火焚滅。",
  "chronicle": [
   {
    "fromChapter": 1748,
    "toChapter": 1754,
    "locationId": "天淵城",
    "realm": "不明（附體存在）",
    "status": "alive",
    "activity": "吞噬向之禮與呼老魔元神合為一體，以向之禮身份潛伏，以巨靈符灰白光絲癱瘓韓立後發動奇襲。"
   }
  ]
 },
 {
  "id": "血影子",
  "name": "血影子",
  "aliases": [
   "血影",
   "神秘修煉者"
  ],
  "faction": "未知",
  "importance": "major",
  "bio": "在血域出沒，先前擊敗血合五子并控制其為血肉傀儡，趁巫靈三聖失去肉身時收割元嬰，欲馴化血煞屍。",
  "firstChapter": 2356,
  "canonFate": "進入血湖追擊血煞屍",
  "chronicle": [
   {
    "fromChapter": 2356,
    "toChapter": 2385,
    "locationId": "靈界",
    "realm": "（強大血神之術修煉者）",
    "status": "alive",
    "activity": "在血域出沒，先前擊敗血合五子并控制其為血肉傀儡，趁巫靈三聖失去肉身時收割元嬰，欲馴化血煞屍。"
   }
  ]
 },
 {
  "id": "西門長老",
  "name": "西門長老",
  "aliases": [
   "西門老者"
  ],
  "faction": "星宮",
  "importance": "major",
  "bio": "昔年在虛天殿中差點以飛劍穿韓立心臟的執法長老，本弧被韓立借人形傀儡秘密誅殺，元神命燈熄滅。",
  "firstChapter": 1185,
  "canonFate": "被韓立遣人形傀儡密殺",
  "chronicle": [
   {
    "fromChapter": 1185,
    "toChapter": 1214,
    "locationId": "虛天殿",
    "realm": "元嬰初期",
    "status": "alive",
    "activity": "昔年在虛天殿中差點以飛劍穿韓立心臟的執法長老，本弧被韓立借人形傀儡秘密誅殺，元神命燈熄滅。"
   }
  ]
 },
 {
  "id": "冷刃",
  "name": "冷刃",
  "aliases": [
   "白袍少年"
  ],
  "faction": "聖族冰靈部（雪天聖祖嫡系後人）",
  "importance": "major",
  "bio": "神通以極寒飛刀為主，可凝聚無窮飛刀，與韓立激戰中被靈漩邪光偷襲重創中毒；後被命令追殺林鸾。",
  "firstChapter": 1905,
  "canonFate": "被靈漩邪光毒傷，但以丹藥壓制未死",
  "chronicle": [
   {
    "fromChapter": 1905,
    "toChapter": 1934,
    "locationId": "魔界",
    "realm": "合體中期",
    "status": "dead",
    "activity": "神通以極寒飛刀為主，可凝聚無窮飛刀，與韓立激戰中被靈漩邪光偷襲重創中毒；後被命令追殺林鸾。"
   }
  ]
 },
 {
  "id": "冷道士",
  "name": "冷道士",
  "aliases": [
   "中年道士",
   "冷兄"
  ],
  "faction": "獸尊殿",
  "importance": "major",
  "bio": "化形魔尊（虎首），兽尊殿長老；持追影蟲追蹤韓立，攔截後以洞漩金光被折服，如實告知受趙家雇佣之事。",
  "firstChapter": 2055,
  "canonFate": "化形魔尊（虎首），兽尊殿長老；持追影蟲追蹤韓立，攔截後以洞漩金光被折服，如實告知受趙家雇佣之事。",
  "chronicle": [
   {
    "fromChapter": 2055,
    "toChapter": 2084,
    "locationId": "魔界",
    "realm": "合體期",
    "status": "alive",
    "activity": "化形魔尊（虎首），兽尊殿長老；持追影蟲追蹤韓立，攔截後以洞漩金光被折服，如實告知受趙家雇佣之事。"
   }
  ]
 },
 {
  "id": "吞天",
  "name": "吞天",
  "aliases": [],
  "faction": "魔族",
  "importance": "major",
  "bio": "本弧乘百丈巨舟在空間通道中攔截韩立，以白骨巨爪出手，最終判斷追擊代價過大而放行；後文率弧月飛車隊潛行奔木棉城欲毀聖樹。",
  "firstChapter": 2145,
  "canonFate": "本弧乘百丈巨舟在空間通道中攔截韩立，以白骨巨爪出手，最終判斷追擊代價過大而放行；後文率弧月飛車隊潛行奔木棉城欲毀聖樹。",
  "chronicle": [
   {
    "fromChapter": 2145,
    "toChapter": 2174,
    "locationId": "魔界",
    "realm": "大乘期（魔族聖祖）",
    "status": "alive",
    "activity": "本弧乘百丈巨舟在空間通道中攔截韩立，以白骨巨爪出手，最終判斷追擊代價過大而放行；後文率弧月飛車隊潛行"
   }
  ]
 },
 {
  "id": "吞天大人",
  "name": "吞天大人",
  "aliases": [
   "吞天"
  ],
  "faction": "魔族（聖族）",
  "importance": "major",
  "bio": "未直接登場，由其他魔族口中提及。成功潛入木棉城聖地，摧毀木族聖樹並殺死木族大長老，是整場魔界之戰的幕後決策核心。",
  "firstChapter": 2175,
  "canonFate": "未直接登場，由其他魔族口中提及。成功潛入木棉城聖地，摧毀木族聖樹並殺死木族大長老，是整場魔界之戰的幕後決策核心。",
  "chronicle": [
   {
    "fromChapter": 2175,
    "toChapter": 2175,
    "locationId": "魔界",
    "realm": "大乘期（魔族頂尖存在，推測）",
    "status": "alive",
    "activity": "未直接登場，由其他魔族口中提及。成功潛入木棉城聖地，摧毀木族聖樹並殺死木族大長老，是整場魔界之戰的幕"
   }
  ]
 },
 {
  "id": "吳劍鳴",
  "name": "吳劍鳴",
  "aliases": [],
  "faction": "獨霸山莊",
  "importance": "major",
  "bio": "獨霸山莊莊主歐陽飛天之七弟子，假冒墨大夫關門弟子混入墨府，意圖迎娶墨玉珠以巧取財產",
  "firstChapter": 100,
  "canonFate": "本弧中被墨府識破，遭嚴氏以拖延手段應付，其師歐陽飛天被韓立誅殺",
  "chronicle": [
   {
    "fromChapter": 100,
    "toChapter": 129,
    "locationId": "黃楓谷",
    "realm": "凡人",
    "status": "alive",
    "activity": "獨霸山莊莊主歐陽飛天之七弟子，假冒墨大夫關門弟子混入墨府，意圖迎娶墨玉珠以巧取財產"
   }
  ]
 },
 {
  "id": "呂天蒙",
  "name": "呂天蒙",
  "aliases": [],
  "faction": "靈獸山",
  "importance": "major",
  "bio": "守礦領隊；地下洞穴中趁機祭出符寶青尺突襲同伴意圖獨吞大挪移令，卻被脫困的血蜘蛛從地下衝出腰斬。",
  "firstChapter": 262,
  "canonFate": "被血蜘蛛腰斬，本弧死亡",
  "chronicle": [
   {
    "fromChapter": 262,
    "toChapter": 291,
    "locationId": "越京",
    "realm": "筑基後期",
    "status": "dead",
    "activity": "守礦領隊；地下洞穴中趁機祭出符寶青尺突襲同伴意圖獨吞大挪移令，卻被脫困的血蜘蛛從地下衝出腰斬。"
   }
  ]
 },
 {
  "id": "巫靈三聖",
  "name": "巫靈三聖",
  "aliases": [
   "第三老",
   "吳姓老者",
   "余姓老者"
  ],
  "faction": "西北黑焉森林（巫道修士）",
  "importance": "major",
  "bio": "憑古碑線索闖入血域尋天巫衣缽，施展巫道神通後得到天巫玉牌，觸發血煞屍變，第三老被血煞屍吞噬，另兩位元嬰被血影子擒殺，三聖全部隕落。",
  "firstChapter": 2356,
  "canonFate": "全部隕落於血域血湖",
  "chronicle": [
   {
    "fromChapter": 2356,
    "toChapter": 2385,
    "locationId": "靈界",
    "realm": "大乘期",
    "status": "dead",
    "activity": "憑古碑線索闖入血域尋天巫衣缽，施展巫道神通後得到天巫玉牌，觸發血煞屍變，第三老被血煞屍吞噬，另兩位元"
   }
  ]
 },
 {
  "id": "李破雲",
  "name": "李破雲",
  "aliases": [
   "大內總管",
   "黑煞教教主"
  ],
  "faction": "黑煞教",
  "importance": "major",
  "bio": "黑煞教教主真實身份為越國皇宮大内太監總管，正在皇宮假山下閉關以陰穴之地修煉黑煞修羅功，越國皇帝已是其傀儡。",
  "firstChapter": 292,
  "canonFate": "黑煞教教主真實身份為越國皇宮大内太監總管，正在皇宮假山下閉關以陰穴之地修煉黑煞修羅功，越國皇帝已是其傀儡。",
  "chronicle": [
   {
    "fromChapter": 292,
    "toChapter": 321,
    "locationId": "越國",
    "realm": "筑基後期（推斷）",
    "status": "alive",
    "activity": "黑煞教教主真實身份為越國皇宮大内太監總管，正在皇宮假山下閉關以陰穴之地修煉黑煞修羅功，越國皇帝已是其"
   }
  ]
 },
 {
  "id": "杜宇",
  "name": "杜宇",
  "aliases": [],
  "faction": "圣島",
  "importance": "major",
  "bio": "圣岛派來索要韩立弟子海月天的使者，修儒家浩然蕩邪功、可幻化浩然聖像，持通天靈寶玉書和玄天殘片至寶；被韩立以大乘神通一擊制服，兩件至寶被奪。",
  "firstChapter": 2176,
  "canonFate": "一擊而潰，兩件至寶被韩立暫扣，狼狽離開天渊城",
  "chronicle": [
   {
    "fromChapter": 2176,
    "toChapter": 2205,
    "locationId": "靈界",
    "realm": "合體後期大成",
    "status": "alive",
    "activity": "圣岛派來索要韩立弟子海月天的使者，修儒家浩然蕩邪功、可幻化浩然聖像，持通天靈寶玉書和玄天殘片至寶；被"
   }
  ]
 },
 {
  "id": "狂沙上人",
  "name": "狂沙上人",
  "aliases": [],
  "faction": "方尖山二妖",
  "importance": "major",
  "bio": "以落魂沙大陣圍困炫烨王，受玉華夫人援兵消息衝擊後遁走",
  "firstChapter": 916,
  "canonFate": "以落魂沙大陣圍困炫烨王，受玉華夫人援兵消息衝擊後遁走",
  "chronicle": [
   {
    "fromChapter": 916,
    "toChapter": 945,
    "locationId": "大晉",
    "realm": "元嬰期",
    "status": "alive",
    "activity": "以落魂沙大陣圍困炫烨王，受玉華夫人援兵消息衝擊後遁走"
   }
  ]
 },
 {
  "id": "禿眉老者",
  "name": "禿眉老者",
  "aliases": [
   "鷹前輩"
  ],
  "faction": "天瀾聖殿",
  "importance": "major",
  "bio": "駐守驻地的突兀元嬰仙師，神識掃過車隊察覺異常，但因顧慮性命未敢出手追查韓立。",
  "firstChapter": 886,
  "canonFate": "駐守驻地的突兀元嬰仙師，神識掃過車隊察覺異常，但因顧慮性命未敢出手追查韓立。",
  "chronicle": [
   {
    "fromChapter": 886,
    "toChapter": 915,
    "locationId": "大晉",
    "realm": "元嬰期",
    "status": "alive",
    "activity": "駐守驻地的突兀元嬰仙師，神識掃過車隊察覺異常，但因顧慮性命未敢出手追查韓立。"
   }
  ]
 },
 {
  "id": "禿頭尊者",
  "name": "禿頭尊者",
  "aliases": [
   "米尊者",
   "米某"
  ],
  "faction": "血光聖祖麾下魔族",
  "importance": "major",
  "bio": "持天鬼門（修魔天鬼門），以獻祭一臂一腿代價召出四只天鬼，被銀光仙子晶罩困住；脫困後企圖逃跑，被韓立四翅巨鵬追上斬殺，在本弧内陨落。",
  "firstChapter": 1875,
  "canonFate": "被韓立擊殺",
  "chronicle": [
   {
    "fromChapter": 1875,
    "toChapter": 1904,
    "locationId": "魔界",
    "realm": "合體初期",
    "status": "dead",
    "activity": "持天鬼門（修魔天鬼門），以獻祭一臂一腿代價召出四只天鬼，被銀光仙子晶罩困住；脫困後企圖逃跑，被韓立四"
   }
  ]
 },
 {
  "id": "虬鬚大漢",
  "name": "虬鬚大漢",
  "aliases": [],
  "faction": "不明（極大勢力本體）",
  "importance": "major",
  "bio": "助六翼修煉逆靈真陰大法，持有金闕玉書內頁，以天瀾分身潛伏人族；真實身份被六翼猜測七八分，對韩立存有算計之心但暫時無力出手。",
  "firstChapter": 1815,
  "canonFate": "助六翼修煉逆靈真陰大法，持有金闕玉書內頁，以天瀾分身潛伏人族；真實身份被六翼猜測七八分，對韩立存有算計之心但暫時無力出手。",
  "chronicle": [
   {
    "fromChapter": 1815,
    "toChapter": 1844,
    "locationId": "魔界",
    "realm": "不明（大乘級以上）",
    "status": "alive",
    "activity": "助六翼修煉逆靈真陰大法，持有金闕玉書內頁，以天瀾分身潛伏人族；真實身份被六翼猜測七八分，對韩立存有算"
   }
  ]
 },
 {
  "id": "言某",
  "name": "言某",
  "aliases": [
   "武癡"
  ],
  "faction": "巨劍門",
  "importance": "major",
  "bio": "赤腳武痴，執銀色巨劍，追求法器與武技的極致對決，拒絕和談逼韓立出手，弧段截止於交戰之中。",
  "firstChapter": 172,
  "canonFate": "赤腳武痴，執銀色巨劍，追求法器與武技的極致對決，拒絕和談逼韓立出手，弧段截止於交戰之中。",
  "chronicle": [
   {
    "fromChapter": 172,
    "toChapter": 201,
    "locationId": "越京",
    "realm": "煉氣期（高強）",
    "status": "alive",
    "activity": "赤腳武痴，執銀色巨劍，追求法器與武技的極致對決，拒絕和談逼韓立出手，弧段截止於交戰之中。"
   }
  ]
 },
 {
  "id": "赤火老怪",
  "name": "赤火老怪",
  "aliases": [
   "鳩面老者",
   "赤老怪",
   "赤火"
  ],
  "faction": "元龜島",
  "importance": "major",
  "bio": "修煉葵水魔功的惡名修士，受紫靈仙子重金邀請助陣，實際為極陰老祖所用，臨陣倒戈偷襲孫師叔；事後以二十名女修作交換從極陰老祖處獲得報酬",
  "firstChapter": 394,
  "canonFate": "修煉葵水魔功的惡名修士，受紫靈仙子重金邀請助陣，實際為極陰老祖所用，臨陣倒戈偷襲孫師叔；事後以二十名女修作交換從極陰老祖處獲得報酬",
  "chronicle": [
   {
    "fromChapter": 394,
    "toChapter": 423,
    "locationId": "亂星海",
    "realm": "結丹後期",
    "status": "alive",
    "activity": "修煉葵水魔功的惡名修士，受紫靈仙子重金邀請助陣，實際為極陰老祖所用，臨陣倒戈偷襲孫師叔；事後以二十名"
   }
  ]
 },
 {
  "id": "赤雷老祖",
  "name": "赤雷老祖",
  "aliases": [],
  "faction": "血天大陸（血道修士）",
  "importance": "major",
  "bio": "以赤色雷光强行破入天鼎宮，對血魄強行索要鑰匙與宝物，被噬金蟲王擊殺元嬰。",
  "firstChapter": 2356,
  "canonFate": "被噬金蟲王斬滅元嬰，隕落於天鼎宮",
  "chronicle": [
   {
    "fromChapter": 2356,
    "toChapter": 2385,
    "locationId": "靈界",
    "realm": "大乘期",
    "status": "dead",
    "activity": "以赤色雷光强行破入天鼎宮，對血魄強行索要鑰匙與宝物，被噬金蟲王擊殺元嬰。"
   }
  ]
 },
 {
  "id": "車老妖",
  "name": "車老妖",
  "aliases": [
   "幼童",
   "萬妖谷谷主",
   "車兄"
  ],
  "faction": "萬妖谷",
  "importance": "major",
  "bio": "萬妖谷谷主，以木芝化身（幼童形態）率衆攻打小極宮，持萬妖幡；與韓立在幡中及主殿激鬥，目標是尋找飛升靈界的空間節點；被五子同心魔及韓立聯手壓制但化身未滅。",
  "firstChapter": 1096,
  "canonFate": "本弧化身存活，仍在虛靈殿",
  "chronicle": [
   {
    "fromChapter": 1096,
    "toChapter": 1124,
    "locationId": "靈界",
    "realm": "十級（化身，真身不知）",
    "status": "alive",
    "activity": "萬妖谷谷主，以木芝化身（幼童形態）率衆攻打小極宮，持萬妖幡；與韓立在幡中及主殿激鬥，目標是尋找飛升靈"
   }
  ]
 },
 {
  "id": "辛某（赤足怪人）",
  "name": "辛某（赤足怪人）",
  "aliases": [
   "辛兄"
  ],
  "faction": "角蚩族",
  "importance": "major",
  "bio": "角蚩族追兵中最強者，持黑幡旗施展鬼霧，最終自爆肉身化血影逃亡，被甲天木人形傀儡以辟邪神雷斬滅。",
  "firstChapter": 1568,
  "canonFate": "被辟邪神雷消滅元神",
  "chronicle": [
   {
    "fromChapter": 1568,
    "toChapter": 1597,
    "locationId": "天淵城",
    "realm": "煉虛中期",
    "status": "alive",
    "activity": "角蚩族追兵中最強者，持黑幡旗施展鬼霧，最終自爆肉身化血影逃亡，被甲天木人形傀儡以辟邪神雷斬滅。"
   }
  ]
 },
 {
  "id": "呼大仙師",
  "name": "呼大仙師",
  "aliases": [],
  "faction": "突兀族",
  "importance": "major",
  "bio": "以「大五行擒仙手」偷襲重傷韓立，是韓立煞氣提早反噬的間接原因。",
  "firstChapter": 856,
  "canonFate": "以「大五行擒仙手」偷襲重傷韓立，是韓立煞氣提早反噬的間接原因。",
  "chronicle": [
   {
    "fromChapter": 856,
    "toChapter": 885,
    "locationId": "大晉",
    "realm": "元嬰後期（突兀族四大仙師之一）",
    "status": "alive",
    "activity": "以「大五行擒仙手」偷襲重傷韓立，是韓立煞氣提早反噬的間接原因。"
   }
  ]
 },
 {
  "id": "房宗主",
  "name": "房宗主",
  "aliases": [
   "黑袍男子"
  ],
  "faction": "陰羅宗（大晉國魔宗）",
  "importance": "major",
  "bio": "阴罗宗宗主，以十名血尸自爆化血羅罩困住天南十名出戰修士，並攜铜甲尸兵參戰",
  "firstChapter": 746,
  "canonFate": "阴罗宗宗主，以十名血尸自爆化血羅罩困住天南十名出戰修士，並攜铜甲尸兵參戰",
  "chronicle": [
   {
    "fromChapter": 746,
    "toChapter": 775,
    "locationId": "天南",
    "realm": "元嬰後期（疑似）",
    "status": "alive",
    "activity": "阴罗宗宗主，以十名血尸自爆化血羅罩困住天南十名出戰修士，並攜铜甲尸兵參戰"
   }
  ]
 },
 {
  "id": "於洪",
  "name": "於洪",
  "aliases": [],
  "faction": "鬼靈門（碎魂真人門下弟子，六師弟）",
  "importance": "major",
  "bio": "無意中發現韓立洞府動靜，被韓立殺滅。",
  "firstChapter": 656,
  "canonFate": "被韓立誅殺",
  "chronicle": [
   {
    "fromChapter": 656,
    "toChapter": 685,
    "locationId": "天南",
    "realm": "結丹期",
    "status": "alive",
    "activity": "無意中發現韓立洞府動靜，被韓立殺滅。"
   }
  ]
 },
 {
  "id": "易某",
  "name": "易某",
  "aliases": [
   "光頭大漢",
   "彭易雙兇之二弟"
  ],
  "faction": "散修（惡名昭彰）",
  "importance": "major",
  "bio": "彭易雙凶之一，欲逃脫時被韓立一口飛劍擊殺",
  "firstChapter": 626,
  "canonFate": "被韓立飛劍擊殺",
  "chronicle": [
   {
    "fromChapter": 626,
    "toChapter": 655,
    "locationId": "天南",
    "realm": "筑基中期",
    "status": "dead",
    "activity": "彭易雙凶之一，欲逃脫時被韓立一口飛劍擊殺"
   }
  ]
 },
 {
  "id": "松紋道士",
  "name": "松紋道士",
  "aliases": [
   "青紋道士"
  ],
  "faction": "臥牛山青牛觀",
  "importance": "major",
  "bio": "表面熱情帶領散修團體，實為暗中追蹤並派人偷襲韓立的幕後黑手",
  "firstChapter": 130,
  "canonFate": "弧內未被韓立揭穿，仍下落不明",
  "chronicle": [
   {
    "fromChapter": 130,
    "toChapter": 159,
    "locationId": "黃楓谷",
    "realm": "高於韓立九層，未及蓝衣人境界",
    "status": "alive",
    "activity": "表面熱情帶領散修團體，實為暗中追蹤並派人偷襲韓立的幕後黑手"
   }
  ]
 },
 {
  "id": "林姓女修（婦人）",
  "name": "林姓女修（婦人）",
  "aliases": [],
  "faction": "鬼靈門（碎魂真人門下）",
  "importance": "major",
  "bio": "修火風遁術，遁速驚人，最終被韓立青色劍氣洞穿要害而亡。",
  "firstChapter": 656,
  "canonFate": "被韓立誅殺",
  "chronicle": [
   {
    "fromChapter": 656,
    "toChapter": 685,
    "locationId": "天南",
    "realm": "結丹初期",
    "status": "alive",
    "activity": "修火風遁術，遁速驚人，最終被韓立青色劍氣洞穿要害而亡。"
   }
  ]
 },
 {
  "id": "林師兄",
  "name": "林師兄",
  "aliases": [],
  "faction": "千竹教（前少教主）",
  "importance": "major",
  "bio": "千竹教前少教主之子，詐死逃至越國，因大衍訣蠢動欲報復，被千竹教追殺中毒，元神逃體後試圖奪舍韓立，反被韓立捏碎元神。",
  "firstChapter": 232,
  "canonFate": "元神被韓立摧毀，本弧身亡",
  "chronicle": [
   {
    "fromChapter": 232,
    "toChapter": 261,
    "locationId": "越國",
    "realm": "築基中期（大衍訣第三層）",
    "status": "alive",
    "activity": "千竹教前少教主之子，詐死逃至越國，因大衍訣蠢動欲報復，被千竹教追殺中毒，元神逃體後試圖奪舍韓立，反被"
   }
  ]
 },
 {
  "id": "金甲傀儡",
  "name": "金甲傀儡",
  "aliases": [
   "蜉蝣族使者",
   "血甲傀儡（偽裝）"
  ],
  "faction": "蜉蝣族",
  "importance": "major",
  "bio": "蜉蝣族金蜉級存在附身的高階傀儡；向洞中「姜前輩」借得通天靈寶五龍鍘；以五龍鍘斬殺金靈、地血分身等人，偷襲木青；最終被韓立的九宮天乾符配合啜魂獸困住。",
  "firstChapter": 1478,
  "canonFate": "被九宮天乾符困入光陣",
  "chronicle": [
   {
    "fromChapter": 1478,
    "toChapter": 1507,
    "locationId": "天淵城",
    "realm": "金蜉級（相當於合體期）",
    "status": "alive",
    "activity": "蜉蝣族金蜉級存在附身的高階傀儡；向洞中「姜前輩」借得通天靈寶五龍鍘；以五龍鍘斬殺金靈、地血分身等人，"
   }
  ]
 },
 {
  "id": "金角青年",
  "name": "金角青年",
  "aliases": [],
  "faction": "角蚩族",
  "importance": "major",
  "bio": "額頭生有三只金色短角，率十餘角蚩族人出現於遺址廢墟，以黑鉢布幻術遮蔽行蹤",
  "firstChapter": 1688,
  "canonFate": "額頭生有三只金色短角，率十餘角蚩族人出現於遺址廢墟，以黑鉢布幻術遮蔽行蹤",
  "chronicle": [
   {
    "fromChapter": 1688,
    "toChapter": 1717,
    "locationId": "天淵城",
    "realm": "凡人",
    "status": "alive",
    "activity": "額頭生有三只金色短角，率十餘角蚩族人出現於遺址廢墟，以黑鉢布幻術遮蔽行蹤"
   }
  ]
 },
 {
  "id": "金花老祖",
  "name": "金花老祖",
  "aliases": [],
  "faction": "散修",
  "importance": "major",
  "bio": "應蔡師妹之邀謀奪蛮胡子洞府寶物，與韓立交手後被紫羅極火大手擒殺，元嬰亦被滅。",
  "firstChapter": 1155,
  "canonFate": "本弧死亡，被韓立以紫羅極火滅殺。",
  "chronicle": [
   {
    "fromChapter": 1155,
    "toChapter": 1184,
    "locationId": "天南",
    "realm": "元嬰初期",
    "status": "dead",
    "activity": "應蔡師妹之邀謀奪蛮胡子洞府寶物，與韓立交手後被紫羅極火大手擒殺，元嬰亦被滅。"
   }
  ]
 },
 {
  "id": "金袍青年",
  "name": "金袍青年",
  "aliases": [
   "仙界使者"
  ],
  "faction": "仙界",
  "importance": "major",
  "bio": "自稱仙界人，持攝靈天網仿製品屠滅靈族祖雲山成員，並俘获三名太上長老；後被靈族以封仙珠和困魔大陣困住，靈族長老揚言煉製仙魂丹。",
  "firstChapter": 1995,
  "canonFate": "本弧末被靈族困魔大陣和封仙珠同時困住",
  "chronicle": [
   {
    "fromChapter": 1995,
    "toChapter": 2024,
    "locationId": "仙界",
    "realm": "金仙級（受壓制）",
    "status": "alive",
    "activity": "自稱仙界人，持攝靈天網仿製品屠滅靈族祖雲山成員，並俘获三名太上長老；後被靈族以封仙珠和困魔大陣困住，"
   }
  ]
 },
 {
  "id": "金葫魔尊",
  "name": "金葫魔尊",
  "aliases": [
   "金葫上人"
  ],
  "faction": "散修",
  "importance": "major",
  "bio": "羊老二的盟友，背負金色葫蘆，施展麒麟虛影助逃，被豹麟獸追殺。",
  "firstChapter": 2025,
  "canonFate": "被豹麟獸追殺，本弧死亡",
  "chronicle": [
   {
    "fromChapter": 2025,
    "toChapter": 2054,
    "locationId": "魔界",
    "realm": "合體中期",
    "status": "dead",
    "activity": "羊老二的盟友，背負金色葫蘆，施展麒麟虛影助逃，被豹麟獸追殺。"
   }
  ]
 },
 {
  "id": "青甲魔族（三目魔蟒族）",
  "name": "青甲魔族（三目魔蟒族）",
  "aliases": [
   "衛兄"
  ],
  "faction": "三目魔蟒族",
  "importance": "major",
  "bio": "騎乘三百餘丈大本命神蟒（已再次進階），與魂蟲族聯手掃蕩靈界。",
  "firstChapter": 1875,
  "canonFate": "騎乘三百餘丈大本命神蟒（已再次進階），與魂蟲族聯手掃蕩靈界。",
  "chronicle": [
   {
    "fromChapter": 1875,
    "toChapter": 1904,
    "locationId": "靈界",
    "realm": "高階魔族",
    "status": "alive",
    "activity": "騎乘三百餘丈大本命神蟒（已再次進階），與魂蟲族聯手掃蕩靈界。"
   }
  ]
 },
 {
  "id": "青背蒼狼",
  "name": "青背蒼狼",
  "aliases": [],
  "faction": "萬妖谷",
  "importance": "major",
  "bio": "萬妖谷副谷主，在冰海外秘密會集冰海妖獸謀劃攻打小極宮",
  "firstChapter": 1066,
  "canonFate": "萬妖谷副谷主，在冰海外秘密會集冰海妖獸謀劃攻打小極宮",
  "chronicle": [
   {
    "fromChapter": 1066,
    "toChapter": 1095,
    "locationId": "大晉",
    "realm": "化形（化神級）",
    "status": "alive",
    "activity": "萬妖谷副谷主，在冰海外秘密會集冰海妖獸謀劃攻打小極宮"
   }
  ]
 },
 {
  "id": "青紋",
  "name": "青紋",
  "aliases": [],
  "faction": "黑煞教（四大血侍）",
  "importance": "major",
  "bio": "昔日太南會旧識、曾邀韓立同行並派人追殺其的道士，修有「青木真罩」防禦法器，與韓立激戰被巨劍術重壓幾乎擊破。",
  "firstChapter": 292,
  "canonFate": "昔日太南會旧識、曾邀韓立同行並派人追殺其的道士，修有「青木真罩」防禦法器，與韓立激戰被巨劍術重壓幾乎擊破。",
  "chronicle": [
   {
    "fromChapter": 292,
    "toChapter": 321,
    "locationId": "越京",
    "realm": "筑基中期",
    "status": "alive",
    "activity": "昔日太南會旧識、曾邀韓立同行並派人追殺其的道士，修有「青木真罩」防禦法器，與韓立激戰被巨劍術重壓幾乎"
   }
  ]
 },
 {
  "id": "青紋道士（血侍）",
  "name": "青紋道士（血侍）",
  "aliases": [],
  "faction": "黑煞教",
  "importance": "major",
  "bio": "半妖化後青光纏繞，被劉靖火鳥真寶一啄焚殺。",
  "firstChapter": 322,
  "canonFate": "本弧死亡，被真寶火鳥焚殺",
  "chronicle": [
   {
    "fromChapter": 322,
    "toChapter": 351,
    "locationId": "越京",
    "realm": "築基期（半妖化）",
    "status": "dead",
    "activity": "半妖化後青光纏繞，被劉靖火鳥真寶一啄焚殺。"
   }
  ]
 },
 {
  "id": "青針",
  "name": "青針",
  "aliases": [
   "青色巨蜂"
  ],
  "faction": "多眼魔麾下",
  "importance": "major",
  "bio": "能施展千蜂分身術化出數百魔蜂，施術後本體修為減半；在灰霧中被韓立以青竹蜂雲劍一劍兩斷，元神被元磁神光擠壓滅殺。",
  "firstChapter": 1628,
  "canonFate": "被韓立擊殺。",
  "chronicle": [
   {
    "fromChapter": 1628,
    "toChapter": 1657,
    "locationId": "天淵城",
    "realm": "煉虛中低階（高階魔蜂）",
    "status": "dead",
    "activity": "能施展千蜂分身術化出數百魔蜂，施術後本體修為減半；在灰霧中被韓立以青竹蜂雲劍一劍兩斷，元神被元磁神光"
   }
  ]
 },
 {
  "id": "青袍老者",
  "name": "青袍老者",
  "aliases": [],
  "faction": "方尖山二妖（隸屬）",
  "importance": "major",
  "bio": "藏於魔雲中偷襲韓立，反被韓立閃遁至身後，以冰焰洞穿胸膛後元嬰被金網擊滅",
  "firstChapter": 916,
  "canonFate": "本弧中被韓立擊殺",
  "chronicle": [
   {
    "fromChapter": 916,
    "toChapter": 945,
    "locationId": "大晉",
    "realm": "元嬰中期",
    "status": "dead",
    "activity": "藏於魔雲中偷襲韓立，反被韓立閃遁至身後，以冰焰洞穿胸膛後元嬰被金網擊滅"
   }
  ]
 },
 {
  "id": "奕",
  "name": "奕",
  "aliases": [
   "黑袍老者",
   "奕姓老者",
   "五色孔雀"
  ],
  "faction": "飛靈族五光一族",
  "importance": "major",
  "bio": "無意中墜入小修羅界後留下，深得修羅蛛信任，借助五口晶劍催動時間法則；與韓立正面硬碰，肉身被玄天斬靈劍轟滅，元嬰重創至半殘。",
  "firstChapter": 2266,
  "canonFate": "肉身被玄天斬靈劍摧毀，元嬰重創，由樱兒以物靈回溯施救中",
  "chronicle": [
   {
    "fromChapter": 2266,
    "toChapter": 2295,
    "locationId": "靈界",
    "realm": "大乘期",
    "status": "alive",
    "activity": "無意中墜入小修羅界後留下，深得修羅蛛信任，借助五口晶劍催動時間法則；與韓立正面硬碰，肉身被玄天斬靈劍"
   }
  ]
 },
 {
  "id": "奕姓老者",
  "name": "奕姓老者",
  "aliases": [
   "奕師伯",
   "五光族老者"
  ],
  "faction": "五光族",
  "importance": "major",
  "bio": "催動五口晶核飛劍與時間之力，後被韓立擊毀肉身，元嬰被櫻兒用牽魂幡收入，最終元嬰被煉化。",
  "firstChapter": 2296,
  "canonFate": "元嬰被牽魂幡收入後被煉化，本弧中實質隕滅",
  "chronicle": [
   {
    "fromChapter": 2296,
    "toChapter": 2325,
    "locationId": "靈界",
    "realm": "大乘期",
    "status": "dead",
    "activity": "催動五口晶核飛劍與時間之力，後被韓立擊毀肉身，元嬰被櫻兒用牽魂幡收入，最終元嬰被煉化。"
   }
  ]
 },
 {
  "id": "宣樂",
  "name": "宣樂",
  "aliases": [],
  "faction": "掩月宗",
  "importance": "major",
  "bio": "以征調令徵召韓立、指揮守礦；地下洞穴中故意放出血蜘蛛欲坐收漁利，以消息遮天鍾和輕紗欲引蜘蛛殺韓立，被韓立反制後以青元劍芒斬首。",
  "firstChapter": 262,
  "canonFate": "被韓立以青元劍芒斬首，本弧死亡",
  "chronicle": [
   {
    "fromChapter": 262,
    "toChapter": 291,
    "locationId": "越京",
    "realm": "筑基後期",
    "status": "dead",
    "activity": "以征調令徵召韓立、指揮守礦；地下洞穴中故意放出血蜘蛛欲坐收漁利，以消息遮天鍾和輕紗欲引蜘蛛殺韓立，被"
   }
  ]
 },
 {
  "id": "封嶽",
  "name": "封嶽",
  "aliases": [
   "狂人封嶽"
  ],
  "faction": "天闕堡",
  "importance": "major",
  "bio": "惡名遠播的凶徒，持符寶小刀與頂級防禦法器「黃羅傘」、踏雲靴，橫殺多寶女及黃衫師姐，最終被韓立「天雷子」化為飛灰。",
  "firstChapter": 172,
  "canonFate": "被韓立以天雷子擊殺，化為飛灰",
  "chronicle": [
   {
    "fromChapter": 172,
    "toChapter": 201,
    "locationId": "越京",
    "realm": "煉氣期第十三層頂峰",
    "status": "dead",
    "activity": "惡名遠播的凶徒，持符寶小刀與頂級防禦法器「黃羅傘」、踏雲靴，橫殺多寶女及黃衫師姐，最終被韓立「天雷子"
   }
  ]
 },
 {
  "id": "枯瘦老者（祝神師）",
  "name": "枯瘦老者（祝神師）",
  "aliases": [
   "慕蘭祝神師"
  ],
  "faction": "慕蘭族",
  "importance": "major",
  "bio": "慕蘭一方最高指揮，接獲突兀人急報後主動提出罷戰，與龍晗談判達成停戰協議",
  "firstChapter": 776,
  "canonFate": "慕蘭一方最高指揮，接獲突兀人急報後主動提出罷戰，與龍晗談判達成停戰協議",
  "chronicle": [
   {
    "fromChapter": 776,
    "toChapter": 795,
    "locationId": "天南",
    "realm": "元嬰後期",
    "status": "alive",
    "activity": "慕蘭一方最高指揮，接獲突兀人急報後主動提出罷戰，與龍晗談判達成停戰協議"
   }
  ]
 },
 {
  "id": "毒蛟",
  "name": "毒蛟",
  "aliases": [
   "武"
  ],
  "faction": "妖族（蛟龍一族）",
  "importance": "major",
  "bio": "協助風希煉製風雷翅，被韓立以噬金蟲群啃噬致死，妖魂被啼魂獸截住後收入玉瓶。",
  "firstChapter": 544,
  "canonFate": "被韓立所殺，妖魂被韓立囚禁",
  "chronicle": [
   {
    "fromChapter": 544,
    "toChapter": 573,
    "locationId": "亂星海",
    "realm": "化形初期（八級妖修）",
    "status": "alive",
    "activity": "協助風希煉製風雷翅，被韓立以噬金蟲群啃噬致死，妖魂被啼魂獸截住後收入玉瓶。"
   }
  ]
 },
 {
  "id": "炫曜王",
  "name": "炫曜王",
  "aliases": [
   "玄燁老魔",
   "炫燁王"
  ],
  "faction": "上古炫曜王古墓",
  "importance": "major",
  "bio": "盤踞雪陵山脈的萬年尸王，天尸之體即將大成，遣化身追殺韓立奪回金剛罩；中了方尖山天風真君之計離墓出手，遭圍殺。",
  "firstChapter": 886,
  "canonFate": "在弧末被天風真君等設計圍殺（結果未明）",
  "chronicle": [
   {
    "fromChapter": 886,
    "toChapter": 915,
    "locationId": "大晉",
    "realm": "萬年尸王（元嬰後期境界）",
    "status": "alive",
    "activity": "盤踞雪陵山脈的萬年尸王，天尸之體即將大成，遣化身追殺韓立奪回金剛罩；中了方尖山天風真君之計離墓出手，"
   }
  ]
 },
 {
  "id": "炳千刃",
  "name": "炳千刃",
  "aliases": [
   "血鴉城主"
  ],
  "faction": "血鴉城",
  "importance": "major",
  "bio": "血鴉城城主，昔年從雷海七煞與天房山眼皮下偷走三塊泣靈聖砖，祭有七殺血煞與黑骨魔蟲，並修有第二化身，城外被韓立以噬金蟲吞噬而亡。",
  "firstChapter": 2025,
  "canonFate": "被韓立以噬金蟲消滅元嬰，本弧死亡",
  "chronicle": [
   {
    "fromChapter": 2025,
    "toChapter": 2054,
    "locationId": "魔界",
    "realm": "合體中期",
    "status": "dead",
    "activity": "血鴉城城主，昔年從雷海七煞與天房山眼皮下偷走三塊泣靈聖砖，祭有七殺血煞與黑骨魔蟲，並修有第二化身，城"
   }
  ]
 },
 {
  "id": "紅粉骷髏（夫婦）",
  "name": "紅粉骷髏（夫婦）",
  "aliases": [],
  "faction": "魔道六宗",
  "importance": "major",
  "bio": "魔道著名結丹期夫婦修士，以天火之術伏擊黃楓谷撤退隊伍，逼迫黃師叔孤身迎戰。",
  "firstChapter": 322,
  "canonFate": "魔道著名結丹期夫婦修士，以天火之術伏擊黃楓谷撤退隊伍，逼迫黃師叔孤身迎戰。",
  "chronicle": [
   {
    "fromChapter": 322,
    "toChapter": 351,
    "locationId": "黃楓谷",
    "realm": "結丹期",
    "status": "alive",
    "activity": "魔道著名結丹期夫婦修士，以天火之術伏擊黃楓谷撤退隊伍，逼迫黃師叔孤身迎戰。"
   }
  ]
 },
 {
  "id": "英堂",
  "name": "英堂",
  "aliases": [
   "魔鷹所化黃袍人"
  ],
  "faction": "多眼魔麾下",
  "importance": "major",
  "bio": "魔鷹化形，持骨矛與金色圓盾，與五泣聯手追殺韓立，被韓立以惊神刺震暈後五色寒焰纏身、手刃，魔核被取走。",
  "firstChapter": 1628,
  "canonFate": "被韓立擊殺。",
  "chronicle": [
   {
    "fromChapter": 1628,
    "toChapter": 1657,
    "locationId": "天淵城",
    "realm": "煉虛階（高階魔鷹）",
    "status": "dead",
    "activity": "魔鷹化形，持骨矛與金色圓盾，與五泣聯手追殺韓立，被韓立以惊神刺震暈後五色寒焰纏身、手刃，魔核被取走。"
   }
  ]
 },
 {
  "id": "范夫人",
  "name": "范夫人",
  "aliases": [
   "范掌門",
   "范左使"
  ],
  "faction": "妙音門（魔道）",
  "importance": "major",
  "bio": "原妙音門左使，趁虛天殿之亂奪門，帶弟子轉移至外星海開設秘市；欲借結丹期修士之力清剿妖獸取幻夢石建傳送陣。",
  "firstChapter": 514,
  "canonFate": "原妙音門左使，趁虛天殿之亂奪門，帶弟子轉移至外星海開設秘市；欲借結丹期修士之力清剿妖獸取幻夢石建傳送陣。",
  "chronicle": [
   {
    "fromChapter": 514,
    "toChapter": 543,
    "locationId": "虛天殿",
    "realm": "築基後期",
    "status": "alive",
    "activity": "原妙音門左使，趁虛天殿之亂奪門，帶弟子轉移至外星海開設秘市；欲借結丹期修士之力清剿妖獸取幻夢石建傳送"
   }
  ]
 },
 {
  "id": "孫仙師",
  "name": "孫仙師",
  "aliases": [
   "孫某",
   "紫發美婦"
  ],
  "faction": "天瀾聖殿（外來大仙師）",
  "importance": "major",
  "bio": "紫髮美婦，雙臂各有鬼頭咬住，追擊銀月所化「韓立」，被虛假身影欺騙後折返。",
  "firstChapter": 886,
  "canonFate": "紫髮美婦，雙臂各有鬼頭咬住，追擊銀月所化「韓立」，被虛假身影欺騙後折返。",
  "chronicle": [
   {
    "fromChapter": 886,
    "toChapter": 915,
    "locationId": "大晉",
    "realm": "元嬰後期",
    "status": "alive",
    "activity": "紫髮美婦，雙臂各有鬼頭咬住，追擊銀月所化「韓立」，被虛假身影欺騙後折返。"
   }
  ]
 },
 {
  "id": "徐姓大仙師",
  "name": "徐姓大仙師",
  "aliases": [
   "突兀四大仙師之一"
  ],
  "faction": "天瀾草原突兀族",
  "importance": "major",
  "bio": "主導天澜一方追殺韓立，玉如意被三焰扇一扇震毀，以灵犀孔雀開道進入封印，在廣場對峙後追入昆吾殿。",
  "firstChapter": 1006,
  "canonFate": "主導天澜一方追殺韓立，玉如意被三焰扇一扇震毀，以灵犀孔雀開道進入封印，在廣場對峙後追入昆吾殿。",
  "chronicle": [
   {
    "fromChapter": 1006,
    "toChapter": 1035,
    "locationId": "大晉",
    "realm": "元嬰後期",
    "status": "alive",
    "activity": "主導天澜一方追殺韓立，玉如意被三焰扇一扇震毀，以灵犀孔雀開道進入封印，在廣場對峙後追入昆吾殿。"
   }
  ]
 },
 {
  "id": "徐某",
  "name": "徐某",
  "aliases": [
   "徐姓青年",
   "清秀青年"
  ],
  "faction": "天瀾聖殿（外來大仙師）",
  "importance": "major",
  "bio": "與天澜聖女聯手追殺韓立，分頭追擊韓立第二元嬰，見二元嬰遁入木中後疑惑撤退。",
  "firstChapter": 886,
  "canonFate": "與天澜聖女聯手追殺韓立，分頭追擊韓立第二元嬰，見二元嬰遁入木中後疑惑撤退。",
  "chronicle": [
   {
    "fromChapter": 886,
    "toChapter": 915,
    "locationId": "大晉",
    "realm": "元嬰後期",
    "status": "alive",
    "activity": "與天澜聖女聯手追殺韓立，分頭追擊韓立第二元嬰，見二元嬰遁入木中後疑惑撤退。"
   }
  ]
 },
 {
  "id": "殷尊者（殷姓女子）",
  "name": "殷尊者（殷姓女子）",
  "aliases": [],
  "faction": "角蚩族",
  "importance": "major",
  "bio": "角蚩族在該區域最高指揮，負責攻佔橫水城等要地，同時協助圖老者追索韓立。",
  "firstChapter": 1568,
  "canonFate": "角蚩族在該區域最高指揮，負責攻佔橫水城等要地，同時協助圖老者追索韓立。",
  "chronicle": [
   {
    "fromChapter": 1568,
    "toChapter": 1597,
    "locationId": "天淵城",
    "realm": "聖族（合體以上）",
    "status": "alive",
    "activity": "角蚩族在該區域最高指揮，負責攻佔橫水城等要地，同時協助圖老者追索韓立。"
   }
  ]
 },
 {
  "id": "涅磐聖祖",
  "name": "涅磐聖祖",
  "aliases": [
   "涅盤",
   "金袍中年人",
   "金甲化身"
  ],
  "faction": "魔族",
  "importance": "major",
  "bio": "魔界三大始祖之一、涅磐聖體的創始者；化身以偽造化露喚醒聖蟹欲殺韓立，被韓立借聖蟹反擊重創。",
  "firstChapter": 2085,
  "canonFate": "化身被聖蟹第二擊金色光柱洞穿，重創",
  "chronicle": [
   {
    "fromChapter": 2085,
    "toChapter": 2114,
    "locationId": "魔界",
    "realm": "大乘期（三大始祖之一）",
    "status": "alive",
    "activity": "魔界三大始祖之一、涅磐聖體的創始者；化身以偽造化露喚醒聖蟹欲殺韓立，被韓立借聖蟹反擊重創。"
   }
  ]
 },
 {
  "id": "烏羅王族金瞳女",
  "name": "烏羅王族金瞳女",
  "aliases": [],
  "faction": "烏羅族王族",
  "importance": "major",
  "bio": "乌罗王族成員之一，金銀雙瞳為王族特徵，持靈漩邪光潛入火陽族大殿，肉身被飛劍洞穿後元神化蜈蚣逃逸，被噬靈天火滅殺。",
  "firstChapter": 1538,
  "canonFate": "元神被噬靈天火滅殺",
  "chronicle": [
   {
    "fromChapter": 1538,
    "toChapter": 1567,
    "locationId": "天淵城",
    "realm": "化神初期",
    "status": "dead",
    "activity": "乌罗王族成員之一，金銀雙瞳為王族特徵，持靈漩邪光潛入火陽族大殿，肉身被飛劍洞穿後元神化蜈蚣逃逸，被噬"
   }
  ]
 },
 {
  "id": "烏羅王族銀瞳女",
  "name": "烏羅王族銀瞳女",
  "aliases": [],
  "faction": "烏羅族王族",
  "importance": "major",
  "bio": "乌罗王族成員之一，銀色眼珠，以蜈蚣虚影神通協同作戰，肉身被飛劍洞穿後元神化蜈蚣逃逸，被噬靈天火滅殺。",
  "firstChapter": 1538,
  "canonFate": "元神被噬靈天火滅殺",
  "chronicle": [
   {
    "fromChapter": 1538,
    "toChapter": 1567,
    "locationId": "天淵城",
    "realm": "化神初期",
    "status": "dead",
    "activity": "乌罗王族成員之一，銀色眼珠，以蜈蚣虚影神通協同作戰，肉身被飛劍洞穿後元神化蜈蚣逃逸，被噬靈天火滅殺。"
   }
  ]
 },
 {
  "id": "祝神師",
  "name": "祝神師",
  "aliases": [
   "枯瘦老者",
   "祝某"
  ],
  "faction": "慕蘭（法士）",
  "importance": "major",
  "bio": "慕蘭法士總指揮，統籌整個邊界大戰策略，與阴罗宗交涉，安排聖禽出場",
  "firstChapter": 746,
  "canonFate": "慕蘭法士總指揮，統籌整個邊界大戰策略，與阴罗宗交涉，安排聖禽出場",
  "chronicle": [
   {
    "fromChapter": 746,
    "toChapter": 775,
    "locationId": "天南",
    "realm": "元嬰後期",
    "status": "alive",
    "activity": "慕蘭法士總指揮，統籌整個邊界大戰策略，與阴罗宗交涉，安排聖禽出場"
   }
  ]
 },
 {
  "id": "翁姓漢子",
  "name": "翁姓漢子",
  "aliases": [
   "吊眉漢子",
   "翁道友"
  ],
  "faction": "翡翠蛟龍門下",
  "importance": "major",
  "bio": "師從翡翠蛟龍，覬覦韓立靈地遺寶，潛入石山莫名空間被玉骨人魔之局所困後與師門逃出。",
  "firstChapter": 1326,
  "canonFate": "師從翡翠蛟龍，覬覦韓立靈地遺寶，潛入石山莫名空間被玉骨人魔之局所困後與師門逃出。",
  "chronicle": [
   {
    "fromChapter": 1326,
    "toChapter": 1355,
    "locationId": "風元大陸",
    "realm": "化神中期",
    "status": "alive",
    "activity": "師從翡翠蛟龍，覬覦韓立靈地遺寶，潛入石山莫名空間被玉骨人魔之局所困後與師門逃出。"
   }
  ]
 },
 {
  "id": "翁某",
  "name": "翁某",
  "aliases": [
   "翁賢弟",
   "翁道友"
  ],
  "faction": "天淵城（青冥衛）",
  "importance": "major",
  "bio": "在玉闕閣強行威脅韓立讓出靈地，廣武殿爭鬥中接連祭出斷金法輪、藍晶沙、傀儡、黑狼、千魂鈴，均被韓立破解，最終認輸並被打吐血，師父為鳴老怪。",
  "firstChapter": 1296,
  "canonFate": "敗於韓立，身負內傷，師父翡翠蛟龍震怒",
  "chronicle": [
   {
    "fromChapter": 1296,
    "toChapter": 1325,
    "locationId": "風元大陸",
    "realm": "化神中期",
    "status": "alive",
    "activity": "在玉闕閣強行威脅韓立讓出靈地，廣武殿爭鬥中接連祭出斷金法輪、藍晶沙、傀儡、黑狼、千魂鈴，均被韓立破解"
   }
  ]
 },
 {
  "id": "高瘦法士",
  "name": "高瘦法士",
  "aliases": [
   "溫上師",
   "竹竿法士"
  ],
  "faction": "慕蘭族",
  "importance": "major",
  "bio": "慕蘭法士高阶修士，以隱身神識探查為主，與乐上師協同指揮破陣，在陣中與馬姓老者對戰。",
  "firstChapter": 716,
  "canonFate": "慕蘭法士高阶修士，以隱身神識探查為主，與乐上師協同指揮破陣，在陣中與馬姓老者對戰。",
  "chronicle": [
   {
    "fromChapter": 716,
    "toChapter": 745,
    "locationId": "天南",
    "realm": "元嬰期（慕蘭法士）",
    "status": "alive",
    "activity": "慕蘭法士高阶修士，以隱身神識探查為主，與乐上師協同指揮破陣，在陣中與馬姓老者對戰。"
   }
  ]
 },
 {
  "id": "乾藍冰焰修士（突厥長老）",
  "name": "乾藍冰焰修士（突厥長老）",
  "aliases": [
   "桂仙師"
  ],
  "faction": "突兀族",
  "importance": "major",
  "bio": "修煉「六魂分元術」，元嬰可分裂七份，遭遇韓立後肉身被毀，有一分元神逃脫，持有成熟體噬金蟲。",
  "firstChapter": 856,
  "canonFate": "肉身被韓立毀去，元嬰重創；成熟體噬金蟲元神被韓立以阴羅幡抽出，製成魔蟲妖尸",
  "chronicle": [
   {
    "fromChapter": 856,
    "toChapter": 885,
    "locationId": "大晉",
    "realm": "元嬰中期",
    "status": "alive",
    "activity": "修煉「六魂分元術」，元嬰可分裂七份，遭遇韓立後肉身被毀，有一分元神逃脫，持有成熟體噬金蟲。"
   }
  ]
 },
 {
  "id": "商盟影子之人",
  "name": "商盟影子之人",
  "aliases": [
   "模糊人影",
   "本盟影子"
  ],
  "faction": "赫連商盟（影子）",
  "importance": "major",
  "bio": "與明尊密謀，煉化九隻真靈元神修成「九劫滅真大法」，準備在真仙恢復全盛時一擊，以換取真魂丹飛升仙界，身份始終未露。",
  "firstChapter": 2416,
  "canonFate": "與明尊密謀，煉化九隻真靈元神修成「九劫滅真大法」，準備在真仙恢復全盛時一擊，以換取真魂丹飛升仙界，身份始終未露。",
  "chronicle": [
   {
    "fromChapter": 2416,
    "toChapter": 2420,
    "locationId": "仙界",
    "realm": "大乘期（商盟隱秘強者）",
    "status": "alive",
    "activity": "與明尊密謀，煉化九隻真靈元神修成「九劫滅真大法」，準備在真仙恢復全盛時一擊，以換取真魂丹飛升仙界，身"
   }
  ]
 },
 {
  "id": "奢",
  "name": "奢",
  "aliases": [
   "奢老鬼"
  ],
  "faction": "魔族",
  "importance": "major",
  "bio": "本弧率五名圣祖化身攻打二號陣眼，修煉血色虫影法相，被韩立梵聖法相和靈躯夾擊後洞穿心臟殞命。",
  "firstChapter": 2145,
  "canonFate": "被韓立擊殺",
  "chronicle": [
   {
    "fromChapter": 2145,
    "toChapter": 2174,
    "locationId": "魔界",
    "realm": "大乘期（圣祖化身）",
    "status": "dead",
    "activity": "本弧率五名圣祖化身攻打二號陣眼，修煉血色虫影法相，被韩立梵聖法相和靈躯夾擊後洞穿心臟殞命。"
   }
  ]
 },
 {
  "id": "掩月宗大長老",
  "name": "掩月宗大長老",
  "aliases": [
   "南宮婉師姐",
   "冰冷女子"
  ],
  "faction": "掩月宗",
  "importance": "major",
  "bio": "持凝光寶鏡和血魔劍對戰韓立南宮婉，被輪回神光迷暈後落入紫鎲兜，被留下一條性命，南宮婉留玉簡後離開。",
  "firstChapter": 716,
  "canonFate": "被迷暈後留在原地，性命無礙",
  "chronicle": [
   {
    "fromChapter": 716,
    "toChapter": 745,
    "locationId": "天南",
    "realm": "元嬰中期",
    "status": "alive",
    "activity": "持凝光寶鏡和血魔劍對戰韓立南宮婉，被輪回神光迷暈後落入紫鎲兜，被留下一條性命，南宮婉留玉簡後離開。"
   }
  ]
 },
 {
  "id": "畢姓矮子",
  "name": "畢姓矮子",
  "aliases": [],
  "faction": "慕蘭（法士）",
  "importance": "major",
  "bio": "慕蘭神師之一，賭戰談判中語氣強硬，負責指揮虚靈獸召喚",
  "firstChapter": 746,
  "canonFate": "慕蘭神師之一，賭戰談判中語氣強硬，負責指揮虚靈獸召喚",
  "chronicle": [
   {
    "fromChapter": 746,
    "toChapter": 775,
    "locationId": "天南",
    "realm": "元嬰後期",
    "status": "alive",
    "activity": "慕蘭神師之一，賭戰談判中語氣強硬，負責指揮虚靈獸召喚"
   }
  ]
 },
 {
  "id": "第二元嬰（至木靈嬰）",
  "name": "第二元嬰（至木靈嬰）",
  "aliases": [
   "魔化至木靈嬰",
   "黑袍人"
  ],
  "faction": "無（自立）",
  "importance": "major",
  "bio": "本為韓立第二元嬰，走失後奪捨天煞魔尸，借古魔魔氣進阶至元嬰中期，以三女為人質，宣稱要吞噬韓立本尊，人質被救後遁入萬丈魔淵繼續修煉。",
  "firstChapter": 1155,
  "canonFate": "本為韓立第二元嬰，走失後奪捨天煞魔尸，借古魔魔氣進阶至元嬰中期，以三女為人質，宣稱要吞噬韓立本尊，人質被救後遁入萬丈魔淵繼續修煉。",
  "chronicle": [
   {
    "fromChapter": 1155,
    "toChapter": 1184,
    "locationId": "天南",
    "realm": "元嬰中期",
    "status": "alive",
    "activity": "本為韓立第二元嬰，走失後奪捨天煞魔尸，借古魔魔氣進阶至元嬰中期，以三女為人質，宣稱要吞噬韓立本尊，人"
   }
  ]
 },
 {
  "id": "翎仙子",
  "name": "翎仙子",
  "aliases": [],
  "faction": "魔族",
  "importance": "major",
  "bio": "本弧以極高明的幻術與瞬移術在韩立周圍忽隱忽現連環攻擊，最終被韩立以涅盤聖體一階巨猿形態砸死於地面。",
  "firstChapter": 2145,
  "canonFate": "被韓立擊殺",
  "chronicle": [
   {
    "fromChapter": 2145,
    "toChapter": 2174,
    "locationId": "魔界",
    "realm": "大乘期（圣祖化身）",
    "status": "dead",
    "activity": "本弧以極高明的幻術與瞬移術在韩立周圍忽隱忽現連環攻擊，最終被韩立以涅盤聖體一階巨猿形態砸死於地面。"
   }
  ]
 },
 {
  "id": "被封印仙人",
  "name": "被封印仙人",
  "aliases": [],
  "faction": "仙界（叛逃九元觀）",
  "importance": "major",
  "bio": "從仙界叛逃九元觀，攜掌天瓶落入靈界，被靈王封印；韓立搜魂部分成功，得知瓶靈在魔界，搜魂後對方頭顱爆裂，神魂潰滅。",
  "firstChapter": 2421,
  "canonFate": "搜魂時頭顱爆裂，神魂潰滅，軀體化灰。",
  "chronicle": [
   {
    "fromChapter": 2421,
    "toChapter": 2450,
    "locationId": "靈界",
    "realm": "真仙（在靈界重鑄仙體）",
    "status": "alive",
    "activity": "從仙界叛逃九元觀，攜掌天瓶落入靈界，被靈王封印；韓立搜魂部分成功，得知瓶靈在魔界，搜魂後對方頭顱爆裂"
   }
  ]
 },
 {
  "id": "貫天龍",
  "name": "貫天龍",
  "aliases": [],
  "faction": "野狼幫",
  "importance": "major",
  "bio": "野狼帮主，主導此次圍攻七玄門；在手下全被韓立燒殺後，被韓立以完整版火彈術擊殺。",
  "firstChapter": 91,
  "canonFate": "死於韓立火彈術。",
  "chronicle": [
   {
    "fromChapter": 91,
    "toChapter": 99,
    "locationId": "七玄門",
    "realm": "江湖武功高手（無修仙法力）",
    "status": "dead",
    "activity": "野狼帮主，主導此次圍攻七玄門；在手下全被韓立燒殺後，被韓立以完整版火彈術擊殺。"
   }
  ]
 },
 {
  "id": "陰剎",
  "name": "陰剎",
  "aliases": [
   "美婦",
   "中年美婦"
  ],
  "faction": "血光聖祖直屬（陰陽二剎之一）",
  "importance": "major",
  "bio": "持紫言鼎；化身進入彩光塔偷襲韓立，以紫言鼎反射一切攻擊為依仗；被韓立以噬靈天火燒滅，元嬰未能逃出。",
  "firstChapter": 1905,
  "canonFate": "被韓立以噬靈天火焚殺，連元嬰俱滅",
  "chronicle": [
   {
    "fromChapter": 1905,
    "toChapter": 1934,
    "locationId": "魔界",
    "realm": "合體中期",
    "status": "alive",
    "activity": "持紫言鼎；化身進入彩光塔偷襲韓立，以紫言鼎反射一切攻擊為依仗；被韓立以噬靈天火燒滅，元嬰未能逃出。"
   }
  ]
 },
 {
  "id": "陰羅宗宗主",
  "name": "陰羅宗宗主",
  "aliases": [
   "黑袍男子"
  ],
  "faction": "陰羅宗（晉國魔道）",
  "importance": "major",
  "bio": "伴侶被韓立斬殺後怒降天雷，多次送信挑戰韓立，最終在合歡老魔拖延下帶人離開天南返回晉國",
  "firstChapter": 776,
  "canonFate": "伴侶被韓立斬殺後怒降天雷，多次送信挑戰韓立，最終在合歡老魔拖延下帶人離開天南返回晉國",
  "chronicle": [
   {
    "fromChapter": 776,
    "toChapter": 795,
    "locationId": "天南",
    "realm": "元嬰後期",
    "status": "alive",
    "activity": "伴侶被韓立斬殺後怒降天雷，多次送信挑戰韓立，最終在合歡老魔拖延下帶人離開天南返回晉國"
   }
  ]
 },
 {
  "id": "陰羅宗宗主（房大修士）",
  "name": "陰羅宗宗主（房大修士）",
  "aliases": [
   "房老魔",
   "房道友"
  ],
  "faction": "陰羅宗",
  "importance": "major",
  "bio": "阴罗宗宗主，對韓立有殺妻之仇（歷史），被韓立追蹤截殺，肉身被斬，元嬰被活捉搜魂；搜魂後元嬰下場不明（滅殺）。",
  "firstChapter": 1215,
  "canonFate": "被韓立斬殺（肉身）並搜魂其元嬰後滅殺",
  "chronicle": [
   {
    "fromChapter": 1215,
    "toChapter": 1244,
    "locationId": "天南",
    "realm": "元嬰後期",
    "status": "dead",
    "activity": "阴罗宗宗主，對韓立有殺妻之仇（歷史），被韓立追蹤截殺，肉身被斬，元嬰被活捉搜魂；搜魂後元嬰下場不明（"
   }
  ]
 },
 {
  "id": "陰羅宗長老（黑袍青年）",
  "name": "陰羅宗長老（黑袍青年）",
  "aliases": [],
  "faction": "陰羅宗",
  "importance": "major",
  "bio": "以封魂咒傷害南宮婉、設傳送陣引韓立赴約，持七龍樁（赝品）、血雷子、鬼羅幡應敵，最終被大庚劍陣斬成碎片，元嬰被銀月擒獲後搜魂滅殺",
  "firstChapter": 776,
  "canonFate": "本弧被韓立大庚劍陣與銀月聯手斬殺，元嬰亦滅",
  "chronicle": [
   {
    "fromChapter": 776,
    "toChapter": 795,
    "locationId": "天南",
    "realm": "元嬰中期頂階",
    "status": "alive",
    "activity": "以封魂咒傷害南宮婉、設傳送陣引韓立赴約，持七龍樁（赝品）、血雷子、鬼羅幡應敵，最終被大庚劍陣斬成碎片"
   }
  ]
 },
 {
  "id": "絡腮鬍子",
  "name": "絡腮鬍子",
  "aliases": [],
  "faction": "靈獸山",
  "importance": "major",
  "bio": "與天闕堡嚴某以融靈符結伴進入禁地，在一線天前後夾擊韓立，被困於土牢術後遭金光磚轟殺。",
  "firstChapter": 172,
  "canonFate": "被韓立金光磚轟殺",
  "chronicle": [
   {
    "fromChapter": 172,
    "toChapter": 201,
    "locationId": "越京",
    "realm": "煉氣期第十三層",
    "status": "alive",
    "activity": "與天闕堡嚴某以融靈符結伴進入禁地，在一線天前後夾擊韓立，被困於土牢術後遭金光磚轟殺。"
   }
  ]
 },
 {
  "id": "越皇",
  "name": "越皇",
  "aliases": [
   "黑煞教主（化身）"
  ],
  "faction": "黑煞教",
  "importance": "major",
  "bio": "偽裝越國皇帝，實為黑煞教真正掌控者，吸納蓝袍化身修為後實力暴漲，以血靈鑽、黑血刀、修髓丹對抗韓立等人，最終被困顛倒五行陣擊殺。",
  "firstChapter": 322,
  "canonFate": "本弧死亡，被韓立以符寶轟殺",
  "chronicle": [
   {
    "fromChapter": 322,
    "toChapter": 351,
    "locationId": "越國",
    "realm": "築基後期（吸納蓝袍人修為後大幅提升）",
    "status": "dead",
    "activity": "偽裝越國皇帝，實為黑煞教真正掌控者，吸納蓝袍化身修為後實力暴漲，以血靈鑽、黑血刀、修髓丹對抗韓立等人"
   }
  ]
 },
 {
  "id": "閔",
  "name": "閔",
  "aliases": [
   "獨角青年"
  ],
  "faction": "角蚩族",
  "importance": "major",
  "bio": "與海王族簡聯手前來天元大陸索取玄天斬靈劍，在黑冥霧海外汲取真靈陰氣，與九頭骨鳥交戰。",
  "firstChapter": 1508,
  "canonFate": "與海王族簡聯手前來天元大陸索取玄天斬靈劍，在黑冥霧海外汲取真靈陰氣，與九頭骨鳥交戰。",
  "chronicle": [
   {
    "fromChapter": 1508,
    "toChapter": 1537,
    "locationId": "天淵城",
    "realm": "合體期",
    "status": "alive",
    "activity": "與海王族簡聯手前來天元大陸索取玄天斬靈劍，在黑冥霧海外汲取真靈陰氣，與九頭骨鳥交戰。"
   }
  ]
 },
 {
  "id": "陽剎",
  "name": "陽剎",
  "aliases": [
   "銀絲袍中年男子"
  ],
  "faction": "血光聖祖直屬（陰陽二剎之一）",
  "importance": "major",
  "bio": "持七色彩光塔；後被血光聖祖以「分元斬尸大法」降臨附體，化為血腥少年形態，法力暴增。",
  "firstChapter": 1905,
  "canonFate": "被血光聖祖神念附體，成為其化身",
  "chronicle": [
   {
    "fromChapter": 1905,
    "toChapter": 1934,
    "locationId": "魔界",
    "realm": "合體中期",
    "status": "alive",
    "activity": "持七色彩光塔；後被血光聖祖以「分元斬尸大法」降臨附體，化為血腥少年形態，法力暴增。"
   }
  ]
 },
 {
  "id": "隆姓老者",
  "name": "隆姓老者",
  "aliases": [],
  "faction": "逆星盟",
  "importance": "major",
  "bio": "與骅姓道士聯手攔截韓立，骅姓道士被誅，隆姓老者施血影遁秘術以斷臂為代價逃脫，後站守萬丈魔淵阵眼。",
  "firstChapter": 1185,
  "canonFate": "與骅姓道士聯手攔截韓立，骅姓道士被誅，隆姓老者施血影遁秘術以斷臂為代價逃脫，後站守萬丈魔淵阵眼。",
  "chronicle": [
   {
    "fromChapter": 1185,
    "toChapter": 1214,
    "locationId": "天南",
    "realm": "元嬰初期",
    "status": "alive",
    "activity": "與骅姓道士聯手攔截韓立，骅姓道士被誅，隆姓老者施血影遁秘術以斷臂為代價逃脫，後站守萬丈魔淵阵眼。"
   }
  ]
 },
 {
  "id": "馮枕",
  "name": "馮枕",
  "aliases": [
   "馮枕老賊"
  ],
  "faction": "孔家（暗投）",
  "importance": "major",
  "bio": "冯家收留的魔道散修，暗中投靠孔家，以苦毒偷襲馮岳，被韓立第二元嬰擊殺。",
  "firstChapter": 886,
  "canonFate": "被韓立第二元嬰擊殺，形神俱滅",
  "chronicle": [
   {
    "fromChapter": 886,
    "toChapter": 915,
    "locationId": "大晉",
    "realm": "結丹期",
    "status": "dead",
    "activity": "冯家收留的魔道散修，暗中投靠孔家，以苦毒偷襲馮岳，被韓立第二元嬰擊殺。"
   }
  ]
 },
 {
  "id": "黃元子",
  "name": "黃元子",
  "aliases": [
   "黃道友"
  ],
  "faction": "長元族（已脫離）",
  "importance": "major",
  "bio": "聲稱青元子是佔據其族兄肉身的元神叛徒，以九幻如意門、長元丹、子母屍陰雷等極力謀殺青元子，卻被韓立斬滅元嬰。",
  "firstChapter": 2296,
  "canonFate": "本弧被韓立以玄天斬靈劍追斬元嬰，隕落",
  "chronicle": [
   {
    "fromChapter": 2296,
    "toChapter": 2325,
    "locationId": "靈界",
    "realm": "大乘期",
    "status": "dead",
    "activity": "聲稱青元子是佔據其族兄肉身的元神叛徒，以九幻如意門、長元丹、子母屍陰雷等極力謀殺青元子，卻被韓立斬滅"
   }
  ]
 },
 {
  "id": "黃昆",
  "name": "黃昆",
  "aliases": [],
  "faction": "逆星盟（受收買）、離龍島",
  "importance": "major",
  "bio": "受逆星盟收買的元嬰散修，與妙鶴聯手攜帶高階靈石欲赴碧靈島辦事，途中被韩立設伏擒獲。",
  "firstChapter": 1125,
  "canonFate": "本弧被韓立的紫色幽火、白哀針等完全克制，元嬰被封印，下場為死亡。",
  "chronicle": [
   {
    "fromChapter": 1125,
    "toChapter": 1154,
    "locationId": "天南",
    "realm": "元嬰初期",
    "status": "dead",
    "activity": "受逆星盟收買的元嬰散修，與妙鶴聯手攜帶高階靈石欲赴碧靈島辦事，途中被韩立設伏擒獲。"
   }
  ]
 },
 {
  "id": "黃鮑",
  "name": "黃鮑",
  "aliases": [],
  "faction": "流沙谷",
  "importance": "major",
  "bio": "流沙谷長老，替徒弟強逼許仙子履婚約，被韓立展示噬靈天火心寒入體後知難而退。",
  "firstChapter": 1326,
  "canonFate": "流沙谷長老，替徒弟強逼許仙子履婚約，被韓立展示噬靈天火心寒入體後知難而退。",
  "chronicle": [
   {
    "fromChapter": 1326,
    "toChapter": 1355,
    "locationId": "風元大陸",
    "realm": "化神中期",
    "status": "alive",
    "activity": "流沙谷長老，替徒弟強逼許仙子履婚約，被韓立展示噬靈天火心寒入體後知難而退。"
   }
  ]
 },
 {
  "id": "黑色魔猿（合體中期聖階）",
  "name": "黑色魔猿（合體中期聖階）",
  "aliases": [
   "山岳巨猿後裔",
   "魔尊"
  ],
  "faction": "古魔界（通過魔金山脈空間裂縫跨界而來）",
  "importance": "major",
  "bio": "以魂體分元大法療傷，持玄天殘刃（疑似玄天之寶）、紫色戰甲應戰，擁有靈目神通可看破幻術，最終元神被玄天之劍的法則之力斬碎。",
  "firstChapter": 1628,
  "canonFate": "本弧中元神被玄天之劍斬殺，肉身成幹屍，聖階魔核被取走。",
  "chronicle": [
   {
    "fromChapter": 1628,
    "toChapter": 1657,
    "locationId": "天淵城",
    "realm": "合體中期（受傷後元神僅三四成）",
    "status": "alive",
    "activity": "以魂體分元大法療傷，持玄天殘刃（疑似玄天之寶）、紫色戰甲應戰，擁有靈目神通可看破幻術，最終元神被玄天"
   }
  ]
 },
 {
  "id": "黑梟王",
  "name": "黑梟王",
  "aliases": [
   "黑梟王",
   "夜叉族大乘"
  ],
  "faction": "夜叉族",
  "importance": "major",
  "bio": "闖入慶典索人，被韓立重創肉身、念劍訣攔腰斬斷，化黑風攜殘軀逃脫，被三頭偽噬金蟲王追殺致近半身軀受損",
  "firstChapter": 2206,
  "canonFate": "重傷逃脫，數百年內元氣難復",
  "chronicle": [
   {
    "fromChapter": 2206,
    "toChapter": 2235,
    "locationId": "靈界",
    "realm": "大乘期",
    "status": "alive",
    "activity": "闖入慶典索人，被韓立重創肉身、念劍訣攔腰斬斷，化黑風攜殘軀逃脫，被三頭偽噬金蟲王追殺致近半身軀受損"
   }
  ]
 },
 {
  "id": "黑袍大漢",
  "name": "黑袍大漢",
  "aliases": [],
  "faction": "不明魔道勢力",
  "importance": "major",
  "bio": "白衣女子手下，擁有黑色巨尾與吞噬能力，擊殺銀族守衛，伏筆後續威脅。",
  "firstChapter": 1755,
  "canonFate": "白衣女子手下，擁有黑色巨尾與吞噬能力，擊殺銀族守衛，伏筆後續威脅。",
  "chronicle": [
   {
    "fromChapter": 1755,
    "toChapter": 1784,
    "locationId": "魔界",
    "realm": "合體期（聖階）",
    "status": "alive",
    "activity": "白衣女子手下，擁有黑色巨尾與吞噬能力，擊殺銀族守衛，伏筆後續威脅。"
   }
  ]
 },
 {
  "id": "黑袍女子",
  "name": "黑袍女子",
  "aliases": [
   "陰羅宗宗主伴侶"
  ],
  "faction": "陰羅宗",
  "importance": "major",
  "bio": "率銅甲煉屍投入戰場，被韓立以辟邪神雷殺傷肉身、乾藍冰封，元嬰亦被電網灰飛烟滅",
  "firstChapter": 776,
  "canonFate": "本弧被韓立斬殺，元嬰亦滅",
  "chronicle": [
   {
    "fromChapter": 776,
    "toChapter": 795,
    "locationId": "天南",
    "realm": "元嬰中期",
    "status": "alive",
    "activity": "率銅甲煉屍投入戰場，被韓立以辟邪神雷殺傷肉身、乾藍冰封，元嬰亦被電網灰飛烟滅"
   }
  ]
 },
 {
  "id": "黑袍青年",
  "name": "黑袍青年",
  "aliases": [
   "萬靈血璽主人",
   "仙界真仙"
  ],
  "faction": "仙界（自稱）",
  "importance": "major",
  "bio": "在血天大陸大規模血祭生靈修煉萬靈血璽，殺死三名大乘，追殺六翼冰鳳，商盟碧影稱其為「絕世凶魔」。",
  "firstChapter": 2356,
  "canonFate": "在血天大陸大規模血祭生靈修煉萬靈血璽，殺死三名大乘，追殺六翼冰鳳，商盟碧影稱其為「絕世凶魔」。",
  "chronicle": [
   {
    "fromChapter": 2356,
    "toChapter": 2385,
    "locationId": "靈界",
    "realm": "仙界真仙（受界面壓制）",
    "status": "alive",
    "activity": "在血天大陸大規模血祭生靈修煉萬靈血璽，殺死三名大乘，追殺六翼冰鳳，商盟碧影稱其為「絕世凶魔」。"
   }
  ]
 },
 {
  "id": "黑鳳族宮裝妖女",
  "name": "黑鳳族宮裝妖女",
  "aliases": [
   "筱姑姑（黛兒稱呼）"
  ],
  "faction": "黑鳳族",
  "importance": "major",
  "bio": "為追回黑凤族血脈女童黛兒而策動四路兽群聯合攻破安遠城；操控尸體傀儡、豢養黑色靈禽，被韓立以灭仙珠僵持後放棄取其性命",
  "firstChapter": 1266,
  "canonFate": "為追回黑凤族血脈女童黛兒而策動四路兽群聯合攻破安遠城；操控尸體傀儡、豢養黑色靈禽，被韓立以灭仙珠僵持後放棄取其性命",
  "chronicle": [
   {
    "fromChapter": 1266,
    "toChapter": 1295,
    "locationId": "風元大陸",
    "realm": "化神期以上（八級化形妖獸）",
    "status": "alive",
    "activity": "為追回黑凤族血脈女童黛兒而策動四路兽群聯合攻破安遠城；操控尸體傀儡、豢養黑色靈禽，被韓立以灭仙珠僵持"
   }
  ]
 },
 {
  "id": "煙尊者",
  "name": "煙尊者",
  "aliases": [
   "火甲巨人",
   "煙魔尊"
  ],
  "faction": "聖族火元城",
  "importance": "major",
  "bio": "四魔尊中最弱者，持赤紅戰甲作護身异宝，被韓立以惊神刺擊昏後一劍斬殺，連元嬰都未能逃出。",
  "firstChapter": 1905,
  "canonFate": "被韓立擊殺，元嬰同滅",
  "chronicle": [
   {
    "fromChapter": 1905,
    "toChapter": 1934,
    "locationId": "魔界",
    "realm": "合體初期",
    "status": "dead",
    "activity": "四魔尊中最弱者，持赤紅戰甲作護身异宝，被韓立以惊神刺擊昏後一劍斬殺，連元嬰都未能逃出。"
   }
  ]
 },
 {
  "id": "矮子",
  "name": "矮子",
  "aliases": [],
  "faction": "角蚩族",
  "importance": "major",
  "bio": "角蚩族追兵，擁有銀雲、碧綠木碗等宝物，最終被韓立鯤鵬變形態抓爆。",
  "firstChapter": 1568,
  "canonFate": "被韓立鯤鵬變殺死",
  "chronicle": [
   {
    "fromChapter": 1568,
    "toChapter": 1597,
    "locationId": "天淵城",
    "realm": "煉虛（上族七八階）",
    "status": "dead",
    "activity": "角蚩族追兵，擁有銀雲、碧綠木碗等宝物，最終被韓立鯤鵬變形態抓爆。"
   }
  ]
 },
 {
  "id": "窟耀",
  "name": "窟耀",
  "aliases": [
   "拜火部大上師"
  ],
  "faction": "慕蘭拜火部",
  "importance": "major",
  "bio": "以火靈化形為火蛟，與馬姓老者斗法告平，後主持灵术大阵破阵，對陣陸大漢四耳金猿棍。",
  "firstChapter": 716,
  "canonFate": "以火靈化形為火蛟，與馬姓老者斗法告平，後主持灵术大阵破阵，對陣陸大漢四耳金猿棍。",
  "chronicle": [
   {
    "fromChapter": 716,
    "toChapter": 745,
    "locationId": "天南",
    "realm": "元嬰初期（慕蘭法士）",
    "status": "alive",
    "activity": "以火靈化形為火蛟，與馬姓老者斗法告平，後主持灵术大阵破阵，對陣陸大漢四耳金猿棍。"
   }
  ]
 },
 {
  "id": "葉月聖",
  "name": "葉月聖",
  "aliases": [
   "大頭怪人",
   "葉家七叔"
  ],
  "faction": "葉家",
  "importance": "major",
  "bio": "假死多年已晉元嬰後期，大限將至，為求晉化神而叛葉家助古魔，答應滅殺銀月狼魂，傳送往宮殿。",
  "firstChapter": 1006,
  "canonFate": "假死多年已晉元嬰後期，大限將至，為求晉化神而叛葉家助古魔，答應滅殺銀月狼魂，傳送往宮殿。",
  "chronicle": [
   {
    "fromChapter": 1006,
    "toChapter": 1035,
    "locationId": "大晉",
    "realm": "元嬰後期",
    "status": "alive",
    "activity": "假死多年已晉元嬰後期，大限將至，為求晉化神而叛葉家助古魔，答應滅殺銀月狼魂，傳送往宮殿。"
   }
  ]
 },
 {
  "id": "葉師弟",
  "name": "葉師弟",
  "aliases": [
   "葉師叔",
   "葉堂主"
  ],
  "faction": "黃楓谷百機堂",
  "importance": "major",
  "bio": "百機堂管事，為侄孫謀取築基丹，以利誘加半強迫手段迫韓立放棄築基丹，事後又悔諾僅交付承諾物品的五分之一以下",
  "firstChapter": 130,
  "canonFate": "百機堂管事，為侄孫謀取築基丹，以利誘加半強迫手段迫韓立放棄築基丹，事後又悔諾僅交付承諾物品的五分之一以下",
  "chronicle": [
   {
    "fromChapter": 130,
    "toChapter": 159,
    "locationId": "黃楓谷",
    "realm": "築基期（炼气期頂峰後服用築基丹者）",
    "status": "alive",
    "activity": "百機堂管事，為侄孫謀取築基丹，以利誘加半強迫手段迫韓立放棄築基丹，事後又悔諾僅交付承諾物品的五分之一"
   }
  ]
 },
 {
  "id": "蜀黍特使",
  "name": "蜀黍特使",
  "aliases": [
   "金角青年",
   "金蛟青年"
  ],
  "faction": "角蚩族",
  "importance": "major",
  "bio": "持複製迷天鐘（雪白小鐘）追殺韓立，以空間法則之力屢次壓制，最終被韓立化身巨猿一拳捏碎頭顱，元嬰亦被吼聲震滅。",
  "firstChapter": 1718,
  "canonFate": "被韓立以巨猿神通擊殺，元嬰俱滅",
  "chronicle": [
   {
    "fromChapter": 1718,
    "toChapter": 1747,
    "locationId": "天淵城",
    "realm": "煉虛頂階",
    "status": "dead",
    "activity": "持複製迷天鐘（雪白小鐘）追殺韓立，以空間法則之力屢次壓制，最終被韓立化身巨猿一拳捏碎頭顱，元嬰亦被吼"
   }
  ]
 },
 {
  "id": "詢（詢師兄，烏衣修士）",
  "name": "詢（詢師兄，烏衣修士）",
  "aliases": [],
  "faction": "鬼靈門（碎魂真人門下）",
  "importance": "major",
  "bio": "追查韓立時遭到追殺，被韓立青竹蜂雲劍所化巨劍斬殺。",
  "firstChapter": 656,
  "canonFate": "被韓立誅殺",
  "chronicle": [
   {
    "fromChapter": 656,
    "toChapter": 685,
    "locationId": "天南",
    "realm": "結丹中期頂峰",
    "status": "alive",
    "activity": "追查韓立時遭到追殺，被韓立青竹蜂雲劍所化巨劍斬殺。"
   }
  ]
 },
 {
  "id": "賈天龍",
  "name": "賈天龍",
  "aliases": [
   "金狼賈天龍"
  ],
  "faction": "野狼幫",
  "importance": "major",
  "bio": "野狼帮帮主，精心策劃伏擊全滅七玄門談判隊伍，並聯合中小幫派攻山，以金光上人為秘密武器毅然答應死契血斗",
  "firstChapter": 61,
  "canonFate": "野狼帮帮主，精心策劃伏擊全滅七玄門談判隊伍，並聯合中小幫派攻山，以金光上人為秘密武器毅然答應死契血斗",
  "chronicle": [
   {
    "fromChapter": 61,
    "toChapter": 90,
    "locationId": "七玄門",
    "realm": "凡人",
    "status": "alive",
    "activity": "野狼帮帮主，精心策劃伏擊全滅七玄門談判隊伍，並聯合中小幫派攻山，以金光上人為秘密武器毅然答應死契血斗"
   }
  ]
 },
 {
  "id": "圖兄（角蚩族戰舟高層）",
  "name": "圖兄（角蚩族戰舟高層）",
  "aliases": [],
  "faction": "角蚩族",
  "importance": "major",
  "bio": "坐鎮角蚩族堡级戰舟，头生赤红短角，弘滅陨落後察覺，意欲親自追查。",
  "firstChapter": 1538,
  "canonFate": "坐鎮角蚩族堡级戰舟，头生赤红短角，弘滅陨落後察覺，意欲親自追查。",
  "chronicle": [
   {
    "fromChapter": 1538,
    "toChapter": 1567,
    "locationId": "天淵城",
    "realm": "聖族境（半踏入聖族）",
    "status": "alive",
    "activity": "坐鎮角蚩族堡级戰舟，头生赤红短角，弘滅陨落後察覺，意欲親自追查。"
   }
  ]
 },
 {
  "id": "圖某（圖姓老者）",
  "name": "圖某（圖姓老者）",
  "aliases": [
   "圖使者",
   "圖兄"
  ],
  "faction": "角蚩族炎系",
  "importance": "major",
  "bio": "以天玄羅盤追蹤韓立，在劍陣中被元氣之劍斬斷一臂並造成無法癒合傷口，被噬金蟲嚇退。",
  "firstChapter": 1568,
  "canonFate": "被韓立打傷後以紫霧遁術逃走",
  "chronicle": [
   {
    "fromChapter": 1568,
    "toChapter": 1597,
    "locationId": "天淵城",
    "realm": "半踏入合體境（合體初階）",
    "status": "alive",
    "activity": "以天玄羅盤追蹤韓立，在劍陣中被元氣之劍斬斷一臂並造成無法癒合傷口，被噬金蟲嚇退。"
   }
  ]
 },
 {
  "id": "綠發異族",
  "name": "綠發異族",
  "aliases": [],
  "faction": "靈界異族（非人族）",
  "importance": "major",
  "bio": "持上古遺迹所得黃色銅戈，曾在雷雲閣與韓立起衝突；此弧被韓立以五色大手轟碎頭顱後，逃出元神也被青竹蜂雲劍補斬滅殺。",
  "firstChapter": 1628,
  "canonFate": "被韓立擊殺。",
  "chronicle": [
   {
    "fromChapter": 1628,
    "toChapter": 1657,
    "locationId": "天淵城",
    "realm": "煉虛頂階",
    "status": "dead",
    "activity": "持上古遺迹所得黃色銅戈，曾在雷雲閣與韓立起衝突；此弧被韓立以五色大手轟碎頭顱後，逃出元神也被青竹蜂雲"
   }
  ]
 },
 {
  "id": "翡翠蛟龍",
  "name": "翡翠蛟龍",
  "aliases": [
   "鳴老怪",
   "鳴老魔"
  ],
  "faction": "未知宗門",
  "importance": "major",
  "bio": "派化身與金老怪合作搜尋千寶上人遺寶，誤觸玉骨人魔禁制後狼狽逃出，最終放棄對韓立的敵意。",
  "firstChapter": 1326,
  "canonFate": "派化身與金老怪合作搜尋千寶上人遺寶，誤觸玉骨人魔禁制後狼狽逃出，最終放棄對韓立的敵意。",
  "chronicle": [
   {
    "fromChapter": 1326,
    "toChapter": 1355,
    "locationId": "風元大陸",
    "realm": "煉虛期（化身到場）",
    "status": "alive",
    "activity": "派化身與金老怪合作搜尋千寶上人遺寶，誤觸玉骨人魔禁制後狼狽逃出，最終放棄對韓立的敵意。"
   }
  ]
 },
 {
  "id": "蒙山五友五妹（年輕女子）",
  "name": "蒙山五友五妹（年輕女子）",
  "aliases": [
   "五妹"
  ],
  "faction": "黑煞教外圍弟子",
  "importance": "major",
  "bio": "兩年前已秘密加入黑煞教，本弧中出賣其他四人行蹤，被韓立當場識破後欲持天雷子抵抗，遭奪取法器禁制真元，出逃後被韓立預設的無常丹禁制毒殺。",
  "firstChapter": 292,
  "canonFate": "被無常丹禁制毒發身亡",
  "chronicle": [
   {
    "fromChapter": 292,
    "toChapter": 321,
    "locationId": "越京",
    "realm": "煉氣期",
    "status": "alive",
    "activity": "兩年前已秘密加入黑煞教，本弧中出賣其他四人行蹤，被韓立當場識破後欲持天雷子抵抗，遭奪取法器禁制真元，"
   }
  ]
 },
 {
  "id": "蒙蠻",
  "name": "蒙蠻",
  "aliases": [],
  "faction": "雷牛族",
  "importance": "major",
  "bio": "雷牛族高階魔族，碧綠肌膚、頭生黑角，與蝠烈打賭；接到圣祖詔令提前入界，率數萬雷牛跟進。",
  "firstChapter": 1875,
  "canonFate": "雷牛族高階魔族，碧綠肌膚、頭生黑角，與蝠烈打賭；接到圣祖詔令提前入界，率數萬雷牛跟進。",
  "chronicle": [
   {
    "fromChapter": 1875,
    "toChapter": 1904,
    "locationId": "魔界",
    "realm": "高階魔族",
    "status": "alive",
    "activity": "雷牛族高階魔族，碧綠肌膚、頭生黑角，與蝠烈打賭；接到圣祖詔令提前入界，率數萬雷牛跟進。"
   }
  ]
 },
 {
  "id": "蒼坤上人化身殘魂",
  "name": "蒼坤上人化身殘魂",
  "aliases": [
   "畫軸精魂",
   "儒生"
  ],
  "faction": "圣界（古魔）",
  "importance": "major",
  "bio": "封存於養魂木畫軸中的古魔分神殘魂，以苍坤上人化身面目欺騙鬼靈門，引眾人入封印空間，企圖讓人類修士解封古魔本體以打開圣界通道",
  "firstChapter": 826,
  "canonFate": "被魏無涯的破魂蛇擊碎魂石，後殘魂脫出逃遁，最終不知所蹤",
  "chronicle": [
   {
    "fromChapter": 826,
    "toChapter": 855,
    "locationId": "大晉",
    "realm": "精魂殘體（原元嬰後期或以上）",
    "status": "alive",
    "activity": "封存於養魂木畫軸中的古魔分神殘魂，以苍坤上人化身面目欺騙鬼靈門，引眾人入封印空間，企圖讓人類修士解封"
   }
  ]
 },
 {
  "id": "齊姓道士",
  "name": "齊姓道士",
  "aliases": [],
  "faction": "碧雲門",
  "importance": "major",
  "bio": "碧雲門長老，與極陰祖師在奇渊密室密謀，得知虛天鼎消息後加大力度搜尋韓立。",
  "firstChapter": 514,
  "canonFate": "碧雲門長老，與極陰祖師在奇渊密室密謀，得知虛天鼎消息後加大力度搜尋韓立。",
  "chronicle": [
   {
    "fromChapter": 514,
    "toChapter": 543,
    "locationId": "亂星海",
    "realm": "元嬰期",
    "status": "alive",
    "activity": "碧雲門長老，與極陰祖師在奇渊密室密謀，得知虛天鼎消息後加大力度搜尋韓立。"
   }
  ]
 },
 {
  "id": "憐飛花",
  "name": "憐飛花",
  "aliases": [],
  "faction": "魔焰門",
  "importance": "major",
  "bio": "魔焰門門主獨女，帶領狂焰修士施放青陽魔火攻陷靈石礦、動用撼地符封殺地下逃生通道。",
  "firstChapter": 262,
  "canonFate": "魔焰門門主獨女，帶領狂焰修士施放青陽魔火攻陷靈石礦、動用撼地符封殺地下逃生通道。",
  "chronicle": [
   {
    "fromChapter": 262,
    "toChapter": 291,
    "locationId": "越京",
    "realm": "筑基初期",
    "status": "alive",
    "activity": "魔焰門門主獨女，帶領狂焰修士施放青陽魔火攻陷靈石礦、動用撼地符封殺地下逃生通道。"
   }
  ]
 },
 {
  "id": "歐陽長老",
  "name": "歐陽長老",
  "aliases": [
   "歐陽師弟",
   "青衫中年人"
  ],
  "faction": "小極宮",
  "importance": "major",
  "bio": "小極宮長老，使兩口烏戈及雷電珠，被五子同心魔連元嬰帶寶物吞噬殆盡。",
  "firstChapter": 1096,
  "canonFate": "本弧身死，被五子同心魔所滅",
  "chronicle": [
   {
    "fromChapter": 1096,
    "toChapter": 1124,
    "locationId": "大晉",
    "realm": "元嬰中期",
    "status": "dead",
    "activity": "小極宮長老，使兩口烏戈及雷電珠，被五子同心魔連元嬰帶寶物吞噬殆盡。"
   }
  ]
 },
 {
  "id": "歐陽飛天",
  "name": "歐陽飛天",
  "aliases": [
   "怒獅"
  ],
  "faction": "獨霸山莊",
  "importance": "major",
  "bio": "獨霸山莊莊主，練有「霸王甲」刀槍不入，是惊蛟會的最大外患，派吴劍鳴滲透墨府",
  "firstChapter": 100,
  "canonFate": "被韓立以劍符奇襲斬首身亡（第126章）",
  "chronicle": [
   {
    "fromChapter": 100,
    "toChapter": 129,
    "locationId": "黃楓谷",
    "realm": "凡人",
    "status": "alive",
    "activity": "獨霸山莊莊主，練有「霸王甲」刀槍不入，是惊蛟會的最大外患，派吴劍鳴滲透墨府"
   }
  ]
 },
 {
  "id": "蝠烈",
  "name": "蝠烈",
  "aliases": [
   "蝠烈大統領"
  ],
  "faction": "血蝠族",
  "importance": "major",
  "bio": "血蝠族大統領，與雷牛族蒙蠻打賭比試三日殺滅人族數量；率血蝠族先行掃蕩靈界人族修士。",
  "firstChapter": 1875,
  "canonFate": "血蝠族大統領，與雷牛族蒙蠻打賭比試三日殺滅人族數量；率血蝠族先行掃蕩靈界人族修士。",
  "chronicle": [
   {
    "fromChapter": 1875,
    "toChapter": 1904,
    "locationId": "靈界",
    "realm": "高階魔族（合體以上）",
    "status": "alive",
    "activity": "血蝠族大統領，與雷牛族蒙蠻打賭比試三日殺滅人族數量；率血蝠族先行掃蕩靈界人族修士。"
   }
  ]
 },
 {
  "id": "骷髏深海存在",
  "name": "骷髏深海存在",
  "aliases": [],
  "faction": "不明",
  "importance": "major",
  "bio": "深海宮殿中靠十二座青銅古燈感應外界的神秘骷髏，怪蛾被韓立滅殺後感知一盞靈燈熄滅，借鏡見到韓立容貌，派青牛怪獸追查，預示後續大敵。",
  "firstChapter": 1538,
  "canonFate": "深海宮殿中靠十二座青銅古燈感應外界的神秘骷髏，怪蛾被韓立滅殺後感知一盞靈燈熄滅，借鏡見到韓立容貌，派青牛怪獸追查，預示後續大敵。",
  "chronicle": [
   {
    "fromChapter": 1538,
    "toChapter": 1567,
    "locationId": "天淵城",
    "realm": "不明（深海宮殿主人）",
    "status": "alive",
    "activity": "深海宮殿中靠十二座青銅古燈感應外界的神秘骷髏，怪蛾被韓立滅殺後感知一盞靈燈熄滅，借鏡見到韓立容貌，派"
   }
  ]
 },
 {
  "id": "黎道友（巨漢）",
  "name": "黎道友（巨漢）",
  "aliases": [],
  "faction": "角蚩族",
  "importance": "major",
  "bio": "角蚩族追兵之一，以火屬性大斧硬接韓立劍絲，瞬間被斬殺，連元神都未能逃脫。",
  "firstChapter": 1568,
  "canonFate": "被韓立青竹蜂雲劍絲一擊斬滅",
  "chronicle": [
   {
    "fromChapter": 1568,
    "toChapter": 1597,
    "locationId": "天淵城",
    "realm": "煉虛（上族七八階）",
    "status": "alive",
    "activity": "角蚩族追兵之一，以火屬性大斧硬接韓立劍絲，瞬間被斬殺，連元神都未能逃脫。"
   }
  ]
 },
 {
  "id": "噬炎",
  "name": "噬炎",
  "aliases": [
   "火蛟"
  ],
  "faction": "器靈族",
  "importance": "major",
  "bio": "以噬火珠本體所化火蛟侵入韓立體內，欲吞噬其神識，反被太陰真火吞滅，本源與記憶皆被韓立吸納，升華為噬靈天火。",
  "firstChapter": 1296,
  "canonFate": "被太陰真火吞噬殞滅，本源融入韓立噬靈天火",
  "chronicle": [
   {
    "fromChapter": 1296,
    "toChapter": 1325,
    "locationId": "風元大陸",
    "realm": "器靈族初階靈將（等同化神期）",
    "status": "dead",
    "activity": "以噬火珠本體所化火蛟侵入韓立體內，欲吞噬其神識，反被太陰真火吞滅，本源與記憶皆被韓立吸納，升華為噬靈"
   }
  ]
 },
 {
  "id": "穆姓法士",
  "name": "穆姓法士",
  "aliases": [
   "覃上師（另一法士）",
   "穆上師"
  ],
  "faction": "天風部（慕蘭法士）",
  "importance": "major",
  "bio": "以御風車追趕韓立，展開激戰；最終肉身被乾藍冰焰冰封擊毀，元嬰出竅逃匿，丟失千重峰及御風車。",
  "firstChapter": 686,
  "canonFate": "肉身被毀、元嬰出竅流亡",
  "chronicle": [
   {
    "fromChapter": 686,
    "toChapter": 715,
    "locationId": "天南",
    "realm": "元嬰初期頂峰（即將進中期）",
    "status": "alive",
    "activity": "以御風車追趕韓立，展開激戰；最終肉身被乾藍冰焰冰封擊毀，元嬰出竅逃匿，丟失千重峰及御風車。"
   }
  ]
 },
 {
  "id": "螟蟲之母",
  "name": "螟蟲之母",
  "aliases": [
   "女童（化身）",
   "銀紗女子"
  ],
  "faction": "無",
  "importance": "major",
  "bio": "實為被同伴真仙附身借屍修成真極之軀的異化存在，擁有時間法則，元神化身以女童現身；本體骸骨在深淵最深處，覺醒後以玄天靈域壓制眾人。",
  "firstChapter": 2236,
  "canonFate": "被韓立神念之鏈困住後，遭何康天罰之雷徹底擊滅，形神俱滅",
  "chronicle": [
   {
    "fromChapter": 2236,
    "toChapter": 2265,
    "locationId": "靈界",
    "realm": "玄仙（真極之軀）",
    "status": "alive",
    "activity": "實為被同伴真仙附身借屍修成真極之軀的異化存在，擁有時間法則，元神化身以女童現身；本體骸骨在深淵最深處"
   }
  ]
 },
 {
  "id": "駱道友",
  "name": "駱道友",
  "aliases": [
   "濃眉大漢",
   "駱兄"
  ],
  "faction": "獸尊殿",
  "importance": "major",
  "bio": "化形魔尊（銀翎人），兽尊殿長老，修萬虛之劍神通；被韓立梵聖法相氣勢壓制後聯手冷道士仍平分秋色，最終服輸。",
  "firstChapter": 2055,
  "canonFate": "化形魔尊（銀翎人），兽尊殿長老，修萬虛之劍神通；被韓立梵聖法相氣勢壓制後聯手冷道士仍平分秋色，最終服輸。",
  "chronicle": [
   {
    "fromChapter": 2055,
    "toChapter": 2084,
    "locationId": "魔界",
    "realm": "合體中期",
    "status": "alive",
    "activity": "化形魔尊（銀翎人），兽尊殿長老，修萬虛之劍神通；被韓立梵聖法相氣勢壓制後聯手冷道士仍平分秋色，最終服"
   }
  ]
 },
 {
  "id": "龜妖",
  "name": "龜妖",
  "aliases": [
   "歸"
  ],
  "faction": "妖族（玄龜一族）",
  "importance": "major",
  "bio": "協助風希煉製風雷翅，因擁有自治之體無法短時間殺死，被韓立踢入地火池後生還，向蛟龍族族長告發韓立殺蛟之事。",
  "firstChapter": 544,
  "canonFate": "在地火池中受傷生還，引發蛟龍族對人類修士的大規模追殺",
  "chronicle": [
   {
    "fromChapter": 544,
    "toChapter": 573,
    "locationId": "亂星海",
    "realm": "化形初期（八級妖修）",
    "status": "alive",
    "activity": "協助風希煉製風雷翅，因擁有自治之體無法短時間殺死，被韓立踢入地火池後生還，向蛟龍族族長告發韓立殺蛟之"
   }
  ]
 },
 {
  "id": "獰姓中年人",
  "name": "獰姓中年人",
  "aliases": [
   "獰道友",
   "獰兄"
  ],
  "faction": "角蚩族",
  "importance": "major",
  "bio": "以化血離魂大法殺掉心魅族修士及綠膚人，奪得兩只玉匣。",
  "firstChapter": 1568,
  "canonFate": "以化血離魂大法殺掉心魅族修士及綠膚人，奪得兩只玉匣。",
  "chronicle": [
   {
    "fromChapter": 1568,
    "toChapter": 1597,
    "locationId": "天淵城",
    "realm": "半踏入合體境（合體初階）",
    "status": "alive",
    "activity": "以化血離魂大法殺掉心魅族修士及綠膚人，奪得兩只玉匣。"
   }
  ]
 },
 {
  "id": "簡",
  "name": "簡",
  "aliases": [
   "魚眼異族",
   "魚眼人"
  ],
  "faction": "海王族",
  "importance": "major",
  "bio": "持三叉戟與獨角青年聯手對戰九幽冥尸；二人均自稱可輕滅飛靈族。",
  "firstChapter": 1508,
  "canonFate": "持三叉戟與獨角青年聯手對戰九幽冥尸；二人均自稱可輕滅飛靈族。",
  "chronicle": [
   {
    "fromChapter": 1508,
    "toChapter": 1537,
    "locationId": "天淵城",
    "realm": "合體期",
    "status": "alive",
    "activity": "持三叉戟與獨角青年聯手對戰九幽冥尸；二人均自稱可輕滅飛靈族。"
   }
  ]
 },
 {
  "id": "藍姓鬼婆",
  "name": "藍姓鬼婆",
  "aliases": [
   "藍姐姐",
   "鬼婆",
   "藍道友"
  ],
  "faction": "地淵四大妖王",
  "importance": "major",
  "bio": "白髮美婦形態的鬼妖合體妖王，煉製八千陰甲玄鬼；秘密打算吞噬元瑤、妍丽精魂阴气以增修為",
  "firstChapter": 1448,
  "canonFate": "白髮美婦形態的鬼妖合體妖王，煉製八千陰甲玄鬼；秘密打算吞噬元瑤、妍丽精魂阴气以增修為",
  "chronicle": [
   {
    "fromChapter": 1448,
    "toChapter": 1477,
    "locationId": "天淵城",
    "realm": "合體期以上",
    "status": "alive",
    "activity": "白髮美婦形態的鬼妖合體妖王，煉製八千陰甲玄鬼；秘密打算吞噬元瑤、妍丽精魂阴气以增修為"
   }
  ]
 },
 {
  "id": "藍婆",
  "name": "藍婆",
  "aliases": [
   "白髮美婦"
  ],
  "faction": "妖族",
  "importance": "major",
  "bio": "最後一枚印記被毀，最終同意隨六足前往魔墳；遭蜉蝣族小神巢蟲海圍攻。",
  "firstChapter": 1508,
  "canonFate": "最後一枚印記被毀，最終同意隨六足前往魔墳；遭蜉蝣族小神巢蟲海圍攻。",
  "chronicle": [
   {
    "fromChapter": 1508,
    "toChapter": 1537,
    "locationId": "天淵城",
    "realm": "合體中後期",
    "status": "alive",
    "activity": "最後一枚印記被毀，最終同意隨六足前往魔墳；遭蜉蝣族小神巢蟲海圍攻。"
   }
  ]
 },
 {
  "id": "藍袍人",
  "name": "藍袍人",
  "aliases": [
   "黑煞教主（化身本體）"
  ],
  "faction": "黑煞教",
  "importance": "major",
  "bio": "越皇所煉身外化身，甘願讓越皇吸納大半修為，後死於韓立天雷子。",
  "firstChapter": 322,
  "canonFate": "本弧死亡，被天雷子擊殺",
  "chronicle": [
   {
    "fromChapter": 322,
    "toChapter": 351,
    "locationId": "越京",
    "realm": "築基後期",
    "status": "dead",
    "activity": "越皇所煉身外化身，甘願讓越皇吸納大半修為，後死於韓立天雷子。"
   }
  ]
 },
 {
  "id": "藍尊者",
  "name": "藍尊者",
  "aliases": [
   "藍道友",
   "藍紋魔族"
  ],
  "faction": "血光聖祖麾下魔族",
  "importance": "major",
  "bio": "修煉子母真魔幡，以自身為爐鼎化身母魔，對抗韓立；最終被韓立梵聖金身以玄天殘刃一斬，連同母魔化身消滅，在本弧内陨落。",
  "firstChapter": 1875,
  "canonFate": "被韓立以玄天殘刃擊殺",
  "chronicle": [
   {
    "fromChapter": 1875,
    "toChapter": 1904,
    "locationId": "魔界",
    "realm": "合體初期（母魔化身後大幅提升）",
    "status": "dead",
    "activity": "修煉子母真魔幡，以自身為爐鼎化身母魔，對抗韓立；最終被韓立梵聖金身以玄天殘刃一斬，連同母魔化身消滅，"
   }
  ]
 },
 {
  "id": "藍瀑圣祖",
  "name": "藍瀑圣祖",
  "aliases": [
   "藍袍婦人",
   "藍瀑"
  ],
  "faction": "藍瀑湖城主府",
  "importance": "major",
  "bio": "藍瀑湖的圣祖守護者，本體親至布設六絕青雷大陣圍殺宝花，評估勝算不足後率先撤退；暗中控制血牙米出售。",
  "firstChapter": 2115,
  "canonFate": "藍瀑湖的圣祖守護者，本體親至布設六絕青雷大陣圍殺宝花，評估勝算不足後率先撤退；暗中控制血牙米出售。",
  "chronicle": [
   {
    "fromChapter": 2115,
    "toChapter": 2144,
    "locationId": "魔界",
    "realm": "大乘（圣祖，本體）",
    "status": "alive",
    "activity": "藍瀑湖的圣祖守護者，本體親至布設六絕青雷大陣圍殺宝花，評估勝算不足後率先撤退；暗中控制血牙米出售。"
   }
  ]
 },
 {
  "id": "闕（錦衣書生）",
  "name": "闕（錦衣書生）",
  "aliases": [],
  "faction": "鬼靈門（碎魂真人門下）",
  "importance": "major",
  "bio": "追查韓立，被噬金蟲金雲瞬間吞噬殲滅。",
  "firstChapter": 656,
  "canonFate": "被韓立誅殺",
  "chronicle": [
   {
    "fromChapter": 656,
    "toChapter": 685,
    "locationId": "天南",
    "realm": "結丹期",
    "status": "alive",
    "activity": "追查韓立，被噬金蟲金雲瞬間吞噬殲滅。"
   }
  ]
 },
 {
  "id": "魏離辰",
  "name": "魏離辰",
  "aliases": [],
  "faction": "化意門",
  "importance": "major",
  "bio": "化意門長老，魏無涯之侄孫，三百年進阶元嬰的天才，謀求以南宮婉為爐鼎之修士（疑修採陰補陽術），本弧未正面出場。",
  "firstChapter": 686,
  "canonFate": "化意門長老，魏無涯之侄孫，三百年進阶元嬰的天才，謀求以南宮婉為爐鼎之修士（疑修採陰補陽術），本弧未正面出場。",
  "chronicle": [
   {
    "fromChapter": 686,
    "toChapter": 715,
    "locationId": "天南",
    "realm": "元嬰初期",
    "status": "alive",
    "activity": "化意門長老，魏無涯之侄孫，三百年進阶元嬰的天才，謀求以南宮婉為爐鼎之修士（疑修採陰補陽術），本弧未正"
   }
  ]
 },
 {
  "id": "羅仙子",
  "name": "羅仙子",
  "aliases": [
   "綠衣婦人",
   "修羅蛛族母"
  ],
  "faction": "修羅蛛一族",
  "importance": "major",
  "bio": "天蛛城族母，具強大神念，率合體期至大乘族人守衛石城，與奕姓老者暗中謀畫利用空魚族的秘密大業；在修羅大戰中對抗血燃黑鱗。",
  "firstChapter": 2266,
  "canonFate": "天蛛城族母，具強大神念，率合體期至大乘族人守衛石城，與奕姓老者暗中謀畫利用空魚族的秘密大業；在修羅大戰中對抗血燃黑鱗。",
  "chronicle": [
   {
    "fromChapter": 2266,
    "toChapter": 2295,
    "locationId": "靈界",
    "realm": "大乘期（強大）",
    "status": "alive",
    "activity": "天蛛城族母，具強大神念，率合體期至大乘族人守衛石城，與奕姓老者暗中謀畫利用空魚族的秘密大業；在修羅大"
   }
  ]
 },
 {
  "id": "羅某",
  "name": "羅某",
  "aliases": [
   "矮胖修士",
   "彭易雙兇之老大"
  ],
  "faction": "散修（惡名昭彰）",
  "importance": "major",
  "bio": "彭易雙凶之首，與光頭大漢圖謀伏殺韓立，被至木靈嬰吞噬精魂身亡",
  "firstChapter": 626,
  "canonFate": "精魂被至木靈嬰吞噬，肉體成活死人，被韓立焚毀",
  "chronicle": [
   {
    "fromChapter": 626,
    "toChapter": 655,
    "locationId": "天南",
    "realm": "筑基中期",
    "status": "dead",
    "activity": "彭易雙凶之首，與光頭大漢圖謀伏殺韓立，被至木靈嬰吞噬精魂身亡"
   }
  ]
 },
 {
  "id": "隴羽",
  "name": "隴羽",
  "aliases": [
   "隴家修士（其一）"
  ],
  "faction": "人族隴家",
  "importance": "major",
  "bio": "陇家雙修之一，擅長養鬼驅魔術，以赤紅古書召喚魔影助陇東護衛血晶摩訶劍，後撤退。",
  "firstChapter": 1358,
  "canonFate": "陇家雙修之一，擅長養鬼驅魔術，以赤紅古書召喚魔影助陇東護衛血晶摩訶劍，後撤退。",
  "chronicle": [
   {
    "fromChapter": 1358,
    "toChapter": 1387,
    "locationId": "天淵城",
    "realm": "煉虛中期",
    "status": "alive",
    "activity": "陇家雙修之一，擅長養鬼驅魔術，以赤紅古書召喚魔影助陇東護衛血晶摩訶劍，後撤退。"
   }
  ]
 },
 {
  "id": "隴麗娘",
  "name": "隴麗娘",
  "aliases": [
   "隴麗娘"
  ],
  "faction": "隴家（外嫁女）",
  "importance": "major",
  "bio": "與黑眉老者（李姓）夫婦謀劃強奪器靈子傳承寶珠為患病之子「名兒」治病，擄走器靈子、對海月天植入附心絲",
  "firstChapter": 1785,
  "canonFate": "被韓立（巨猿形態）扼喉制服後放走，最終攜子回歸陇家",
  "chronicle": [
   {
    "fromChapter": 1785,
    "toChapter": 1814,
    "locationId": "魔界",
    "realm": "煉虛期",
    "status": "alive",
    "activity": "與黑眉老者（李姓）夫婦謀劃強奪器靈子傳承寶珠為患病之子「名兒」治病，擄走器靈子、對海月天植入附心絲"
   }
  ]
 },
 {
  "id": "隴鱗",
  "name": "隴鱗",
  "aliases": [
   "隴家修士（其二）"
  ],
  "faction": "人族隴家",
  "importance": "major",
  "bio": "陇家雙修之一，擅長養鬼驅魔術，以漆黑畫軸召喚魔頭，率無相鬼王阻擊韓立，後撤退。",
  "firstChapter": 1358,
  "canonFate": "陇家雙修之一，擅長養鬼驅魔術，以漆黑畫軸召喚魔頭，率無相鬼王阻擊韓立，後撤退。",
  "chronicle": [
   {
    "fromChapter": 1358,
    "toChapter": 1387,
    "locationId": "天淵城",
    "realm": "煉虛中期",
    "status": "alive",
    "activity": "陇家雙修之一，擅長養鬼驅魔術，以漆黑畫軸召喚魔頭，率無相鬼王阻擊韓立，後撤退。"
   }
  ]
 },
 {
  "id": "嚴某",
  "name": "嚴某",
  "aliases": [
   "嚴兄弟"
  ],
  "faction": "天闕堡",
  "importance": "major",
  "bio": "與靈獸山絡腮鬍子多年酒肉朋友，用融靈符結伴入禁地，分心白日夢時被韓立以透明絲線瞬斬首級。",
  "firstChapter": 172,
  "canonFate": "被韓立透明絲線瞬殺",
  "chronicle": [
   {
    "fromChapter": 172,
    "toChapter": 201,
    "locationId": "越京",
    "realm": "煉氣期第十二層頂峰",
    "status": "alive",
    "activity": "與靈獸山絡腮鬍子多年酒肉朋友，用融靈符結伴入禁地，分心白日夢時被韓立以透明絲線瞬斬首級。"
   }
  ]
 },
 {
  "id": "馨王府小王爺",
  "name": "馨王府小王爺",
  "aliases": [
   "教主記名弟子"
  ],
  "faction": "黑煞教",
  "importance": "major",
  "bio": "馨王之子，黑煞教教主唯一記名弟子，修有煞氣護體黑光功法，被韓立以青元劍芒削去雙腿生擒，審訊後被毒殺。",
  "firstChapter": 292,
  "canonFate": "被韓立以斷魂丹毒殺",
  "chronicle": [
   {
    "fromChapter": 292,
    "toChapter": 321,
    "locationId": "越京",
    "realm": "煉氣期十一層",
    "status": "alive",
    "activity": "馨王之子，黑煞教教主唯一記名弟子，修有煞氣護體黑光功法，被韓立以青元劍芒削去雙腿生擒，審訊後被毒殺。"
   }
  ]
 },
 {
  "id": "鐵翅魔（寄附化身）",
  "name": "鐵翅魔（寄附化身）",
  "aliases": [
   "赤紅巨蟾蜍（寄附體）",
   "鐵伯父（血瑛稱呼）",
   "青袍男子（真身）"
  ],
  "faction": "古魔界三大聖階（鐵翅、血臂、多眼）",
  "importance": "major",
  "bio": "以魔骨珠煉製寄附化身附身巨蟾蜍，以火焰融合黑翅魔風的秘術發動強攻，被韓立以春黎劍陣元氣之劍一斩斬殺，化身與眉宇間靈珠俱碎。",
  "firstChapter": 1628,
  "canonFate": "化身被元氣之劍斬殺。",
  "chronicle": [
   {
    "fromChapter": 1628,
    "toChapter": 1657,
    "locationId": "天淵城",
    "realm": "合體聖階（古魔界存在）",
    "status": "alive",
    "activity": "以魔骨珠煉製寄附化身附身巨蟾蜍，以火焰融合黑翅魔風的秘術發動強攻，被韓立以春黎劍陣元氣之劍一斩斬殺，"
   }
  ]
 },
 {
  "id": "鐵隆",
  "name": "鐵隆",
  "aliases": [
   "藏老怪",
   "藏"
  ],
  "faction": "聖族鋼骨部",
  "importance": "major",
  "bio": "魔族最高階魔尊，統率倚天城外魔族大軍，以化血冥衛困住合息獸，並秘密通過分界鏡向「沙翁」通報情報。",
  "firstChapter": 1905,
  "canonFate": "魔族最高階魔尊，統率倚天城外魔族大軍，以化血冥衛困住合息獸，並秘密通過分界鏡向「沙翁」通報情報。",
  "chronicle": [
   {
    "fromChapter": 1905,
    "toChapter": 1934,
    "locationId": "魔界",
    "realm": "合體後期大成",
    "status": "alive",
    "activity": "魔族最高階魔尊，統率倚天城外魔族大軍，以化血冥衛困住合息獸，並秘密通過分界鏡向「沙翁」通報情報。"
   }
  ]
 },
 {
  "id": "鐵羅",
  "name": "鐵羅",
  "aliases": [
   "鐵大"
  ],
  "faction": "黑煞教（四大血侍）",
  "importance": "major",
  "bio": "光頭大漢，可施展「煞妖化身」（妖化），身長兩丈、頭生黑角、長鱗甲尾，被遮天鐘困住後以符寶威嚇逃走。",
  "firstChapter": 292,
  "canonFate": "光頭大漢，可施展「煞妖化身」（妖化），身長兩丈、頭生黑角、長鱗甲尾，被遮天鐘困住後以符寶威嚇逃走。",
  "chronicle": [
   {
    "fromChapter": 292,
    "toChapter": 321,
    "locationId": "越京",
    "realm": "筑基中期",
    "status": "alive",
    "activity": "光頭大漢，可施展「煞妖化身」（妖化），身長兩丈、頭生黑角、長鱗甲尾，被遮天鐘困住後以符寶威嚇逃走。"
   }
  ]
 },
 {
  "id": "顧統領",
  "name": "顧統領",
  "aliases": [
   "顧某"
  ],
  "faction": "九仙宮",
  "importance": "major",
  "bio": "九仙宮結丹統領，率隊追捕江劍英，下令滅口突兀人，被韓立噬金虫钻入体内击毙。",
  "firstChapter": 886,
  "canonFate": "被噬金虫鑽體而亡",
  "chronicle": [
   {
    "fromChapter": 886,
    "toChapter": 915,
    "locationId": "大晉",
    "realm": "結丹期",
    "status": "alive",
    "activity": "九仙宮結丹統領，率隊追捕江劍英，下令滅口突兀人，被韓立噬金虫钻入体内击毙。"
   }
  ]
 },
 {
  "id": "魔族青年",
  "name": "魔族青年",
  "aliases": [],
  "faction": "魔族（聖族）",
  "importance": "major",
  "bio": "魔族高層之一，做出最終決策收縮精銳入「眩光魔焰大陣」，等待吞天大人得手。",
  "firstChapter": 2175,
  "canonFate": "魔族高層之一，做出最終決策收縮精銳入「眩光魔焰大陣」，等待吞天大人得手。",
  "chronicle": [
   {
    "fromChapter": 2175,
    "toChapter": 2175,
    "locationId": "魔界",
    "realm": "凡人",
    "status": "alive",
    "activity": "魔族高層之一，做出最終決策收縮精銳入「眩光魔焰大陣」，等待吞天大人得手。"
   }
  ]
 },
 {
  "id": "魔族綠氣男子（金兄）",
  "name": "魔族綠氣男子（金兄）",
  "aliases": [
   "金兄"
  ],
  "faction": "魔族（聖族）",
  "importance": "major",
  "bio": "魔族陣法宗師，主動提議並負責布置「眩光魔焰大陣」，帶足布陣材料，半日內完成百里大陣。",
  "firstChapter": 2175,
  "canonFate": "魔族陣法宗師，主動提議並負責布置「眩光魔焰大陣」，帶足布陣材料，半日內完成百里大陣。",
  "chronicle": [
   {
    "fromChapter": 2175,
    "toChapter": 2175,
    "locationId": "魔界",
    "realm": "合體期（大乘以下）",
    "status": "alive",
    "activity": "魔族陣法宗師，主動提議並負責布置「眩光魔焰大陣」，帶足布陣材料，半日內完成百里大陣。"
   }
  ]
 },
 {
  "id": "銀月",
  "name": "銀月",
  "aliases": [
   "玲瓏仙子",
   "玲瓏道友",
   "器靈",
   "銀月狼妖",
   "玲兒",
   "銀月"
  ],
  "faction": "韓立（侍妾/靈獸）",
  "importance": "major",
  "bio": "玉如意古宝的器靈，殘留銀月狼族記憶，以靈魂吞噬術夺舍四瞳靈狐軀體，後以主魂移入青竹蜂雲劍成為韓立法寶器靈，換取日後自由的契約。",
  "firstChapter": 596,
  "canonFate": "成為韓立青竹蜂雲劍的器靈；元神受重創，沉眠法寶療傷；與珑梦元神融合，以銀髮女子「玲珑」形態重生；隨玲瓏回靈界",
  "chronicle": [
   {
    "fromChapter": 596,
    "toChapter": 715,
    "locationId": "天南",
    "realm": "不明（靈狐形態）",
    "status": "alive",
    "activity": "韓立趁破禁強光掩護秘密送入洞府先行取寶，取走三只玉盒，本弧表現出超凡遁術與幻術。"
   },
   {
    "fromChapter": 716,
    "toChapter": 745,
    "locationId": "掩月宗",
    "realm": "器靈（無具體境界）",
    "status": "alive",
    "activity": "以紫鎲兜先後擒住掩月宗大長老和乐上師，以粉紅香雾迷幻術幫助韓立脫困，並趁機奪走青銅油燈。"
   },
   {
    "fromChapter": 746,
    "toChapter": 795,
    "locationId": "天南",
    "realm": "七級狐妖（化形期）",
    "status": "alive",
    "activity": "以粉紅香霧與紫鋮兜（韓立所贈）多次協助韓立戰鬥，識破七龍樁赝品、擒獲黑袍青年元嬰；隨韓立赴極西之地"
   },
   {
    "fromChapter": 796,
    "toChapter": 1095,
    "locationId": "大晉",
    "realm": "化神期（寄附玲瓏神念體內）",
    "status": "alive",
    "activity": "趁珑梦神念大損後奪得主導，協助韓立封靈並施展靈魂吞噬吞噬元刹聖祖分神，消耗大量神念後再度沉睡"
   },
   {
    "fromChapter": 1598,
    "toChapter": 1627,
    "locationId": "天淵城",
    "realm": "化神期（寄附玲瓏神念體內）",
    "status": "alive",
    "activity": "韓立昔日伴靈狐，見紫狐幼獸時觸景生情"
   },
   {
    "fromChapter": 1965,
    "toChapter": 2174,
    "locationId": "魔界",
    "realm": "合體期",
    "status": "alive",
    "activity": "本弧因修煉忘情訣與七星月體相克，每日循環在有情與無情狀態間轉換，與韓立重逢後長談敘舊，確定需長期留在"
   },
   {
    "fromChapter": 2176,
    "toChapter": 2205,
    "locationId": "靈界",
    "realm": "合體期",
    "status": "alive",
    "activity": "陪同韓立閉關，多次出門護法殺退魔族，協助識別三陽灌體，救下許芊羽；與獠影聯手斬滅古魔。"
   },
   {
    "fromChapter": 2206,
    "toChapter": 2235,
    "locationId": "魔界",
    "realm": "合體初期",
    "status": "alive",
    "activity": "隨韓立赴許家、聖島再進魔界，因安全考量在出發攻打始印之地前被韓立留在沙漠臨時洞府"
   },
   {
    "fromChapter": 2236,
    "toChapter": 2295,
    "locationId": "靈界",
    "realm": "大乘期",
    "status": "alive",
    "activity": "隨韓立前往靈域，留守翠煙城附近等候。"
   },
   {
    "fromChapter": 2296,
    "toChapter": 2325,
    "locationId": "青元宮",
    "realm": "合體期→煉虛期（分離忘情訣後修為跌落）",
    "status": "alive",
    "activity": "祖父敖嘯隕落後痛苦閉關，後接受韓立以芝仙靈軀化身分離忘情訣真元的方案，留守青元宮。"
   },
   {
    "fromChapter": 2421,
    "toChapter": 2450,
    "locationId": "無涯海",
    "realm": "大乘（弧末才進阶）",
    "status": "alive",
    "activity": "摒棄忘情決後患，弧末正式進阶大乘，见证韩立飞升之劫。"
   }
  ]
 },
 {
  "id": "南宮婉",
  "name": "南宮婉",
  "aliases": [
   "掩月宗師祖",
   "婉兒",
   "南宮仙子",
   "南宮屏（舊化名）",
   "月仙子"
  ],
  "faction": "韓立之妻",
  "importance": "major",
  "bio": "率弟子入禁地尋寶，以朱雀環法寶戰墨蛟，同困地下後與韓立合體，以素女輪迴功渡力助逃，失去五六年法力",
  "firstChapter": 202,
  "canonFate": "失處子之身，素女輪迴功暫時破損，損失五六年法力；中封魂咒後冰封於密室，命無立即之虞但需靠外物解咒；未能趕上韓立飛升，留守靈界",
  "chronicle": [
   {
    "fromChapter": 202,
    "toChapter": 231,
    "locationId": "越京",
    "realm": "結丹期（素女輪迴功輪迴期，外貌年幼少女）",
    "status": "alive",
    "activity": "率弟子入禁地尋寶，以朱雀環法寶戰墨蛟，同困地下後與韓立合體，以素女輪迴功渡力助逃，失去五六年法力"
   },
   {
    "fromChapter": 262,
    "toChapter": 291,
    "locationId": "掩月宗",
    "realm": "結丹期",
    "status": "alive",
    "activity": "掩月宗女修士，與韓立有不可言說的舊情；在前線陣地偶遇韓立時異色一閃卻公開否認相識以掩人耳目。"
   },
   {
    "fromChapter": 352,
    "toChapter": 363,
    "locationId": "越京",
    "realm": "結丹期",
    "status": "alive",
    "activity": "僅被提及，是韓立誤認南宮屏的原因，與南宮屏情同姐妹，韓立曾與其有過合體之緣。"
   },
   {
    "fromChapter": 394,
    "toChapter": 423,
    "locationId": "亂星海",
    "realm": "結丹期",
    "status": "alive",
    "activity": "韓立舊識，卓如婷的風韻令韓立聯想起她"
   },
   {
    "fromChapter": 716,
    "toChapter": 745,
    "locationId": "落雲宗",
    "realm": "元嬰初期（法力被禁制大半，戰後解除）",
    "status": "alive",
    "activity": "協助韓立設伏擒住師姐，以輪回神光迷暈師姐，銷毀困心術令牌後與韓立分手，獨自先行回落雲宗。"
   },
   {
    "fromChapter": 746,
    "toChapter": 775,
    "locationId": "掩月宗",
    "realm": "元嬰初期",
    "status": "alive",
    "activity": "被程師兄認作義妹，掩月宗對外宣布其走火入魔陨落，婚約解除；留守後方未參與此戰"
   },
   {
    "fromChapter": 776,
    "toChapter": 795,
    "locationId": "天南",
    "realm": "元嬰初期（冰封中）",
    "status": "alive",
    "activity": "被阴罗宗修士以封魂咒所傷，自以大法輪回訣姹女天月訣封印冰壁延緩咒效，留玉簡給韓立"
   },
   {
    "fromChapter": 856,
    "toChapter": 885,
    "locationId": "大晉",
    "realm": "元嬰後期（冰封狀態）",
    "status": "alive",
    "activity": "仍被封魂咒冰封，韓立餵入火蟾獸妖丹後毒咒持續減弱，預估百年內可望自行解除。"
   },
   {
    "fromChapter": 1755,
    "toChapter": 1784,
    "locationId": "天淵城",
    "realm": "不明",
    "status": "alive",
    "activity": "韓立牽掛之愛妻，在天淵城查無飛升記錄，下落不明，韓立委託儒生等人長期打探。"
   },
   {
    "fromChapter": 1815,
    "toChapter": 2084,
    "locationId": "魔界",
    "realm": "不明",
    "status": "alive",
    "activity": "韓立發妻，被推測可能流落小靈天微型界面中。"
   },
   {
    "fromChapter": 2236,
    "toChapter": 2265,
    "locationId": "靈界",
    "realm": "不明",
    "status": "alive",
    "activity": "韓立的雙修伴侣，據宝花透露可能身陷小靈界，是韓立測算小靈界坐標的主要動機。"
   },
   {
    "fromChapter": 2386,
    "toChapter": 2415,
    "locationId": "青元宮",
    "realm": "合體大成（近大乘）",
    "status": "alive",
    "activity": "因空間通道中被羅睺與百頭蟲激戰波及落入小靈天，得兩頭真靈晶核機緣成人族第一強者；本弧與韓立重逢，隨其"
   }
  ]
 },
 {
  "id": "莫簡離",
  "name": "莫簡離",
  "aliases": [
   "莫老怪",
   "莫道友",
   "莫兄",
   "莫前輩",
   "莫老鬼"
  ],
  "faction": "聖島（人族）",
  "importance": "major",
  "bio": "人妖兩族另一名大乘修士，曾冒險以星盤進入真魔界探查魔族動向，被魔界聖祖發現後返回。",
  "firstChapter": 1755,
  "canonFate": "與敖嘯同時失蹤，下落不明；被困始印之地；在天劫中隕落。",
  "chronicle": [
   {
    "fromChapter": 1755,
    "toChapter": 2024,
    "locationId": "魔界",
    "realm": "大乘期",
    "status": "alive",
    "activity": "曾贈太極圖（玄天聖寶）給谷長老；本弧有情報指其即將和敖嘯一同應對魔族三大始祖。"
   },
   {
    "fromChapter": 2115,
    "toChapter": 2144,
    "locationId": "靈界",
    "realm": "大乘",
    "status": "alive",
    "activity": "韓立計劃回靈界後將魔界大劫情報告知此位大乘存在。"
   },
   {
    "fromChapter": 2145,
    "toChapter": 2174,
    "locationId": "魔界",
    "realm": "大乘期",
    "status": "alive",
    "activity": "本弧坐鎮木棉城，與敖啸、韩立密議螟蟲之母情報與大戰部署，委派韩立守護二號陣眼，並承諾日後全力輔助韩立"
   },
   {
    "fromChapter": 2176,
    "toChapter": 2205,
    "locationId": "靈界",
    "realm": "大乘期",
    "status": "alive",
    "activity": "本弧開篇道別，其傳授的翻天台秘法和大乘渡劫經驗對韩立極有助益。"
   },
   {
    "fromChapter": 2206,
    "toChapter": 2265,
    "locationId": "魔界",
    "realm": "大乘期",
    "status": "alive",
    "activity": "元氣在魔界中有所損耗，韓立贈茴焚丹助其恢復；提出靈王持有三清雷霄符的消息，邀韓立聯袂前往靈族。"
   },
   {
    "fromChapter": 2266,
    "toChapter": 2325,
    "locationId": "靈界",
    "realm": "大乘期",
    "status": "alive",
    "activity": "以法陣困住四名成年修羅蛛，在寒潭打撈中出力，最終得三枚晶核和雷霄符後選擇閉關靜待。"
   },
   {
    "fromChapter": 2386,
    "toChapter": 2415,
    "locationId": "天淵城",
    "realm": "大乘期",
    "status": "alive",
    "activity": "與韓立在天淵城重聚，聽取真仙降世消息後建議調查仙人目的並安排人族疏散，負責族中事務。"
   },
   {
    "fromChapter": 2421,
    "toChapter": 2450,
    "locationId": "無涯海",
    "realm": "大乘（已隕落）",
    "status": "dead",
    "activity": "昔日人族大乘，本弧提及在數百年前一次大天劫中陨落。"
   }
  ]
 },
 {
  "id": "元瑤",
  "name": "元瑤",
  "aliases": [
   "元瑤",
   "黑袍女修",
   "元妹妹",
   "元仙子",
   "元瑤妹妹"
  ],
  "faction": "無門無派（散修，前青陽門人）",
  "importance": "major",
  "bio": "艷美散修，對曲魂表現出興趣，被曲魂冷淡拒絕",
  "firstChapter": 364,
  "canonFate": "金丹碎裂，修為盡失，改修陰陽輪回訣",
  "chronicle": [
   {
    "fromChapter": 364,
    "toChapter": 595,
    "locationId": "亂星海",
    "realm": "結丹期（金丹已碎）",
    "status": "alive",
    "activity": "施展還魂術至一半被鬼霧打斷，金丹碎裂，被吸入陰冥之地；決意與師姐妍麗的鬼魂共同修煉「陰陽輪回訣」以恢"
   },
   {
    "fromChapter": 1448,
    "toChapter": 1477,
    "locationId": "地淵",
    "realm": "化神初期",
    "status": "alive",
    "activity": "昔日乱星海舊識，與妍丽修成陰陽輪回訣後糊里糊塗落入地淵被鬼婆收入門下；發現鬼婆欲吞噬二人精魂後秘密聯"
   },
   {
    "fromChapter": 1478,
    "toChapter": 1537,
    "locationId": "天淵城",
    "realm": "靈帥期（半人半鬼之身）",
    "status": "alive",
    "activity": "身具「天陰之體」，正式拜姜前輩為師；姜前輩承諾助其恢復人身後方可修習長元族神通。"
   },
   {
    "fromChapter": 1845,
    "toChapter": 1874,
    "locationId": "冥河之地",
    "realm": "煉虛後期",
    "status": "alive",
    "activity": "青元子義女，與韩立重逢，仍困居冥河之地，随义父闭关冲击合体"
   },
   {
    "fromChapter": 2296,
    "toChapter": 2325,
    "locationId": "靈界",
    "realm": "合體初期",
    "status": "alive",
    "activity": "青元子義女，以天陰之體施展特殊神通輔助義父渡劫，本弧結束後韓立提出接其回族中。"
   },
   {
    "fromChapter": 2326,
    "toChapter": 2355,
    "locationId": "冥河之地",
    "realm": "合體初期",
    "status": "alive",
    "activity": "青元子義女，肉身尚未凝固，須留在冥河之地二三百年，本弧初段與韓立道別。"
   },
   {
    "fromChapter": 2421,
    "toChapter": 2450,
    "locationId": "無涯海",
    "realm": "合體期",
    "status": "alive",
    "activity": "韓立分魂下界返回後隨同妍丽住在元合島偏殿，見證飛昇之劫。"
   }
  ]
 },
 {
  "id": "朱果兒",
  "name": "朱果兒",
  "aliases": [
   "小婢",
   "果兒",
   "黃衫少女"
  ],
  "faction": "韓立隨行",
  "importance": "major",
  "bio": "人族少女，修煉素女輪迴功，流落魔界為奴，被韓立以强大氣壓從萬奴塔强購帶走，韓立認定其與昔日舊人有關。",
  "firstChapter": 2025,
  "canonFate": "被宝花聖祖擄走，下落未明",
  "chronicle": [
   {
    "fromChapter": 2025,
    "toChapter": 2054,
    "locationId": "魔界",
    "realm": "結丹期",
    "status": "alive",
    "activity": "人族少女，修煉素女輪迴功，流落魔界為奴，被韓立以强大氣壓從萬奴塔强購帶走，韓立認定其與昔日舊人有關。"
   },
   {
    "fromChapter": 2055,
    "toChapter": 2084,
    "locationId": "靈界",
    "realm": "元嬰期（處輪回階段）",
    "status": "alive",
    "activity": "修煉素女輪回功，被韓立搜魂後得知其來自小靈天；暫為韓立婢女，後被林家修士護送返靈界途中遭宝花聖祖擄走"
   },
   {
    "fromChapter": 2085,
    "toChapter": 2144,
    "locationId": "魔界",
    "realm": "不詳（低於化神）",
    "status": "alive",
    "activity": "來自小靈天的少女，隨韓立同行；辨認出宝花給出的太玄罡木，為韓立確認小靈天情報真實性。"
   },
   {
    "fromChapter": 2145,
    "toChapter": 2415,
    "locationId": "靈界",
    "realm": "煉虛期",
    "status": "alive",
    "activity": "協助韓立尋找並確認小靈天入口，返回小靈天後被南宮婉正式收為弟子，留守墨靈聖舟。"
   }
  ]
 },
 {
  "id": "慕沛靈",
  "name": "慕沛靈",
  "aliases": [
   "慕姓女子",
   "慕師叔",
   "沛靈",
   "冷艷女子"
  ],
  "faction": "韓立侍妾",
  "importance": "major",
  "bio": "天泉峰第一美女，負責指導韓立，讓韓立看管藥園，給予玄冰訣功法；被族中長老許配給言姓修士但極度厭惡對方；被峰主直接指定為試劍大會代表。",
  "firstChapter": 596,
  "canonFate": "本弧陨落",
  "chronicle": [
   {
    "fromChapter": 596,
    "toChapter": 795,
    "locationId": "天南",
    "realm": "築基後期至結丹前",
    "status": "alive",
    "activity": "在韓立不在期間與南宮婉相處甚好，主動請求隨韓立赴極西之地"
   },
   {
    "fromChapter": 856,
    "toChapter": 885,
    "locationId": "大晉",
    "realm": "元嬰初期（弧末剛結丹成功）",
    "status": "alive",
    "activity": "在韓立丹藥資助下結丹成功，答應改修顛鳳培元功；閉關出關後由韓立安排代掌宗門事務。"
   },
   {
    "fromChapter": 1155,
    "toChapter": 1184,
    "locationId": "墜魔谷",
    "realm": "結丹中期",
    "status": "alive",
    "activity": "韓立侍妾，百年內進阶结丹中期，隨柳玉、宋姓女子入墜魔谷尋藥，被第二元嬰生擒，本弧末獲韓立解救。"
   },
   {
    "fromChapter": 1185,
    "toChapter": 1214,
    "locationId": "掩月宗",
    "realm": "結丹後期",
    "status": "alive",
    "activity": "在韓立和南宫婉雙修大典後被南宮婉收為義妹，修煉南宮婉傳授的掩月宗秘術，韓立未立即做出安排留其繼續修煉"
   },
   {
    "fromChapter": 1215,
    "toChapter": 1244,
    "locationId": "落雲宗",
    "realm": "未明",
    "status": "alive",
    "activity": "韓立門下弟子，負責在子母峰迷霧禁制外迎接落雲宗長老等人。"
   },
   {
    "fromChapter": 1245,
    "toChapter": 1265,
    "locationId": "天南",
    "realm": "結丹期（嘗試突破元嬰）",
    "status": "alive",
    "activity": "韓立名義侍妾，因壽元臨盡急於突破元嬰，閉關時心魔入侵，法力反噬陨落。"
   }
  ]
 },
 {
  "id": "器靈子",
  "name": "器靈子",
  "aliases": [
   "小道士"
  ],
  "faction": "韓立門下記名弟子",
  "importance": "major",
  "bio": "霧海觀觀主，體內藏有祖師玄靈子的傳承法器，功法奇特，與韓立同行赴萬寶大會。",
  "firstChapter": 1755,
  "canonFate": "被救出，傳承寶珠保全",
  "chronicle": [
   {
    "fromChapter": 1755,
    "toChapter": 1814,
    "locationId": "魔界",
    "realm": "築基期",
    "status": "alive",
    "activity": "體內藏有雾海觀傳承寶珠，正式成為韓立記名弟子，被陇丽娘夫婦擄掠後由韓立救出"
   },
   {
    "fromChapter": 1815,
    "toChapter": 1904,
    "locationId": "天淵城",
    "realm": "元嬰中期",
    "status": "alive",
    "activity": "韓立大弟子，決定率門下弟子遷入天淵城作最低階衛士。"
   },
   {
    "fromChapter": 1965,
    "toChapter": 2024,
    "locationId": "魔界",
    "realm": "元嬰或化神期",
    "status": "alive",
    "activity": "韓立弟子，大戰期間守護石塔，傳遞消息。"
   },
   {
    "fromChapter": 2176,
    "toChapter": 2205,
    "locationId": "靈界",
    "realm": "化神後期",
    "status": "alive",
    "activity": "韩立第一弟子，在師父閉關期間主持門下事務，大乘慶典主持儀式。"
   },
   {
    "fromChapter": 2206,
    "toChapter": 2235,
    "locationId": "天淵城",
    "realm": "化神期",
    "status": "alive",
    "activity": "韓立弟子，協助慶典事務，留守天淵城"
   },
   {
    "fromChapter": 2236,
    "toChapter": 2265,
    "locationId": "靈界",
    "realm": "煉虛後期",
    "status": "alive",
    "activity": "受韓立命前往蠻荒世界歷練，暫離聖島。"
   }
  ]
 },
 {
  "id": "冰鳳",
  "name": "冰鳳",
  "aliases": [
   "冰魄（提及早年身份）",
   "冰魄仙子",
   "鳳道友",
   "鳳師姑",
   "冰師姑",
   "鳳仙子"
  ],
  "faction": "無",
  "importance": "major",
  "bio": "駐守韓立洞府，協助壓制進階時的天地元氣震盪，仍尋找恢復人身之法",
  "firstChapter": 1845,
  "canonFate": "被韓立去除神魂印記後安全離去；數年後以大乘老祖身份返回人族，人族隨之崛起。",
  "chronicle": [
   {
    "fromChapter": 1845,
    "toChapter": 1994,
    "locationId": "魔界",
    "realm": "炼虛期",
    "status": "alive",
    "activity": "被青龍上人以雙修名義長期脅迫，兜元阁被圍逼至危急，獲韓立解救；本弧末為韓立提供天鳳元陰助其衝擊後期"
   },
   {
    "fromChapter": 1995,
    "toChapter": 2024,
    "locationId": "天淵城",
    "realm": "合體大圓滿（接近突破）",
    "status": "alive",
    "activity": "本弧協助韓立突破後期，大戰後領悟突破靈機閉關，在天淵城外巡遊擊殺魔族，被寶花聖祖以天命銅錢感應追蹤。"
   },
   {
    "fromChapter": 2236,
    "toChapter": 2415,
    "locationId": "靈界",
    "realm": "合體後期",
    "status": "alive",
    "activity": "與六翼同行逃脫馬良追殺，以天鳳本源之力協助六翼恢復，最終随六翼被明尊找到並配合誘敵計劃。"
   },
   {
    "fromChapter": 2416,
    "toChapter": 2420,
    "locationId": "仙界",
    "realm": "大乘期（元氣大損）",
    "status": "alive",
    "activity": "與六翼共同引誘馬良，打賭韓立萬年內飛升仙界，雙方以噬血毒誓立約，後協助六翼去阻截阳鹿。"
   },
   {
    "fromChapter": 2421,
    "toChapter": 2450,
    "locationId": "無涯海",
    "realm": "大乘（本弧末期進阶大乘）",
    "status": "alive",
    "activity": "被韓立去除神魂印記後安全離去；數年後以大乘老祖身份返回人族，人族隨之崛起。"
   }
  ]
 },
 {
  "id": "向之禮",
  "name": "向之禮",
  "aliases": [
   "向老鬼",
   "向師兄",
   "老滑頭",
   "向道友",
   "小老頭",
   "李師侄（偽裝）"
  ],
  "faction": "人族（風元大陸）",
  "importance": "major",
  "bio": "集合時試圖拉攏韓立組弱者聯盟未果；入禁地後與巨劍門蒙某、清虛門道士組成跨派聯盟採藥。",
  "firstChapter": 172,
  "canonFate": "被幻妙天象困走，在本弧中消失。；元神燈熄滅，結局不明；被韓立誅滅血影後，肉身殘骸被噬靈真火焚化，正式死亡。",
  "chronicle": [
   {
    "fromChapter": 172,
    "toChapter": 231,
    "locationId": "越京",
    "realm": "煉氣期十層",
    "status": "alive",
    "activity": "禁地最後一刻逃出，以低階弟子身份成功存活讓眾人驚訝"
   },
   {
    "fromChapter": 946,
    "toChapter": 975,
    "locationId": "黃楓谷",
    "realm": "境界不明（疑化神期）",
    "status": "alive",
    "activity": "韓立昔年黃楓谷同門，此時偽裝為天符門炼气期「李師侄」，神識屏蔽連大衍神君亦無法穿透，疑為化神期修士；"
   },
   {
    "fromChapter": 976,
    "toChapter": 1095,
    "locationId": "昆吾山",
    "realm": "化神期",
    "status": "alive",
    "activity": "被玲瓏從幻妙天象中釋放，以破界符助眾人逃出第九層，提出廣邀南疆修士重新封鎖昆吾山的方案"
   },
   {
    "fromChapter": 1215,
    "toChapter": 1265,
    "locationId": "天南",
    "realm": "化神期",
    "status": "alive",
    "activity": "出面調停韓立與呼老魔之戰；後聯合風老怪、呼老魔進入五龍海空間節點，元神燈熄滅，陨落或飛昇不明。"
   },
   {
    "fromChapter": 1568,
    "toChapter": 1754,
    "locationId": "天淵城",
    "realm": "結丹期（肉身被血影佔據後修為跌落）",
    "status": "dead",
    "activity": "外表為在伏蛟城欠債、病容老者，實為被血影吞噬元神後操控的軀體；以贈巨靈符為餌，設局暗算韓立。"
   }
  ]
 },
 {
  "id": "妍麗",
  "name": "妍麗",
  "aliases": [
   "妍師姐",
   "妍道友",
   "妍兒"
  ],
  "faction": "冥河之地",
  "importance": "major",
  "bio": "娇小散修，在天都街外主動向韓立攀談，实为对曲魂感兴趣",
  "firstChapter": 364,
  "canonFate": "由元瑤為其施展還魂術（進行中）",
  "chronicle": [
   {
    "fromChapter": 364,
    "toChapter": 595,
    "locationId": "亂星海",
    "realm": "鬼道（鬼影狀態）",
    "status": "alive",
    "activity": "元瑤師姐的精魂，因還魂術被打斷而無法真正重新擁有身體，但精魂已凝固；在陰冥之地與元瑤合修「陰陽輪回訣"
   },
   {
    "fromChapter": 1448,
    "toChapter": 1477,
    "locationId": "冥河之地",
    "realm": "化神初期",
    "status": "alive",
    "activity": "元瑤師姐，與元瑤合修陰陽輪回訣呈半人半鬼之身；主動向韓立說明鬼婆陰謀，並提出可在冥河之地驅除韓立體內"
   },
   {
    "fromChapter": 1478,
    "toChapter": 1507,
    "locationId": "天淵城",
    "realm": "元嬰至化神期（具體未明）",
    "status": "alive",
    "activity": "元瑤師姐，同修陰陽輪回訣，曾參與煉製陰甲玄鬼並可操控一隊；與元瑤同被地血控體符禁制後由韓立救出；明確"
   },
   {
    "fromChapter": 1508,
    "toChapter": 1874,
    "locationId": "冥河之地",
    "realm": "煉虛初期",
    "status": "alive",
    "activity": "與元瑤同居冥河之地，半鬼之身漸漸恢復，与韩立叙旧"
   },
   {
    "fromChapter": 2296,
    "toChapter": 2325,
    "locationId": "靈界",
    "realm": "煉虛後期",
    "status": "alive",
    "activity": "青元子弟子，主持十八天煞大陣抵擋三名大乘攻勢，被不滅天尊隔空重傷，向韓立通報敵情。"
   },
   {
    "fromChapter": 2326,
    "toChapter": 2355,
    "locationId": "冥河之地",
    "realm": "煉虛後期",
    "status": "alive",
    "activity": "青元子傳弟子，與元瑤同留冥河之地，本弧初段與韓立道別。"
   }
  ]
 },
 {
  "id": "辛如音",
  "name": "辛如音",
  "aliases": [
   "辛小姐"
  ],
  "faction": "元武國（散修）",
  "importance": "major",
  "bio": "精通古法陣的女阵法師，與齊雲霄合力改良過顛倒五行陣；因身份暴露遭修士圍困，被韓立救出；接受委托以八百年靈草為酬修復古傳送陣圖紙，約定半年後交付。",
  "firstChapter": 262,
  "canonFate": "壽命不足兩年，預期將亡；早年已亡故；早年病逝；已故（本弧前）",
  "chronicle": [
   {
    "fromChapter": 262,
    "toChapter": 363,
    "locationId": "越京",
    "realm": "築基期（具體層次不明，龍吟之質導致經脈枯萎）",
    "status": "alive",
    "activity": "龍吟之質、壽命不足兩年，將修復古傳送陣的玉簡及陣旗陣盤全數贈予韓立，求韓立承諾日後滅付家。"
   },
   {
    "fromChapter": 394,
    "toChapter": 483,
    "locationId": "亂星海",
    "realm": "築基期（具體層次不明，龍吟之質導致經脈枯萎）",
    "status": "alive",
    "activity": "陣法天才，其典籍中提出「斷絕靈力與空間能量聯繫」的理論構想，被韓立活用取得雙件古寶"
   },
   {
    "fromChapter": 626,
    "toChapter": 1184,
    "locationId": "天南",
    "realm": "（已故，筑基期修士）",
    "status": "alive",
    "activity": "韓立昔年舊識，已故，其竹樓故居保存於元武國小山，韓立懷疑田琴兒為其轉世。"
   }
  ]
 },
 {
  "id": "海大少",
  "name": "海大少",
  "aliases": [
   "月天"
  ],
  "faction": "無",
  "importance": "major",
  "bio": "出身凡人煉體世家，身具可定期消失的奇異風靈根，個性豪爽，與韓立、器靈子同行赴萬寶大會。",
  "firstChapter": 1755,
  "canonFate": "韓立親傳弟子，受命勘察並選定無涯海元合島作為新洞府，後負責島上日常事務。",
  "chronicle": [
   {
    "fromChapter": 1755,
    "toChapter": 1784,
    "locationId": "魔界",
    "realm": "筑基期（炼体金剛訣第三層）",
    "status": "alive",
    "activity": "出身凡人煉體世家，身具可定期消失的奇異風靈根，個性豪爽，與韓立、器靈子同行赴萬寶大會。"
   },
   {
    "fromChapter": 1815,
    "toChapter": 1844,
    "locationId": "天淵城",
    "realm": "元嬰期",
    "status": "alive",
    "activity": "協助韓立傳遞消息，隨器靈子一同前往天淵城修煉。"
   },
   {
    "fromChapter": 1845,
    "toChapter": 2024,
    "locationId": "魔界",
    "realm": "不詳",
    "status": "alive",
    "activity": "韓立弟子，大戰期間守護石塔。"
   },
   {
    "fromChapter": 2206,
    "toChapter": 2235,
    "locationId": "天淵城",
    "realm": "化神期（略低於白果兒）",
    "status": "alive",
    "activity": "韓立弟子，留守天淵城"
   },
   {
    "fromChapter": 2236,
    "toChapter": 2265,
    "locationId": "靈界",
    "realm": "化神初期",
    "status": "alive",
    "activity": "被韓立留在聖島繼續修煉，暫代管理器靈子的門下弟子。"
   },
   {
    "fromChapter": 2296,
    "toChapter": 2325,
    "locationId": "無涯海",
    "realm": "未明",
    "status": "alive",
    "activity": "韓立親傳弟子，受命勘察並選定無涯海元合島作為新洞府，後負責島上日常事務。"
   }
  ]
 },
 {
  "id": "紫靈",
  "name": "紫靈",
  "aliases": [
   "紫小姐",
   "凌紫靈",
   "紫靈仙子"
  ],
  "faction": "亂星海（旅伴）",
  "importance": "major",
  "bio": "韓立的旅伴，抵達天南溪國後與韓立分別，為梅凝牽線欲令其做韓立侍妾被婉拒；與梅凝留在天南學習當地語言。",
  "firstChapter": 596,
  "canonFate": "自願離開韓立，獨自修行；留在魔界，自斷回歸人族之路",
  "chronicle": [
   {
    "fromChapter": 596,
    "toChapter": 775,
    "locationId": "天南",
    "realm": "結丹初期",
    "status": "alive",
    "activity": "乱星海舊識，邀韓立合作入坠魔谷取靈燭果，以容貌迷惑鬼靈門弟子獲取情報"
   },
   {
    "fromChapter": 796,
    "toChapter": 855,
    "locationId": "大晉",
    "realm": "結丹期",
    "status": "alive",
    "activity": "以奇香標記追蹤鬼靈門，帶領韓立尋找靈燭果標記，取得一枚靈燭果後閉關煉製造化丹，出關後陪同韓立但結丹修"
   },
   {
    "fromChapter": 1185,
    "toChapter": 1265,
    "locationId": "天南",
    "realm": "元嬰期",
    "status": "alive",
    "activity": "被韓立從呼老魔處救出，與韓立短暫相處後主動離去，立誓此生不嫁他人，全力修煉。"
   },
   {
    "fromChapter": 2115,
    "toChapter": 2144,
    "locationId": "魔界",
    "realm": "炼虛後期",
    "status": "alive",
    "activity": "飛升魔界後被六極以功法奴役成為備用化身；在魔界與韓立意外重逢，透露魔界大劫與自身處境；韓立承諾大乘後"
   },
   {
    "fromChapter": 2236,
    "toChapter": 2265,
    "locationId": "靈界",
    "realm": "未明（魔族修士）",
    "status": "alive",
    "activity": "人族少女被六極強奪魔體，韓立前來履行帶其回靈界的承諾，但紫灵為謀求最終飛升仙界的機緣，選擇留在魔界繼"
   }
  ]
 },
 {
  "id": "蟹道人",
  "name": "蟹道人",
  "aliases": [
   "黃金巨蟹",
   "蟹兄",
   "偽仙傀儡",
   "黃金圣蟹",
   "黃金聖蟹",
   "黃金蟹"
  ],
  "faction": "無",
  "importance": "major",
  "bio": "以每月一滴偽造化露為代價跟隨韓立，多次助其擊殺追殺者，最終全力一擊破開六絕青雷大陣。",
  "firstChapter": 2115,
  "canonFate": "數月內無法再戰，在靈獸環中休養；隨韓立飛升仙界",
  "chronicle": [
   {
    "fromChapter": 2115,
    "toChapter": 2174,
    "locationId": "魔界",
    "realm": "合體後期（由大乘降格後恢復中）",
    "status": "alive",
    "activity": "本弧以秘術摧毀魔界要塞法陣，屢次以金光防護和雷陣相助韩立，最終現出百丈黃金巨蟹本體震懾魔族圣祖化身。"
   },
   {
    "fromChapter": 2176,
    "toChapter": 2415,
    "locationId": "靈界",
    "realm": "大乘期",
    "status": "alive",
    "activity": "韓立指派其對抗三名古樹祖靈寄附者，以雷屬性神通壓制並擊敗三者，活捉其中一人元嬰。"
   },
   {
    "fromChapter": 2416,
    "toChapter": 2420,
    "locationId": "仙界",
    "realm": "偽仙傀儡",
    "status": "alive",
    "activity": "駐於韓立體內的仙界戰鬥傀儡，識破兩儀微塵陣真相，指導噬金蟲王在陣眼金柱刻靈紋以保護韓立。"
   },
   {
    "fromChapter": 2421,
    "toChapter": 2450,
    "locationId": "無涯海",
    "realm": "仙傀儡（真正仙傀儡，曾被稱偽仙傀儡）",
    "status": "alive",
    "activity": "協助韓立戰鬥、探查本命牌主人位置、在龍島護衛；弧末恢復往昔記憶，正式承認韓立為主。"
   },
   {
    "fromChapter": 2451,
    "toChapter": 2451,
    "locationId": "仙界",
    "realm": "仙傀儡",
    "status": "alive",
    "activity": "前主人（某位先飛升者）的未了心願之託，收入靈獸環隨韓立飛升仙界。"
   }
  ]
 },
 {
  "id": "魏無涯",
  "name": "魏無涯",
  "aliases": [],
  "faction": "化意門（九國盟大長老）",
  "importance": "major",
  "bio": "九國盟太上長老，天南三大頂尖修士之一，修毒道功法，介入南宮婉婚事，脅迫掩月宗大長老。",
  "firstChapter": 686,
  "canonFate": "重傷但存活，弧末仍在繼續鬥法；坐化身亡（百餘年前，弧段中提及）",
  "chronicle": [
   {
    "fromChapter": 686,
    "toChapter": 715,
    "locationId": "掩月宗",
    "realm": "元嬰後期（近化神）",
    "status": "alive",
    "activity": "九國盟太上長老，天南三大頂尖修士之一，修毒道功法，介入南宮婉婚事，脅迫掩月宗大長老。"
   },
   {
    "fromChapter": 746,
    "toChapter": 795,
    "locationId": "天南",
    "realm": "元嬰後期",
    "status": "alive",
    "activity": "對劃讓邊境土地給慕蘭族不滿，提出反對意見"
   },
   {
    "fromChapter": 796,
    "toChapter": 885,
    "locationId": "大晉",
    "realm": "元嬰後期",
    "status": "alive",
    "activity": "在七靈島向韓立詳述封印大陣危機，恢復坠魔谷一戰元氣損耗；勸說合歡老魔勿對韓立動手。"
   },
   {
    "fromChapter": 1155,
    "toChapter": 1244,
    "locationId": "天南",
    "realm": "（已坐化）",
    "status": "dead",
    "activity": "天南元嬰後期大修士，韓立回天南時獲悉其已在一百多年前坐化，令韓立深感惋惜與長生之志更堅。"
   }
  ]
 },
 {
  "id": "大衍神君",
  "name": "大衍神君",
  "aliases": [
   "大衍前輩",
   "老怪物",
   "老夫",
   "大衍",
   "大衍老怪"
  ],
  "faction": "散修",
  "importance": "major",
  "bio": "千竹教創教始祖，以寄神術附身特製傀儡存活萬餘年，精魂尚存數十年，藏於韓立背後竹筒（洞府天）中，傳授大衍訣後三層及傀儡術，接受韓立委託研究七焰扇替代材料。",
  "firstChapter": 796,
  "canonFate": "精魂餘壽僅數十年，即將魂飛魄散；明言頂多再堅持三四年元神便將潰散；本弧坐化輪迴；精魂瀕臨消散，與韓立達成協議換取苟延殘喘之機",
  "chronicle": [
   {
    "fromChapter": 796,
    "toChapter": 975,
    "locationId": "大晉",
    "realm": "元嬰後期（精魂殘存）",
    "status": "alive",
    "activity": "以裂魂術將精魂融入傀儡，殘魂坐化輪迴，臨終傳授「大衍寶經」全部傳承及要韓立日後奪回千竹教。"
   },
   {
    "fromChapter": 2452,
    "toChapter": 2454,
    "locationId": "北寒仙域",
    "realm": "殘魄（精魂嚴重流逝，僅能再活數十年）",
    "status": "dead",
    "activity": "威震極西之地百餘年的傀儡宗師，創立大衍訣，以金色小人傀儡寄存殘魄。與韓立談判後達成協議，傳授大衍訣後"
   }
  ]
 },
 {
  "id": "白果兒",
  "name": "白果兒",
  "aliases": [
   "果兒"
  ],
  "faction": "韓立門下記名弟子",
  "importance": "major",
  "bio": "擁有冰髓之體天賦靈體，被南山三惡挾持後由韓立救出，被收為記名弟子，獲贈炎陽玉佩與養精丹",
  "firstChapter": 1785,
  "canonFate": "韓立弟子，遊歷雷霆大陸西川之地發現隱藏玄玉礦，帶回大量昊陰之石獻給韓立。",
  "chronicle": [
   {
    "fromChapter": 1785,
    "toChapter": 1814,
    "locationId": "魔界",
    "realm": "煉氣三四層",
    "status": "alive",
    "activity": "擁有冰髓之體天賦靈體，被南山三惡挾持後由韓立救出，被收為記名弟子，獲贈炎陽玉佩與養精丹"
   },
   {
    "fromChapter": 1815,
    "toChapter": 1844,
    "locationId": "天淵城",
    "realm": "筑基→結丹中期（大典後二百年）",
    "status": "alive",
    "activity": "冰髓之體的記名弟子，一直跟隨韩立身側接受法力鎮壓寒毒；二百年後已長為結丹中期修士，代師往返天淵城執行"
   },
   {
    "fromChapter": 1845,
    "toChapter": 1904,
    "locationId": "魔界",
    "realm": "元嬰初期",
    "status": "alive",
    "activity": "韓立弟子，魔斑降世後決定前往玄武皇城投靠父親與祖母一脈。"
   },
   {
    "fromChapter": 2206,
    "toChapter": 2235,
    "locationId": "天淵城",
    "realm": "化神中期",
    "status": "alive",
    "activity": "慶典前趕回，留守天淵城"
   },
   {
    "fromChapter": 2236,
    "toChapter": 2265,
    "locationId": "靈界",
    "realm": "化神後期",
    "status": "alive",
    "activity": "冰髓之體天賦顯現，受命前往蠻荒歷練並蒐集昊陰之石，以供韓立煉製第五座極山（昊陰寒魄極山）。"
   },
   {
    "fromChapter": 2421,
    "toChapter": 2450,
    "locationId": "無涯海",
    "realm": "合體期",
    "status": "alive",
    "activity": "韓立弟子，遊歷雷霆大陸西川之地發現隱藏玄玉礦，帶回大量昊陰之石獻給韓立。"
   }
  ]
 },
 {
  "id": "呂洛",
  "name": "呂洛",
  "aliases": [
   "呂師兄",
   "呂長者"
  ],
  "faction": "落雲宗",
  "importance": "major",
  "bio": "留守闗天城參與殿議，與火龍童子聯絡各方修士迫使九國盟接受平等出兵條件，後領任務出征。",
  "firstChapter": 716,
  "canonFate": "落雲宗長老，韓立出發前告知其閉關計劃。",
  "chronicle": [
   {
    "fromChapter": 716,
    "toChapter": 745,
    "locationId": "天南",
    "realm": "元嬰期",
    "status": "alive",
    "activity": "留守闗天城參與殿議，與火龍童子聯絡各方修士迫使九國盟接受平等出兵條件，後領任務出征。"
   },
   {
    "fromChapter": 746,
    "toChapter": 1265,
    "locationId": "落雲宗",
    "realm": "元嬰初期",
    "status": "alive",
    "activity": "落雲宗長老，韓立出發前告知其閉關計劃。"
   }
  ]
 },
 {
  "id": "花石老祖",
  "name": "花石老祖",
  "aliases": [
   "花石"
  ],
  "faction": "妖族（水族）",
  "importance": "major",
  "bio": "魔界水族妖修，在韓立途徑內海時出面被收服為嚮導，引領韓立尋找司南四方壇。",
  "firstChapter": 2236,
  "canonFate": "向韓立傳達冰鳳的口信，并将護身法寶轉交冰鳳，之後被韓立令其遠離戰場。",
  "chronicle": [
   {
    "fromChapter": 2236,
    "toChapter": 2265,
    "locationId": "魔界",
    "realm": "合體初期",
    "status": "alive",
    "activity": "魔界水族妖修，在韓立途徑內海時出面被收服為嚮導，引領韓立尋找司南四方壇。"
   },
   {
    "fromChapter": 2266,
    "toChapter": 2420,
    "locationId": "靈界",
    "realm": "不詳（韓立弟子輩）",
    "status": "alive",
    "activity": "向韓立傳達冰鳳的口信，并将護身法寶轉交冰鳳，之後被韓立令其遠離戰場。"
   }
  ]
 },
 {
  "id": "凌玉靈",
  "name": "凌玉靈",
  "aliases": [
   "星宮宮主",
   "凌宮主",
   "玉靈道友"
  ],
  "faction": "星宮（外事執法）",
  "importance": "major",
  "bio": "性別難辨，容貌絕美；被逆星盟修士追殺时被韩立所救，帶韓立入天星城；修炼驻颜功法，无喉结。",
  "firstChapter": 484,
  "canonFate": "韓立分魂下界時拜訪，告知田琴兒、石堅等舊人消息；寿元因神秘原因打破人界限制而存活。",
  "chronicle": [
   {
    "fromChapter": 484,
    "toChapter": 513,
    "locationId": "天星城",
    "realm": "結丹初期",
    "status": "alive",
    "activity": "性別難辨，容貌絕美；被逆星盟修士追殺时被韩立所救，帶韓立入天星城；修炼驻颜功法，无喉结。"
   },
   {
    "fromChapter": 1125,
    "toChapter": 1244,
    "locationId": "天南",
    "realm": "元嬰中期",
    "status": "alive",
    "activity": "逆星盟潰敗後，成為星宮新宮主，引韓立前往探看元磁山，暗示希望韓立在星宮修煉元磁神光以留住其。"
   },
   {
    "fromChapter": 1245,
    "toChapter": 1265,
    "locationId": "天星城",
    "realm": "元嬰後期",
    "status": "alive",
    "activity": "韓立到天星城取元磁山時遇見，幫助韓立開啟星宮禁地；修煉出問題，由韓立指點。"
   },
   {
    "fromChapter": 2421,
    "toChapter": 2450,
    "locationId": "無涯海",
    "realm": "化神初期（乱星海星宫之主）",
    "status": "alive",
    "activity": "韓立分魂下界時拜訪，告知田琴兒、石堅等舊人消息；寿元因神秘原因打破人界限制而存活。"
   }
  ]
 },
 {
  "id": "曲兒",
  "name": "曲兒",
  "aliases": [
   "九曲靈參元神",
   "芝仙元神",
   "靈婢"
  ],
  "faction": "九曲靈參",
  "importance": "major",
  "bio": "九曲靈參元神在芝仙指引下，由白兔形象進化為六七歲女童，被韓立命名「曲兒」，入住芝仙靈軀炼化靈力，隨韓立進入廣寒界。",
  "firstChapter": 1658,
  "canonFate": "操控芝仙靈躯在洗靈池空間護法，後入靈池浸泡。",
  "chronicle": [
   {
    "fromChapter": 1658,
    "toChapter": 1687,
    "locationId": "廣寒界",
    "realm": "靈物（開啟靈智初期）",
    "status": "alive",
    "activity": "九曲靈參元神在芝仙指引下，由白兔形象進化為六七歲女童，被韓立命名「曲兒」，入住芝仙靈軀炼化靈力，隨韓"
   },
   {
    "fromChapter": 1688,
    "toChapter": 1747,
    "locationId": "天淵城",
    "realm": "元嬰期",
    "status": "alive",
    "activity": "暗藏虛天鼎中偷取第三顆虛靈丹，獲韓立贈三百六十口飛刀，後採集靈藥與飛虹魚妖丹，在密洞追殺中遭戎族攻擊"
   },
   {
    "fromChapter": 1935,
    "toChapter": 2114,
    "locationId": "魔界",
    "realm": "不明",
    "status": "alive",
    "activity": "操控芝仙靈躯在洗靈池空間護法，後入靈池浸泡。"
   }
  ]
 },
 {
  "id": "曲魂",
  "name": "曲魂",
  "aliases": [
   "鐵奴",
   "張鐵"
  ],
  "faction": "韓立",
  "importance": "major",
  "bio": "原為張鐵軀殼被墨大夫以象甲功與煉屍術改造而成，魂魄已失，被韓立以引魂鐘收服並賜名「曲魂」",
  "firstChapter": 61,
  "canonFate": "成功結丹（煞丹），成為韓立結丹期護衛",
  "chronicle": [
   {
    "fromChapter": 61,
    "toChapter": 99,
    "locationId": "七玄門",
    "realm": "傀儡（身材高大異常）",
    "status": "alive",
    "activity": "韓立的傀儡隨從，與韓立同乘馬車東行返鄉，待在車上未入村。"
   },
   {
    "fromChapter": 100,
    "toChapter": 129,
    "locationId": "黃楓谷",
    "realm": "傀儡（身材高大異常）",
    "status": "alive",
    "activity": "傀儡巨漢，格斃黑水巷二十餘名悍匪，後被寄存於孫二狗處助其奪得四平幫帮主"
   },
   {
    "fromChapter": 352,
    "toChapter": 363,
    "locationId": "天南",
    "realm": "煉屍（具備靈氣波動）",
    "status": "alive",
    "activity": "韓立的煉屍傀儡，全程隨行守護，最終隨韓立一同傳送離開天南。"
   },
   {
    "fromChapter": 364,
    "toChapter": 423,
    "locationId": "亂星海",
    "realm": "結丹初期（韓立分身）",
    "status": "alive",
    "activity": "全程協助韓立，以混元鉢和血靈鑽戰鬥，推倒封靈柱"
   }
  ]
 },
 {
  "id": "李化元",
  "name": "李化元",
  "aliases": [
   "李師父",
   "李師祖",
   "李師叔"
  ],
  "faction": "黃楓谷",
  "importance": "major",
  "bio": "賭局失利後以謝師禮為由收韓立為記名弟子，抽取其一半靈藥貢品，並贈《青元劍訣》與碧光刀法器",
  "firstChapter": 202,
  "canonFate": "十幾年後戰死（本弧後事）；已陨落",
  "chronicle": [
   {
    "fromChapter": 202,
    "toChapter": 291,
    "locationId": "越京",
    "realm": "結丹期",
    "status": "alive",
    "activity": "韓立師父，發現韓立筑基中期進境異常快速；確認韓立與南宮婉有過接觸後叮嚀少往來；派韓立前往越都保護恩人"
   },
   {
    "fromChapter": 322,
    "toChapter": 351,
    "locationId": "越國",
    "realm": "結丹期",
    "status": "alive",
    "activity": "韓立師尊，於本弧以玉簡傳令，宣告魔道潛入越國計畫取消，命弟子返回邊界大營。"
   },
   {
    "fromChapter": 352,
    "toChapter": 715,
    "locationId": "天南",
    "realm": "結丹（已陨落）",
    "status": "dead",
    "activity": "韓立恩師，百餘年前在抵抗慕蘭法士之戰中陨落。"
   }
  ]
 },
 {
  "id": "金越禪師",
  "name": "金越禪師",
  "aliases": [
   "金悅禪師",
   "金道友",
   "老僧",
   "金越大師"
  ],
  "faction": "天淵城長老會",
  "importance": "major",
  "bio": "天淵城五名人族長老之一，長年閉關苦修不理外事",
  "firstChapter": 1356,
  "canonFate": "大戰重傷",
  "chronicle": [
   {
    "fromChapter": 1356,
    "toChapter": 1904,
    "locationId": "天淵城",
    "realm": "合體初期",
    "status": "alive",
    "activity": "天淵城長老，親自出迎韓立，主持城防應對魔族的多次試探進攻。"
   },
   {
    "fromChapter": 1965,
    "toChapter": 2024,
    "locationId": "魔界",
    "realm": "合體中期",
    "status": "alive",
    "activity": "與谷長老聯手以太極圖配合韓立噬金蟲擊滅血光聖祖化身，大戰中身受重傷。"
   },
   {
    "fromChapter": 2176,
    "toChapter": 2205,
    "locationId": "靈界",
    "realm": "合體期",
    "status": "alive",
    "activity": "天渊城長老，對韩立進階大乘早有預感，提議以謹慎方式處理圣岛索人問題。"
   }
  ]
 },
 {
  "id": "銀光仙子",
  "name": "銀光仙子",
  "aliases": [
   "銀道友",
   "銀光",
   "面具女子"
  ],
  "faction": "天淵城長老會（妖族）",
  "importance": "major",
  "bio": "戴銀色面具的天淵城長老，身具銀月狼族部分血脈，透露敖嘯老祖安危訊息。",
  "firstChapter": 1755,
  "canonFate": "天渊城長老，堅持反對將海月天交給圣岛，知悉韩立與銀月之情；得知韩立進階大乘後難掩悵惘之感。",
  "chronicle": [
   {
    "fromChapter": 1755,
    "toChapter": 1784,
    "locationId": "天淵城",
    "realm": "合體期",
    "status": "alive",
    "activity": "戴銀色面具的天淵城長老，身具銀月狼族部分血脈，透露敖嘯老祖安危訊息。"
   },
   {
    "fromChapter": 1875,
    "toChapter": 1994,
    "locationId": "魔界",
    "realm": "合體期",
    "status": "alive",
    "activity": "本弧中從倚天城一戰後輾轉返回天渊城，在兜元阁事件中略偏袒韓立，親眼目睹渡劫全程"
   },
   {
    "fromChapter": 1995,
    "toChapter": 2024,
    "locationId": "天淵城",
    "realm": "合體期",
    "status": "alive",
    "activity": "通知韓立魔族進攻，大戰中協助防守天淵城。"
   },
   {
    "fromChapter": 2176,
    "toChapter": 2205,
    "locationId": "靈界",
    "realm": "合體期",
    "status": "alive",
    "activity": "天渊城長老，堅持反對將海月天交給圣岛，知悉韩立與銀月之情；得知韩立進階大乘後難掩悵惘之感。"
   }
  ]
 },
 {
  "id": "齊雲霄",
  "name": "齊雲霄",
  "aliases": [
   "齊公子",
   "齊道友",
   "齊大哥"
  ],
  "faction": "散修",
  "importance": "major",
  "bio": "神兵門煉器長老後代，持有「顛倒五行陣」殘缺布陣法器，以之換取韓立千年靈藥救友，同時交出《雲霄心術》",
  "firstChapter": 202,
  "canonFate": "本弧已死（在韓立離去後身亡）；已死（死於付家手上，本弧前已亡）；早年已亡故；已逝",
  "chronicle": [
   {
    "fromChapter": 202,
    "toChapter": 363,
    "locationId": "越京",
    "realm": "築基期",
    "status": "alive",
    "activity": "辛如音的夫君，已死於付家手上，本弧僅被提及。"
   },
   {
    "fromChapter": 626,
    "toChapter": 685,
    "locationId": "天南",
    "realm": "築基期",
    "status": "dead",
    "activity": "已逝，韓立此行專程祭奠其靈位。"
   }
  ]
 },
 {
  "id": "千秋聖女",
  "name": "千秋聖女",
  "aliases": [
   "千秋道友",
   "千秋姐姐"
  ],
  "faction": "靈族",
  "importance": "major",
  "bio": "攜萬森法盤與擎天戰舟圖出席拍賣，後介入韓立與陇家老祖之爭協助分開，與陇家老祖達成以廢靈換戰舟的合作協議",
  "firstChapter": 1785,
  "canonFate": "被元魇始祖以黑魔匕斬殺，本體古鏡落入元魇之手",
  "chronicle": [
   {
    "fromChapter": 1785,
    "toChapter": 1844,
    "locationId": "魔界",
    "realm": "合體後期",
    "status": "alive",
    "activity": "器靈族聖女，本體為人族參天真人昔日隨身宝物所化；展示伪魔珠模擬古魔氣息秘術，透露魔界洗靈池與淨靈蓮的"
   },
   {
    "fromChapter": 2025,
    "toChapter": 2084,
    "locationId": "幻夜城",
    "realm": "合體期",
    "status": "alive",
    "activity": "靈族圣靈之首，領導靈族一行；在幻夜城外與韓立一行匯合後盜取趙家魔蜥；與「止水」聖靈一同行動途中，兽尊"
   },
   {
    "fromChapter": 2085,
    "toChapter": 2114,
    "locationId": "苦靈島",
    "realm": "合體期",
    "status": "alive",
    "activity": "持有苦靈島線索，以兽甲增強寒水犀，操控偽仙儡「止水」；半儡之身在元魇識破後被黑魔匕一斬兩半，本體為古"
   }
  ]
 },
 {
  "id": "田琴兒",
  "name": "田琴兒",
  "aliases": [
   "田靈兒"
  ],
  "faction": "落雲宗（韓立親傳弟子）",
  "importance": "major",
  "bio": "文思月之女，中奇毒兼具女身龍吟之體，疑似辛如音轉世；韓立驅毒後贈《陣法要訣》，約定未來考察其阵法天赋。",
  "firstChapter": 1125,
  "canonFate": "陣法天才，在五龍海為空間節點布置和加強封印；龍吟之體被冰凤本命寒元解除，本弧末欲嘗試凝結元嬰。",
  "chronicle": [
   {
    "fromChapter": 1125,
    "toChapter": 1265,
    "locationId": "天南",
    "realm": "結丹後期",
    "status": "alive",
    "activity": "陣法天才，在五龍海為空間節點布置和加強封印；龍吟之體被冰凤本命寒元解除，本弧末欲嘗試凝結元嬰。"
   }
  ]
 },
 {
  "id": "白瑤怡",
  "name": "白瑤怡",
  "aliases": [
   "白兄",
   "白道友"
  ],
  "faction": "北夜小極宮",
  "importance": "major",
  "bio": "北冥島外事長老，受富姓老者之約赴雙蝎山；手持萬年冰玉修煉，韓立暗忖若其知寒髓在身必生禍端。",
  "firstChapter": 946,
  "canonFate": "本弧存活",
  "chronicle": [
   {
    "fromChapter": 946,
    "toChapter": 1005,
    "locationId": "大晉",
    "realm": "元嬰中期",
    "status": "alive",
    "activity": "擅長冰屬性神通，以冰扇對轟尸狼尸火、以冰晶飛刀助戰銀翅夜叉；被困灰繭後由韓立救出，得一粒培嬰丹。"
   },
   {
    "fromChapter": 1006,
    "toChapter": 1035,
    "locationId": "昆吾山",
    "realm": "元嬰中期",
    "status": "alive",
    "activity": "在昆吾山搜宝後貪心前往鎮魔塔，遭偷襲重傷後自封冰塊躲入六層，被韓立以紫罗極火化冰解救。"
   },
   {
    "fromChapter": 1066,
    "toChapter": 1124,
    "locationId": "大晉",
    "realm": "元嬰中期",
    "status": "alive",
    "activity": "小極宮修士，持兩口銀色飛劍，與葉姓長老聯手在主殿入口拖住蒼背青狼；韓立進入主殿時目擊二人陣腳不穩。"
   }
  ]
 },
 {
  "id": "柳玉",
  "name": "柳玉",
  "aliases": [
   "柳眉",
   "柳師叔"
  ],
  "faction": "落雲宗",
  "importance": "major",
  "bio": "追蹤韓立時被生擒，拜韓立為記名弟子改名柳眉，交出御靈宗驅蟲術及六翼霜蚣，加入落雲宗白鳳峰任副峰主。",
  "firstChapter": 656,
  "canonFate": "改投落雲宗",
  "chronicle": [
   {
    "fromChapter": 656,
    "toChapter": 685,
    "locationId": "落雲宗",
    "realm": "結丹期",
    "status": "alive",
    "activity": "追蹤韓立時被生擒，拜韓立為記名弟子改名柳眉，交出御靈宗驅蟲術及六翼霜蚣，加入落雲宗白鳳峰任副峰主。"
   },
   {
    "fromChapter": 776,
    "toChapter": 795,
    "locationId": "天南",
    "realm": "築基期",
    "status": "alive",
    "activity": "登門探望韓立並詢問南宮婉狀況，取走已產卵的六翼霜蚣"
   },
   {
    "fromChapter": 1155,
    "toChapter": 1184,
    "locationId": "墜魔谷",
    "realm": "結丹期",
    "status": "alive",
    "activity": "韓立記名弟子，隨慕沛靈、宋姓女子入墜魔谷，被第二元嬰生擒，本弧末獲韓立解救。"
   },
   {
    "fromChapter": 1185,
    "toChapter": 1214,
    "locationId": "天南",
    "realm": "結丹期",
    "status": "alive",
    "activity": "本弧被韓立正式收為親傳弟子，賜予宝物功法，代韓立協助吕洛管理宗內事務。"
   },
   {
    "fromChapter": 1215,
    "toChapter": 1244,
    "locationId": "落雲宗",
    "realm": "結丹後期",
    "status": "alive",
    "activity": "韓立的人情代理人，落雲宗實際管事，受韓立委託蒐集赤魂幡輔助材料。"
   }
  ]
 },
 {
  "id": "段天刃",
  "name": "段天刃",
  "aliases": [
   "石繭族三長老"
  ],
  "faction": "天雲族",
  "importance": "major",
  "bio": "嗅出韓立元磁之氣，引韓立往醇香閣；本身以後天吸金化玉之法擁有部分元磁神光，但遠不及韓立純熟；與彩流罂共謀廣寒界破禁計畫",
  "firstChapter": 1598,
  "canonFate": "參與靈藥交易，辨出炎瑚草後驚呼；最終分得大量仙界靈藥，期待藉此突破瓶頸。",
  "chronicle": [
   {
    "fromChapter": 1598,
    "toChapter": 1627,
    "locationId": "廣寒界",
    "realm": "合體頂階",
    "status": "alive",
    "activity": "嗅出韓立元磁之氣，引韓立往醇香閣；本身以後天吸金化玉之法擁有部分元磁神光，但遠不及韓立純熟；與彩流罂"
   },
   {
    "fromChapter": 1658,
    "toChapter": 1747,
    "locationId": "天淵城",
    "realm": "合體期",
    "status": "alive",
    "activity": "石昆師門前輩，指名所求虛靈丹，曾向韓立承諾為超級傳送陣之事說情。"
   },
   {
    "fromChapter": 1748,
    "toChapter": 1754,
    "locationId": "仙界",
    "realm": "合體期（聖族）",
    "status": "alive",
    "activity": "參與靈藥交易，辨出炎瑚草後驚呼；最終分得大量仙界靈藥，期待藉此突破瓶頸。"
   }
  ]
 },
 {
  "id": "豹麟獸",
  "name": "豹麟獸",
  "aliases": [],
  "faction": "韓立附從",
  "importance": "major",
  "bio": "繼承麒麟血脈的奇獸，在冰煞之地大量吞噬冰煞妖物後成功突破化神，顯現金色麒麟虛影，毛色現金色花紋、瞳孔轉銀色",
  "firstChapter": 1448,
  "canonFate": "合體成功，化形為幼女形態",
  "chronicle": [
   {
    "fromChapter": 1448,
    "toChapter": 1717,
    "locationId": "天淵城",
    "realm": "化神中期（接近後期）",
    "status": "alive",
    "activity": "韓立靈獸，吞噬七枚銀目暗獸內丹，對銀目暗獸內丹有特殊渴望"
   },
   {
    "fromChapter": 1718,
    "toChapter": 1747,
    "locationId": "廣寒界",
    "realm": "不明（近合體初期）",
    "status": "alive",
    "activity": "吞噬三目暗獸妖丹後沉眠蘇醒，身上多出漆黑花紋氣息改變，廣寒界結束前吞噬王級暗獸合體妖丹後再度入眠。"
   },
   {
    "fromChapter": 1965,
    "toChapter": 1994,
    "locationId": "魔界",
    "realm": "合體初期（剛化形）",
    "status": "alive",
    "activity": "本弧中從沉睡中蘇醒、渡合體天劫化為幼女人形，首次出戰即殲滅數名炼虛魔族，最後於城外獨力擊殺青龍上人"
   }
  ]
 },
 {
  "id": "彩流罌",
  "name": "彩流罌",
  "aliases": [
   "彩仙子",
   "妃蝶夫人",
   "彩前輩"
  ],
  "faction": "天雲族",
  "importance": "major",
  "bio": "醇香閣主人，擅長法陣禁制，為度大天劫謀取廣寒界禁制中的救命之物；答應為韓立分擔傳送費用，并允其取走廣寒界其他收穫",
  "firstChapter": 1598,
  "canonFate": "參與靈藥交易，出晶月液及靈丹換取仙界靈藥；在分配靈石和晶月液問題上與千機子周旋。",
  "chronicle": [
   {
    "fromChapter": 1598,
    "toChapter": 1687,
    "locationId": "廣寒界",
    "realm": "聖族初階（合体期）",
    "status": "alive",
    "activity": "晶族長老，本弧在雲城高層會議中獻策，並帶弟子柳水兒拜訪韓立，傳授三人合擊秘術玉片，叮囑廣寒界禁忌；千"
   },
   {
    "fromChapter": 1688,
    "toChapter": 1747,
    "locationId": "天淵城",
    "realm": "合體期",
    "status": "alive",
    "activity": "柳水兒師門前輩，指名所求凝翠草及珍稀材料。"
   },
   {
    "fromChapter": 1748,
    "toChapter": 1754,
    "locationId": "仙界",
    "realm": "合體期（聖族）",
    "status": "alive",
    "activity": "參與靈藥交易，出晶月液及靈丹換取仙界靈藥；在分配靈石和晶月液問題上與千機子周旋。"
   }
  ]
 },
 {
  "id": "敖嘯",
  "name": "敖嘯",
  "aliases": [
   "敖嘯老祖",
   "敖嘯前輩"
  ],
  "faction": "銀月狼族（妖族）",
  "importance": "major",
  "bio": "人妖兩族兩名大乘修士之一，渡第二十一次大天劫後元氣受損閉關，據面具女子（銀光仙子）透露仍存活。",
  "firstChapter": 1755,
  "canonFate": "本弧隕落於天劫",
  "chronicle": [
   {
    "fromChapter": 1755,
    "toChapter": 2174,
    "locationId": "魔界",
    "realm": "大乘期",
    "status": "alive",
    "activity": "本弧率銀月潛入木族魔族佔領區執行任務，及時出現解救韩立脫離元刹圍攻，傳授神念秘術以助銀月、並提議韩立"
   },
   {
    "fromChapter": 2236,
    "toChapter": 2325,
    "locationId": "靈界",
    "realm": "大乘期",
    "status": "dead",
    "activity": "閉關時出差錯被迫提前度劫，未能渡過天劫而隕落，留下靈核與兩件殘缺法寶給孫女銀月。"
   }
  ]
 },
 {
  "id": "陳巧倩",
  "name": "陳巧倩",
  "aliases": [
   "陳師妹"
  ],
  "faction": "黃楓谷陳氏家族",
  "importance": "major",
  "bio": "黃楓谷女修士，陳胖子的侄女；在金鼓原交易所與韓立再度相遇，得知其殺敵事蹟後大感震驚、改觀。",
  "firstChapter": 262,
  "canonFate": "已逝（百年前病逝）；已在人界陨落（往事提及）",
  "chronicle": [
   {
    "fromChapter": 262,
    "toChapter": 291,
    "locationId": "黃楓谷",
    "realm": "筑基期",
    "status": "alive",
    "activity": "黃楓谷女修士，陳胖子的侄女；在金鼓原交易所與韓立再度相遇，得知其殺敵事蹟後大感震驚、改觀。"
   },
   {
    "fromChapter": 292,
    "toChapter": 351,
    "locationId": "越京",
    "realm": "築基期",
    "status": "alive",
    "activity": "與韓立並肩作戰至擊殺越皇；在白菊山向韓立吐露即將嫁入秦家之事後悻然離去。"
   },
   {
    "fromChapter": 796,
    "toChapter": 825,
    "locationId": "大晉",
    "realm": "築基期",
    "status": "alive",
    "activity": "韓立舊識，陳巧天七妹，因擬聯姻家族投靠魔道而婚事告吹，此後沉默寡言、終身獨身，百年前病逝。韓立聞訊後"
   },
   {
    "fromChapter": 1598,
    "toChapter": 1627,
    "locationId": "天淵城",
    "realm": "築基期",
    "status": "alive",
    "activity": "韓立心底珍藏的人界女子，在偏殿見到容貌酷似的藍袍女子時觸動舊情"
   }
  ]
 },
 {
  "id": "黑鱷",
  "name": "黑鱷",
  "aliases": [
   "黑甲大漢",
   "黑鱷"
  ],
  "faction": "魔族（寶花聖祖手下）",
  "importance": "major",
  "bio": "寶花的從屬魔獸，化形不久，寶花將奪回的玄天如意刃殘片賜予此人。",
  "firstChapter": 1935,
  "canonFate": "宝花的黑甲侍從，陪同宝花出席聚會並赴始印之地",
  "chronicle": [
   {
    "fromChapter": 1935,
    "toChapter": 2144,
    "locationId": "魔界",
    "realm": "大乘（炼虛後期偏上）",
    "status": "alive",
    "activity": "宝花忠誠部下，邪龍族血脉；在沙漠連戰被耗光法力，在六絕青雷陣中以黑蛟形態抵抗，後收入宝花袖中療傷。"
   },
   {
    "fromChapter": 2206,
    "toChapter": 2235,
    "locationId": "靈界",
    "realm": "煉虛後期（有大幅提升）",
    "status": "alive",
    "activity": "宝花的黑甲侍從，陪同宝花出席聚會並赴始印之地"
   }
  ]
 },
 {
  "id": "暉長老",
  "name": "暉長老",
  "aliases": [
   "暉姓長老",
   "暉道友",
   "一身黑袍的暉姓男子",
   "黑袍男子",
   "暉無",
   "暉姓修士"
  ],
  "faction": "隴家客卿",
  "importance": "major",
  "bio": "修煉頂階魔道功法「青芒決」，與韩立切磋中被太乙青光所傷，顯露遍體黑斑的魔功真身後被陇家老祖阻止。",
  "firstChapter": 1815,
  "canonFate": "被元魇始祖以黑魔匕斬殺，陨落",
  "chronicle": [
   {
    "fromChapter": 1815,
    "toChapter": 2114,
    "locationId": "魔界",
    "realm": "合體期",
    "status": "alive",
    "activity": "隴家長老，在困靈谷中被元魇黑魔匕一擊斬殺。"
   }
  ]
 },
 {
  "id": "葉穎",
  "name": "葉穎",
  "aliases": [
   "葉姑娘",
   "葉少主",
   "少主",
   "葉穎",
   "白袍少女"
  ],
  "faction": "葉家（天鳳血脈世家）",
  "importance": "major",
  "bio": "葉家嫡系少主，身具天鳳真血，持有箫、琴、詫靈琵琶仿製品等五件異寶；天鳳真血被血晶摩訶劍奪走大半後，在韓立相助下奪回。",
  "firstChapter": 1358,
  "canonFate": "天鳳真血被奪大半後成功奪回，受內傷但生還。",
  "chronicle": [
   {
    "fromChapter": 1358,
    "toChapter": 1417,
    "locationId": "天淵城",
    "realm": "化神期（或以上）",
    "status": "alive",
    "activity": "與韓立交易天鳳之翎換真龍之血，意圖在交易後留住韓立未果；擁有紫金葫蘆與天凤之魄變身神通。"
   },
   {
    "fromChapter": 1785,
    "toChapter": 1844,
    "locationId": "魔界",
    "realm": "煉虛期",
    "status": "alive",
    "activity": "昔日萬寶大會上與韩立有過接觸，在大典現場被其祖母（葉家太上長老）調侃與韩立的緣分，模樣靦腆。"
   },
   {
    "fromChapter": 2206,
    "toChapter": 2235,
    "locationId": "靈界",
    "realm": "不詳",
    "status": "alive",
    "activity": "代葉家出席韓立大乘慶典"
   }
  ]
 },
 {
  "id": "厲飛雨",
  "name": "厲飛雨",
  "aliases": [
   "厲師兄",
   "厲虎",
   "厲大師兄"
  ],
  "faction": "厲家",
  "importance": "major",
  "bio": "以記名弟子身份靠風雷刀法在歷屆較技中屢獲佳績，於江湖有厲虎之名；暗中服食抽髓丸透支壽命換取武功精進，被韓立識破後欠下大人情。",
  "firstChapter": 1,
  "canonFate": "服食抽髓丸，預估五六年內因透支壽命而死；留守七玄門，與韓立就此別離。；已逝",
  "chronicle": [
   {
    "fromChapter": 1,
    "toChapter": 99,
    "locationId": "七玄門",
    "realm": "七玄門外刃堂副堂主",
    "status": "alive",
    "activity": "韓立摯友，受王絕楚利用前來探口風，事後被王絕楚收為關門弟子並扶正為外刃堂堂主；收到韓立留下的延壽秘藥"
   },
   {
    "fromChapter": 656,
    "toChapter": 685,
    "locationId": "天南",
    "realm": "七玄門外刃堂副堂主",
    "status": "dead",
    "activity": "韓立昔年江湖兄弟，英年早逝，後代與韓家結成世交。"
   }
  ]
 },
 {
  "id": "千機子",
  "name": "千機子",
  "aliases": [],
  "faction": "萬古族",
  "importance": "major",
  "bio": "萬古族頂階長老，與韓立就廣寒令達成協議，安排韓立入住八雲山洞府。",
  "firstChapter": 1568,
  "canonFate": "主導靈藥交易，率先認出韓立修為進階；交易完成後短暫起了貪念，因忌憚翁姓長老而作罷。",
  "chronicle": [
   {
    "fromChapter": 1568,
    "toChapter": 1627,
    "locationId": "天淵城",
    "realm": "合體頂階",
    "status": "alive",
    "activity": "出現於拍賣大殿三層，競拍金雷竹後退出"
   },
   {
    "fromChapter": 1658,
    "toChapter": 1687,
    "locationId": "廣寒界",
    "realm": "聖族（合体期）",
    "status": "alive",
    "activity": "萬古族長老，本弧向翁姓青年上報廣寒界開啟消息，負責廣寒界入界組織工作，为韩立分配隊伍。"
   },
   {
    "fromChapter": 1748,
    "toChapter": 1754,
    "locationId": "天淵城",
    "realm": "合體後期",
    "status": "alive",
    "activity": "主導靈藥交易，率先認出韓立修為進階；交易完成後短暫起了貪念，因忌憚翁姓長老而作罷。"
   }
  ]
 },
 {
  "id": "文思月",
  "name": "文思月",
  "aliases": [
   "月仙子"
  ],
  "faction": "妙音門（被迫）",
  "importance": "major",
  "bio": "文樯之女，被門派高層逼迫執行危險任務，媚骨天成，二十餘年即筑基成功，被韓立解圍。",
  "firstChapter": 424,
  "canonFate": "獲韓立安置於荒島洞府，得自由修煉",
  "chronicle": [
   {
    "fromChapter": 424,
    "toChapter": 543,
    "locationId": "亂星海",
    "realm": "築基期",
    "status": "alive",
    "activity": "文樯之女，曾意外發現裂風獸幼崽得知其巢穴位置；在秘市以做侍妾換取韓立帶其出逃，韓立重創雲天啸後帶走，"
   },
   {
    "fromChapter": 1125,
    "toChapter": 1184,
    "locationId": "天南",
    "realm": "不詳（元嬰以下）",
    "status": "alive",
    "activity": "攜夫在奎星島顧家庄附近居住，韓立順道探訪，測試田琴兒後帶走收徒。"
   }
  ]
 },
 {
  "id": "止水",
  "name": "止水",
  "aliases": [
   "靈族青年",
   "器靈族聖靈"
  ],
  "faction": "靈族",
  "importance": "major",
  "bio": "靈族合體初期圣灵，表面被稱為器灵族長老，實則對破碎虛空有獨特秘術，臉色蒼白異常、蓝雾缭绕。",
  "firstChapter": 1995,
  "canonFate": "自爆陨毀",
  "chronicle": [
   {
    "fromChapter": 1995,
    "toChapter": 2114,
    "locationId": "魔界",
    "realm": "合體期（器靈族聖靈）",
    "status": "alive",
    "activity": "實為靈王以天外魔頭魔魂之力後天改造的偽仙儡，由千秋聖女的半儡之身操控；被元魇識破後以伪仙露激發神通大"
   }
  ]
 },
 {
  "id": "令狐老祖",
  "name": "令狐老祖",
  "aliases": [
   "令狐老怪"
  ],
  "faction": "黃楓谷",
  "importance": "major",
  "bio": "黃楓谷唯一元嬰期太上長老，宣告七派大敗及靈獸山叛變內情，主導全派緊急撤離越國。",
  "firstChapter": 322,
  "canonFate": "被魔化南龍侯追殺差點喪命，韓立出手相救；聯手與魔魂鬥法，失去古宝鉻陽環；後被韓立說服前往協助魏無涯抗擊古魔本體",
  "chronicle": [
   {
    "fromChapter": 322,
    "toChapter": 351,
    "locationId": "黃楓谷",
    "realm": "元嬰期",
    "status": "alive",
    "activity": "黃楓谷唯一元嬰期太上長老，宣告七派大敗及靈獸山叛變內情，主導全派緊急撤離越國。"
   },
   {
    "fromChapter": 716,
    "toChapter": 745,
    "locationId": "天南",
    "realm": "元嬰期（寿元將盡）",
    "status": "alive",
    "activity": "殿議後設局相約韓立，以三件重寶換取韓立答應相助黃枫谷三次，本人寿元不足二十年。"
   },
   {
    "fromChapter": 796,
    "toChapter": 825,
    "locationId": "黃楓谷",
    "realm": "元嬰期",
    "status": "alive",
    "activity": "黃楓谷祖師，與掩月宗大長老等三名元嬰修士一同入谷，默然趕路，與陳巧天等外谷修士是同門師門關係。"
   },
   {
    "fromChapter": 826,
    "toChapter": 855,
    "locationId": "大晉",
    "realm": "元嬰中期",
    "status": "alive",
    "activity": "被魔化南龍侯追殺差點喪命，韓立出手相救；聯手與魔魂鬥法，失去古宝鉻陽環；後被韓立說服前往協助魏無涯抗"
   }
  ]
 },
 {
  "id": "白戚",
  "name": "白戚",
  "aliases": [
   "白濛濛光彩",
   "銀光中的圣靈",
   "白兄",
   "白道友"
  ],
  "faction": "靈族",
  "importance": "major",
  "bio": "靈族強大圣灵，本體不明，散發白光令人頭暈，精通克制魔功的大神通，硬闖時主張直接突破。",
  "firstChapter": 1995,
  "canonFate": "被元魇黑魔匕黑絲斬殺，銀鐘器靈被毀",
  "chronicle": [
   {
    "fromChapter": 1995,
    "toChapter": 2114,
    "locationId": "魔界",
    "realm": "合體期",
    "status": "alive",
    "activity": "靈族圣灵，有靈目神通，體內寄有靈王兩縷分念；第一縷分念被元魇滅殺，第二縷分念在殘骸中激活偽仙儡並驅動"
   }
  ]
 },
 {
  "id": "石昆",
  "name": "石昆",
  "aliases": [
   "石道友"
  ],
  "faction": "石繭族（師從段天刃）",
  "importance": "major",
  "bio": "肉身強橫、後天修成元磁之身，好戰性格，廣寒界中負責近戰，鎮海猿事件中被韓立精神秘術所救。",
  "firstChapter": 1658,
  "canonFate": "隨眾撤往伏蛟城，見證靈藥交易。",
  "chronicle": [
   {
    "fromChapter": 1658,
    "toChapter": 1687,
    "locationId": "廣寒界",
    "realm": "煉虛頂峰",
    "status": "alive",
    "activity": "肉身強橫、後天修成元磁之身，好戰性格，廣寒界中負責近戰，鎮海猿事件中被韓立精神秘術所救。"
   },
   {
    "fromChapter": 1688,
    "toChapter": 1717,
    "locationId": "天淵城",
    "realm": "煉虛後期",
    "status": "alive",
    "activity": "肉身強橫，火屬神通，持阴魄子母環；中途被雪吼族追殺半月受傷，最終帶傷抵達；破禁時以血色丹藥催動秘術強"
   },
   {
    "fromChapter": 1718,
    "toChapter": 1747,
    "locationId": "廣寒界",
    "realm": "煉虛頂階",
    "status": "alive",
    "activity": "與韓立、柳水兒分配鼎中寶物，得到虛靈丹及珍稀材料，廣寒界關閉後被傳送回天雲城，突破瓶頸失敗。"
   },
   {
    "fromChapter": 1748,
    "toChapter": 1754,
    "locationId": "天淵城",
    "realm": "煉虛期",
    "status": "alive",
    "activity": "隨眾撤往伏蛟城，見證靈藥交易。"
   }
  ]
 },
 {
  "id": "至陽上人",
  "name": "至陽上人",
  "aliases": [
   "至陽道友"
  ],
  "faction": "太真門（三大修士之一）",
  "importance": "major",
  "bio": "三大修士之一，主持高層會議，以庚精及玄天仙藤誘動韓立參戰，持有太真門破禁珠後手",
  "firstChapter": 746,
  "canonFate": "天南三大修士之一，聽聞傳聞半信半疑，親赴落雲宗拜見韓立，折服後返宗宣布閉生死關，天南第一修士之名因此坐實。",
  "chronicle": [
   {
    "fromChapter": 746,
    "toChapter": 795,
    "locationId": "天南",
    "realm": "元嬰後期",
    "status": "alive",
    "activity": "天南三大修士之一，邊界大戰後協商停戰及對抗突兀人策略"
   },
   {
    "fromChapter": 856,
    "toChapter": 1184,
    "locationId": "落雲宗",
    "realm": "元嬰後期",
    "status": "alive",
    "activity": "天南三大修士之一，聽聞傳聞半信半疑，親赴落雲宗拜見韓立，折服後返宗宣布閉生死關，天南第一修士之名因此"
   }
  ]
 },
 {
  "id": "車騎恭",
  "name": "車騎恭",
  "aliases": [
   "車騎恭",
   "墨袍老者",
   "車老怪"
  ],
  "faction": "魔族老魔",
  "importance": "major",
  "bio": "困於鎮魔錠十三層幻術禁制中，以問答形式向韓立提供引念秘術及對付彩光塔的方法；自揭紫言鼎原為其所有，鼎中藏有二重神念；與另一位不知名聖祖秘密談判分配混沌之氣。",
  "firstChapter": 1905,
  "canonFate": "被棄入魔界地下冰河，與韓立脫離牽連",
  "chronicle": [
   {
    "fromChapter": 1905,
    "toChapter": 2144,
    "locationId": "魔界",
    "realm": "接近大乘（合體後期大成）",
    "status": "alive",
    "activity": "原被鎮魔鎖所困，脫困後趁血光圣祖重傷時將其擒殺，以炼魄鼎折磨其元嬰索取秘洞寶物。"
   }
  ]
 },
 {
  "id": "青元子",
  "name": "青元子",
  "aliases": [
   "姜某",
   "青元道友",
   "姜前輩",
   "姜道友"
  ],
  "faction": "冥河之地（人族隱修）",
  "importance": "major",
  "bio": "韓立收集琉璃天火液的委託方；被提及以大乘神通躲避大天劫",
  "firstChapter": 1598,
  "canonFate": "元瑤義父，指點韓立培育噬金蟲王；本弧開篇韓立與其道別。",
  "chronicle": [
   {
    "fromChapter": 1598,
    "toChapter": 1627,
    "locationId": "天淵城",
    "realm": "凡人",
    "status": "alive",
    "activity": "韓立收集琉璃天火液的委託方；被提及以大乘神通躲避大天劫"
   },
   {
    "fromChapter": 1845,
    "toChapter": 1874,
    "locationId": "魔界",
    "realm": "大乘期（元嬰化身出現）",
    "status": "alive",
    "activity": "以元嬰化身相見，指點韩立劍訣及合體後期突破要訣，後本體出關帶韩立拜訪金焰侯取冥河靈乳，功德圓滿後封山"
   },
   {
    "fromChapter": 2296,
    "toChapter": 2325,
    "locationId": "冥河之地",
    "realm": "大乘期",
    "status": "alive",
    "activity": "在地淵冥河之地渡大天劫，韓立守在谷外斬殺黃元子、不滅天尊等三名大敵，使其得以成功渡過天劫。"
   },
   {
    "fromChapter": 2326,
    "toChapter": 2355,
    "locationId": "靈界",
    "realm": "大乘期",
    "status": "alive",
    "activity": "元瑤義父，指點韓立培育噬金蟲王；本弧開篇韓立與其道別。"
   }
  ]
 },
 {
  "id": "南隴侯",
  "name": "南隴侯",
  "aliases": [
   "陸某"
  ],
  "faction": "天道盟",
  "importance": "major",
  "bio": "性情怪癖，以強行交易規定逼韓立神識比試，比試中被韓立神識化形震懾，態度轉變，邀其密會。",
  "firstChapter": 656,
  "canonFate": "元氣大傷、境界必然下降，生死不明",
  "chronicle": [
   {
    "fromChapter": 656,
    "toChapter": 685,
    "locationId": "天南",
    "realm": "元嬰中期",
    "status": "alive",
    "activity": "性情怪癖，以強行交易規定逼韓立神識比試，比試中被韓立神識化形震懾，態度轉變，邀其密會。"
   },
   {
    "fromChapter": 686,
    "toChapter": 715,
    "locationId": "慕蘭草原",
    "realm": "元嬰中期",
    "status": "alive",
    "activity": "發起此次慕蘭草原奪寶行動，在玉璣閣被雲姓老者暗算後受重傷，施展「萬尺一線」秘術脫逃，本弧後重傷不起境"
   },
   {
    "fromChapter": 716,
    "toChapter": 745,
    "locationId": "天南",
    "realm": "元嬰中期（受重傷，元氣大損）",
    "status": "alive",
    "activity": "追殺韓立一行後傷重脫身，與璇璣子設局相見韓立，告知兩儀環身份，欲三人合作入坠魔谷取寶。"
   },
   {
    "fromChapter": 796,
    "toChapter": 825,
    "locationId": "大晉",
    "realm": "元嬰期（元氣曾大損）",
    "status": "dead",
    "activity": "持有苍坤上人遺書與兩儀環（原為南宮婉所有），主導入谷路線，暗中隱瞞血咒之門秘事，以分水旗開啟水潭深處"
   }
  ]
 },
 {
  "id": "柳水兒",
  "name": "柳水兒",
  "aliases": [
   "柳仙子",
   "斗篷女子"
  ],
  "faction": "晶族（彩流罌弟子）",
  "importance": "major",
  "bio": "先天元磁之體，廣寒界行動中擔任元磁神光合擊秘術主導者，出借千變幻面，廣寒界中水屬性功法讓她成功滅殺海獸本體。",
  "firstChapter": 1658,
  "canonFate": "隨眾撤往伏蛟城，見證靈藥交易，對韓立的收穫心生羨慕。",
  "chronicle": [
   {
    "fromChapter": 1658,
    "toChapter": 1687,
    "locationId": "廣寒界",
    "realm": "煉虛頂峰",
    "status": "alive",
    "activity": "先天元磁之體，廣寒界行動中擔任元磁神光合擊秘術主導者，出借千變幻面，廣寒界中水屬性功法讓她成功滅殺海"
   },
   {
    "fromChapter": 1688,
    "toChapter": 1717,
    "locationId": "天淵城",
    "realm": "煉虛後期",
    "status": "alive",
    "activity": "以水屬神通、銀梭套寶、千手法相等助戰，提供映影晶監控角蚩族，主導破禁步驟；以避空傘遮蔽破禁波動"
   },
   {
    "fromChapter": 1718,
    "toChapter": 1747,
    "locationId": "廣寒界",
    "realm": "煉虛頂階",
    "status": "alive",
    "activity": "與韓立、石昆合力取鼎中寶物，廣寒界關閉後被傳送回天雲城，突破瓶頸失敗仍為煉虛頂階。"
   },
   {
    "fromChapter": 1748,
    "toChapter": 1754,
    "locationId": "天淵城",
    "realm": "煉虛期",
    "status": "alive",
    "activity": "隨眾撤往伏蛟城，見證靈藥交易，對韓立的收穫心生羨慕。"
   }
  ]
 },
 {
  "id": "梅凝",
  "name": "梅凝",
  "aliases": [
   "梅姑娘",
   "梅道友"
  ],
  "faction": "散修",
  "importance": "major",
  "bio": "擁有「通玉鳳髓之身」，以通靈之氣換取韓立帶其出逃並尋找兄長；兄長在阴冥之地遭阴兽吞噬而亡；與紫靈仙子義結金蘭，最終隨韓立脫出陰冥之地。",
  "firstChapter": 574,
  "canonFate": "紫靈結交的女修，因入谷修士激增而決定不入墜魔谷。",
  "chronicle": [
   {
    "fromChapter": 574,
    "toChapter": 595,
    "locationId": "亂星海",
    "realm": "結丹初期",
    "status": "alive",
    "activity": "擁有「通玉鳳髓之身」，以通靈之氣換取韓立帶其出逃並尋找兄長；兄長在阴冥之地遭阴兽吞噬而亡；與紫靈仙子"
   },
   {
    "fromChapter": 596,
    "toChapter": 775,
    "locationId": "天南",
    "realm": "築基頂峰（近假丹）",
    "status": "alive",
    "activity": "隨紫靈行動，若得造化丹則結丹把握大增"
   },
   {
    "fromChapter": 796,
    "toChapter": 825,
    "locationId": "墜魔谷",
    "realm": "結丹初期",
    "status": "alive",
    "activity": "紫靈結交的女修，因入谷修士激增而決定不入墜魔谷。"
   }
  ]
 },
 {
  "id": "許芊羽",
  "name": "許芊羽",
  "aliases": [
   "許仙子"
  ],
  "faction": "許家",
  "importance": "major",
  "bio": "冰魄仙子後人，天淵城青冥衛，陪韓立回許家、參與血魂喚醒儀式。",
  "firstChapter": 1755,
  "canonFate": "代許家贈虛天鼎赴慶典，傳達血魂請韓立前往之訊",
  "chronicle": [
   {
    "fromChapter": 1755,
    "toChapter": 1784,
    "locationId": "天淵城",
    "realm": "化神中期",
    "status": "alive",
    "activity": "冰魄仙子後人，天淵城青冥衛，陪韓立回許家、參與血魂喚醒儀式。"
   },
   {
    "fromChapter": 1935,
    "toChapter": 1964,
    "locationId": "魔界",
    "realm": "化神期（以上有進步）",
    "status": "alive",
    "activity": "與兩名侄女在廢城被邪修圍攻，被路過的韓立解救，告知聖皇城現況。"
   },
   {
    "fromChapter": 2176,
    "toChapter": 2235,
    "locationId": "靈界",
    "realm": "不詳",
    "status": "alive",
    "activity": "代許家贈虛天鼎赴慶典，傳達血魂請韓立前往之訊"
   }
  ]
 },
 {
  "id": "噬金蟲王",
  "name": "噬金蟲王",
  "aliases": [
   "金兒",
   "金童",
   "噬金仙",
   "黃金巨螃蟹形態",
   "金色小人",
   "禿頭無眉紫金色小人"
  ],
  "faction": "韓立陣營",
  "importance": "major",
  "bio": "護衛血魄並擊殺赤雷老祖元嬰；本弧中化形為巨螃蟹牽制萬花夫人；以本命晶劍多次斬首凶司王協助大戰。",
  "firstChapter": 2356,
  "canonFate": "隨韓立飛升仙界",
  "chronicle": [
   {
    "fromChapter": 2356,
    "toChapter": 2420,
    "locationId": "靈界",
    "realm": "蟲王級",
    "status": "alive",
    "activity": "按蟹道人指令在陣眼八根金柱悄然刻下豁免靈紋，令韓立免於陣眼獻祭。"
   },
   {
    "fromChapter": 2421,
    "toChapter": 2450,
    "locationId": "無涯海",
    "realm": "噬金仙（修成金蟬脫殼神通）",
    "status": "alive",
    "activity": "被韓立暗中派至戰場作眼線；鳴煞之地被馬良圍困，以金蟬脫殼脫身；之後護衛無涯海，先後擊退多名異族大乘。"
   },
   {
    "fromChapter": 2451,
    "toChapter": 2451,
    "locationId": "仙界",
    "realm": "蟲王（仙級靈蟲）",
    "status": "alive",
    "activity": "天劫前韓立提前令其破空離去，天劫後收入靈獸環，隨韓立飛升仙界。"
   }
  ]
 },
 {
  "id": "燕如嫣",
  "name": "燕如嫣",
  "aliases": [
   "焉兒"
  ],
  "faction": "鬼靈門",
  "importance": "major",
  "bio": "燕家老祖最疼愛的玄孫女，天靈根資質，被鬼靈門少主王蟬看中為血靈大法雙修對象，奉命與王蟬及李氏兄弟簽訂生死咒。",
  "firstChapter": 232,
  "canonFate": "昔年越國第一女弟子，凝結元嬰成功，以木靈珠等三件宝物為代價求韓立出面調停，事後因堂叔欲殺其丈夫王蟬而宣告閉關百年。",
  "chronicle": [
   {
    "fromChapter": 232,
    "toChapter": 261,
    "locationId": "越京",
    "realm": "不詳（天靈根）",
    "status": "alive",
    "activity": "燕家老祖最疼愛的玄孫女，天靈根資質，被鬼靈門少主王蟬看中為血靈大法雙修對象，奉命與王蟬及李氏兄弟簽訂"
   },
   {
    "fromChapter": 686,
    "toChapter": 715,
    "locationId": "越國",
    "realm": "結丹後期",
    "status": "alive",
    "activity": "王蝉之妻，出身越國燕家天靈根，本弧中多次注意韓立，似乎對韓立抱有好感，為王蝉施法續肢。"
   },
   {
    "fromChapter": 796,
    "toChapter": 825,
    "locationId": "大晉",
    "realm": "結丹期",
    "status": "alive",
    "activity": "隨王蟬入谷，神色憔悴略顯不佳。"
   },
   {
    "fromChapter": 1185,
    "toChapter": 1214,
    "locationId": "越國",
    "realm": "元嬰初期",
    "status": "alive",
    "activity": "昔年越國第一女弟子，凝結元嬰成功，以木靈珠等三件宝物為代價求韓立出面調停，事後因堂叔欲殺其丈夫王蟬而"
   }
  ]
 },
 {
  "id": "纖纖",
  "name": "纖纖",
  "aliases": [
   "晶族女子",
   "纖仙子",
   "纖纖"
  ],
  "faction": "晶族",
  "importance": "major",
  "bio": "雲城典籍店老闆，以天外魔甲換取韓立丹藥材料，並告知沉睡聖階魔獸消息，以魔烟鸟监视该魔兽。",
  "firstChapter": 1568,
  "canonFate": "真麟本源計畫失敗，但與韓立全身而退。",
  "chronicle": [
   {
    "fromChapter": 1568,
    "toChapter": 1597,
    "locationId": "雲城",
    "realm": "不詳（晶族，上族境）",
    "status": "alive",
    "activity": "雲城典籍店老闆，以天外魔甲換取韓立丹藥材料，並告知沉睡聖階魔獸消息，以魔烟鸟监视该魔兽。"
   },
   {
    "fromChapter": 1598,
    "toChapter": 1687,
    "locationId": "天淵城",
    "realm": "上族境界（煉虛頂峰附近）",
    "status": "alive",
    "activity": "與韓立共同逃出魔金山脈，在私人空間修補韓立天外魔甲，修補過程招來跨界魔念，最終仍按約將魔甲交還。"
   }
  ]
 },
 {
  "id": "靈王",
  "name": "靈王",
  "aliases": [
   "白袍老者",
   "靈兄"
  ],
  "faction": "靈族",
  "importance": "major",
  "bio": "靈族最高統治者，在白戚體內預先放置兩縷分念；以分念虛影與元魇始祖周旋，提及隕界石以拖延時間；最終借第二縷分念驅動偽仙儡自爆重創元魇。",
  "firstChapter": 2085,
  "canonFate": "以本命之火封印一名躲藏灵界的真仙數萬年；迎戰韓立兩招認輸，同意韓立對封印仙人搜魂。",
  "chronicle": [
   {
    "fromChapter": 2085,
    "toChapter": 2114,
    "locationId": "魔界",
    "realm": "大乘期",
    "status": "alive",
    "activity": "靈族最高統治者，在白戚體內預先放置兩縷分念；以分念虛影與元魇始祖周旋，提及隕界石以拖延時間；最終借第"
   },
   {
    "fromChapter": 2266,
    "toChapter": 2325,
    "locationId": "靈界",
    "realm": "大乘期",
    "status": "alive",
    "activity": "坐鎮伏靈山，以三清雷霄符換取修羅蛛晶核以提煉光陰之力，另讓眾人在藏寶庫自選三件寶物。"
   },
   {
    "fromChapter": 2421,
    "toChapter": 2450,
    "locationId": "無涯海",
    "realm": "靈界頂尖大乘（隱藏真實實力）",
    "status": "alive",
    "activity": "以本命之火封印一名躲藏灵界的真仙數萬年；迎戰韓立兩招認輸，同意韓立對封印仙人搜魂。"
   }
  ]
 },
 {
  "id": "蠻胡子",
  "name": "蠻胡子",
  "aliases": [
   "蠻師"
  ],
  "faction": "散修（元嬰中期）",
  "importance": "major",
  "bio": "托天訣聞名，寿元告急来採寿元果，驅逐韓立玉柱，與萬天明互相挑釁；疑欲入內殿。",
  "firstChapter": 424,
  "canonFate": "本弧吞噬極陰祖師元嬰完成大仇後，在石室內安然坐化，元嬰化為點點金光消散。；已坐化（本弧前）",
  "chronicle": [
   {
    "fromChapter": 424,
    "toChapter": 483,
    "locationId": "亂星海",
    "realm": "元嬰期",
    "status": "alive",
    "activity": "持托天魔功與變異三目豹（異化術），借寒冰珠給韓立，主導魔道取寶行動，在內殿以三目豹將萬天明法寶化石"
   },
   {
    "fromChapter": 1125,
    "toChapter": 1154,
    "locationId": "虛天殿",
    "realm": "元嬰（法體毀損，殘餘元嬰）",
    "status": "alive",
    "activity": "昔年虛天殿中元嬰老怪，寿元將盡後被極陰祖師用秘術強行延壽囚禁，以修煉「托天魔功」之鎖魂秘術換得韓立同"
   },
   {
    "fromChapter": 1155,
    "toChapter": 1184,
    "locationId": "天南",
    "realm": "元嬰（法體毀損，殘餘元嬰）",
    "status": "dead",
    "activity": "魔湖島湖底洞府的主人，已坐化，其藏寶被韓立奪取，三弟子為其財產發生火拼。"
   }
  ]
 },
 {
  "id": "天悟子",
  "name": "天悟子",
  "aliases": [],
  "faction": "正道",
  "importance": "major",
  "bio": "與老農老者為同伴，與萬天明合組正道一方。",
  "firstChapter": 424,
  "canonFate": "在元嬰期混戰中參與，未有突出行動。",
  "chronicle": [
   {
    "fromChapter": 424,
    "toChapter": 513,
    "locationId": "亂星海",
    "realm": "元嬰期",
    "status": "alive",
    "activity": "在元嬰期混戰中參與，未有突出行動。"
   }
  ]
 },
 {
  "id": "天晶真人",
  "name": "天晶真人",
  "aliases": [],
  "faction": "九國盟",
  "importance": "major",
  "bio": "晶龍閣主人，主持元嬰換寶會，修晶光功，因得到上古傀儡術殘本而大量收集魂石，與韓立互換魂石與傀儡術玉簡。",
  "firstChapter": 656,
  "canonFate": "元嬰被古魔分魂吞噬，陨落",
  "chronicle": [
   {
    "fromChapter": 656,
    "toChapter": 685,
    "locationId": "天南",
    "realm": "元嬰期",
    "status": "alive",
    "activity": "晶龍閣主人，主持元嬰換寶會，修晶光功，因得到上古傀儡術殘本而大量收集魂石，與韓立互換魂石與傀儡術玉簡"
   },
   {
    "fromChapter": 796,
    "toChapter": 855,
    "locationId": "大晉",
    "realm": "元嬰初期",
    "status": "alive",
    "activity": "持有兩具恶鬼傀儡與程師兄同行，傀儡被魔魂黑刃斬毀，本人被魔魂從腹部貫穿抓出元嬰"
   }
  ]
 },
 {
  "id": "月仙子",
  "name": "月仙子",
  "aliases": [
   "月道友"
  ],
  "faction": "天雲族",
  "importance": "major",
  "bio": "廣寒界另一枚廣寒令的激發人，率領另一隊入界，面容蒼白，本弧中僅在廣寒界開啟集結現場出現。",
  "firstChapter": 1658,
  "canonFate": "在廣寒界進階合體，協助認證翁前輩令牌，隨眾撤往伏蛟城。",
  "chronicle": [
   {
    "fromChapter": 1658,
    "toChapter": 1754,
    "locationId": "廣寒界",
    "realm": "合體初期（剛進階）",
    "status": "alive",
    "activity": "在廣寒界進階合體，協助認證翁前輩令牌，隨眾撤往伏蛟城。"
   }
  ]
 },
 {
  "id": "木族大長老",
  "name": "木族大長老",
  "aliases": [
   "鄒道友"
  ],
  "faction": "木族",
  "importance": "major",
  "bio": "木族大乘修士，被寶花聖祖在空間裂縫中擊敗後，被迫放行其離開木族領域；輸後命木君、木姣傳令木族成員不得出手。",
  "firstChapter": 1875,
  "canonFate": "被三名魔族聖祖本體重傷，大乘實力喪失；本弧死亡——隨木族聖樹一同隕落。",
  "chronicle": [
   {
    "fromChapter": 1875,
    "toChapter": 2175,
    "locationId": "魔界",
    "realm": "大乘期（已重傷養傷）",
    "status": "dead",
    "activity": "早先在魔族三大聖祖圍攻下重傷退隱木棉城聖地養傷，本弧中被魔族「吞天」潛入聖地毀掉聖樹，隨聖樹一同隕落"
   }
  ]
 },
 {
  "id": "火龍童子",
  "name": "火龍童子",
  "aliases": [
   "藍某",
   "藍兄"
  ],
  "faction": "古劍門",
  "importance": "major",
  "bio": "參與殿議，協同吕洛聯絡各勢力施壓九國盟，與韓立並肩出征黃龍山方向。",
  "firstChapter": 716,
  "canonFate": "古劍門長老，迎接韩立归宗，確認其後期修為後大感震驚。",
  "chronicle": [
   {
    "fromChapter": 716,
    "toChapter": 1184,
    "locationId": "天南",
    "realm": "元嬰中期",
    "status": "alive",
    "activity": "古劍門長老，迎接韩立归宗，確認其後期修為後大感震驚。"
   }
  ]
 },
 {
  "id": "玄青子",
  "name": "玄青子",
  "aliases": [],
  "faction": "太一門",
  "importance": "major",
  "bio": "守在封印裂縫入口外，等待天魔宗七妙真人到來，未實際入山。",
  "firstChapter": 1006,
  "canonFate": "被珈輪戰魔滅殺",
  "chronicle": [
   {
    "fromChapter": 1006,
    "toChapter": 1095,
    "locationId": "大晉",
    "realm": "元嬰期",
    "status": "dead",
    "activity": "在祭壇交戰中遭珈輪戰魔一擊滅殺，元嬰俱毀"
   }
  ]
 },
 {
  "id": "白璧",
  "name": "白璧",
  "aliases": [],
  "faction": "天鵬族",
  "importance": "major",
  "bio": "天鵬族聖子之一，白雷之侄，成年後才激發鯤鵬血脈，為人潇洒；進入地淵後跟隨韓立行動。",
  "firstChapter": 1418,
  "canonFate": "（僅提及）天鵬族另一位聖主，閉關修煉未出，未現身本弧",
  "chronicle": [
   {
    "fromChapter": 1418,
    "toChapter": 1477,
    "locationId": "地淵",
    "realm": "中高階靈將",
    "status": "alive",
    "activity": "天鵬族聖子之一，男性，識得各種地淵地貌；在韓立強大神通面前由抵觸轉為敬畏，恭順依從"
   },
   {
    "fromChapter": 1845,
    "toChapter": 1874,
    "locationId": "魔界",
    "realm": "中高階靈將",
    "status": "alive",
    "activity": "（僅提及）天鵬族另一位聖主，閉關修煉未出，未現身本弧"
   }
  ]
 },
 {
  "id": "合歡老魔",
  "name": "合歡老魔",
  "aliases": [
   "易兄"
  ],
  "faction": "魔道（三大修士之一）",
  "importance": "major",
  "bio": "三大修士之一，主持高層聚會，提供回煞丸，與阴罗宗房宗主單獨交涉，在大戰中主動挑戰慕蘭神師",
  "firstChapter": 746,
  "canonFate": "天南三大修士之一，大典密殿中與魏無涯聯手被韓立擊敗，退讓認可韓立天南第一修士地位。",
  "chronicle": [
   {
    "fromChapter": 746,
    "toChapter": 775,
    "locationId": "天南",
    "realm": "元嬰後期",
    "status": "alive",
    "activity": "三大修士之一，主持高層聚會，提供回煞丸，與阴罗宗房宗主單獨交涉，在大戰中主動挑戰慕蘭神師"
   },
   {
    "fromChapter": 856,
    "toChapter": 885,
    "locationId": "大晉",
    "realm": "元嬰後期",
    "status": "alive",
    "activity": "修煉魔功，對韓立辟邪神雷存有戒心；曾提議聯手對付韓立被魏無涯拒絕；提供黑旗幫助韓立深入魔氣。"
   },
   {
    "fromChapter": 1155,
    "toChapter": 1184,
    "locationId": "天南",
    "realm": "元嬰後期",
    "status": "alive",
    "activity": "天南三大修士之一，大典密殿中與魏無涯聯手被韓立擊敗，退讓認可韓立天南第一修士地位。"
   }
  ]
 },
 {
  "id": "圭靈",
  "name": "圭靈",
  "aliases": [
   "玄巖龜妖",
   "醜婦",
   "丑婦"
  ],
  "faction": "不明",
  "importance": "major",
  "bio": "玄岩龜化形，本命元牌被韓立所奪，在北極元光中被陽環擊敗後奉本命元牌歸順，化為巨人持銀斧與乾老魔激戰，展現不滅之體神通。",
  "firstChapter": 1006,
  "canonFate": "被韓立收為靈獸，本命元牌落入韓立腹中；被空間裂縫吞噬陨落",
  "chronicle": [
   {
    "fromChapter": 1006,
    "toChapter": 1095,
    "locationId": "大晉",
    "realm": "元嬰期",
    "status": "alive",
    "activity": "在空間裂縫大爆發中被裂縫吞噬，本命牌消失"
   }
  ]
 },
 {
  "id": "血魄",
  "name": "血魄",
  "aliases": [
   "冰魄仙子血魄化身"
  ],
  "faction": "人族",
  "importance": "major",
  "bio": "冰魄仙子的血魄化身，隨韓立同行以提供跨大陸傳送名額信息，本弧中留守巨舟。",
  "firstChapter": 2296,
  "canonFate": "回歸冰魄本體",
  "chronicle": [
   {
    "fromChapter": 2296,
    "toChapter": 2385,
    "locationId": "靈界",
    "realm": "合體期",
    "status": "alive",
    "activity": "冰魄仙子的血靈化身，受噬金蟲王護衛於天鼎宮外圍搜索，最終與冰魄本體重新合併回歸。"
   }
  ]
 },
 {
  "id": "宋蒙",
  "name": "宋蒙",
  "aliases": [
   "宋師兄",
   "四師兄"
  ],
  "faction": "黃楓谷（李化元門下四師兄）",
  "importance": "major",
  "bio": "性格冷淡好戰，對韓立漠然以對後轉身離去。",
  "firstChapter": 232,
  "canonFate": "隨韓立作戰至越皇被殺，後與陳巧倩師兄同行返回大營。",
  "chronicle": [
   {
    "fromChapter": 232,
    "toChapter": 351,
    "locationId": "越京",
    "realm": "築基期",
    "status": "alive",
    "activity": "隨韓立作戰至越皇被殺，後與陳巧倩師兄同行返回大營。"
   }
  ]
 },
 {
  "id": "谷長老",
  "name": "谷長老",
  "aliases": [
   "谷某",
   "銀髮老者",
   "谷兄"
  ],
  "faction": "天淵城長老會",
  "importance": "major",
  "bio": "天淵城最高戰力長老，持有萬靈榜通天靈寶「金旭寶鏡」，主導動用七星精火大陣一擊焚滅整片魔獸攻城大軍；後主持召集援兵議事。",
  "firstChapter": 1875,
  "canonFate": "一臂被匈姓魔尊撕斷",
  "chronicle": [
   {
    "fromChapter": 1875,
    "toChapter": 2024,
    "locationId": "天淵城",
    "realm": "合體中期",
    "status": "alive",
    "activity": "主導天淵城防守計劃，與金越禪師聯手祭出太極圖困住血光聖祖化身，大戰中被匈姓魔尊撕去一臂，最終得勝後繼"
   },
   {
    "fromChapter": 2176,
    "toChapter": 2205,
    "locationId": "靈界",
    "realm": "合體期",
    "status": "alive",
    "activity": "天渊城長老會首腦，在是否交出海月天問題上主張兩全，最終在韩立大乘壓制下表態恭順。"
   }
  ]
 },
 {
  "id": "東門圖",
  "name": "東門圖",
  "aliases": [],
  "faction": "御靈宗",
  "importance": "major",
  "bio": "御靈宗大長老，因谷雙蒲一事對韓立心懷不滿，隱露敵意",
  "firstChapter": 746,
  "canonFate": "帶領三名五行靈嬰修士趕至戰場，加入圍攻古魔本體",
  "chronicle": [
   {
    "fromChapter": 746,
    "toChapter": 775,
    "locationId": "天南",
    "realm": "元嬰中期",
    "status": "alive",
    "activity": "御靈宗大長老，因谷雙蒲一事對韓立心懷不滿，隱露敵意"
   },
   {
    "fromChapter": 796,
    "toChapter": 855,
    "locationId": "大晉",
    "realm": "元嬰期",
    "status": "alive",
    "activity": "帶領三名五行靈嬰修士趕至戰場，加入圍攻古魔本體"
   }
  ]
 },
 {
  "id": "金悅",
  "name": "金悅",
  "aliases": [
   "金長老",
   "大長老",
   "少女",
   "金仙子"
  ],
  "faction": "天鵬族",
  "importance": "major",
  "bio": "天鵬族大長老，識破韓立身份後主導將其納入天鵬族為聖子，行事果斷，掌握聖器與族中大事。",
  "firstChapter": 1418,
  "canonFate": "天鵬族大長老，向越隆申訴赤融族侵占領地一事，韓立出面求情獲允調解，與韓立舊恩至此了清。",
  "chronicle": [
   {
    "fromChapter": 1418,
    "toChapter": 1447,
    "locationId": "天淵城",
    "realm": "合體中期以上",
    "status": "alive",
    "activity": "天鵬族大長老，識破韓立身份後主導將其納入天鵬族為聖子，行事果斷，掌握聖器與族中大事。"
   },
   {
    "fromChapter": 1845,
    "toChapter": 1874,
    "locationId": "地淵",
    "realm": "合體後期大成",
    "status": "alive",
    "activity": "天鵬族大長老，以天鵬功法交易為條件帶韓立進入地淵，完成交易後滿意而別"
   },
   {
    "fromChapter": 2296,
    "toChapter": 2325,
    "locationId": "靈界",
    "realm": "合體期",
    "status": "alive",
    "activity": "天鵬族大長老，向越隆申訴赤融族侵占領地一事，韓立出面求情獲允調解，與韓立舊恩至此了清。"
   }
  ]
 },
 {
  "id": "風邪",
  "name": "風邪",
  "aliases": [
   "黑色戰甲大漢"
  ],
  "faction": "魔族老魔",
  "importance": "major",
  "bio": "修成「牽機大法」的魔族，被封印在鎮魔鎖中，趁韓立與車騎恭聯繫時插手，自稱另有混沌之氣提取方法，以更低條件爭搶三分之一份額。",
  "firstChapter": 1935,
  "canonFate": "被棄入魔界地下冰河，與韓立脫離牽連",
  "chronicle": [
   {
    "fromChapter": 1935,
    "toChapter": 2144,
    "locationId": "魔界",
    "realm": "接近大乘（合體後期大成）",
    "status": "alive",
    "activity": "與車騎恭同為鎮魔鎖脫困者，聯手擒殺血光圣祖，共同折磨其元嬰。"
   }
  ]
 },
 {
  "id": "孫二狗",
  "name": "孫二狗",
  "aliases": [
   "孫幫主"
  ],
  "faction": "四平幫",
  "importance": "major",
  "bio": "嘉元城碼頭小頭目，被韓立以腐心丸收服為線人，後在曲魂協助下奪得四平幫帮主之位",
  "firstChapter": 100,
  "canonFate": "本弧末得韓立解除腐心丸之毒，忠心度大幅提升；已逝",
  "chronicle": [
   {
    "fromChapter": 100,
    "toChapter": 129,
    "locationId": "黃楓谷",
    "realm": "凡人",
    "status": "alive",
    "activity": "嘉元城碼頭小頭目，被韓立以腐心丸收服為線人，後在曲魂協助下奪得四平幫帮主之位"
   },
   {
    "fromChapter": 322,
    "toChapter": 351,
    "locationId": "越京",
    "realm": "無修為（凡人）",
    "status": "alive",
    "activity": "韓立昔日扶植的幫主，已中慢性隱毒；韓立為其解毒、留保命丹藥並締結符契，確立主僕關係。"
   },
   {
    "fromChapter": 656,
    "toChapter": 685,
    "locationId": "天南",
    "realm": "無修為（凡人）",
    "status": "alive",
    "activity": "韓立早年舊識，曾發誓世代奉韓立為主，孫家後人孫火現身。"
   }
  ]
 },
 {
  "id": "翁姓青年",
  "name": "翁姓青年",
  "aliases": [
   "翁前輩",
   "天云太上長老"
  ],
  "faction": "天雲族",
  "importance": "major",
  "bio": "本弧主持雲城高層會議，指揮應對角蚩族奸細；廣寒界開啟前賜予韓立「天罡印」，并指揮廣寒界开啟事宜。",
  "firstChapter": 1658,
  "canonFate": "昔日委託韓立將血魂瓶轉交冰魄仙子後人的異族人，修為據說連韓立也難望其項背。",
  "chronicle": [
   {
    "fromChapter": 1658,
    "toChapter": 1687,
    "locationId": "廣寒界",
    "realm": "大乘期",
    "status": "alive",
    "activity": "本弧主持雲城高層會議，指揮應對角蚩族奸細；廣寒界開啟前賜予韓立「天罡印」，并指揮廣寒界开啟事宜。"
   },
   {
    "fromChapter": 1748,
    "toChapter": 1754,
    "locationId": "雲城",
    "realm": "大乘期",
    "status": "alive",
    "activity": "以大乘修為與角蚩族兩名太上長老相互制衡，下令放棄雲城；單獨留韓立，委以帶信給冰魄仙子的任務，並授超級"
   },
   {
    "fromChapter": 1755,
    "toChapter": 1784,
    "locationId": "魔界",
    "realm": "不明",
    "status": "alive",
    "activity": "昔日委託韓立將血魂瓶轉交冰魄仙子後人的異族人，修為據說連韓立也難望其項背。"
   }
  ]
 },
 {
  "id": "馬師伯",
  "name": "馬師伯",
  "aliases": [
   "小老頭",
   "枯瘦老頭",
   "馬老頭"
  ],
  "faction": "黃楓谷",
  "importance": "major",
  "bio": "百藥園原管理者，精通藥理丹道，性情古怪但品行真誠，不斷提高對韓立的靈石獎勵，為其進入岳麓殿提供擔保",
  "firstChapter": 130,
  "canonFate": "離別前贈韓立內服外敷兩瓶丹藥，視韓立如子侄，沉迷丹道。",
  "chronicle": [
   {
    "fromChapter": 130,
    "toChapter": 171,
    "locationId": "黃楓谷",
    "realm": "築基期（疑）",
    "status": "alive",
    "activity": "定時來百藥園取藥材，韓立趁其規律作息秘密培植千年靈草；曾向韓立提及元陽元陰之體可提升築基成功率。"
   },
   {
    "fromChapter": 172,
    "toChapter": 201,
    "locationId": "越京",
    "realm": "不明",
    "status": "alive",
    "activity": "離別前贈韓立內服外敷兩瓶丹藥，視韓立如子侄，沉迷丹道。"
   }
  ]
 },
 {
  "id": "陳師妹",
  "name": "陳師妹",
  "aliases": [
   "陳氏七妹"
  ],
  "faction": "黃楓谷",
  "importance": "major",
  "bio": "陳家家主獨生女，原為陸師兄情侶，被其以合歡丹迷昏並欲殺害；大戰後被韓立以清靈散解毒後獲救。",
  "firstChapter": 160,
  "canonFate": "倖免於難，韓立為其解毒後離去。",
  "chronicle": [
   {
    "fromChapter": 160,
    "toChapter": 171,
    "locationId": "黃楓谷",
    "realm": "凡人",
    "status": "alive",
    "activity": "陳家家主獨生女，原為陸師兄情侶，被其以合歡丹迷昏並欲殺害；大戰後被韓立以清靈散解毒後獲救。"
   },
   {
    "fromChapter": 172,
    "toChapter": 231,
    "locationId": "越京",
    "realm": "筑基期",
    "status": "alive",
    "activity": "血色試煉後服用一粒築基丹，苦修一年後築基成功"
   }
  ]
 },
 {
  "id": "程師兄",
  "name": "程師兄",
  "aliases": [
   "程姓老者",
   "銀髮老者"
  ],
  "faction": "落雲宗",
  "importance": "major",
  "bio": "銀發老者，安排南宮婉義妹身份，未直接出場",
  "firstChapter": 746,
  "canonFate": "弧內壽元將盡，預計不久坐化",
  "chronicle": [
   {
    "fromChapter": 746,
    "toChapter": 775,
    "locationId": "天南",
    "realm": "元嬰中期",
    "status": "alive",
    "activity": "銀發老者，安排南宮婉義妹身份，未直接出場"
   },
   {
    "fromChapter": 826,
    "toChapter": 855,
    "locationId": "落雲宗",
    "realm": "元嬰初期",
    "status": "alive",
    "activity": "韓立的落雲宗師兄，與天晶真人和另一老者被戰鬥靈氣吸引至戰場，遭魔魂圍攻，韓立以血魔劍斬殺黑矛救其一命"
   },
   {
    "fromChapter": 856,
    "toChapter": 885,
    "locationId": "大晉",
    "realm": "元嬰初期",
    "status": "dead",
    "activity": "熱心迎回韓立，協助宗門事務，推薦韓立擔任大長老被拒；壽元僅餘十餘年，坦然面對即將坐化。"
   }
  ]
 },
 {
  "id": "紫靈仙子",
  "name": "紫靈仙子",
  "aliases": [
   "紫靈道友",
   "紫靈"
  ],
  "faction": "逆星盟（被迫）",
  "importance": "major",
  "bio": "與韓立同組穿越鬼冤之地，在鬼王之戰中持石碑自保，為結丹而來虛天殿採藥。",
  "firstChapter": 424,
  "canonFate": "容颜大变随温天仁行事，實則不情願；曾拒絕奉命抓捕元瑶；與溫天仁一同被鬼霧帶入陰冥之地，在暴風山迷霧中與韓立重逢，與梅凝義結金蘭，最終被韓立以雷遁挾帶脫出。",
  "chronicle": [
   {
    "fromChapter": 424,
    "toChapter": 453,
    "locationId": "虛天殿",
    "realm": "假丹期（筑基後期）",
    "status": "alive",
    "activity": "與韓立同組穿越鬼冤之地，在鬼王之戰中持石碑自保，為結丹而來虛天殿採藥。"
   },
   {
    "fromChapter": 484,
    "toChapter": 595,
    "locationId": "亂星海",
    "realm": "結丹初期",
    "status": "alive",
    "activity": "容颜大变随温天仁行事，實則不情願；曾拒絕奉命抓捕元瑶；與溫天仁一同被鬼霧帶入陰冥之地，在暴風山迷霧中"
   }
  ]
 },
 {
  "id": "菡雲芝",
  "name": "菡雲芝",
  "aliases": [
   "菡師姐",
   "菡師叔"
  ],
  "faction": "靈獸山",
  "importance": "major",
  "bio": "禁地中被韓立施以無憂針法消除半日記憶，不知情離開；試煉結束後平安出禁地",
  "firstChapter": 202,
  "canonFate": "昔年血色試煉舊識，來落雲宗致謝韓立兩次不殺之恩，受韓立贈宝物丹藥，帶走一封致御靈宗大長老的書信。",
  "chronicle": [
   {
    "fromChapter": 202,
    "toChapter": 231,
    "locationId": "越京",
    "realm": "煉氣期",
    "status": "alive",
    "activity": "禁地中被韓立施以無憂針法消除半日記憶，不知情離開；試煉結束後平安出禁地"
   },
   {
    "fromChapter": 656,
    "toChapter": 685,
    "locationId": "天南",
    "realm": "結丹初期",
    "status": "alive",
    "activity": "奉命與柳玉追蹤至木靈嬰，被韓立念及昔日情分而放生，隱瞞此事向師伯請罪。"
   },
   {
    "fromChapter": 1185,
    "toChapter": 1214,
    "locationId": "落雲宗",
    "realm": "結丹中期",
    "status": "alive",
    "activity": "昔年血色試煉舊識，來落雲宗致謝韓立兩次不殺之恩，受韓立贈宝物丹藥，帶走一封致御靈宗大長老的書信。"
   }
  ]
 },
 {
  "id": "董萱兒",
  "name": "董萱兒",
  "aliases": [
   "薰丫頭",
   "萱兒"
  ],
  "faction": "合歡宗（原黃楓谷）",
  "importance": "major",
  "bio": "修煉化春訣致容貌狐媚，守宮砂完好但名聲不堪，刁蠻任性，途中被艷麗男子田某以迷魂術控制後被韓立喝醒，隨後困在燕翎堡陰火大陣中。",
  "firstChapter": 232,
  "canonFate": "被困於燕翎堡陰火大陣，生死未卜",
  "chronicle": [
   {
    "fromChapter": 232,
    "toChapter": 261,
    "locationId": "越京",
    "realm": "築基初期",
    "status": "alive",
    "activity": "修煉化春訣致容貌狐媚，守宮砂完好但名聲不堪，刁蠻任性，途中被艷麗男子田某以迷魂術控制後被韓立喝醒，隨"
   },
   {
    "fromChapter": 352,
    "toChapter": 1214,
    "locationId": "黃楓谷",
    "realm": "結丹中期",
    "status": "dead",
    "activity": "黃楓谷舊識，因韓立成為其修煉奕夢訣的心魔而多年修為停滯，求韓立以神念傳度助其渡過心魔，事後可望進阶後"
   }
  ]
 },
 {
  "id": "雷雲子",
  "name": "雷雲子",
  "aliases": [
   "雷兄"
  ],
  "faction": "雷族（蠻荒異族一族少主）",
  "importance": "major",
  "bio": "韓立歸途中遇到的異族陣法宗師，擁有五雷之體，與韓立互換雷光法陣與雷紋凝練術，各留一手。",
  "firstChapter": 1755,
  "canonFate": "與韓立共同施展雙重雷陣遠遁萬里擺脫寶花追蹤，分手後攜天昙花離去",
  "chronicle": [
   {
    "fromChapter": 1755,
    "toChapter": 1994,
    "locationId": "魔界",
    "realm": "合體期",
    "status": "alive",
    "activity": "與韓立共同施展雙重雷陣遠遁萬里擺脫寶花追蹤，分手後攜天昙花離去"
   }
  ]
 },
 {
  "id": "雷蘭",
  "name": "雷蘭",
  "aliases": [],
  "faction": "天鵬族",
  "importance": "major",
  "bio": "天鵬族女聖子，精通雷電神通，在較技場獨自迎戰虹纱幾乎落敗，靠韓立解圍；進入地淵後表現較為主動。",
  "firstChapter": 1418,
  "canonFate": "天鵬族聖主之一，以修煉冰煞秘術為由隨金悅入地淵，目睹韓立傳送及啼魂擒怪禽始末",
  "chronicle": [
   {
    "fromChapter": 1418,
    "toChapter": 1447,
    "locationId": "地淵",
    "realm": "化神初期（初阶飛靈將）",
    "status": "alive",
    "activity": "天鵬族女聖子，精通雷電神通，在較技場獨自迎戰虹纱幾乎落敗，靠韓立解圍；進入地淵後表現較為主動。"
   },
   {
    "fromChapter": 1448,
    "toChapter": 1477,
    "locationId": "天淵城",
    "realm": "中高階靈將",
    "status": "alive",
    "activity": "天鵬族聖子之一，與白璧同行，試煉目標為取得冥焰果；全程依附韓立，最終在韓立護送下成功採得冥焰果，返回"
   },
   {
    "fromChapter": 1845,
    "toChapter": 1874,
    "locationId": "地淵",
    "realm": "元嬰期（聖主）",
    "status": "alive",
    "activity": "天鵬族聖主之一，以修煉冰煞秘術為由隨金悅入地淵，目睹韓立傳送及啼魂擒怪禽始末"
   }
  ]
 },
 {
  "id": "碧影",
  "name": "碧影",
  "aliases": [
   "碧老怪"
  ],
  "faction": "赫連商盟",
  "importance": "major",
  "bio": "化身方進（圓臉青年）在血天接待韓立，以八鬼噬佛圖分神考驗韓立，邀其代表商盟出戰陰司十王，以仙界秘術為報酬，換取上古祭壇資料配合。",
  "firstChapter": 2326,
  "canonFate": "陨落於馬良之手",
  "chronicle": [
   {
    "fromChapter": 2326,
    "toChapter": 2355,
    "locationId": "仙界",
    "realm": "大乘期",
    "status": "alive",
    "activity": "化身方進（圓臉青年）在血天接待韓立，以八鬼噬佛圖分神考驗韓立，邀其代表商盟出戰陰司十王，以仙界秘術為"
   },
   {
    "fromChapter": 2356,
    "toChapter": 2415,
    "locationId": "靈界",
    "realm": "大乘期",
    "status": "alive",
    "activity": "主持強者之戰，事後主導觀禮討魔大戰；與靈雲夫人等人被馬良斬殺。"
   }
  ]
 },
 {
  "id": "趙無歸",
  "name": "趙無歸",
  "aliases": [
   "趙前輩",
   "趙天衛"
  ],
  "faction": "天淵城天衛",
  "importance": "major",
  "bio": "天淵衛金甲修士，與另一名年長金甲修士助韓立渡過兩色雷劫，引其入天淵城，並為其辦理青冥衛身份。",
  "firstChapter": 1296,
  "canonFate": "主持飛升修士聚會，揭露飛升修士不公處境，傳達雷羅長老關於自願任務的安排",
  "chronicle": [
   {
    "fromChapter": 1296,
    "toChapter": 1355,
    "locationId": "天淵城",
    "realm": "煉虛期",
    "status": "alive",
    "activity": "當初引韓立入天淵城的天衛，本弧末與閆姓修士共同主持飛升修士聚會，暗示大战迫近。"
   },
   {
    "fromChapter": 1356,
    "toChapter": 1357,
    "locationId": "風元大陸",
    "realm": "煉虛期",
    "status": "alive",
    "activity": "主持飛升修士聚會，揭露飛升修士不公處境，傳達雷羅長老關於自願任務的安排"
   }
  ]
 },
 {
  "id": "銀罡子",
  "name": "銀罡子",
  "aliases": [],
  "faction": "赫連商盟聯盟方",
  "importance": "major",
  "bio": "韓立赴鳴煞之地途中偶遇，通曉造化之身，二人一同進入天外天。",
  "firstChapter": 2386,
  "canonFate": "被馬良靈域攻擊的地下火山熔岩所殺，隕滅。",
  "chronicle": [
   {
    "fromChapter": 2386,
    "toChapter": 2420,
    "locationId": "靈界",
    "realm": "大乘期",
    "status": "alive",
    "activity": "參與大戰，對少了韓立等三人守陣感到擔憂，見四頭黑猊獸後信心大增。"
   },
   {
    "fromChapter": 2421,
    "toChapter": 2450,
    "locationId": "無涯海",
    "realm": "大乘",
    "status": "dead",
    "activity": "參與鳴煞之地大戰抵抗馬良，被金色地下火山的金色熔岩吞沒。"
   }
  ]
 },
 {
  "id": "墨玉珠",
  "name": "墨玉珠",
  "aliases": [
   "墨師姐",
   "大小姐",
   "李夫人"
  ],
  "faction": "墨府",
  "importance": "major",
  "bio": "墨大夫與大夫人金氏之女，嘉元城第一美女，主動與吳劍鳴虛與委蛇以拖延時間",
  "firstChapter": 100,
  "canonFate": "韩立早年結識的越國女子，李纓寧之母，本弧中已離世（暗示），韩立由李纓寧得知其早年遭遇。",
  "chronicle": [
   {
    "fromChapter": 100,
    "toChapter": 129,
    "locationId": "黃楓谷",
    "realm": "凡人",
    "status": "alive",
    "activity": "墨大夫與大夫人金氏之女，嘉元城第一美女，主動與吳劍鳴虛與委蛇以拖延時間"
   },
   {
    "fromChapter": 322,
    "toChapter": 351,
    "locationId": "越京",
    "realm": "無修為（凡人）",
    "status": "alive",
    "activity": "墨府大師姐，竟已嫁入仇家五色門主之子，阻止韓立殺害其夫婿；韓立得知其有女兒纓寧，留通靈玉予其女。"
   },
   {
    "fromChapter": 716,
    "toChapter": 745,
    "locationId": "越國",
    "realm": "無修為（凡人）",
    "status": "alive",
    "activity": "韩立早年結識的越國女子，李纓寧之母，本弧中已離世（暗示），韩立由李纓寧得知其早年遭遇。"
   }
  ]
 },
 {
  "id": "獠影",
  "name": "獠影",
  "aliases": [],
  "faction": "銀月一族影衛",
  "importance": "major",
  "bio": "潛伏圣岛五六萬年，奉敖嘯命令在本弧中被安排將魂契轉給銀月，為其護衛",
  "firstChapter": 1965,
  "canonFate": "在銀月被古魔逼入絕境時出手斬殺古魔，此後與銀月聯手殲滅魔族隊伍；為銀月的嫡系影衛。",
  "chronicle": [
   {
    "fromChapter": 1965,
    "toChapter": 2174,
    "locationId": "魔界",
    "realm": "不詳",
    "status": "alive",
    "activity": "銀月的貼身影衛，身穿黑袍戴青銅狼面具，本弧秘密監聽韩立與敖啸密談並如實報告銀月。"
   },
   {
    "fromChapter": 2176,
    "toChapter": 2205,
    "locationId": "靈界",
    "realm": "合體期（影衛）",
    "status": "alive",
    "activity": "在銀月被古魔逼入絕境時出手斬殺古魔，此後與銀月聯手殲滅魔族隊伍；為銀月的嫡系影衛。"
   }
  ]
 },
 {
  "id": "曉風仙子",
  "name": "曉風仙子",
  "aliases": [
   "曉風仙子"
  ],
  "faction": "谷家家主",
  "importance": "major",
  "bio": "谷家家主，登門邀請韓立加入谷家，後以真靈大典臨時出手換部分血脈秘術的交易打動韩立，獲得其承諾。",
  "firstChapter": 1755,
  "canonFate": "代谷家出席韓立大乘慶典",
  "chronicle": [
   {
    "fromChapter": 1755,
    "toChapter": 1844,
    "locationId": "魔界",
    "realm": "煉虛後期",
    "status": "alive",
    "activity": "邀請韩立以客卿身份出席真靈大典，大典後履行約定交付真靈之血典籍等諸多物品，再次邀韩立入谷家被拒。"
   },
   {
    "fromChapter": 2206,
    "toChapter": 2235,
    "locationId": "靈界",
    "realm": "不詳",
    "status": "alive",
    "activity": "代谷家出席韓立大乘慶典"
   }
  ]
 },
 {
  "id": "黛兒",
  "name": "黛兒",
  "aliases": [
   "鳳靈仙子",
   "趙小姐"
  ],
  "faction": "黑鳳族（人妖混血）",
  "importance": "major",
  "bio": "安遠城城主趙某孫女，城破時被韓立所救；被黑凤族妖女注入傳承珠後得知半妖身份，自願隨妖女離去",
  "firstChapter": 1266,
  "canonFate": "自願跟隨黑凤族宮裝妖女（其父親族）離開人族境域",
  "chronicle": [
   {
    "fromChapter": 1266,
    "toChapter": 1295,
    "locationId": "風元大陸",
    "realm": "幼童（半妖，含黑凤族血脈）",
    "status": "alive",
    "activity": "安遠城城主趙某孫女，城破時被韓立所救；被黑凤族妖女注入傳承珠後得知半妖身份，自願隨妖女離去"
   },
   {
    "fromChapter": 1785,
    "toChapter": 1844,
    "locationId": "魔界",
    "realm": "化神初期",
    "status": "alive",
    "activity": "昔日人界舊識，化形後容貌與南宮婉酷似七八分；每隔數日登門探訪韓立，言談甚歡。"
   }
  ]
 },
 {
  "id": "麒影",
  "name": "麒影",
  "aliases": [
   "青色麒麟虛影",
   "迷你麒影",
   "迷你麒麟"
  ],
  "faction": "無",
  "importance": "major",
  "bio": "上古麒麟真靈自爆後分化的殘神，附身纖纤，掌握真靈之穴位置，警告韓立神通危險",
  "firstChapter": 1598,
  "canonFate": "纖纤的麒麟形靈獸，曾分析真麟本源之事及天外魔甲，向纖纤提及上古煉丹宗師遺址所在。",
  "chronicle": [
   {
    "fromChapter": 1598,
    "toChapter": 1687,
    "locationId": "天淵城",
    "realm": "未明（靈獸）",
    "status": "alive",
    "activity": "纖纤的麒麟形靈獸，曾分析真麟本源之事及天外魔甲，向纖纤提及上古煉丹宗師遺址所在。"
   }
  ]
 },
 {
  "id": "七妙真人",
  "name": "七妙真人",
  "aliases": [],
  "faction": "天魔宗",
  "importance": "major",
  "bio": "攜五只禁魔環、赤鳴鼓與七真寶入塔，以禁魔環短暫制伏古魔，後赤鳴鼓被魔像捏碎。",
  "firstChapter": 1036,
  "canonFate": "被空間裂縫斬殺",
  "chronicle": [
   {
    "fromChapter": 1036,
    "toChapter": 1095,
    "locationId": "大晉",
    "realm": "元嬰期",
    "status": "alive",
    "activity": "被珈輪戰魔纏住無法脫身，在空間裂縫大爆發中被多道裂縫斬殺，元嬰亦毀"
   }
  ]
 },
 {
  "id": "元姓大漢",
  "name": "元姓大漢",
  "aliases": [
   "元兄",
   "元道友",
   "元師弟"
  ],
  "faction": "毒聖門",
  "importance": "major",
  "bio": "南疆毒聖門修士，受富姓老者之約赴雙蝎山，性格直率，聽聞培嬰丹大感振奮。",
  "firstChapter": 946,
  "canonFate": "本弧中被銀翅夜叉殺死，元嬰被吞。",
  "chronicle": [
   {
    "fromChapter": 946,
    "toChapter": 1005,
    "locationId": "大晉",
    "realm": "元嬰中期",
    "status": "dead",
    "activity": "最先發現陰芝馬蹤跡並傳信；在廣場深處遭銀翅夜叉突然出手一擊斃命，元嬰被吞噬，靈鳖同時隕滅。"
   }
  ]
 },
 {
  "id": "天元聖皇",
  "name": "天元聖皇",
  "aliases": [
   "天元境之主",
   "聖皇",
   "玄武兄"
  ],
  "faction": "人族（天元境境主）",
  "importance": "major",
  "bio": "人族大名鼎鼎的天元境之主，識破紫影附身雷羅真人，以四神香配合擒獲；旁白描述其擁有骖靈巨龜，並聯手天妙兄獵殺雷龜為骖靈取雷珠延壽。",
  "firstChapter": 1358,
  "canonFate": "邀韓立登車共飲虎魄靈酒，幫助湊齊紅羅仙酒材料，與韓立建立友好關係",
  "chronicle": [
   {
    "fromChapter": 1358,
    "toChapter": 1387,
    "locationId": "天元境",
    "realm": "合體期（推測）",
    "status": "alive",
    "activity": "人族大名鼎鼎的天元境之主，識破紫影附身雷羅真人，以四神香配合擒獲；旁白描述其擁有骖靈巨龜，並聯手天妙"
   },
   {
    "fromChapter": 1785,
    "toChapter": 1814,
    "locationId": "魔界",
    "realm": "合體後期",
    "status": "alive",
    "activity": "邀韓立登車共飲虎魄靈酒，幫助湊齊紅羅仙酒材料，與韓立建立友好關係"
   }
  ]
 },
 {
  "id": "天恨老怪",
  "name": "天恨老怪",
  "aliases": [],
  "faction": "散修",
  "importance": "major",
  "bio": "四大勢力秘密安排偷襲阗天城資源倉庫，獲允占据胥國立派；未直接出場於正面戰場",
  "firstChapter": 746,
  "canonFate": "潛入阗天城仓库与突兀人奸细意外相遇，暴露後逃回天一城證實突兀人情報",
  "chronicle": [
   {
    "fromChapter": 746,
    "toChapter": 795,
    "locationId": "天南",
    "realm": "元嬰中期",
    "status": "alive",
    "activity": "潛入阗天城仓库与突兀人奸细意外相遇，暴露後逃回天一城證實突兀人情報"
   }
  ]
 },
 {
  "id": "天瀾聖獸",
  "name": "天瀾聖獸",
  "aliases": [
   "童子",
   "天瀾道友",
   "天瀾聖獸分神",
   "天瀾圣獸"
  ],
  "faction": "虛天鼎（被困）",
  "importance": "major",
  "bio": "靈界上位妖修分神，被困虛天鼎百餘年後自行開啟靈智，與韓立達成合作：傳授銀蝌文、鯤鵬靈羽煉翅法、破滅法目煉法，換取護持化形度劫及解除同化。",
  "firstChapter": 1155,
  "canonFate": "化形成功",
  "chronicle": [
   {
    "fromChapter": 1155,
    "toChapter": 1184,
    "locationId": "靈界",
    "realm": "相當於八級妖獸",
    "status": "alive",
    "activity": "靈界上位妖修分神，被困虛天鼎百餘年後自行開啟靈智，與韓立達成合作：傳授銀蝌文、鯤鵬靈羽煉翅法、破滅法"
   },
   {
    "fromChapter": 1185,
    "toChapter": 1214,
    "locationId": "天南",
    "realm": "八級妖獸→化形成功（人形）",
    "status": "alive",
    "activity": "本弧在韓立護法下成功渡過十一波化形雷劫，完成化形，以黃衣童子模樣出現，傳授韓立化界珠、木生珠、金剛訣"
   }
  ]
 },
 {
  "id": "文心鳳",
  "name": "文心鳳",
  "aliases": [],
  "faction": "幻心門（赫連商盟長老）",
  "importance": "major",
  "bio": "出身幻心門的商盟長老，擅長對鬼物克制神通，以寒武玄龜輔助在強者之戰中對抗蓮臺白骨鬼王。",
  "firstChapter": 2356,
  "canonFate": "疑陨落於馬良攻城之戰",
  "chronicle": [
   {
    "fromChapter": 2356,
    "toChapter": 2415,
    "locationId": "靈界",
    "realm": "大乘期",
    "status": "alive",
    "activity": "與韓立聯手擊退佛骨王，強者之戰勝後參與商盟商議，後在碧影所在巨城被馬良殺傷。"
   }
  ]
 },
 {
  "id": "月梳",
  "name": "月梳",
  "aliases": [
   "月梳道友"
  ],
  "faction": "不明（與雲淡為兄妹）",
  "importance": "major",
  "bio": "與兄長雲淡共守陣眼，對軒九靈頗有敵意，氣息詭異，站立處虛空扭曲。",
  "firstChapter": 2416,
  "canonFate": "同雲淡一起被獻祭機制滅殺。",
  "chronicle": [
   {
    "fromChapter": 2416,
    "toChapter": 2420,
    "locationId": "靈界",
    "realm": "大乘期",
    "status": "alive",
    "activity": "與兄長雲淡共守陣眼，對軒九靈頗有敵意，氣息詭異，站立處虛空扭曲。"
   },
   {
    "fromChapter": 2421,
    "toChapter": 2450,
    "locationId": "無涯海",
    "realm": "大乘",
    "status": "dead",
    "activity": "雲淡之妹，同被困血色光幕獻祭，與兄一同被血色波動所殺。"
   }
  ]
 },
 {
  "id": "木夫人",
  "name": "木夫人",
  "aliases": [
   "化仙宗木夫人"
  ],
  "faction": "化仙宗",
  "importance": "major",
  "bio": "憑昆吾三老遺留銀牌先一步進入昆吾殿奪宝，以日月梭和青帕施計困住韓立，最終在混戰中取得化龍璽及紫色小劍，被乾老魔和二妖追逼後逃入北極元光。",
  "firstChapter": 1006,
  "canonFate": "軀體被斬殺、元嬰被元刹圣祖分神吞噬",
  "chronicle": [
   {
    "fromChapter": 1006,
    "toChapter": 1035,
    "locationId": "大晉",
    "realm": "元嬰中期",
    "status": "alive",
    "activity": "憑昆吾三老遺留銀牌先一步進入昆吾殿奪宝，以日月梭和青帕施計困住韓立，最終在混戰中取得化龍璽及紫色小劍"
   },
   {
    "fromChapter": 1036,
    "toChapter": 1065,
    "locationId": "昆吾山",
    "realm": "元嬰後期",
    "status": "alive",
    "activity": "持化龍璽與日月梭，知曉昆吾山封印真相；師妹被元刹迷控後孤軍奮戰，最終被元刹古魔爪芒斬殺，元嬰被吞噬。"
   }
  ]
 },
 {
  "id": "木靈八子",
  "name": "木靈八子",
  "aliases": [],
  "faction": "木族",
  "importance": "major",
  "bio": "木族最擅卜算的八名長老，本弧被啟用為此次大戰推演戰場形勢，每日卜算供臨時大長老參考。",
  "firstChapter": 2145,
  "canonFate": "本弧全數死亡——遭天演之力反噬，壽元耗盡斃命。",
  "chronicle": [
   {
    "fromChapter": 2145,
    "toChapter": 2175,
    "locationId": "魔界",
    "realm": "不詳（木族著名推算大師）",
    "status": "dead",
    "activity": "八名白髮蒼蒼的木族老者，在推算天演之力過程中遭反噬，七竅黑血、壽元耗盡全數當場斃命。"
   }
  ]
 },
 {
  "id": "王絕楚",
  "name": "王絕楚",
  "aliases": [
   "王門主",
   "王大門主"
  ],
  "faction": "七玄門",
  "importance": "major",
  "bio": "以落日峰空心陷阱震懾敵方，強迫舉行死契血斗，讓三位師叔出戰以期扭轉局面",
  "firstChapter": 61,
  "canonFate": "本弧內安全，多年後自然去世，遺留養精丹引發紛爭。",
  "chronicle": [
   {
    "fromChapter": 61,
    "toChapter": 99,
    "locationId": "七玄門",
    "realm": "七玄門門主（武功高手）",
    "status": "alive",
    "activity": "死鬥後密議應對韓立之策，後被韓立單獨試探，最終與韓立達成秘密交易；事後以養精丹多次起死回生，並提攜厲"
   }
  ]
 },
 {
  "id": "田飛兒",
  "name": "田飛兒",
  "aliases": [
   "田仙子",
   "黑袍男子"
  ],
  "faction": "龍島真龍族",
  "importance": "major",
  "bio": "偽裝成黑袍男子混入拍賣會劫走魘龍之血，向韓立求助混入傳送名額，以廣靈道果大會執事協助換取韓立護送；揭露魘龍之血真相後離去返族。",
  "firstChapter": 2326,
  "canonFate": "親自迎接韓立入摩柯界、引路龍島；向韓立介紹金大長老的換取要求；交付當日承諾的廣靈道果令牌指引玉簡。",
  "chronicle": [
   {
    "fromChapter": 2326,
    "toChapter": 2355,
    "locationId": "靈界",
    "realm": "大乘期（真龍之身）",
    "status": "alive",
    "activity": "偽裝成黑袍男子混入拍賣會劫走魘龍之血，向韓立求助混入傳送名額，以廣靈道果大會執事協助換取韓立護送；揭"
   },
   {
    "fromChapter": 2421,
    "toChapter": 2450,
    "locationId": "無涯海",
    "realm": "大乘（真龍族）",
    "status": "alive",
    "activity": "親自迎接韓立入摩柯界、引路龍島；向韓立介紹金大長老的換取要求；交付當日承諾的廣靈道果令牌指引玉簡。"
   }
  ]
 },
 {
  "id": "白蕓馨",
  "name": "白蕓馨",
  "aliases": [
   "蕓馨",
   "蕓兒"
  ],
  "faction": "幻夜城白家",
  "importance": "major",
  "bio": "幻夜白家嫡系，帶隊荒地尋紫靈果時被血線蝠圍困，韓立出手相救；回城後欲引薦白家老祖覆天居士，並贈韓立玉佩令。",
  "firstChapter": 2025,
  "canonFate": "死亡——被礦脈魔靈侵入肉身，韓立以御劍神通斬開其被魔靈佔據的頭顱後，白芸馨肉身枯竭而亡",
  "chronicle": [
   {
    "fromChapter": 2025,
    "toChapter": 2084,
    "locationId": "魔界",
    "realm": "煉虛期",
    "status": "dead",
    "activity": "白家弟子，曾引韓立前往白家，協助布置法陣攻擊魔獸；在礦脈戰鬥中被魔靈入體，頭顱遭切落，身亡。"
   }
  ]
 },
 {
  "id": "冰魄",
  "name": "冰魄",
  "aliases": [
   "血魄本體",
   "冰魄仙子"
  ],
  "faction": "人族",
  "importance": "major",
  "bio": "血魄本體，昔年進入天鼎宮後被困其中，韓立此行目的之一為將其救出。",
  "firstChapter": 2326,
  "canonFate": "成功出逃天鼎宮，暫隱附近修煉",
  "chronicle": [
   {
    "fromChapter": 2326,
    "toChapter": 2385,
    "locationId": "靈界",
    "realm": "大乘期（剛晉階數年，氣息未穩）",
    "status": "alive",
    "activity": "困居天鼎宮中樞多年後終被韓立救出，得到天鼎真人部分衣缽功法，以血魄化身記憶回歸本體後離宮獨自鞏固修為"
   }
  ]
 },
 {
  "id": "多眼魔",
  "name": "多眼魔",
  "aliases": [
   "銀袍老者（本弧形象）",
   "銀袍老者"
  ],
  "faction": "魔金山脈",
  "importance": "major",
  "bio": "其子（少主）曾被韓立所殺，因此派九夜與五泣追殺韓立；本弧末在山脈深處宮殿中與鐵翅、血臂議論局勢，提及圣祖即將蘇醒。",
  "firstChapter": 1628,
  "canonFate": "三魔之一，覲見寶花聖祖後奉命監工布置法陣，急於追查芝仙下落但時機已過。",
  "chronicle": [
   {
    "fromChapter": 1628,
    "toChapter": 1687,
    "locationId": "天淵城",
    "realm": "聖階",
    "status": "alive",
    "activity": "三魔之一，覲見寶花聖祖後奉命監工布置法陣，急於追查芝仙下落但時機已過。"
   }
  ]
 },
 {
  "id": "血煞",
  "name": "血煞",
  "aliases": [],
  "faction": "血天大陸",
  "importance": "major",
  "bio": "血天頂級強者，強者之戰前夕從「千階迷宮」歸來加入隊伍，最後一刻抵達小世界據點。",
  "firstChapter": 2356,
  "canonFate": "化身陨落",
  "chronicle": [
   {
    "fromChapter": 2356,
    "toChapter": 2415,
    "locationId": "靈界",
    "realm": "大乘期",
    "status": "alive",
    "activity": "以化身參加強者之戰，化身被七竅王斬殺，本體安然。"
   }
  ]
 },
 {
  "id": "血燃",
  "name": "血燃",
  "aliases": [
   "血道友"
  ],
  "faction": "地蛟島（異族）",
  "importance": "major",
  "bio": "具上古真靈血焰六首蛛血脈，與黑鱗聯手對抗靈王要求進入小修羅界；在修羅大戰中對戰族母。",
  "firstChapter": 2266,
  "canonFate": "與黑鱗為兄弟，與韓立同行進入小修羅界，最終得到修羅蛛晶核和三清雷霄符後離去。",
  "chronicle": [
   {
    "fromChapter": 2266,
    "toChapter": 2325,
    "locationId": "靈界",
    "realm": "大乘期",
    "status": "alive",
    "activity": "與黑鱗為兄弟，與韓立同行進入小修羅界，最終得到修羅蛛晶核和三清雷霄符後離去。"
   }
  ]
 },
 {
  "id": "血臂",
  "name": "血臂",
  "aliases": [
   "血袍人"
  ],
  "faction": "魔金山脈",
  "importance": "major",
  "bio": "血瑛之父，本弧末在宮殿中與鐵翅、多眼議論黑淵鰐進階聖階及圣祖蘇醒等事。",
  "firstChapter": 1628,
  "canonFate": "三魔之一，覲見寶花聖祖，得聖祖賜予玄天如意刃殘片護身。",
  "chronicle": [
   {
    "fromChapter": 1628,
    "toChapter": 1687,
    "locationId": "天淵城",
    "realm": "聖階",
    "status": "alive",
    "activity": "三魔之一，覲見寶花聖祖，得聖祖賜予玄天如意刃殘片護身。"
   }
  ]
 },
 {
  "id": "血靈",
  "name": "血靈",
  "aliases": [
   "血靈大人",
   "冰魄仙子血魂化身"
  ],
  "faction": "許家，冰魄先祖化身",
  "importance": "major",
  "bio": "冰魄仙子以血魂大法封存的分靈，被許家動用血晶棺喚醒；向韓立索回虛天鼎，透露冰魄仙子本尊可能被困於某異大陸。",
  "firstChapter": 1755,
  "canonFate": "從秘密洞窟取出「虛皇鼎」，此鼎是通往雷鳴大陸的鑰匙，事後與許芊羽三女重新匯合。",
  "chronicle": [
   {
    "fromChapter": 1755,
    "toChapter": 1964,
    "locationId": "魔界",
    "realm": "合體中期（化身）",
    "status": "alive",
    "activity": "從秘密洞窟取出「虛皇鼎」，此鼎是通往雷鳴大陸的鑰匙，事後與許芊羽三女重新匯合。"
   }
  ]
 },
 {
  "id": "吳風",
  "name": "吳風",
  "aliases": [],
  "faction": "黃楓谷",
  "importance": "major",
  "bio": "傳功弟子，對低階法術造詣精深，對所有師兄弟一視同仁無私教授，韓立在谷內少數信得過的人之一",
  "firstChapter": 130,
  "canonFate": "向韓立詳述血禁試煉內情，傳授斂氣術，並被韓立旁敲側擊問出築基丹服用方法。",
  "chronicle": [
   {
    "fromChapter": 130,
    "toChapter": 171,
    "locationId": "黃楓谷",
    "realm": "炼气期頂峰（服用築基丹未突破）",
    "status": "alive",
    "activity": "向韓立詳述血禁試煉內情，傳授斂氣術，並被韓立旁敲側擊問出築基丹服用方法。"
   }
  ]
 },
 {
  "id": "宋姓女子",
  "name": "宋姓女子",
  "aliases": [
   "宋師侄",
   "白鳳峰宋姓女子"
  ],
  "faction": "落雲宗（天道盟）",
  "importance": "major",
  "bio": "白鳳峰峰弟子，傳遞紫靈玉簡，贈韓立宋家古籍，賭戰時負責監督血罩法陣",
  "firstChapter": 746,
  "canonFate": "持有紫靈提供的墜魔谷內谷路線圖，帶領三女入谷，被第二元嬰生擒，本弧末獲韓立解救。",
  "chronicle": [
   {
    "fromChapter": 746,
    "toChapter": 775,
    "locationId": "天南",
    "realm": "結丹初期",
    "status": "alive",
    "activity": "白鳳峰峰弟子，傳遞紫靈玉簡，贈韓立宋家古籍，賭戰時負責監督血罩法陣"
   },
   {
    "fromChapter": 1155,
    "toChapter": 1184,
    "locationId": "墜魔谷",
    "realm": "結丹期",
    "status": "alive",
    "activity": "持有紫靈提供的墜魔谷內谷路線圖，帶領三女入谷，被第二元嬰生擒，本弧末獲韓立解救。"
   }
  ]
 },
 {
  "id": "宋姓女修",
  "name": "宋姓女修",
  "aliases": [
   "宋師妹",
   "宋師祖",
   "白鳳仙"
  ],
  "faction": "落雲宗白鳳峰",
  "importance": "major",
  "bio": "以「通明靈犀」神通探查韓立心神，識破杜東可疑，指點韓立修習玄冰訣，参加試劍大会",
  "firstChapter": 626,
  "canonFate": "受韓立贈幻滅丹與陰元丸，後在百年閉關期間凝結元嬰成功；受命尋找神識天生強大的弟子，終於找到石堅。",
  "chronicle": [
   {
    "fromChapter": 626,
    "toChapter": 1214,
    "locationId": "天南",
    "realm": "結丹中期→元嬰期（百年後）",
    "status": "alive",
    "activity": "受韓立贈幻滅丹與陰元丸，後在百年閉關期間凝結元嬰成功；受命尋找神識天生強大的弟子，終於找到石堅。"
   }
  ]
 },
 {
  "id": "卓沖",
  "name": "卓沖",
  "aliases": [
   "卓兄",
   "碧眼大漢"
  ],
  "faction": "天淵城丙五十六隊",
  "importance": "major",
  "bio": "韓立的第一個接觸的隊員，機靈豪爽，擔任非正式聯絡人角色。",
  "firstChapter": 1326,
  "canonFate": "韓立昔日青冥衛隊中部屬，在天淵城傳送陣外重遇韓立，見其境界大進深感震驚。",
  "chronicle": [
   {
    "fromChapter": 1326,
    "toChapter": 1355,
    "locationId": "風元大陸",
    "realm": "元嬰後期大成",
    "status": "alive",
    "activity": "韓立的第一個接觸的隊員，機靈豪爽，擔任非正式聯絡人角色。"
   },
   {
    "fromChapter": 1755,
    "toChapter": 1784,
    "locationId": "天淵城",
    "realm": "化神初期",
    "status": "alive",
    "activity": "韓立昔日青冥衛隊中部屬，在天淵城傳送陣外重遇韓立，見其境界大進深感震驚。"
   }
  ]
 },
 {
  "id": "林鸞",
  "name": "林鸞",
  "aliases": [
   "林鸞仙子"
  ],
  "faction": "天皇宗",
  "importance": "major",
  "bio": "倚天城太上長老，持有血魂符控制合息獸作為殺手鐧，主持城防謀劃，合息獸被血光化身收走後逃離，遭冷刃追殺。",
  "firstChapter": 1905,
  "canonFate": "倚天城僅存另一位合體修士，青龍離城前將九星宗弟子托付於她；得知青龍隕落後沉默不語",
  "chronicle": [
   {
    "fromChapter": 1905,
    "toChapter": 1994,
    "locationId": "魔界",
    "realm": "合體期",
    "status": "alive",
    "activity": "倚天城僅存另一位合體修士，青龍離城前將九星宗弟子托付於她；得知青龍隕落後沉默不語"
   }
  ]
 },
 {
  "id": "武炫",
  "name": "武炫",
  "aliases": [
   "六師兄"
  ],
  "faction": "黃楓谷（李化元門下七師兄）",
  "importance": "major",
  "bio": "容貌英俊，李化元原擬讓其與董萱兒雙修但被紅拂否決，後對董萱兒念念不忘，被師父訓斥後派出辦事。",
  "firstChapter": 232,
  "canonFate": "失蹤，下落不明",
  "chronicle": [
   {
    "fromChapter": 232,
    "toChapter": 321,
    "locationId": "越京",
    "realm": "筑基初期",
    "status": "alive",
    "activity": "因七派禁令拒絕參與闖皇城行動，後於行動前夕神秘失蹤，疑遭黑煞教擄走。"
   }
  ]
 },
 {
  "id": "穹老怪",
  "name": "穹老怪",
  "aliases": [
   "穹前輩"
  ],
  "faction": "掩月宗",
  "importance": "major",
  "bio": "喜戲弄結丹期修士的老怪物，強行插賭、以三枚無形針符寶為注，信心十足後隱去。",
  "firstChapter": 172,
  "canonFate": "禁地試煉後主持賭局，向浮雲子討得血線蛟內丹，向李化元討得兩塊鐵精",
  "chronicle": [
   {
    "fromChapter": 172,
    "toChapter": 231,
    "locationId": "越京",
    "realm": "結丹期以上",
    "status": "alive",
    "activity": "禁地試煉後主持賭局，向浮雲子討得血線蛟內丹，向李化元討得兩塊鐵精"
   }
  ]
 },
 {
  "id": "花天奇",
  "name": "花天奇",
  "aliases": [
   "花道友",
   "花長老",
   "花師兄"
  ],
  "faction": "毒聖門大長老",
  "importance": "major",
  "bio": "毒聖門大長老，面帶碧紋，得知昆吾山現世後盡起門中人手趕到，在入口前與乾老魔周旋，設計放乾老魔先進入幻阵，最終聯手眾人進山。",
  "firstChapter": 976,
  "canonFate": "以須彌五行壁封堵葉月聖逃路，率四老先奔第八層，進入宮殿後七竅流血昏迷，身前銀箱被翠綠木尺守護。",
  "chronicle": [
   {
    "fromChapter": 976,
    "toChapter": 1005,
    "locationId": "昆吾山",
    "realm": "元嬰中期頂峰",
    "status": "alive",
    "activity": "毒聖門大長老，面帶碧紋，得知昆吾山現世後盡起門中人手趕到，在入口前與乾老魔周旋，設計放乾老魔先進入幻"
   },
   {
    "fromChapter": 1006,
    "toChapter": 1035,
    "locationId": "大晉",
    "realm": "元嬰中期",
    "status": "alive",
    "activity": "以須彌五行壁封堵葉月聖逃路，率四老先奔第八層，進入宮殿後七竅流血昏迷，身前銀箱被翠綠木尺守護。"
   }
  ]
 },
 {
  "id": "金青",
  "name": "金青",
  "aliases": [],
  "faction": "散修",
  "importance": "major",
  "bio": "韓立結丹後結識的鄰居結丹修士，邀韓立一同前往古修士遺址破陣",
  "firstChapter": 394,
  "canonFate": "被白骨骸骨射殺",
  "chronicle": [
   {
    "fromChapter": 394,
    "toChapter": 453,
    "locationId": "亂星海",
    "realm": "結丹期",
    "status": "alive",
    "activity": "在洞府遭遇危機後背叛韓立獨逃，被骸骨白光射穿而亡。"
   }
  ]
 },
 {
  "id": "金焰侯",
  "name": "金焰侯",
  "aliases": [
   "金道友",
   "金焰候"
  ],
  "faction": "冥河之地",
  "importance": "major",
  "bio": "居於翠湖金光島，異獸化人，嗜愛金色飾物；用三瓶冥河靈乳及息壤之土換取青元子的九瞳珠和三枚金罡滅魔神雷",
  "firstChapter": 1845,
  "canonFate": "隱匿伺機打算趁天劫謀算某事，目睹韓立一人斬殺同阶后心生畏懼，主動放棄圖謀離去。",
  "chronicle": [
   {
    "fromChapter": 1845,
    "toChapter": 1874,
    "locationId": "魔界",
    "realm": "大乘期",
    "status": "alive",
    "activity": "居於翠湖金光島，異獸化人，嗜愛金色飾物；用三瓶冥河靈乳及息壤之土換取青元子的九瞳珠和三枚金罡滅魔神雷"
   },
   {
    "fromChapter": 2296,
    "toChapter": 2325,
    "locationId": "靈界",
    "realm": "大乘期",
    "status": "alive",
    "activity": "隱匿伺機打算趁天劫謀算某事，目睹韓立一人斬殺同阶后心生畏懼，主動放棄圖謀離去。"
   }
  ]
 },
 {
  "id": "青易居士",
  "name": "青易居士",
  "aliases": [
   "儒衫老者",
   "青兄",
   "儒裝老者",
   "老者"
  ],
  "faction": "南鶴島",
  "importance": "major",
  "bio": "老謀深算，在魔道中偏向中立，與極陰暗中謀議但老滑頭作派，最終各自行動。",
  "firstChapter": 424,
  "canonFate": "從旁斡旋極陰與蛮胡子之間的分贓協議，於熔岩路遭遇銀光鼠，戰時護住韓立，青棘鳥被萬天明等滅殺",
  "chronicle": [
   {
    "fromChapter": 424,
    "toChapter": 483,
    "locationId": "亂星海",
    "realm": "元嬰期",
    "status": "alive",
    "activity": "從旁斡旋極陰與蛮胡子之間的分贓協議，於熔岩路遭遇銀光鼠，戰時護住韓立，青棘鳥被萬天明等滅殺"
   }
  ]
 },
 {
  "id": "姜前輩",
  "name": "姜前輩",
  "aliases": [
   "青元子（半個）",
   "姜某"
  ],
  "faction": "人族（佔長元族肉身）",
  "importance": "major",
  "bio": "隱居冥河之地洞窟，以鎮壓陰氣反噬換取棲身之地；以陰水葵精為代價借出通天靈寶五龍鍘给金甲傀儡，並傳其催動口訣；聲稱無法離開此地。",
  "firstChapter": 1478,
  "canonFate": "人族前輩，融合青元子精魂與長元族肉身，居住於冥河之地。傳授韩立新青元劍訣，以逆星盤仿製品送韩立離開冥河之地，收元瑤為徒，許諾冥河神乳一瓶作為日後交換。",
  "chronicle": [
   {
    "fromChapter": 1478,
    "toChapter": 1537,
    "locationId": "冥河之地",
    "realm": "大乘初期",
    "status": "alive",
    "activity": "人族前輩，融合青元子精魂與長元族肉身，居住於冥河之地。傳授韩立新青元劍訣，以逆星盤仿製品送韩立離開冥"
   }
  ]
 },
 {
  "id": "娃娃",
  "name": "娃娃",
  "aliases": [
   "通靈傀儡"
  ],
  "faction": "韓立（通靈傀儡）",
  "importance": "major",
  "bio": "韓立的通靈傀儡，本弧獲得璃水珠佩戴，奉命寸步不離監視芝仙。",
  "firstChapter": 1658,
  "canonFate": "白色通靈傀儡，可化白蟒助戰，戴黑紗及太一化清符執行監視任務",
  "chronicle": [
   {
    "fromChapter": 1658,
    "toChapter": 1717,
    "locationId": "天淵城",
    "realm": "煉虛初期",
    "status": "alive",
    "activity": "白色通靈傀儡，可化白蟒助戰，戴黑紗及太一化清符執行監視任務"
   }
  ]
 },
 {
  "id": "玲瓏",
  "name": "玲瓏",
  "aliases": [
   "玲瓏王妃",
   "瓏夢",
   "銀月",
   "雪玲"
  ],
  "faction": "靈界銀月狼族",
  "importance": "major",
  "bio": "以珑梦與銀月融合神念對抗元刹聖祖，奪回銀狼軀體後開啟逆靈通道返回靈界，臨行贈韓立玉簡、血刃與破界符",
  "firstChapter": 1066,
  "canonFate": "成功回歸靈界",
  "chronicle": [
   {
    "fromChapter": 1066,
    "toChapter": 1095,
    "locationId": "靈界",
    "realm": "化神期（神念融合珑梦與銀月）",
    "status": "alive",
    "activity": "以珑梦與銀月融合神念對抗元刹聖祖，奪回銀狼軀體後開啟逆靈通道返回靈界，臨行贈韓立玉簡、血刃與破界符"
   },
   {
    "fromChapter": 1875,
    "toChapter": 1904,
    "locationId": "魔界",
    "realm": "煉虛後期",
    "status": "alive",
    "activity": "韓立舊識，銀光仙子幼年玩伴，目前跟隨嘯傲前輩，安然無恙；詳情銀光仙子不便多說。"
   }
  ]
 },
 {
  "id": "胥老",
  "name": "胥老",
  "aliases": [
   "旭某",
   "胥姓老者"
  ],
  "faction": "天雲族",
  "importance": "major",
  "bio": "穹宇閣掌柜，曾是落日城有名的高階煉體士，因在落日之墓中中奇毒喪失戰力，開店為生。",
  "firstChapter": 1296,
  "canonFate": "廣寒界關閉後下落不明，推測已隕落",
  "chronicle": [
   {
    "fromChapter": 1296,
    "toChapter": 1325,
    "locationId": "風元大陸",
    "realm": "高階煉體士（中毒後無法發力）",
    "status": "alive",
    "activity": "穹宇閣掌柜，曾是落日城有名的高階煉體士，因在落日之墓中中奇毒喪失戰力，開店為生。"
   },
   {
    "fromChapter": 1718,
    "toChapter": 1747,
    "locationId": "廣寒界",
    "realm": "煉虛頂階",
    "status": "dead",
    "activity": "與月仙子合謀取得煉神術，中了戎族圈套後元氣大損，獲韓立相救並共同交換炼神術與金篆文，廣寒界關閉後胥老"
   }
  ]
 },
 {
  "id": "苦竹老人",
  "name": "苦竹老人",
  "aliases": [
   "苦竹"
  ],
  "faction": "苦竹島",
  "importance": "major",
  "bio": "海外孤島之主，擁有三百六十五口寒竹飛劍與萬木大陣；在韓立傀儡雷火弓威壓下主動認輸，交出烏鳳翎三根。",
  "firstChapter": 946,
  "canonFate": "韓立昔日曾與其為烏鳳之翎切磋的對手，此次在魔宮再度相遇，修為仍停留在元嬰中期頂峰。",
  "chronicle": [
   {
    "fromChapter": 946,
    "toChapter": 975,
    "locationId": "大晉",
    "realm": "元嬰中期頂峰",
    "status": "alive",
    "activity": "海外孤島之主，擁有三百六十五口寒竹飛劍與萬木大陣；在韓立傀儡雷火弓威壓下主動認輸，交出烏鳳翎三根。"
   },
   {
    "fromChapter": 1215,
    "toChapter": 1244,
    "locationId": "天南",
    "realm": "元嬰中期頂峰",
    "status": "alive",
    "activity": "韓立昔日曾與其為烏鳳之翎切磋的對手，此次在魔宮再度相遇，修為仍停留在元嬰中期頂峰。"
   }
  ]
 },
 {
  "id": "風老怪",
  "name": "風老怪",
  "aliases": [
   "風兄"
  ],
  "faction": "大晉修仙界",
  "importance": "major",
  "bio": "大晋化神修士，其後代阴罗宗長老被韓立意外斬殺，遂追逐韓立月餘；經向之禮調停後和解，同意合作尋找空間節點。",
  "firstChapter": 1215,
  "canonFate": "元神燈熄滅，結局不明",
  "chronicle": [
   {
    "fromChapter": 1215,
    "toChapter": 1265,
    "locationId": "天南",
    "realm": "化神期",
    "status": "alive",
    "activity": "與向之禮一同觀戰，後進入空間節點，元神燈熄滅。"
   }
  ]
 },
 {
  "id": "孫火",
  "name": "孫火",
  "aliases": [],
  "faction": "落雲宗火雲峰",
  "importance": "major",
  "bio": "試劍大會落雲宗弟子，奪得第三名，散修出身，有眾多家族欲招其入贅",
  "firstChapter": 626,
  "canonFate": "孫二狗第七代玄孫，持有半張舊符為信物，被韓立認出，獲得兩個選擇：取財離去或繼承誓言拜入門下。",
  "chronicle": [
   {
    "fromChapter": 626,
    "toChapter": 655,
    "locationId": "落雲宗",
    "realm": "煉氣期",
    "status": "alive",
    "activity": "試劍大會落雲宗弟子，奪得第三名，散修出身，有眾多家族欲招其入贅"
   },
   {
    "fromChapter": 656,
    "toChapter": 685,
    "locationId": "天南",
    "realm": "築基期",
    "status": "alive",
    "activity": "孫二狗第七代玄孫，持有半張舊符為信物，被韓立認出，獲得兩個選擇：取財離去或繼承誓言拜入門下。"
   }
  ]
 },
 {
  "id": "浮雲子",
  "name": "浮雲子",
  "aliases": [
   "浮雲子道士"
  ],
  "faction": "清虛門",
  "importance": "major",
  "bio": "清虛門帶隊道士，與李師祖打賭，以血線蛟內丹為賭注，賭博中疑慮掩月宗有殺手鐧。",
  "firstChapter": 172,
  "canonFate": "賭局中輸給穹老怪，被迫交出血線蛟內丹，又輸給李化元",
  "chronicle": [
   {
    "fromChapter": 172,
    "toChapter": 201,
    "locationId": "掩月宗",
    "realm": "結丹期（修為最淺）",
    "status": "alive",
    "activity": "清虛門帶隊道士，與李師祖打賭，以血線蛟內丹為賭注，賭博中疑慮掩月宗有殺手鐧。"
   },
   {
    "fromChapter": 202,
    "toChapter": 231,
    "locationId": "越京",
    "realm": "結丹期",
    "status": "alive",
    "activity": "賭局中輸給穹老怪，被迫交出血線蛟內丹，又輸給李化元"
   }
  ]
 },
 {
  "id": "海月天",
  "name": "海月天",
  "aliases": [
   "海大少"
  ],
  "faction": "韓立門下記名弟子",
  "importance": "major",
  "bio": "被確認擁有熔金之體與隱雷靈根，正式成為韓立記名弟子，被陇丽娘植入附心絲妖蟲但被韓立解救",
  "firstChapter": 1785,
  "canonFate": "韩立弟子，擁有隱雷根；因醉酒洩露此秘密招致圣岛覬覦；韩立護其周全但命其慶典後隱姓埋名一段時間。",
  "chronicle": [
   {
    "fromChapter": 1785,
    "toChapter": 1814,
    "locationId": "魔界",
    "realm": "中階煉體士（筑基相當）",
    "status": "alive",
    "activity": "被確認擁有熔金之體與隱雷靈根，正式成為韓立記名弟子，被陇丽娘植入附心絲妖蟲但被韓立解救"
   },
   {
    "fromChapter": 2176,
    "toChapter": 2205,
    "locationId": "靈界",
    "realm": "化神初期",
    "status": "alive",
    "activity": "韩立弟子，擁有隱雷根；因醉酒洩露此秘密招致圣岛覬覦；韩立護其周全但命其慶典後隱姓埋名一段時間。"
   }
  ]
 },
 {
  "id": "烏靈夫人",
  "name": "烏靈夫人",
  "aliases": [
   "烏夫人"
  ],
  "faction": "靈界強者陣營",
  "importance": "major",
  "bio": "詢問明尊韓立等人去向，參與對馬良的圍攻。",
  "firstChapter": 2416,
  "canonFate": "被馬良靈域滅殺，隕滅。",
  "chronicle": [
   {
    "fromChapter": 2416,
    "toChapter": 2420,
    "locationId": "靈界",
    "realm": "大乘期",
    "status": "alive",
    "activity": "詢問明尊韓立等人去向，參與對馬良的圍攻。"
   },
   {
    "fromChapter": 2421,
    "toChapter": 2450,
    "locationId": "無涯海",
    "realm": "大乘",
    "status": "dead",
    "activity": "參與鳴煞之地大戰，以豬首猿身法相及黃色狼牙棒抵擋萬靈血璽，最終逃脫後被靈域滅殺。"
   }
  ]
 },
 {
  "id": "秦言",
  "name": "秦言",
  "aliases": [],
  "faction": "秦家",
  "importance": "major",
  "bio": "越都越京秦宅家主，李化元的恩人後代，知曉修仙界存在；接納韓立化名為秦家偏支後人長住府中充任護衛。",
  "firstChapter": 262,
  "canonFate": "秦家之主，韓立所保護的凡人家族家主，本弧中在韓立暗示下稱病閉門不外出。",
  "chronicle": [
   {
    "fromChapter": 262,
    "toChapter": 321,
    "locationId": "越京",
    "realm": "凡人",
    "status": "alive",
    "activity": "秦家之主，韓立所保護的凡人家族家主，本弧中在韓立暗示下稱病閉門不外出。"
   }
  ]
 },
 {
  "id": "秦素兒",
  "name": "秦素兒",
  "aliases": [
   "白衣女子"
  ],
  "faction": "妖族",
  "importance": "major",
  "bio": "天狐族女修，與韓立進行妖獸材料交換，約定持續合作；手持心幻大法，面容能幻化成對方至親之人。",
  "firstChapter": 1815,
  "canonFate": "（僅提及）幫韓立在妖族尋找寒潭魔蛛妖丹及其他萬毒混元身所需材料",
  "chronicle": [
   {
    "fromChapter": 1815,
    "toChapter": 1874,
    "locationId": "魔界",
    "realm": "大乘期（疑似）",
    "status": "alive",
    "activity": "（僅提及）幫韓立在妖族尋找寒潭魔蛛妖丹及其他萬毒混元身所需材料"
   }
  ]
 },
 {
  "id": "軒九靈",
  "name": "軒九靈",
  "aliases": [],
  "faction": "不明",
  "importance": "major",
  "bio": "隱身參戰，始終不現身，被明尊傳送去對付馬良所派赤紅小人，自稱功法正好克制此類精怪。",
  "firstChapter": 2416,
  "canonFate": "被馬良靈域滅殺，隕滅。",
  "chronicle": [
   {
    "fromChapter": 2416,
    "toChapter": 2420,
    "locationId": "靈界",
    "realm": "大乘期（曾獨力斬殺真靈）",
    "status": "alive",
    "activity": "隱身參戰，始終不現身，被明尊傳送去對付馬良所派赤紅小人，自稱功法正好克制此類精怪。"
   },
   {
    "fromChapter": 2421,
    "toChapter": 2450,
    "locationId": "無涯海",
    "realm": "大乘（擁有九劫滅靈大法）",
    "status": "dead",
    "activity": "斬殺馬良召喚的火須之軀、以九劫滅靈大法自爆手臂重創馬良，被馬良靈域滅殺。"
   }
  ]
 },
 {
  "id": "高升",
  "name": "高升",
  "aliases": [],
  "faction": "石磯殿",
  "importance": "major",
  "bio": "韓立飛升抵達北寒仙域後醒來時，第一個出現相迎的英俊青年仙人。",
  "firstChapter": 2451,
  "canonFate": "石矶殿成員，奉命在偏遠飛仙台值守，邀請韓立加入石矶殿，分出垢土化身代守飛仙台後親自送韓立前往石矶殿。",
  "chronicle": [
   {
    "fromChapter": 2451,
    "toChapter": 2454,
    "locationId": "北寒仙域",
    "realm": "真仙上位境（修煉數百萬年）",
    "status": "alive",
    "activity": "石矶殿成員，奉命在偏遠飛仙台值守，邀請韓立加入石矶殿，分出垢土化身代守飛仙台後親自送韓立前往石矶殿。"
   }
  ]
 },
 {
  "id": "張袖兒",
  "name": "張袖兒",
  "aliases": [],
  "faction": "七玄門七絕堂",
  "importance": "major",
  "bio": "李長老的外甥女，厲飛雨的心上人，本弧亦被列入死契血斗名單",
  "firstChapter": 61,
  "canonFate": "七玄門女弟子，目睹死鬥全程，厲飛雨的心儀對象；韓立留言祝二人早日成親。",
  "chronicle": [
   {
    "fromChapter": 61,
    "toChapter": 99,
    "locationId": "七玄門",
    "realm": "七絕堂核心弟子",
    "status": "alive",
    "activity": "七玄門女弟子，目睹死鬥全程，厲飛雨的心儀對象；韓立留言祝二人早日成親。"
   }
  ]
 },
 {
  "id": "敖嘯老祖",
  "name": "敖嘯老祖",
  "aliases": [
   "敖嘯前輩",
   "敖嘯大人"
  ],
  "faction": "妖族",
  "importance": "major",
  "bio": "奉莫簡離之托降臨圣岛坐鎮，帶來替代黃粱石靈的天地靈物，私下為孫女銀月傳授《忘情訣》並安排影衛獠影護衛，又委派洛某與胥某秘密辦事",
  "firstChapter": 1965,
  "canonFate": "與莫簡離同時失蹤，下落不明",
  "chronicle": [
   {
    "fromChapter": 1965,
    "toChapter": 1994,
    "locationId": "魔界",
    "realm": "大乘期（妖族唯一大乘）",
    "status": "alive",
    "activity": "奉莫簡離之托降臨圣岛坐鎮，帶來替代黃粱石靈的天地靈物，私下為孫女銀月傳授《忘情訣》並安排影衛獠影護衛"
   },
   {
    "fromChapter": 2176,
    "toChapter": 2205,
    "locationId": "靈界",
    "realm": "大乘期",
    "status": "alive",
    "activity": "本弧開篇道別後失蹤，其傳授的神念秘術和大乘渡劫經驗對韩立極有助益。"
   }
  ]
 },
 {
  "id": "曹夢容",
  "name": "曹夢容",
  "aliases": [],
  "faction": "散修（師門不詳）",
  "importance": "major",
  "bio": "辽州曹縣尉之女，玄玉道記名弟子，救韓立上船，後在韓立指點下從炼氣三層晉升四層。",
  "firstChapter": 886,
  "canonFate": "韓立初入大晋時的舊識，途中重逢，心有所屬，隨柱南將軍之女入京",
  "chronicle": [
   {
    "fromChapter": 886,
    "toChapter": 945,
    "locationId": "大晉",
    "realm": "鍊氣期五層",
    "status": "alive",
    "activity": "韓立初入大晋時的舊識，途中重逢，心有所屬，隨柱南將軍之女入京"
   }
  ]
 },
 {
  "id": "許蛟",
  "name": "許蛟",
  "aliases": [],
  "faction": "許家",
  "importance": "major",
  "bio": "許家第一百七十三代族長，接待韓立，主導血魂喚醒儀式，獲得冰魄仙子血靈甦醒的線索。",
  "firstChapter": 1755,
  "canonFate": "許家家主，接待韓立並講述血魂昏迷始末",
  "chronicle": [
   {
    "fromChapter": 1755,
    "toChapter": 1784,
    "locationId": "魔界",
    "realm": "化神後期",
    "status": "alive",
    "activity": "許家第一百七十三代族長，接待韓立，主導血魂喚醒儀式，獲得冰魄仙子血靈甦醒的線索。"
   },
   {
    "fromChapter": 2206,
    "toChapter": 2235,
    "locationId": "靈界",
    "realm": "合體期",
    "status": "alive",
    "activity": "許家家主，接待韓立並講述血魂昏迷始末"
   }
  ]
 },
 {
  "id": "啼魂",
  "name": "啼魂",
  "aliases": [
   "刑獸",
   "啼魂獸"
  ],
  "faction": "韓立靈寵",
  "importance": "major",
  "bio": "黑色小猴，化身韓立保護木屋，以強大神念嚇退白珠兒試探，助韓立迷惑敵人。",
  "firstChapter": 1538,
  "canonFate": "本弧飛升真仙界——被仙界五色巨眼攝走",
  "chronicle": [
   {
    "fromChapter": 1538,
    "toChapter": 1567,
    "locationId": "天淵城",
    "realm": "不明（靈智已開）",
    "status": "alive",
    "activity": "黑色小猴，化身韓立保護木屋，以強大神念嚇退白珠兒試探，助韓立迷惑敵人。"
   },
   {
    "fromChapter": 1845,
    "toChapter": 1874,
    "locationId": "仙界",
    "realm": "超越合體（刑獸形態）",
    "status": "alive",
    "activity": "吞噬天外魔君神念後長睡於靈獸環，被雷獸所化怪禽驚醒，化為三目巨鬼刑獸，用血鏈和黑骨矛縛殺雙首怪禽，吞"
   }
  ]
 },
 {
  "id": "啼魂獸",
  "name": "啼魂獸",
  "aliases": [
   "刑獸"
  ],
  "faction": "韓立（靈獸）",
  "importance": "major",
  "bio": "在遭遇天外魔君分魂時突然覺醒「刑獸」真身，自行化為三目巨鬼，以血色鎖鏈與天罰神矛（背後骨刺）滅殺魔君分魂，此後昏迷數日。",
  "firstChapter": 1628,
  "canonFate": "覺醒刑獸神通後昏迷，法力體力枯竭。",
  "chronicle": [
   {
    "fromChapter": 1628,
    "toChapter": 1687,
    "locationId": "天淵城",
    "realm": "煉虛初期（修為大進中）",
    "status": "alive",
    "activity": "本弧吸收真穴靈元神（含天外魔君分念），體內生出真麟本源晶粒，法力和肉身大幅暴漲，韓立放任其繼續慢慢吸"
   }
  ]
 },
 {
  "id": "富姓老者",
  "name": "富姓老者",
  "aliases": [
   "富兄",
   "富道友"
  ],
  "faction": "散修",
  "importance": "major",
  "bio": "以雷靈晶向韓立換取千年赤精芝，並引薦韓立參加晋京地下交易會",
  "firstChapter": 916,
  "canonFate": "陨落，白骨被韓立發現，遺體化灰",
  "chronicle": [
   {
    "fromChapter": 916,
    "toChapter": 1035,
    "locationId": "大晉",
    "realm": "元嬰中期",
    "status": "alive",
    "activity": "與韓立同行後分開搜宝，在鎮魔塔附近遭四散真人血刀偷襲，血肉被刀吸盡，連元嬰也未能逃出。"
   }
  ]
 },
 {
  "id": "越宗",
  "name": "越宗",
  "aliases": [],
  "faction": "無宗門（魔獸獵人）",
  "importance": "major",
  "bio": "魔金山脉最知名的魔獸獵人，進入山脈三十七次，七次深入深處；受纤纤高酬雇用擔任向導；持有可感應魔兽的怪蟲靈器",
  "firstChapter": 1598,
  "canonFate": "本弧中被圭姓男子殺死。",
  "chronicle": [
   {
    "fromChapter": 1598,
    "toChapter": 1657,
    "locationId": "天淵城",
    "realm": "煉虛階",
    "status": "dead",
    "activity": "在山脈外等待期間遭圭姓男子突襲，以怪蟲、符箓、玉牌等手段抵抗，終被圭姓男子一口血紅珠子化成血水吞噬。"
   }
  ]
 },
 {
  "id": "雲淡",
  "name": "雲淡",
  "aliases": [
   "雲淡道友"
  ],
  "faction": "不明（與月梳為兄妹）",
  "importance": "major",
  "bio": "與妹妹月梳守護兩儀微塵陣另一處陣眼，氣息中透有紫紅色煞氣，令眾大乘修士忌憚。",
  "firstChapter": 2416,
  "canonFate": "被兩儀微塵陣獻祭機制的血色波動所殺，隕滅。",
  "chronicle": [
   {
    "fromChapter": 2416,
    "toChapter": 2420,
    "locationId": "靈界",
    "realm": "大乘期",
    "status": "alive",
    "activity": "與妹妹月梳守護兩儀微塵陣另一處陣眼，氣息中透有紫紅色煞氣，令眾大乘修士忌憚。"
   },
   {
    "fromChapter": 2421,
    "toChapter": 2450,
    "locationId": "無涯海",
    "realm": "大乘",
    "status": "dead",
    "activity": "被明尊以假阵眼設計，困在血色光幕內作為獻祭犧牲，最終被血色波動滅殺。"
   }
  ]
 },
 {
  "id": "雲露老魔",
  "name": "雲露老魔",
  "aliases": [
   "合歡老魔",
   "古老魔",
   "雲露真人"
  ],
  "faction": "合歡宗",
  "importance": "major",
  "bio": "天南聲名狼藉的采補修士，出席高層會議；攜董璇兒同行，被合歡老魔單獨召去交涉",
  "firstChapter": 746,
  "canonFate": "被韓立以雷珠救出血罩，繼而出手攔住枯瘦老者追殺黑袍女子的遁光，與阴罗宗宗主天上對峙",
  "chronicle": [
   {
    "fromChapter": 746,
    "toChapter": 795,
    "locationId": "天南",
    "realm": "元嬰中期",
    "status": "alive",
    "activity": "被韓立以雷珠救出血罩，繼而出手攔住枯瘦老者追殺黑袍女子的遁光，與阴罗宗宗主天上對峙"
   }
  ]
 },
 {
  "id": "黑雨上人",
  "name": "黑雨上人",
  "aliases": [
   "雨嘯天",
   "雨兄"
  ],
  "faction": "圣島",
  "importance": "major",
  "bio": "奉聖島之命前往黃泉地火捕獲黃粱石靈，持銀霄雷網成功制服石靈，返途中遭元刹化身截殺，肉身毀滅，元嬰被生擒搜魂。",
  "firstChapter": 1935,
  "canonFate": "肉身毀於石魔長老之手，元嬰被元刹生擒，后裂嬰分魂術自爆只存分魂；隕落（本命牌碎裂）",
  "chronicle": [
   {
    "fromChapter": 1935,
    "toChapter": 1994,
    "locationId": "魔界",
    "realm": "合體中期",
    "status": "dead",
    "activity": "協助天蟬取得黃粱石靈後本命牌碎裂，下落不明，推測已隕落"
   }
  ]
 },
 {
  "id": "黑鳳王",
  "name": "黑鳳王",
  "aliases": [
   "筱仙子",
   "筱館"
  ],
  "faction": "妖族七大妖王",
  "importance": "major",
  "bio": "帶黛兒出席拍卖，以身份與舊情化解韓立對其族人筱虹昔日圖謀天鳳真血之恨，競得萬森法盤",
  "firstChapter": 1785,
  "canonFate": "被蟹道人扣押，進階大乘後被韩立識出舊識身份，暫時留在洞府；詢問後得知其族中「黛兒」仍在秘禁地閉關安好。",
  "chronicle": [
   {
    "fromChapter": 1785,
    "toChapter": 1814,
    "locationId": "魔界",
    "realm": "合體後期",
    "status": "alive",
    "activity": "帶黛兒出席拍卖，以身份與舊情化解韓立對其族人筱虹昔日圖謀天鳳真血之恨，競得萬森法盤"
   },
   {
    "fromChapter": 2176,
    "toChapter": 2205,
    "locationId": "靈界",
    "realm": "合體後期大成",
    "status": "alive",
    "activity": "被蟹道人扣押，進階大乘後被韩立識出舊識身份，暫時留在洞府；詢問後得知其族中「黛兒」仍在秘禁地閉關安好"
   }
  ]
 },
 {
  "id": "黑鱗",
  "name": "黑鱗",
  "aliases": [
   "黑麟"
  ],
  "faction": "地蛟島（異族）",
  "importance": "major",
  "bio": "具黑甲天龍蛛血脈，與血燃兄弟同行；偵查到萬蜂分身並出手擒拿，在修羅大戰中聯手對付族母。",
  "firstChapter": 2266,
  "canonFate": "與血燃同行，戰力強橫，最終獲晶核和雷霄符。",
  "chronicle": [
   {
    "fromChapter": 2266,
    "toChapter": 2325,
    "locationId": "靈界",
    "realm": "大乘期",
    "status": "alive",
    "activity": "與血燃同行，戰力強橫，最終獲晶核和雷霄符。"
   }
  ]
 },
 {
  "id": "溫青",
  "name": "溫青",
  "aliases": [
   "天星雙聖之一（女）",
   "天星雙聖（女）"
  ],
  "faction": "星宮",
  "importance": "major",
  "bio": "星宮宮主，修煉元磁神光功虧一簣，寿元不足百年；在星空殿試探韓立後改變策略，贈客卿令牌並設陷阱圖謀虛天鼎，暗中計劃讓韓立與凌玉靈結伴。",
  "firstChapter": 1125,
  "canonFate": "以突破化神祕術為誘，欲讓韓立修煉元磁神光困守星城輔佐女兒凌玉靈，暗藏陷阱。",
  "chronicle": [
   {
    "fromChapter": 1125,
    "toChapter": 1184,
    "locationId": "天南",
    "realm": "元嬰後期",
    "status": "alive",
    "activity": "以突破化神祕術為誘，欲讓韓立修煉元磁神光困守星城輔佐女兒凌玉靈，暗藏陷阱。"
   }
  ]
 },
 {
  "id": "獅禽獸",
  "name": "獅禽獸",
  "aliases": [],
  "faction": "昆吾山妖物",
  "importance": "major",
  "bio": "上古凶禽，參與三妖聯盟，在北極元光中以金色音波掃除銀絲配合銀翅夜叉通行。",
  "firstChapter": 1006,
  "canonFate": "本命牌到手後脫離昆吾山；被元刹聖祖魔像以神念一指點殺自爆",
  "chronicle": [
   {
    "fromChapter": 1006,
    "toChapter": 1065,
    "locationId": "大晉",
    "realm": "十級妖兽",
    "status": "alive",
    "activity": "與銀翅夜叉合作行動，以紫霧困住靈犀孔雀；被元刹聖祖魔像以一指自爆點殺。"
   }
  ]
 },
 {
  "id": "萬年尸熊",
  "name": "萬年尸熊",
  "aliases": [
   "尸熊",
   "尸煞",
   "四散真人（偽裝）",
   "熊師"
  ],
  "faction": "萬妖谷",
  "importance": "major",
  "bio": "以「迷形珠」偽裝為散修四散真人混入，持血刃（仿魔龍刃）偷襲並擊殺方脸叶家修士，吞噬元嬰；後與珑梦達成協議，欲借逆靈通道返回靈界；協助切斷石柱中斷魔像魔氣。",
  "firstChapter": 1036,
  "canonFate": "以血刃協助玲瓏，借到空間節點情報後返回萬妖谷，後率妖族聯合冰海妖獸攻打小極宮",
  "chronicle": [
   {
    "fromChapter": 1036,
    "toChapter": 1065,
    "locationId": "靈界",
    "realm": "元嬰後期（萬年尸熊本體）",
    "status": "alive",
    "activity": "以「迷形珠」偽裝為散修四散真人混入，持血刃（仿魔龍刃）偷襲並擊殺方脸叶家修士，吞噬元嬰；後與珑梦達成"
   },
   {
    "fromChapter": 1066,
    "toChapter": 1095,
    "locationId": "大晉",
    "realm": "元嬰期",
    "status": "alive",
    "activity": "以血刃協助玲瓏，借到空間節點情報後返回萬妖谷，後率妖族聯合冰海妖獸攻打小極宮"
   }
  ]
 },
 {
  "id": "萬骨真人",
  "name": "萬骨真人",
  "aliases": [],
  "faction": "白骨門祖師（散修）",
  "importance": "major",
  "bio": "向韓立介紹黑域交換大會，邀其出席散修防魔聚會，背後與天狐花仙子謀劃聯合其他散修應對魔劫",
  "firstChapter": 1785,
  "canonFate": "帶領韓立進入黑域大會，並在大會上縱情享受黑紗侍女招待。",
  "chronicle": [
   {
    "fromChapter": 1785,
    "toChapter": 1844,
    "locationId": "魔界",
    "realm": "合體期",
    "status": "alive",
    "activity": "帶領韓立進入黑域大會，並在大會上縱情享受黑紗侍女招待。"
   }
  ]
 },
 {
  "id": "葉仙子",
  "name": "葉仙子",
  "aliases": [
   "羽衣少女",
   "葉道友"
  ],
  "faction": "人族葉家",
  "importance": "major",
  "bio": "行動時多以女性外貌示人，在坊市購入翠綠礦石，突圍時化為五色彩鳳虛影獨自遁走。",
  "firstChapter": 2025,
  "canonFate": "在偽仙儡自爆中化為飛灰，陨落身亡",
  "chronicle": [
   {
    "fromChapter": 2025,
    "toChapter": 2114,
    "locationId": "魔界",
    "realm": "合體後期",
    "status": "alive",
    "activity": "與韓立共同劫取青鸞真血，在困靈谷以涅磐珠攔截元魇，後被偽仙儡自爆波及陨落。"
   }
  ]
 },
 {
  "id": "葉家大長老（白袍儒生）",
  "name": "葉家大長老（白袍儒生）",
  "aliases": [
   "三小子",
   "大長老",
   "三弟"
  ],
  "faction": "葉家",
  "importance": "major",
  "bio": "大晉第一世家葉家大長老，謀劃百年進入昆吾山取通天靈寶，帶領葉家群修破禁進山，以黑血刀傷退狮禽獸，指揮破萬修之門，分路派遣人手探查靈寶閣、鎮魔塔、昆吾殿。",
  "firstChapter": 976,
  "canonFate": "以隱身術潛伏圖謀八靈尺，持黑血刃（傳家之寶）對付叛族的大頭怪人；見識元刹神念後被動應戰。",
  "chronicle": [
   {
    "fromChapter": 976,
    "toChapter": 1005,
    "locationId": "昆吾山",
    "realm": "元嬰後期",
    "status": "alive",
    "activity": "大晉第一世家葉家大長老，謀劃百年進入昆吾山取通天靈寶，帶領葉家群修破禁進山，以黑血刀傷退狮禽獸，指揮"
   },
   {
    "fromChapter": 1036,
    "toChapter": 1065,
    "locationId": "大晉",
    "realm": "元嬰後期",
    "status": "alive",
    "activity": "以隱身術潛伏圖謀八靈尺，持黑血刃（傳家之寶）對付叛族的大頭怪人；見識元刹神念後被動應戰。"
   }
  ]
 },
 {
  "id": "葉楚",
  "name": "葉楚",
  "aliases": [
   "木鳳",
   "楚姐姐"
  ],
  "faction": "人族葉家（真靈世家），潛伏木族千年",
  "importance": "major",
  "bio": "葉家嫡系，身具木鳳血脈；千年前以煉虛初期潛入木族，修煉至煉虛大成；暗中協助韓立等人脫困、傳出情報；在歸途戰鬥中出手制衡陇家雙修。",
  "firstChapter": 1358,
  "canonFate": "葉穎護衛，以翠芒絲網收服筱虹（黑鳳），判斷韓立難以擊殺而阻止葉穎動手。",
  "chronicle": [
   {
    "fromChapter": 1358,
    "toChapter": 1417,
    "locationId": "天淵城",
    "realm": "煉虛後期大成",
    "status": "alive",
    "activity": "葉穎護衛，以翠芒絲網收服筱虹（黑鳳），判斷韓立難以擊殺而阻止葉穎動手。"
   }
  ]
 },
 {
  "id": "董璇兒",
  "name": "董璇兒",
  "aliases": [],
  "faction": "合歡宗",
  "importance": "major",
  "bio": "結丹後曾派人尋找韓立下落，原因不明，被搜魂的黑衫老者記憶中提及。",
  "firstChapter": 656,
  "canonFate": "韓立昔日宿敵舊識，跟隨雲露老魔出現，見到韓立神情複雜，二人未交談",
  "chronicle": [
   {
    "fromChapter": 656,
    "toChapter": 775,
    "locationId": "天南",
    "realm": "結丹中期",
    "status": "alive",
    "activity": "韓立昔日宿敵舊識，跟隨雲露老魔出現，見到韓立神情複雜，二人未交談"
   }
  ]
 },
 {
  "id": "雷萬鶴",
  "name": "雷萬鶴",
  "aliases": [
   "雷師伯"
  ],
  "faction": "黃楓谷（越國六派）",
  "importance": "major",
  "bio": "身形極胖的結丹期修士，以雷屬性銀色劍光滅殺千竹教黃龍等人，以兩張古方換走韓立兩株六七百年靈草。",
  "firstChapter": 232,
  "canonFate": "韓立昔日師伯，被元嬰法士覃上師追殺，由韓立救下；告知韓立恩師李化元已陨落，南宮婉雙修大典消息。",
  "chronicle": [
   {
    "fromChapter": 232,
    "toChapter": 261,
    "locationId": "越京",
    "realm": "結丹期",
    "status": "alive",
    "activity": "身形極胖的結丹期修士，以雷屬性銀色劍光滅殺千竹教黃龍等人，以兩張古方換走韓立兩株六七百年靈草。"
   },
   {
    "fromChapter": 686,
    "toChapter": 715,
    "locationId": "天南",
    "realm": "結丹後期",
    "status": "alive",
    "activity": "韓立昔日師伯，被元嬰法士覃上師追殺，由韓立救下；告知韓立恩師李化元已陨落，南宮婉雙修大典消息。"
   }
  ]
 },
 {
  "id": "鳳冰",
  "name": "鳳冰",
  "aliases": [
   "鳳夫人"
  ],
  "faction": "天南修士",
  "importance": "major",
  "bio": "龍晗之妻，閉關後受命出戰；以火靈瓶單獨纏住慕蘭第四神師田鍾",
  "firstChapter": 746,
  "canonFate": "與田鍾纏鬥，後和白姓女修聯手壓制田鍾",
  "chronicle": [
   {
    "fromChapter": 746,
    "toChapter": 795,
    "locationId": "天南",
    "realm": "元嬰中期頂階",
    "status": "alive",
    "activity": "與田鍾纏鬥，後和白姓女修聯手壓制田鍾"
   }
  ]
 },
 {
  "id": "劉靖",
  "name": "劉靖",
  "aliases": [
   "三師兄",
   "劉師兄"
  ],
  "faction": "黃楓谷",
  "importance": "major",
  "bio": "韓立三師兄，嫉惡如仇的「血手煞星」，力主闖皇城剿滅黑煞教，以千刃術配合眾人攻破冰妖光繭。",
  "firstChapter": 292,
  "canonFate": "本弧死亡，被越皇一擊穿心身亡",
  "chronicle": [
   {
    "fromChapter": 292,
    "toChapter": 351,
    "locationId": "越京",
    "realm": "築基中期",
    "status": "dead",
    "activity": "動用火鳥真寶消滅三名半妖化血侍，後被越皇瞬間穿胸殺害。"
   }
  ]
 },
 {
  "id": "墨彩環",
  "name": "墨彩環",
  "aliases": [
   "三妹",
   "三小姐"
  ],
  "faction": "墨府",
  "importance": "major",
  "bio": "嚴氏之女，墨大夫三女，機靈頑皮，向韓立強索見面禮，最終只得到縈香丸",
  "firstChapter": 100,
  "canonFate": "韓立舊識墨大夫最小女兒，已嫁人成少婦，與母嚴氏流落燕翎堡以小店為生，被修士騷擾，韓立重逢後嚇退騷擾者並贈定顏丹。",
  "chronicle": [
   {
    "fromChapter": 100,
    "toChapter": 129,
    "locationId": "黃楓谷",
    "realm": "凡人",
    "status": "alive",
    "activity": "嚴氏之女，墨大夫三女，機靈頑皮，向韓立強索見面禮，最終只得到縈香丸"
   },
   {
    "fromChapter": 232,
    "toChapter": 261,
    "locationId": "越京",
    "realm": "凡人（無靈根）",
    "status": "alive",
    "activity": "韓立舊識墨大夫最小女兒，已嫁人成少婦，與母嚴氏流落燕翎堡以小店為生，被修士騷擾，韓立重逢後嚇退騷擾者"
   }
  ]
 },
 {
  "id": "墨鳳舞",
  "name": "墨鳳舞",
  "aliases": [
   "二小姐",
   "萍兒（化名）",
   "表小姐"
  ],
  "faction": "墨府",
  "importance": "major",
  "bio": "墨大夫義女，自幼鑽研醫道，請韓立抄錄墨大夫醫道遺稿，韓立對其頗有好感",
  "firstChapter": 100,
  "canonFate": "墨府二小姐，失憶後以義女身份嫁人，夫婿三日即亡，守寡後被接至秦宅；化名「萍兒」，深夜私訪韓立，請求其誅殺五色門門主報仇；韓立允諾視機而動，亦坦白告知墨彩環母女尚在人世。",
  "chronicle": [
   {
    "fromChapter": 100,
    "toChapter": 129,
    "locationId": "黃楓谷",
    "realm": "凡人",
    "status": "alive",
    "activity": "墨大夫義女，自幼鑽研醫道，請韓立抄錄墨大夫醫道遺稿，韓立對其頗有好感"
   },
   {
    "fromChapter": 262,
    "toChapter": 291,
    "locationId": "越京",
    "realm": "凡人",
    "status": "alive",
    "activity": "墨府二小姐，失憶後以義女身份嫁人，夫婿三日即亡，守寡後被接至秦宅；化名「萍兒」，深夜私訪韓立，請求其"
   }
  ]
 },
 {
  "id": "魯衛英",
  "name": "魯衛英",
  "aliases": [
   "魯兄",
   "魯長老",
   "魯道友"
  ],
  "faction": "天極門",
  "importance": "major",
  "bio": "天極門長老，與南陇侯聯手入內谷，殺滅暗中跟蹤的黃天冥，以飓風旗等法寶輔攻斬殺三首乌蛇，共同開啟血咒之門。",
  "firstChapter": 796,
  "canonFate": "元嬰被古魔吞噬，肉軀遭掏心而亡",
  "chronicle": [
   {
    "fromChapter": 796,
    "toChapter": 855,
    "locationId": "大晉",
    "realm": "元嬰中期",
    "status": "alive",
    "activity": "精通佛宗法陣典籍，識破小須彌金剛陣，持白色法旗合力攻陣；古魔現身後嘗試逃遁，元嬰被魔魂鬼臉長舌洞穿後"
   }
  ]
 },
 {
  "id": "蕭翠兒",
  "name": "蕭翠兒",
  "aliases": [],
  "faction": "黃楓谷",
  "importance": "major",
  "bio": "蕭老爺子孫女，拜入馬師兄門下，乖巧懂事，馬師兄甚為溺愛。",
  "firstChapter": 322,
  "canonFate": "韓立昔日引薦入谷弟子，馬師兄親傳，巡邊途中偶遇韓立，獲贈法寶與丹藥",
  "chronicle": [
   {
    "fromChapter": 322,
    "toChapter": 351,
    "locationId": "越京",
    "realm": "炼氣期",
    "status": "alive",
    "activity": "蕭老爺子孫女，拜入馬師兄門下，乖巧懂事，馬師兄甚為溺愛。"
   },
   {
    "fromChapter": 746,
    "toChapter": 775,
    "locationId": "天南",
    "realm": "結丹初期",
    "status": "alive",
    "activity": "韓立昔日引薦入谷弟子，馬師兄親傳，巡邊途中偶遇韓立，獲贈法寶與丹藥"
   }
  ]
 },
 {
  "id": "霓裳仙子",
  "name": "霓裳仙子",
  "aliases": [
   "霓裳"
  ],
  "faction": "掩月宗",
  "importance": "major",
  "bio": "掩月宗本次禁地帶隊少婦，笑容不露底牌，讓李師祖與浮雲子深感不安。",
  "firstChapter": 172,
  "canonFate": "掩月宗結丹期修士，南宮婉安全出禁地後激動上前扶持",
  "chronicle": [
   {
    "fromChapter": 172,
    "toChapter": 231,
    "locationId": "掩月宗",
    "realm": "結丹期",
    "status": "alive",
    "activity": "掩月宗結丹期修士，南宮婉安全出禁地後激動上前扶持"
   }
  ]
 },
 {
  "id": "龍晗",
  "name": "龍晗",
  "aliases": [],
  "faction": "天道盟",
  "importance": "major",
  "bio": "天道盟主事人，主持大戰指揮，觀察到韓立破罩後立刻派凤冰馳援",
  "firstChapter": 746,
  "canonFate": "邊界大戰天南修士指揮者，接獲突兀人消息後主動議和，主導談判讓慕蘭族定居兩國",
  "chronicle": [
   {
    "fromChapter": 746,
    "toChapter": 795,
    "locationId": "天南",
    "realm": "元嬰中期",
    "status": "alive",
    "activity": "邊界大戰天南修士指揮者，接獲突兀人消息後主動議和，主導談判讓慕蘭族定居兩國"
   }
  ]
 },
 {
  "id": "藍穎",
  "name": "藍穎",
  "aliases": [
   "廣源齋主",
   "麻衣少女"
  ],
  "faction": "廣源齋",
  "importance": "major",
  "bio": "廣源齋魔界代理主人，精通卜算與情報，辨識出韓立體內地煞陰氣，提供血牙米情報與跨界往返宝物，與紫靈情同姐妹。",
  "firstChapter": 2115,
  "canonFate": "廣源齋主，協助韓立聯絡紫灵，並依據泣靈秘藏圖成功找到秘藏所在地，接受韓立一個月的修煉指點。",
  "chronicle": [
   {
    "fromChapter": 2115,
    "toChapter": 2144,
    "locationId": "魔界",
    "realm": "化神初期",
    "status": "alive",
    "activity": "廣源齋魔界代理主人，精通卜算與情報，辨識出韓立體內地煞陰氣，提供血牙米情報與跨界往返宝物，與紫靈情同"
   },
   {
    "fromChapter": 2236,
    "toChapter": 2265,
    "locationId": "靈界",
    "realm": "不明（廣源齋主）",
    "status": "alive",
    "activity": "廣源齋主，協助韓立聯絡紫灵，並依據泣靈秘藏圖成功找到秘藏所在地，接受韓立一個月的修煉指點。"
   }
  ]
 },
 {
  "id": "覆天居士",
  "name": "覆天居士",
  "aliases": [
   "白家五妹",
   "紫髮女子"
  ],
  "faction": "幻夜城白家",
  "importance": "major",
  "bio": "白家老祖，修煉「鍛天魔功」至極致，距聖祖境只差一步，白芸馨允諾引薦韓立拜見。",
  "firstChapter": 2025,
  "canonFate": "白家老祖，女性魔尊，擅空間之力；邀韓立協助驅逐礦脈魔獸，入宝库后見韓立取走異魔金頗感詫異。",
  "chronicle": [
   {
    "fromChapter": 2025,
    "toChapter": 2084,
    "locationId": "魔界",
    "realm": "合體期（魔尊）",
    "status": "alive",
    "activity": "白家老祖，女性魔尊，擅空間之力；邀韓立協助驅逐礦脈魔獸，入宝库后見韓立取走異魔金頗感詫異。"
   }
  ]
 },
 {
  "id": "嚴氏",
  "name": "嚴氏",
  "aliases": [
   "四夫人",
   "四師母"
  ],
  "faction": "無（原驚蛟會墨府）",
  "importance": "major",
  "bio": "墨大夫四夫人，惊蛟會代理當家人，城府深沉，以迷香設局未果，最終與韓立達成以刺殺歐陽飛天換取暖陽寶玉的協議",
  "firstChapter": 100,
  "canonFate": "墨府首腦之一，惊蛟會覆滅後被燕柱救入燕翎堡，改嫁燕柱，燕柱身亡後母女相依，舊傷發作被韓立針灸丹藥治癒。",
  "chronicle": [
   {
    "fromChapter": 100,
    "toChapter": 129,
    "locationId": "黃楓谷",
    "realm": "凡人",
    "status": "alive",
    "activity": "墨大夫四夫人，惊蛟會代理當家人，城府深沉，以迷香設局未果，最終與韓立達成以刺殺歐陽飛天換取暖陽寶玉的"
   },
   {
    "fromChapter": 232,
    "toChapter": 261,
    "locationId": "越京",
    "realm": "凡人",
    "status": "alive",
    "activity": "墨府首腦之一，惊蛟會覆滅後被燕柱救入燕翎堡，改嫁燕柱，燕柱身亡後母女相依，舊傷發作被韓立針灸丹藥治癒"
   }
  ]
 },
 {
  "id": "鐘靈道",
  "name": "鐘靈道",
  "aliases": [
   "鐘大掌門",
   "鐘掌門"
  ],
  "faction": "黃楓谷",
  "importance": "major",
  "bio": "黃楓谷現任掌門，一百多歲，三縷長髯，性情沉穩善於組織，接納韓立的升仙令並安排其入門",
  "firstChapter": 130,
  "canonFate": "為韓立辦理築基登記，授予中階靈石、迷蹤旗及洞府布陣玉簡",
  "chronicle": [
   {
    "fromChapter": 130,
    "toChapter": 159,
    "locationId": "黃楓谷",
    "realm": "築基期後期",
    "status": "alive",
    "activity": "黃楓谷現任掌門，一百多歲，三縷長髯，性情沉穩善於組織，接納韓立的升仙令並安排其入門"
   },
   {
    "fromChapter": 202,
    "toChapter": 231,
    "locationId": "越京",
    "realm": "筑基期以上",
    "status": "alive",
    "activity": "為韓立辦理築基登記，授予中階靈石、迷蹤旗及洞府布陣玉簡"
   }
  ]
 },
 {
  "id": "魔光",
  "name": "魔光",
  "aliases": [
   "天外魔頭",
   "魔光道友"
  ],
  "faction": "天外魔族",
  "importance": "major",
  "bio": "原伴隨馬良下界，後與韓立簽下天魔契約，以驅使換取精血供養；斬殺明尊分魂、追殺明尊。",
  "firstChapter": 2421,
  "canonFate": "隨韓立飛升仙界",
  "chronicle": [
   {
    "fromChapter": 2421,
    "toChapter": 2450,
    "locationId": "無涯海",
    "realm": "天外魔族大乘級",
    "status": "alive",
    "activity": "原伴隨馬良下界，後與韓立簽下天魔契約，以驅使換取精血供養；斬殺明尊分魂、追殺明尊。"
   },
   {
    "fromChapter": 2451,
    "toChapter": 2451,
    "locationId": "仙界",
    "realm": "大乘",
    "status": "alive",
    "activity": "天劫期間陪護在側，天劫渡過後化為黑氣藏入韓立體內，隨韓立一同飛升仙界。"
   }
  ]
 },
 {
  "id": "千秋圣女",
  "name": "千秋圣女",
  "aliases": [
   "黃袍女子",
   "千秋道友",
   "千秋仙子"
  ],
  "faction": "靈族",
  "importance": "major",
  "bio": "靈族使者，以烟云幡掩護眾人潛入節點通道，提供八足魔蜥情報，帶領金鼓長老等圣灵同行。",
  "firstChapter": 1995,
  "canonFate": "靈族使者，以烟云幡掩護眾人潛入節點通道，提供八足魔蜥情報，帶領金鼓長老等圣灵同行。",
  "chronicle": [
   {
    "fromChapter": 1995,
    "toChapter": 2024,
    "locationId": "魔界",
    "realm": "合體後期",
    "status": "alive",
    "activity": "靈族使者，以烟云幡掩護眾人潛入節點通道，提供八足魔蜥情報，帶領金鼓長老等圣灵同行。"
   }
  ]
 },
 {
  "id": "元姓大頭異族",
  "name": "元姓大頭異族",
  "aliases": [],
  "faction": "天雲十三族之萬古族",
  "importance": "major",
  "bio": "坐鎮綠光城逾千年，角蚩族大軍到來時啟動城下自爆法陣，帶韓立等人密道逃出，分別委托白玉匣後獨自遁走。",
  "firstChapter": 1538,
  "canonFate": "坐鎮綠光城逾千年，角蚩族大軍到來時啟動城下自爆法陣，帶韓立等人密道逃出，分別委托白玉匣後獨自遁走。",
  "chronicle": [
   {
    "fromChapter": 1538,
    "toChapter": 1567,
    "locationId": "天淵城",
    "realm": "煉虛期",
    "status": "alive",
    "activity": "坐鎮綠光城逾千年，角蚩族大軍到來時啟動城下自爆法陣，帶韓立等人密道逃出，分別委托白玉匣後獨自遁走。"
   }
  ]
 },
 {
  "id": "元智",
  "name": "元智",
  "aliases": [
   "元智大師"
  ],
  "faction": "雷音宗（天機閣客卿長老）",
  "importance": "major",
  "bio": "四大佛宗雷音宗三大元嬰後期長老之一，同時擔任佛門金剛護法；施展明王訣第四層與金剛幻影與韓立切磋，最終認輸，其銀瓶法寶被三焰扇所化火焰引爆毀損。",
  "firstChapter": 1215,
  "canonFate": "切磋落敗，元氣受損",
  "chronicle": [
   {
    "fromChapter": 1215,
    "toChapter": 1244,
    "locationId": "天南",
    "realm": "元嬰後期",
    "status": "alive",
    "activity": "四大佛宗雷音宗三大元嬰後期長老之一，同時擔任佛門金剛護法；施展明王訣第四層與金剛幻影與韓立切磋，最終"
   }
  ]
 },
 {
  "id": "六翼霜蚣",
  "name": "六翼霜蚣",
  "aliases": [
   "白袍男子"
  ],
  "faction": "（本為雷霆大陸強者）",
  "importance": "major",
  "bio": "在血天追蹤素陰一族至血天大陸，遭遇黑袍真仙後以第四對晶翼遁術逃脫，持續遭追殺。",
  "firstChapter": 2356,
  "canonFate": "在血天追蹤素陰一族至血天大陸，遭遇黑袍真仙後以第四對晶翼遁術逃脫，持續遭追殺。",
  "chronicle": [
   {
    "fromChapter": 2356,
    "toChapter": 2385,
    "locationId": "靈界",
    "realm": "大乘期附近（真靈）",
    "status": "alive",
    "activity": "在血天追蹤素陰一族至血天大陸，遭遇黑袍真仙後以第四對晶翼遁術逃脫，持續遭追殺。"
   }
  ]
 },
 {
  "id": "化仙宗秀麗女子",
  "name": "化仙宗秀麗女子",
  "aliases": [],
  "faction": "化仙宗",
  "importance": "major",
  "bio": "木夫人之師妹，持四象尺（八靈尺仿製品），在第九層被元刹聖祖迷控神志，協助魔物。",
  "firstChapter": 1036,
  "canonFate": "木夫人之師妹，持四象尺（八靈尺仿製品），在第九層被元刹聖祖迷控神志，協助魔物。",
  "chronicle": [
   {
    "fromChapter": 1036,
    "toChapter": 1065,
    "locationId": "大晉",
    "realm": "元嬰中期",
    "status": "alive",
    "activity": "木夫人之師妹，持四象尺（八靈尺仿製品），在第九層被元刹聖祖迷控神志，協助魔物。"
   }
  ]
 },
 {
  "id": "天蟬大師",
  "name": "天蟬大師",
  "aliases": [
   "天禪",
   "天蟬",
   "貧僧"
  ],
  "faction": "聖皇麾下、佛門",
  "importance": "major",
  "bio": "奉聖島之命與黑雨上人合力捕獲黃粱石靈，事成後返回協助聖皇大人守城。",
  "firstChapter": 1935,
  "canonFate": "奉聖島之命與黑雨上人合力捕獲黃粱石靈，事成後返回協助聖皇大人守城。",
  "chronicle": [
   {
    "fromChapter": 1935,
    "toChapter": 1964,
    "locationId": "魔界",
    "realm": "合體中期",
    "status": "alive",
    "activity": "奉聖島之命與黑雨上人合力捕獲黃粱石靈，事成後返回協助聖皇大人守城。"
   }
  ]
 },
 {
  "id": "天瀾童子",
  "name": "天瀾童子",
  "aliases": [
   "童子",
   "天瀾聖獸"
  ],
  "faction": "無（寄居韓立虛天鼎）",
  "importance": "major",
  "bio": "向韓立解說靈界五行合一、丹靈根、器靈根、小天劫等要義；認出三神白骨幡為靈界七邪器之一；告知赤魂幡煉製方法，以及雷震子（滅仙珠）來歷。",
  "firstChapter": 1215,
  "canonFate": "向韓立解說靈界五行合一、丹靈根、器靈根、小天劫等要義；認出三神白骨幡為靈界七邪器之一；告知赤魂幡煉製方法，以及雷震子（滅仙珠）來歷。",
  "chronicle": [
   {
    "fromChapter": 1215,
    "toChapter": 1244,
    "locationId": "靈界",
    "realm": "靈界天地靈獸（化為童子形象）",
    "status": "alive",
    "activity": "向韓立解說靈界五行合一、丹靈根、器靈根、小天劫等要義；認出三神白骨幡為靈界七邪器之一；告知赤魂幡煉製"
   }
  ]
 },
 {
  "id": "天瀾獸（童子）",
  "name": "天瀾獸（童子）",
  "aliases": [
   "童子"
  ],
  "faction": "天瀾草原",
  "importance": "major",
  "bio": "本弧中將金闕玉書參悟注解交還韓立，並在天沙大陸察覺到同類氣息後脫離虛天鼎拘禁，獨自離去。",
  "firstChapter": 1245,
  "canonFate": "脫離虛天鼎，自行離去",
  "chronicle": [
   {
    "fromChapter": 1245,
    "toChapter": 1265,
    "locationId": "天南",
    "realm": "不明（靈界本體之分身）",
    "status": "alive",
    "activity": "本弧中將金闕玉書參悟注解交還韓立，並在天沙大陸察覺到同類氣息後脫離虛天鼎拘禁，獨自離去。"
   }
  ]
 },
 {
  "id": "天櫻",
  "name": "天櫻",
  "aliases": [],
  "faction": "木靈族（五行靈族）",
  "importance": "major",
  "bio": "本體為木櫻成靈，暗中觀察韓立並判斷其神識強大疑似化神修士，主導追殺靈族叛逆的木靈族行動。",
  "firstChapter": 1296,
  "canonFate": "本體為木櫻成靈，暗中觀察韓立並判斷其神識強大疑似化神修士，主導追殺靈族叛逆的木靈族行動。",
  "chronicle": [
   {
    "fromChapter": 1296,
    "toChapter": 1325,
    "locationId": "風元大陸",
    "realm": "五行靈族中階靈將",
    "status": "alive",
    "activity": "本體為木櫻成靈，暗中觀察韓立並判斷其神識強大疑似化神修士，主導追殺靈族叛逆的木靈族行動。"
   }
  ]
 },
 {
  "id": "尤姓修士",
  "name": "尤姓修士",
  "aliases": [
   "冷面修士",
   "尤道友"
  ],
  "faction": "散修",
  "importance": "major",
  "bio": "被分配負責纏住韓立，被乾藍冰焰一擊冰封肉身；企圖元嬰出竅衝破冰封時，被乾藍冰焰反噬炙化，形神俱滅。",
  "firstChapter": 686,
  "canonFate": "形神俱滅",
  "chronicle": [
   {
    "fromChapter": 686,
    "toChapter": 715,
    "locationId": "天南",
    "realm": "元嬰初期",
    "status": "alive",
    "activity": "被分配負責纏住韓立，被乾藍冰焰一擊冰封肉身；企圖元嬰出竅衝破冰封時，被乾藍冰焰反噬炙化，形神俱滅。"
   }
  ]
 },
 {
  "id": "方夫人",
  "name": "方夫人",
  "aliases": [],
  "faction": "天東商號",
  "importance": "major",
  "bio": "天東商號一方主事，委託韩立協助金玉宗取七葉陰血芝",
  "firstChapter": 1266,
  "canonFate": "天東商號一方主事，委託韩立協助金玉宗取七葉陰血芝",
  "chronicle": [
   {
    "fromChapter": 1266,
    "toChapter": 1295,
    "locationId": "風元大陸",
    "realm": "凡人（高階炼體士護衛隨侍）",
    "status": "alive",
    "activity": "天東商號一方主事，委託韩立協助金玉宗取七葉陰血芝"
   }
  ]
 },
 {
  "id": "方臉修士",
  "name": "方臉修士",
  "aliases": [
   "二弟",
   "二哥"
  ],
  "faction": "葉家",
  "importance": "major",
  "bio": "葉家二長老，自告奋勇帶弥天镯獨往昆吾殿探查。",
  "firstChapter": 976,
  "canonFate": "葉家二長老，自告奋勇帶弥天镯獨往昆吾殿探查。",
  "chronicle": [
   {
    "fromChapter": 976,
    "toChapter": 1005,
    "locationId": "大晉",
    "realm": "元嬰中期",
    "status": "alive",
    "activity": "葉家二長老，自告奋勇帶弥天镯獨往昆吾殿探查。"
   }
  ]
 },
 {
  "id": "木族臨時大長老",
  "name": "木族臨時大長老",
  "aliases": [],
  "faction": "木族",
  "importance": "major",
  "bio": "在木靈八子全數斃命後強撐鎮定繼續推算，得知聖樹被毀和大長老隕落後，以保全族人為重，封鎖消息並謀劃撤退。",
  "firstChapter": 2175,
  "canonFate": "在木靈八子全數斃命後強撐鎮定繼續推算，得知聖樹被毀和大長老隕落後，以保全族人為重，封鎖消息並謀劃撤退。",
  "chronicle": [
   {
    "fromChapter": 2175,
    "toChapter": 2175,
    "locationId": "魔界",
    "realm": "合體期（推測）",
    "status": "alive",
    "activity": "在木靈八子全數斃命後強撐鎮定繼續推算，得知聖樹被毀和大長老隕落後，以保全族人為重，封鎖消息並謀劃撤退"
   }
  ]
 },
 {
  "id": "水魅",
  "name": "水魅",
  "aliases": [],
  "faction": "水靈族（五行靈族）",
  "importance": "major",
  "bio": "在湖邊現身與鐵刃、赤滅會合，分析灵族局勢，等待器靈族旭天趕到再行動。",
  "firstChapter": 1296,
  "canonFate": "在湖邊現身與鐵刃、赤滅會合，分析灵族局勢，等待器靈族旭天趕到再行動。",
  "chronicle": [
   {
    "fromChapter": 1296,
    "toChapter": 1325,
    "locationId": "風元大陸",
    "realm": "水靈族中階靈將",
    "status": "alive",
    "activity": "在湖邊現身與鐵刃、赤滅會合，分析灵族局勢，等待器靈族旭天趕到再行動。"
   }
  ]
 },
 {
  "id": "火月",
  "name": "火月",
  "aliases": [],
  "faction": "火陽族",
  "importance": "major",
  "bio": "火陽族大祭司，服下炼仙果提升修為，獻出烈陽神丹換取韓立相助，成功令族人渡過乌罗族滅族危機，但寿命大損。",
  "firstChapter": 1538,
  "canonFate": "壽元大損，修為永止於元嬰期",
  "chronicle": [
   {
    "fromChapter": 1538,
    "toChapter": 1567,
    "locationId": "天淵城",
    "realm": "元嬰期（服炼仙果後）",
    "status": "alive",
    "activity": "火陽族大祭司，服下炼仙果提升修為，獻出烈陽神丹換取韓立相助，成功令族人渡過乌罗族滅族危機，但寿命大損"
   }
  ]
 },
 {
  "id": "火須子",
  "name": "火須子",
  "aliases": [
   "火須",
   "火靈",
   "火中聖獸"
  ],
  "faction": "韓立陣營（簽約後）",
  "importance": "major",
  "bio": "被馬良作為傀儡使用，解封後助馬良對抗韓立；最終與韓立訂立靈僕契約，換取協助尋回本命晶珠。",
  "firstChapter": 2421,
  "canonFate": "被馬良作為傀儡使用，解封後助馬良對抗韓立；最終與韓立訂立靈僕契約，換取協助尋回本命晶珠。",
  "chronicle": [
   {
    "fromChapter": 2421,
    "toChapter": 2450,
    "locationId": "無涯海",
    "realm": "火靈之身（聖獸，被馬良禁制壓制）",
    "status": "alive",
    "activity": "被馬良作為傀儡使用，解封後助馬良對抗韓立；最終與韓立訂立靈僕契約，換取協助尋回本命晶珠。"
   }
  ]
 },
 {
  "id": "火龍童子（藍道友）",
  "name": "火龍童子（藍道友）",
  "aliases": [
   "藍道友"
  ],
  "faction": "古劍門",
  "importance": "major",
  "bio": "因誤食異草容貌永保童子，豪爽直率，引薦韓立參加晶龍閣換寶會，嘗試換取毒符木材料失敗。",
  "firstChapter": 656,
  "canonFate": "因誤食異草容貌永保童子，豪爽直率，引薦韓立參加晶龍閣換寶會，嘗試換取毒符木材料失敗。",
  "chronicle": [
   {
    "fromChapter": 656,
    "toChapter": 685,
    "locationId": "天南",
    "realm": "元嬰期",
    "status": "alive",
    "activity": "因誤食異草容貌永保童子，豪爽直率，引薦韓立參加晶龍閣換寶會，嘗試換取毒符木材料失敗。"
   }
  ]
 },
 {
  "id": "火鬚子",
  "name": "火鬚子",
  "aliases": [
   "火鬚子道友"
  ],
  "faction": "人族（或妖族）",
  "importance": "major",
  "bio": "天劫期間陪護在側，天劫渡過後化為火球藏入韓立袖中，隨韓立一同飛升仙界。",
  "firstChapter": 2451,
  "canonFate": "隨韓立飛升仙界",
  "chronicle": [
   {
    "fromChapter": 2451,
    "toChapter": 2451,
    "locationId": "仙界",
    "realm": "大乘",
    "status": "alive",
    "activity": "天劫期間陪護在側，天劫渡過後化為火球藏入韓立袖中，隨韓立一同飛升仙界。"
   }
  ]
 },
 {
  "id": "王氏",
  "name": "王氏",
  "aliases": [
   "五夫人",
   "五師母"
  ],
  "faction": "驚蛟會",
  "importance": "major",
  "bio": "墨大夫五夫人，冷艳寡言，暗中掌握惊蛟會秘密力量，以內力烘乾暗信",
  "firstChapter": 100,
  "canonFate": "墨大夫五夫人，冷艳寡言，暗中掌握惊蛟會秘密力量，以內力烘乾暗信",
  "chronicle": [
   {
    "fromChapter": 100,
    "toChapter": 129,
    "locationId": "黃楓谷",
    "realm": "凡人",
    "status": "alive",
    "activity": "墨大夫五夫人，冷艳寡言，暗中掌握惊蛟會秘密力量，以內力烘乾暗信"
   }
  ]
 },
 {
  "id": "王門主的三位師叔",
  "name": "王門主的三位師叔",
  "aliases": [],
  "faction": "七玄門",
  "importance": "major",
  "bio": "秘密隱居落日峰密室閉關，為七玄門最大依仗；其中魁梧漢子在血斗中被金光上人飛劍格殺",
  "firstChapter": 61,
  "canonFate": "魁梧漢子被飛劍截斷右臂後死亡",
  "chronicle": [
   {
    "fromChapter": 61,
    "toChapter": 90,
    "locationId": "七玄門",
    "realm": "功力已至化境（三人均閉關多年）",
    "status": "dead",
    "activity": "秘密隱居落日峰密室閉關，為七玄門最大依仗；其中魁梧漢子在血斗中被金光上人飛劍格殺"
   }
  ]
 },
 {
  "id": "古樸老者",
  "name": "古樸老者",
  "aliases": [],
  "faction": "不明",
  "importance": "major",
  "bio": "持萬獸牌，與黑袍婦人同潛入深淵試圖毀滅虫母本體，但被骸骨的時間法則困住後遭吞噬。",
  "firstChapter": 2236,
  "canonFate": "被螟虫之母骸骨吞噬，隕落",
  "chronicle": [
   {
    "fromChapter": 2236,
    "toChapter": 2265,
    "locationId": "靈界",
    "realm": "大乘期",
    "status": "dead",
    "activity": "持萬獸牌，與黑袍婦人同潛入深淵試圖毀滅虫母本體，但被骸骨的時間法則困住後遭吞噬。"
   }
  ]
 },
 {
  "id": "玄骨上人蕭詧",
  "name": "玄骨上人蕭詧",
  "aliases": [
   "玄骨老魔",
   "清秀少年（化身）"
  ],
  "faction": "魔道鬼修（昔日玄陰經祖師）",
  "importance": "major",
  "bio": "本弧主要配角，附身曲魂化形少年，與韓立反覆交鋒、合謀、背叛又被逼交出九曲靈參，體內寄居一名鬼魂男子協助。",
  "firstChapter": 424,
  "canonFate": "被韓立逼交九曲靈參後遁逃，其體內鬼魂男子被韩立以辟邪神雷擊滅",
  "chronicle": [
   {
    "fromChapter": 424,
    "toChapter": 453,
    "locationId": "亂星海",
    "realm": "玄魂之體（相當於結丹後期，超越元嬰初期）",
    "status": "alive",
    "activity": "本弧主要配角，附身曲魂化形少年，與韓立反覆交鋒、合謀、背叛又被逼交出九曲靈參，體內寄居一名鬼魂男子協"
   }
  ]
 },
 {
  "id": "田卜離",
  "name": "田卜離",
  "aliases": [],
  "faction": "萬寶樓",
  "importance": "major",
  "bio": "萬寶樓掌櫃，以兩株千年黃精芝換出鎮樓之寶，向韓立詳解符寶原理。",
  "firstChapter": 160,
  "canonFate": "萬寶樓掌櫃，以兩株千年黃精芝換出鎮樓之寶，向韓立詳解符寶原理。",
  "chronicle": [
   {
    "fromChapter": 160,
    "toChapter": 171,
    "locationId": "黃楓谷",
    "realm": "凡人（無修仙靈氣）",
    "status": "alive",
    "activity": "萬寶樓掌櫃，以兩株千年黃精芝換出鎮樓之寶，向韓立詳解符寶原理。"
   }
  ]
 },
 {
  "id": "甲天木",
  "name": "甲天木",
  "aliases": [
   "甲兄",
   "甲大師",
   "甲先生"
  ],
  "faction": "萬古族",
  "importance": "major",
  "bio": "天雲十三族中傀儡術頂尖高手之一，被角蚩族重重圍困後喊破韓立蹤跡求援，後引韓立入雲城，居間引薦千機子。",
  "firstChapter": 1568,
  "canonFate": "天雲十三族中傀儡術頂尖高手之一，被角蚩族重重圍困後喊破韓立蹤跡求援，後引韓立入雲城，居間引薦千機子。",
  "chronicle": [
   {
    "fromChapter": 1568,
    "toChapter": 1597,
    "locationId": "雲城",
    "realm": "上族三階",
    "status": "alive",
    "activity": "天雲十三族中傀儡術頂尖高手之一，被角蚩族重重圍困後喊破韓立蹤跡求援，後引韓立入雲城，居間引薦千機子。"
   }
  ]
 },
 {
  "id": "白姓女修",
  "name": "白姓女修",
  "aliases": [],
  "faction": "天南修士",
  "importance": "major",
  "bio": "破血羅罩而出，與鳳冰聯手合攻田鍾，以寒氣和冰焰施展",
  "firstChapter": 776,
  "canonFate": "破血羅罩而出，與鳳冰聯手合攻田鍾，以寒氣和冰焰施展",
  "chronicle": [
   {
    "fromChapter": 776,
    "toChapter": 795,
    "locationId": "天南",
    "realm": "元嬰中期",
    "status": "alive",
    "activity": "破血羅罩而出，與鳳冰聯手合攻田鍾，以寒氣和冰焰施展"
   }
  ]
 },
 {
  "id": "白姓婦人",
  "name": "白姓婦人",
  "aliases": [
   "白道友"
  ],
  "faction": "散修（疑似正道）",
  "importance": "major",
  "bio": "以冰雪蠶為條件被說服參加賭戰，修習雲雪訣；與至陽上人有舊恩怨",
  "firstChapter": 746,
  "canonFate": "以冰雪蠶為條件被說服參加賭戰，修習雲雪訣；與至陽上人有舊恩怨",
  "chronicle": [
   {
    "fromChapter": 746,
    "toChapter": 775,
    "locationId": "天南",
    "realm": "元嬰中期",
    "status": "alive",
    "activity": "以冰雪蠶為條件被說服參加賭戰，修習雲雪訣；與至陽上人有舊恩怨"
   }
  ]
 },
 {
  "id": "白珠兒",
  "name": "白珠兒",
  "aliases": [
   "珠兒"
  ],
  "faction": "火陽族",
  "importance": "major",
  "bio": "大祭司之女，師傅是青筱，持師傅留下的破天弓返族，在殿中以秘術試探韓立神念被啼魂嚇退，戰鬥中被韓立救下。",
  "firstChapter": 1538,
  "canonFate": "大祭司之女，師傅是青筱，持師傅留下的破天弓返族，在殿中以秘術試探韓立神念被啼魂嚇退，戰鬥中被韓立救下。",
  "chronicle": [
   {
    "fromChapter": 1538,
    "toChapter": 1567,
    "locationId": "天淵城",
    "realm": "金丹期",
    "status": "alive",
    "activity": "大祭司之女，師傅是青筱，持師傅留下的破天弓返族，在殿中以秘術試探韓立神念被啼魂嚇退，戰鬥中被韓立救下"
   }
  ]
 },
 {
  "id": "白皙蛟",
  "name": "白皙蛟",
  "aliases": [
   "黃發大漢",
   "白兄"
  ],
  "faction": "幻夜城白家",
  "importance": "major",
  "bio": "白家老祖之兄，持廣陰寶鏡；以鏡探察韓立修為，察覺其肉身近紫髓金骨境界；聯手驅逐礦脈魔獸，後帶領迂迴計策困住趙家魔尊。",
  "firstChapter": 2055,
  "canonFate": "白家老祖之兄，持廣陰寶鏡；以鏡探察韓立修為，察覺其肉身近紫髓金骨境界；聯手驅逐礦脈魔獸，後帶領迂迴計策困住趙家魔尊。",
  "chronicle": [
   {
    "fromChapter": 2055,
    "toChapter": 2084,
    "locationId": "魔界",
    "realm": "合體中期（魔尊）",
    "status": "alive",
    "activity": "白家老祖之兄，持廣陰寶鏡；以鏡探察韓立修為，察覺其肉身近紫髓金骨境界；聯手驅逐礦脈魔獸，後帶領迂迴計"
   }
  ]
 },
 {
  "id": "石長老",
  "name": "石長老",
  "aliases": [
   "黑袍男子",
   "石長老"
  ],
  "faction": "烏翎族（已並入天鵬族）",
  "importance": "major",
  "bio": "天鵬族第四長老，参與開解天鵬之誓副卷封印，傳授韓立「四煞化甲術」；身披以煞氣凝成的乌翅，背景神秘。",
  "firstChapter": 1418,
  "canonFate": "天鵬族第四長老，参與開解天鵬之誓副卷封印，傳授韓立「四煞化甲術」；身披以煞氣凝成的乌翅，背景神秘。",
  "chronicle": [
   {
    "fromChapter": 1418,
    "toChapter": 1447,
    "locationId": "天淵城",
    "realm": "未明（疑合體期）",
    "status": "alive",
    "activity": "天鵬族第四長老，参與開解天鵬之誓副卷封印，傳授韓立「四煞化甲術」；身披以煞氣凝成的乌翅，背景神秘。"
   }
  ]
 },
 {
  "id": "仲姓儒生",
  "name": "仲姓儒生",
  "aliases": [
   "仲神師"
  ],
  "faction": "慕蘭部（慕蘭神師）",
  "importance": "major",
  "bio": "慕蘭神師之一，率十餘名慕蘭法士持坠魔令入谷，對鬼靈門傳送位置隨機問題出言警告，安然傳入谷中。",
  "firstChapter": 796,
  "canonFate": "慕蘭神師之一，率十餘名慕蘭法士持坠魔令入谷，對鬼靈門傳送位置隨機問題出言警告，安然傳入谷中。",
  "chronicle": [
   {
    "fromChapter": 796,
    "toChapter": 825,
    "locationId": "大晉",
    "realm": "元嬰後期",
    "status": "alive",
    "activity": "慕蘭神師之一，率十餘名慕蘭法士持坠魔令入谷，對鬼靈門傳送位置隨機問題出言警告，安然傳入谷中。"
   }
  ]
 },
 {
  "id": "冰鳳（洞天冰鳳）",
  "name": "冰鳳（洞天冰鳳）",
  "aliases": [
   "鳳道友",
   "鳳仙子",
   "銀衫女子"
  ],
  "faction": "妖族（冰海冰鳳族）",
  "importance": "major",
  "bio": "進階化神後從天魔宗弟子得知空間節點，赴五龍海與韓立達成互下死禁的聯手協議，共同乘洞天舟進入節點。",
  "firstChapter": 1245,
  "canonFate": "與韓立共同進入空間節點，生死未卜",
  "chronicle": [
   {
    "fromChapter": 1245,
    "toChapter": 1265,
    "locationId": "天南",
    "realm": "化神期",
    "status": "dead",
    "activity": "進階化神後從天魔宗弟子得知空間節點，赴五龍海與韓立達成互下死禁的聯手協議，共同乘洞天舟進入節點。"
   }
  ]
 },
 {
  "id": "冰魄仙子血魂",
  "name": "冰魄仙子血魂",
  "aliases": [
   "冰魄分身",
   "血魂"
  ],
  "faction": "許家（依附）",
  "importance": "major",
  "bio": "冰魄仙子留於許家的血魂分身，在血天大陸中血蛊蟲昏迷；被韓立救醒後告知冰魄本體下落及虛天鼎秘密",
  "firstChapter": 2206,
  "canonFate": "被救醒，需靜養恢復",
  "chronicle": [
   {
    "fromChapter": 2206,
    "toChapter": 2235,
    "locationId": "靈界",
    "realm": "煉虛左右",
    "status": "alive",
    "activity": "冰魄仙子留於許家的血魂分身，在血天大陸中血蛊蟲昏迷；被韓立救醒後告知冰魄本體下落及虛天鼎秘密"
   }
  ]
 },
 {
  "id": "冰魄銀月",
  "name": "冰魄銀月",
  "aliases": [
   "銀色巨鳥"
  ],
  "faction": "韓立陣營",
  "importance": "major",
  "bio": "天劫第二波時化出千丈銀色巨鳥本體，以奇寒之力抵禦熔岩，之後應在靈獸環中。",
  "firstChapter": 2451,
  "canonFate": "天劫第二波時化出千丈銀色巨鳥本體，以奇寒之力抵禦熔岩，之後應在靈獸環中。",
  "chronicle": [
   {
    "fromChapter": 2451,
    "toChapter": 2451,
    "locationId": "無涯海",
    "realm": "大乘靈獸",
    "status": "alive",
    "activity": "天劫第二波時化出千丈銀色巨鳥本體，以奇寒之力抵禦熔岩，之後應在靈獸環中。"
   }
  ]
 },
 {
  "id": "合息獸",
  "name": "合息獸",
  "aliases": [
   "四大兇獸之一",
   "羊首巨獸"
  ],
  "faction": "無（被人族封印）",
  "importance": "major",
  "bio": "被倚天城四大宗門封印於九陽罡日大陣中；林鸾以血魂符驅使其出城迎敵，展現黃風殺傷力；被血光化身以黑絲困住後用彩光塔收走。",
  "firstChapter": 1905,
  "canonFate": "被血光圣祖化身以彩光塔強行收入，下落不明",
  "chronicle": [
   {
    "fromChapter": 1905,
    "toChapter": 1934,
    "locationId": "魔界",
    "realm": "超越合體（四大凶獸之一，元氣受損）",
    "status": "alive",
    "activity": "被倚天城四大宗門封印於九陽罡日大陣中；林鸾以血魂符驅使其出城迎敵，展現黃風殺傷力；被血光化身以黑絲困"
   }
  ]
 },
 {
  "id": "曲魂（御靈宗修士）",
  "name": "曲魂（御靈宗修士）",
  "aliases": [
   "曲魂",
   "張鐵"
  ],
  "faction": "御靈宗（魔道）",
  "importance": "major",
  "bio": "御靈宗結丹期修士元神侵佔韓立昔日友人張鐵（曲魂）的屍身；以金背妖螂設圈套謀害韓立失敗，最終元神被韓立一掌捏滅。",
  "firstChapter": 322,
  "canonFate": "本弧死亡，元神被韓立捏滅",
  "chronicle": [
   {
    "fromChapter": 322,
    "toChapter": 351,
    "locationId": "越京",
    "realm": "炼氣期五六層（原結丹期）",
    "status": "dead",
    "activity": "御靈宗結丹期修士元神侵佔韓立昔日友人張鐵（曲魂）的屍身；以金背妖螂設圈套謀害韓立失敗，最終元神被韓立"
   }
  ]
 },
 {
  "id": "灰衣人",
  "name": "灰衣人",
  "aliases": [],
  "faction": "七玄門",
  "importance": "major",
  "bio": "以剑芒對撼金光上人飛劍，重傷後在會議中以一句「不怕其長輩找上門？」警醒眾人，平息主殺派。",
  "firstChapter": 91,
  "canonFate": "重傷存活。",
  "chronicle": [
   {
    "fromChapter": 91,
    "toChapter": 99,
    "locationId": "七玄門",
    "realm": "七玄門三大高手之一（能使剑芒）",
    "status": "alive",
    "activity": "以剑芒對撼金光上人飛劍，重傷後在會議中以一句「不怕其長輩找上門？」警醒眾人，平息主殺派。"
   }
  ]
 },
 {
  "id": "羽衣少女",
  "name": "羽衣少女",
  "aliases": [
   "葉家老祖",
   "小妹",
   "葉仙子"
  ],
  "faction": "人族（靈界）葉家",
  "importance": "major",
  "bio": "與韓立結伴同行；透露青鸞真血計劃，以靈石及葉家一次相助為報酬；攜浑天珠以備應對凌源聖祖化身；最終成功取得青鸞真血。",
  "firstChapter": 2055,
  "canonFate": "與韓立結伴同行；透露青鸞真血計劃，以靈石及葉家一次相助為報酬；攜浑天珠以備應對凌源聖祖化身；最終成功取得青鸞真血。",
  "chronicle": [
   {
    "fromChapter": 2055,
    "toChapter": 2084,
    "locationId": "魔界",
    "realm": "合體期",
    "status": "alive",
    "activity": "與韓立結伴同行；透露青鸞真血計劃，以靈石及葉家一次相助為報酬；攜浑天珠以備應對凌源聖祖化身；最終成功"
   }
  ]
 },
 {
  "id": "羽衣長老",
  "name": "羽衣長老",
  "aliases": [],
  "faction": "葉家太上長老",
  "importance": "major",
  "bio": "葉家太上長老，外貌為十七八歲少女，修為之高遠超外表；在萬靈大典上擊敗林家長老，對魔界之行持謹慎態度，最終有條件同意參與。",
  "firstChapter": 1815,
  "canonFate": "葉家太上長老，外貌為十七八歲少女，修為之高遠超外表；在萬靈大典上擊敗林家長老，對魔界之行持謹慎態度，最終有條件同意參與。",
  "chronicle": [
   {
    "fromChapter": 1815,
    "toChapter": 1844,
    "locationId": "魔界",
    "realm": "合體中期",
    "status": "alive",
    "activity": "葉家太上長老，外貌為十七八歲少女，修為之高遠超外表；在萬靈大典上擊敗林家長老，對魔界之行持謹慎態度，"
   }
  ]
 },
 {
  "id": "老農（黑瘦老者）",
  "name": "老農（黑瘦老者）",
  "aliases": [],
  "faction": "正道",
  "importance": "major",
  "bio": "修玉丹功，以柳枝施木屬術困住天都妖尸，實力超過天悟子，沉默寡言",
  "firstChapter": 454,
  "canonFate": "修玉丹功，以柳枝施木屬術困住天都妖尸，實力超過天悟子，沉默寡言",
  "chronicle": [
   {
    "fromChapter": 454,
    "toChapter": 483,
    "locationId": "亂星海",
    "realm": "元嬰期",
    "status": "alive",
    "activity": "修玉丹功，以柳枝施木屬術困住天都妖尸，實力超過天悟子，沉默寡言"
   }
  ]
 },
 {
  "id": "血毒",
  "name": "血毒",
  "aliases": [
   "血毒前輩"
  ],
  "faction": "木青門下",
  "importance": "major",
  "bio": "蛟首人身血紅妖物，木青的首席手下；以天罡血雷及血河冥針與韓立激烈交手後回報木青，後化作儒生監視韓立於木精洞",
  "firstChapter": 1448,
  "canonFate": "蛟首人身血紅妖物，木青的首席手下；以天罡血雷及血河冥針與韓立激烈交手後回報木青，後化作儒生監視韓立於木精洞",
  "chronicle": [
   {
    "fromChapter": 1448,
    "toChapter": 1477,
    "locationId": "天淵城",
    "realm": "煉虛高階（高階靈帥）",
    "status": "alive",
    "activity": "蛟首人身血紅妖物，木青的首席手下；以天罡血雷及血河冥針與韓立激烈交手後回報木青，後化作儒生監視韓立於"
   }
  ]
 },
 {
  "id": "何康",
  "name": "何康",
  "aliases": [
   "石林中的男子聲音",
   "上古真仙"
  ],
  "faction": "仙界巡查使",
  "importance": "major",
  "bio": "上古仙界巡查使者，被同伴封印在黑檀鉢中數十萬年；藉助韓立神念之鏈困住虫母的時機，以僅存魂念施展天罰之雷（刑罰之雷）將虫母擊滅；向韓立揭示炼神術的危機，請求韓立日後以炼神術幫其激發傳",
  "firstChapter": 2236,
  "canonFate": "元神仍被封在黑檀鉢中，祭壇再次沉眠等待韓立修成炼神術第三層",
  "chronicle": [
   {
    "fromChapter": 2236,
    "toChapter": 2265,
    "locationId": "仙界",
    "realm": "真仙（元神被封入黑檀鉢）",
    "status": "alive",
    "activity": "上古仙界巡查使者，被同伴封印在黑檀鉢中數十萬年；藉助韓立神念之鏈困住虫母的時機，以僅存魂念施展天罰之"
   }
  ]
 },
 {
  "id": "吾鵬",
  "name": "吾鵬",
  "aliases": [],
  "faction": "貝葉宗（九國盟）",
  "importance": "major",
  "bio": "貝葉宗宗主，殿議主持人，透露兩名元嬰修士被陌生法士（吸魂異類）所殺的消息，同意各大勢力平等出兵條件。",
  "firstChapter": 716,
  "canonFate": "貝葉宗宗主，殿議主持人，透露兩名元嬰修士被陌生法士（吸魂異類）所殺的消息，同意各大勢力平等出兵條件。",
  "chronicle": [
   {
    "fromChapter": 716,
    "toChapter": 745,
    "locationId": "天南",
    "realm": "元嬰中期",
    "status": "alive",
    "activity": "貝葉宗宗主，殿議主持人，透露兩名元嬰修士被陌生法士（吸魂異類）所殺的消息，同意各大勢力平等出兵條件。"
   }
  ]
 },
 {
  "id": "呂長老（呂洛）",
  "name": "呂長老（呂洛）",
  "aliases": [
   "呂師兄"
  ],
  "faction": "落雲宗",
  "importance": "major",
  "bio": "陪同韓立赴阗天城，修千浪訣，擅長保命神通，對韓立神識化形大感震驚。",
  "firstChapter": 656,
  "canonFate": "陪同韓立赴阗天城，修千浪訣，擅長保命神通，對韓立神識化形大感震驚。",
  "chronicle": [
   {
    "fromChapter": 656,
    "toChapter": 685,
    "locationId": "天南",
    "realm": "元嬰初期",
    "status": "alive",
    "activity": "陪同韓立赴阗天城，修千浪訣，擅長保命神通，對韓立神識化形大感震驚。"
   }
  ]
 },
 {
  "id": "呂某",
  "name": "呂某",
  "aliases": [
   "呂師弟",
   "呂姓中年人"
  ],
  "faction": "落雲宗",
  "importance": "major",
  "bio": "與程天坤共同邀請韓立，向其傳授元嬰修煉心得",
  "firstChapter": 626,
  "canonFate": "與程天坤共同邀請韓立，向其傳授元嬰修煉心得",
  "chronicle": [
   {
    "fromChapter": 626,
    "toChapter": 655,
    "locationId": "天南",
    "realm": "元嬰初期",
    "status": "alive",
    "activity": "與程天坤共同邀請韓立，向其傳授元嬰修煉心得"
   }
  ]
 },
 {
  "id": "妖族女子炎",
  "name": "妖族女子炎",
  "aliases": [
   "炎姓女子",
   "炎道友"
  ],
  "faction": "妖族",
  "importance": "major",
  "bio": "在太玄殿與韓立多次秘密交易，為韓立收集蠻荒靈藥種子，以萬年靈草為酬；本弧末次交易後告知大战在即，决意离城。",
  "firstChapter": 1326,
  "canonFate": "在太玄殿與韓立多次秘密交易，為韓立收集蠻荒靈藥種子，以萬年靈草為酬；本弧末次交易後告知大战在即，决意离城。",
  "chronicle": [
   {
    "fromChapter": 1326,
    "toChapter": 1355,
    "locationId": "風元大陸",
    "realm": "化形妖族（化神等阶）",
    "status": "alive",
    "activity": "在太玄殿與韓立多次秘密交易，為韓立收集蠻荒靈藥種子，以萬年靈草為酬；本弧末次交易後告知大战在即，决意"
   }
  ]
 },
 {
  "id": "李氏",
  "name": "李氏",
  "aliases": [
   "二夫人",
   "二師母"
  ],
  "faction": "驚蛟會",
  "importance": "major",
  "bio": "墨大夫二夫人，出身書香門第，知書達理，得悉丈夫死訊後最為激動",
  "firstChapter": 100,
  "canonFate": "墨大夫二夫人，出身書香門第，知書達理，得悉丈夫死訊後最為激動",
  "chronicle": [
   {
    "fromChapter": 100,
    "toChapter": 129,
    "locationId": "黃楓谷",
    "realm": "凡人",
    "status": "alive",
    "activity": "墨大夫二夫人，出身書香門第，知書達理，得悉丈夫死訊後最為激動"
   }
  ]
 },
 {
  "id": "李長老",
  "name": "李長老",
  "aliases": [],
  "faction": "七玄門",
  "importance": "major",
  "bio": "被韓立以清靈散及金針放血法救治，從「暗青子」混合劇毒中完全康復，後亦加入死契血斗",
  "firstChapter": 61,
  "canonFate": "被韓立以清靈散及金針放血法救治，從「暗青子」混合劇毒中完全康復，後亦加入死契血斗",
  "chronicle": [
   {
    "fromChapter": 61,
    "toChapter": 90,
    "locationId": "七玄門",
    "realm": "高層長老",
    "status": "alive",
    "activity": "被韓立以清靈散及金針放血法救治，從「暗青子」混合劇毒中完全康復，後亦加入死契血斗"
   }
  ]
 },
 {
  "id": "李修士（白眉青年）",
  "name": "李修士（白眉青年）",
  "aliases": [
   "李道友",
   "白眉青年"
  ],
  "faction": "玄鷹族（七大妖族之一）",
  "importance": "major",
  "bio": "與筱虹密謀奪取天鳳血脈；在影族蜃城圈套中被赤影纏住，自爆妖丹同歸於盡。",
  "firstChapter": 1358,
  "canonFate": "自爆妖丹殞落。",
  "chronicle": [
   {
    "fromChapter": 1358,
    "toChapter": 1387,
    "locationId": "天淵城",
    "realm": "化神後期大成",
    "status": "dead",
    "activity": "與筱虹密謀奪取天鳳血脈；在影族蜃城圈套中被赤影纏住，自爆妖丹同歸於盡。"
   }
  ]
 },
 {
  "id": "李師祖",
  "name": "李師祖",
  "aliases": [],
  "faction": "黃楓谷",
  "importance": "major",
  "bio": "本次禁地之行黃楓谷領隊，攜坐騎銀甲角蟒；與浮雲子及穹老怪打賭，代表黃楓谷督戰，性格剛烈直爽。",
  "firstChapter": 172,
  "canonFate": "本次禁地之行黃楓谷領隊，攜坐騎銀甲角蟒；與浮雲子及穹老怪打賭，代表黃楓谷督戰，性格剛烈直爽。",
  "chronicle": [
   {
    "fromChapter": 172,
    "toChapter": 201,
    "locationId": "黃楓谷",
    "realm": "結丹期",
    "status": "alive",
    "activity": "本次禁地之行黃楓谷領隊，攜坐騎銀甲角蟒；與浮雲子及穹老怪打賭，代表黃楓谷督戰，性格剛烈直爽。"
   }
  ]
 },
 {
  "id": "李蓉",
  "name": "李蓉",
  "aliases": [
   "圣島使者",
   "蓉仙子"
  ],
  "faction": "聖島（人族）",
  "importance": "major",
  "bio": "代聖島出席慶典，差點被黑梟王索為侍妾，後陪同韓立前往許家及圣島，引路帶韓立至天書閣及長老議事廳",
  "firstChapter": 2206,
  "canonFate": "代聖島出席慶典，差點被黑梟王索為侍妾，後陪同韓立前往許家及圣島，引路帶韓立至天書閣及長老議事廳",
  "chronicle": [
   {
    "fromChapter": 2206,
    "toChapter": 2235,
    "locationId": "靈界",
    "realm": "合體中期",
    "status": "alive",
    "activity": "代聖島出席慶典，差點被黑梟王索為侍妾，後陪同韓立前往許家及圣島，引路帶韓立至天書閣及長老議事廳"
   }
  ]
 },
 {
  "id": "李纓寧",
  "name": "李纓寧",
  "aliases": [
   "纓寧"
  ],
  "faction": "化刀塢",
  "importance": "major",
  "bio": "墨玉珠之女，韓立送通靈玉佩之人，被韓立認出後以「師伯」相稱，獲贈丹藥兩瓶和三色噬金蟲球，隨後在黃龍山一同守陣。",
  "firstChapter": 716,
  "canonFate": "墨玉珠之女，韓立送通靈玉佩之人，被韓立認出後以「師伯」相稱，獲贈丹藥兩瓶和三色噬金蟲球，隨後在黃龍山一同守陣。",
  "chronicle": [
   {
    "fromChapter": 716,
    "toChapter": 745,
    "locationId": "天南",
    "realm": "結丹期",
    "status": "alive",
    "activity": "墨玉珠之女，韓立送通靈玉佩之人，被韓立認出後以「師伯」相稱，獲贈丹藥兩瓶和三色噬金蟲球，隨後在黃龍山"
   }
  ]
 },
 {
  "id": "汪凝",
  "name": "汪凝",
  "aliases": [
   "紫靈仙子"
  ],
  "faction": "妙音門（代理門主）",
  "importance": "major",
  "bio": "妙音門門主之女，以面紗及法術遮面示人，真容為普通黃衫少女；說動赤火老怪助陣，事後識出曲魂分身身份，以名義長老條件換取韓立的庇護名義",
  "firstChapter": 394,
  "canonFate": "妙音門門主之女，以面紗及法術遮面示人，真容為普通黃衫少女；說動赤火老怪助陣，事後識出曲魂分身身份，以名義長老條件換取韓立的庇護名義",
  "chronicle": [
   {
    "fromChapter": 394,
    "toChapter": 423,
    "locationId": "亂星海",
    "realm": "結丹初期",
    "status": "alive",
    "activity": "妙音門門主之女，以面紗及法術遮面示人，真容為普通黃衫少女；說動赤火老怪助陣，事後識出曲魂分身身份，以"
   }
  ]
 },
 {
  "id": "沙老夫人",
  "name": "沙老夫人",
  "aliases": [
   "沙夫人"
  ],
  "faction": "天雲十三族（神秘）",
  "importance": "major",
  "bio": "十三族中現存最長壽的大乘期存在，出身種族不明；本弧僅旁聽會議，以「不動腦子」為由拒絕深度參與，翁姓青年對其極為恭敬。",
  "firstChapter": 1658,
  "canonFate": "十三族中現存最長壽的大乘期存在，出身種族不明；本弧僅旁聽會議，以「不動腦子」為由拒絕深度參與，翁姓青年對其極為恭敬。",
  "chronicle": [
   {
    "fromChapter": 1658,
    "toChapter": 1687,
    "locationId": "天淵城",
    "realm": "大乘期",
    "status": "alive",
    "activity": "十三族中現存最長壽的大乘期存在，出身種族不明；本弧僅旁聽會議，以「不動腦子」為由拒絕深度參與，翁姓青"
   }
  ]
 },
 {
  "id": "秀麗女子",
  "name": "秀麗女子",
  "aliases": [
   "化仙宗師妹"
  ],
  "faction": "化仙宗",
  "importance": "major",
  "bio": "持四象尺（通天靈寶仿製品）施展梵音佛蓮困住乾老魔等人，法力耗盡後虛弱；與師姐木夫人持化龍璽逃出昆吾殿。",
  "firstChapter": 1006,
  "canonFate": "持四象尺（通天靈寶仿製品）施展梵音佛蓮困住乾老魔等人，法力耗盡後虛弱；與師姐木夫人持化龍璽逃出昆吾殿。",
  "chronicle": [
   {
    "fromChapter": 1006,
    "toChapter": 1035,
    "locationId": "大晉",
    "realm": "元嬰初期",
    "status": "alive",
    "activity": "持四象尺（通天靈寶仿製品）施展梵音佛蓮困住乾老魔等人，法力耗盡後虛弱；與師姐木夫人持化龍璽逃出昆吾殿"
   }
  ]
 },
 {
  "id": "肖姓女修",
  "name": "肖姓女修",
  "aliases": [
   "肖仙子"
  ],
  "faction": "人族飛升修士",
  "importance": "major",
  "bio": "擁有五色虬蛟精魄與金篆文傳送法陣（三十六杆旗陣），與韓立合力對抗猖奴，犧牲法盤成功傳送脫逃。",
  "firstChapter": 1388,
  "canonFate": "與韓立一同被傳送至未知之地，法盤被夜叉王震壞；後續行蹤不明。",
  "chronicle": [
   {
    "fromChapter": 1388,
    "toChapter": 1417,
    "locationId": "天淵城",
    "realm": "化神期",
    "status": "alive",
    "activity": "擁有五色虬蛟精魄與金篆文傳送法陣（三十六杆旗陣），與韓立合力對抗猖奴，犧牲法盤成功傳送脫逃。"
   }
  ]
 },
 {
  "id": "赤紅小人",
  "name": "赤紅小人",
  "aliases": [],
  "faction": "馬良麾下",
  "importance": "major",
  "bio": "馬良從玉匣中放出的傀儡小人，體有赤紅靈紋，免疫法則束縛，被派去破壞南方陣眼，由軒九靈前去攔截。",
  "firstChapter": 2416,
  "canonFate": "馬良從玉匣中放出的傀儡小人，體有赤紅靈紋，免疫法則束縛，被派去破壞南方陣眼，由軒九靈前去攔截。",
  "chronicle": [
   {
    "fromChapter": 2416,
    "toChapter": 2420,
    "locationId": "靈界",
    "realm": "傀儡（蓄有馬良神念）",
    "status": "alive",
    "activity": "馬良從玉匣中放出的傀儡小人，體有赤紅靈紋，免疫法則束縛，被派去破壞南方陣眼，由軒九靈前去攔截。"
   }
  ]
 },
 {
  "id": "邪蓮聖祖",
  "name": "邪蓮聖祖",
  "aliases": [
   "邪蓮",
   "寶花之妹"
  ],
  "faction": "聖界（魔界）萬花山脈",
  "importance": "major",
  "bio": "宝花同胞妹妹，駐守朝天峰，透露始印之地全部真相，與韓立同組進入地宮修復阵眼，以三銀環制殺人面蟲",
  "firstChapter": 2206,
  "canonFate": "宝花同胞妹妹，駐守朝天峰，透露始印之地全部真相，與韓立同組進入地宮修復阵眼，以三銀環制殺人面蟲",
  "chronicle": [
   {
    "fromChapter": 2206,
    "toChapter": 2235,
    "locationId": "靈界",
    "realm": "大乘期（聖祖）",
    "status": "alive",
    "activity": "宝花同胞妹妹，駐守朝天峰，透露始印之地全部真相，與韓立同組進入地宮修復阵眼，以三銀環制殺人面蟲"
   }
  ]
 },
 {
  "id": "卓如婷",
  "name": "卓如婷",
  "aliases": [],
  "faction": "妙音門右使",
  "importance": "major",
  "bio": "妙音門右使，容貌有南宮婉的風韻令韓立一時觸動；出行中被極陰老祖之局所困",
  "firstChapter": 394,
  "canonFate": "妙音門右使，容貌有南宮婉的風韻令韓立一時觸動；出行中被極陰老祖之局所困",
  "chronicle": [
   {
    "fromChapter": 394,
    "toChapter": 423,
    "locationId": "亂星海",
    "realm": "結丹初期",
    "status": "alive",
    "activity": "妙音門右使，容貌有南宮婉的風韻令韓立一時觸動；出行中被極陰老祖之局所困"
   }
  ]
 },
 {
  "id": "呼慶雷",
  "name": "呼慶雷",
  "aliases": [
   "呼兄",
   "呼老魔",
   "呼道友"
  ],
  "faction": "天魔宗（太上長老）",
  "importance": "major",
  "bio": "大晋化神修士，天魔宗太上長老，定居魔陀山魔宮；納妾宴上因紫靈與韓立是舊識而動怒，以萬刃盤提出「硬接一擊」為交換條件，接受韓立以寒髓換取紫靈自由。",
  "firstChapter": 1215,
  "canonFate": "大晋化神修士，天魔宗太上長老，定居魔陀山魔宮；納妾宴上因紫靈與韓立是舊識而動怒，以萬刃盤提出「硬接一擊」為交換條件，接受韓立以寒髓換取紫靈自由。",
  "chronicle": [
   {
    "fromChapter": 1215,
    "toChapter": 1244,
    "locationId": "天南",
    "realm": "化神期",
    "status": "alive",
    "activity": "大晋化神修士，天魔宗太上長老，定居魔陀山魔宮；納妾宴上因紫靈與韓立是舊識而動怒，以萬刃盤提出「硬接一"
   }
  ]
 },
 {
  "id": "坤無極",
  "name": "坤無極",
  "aliases": [],
  "faction": "血凄門",
  "importance": "major",
  "bio": "血凄門大長老，地下交易會上以落鳳木等珍稀材料強奪一枚魔髓鑽，得手後立即離場欲炼化魔氣。",
  "firstChapter": 946,
  "canonFate": "血凄門大長老，地下交易會上以落鳳木等珍稀材料強奪一枚魔髓鑽，得手後立即離場欲炼化魔氣。",
  "chronicle": [
   {
    "fromChapter": 946,
    "toChapter": 975,
    "locationId": "大晉",
    "realm": "元嬰後期",
    "status": "alive",
    "activity": "血凄門大長老，地下交易會上以落鳳木等珍稀材料強奪一枚魔髓鑽，得手後立即離場欲炼化魔氣。"
   }
  ]
 },
 {
  "id": "林家大長老",
  "name": "林家大長老",
  "aliases": [
   "披髮男子"
  ],
  "faction": "林家",
  "importance": "major",
  "bio": "與葉家太上長老宿怨，在大典切磋中落敗；密謀魔界之行時最先表態願意參與。",
  "firstChapter": 1815,
  "canonFate": "與葉家太上長老宿怨，在大典切磋中落敗；密謀魔界之行時最先表態願意參與。",
  "chronicle": [
   {
    "fromChapter": 1815,
    "toChapter": 1844,
    "locationId": "魔界",
    "realm": "合體中期",
    "status": "alive",
    "activity": "與葉家太上長老宿怨，在大典切磋中落敗；密謀魔界之行時最先表態願意參與。"
   }
  ]
 },
 {
  "id": "林家男子",
  "name": "林家男子",
  "aliases": [
   "披發男子",
   "林家太上長老"
  ],
  "faction": "人族林家",
  "importance": "major",
  "bio": "陇家老祖試圖拉攏合作，其態度敷衍，觀望形勢，突圍時分頭離去。",
  "firstChapter": 2025,
  "canonFate": "陇家老祖試圖拉攏合作，其態度敷衍，觀望形勢，突圍時分頭離去。",
  "chronicle": [
   {
    "fromChapter": 2025,
    "toChapter": 2054,
    "locationId": "魔界",
    "realm": "合體後期",
    "status": "alive",
    "activity": "陇家老祖試圖拉攏合作，其態度敷衍，觀望形勢，突圍時分頭離去。"
   }
  ]
 },
 {
  "id": "林家披髮男子",
  "name": "林家披髮男子",
  "aliases": [
   "林某",
   "林道友"
  ],
  "faction": "人族（靈界）林家",
  "importance": "major",
  "bio": "在荒地中遭變異合體級摄魂獸偷襲，法力大損、獨眼被挖；服韓立贈予的淬精丹後好轉，答應護送朱果兒返靈界；途中遭宝花聖祖設伏被搜魂後滅殺。",
  "firstChapter": 2055,
  "canonFate": "死亡——被宝花聖祖困住搜魂後燃為灰燼，元神雖得輪回但實際已殞落",
  "chronicle": [
   {
    "fromChapter": 2055,
    "toChapter": 2084,
    "locationId": "靈界",
    "realm": "合體期（修為大損，不足三成）",
    "status": "dead",
    "activity": "在荒地中遭變異合體級摄魂獸偷襲，法力大損、獨眼被挖；服韓立贈予的淬精丹後好轉，答應護送朱果兒返靈界；"
   }
  ]
 },
 {
  "id": "林師叔（林師兄）",
  "name": "林師叔（林師兄）",
  "aliases": [
   "前千竹教教主之子"
  ],
  "faction": "黃楓谷（偽裝），前千竹教",
  "importance": "major",
  "bio": "偽裝隱藏於黃楓谷多年的前千竹教教主之子，被黃龍引入圈套後中黑絲蛊毒身亡，元神試圖奪舍韓立被抓",
  "firstChapter": 202,
  "canonFate": "本弧死亡，元神被韓立抓住",
  "chronicle": [
   {
    "fromChapter": 202,
    "toChapter": 231,
    "locationId": "黃楓谷",
    "realm": "筑基期以上（元神）",
    "status": "dead",
    "activity": "偽裝隱藏於黃楓谷多年的前千竹教教主之子，被黃龍引入圈套後中黑絲蛊毒身亡，元神試圖奪舍韓立被抓"
   }
  ]
 },
 {
  "id": "況姓老者",
  "name": "況姓老者",
  "aliases": [],
  "faction": "倪航齋（天道盟）",
  "importance": "major",
  "bio": "天道盟重要修士，參與高層會議，對韓立直爽態度大為欣賞",
  "firstChapter": 746,
  "canonFate": "天道盟重要修士，參與高層會議，對韓立直爽態度大為欣賞",
  "chronicle": [
   {
    "fromChapter": 746,
    "toChapter": 775,
    "locationId": "天南",
    "realm": "元嬰中期",
    "status": "alive",
    "activity": "天道盟重要修士，參與高層會議，對韓立直爽態度大為欣賞"
   }
  ]
 },
 {
  "id": "芝仙",
  "name": "芝仙",
  "aliases": [],
  "faction": "無",
  "importance": "major",
  "bio": "本弧被韓立甦醒，以分裂元神換取兵解入輪迴，告知神秘用途，紮根藥園，其靈軀被九曲靈參女童「曲兒」佔用煉化靈力。",
  "firstChapter": 1658,
  "canonFate": "元神分裂後大半離去，留餘存元神於藥園，按約兵解進入輪迴。",
  "chronicle": [
   {
    "fromChapter": 1658,
    "toChapter": 1687,
    "locationId": "天淵城",
    "realm": "不詳（天地靈物幻化人形，有相當於合體前後法力）",
    "status": "dead",
    "activity": "本弧被韓立甦醒，以分裂元神換取兵解入輪迴，告知神秘用途，紮根藥園，其靈軀被九曲靈參女童「曲兒」佔用煉"
   }
  ]
 },
 {
  "id": "花仙子",
  "name": "花仙子",
  "aliases": [
   "天狐花仙子"
  ],
  "faction": "天狐族（反叛出族）散修",
  "importance": "major",
  "bio": "以萬幻玄妙之術偽裝萬骨真人的寵姬潛伏，被韓立神念識破；與萬骨真人合謀聯絡散修組成防魔聯盟",
  "firstChapter": 1785,
  "canonFate": "以萬幻玄妙之術偽裝萬骨真人的寵姬潛伏，被韓立神念識破；與萬骨真人合謀聯絡散修組成防魔聯盟",
  "chronicle": [
   {
    "fromChapter": 1785,
    "toChapter": 1814,
    "locationId": "魔界",
    "realm": "合體期（初期）",
    "status": "alive",
    "activity": "以萬幻玄妙之術偽裝萬骨真人的寵姬潛伏，被韓立神念識破；與萬骨真人合謀聯絡散修組成防魔聯盟"
   }
  ]
 },
 {
  "id": "邰夫人",
  "name": "邰夫人",
  "aliases": [
   "邰姓婦人",
   "邰道友"
  ],
  "faction": "散修（後站隊雲姓老者一方）",
  "importance": "major",
  "bio": "以雷火錐古宝嘗試破太妙神禁，失敗且古宝被毀，之後加入雲姓老者陣營試圖圍殺南陇侯。",
  "firstChapter": 686,
  "canonFate": "雷火錐被太妙神禁摧毀",
  "chronicle": [
   {
    "fromChapter": 686,
    "toChapter": 715,
    "locationId": "天南",
    "realm": "元嬰初期",
    "status": "alive",
    "activity": "以雷火錐古宝嘗試破太妙神禁，失敗且古宝被毀，之後加入雲姓老者陣營試圖圍殺南陇侯。"
   }
  ]
 },
 {
  "id": "金大長老",
  "name": "金大長老",
  "aliases": [
   "金龍大長老"
  ],
  "faction": "龍島真龍族",
  "importance": "major",
  "bio": "與韓立以真魂丹換取七枚真麟留影鱗片及一瓶萬年金桑液；透過秘術探查出韓立神念隱患重重，但無法出言相助。",
  "firstChapter": 2421,
  "canonFate": "與韓立以真魂丹換取七枚真麟留影鱗片及一瓶萬年金桑液；透過秘術探查出韓立神念隱患重重，但無法出言相助。",
  "chronicle": [
   {
    "fromChapter": 2421,
    "toChapter": 2450,
    "locationId": "無涯海",
    "realm": "真龍族第一人（大乘頂尖）",
    "status": "alive",
    "activity": "與韓立以真魂丹換取七枚真麟留影鱗片及一瓶萬年金桑液；透過秘術探查出韓立神念隱患重重，但無法出言相助。"
   }
  ]
 },
 {
  "id": "金越老僧",
  "name": "金越老僧",
  "aliases": [
   "金越大師"
  ],
  "faction": "人族（天淵城長老）",
  "importance": "major",
  "bio": "天淵城高層，以四神香助天元聖皇擒獲紫影；布局將飛升修士和有嫌疑者驅逐出天淵城以應對玄天斬靈劍之危。",
  "firstChapter": 1358,
  "canonFate": "天淵城高層，以四神香助天元聖皇擒獲紫影；布局將飛升修士和有嫌疑者驅逐出天淵城以應對玄天斬靈劍之危。",
  "chronicle": [
   {
    "fromChapter": 1358,
    "toChapter": 1387,
    "locationId": "天淵城",
    "realm": "合體期",
    "status": "alive",
    "activity": "天淵城高層，以四神香助天元聖皇擒獲紫影；布局將飛升修士和有嫌疑者驅逐出天淵城以應對玄天斬靈劍之危。"
   }
  ]
 },
 {
  "id": "青前輩",
  "name": "青前輩",
  "aliases": [
   "祝前輩夫人",
   "美艷女子"
  ],
  "faction": "人族天淵城金衛",
  "importance": "major",
  "bio": "全程未開口說話，斬殺玄渦獸一隻，夜叉圍攻中與祝姓青年聯手引爆雙幡。",
  "firstChapter": 1388,
  "canonFate": "夜叉大軍圍攻中逃脫，生死未明。",
  "chronicle": [
   {
    "fromChapter": 1388,
    "toChapter": 1417,
    "locationId": "天淵城",
    "realm": "煉虛期",
    "status": "dead",
    "activity": "全程未開口說話，斬殺玄渦獸一隻，夜叉圍攻中與祝姓青年聯手引爆雙幡。"
   }
  ]
 },
 {
  "id": "青筱",
  "name": "青筱",
  "aliases": [],
  "faction": "火瑚群島上族",
  "importance": "major",
  "bio": "白珠兒師傅，修風屬性功法，登門向韓立請教修煉瓶頸，邀韓立參加藍湖島圍獵，藍湖島遇怪蛾險些罹難，被韓立救下。",
  "firstChapter": 1538,
  "canonFate": "白珠兒師傅，修風屬性功法，登門向韓立請教修煉瓶頸，邀韓立參加藍湖島圍獵，藍湖島遇怪蛾險些罹難，被韓立救下。",
  "chronicle": [
   {
    "fromChapter": 1538,
    "toChapter": 1567,
    "locationId": "天淵城",
    "realm": "化神中期",
    "status": "alive",
    "activity": "白珠兒師傅，修風屬性功法，登門向韓立請教修煉瓶頸，邀韓立參加藍湖島圍獵，藍湖島遇怪蛾險些罹難，被韓立"
   }
  ]
 },
 {
  "id": "南歧子",
  "name": "南歧子",
  "aliases": [],
  "faction": "岣嶁山",
  "importance": "major",
  "bio": "以銅鏡診斷韓立傷勢，兽潮中為不動用法力驅逐蛇妖而保留戰力，任務完成後告辭",
  "firstChapter": 1266,
  "canonFate": "以銅鏡診斷韓立傷勢，兽潮中為不動用法力驅逐蛇妖而保留戰力，任務完成後告辭",
  "chronicle": [
   {
    "fromChapter": 1266,
    "toChapter": 1295,
    "locationId": "風元大陸",
    "realm": "筑基期",
    "status": "alive",
    "activity": "以銅鏡診斷韓立傷勢，兽潮中為不動用法力驅逐蛇妖而保留戰力，任務完成後告辭"
   }
  ]
 },
 {
  "id": "南宮屏",
  "name": "南宮屏",
  "aliases": [],
  "faction": "掩月宗",
  "importance": "major",
  "bio": "南宮婉的堂妹，在掩月宗攻防戰中與魔道結丹期修士兩敗俱傷後逃亡，被韓立誤認為南宮婉而救下，其「輪迴真訣」無意中吸走韓立全部真元，事後以靈石和材料補償。",
  "firstChapter": 352,
  "canonFate": "以中階靈石等補償韓立後離去，去追趕掩月宗撤退隊伍",
  "chronicle": [
   {
    "fromChapter": 352,
    "toChapter": 363,
    "locationId": "掩月宗",
    "realm": "結丹期",
    "status": "alive",
    "activity": "南宮婉的堂妹，在掩月宗攻防戰中與魔道結丹期修士兩敗俱傷後逃亡，被韓立誤認為南宮婉而救下，其「輪迴真訣"
   }
  ]
 },
 {
  "id": "南宮婉師姐",
  "name": "南宮婉師姐",
  "aliases": [
   "白衣女子",
   "掩月宗大長老"
  ],
  "faction": "掩月宗",
  "importance": "major",
  "bio": "持凝光鏡與令狐老祖一起被魔魂追殺，韓立出手相助；其後與令狐老祖同在魏無涯毒雲庇護下抗擊古魔本體",
  "firstChapter": 826,
  "canonFate": "持凝光鏡與令狐老祖一起被魔魂追殺，韓立出手相助；其後與令狐老祖同在魏無涯毒雲庇護下抗擊古魔本體",
  "chronicle": [
   {
    "fromChapter": 826,
    "toChapter": 855,
    "locationId": "大晉",
    "realm": "元嬰初期",
    "status": "alive",
    "activity": "持凝光鏡與令狐老祖一起被魔魂追殺，韓立出手相助；其後與令狐老祖同在魏無涯毒雲庇護下抗擊古魔本體"
   }
  ]
 },
 {
  "id": "南龍侯",
  "name": "南龍侯",
  "aliases": [],
  "faction": "天南修仙界",
  "importance": "major",
  "bio": "與魯衛英聯手破解血咒之門及小須彌金剛陣，取得圓缽時被古魔魂奪舍，軀體被魔化為雙頭四臂形態，在谷內追殺多名修士",
  "firstChapter": 826,
  "canonFate": "被古魔奪舍，肉身徹底魔化，真正意識消滅",
  "chronicle": [
   {
    "fromChapter": 826,
    "toChapter": 855,
    "locationId": "大晉",
    "realm": "元嬰中期",
    "status": "alive",
    "activity": "與魯衛英聯手破解血咒之門及小須彌金剛陣，取得圓缽時被古魔魂奪舍，軀體被魔化為雙頭四臂形態，在谷內追殺"
   }
  ]
 },
 {
  "id": "星宮白衣長老（冷臉）",
  "name": "星宮白衣長老（冷臉）",
  "aliases": [],
  "faction": "星宮",
  "importance": "major",
  "bio": "同謀操控禁制，主導強硬態度削弱正魔兩道，與慈眉長老一同後期入內殿潛行",
  "firstChapter": 454,
  "canonFate": "同謀操控禁制，主導強硬態度削弱正魔兩道，與慈眉長老一同後期入內殿潛行",
  "chronicle": [
   {
    "fromChapter": 454,
    "toChapter": 483,
    "locationId": "亂星海",
    "realm": "元嬰期",
    "status": "alive",
    "activity": "同謀操控禁制，主導強硬態度削弱正魔兩道，與慈眉長老一同後期入內殿潛行"
   }
  ]
 },
 {
  "id": "星宮白衣長老（慈眉善目）",
  "name": "星宮白衣長老（慈眉善目）",
  "aliases": [],
  "faction": "星宮",
  "importance": "major",
  "bio": "暗中操控禁制放出鐵火蟻和銀光鼠殺傷正魔兩道，事後輕描淡寫推脫責任，破解傳送禁制後悄然入內殿跟蹤",
  "firstChapter": 454,
  "canonFate": "暗中操控禁制放出鐵火蟻和銀光鼠殺傷正魔兩道，事後輕描淡寫推脫責任，破解傳送禁制後悄然入內殿跟蹤",
  "chronicle": [
   {
    "fromChapter": 454,
    "toChapter": 483,
    "locationId": "亂星海",
    "realm": "元嬰期",
    "status": "alive",
    "activity": "暗中操控禁制放出鐵火蟻和銀光鼠殺傷正魔兩道，事後輕描淡寫推脫責任，破解傳送禁制後悄然入內殿跟蹤"
   }
  ]
 },
 {
  "id": "柳姓美婦",
  "name": "柳姓美婦",
  "aliases": [
   "小極宮宮主",
   "宮主"
  ],
  "faction": "小極宮",
  "importance": "major",
  "bio": "小極宮宫主，主持抵禦群妖、撤離虛靈殿，持有玄鬼令囚禁黃泉鬼母；在主殿被冰凤壓制，臨危釋放黃泉鬼母，最終與韓立短暫結盟。",
  "firstChapter": 1096,
  "canonFate": "本弧存活，在虛靈殿中繼續與妖族周旋",
  "chronicle": [
   {
    "fromChapter": 1096,
    "toChapter": 1124,
    "locationId": "大晉",
    "realm": "元嬰後期",
    "status": "alive",
    "activity": "小極宮宫主，主持抵禦群妖、撤離虛靈殿，持有玄鬼令囚禁黃泉鬼母；在主殿被冰凤壓制，臨危釋放黃泉鬼母，最"
   }
  ]
 },
 {
  "id": "柳青",
  "name": "柳青",
  "aliases": [
   "千靈仙子"
  ],
  "faction": "天妙靈皇舊部（散修）",
  "importance": "major",
  "bio": "以傀儡化身出席萬寶大會，被葉穎勸說放棄爭奪靈皇之位，決定加入葉家太上客卿",
  "firstChapter": 1785,
  "canonFate": "以傀儡化身出席萬寶大會，被葉穎勸說放棄爭奪靈皇之位，決定加入葉家太上客卿",
  "chronicle": [
   {
    "fromChapter": 1785,
    "toChapter": 1814,
    "locationId": "魔界",
    "realm": "合體中期",
    "status": "alive",
    "activity": "以傀儡化身出席萬寶大會，被葉穎勸說放棄爭奪靈皇之位，決定加入葉家太上客卿"
   }
  ]
 },
 {
  "id": "流爍",
  "name": "流爍",
  "aliases": [
   "空魚族長"
  ],
  "faction": "空魚族",
  "importance": "major",
  "bio": "以族長聖痕感應山海珠，率全族立血誓奉韓立為主，並貢獻山海珠祭煉法訣和空間法則心得。",
  "firstChapter": 2296,
  "canonFate": "隨全族被收入山海珠洞天",
  "chronicle": [
   {
    "fromChapter": 2296,
    "toChapter": 2325,
    "locationId": "靈界",
    "realm": "合體初期",
    "status": "alive",
    "activity": "以族長聖痕感應山海珠，率全族立血誓奉韓立為主，並貢獻山海珠祭煉法訣和空間法則心得。"
   }
  ]
 },
 {
  "id": "炫燁王",
  "name": "炫燁王",
  "aliases": [],
  "faction": "邪修（雪陵山脈古墓之主）",
  "importance": "major",
  "bio": "與韓立短暫「合作」脫困，主動交出一顆非本命天尸珠；後率三尸出山大戰關寧三家",
  "firstChapter": 916,
  "canonFate": "被道門元嬰後期修士驚退，重回雪陵山脈",
  "chronicle": [
   {
    "fromChapter": 916,
    "toChapter": 945,
    "locationId": "大晉",
    "realm": "萬年尸王，元嬰中期（有古墓為倚仗可達元嬰後期水準）",
    "status": "alive",
    "activity": "與韓立短暫「合作」脫困，主動交出一顆非本命天尸珠；後率三尸出山大戰關寧三家"
   }
  ]
 },
 {
  "id": "紅拂仙姑",
  "name": "紅拂仙姑",
  "aliases": [
   "紅拂師伯"
  ],
  "faction": "黃楓谷",
  "importance": "major",
  "bio": "越國修仙界結丹期高手排名靠前，因早年情傷厭惡俊美男子，上門為徒弟董萱兒求配雙修道侶，最終讓韓立陪董萱兒赴燕家歷練。",
  "firstChapter": 232,
  "canonFate": "越國修仙界結丹期高手排名靠前，因早年情傷厭惡俊美男子，上門為徒弟董萱兒求配雙修道侶，最終讓韓立陪董萱兒赴燕家歷練。",
  "chronicle": [
   {
    "fromChapter": 232,
    "toChapter": 261,
    "locationId": "越國",
    "realm": "結丹期",
    "status": "alive",
    "activity": "越國修仙界結丹期高手排名靠前，因早年情傷厭惡俊美男子，上門為徒弟董萱兒求配雙修道侶，最終讓韓立陪董萱"
   }
  ]
 },
 {
  "id": "胥長老",
  "name": "胥長老",
  "aliases": [
   "胥長老",
   "赤鬚老者"
  ],
  "faction": "天鵬族",
  "importance": "major",
  "bio": "天鵬族長老之一，輔助韓立融合鯤鵬真血，初時反對讓外族留名天鵬之誓，後接受金悅決定。",
  "firstChapter": 1418,
  "canonFate": "天鵬族長老之一，輔助韓立融合鯤鵬真血，初時反對讓外族留名天鵬之誓，後接受金悅決定。",
  "chronicle": [
   {
    "fromChapter": 1418,
    "toChapter": 1447,
    "locationId": "天淵城",
    "realm": "合體初期",
    "status": "alive",
    "activity": "天鵬族長老之一，輔助韓立融合鯤鵬真血，初時反對讓外族留名天鵬之誓，後接受金悅決定。"
   }
  ]
 },
 {
  "id": "范靜梅",
  "name": "范靜梅",
  "aliases": [
   "范夫人",
   "范左使"
  ],
  "faction": "妙音門",
  "importance": "major",
  "bio": "妙音門左使，以媚術示好被韓立識破反制，後主導用天雷竹換取韓立為名義長老",
  "firstChapter": 394,
  "canonFate": "妙音門左使，以媚術示好被韓立識破反制，後主導用天雷竹換取韓立為名義長老",
  "chronicle": [
   {
    "fromChapter": 394,
    "toChapter": 423,
    "locationId": "亂星海",
    "realm": "結丹初期",
    "status": "alive",
    "activity": "妙音門左使，以媚術示好被韓立識破反制，後主導用天雷竹換取韓立為名義長老"
   }
  ]
 },
 {
  "id": "韋姓老者",
  "name": "韋姓老者",
  "aliases": [
   "韋老"
  ],
  "faction": "皇清觀煉器殿",
  "importance": "major",
  "bio": "皇清觀兩大煉器師之一，向韓立傳授大量先進煉器術，對韓立越發器重",
  "firstChapter": 916,
  "canonFate": "皇清觀兩大煉器師之一，向韓立傳授大量先進煉器術，對韓立越發器重",
  "chronicle": [
   {
    "fromChapter": 916,
    "toChapter": 945,
    "locationId": "大晉",
    "realm": "築基初期",
    "status": "alive",
    "activity": "皇清觀兩大煉器師之一，向韓立傳授大量先進煉器術，對韓立越發器重"
   }
  ]
 },
 {
  "id": "風嘯",
  "name": "風嘯",
  "aliases": [],
  "faction": "天鵬族",
  "importance": "major",
  "bio": "天鵬族「灵将」，率隊到黑冥半島收取供奉，回途遭赤融族截擊，被韓立解圍，認定韓立為天鵬族嫡系後裔並引薦入聖城。",
  "firstChapter": 1388,
  "canonFate": "天鵬族「灵将」，率隊到黑冥半島收取供奉，回途遭赤融族截擊，被韓立解圍，認定韓立為天鵬族嫡系後裔並引薦入聖城。",
  "chronicle": [
   {
    "fromChapter": 1388,
    "toChapter": 1417,
    "locationId": "天淵城",
    "realm": "化神中期（飛靈師）",
    "status": "alive",
    "activity": "天鵬族「灵将」，率隊到黑冥半島收取供奉，回途遭赤融族截擊，被韓立解圍，認定韓立為天鵬族嫡系後裔並引薦"
   }
  ]
 },
 {
  "id": "修羅蛛族母",
  "name": "修羅蛛族母",
  "aliases": [
   "羅道友"
  ],
  "faction": "修羅蛛族",
  "importance": "major",
  "bio": "起初強硬抵抗，後被女兒說服接受交易；以本命晶核加持法陣打撈寒潭聖物，取得鏤靈石。",
  "firstChapter": 2296,
  "canonFate": "起初強硬抵抗，後被女兒說服接受交易；以本命晶核加持法陣打撈寒潭聖物，取得鏤靈石。",
  "chronicle": [
   {
    "fromChapter": 2296,
    "toChapter": 2325,
    "locationId": "靈界",
    "realm": "大乘期",
    "status": "alive",
    "activity": "起初強硬抵抗，後被女兒說服接受交易；以本命晶核加持法陣打撈寒潭聖物，取得鏤靈石。"
   }
  ]
 },
 {
  "id": "凌天雷",
  "name": "凌天雷",
  "aliases": [
   "天星雙聖之一（男）"
  ],
  "faction": "星宮",
  "importance": "major",
  "bio": "溫青之夫，同樣元磁神光修煉失敗，寿元垂盡，在洞窟中與溫青密謀對付韓立之策。",
  "firstChapter": 1125,
  "canonFate": "溫青之夫，同樣元磁神光修煉失敗，寿元垂盡，在洞窟中與溫青密謀對付韓立之策。",
  "chronicle": [
   {
    "fromChapter": 1125,
    "toChapter": 1154,
    "locationId": "天南",
    "realm": "元嬰後期",
    "status": "alive",
    "activity": "溫青之夫，同樣元磁神光修煉失敗，寿元垂盡，在洞窟中與溫青密謀對付韓立之策。"
   }
  ]
 },
 {
  "id": "凌嘯風",
  "name": "凌嘯風",
  "aliases": [
   "天星雙聖（男）"
  ],
  "faction": "星宮",
  "importance": "major",
  "bio": "與溫青聯手設局，贈韓立三對萬里符及突破化神玉簡（多為虛法），謀算讓韓立耽誤修煉歲月。",
  "firstChapter": 1155,
  "canonFate": "與溫青聯手設局，贈韓立三對萬里符及突破化神玉簡（多為虛法），謀算讓韓立耽誤修煉歲月。",
  "chronicle": [
   {
    "fromChapter": 1155,
    "toChapter": 1184,
    "locationId": "天南",
    "realm": "元嬰後期",
    "status": "alive",
    "activity": "與溫青聯手設局，贈韓立三對萬里符及突破化神玉簡（多為虛法），謀算讓韓立耽誤修煉歲月。"
   }
  ]
 },
 {
  "id": "宮裝少婦",
  "name": "宮裝少婦",
  "aliases": [
   "筱道友",
   "筱侄女"
  ],
  "faction": "黑鳳族（妖族七大王族之一）",
  "importance": "major",
  "bio": "受寰天奇差遣監視人族，在混沌谷外指揮妖族包圍，獨自衝入谷中搶奪神血，後被上古巨人驚退。",
  "firstChapter": 1296,
  "canonFate": "受寰天奇差遣監視人族，在混沌谷外指揮妖族包圍，獨自衝入谷中搶奪神血，後被上古巨人驚退。",
  "chronicle": [
   {
    "fromChapter": 1296,
    "toChapter": 1325,
    "locationId": "風元大陸",
    "realm": "化神初期",
    "status": "alive",
    "activity": "受寰天奇差遣監視人族，在混沌谷外指揮妖族包圍，獨自衝入谷中搶奪神血，後被上古巨人驚退。"
   }
  ]
 },
 {
  "id": "師娘（李化元之妻）",
  "name": "師娘（李化元之妻）",
  "aliases": [],
  "faction": "黃楓谷",
  "importance": "major",
  "bio": "修煉頂階功法冰心訣，因韓立帶入門的天地靈藥而得救，力主補償韓立，透露董萱兒不堪名聲，從中斡旋婉拒雙修之事。",
  "firstChapter": 232,
  "canonFate": "修煉頂階功法冰心訣，因韓立帶入門的天地靈藥而得救，力主補償韓立，透露董萱兒不堪名聲，從中斡旋婉拒雙修之事。",
  "chronicle": [
   {
    "fromChapter": 232,
    "toChapter": 261,
    "locationId": "越京",
    "realm": "築基中期",
    "status": "alive",
    "activity": "修煉頂階功法冰心訣，因韓立帶入門的天地靈藥而得救，力主補償韓立，透露董萱兒不堪名聲，從中斡旋婉拒雙修"
   }
  ]
 },
 {
  "id": "徐某（天瀾大仙師）",
  "name": "徐某（天瀾大仙師）",
  "aliases": [
   "徐姓青年"
  ],
  "faction": "天瀾聖殿",
  "importance": "major",
  "bio": "與韓立聯手偷襲古魔，軀體被血刃吞噬，元嬰寄附靈犀孔雀，被韓立以叱念真雷控制，後元嬰被元刹魔像滅殺。",
  "firstChapter": 1036,
  "canonFate": "元嬰被元刹聖祖魔像滅殺，徹底隕落",
  "chronicle": [
   {
    "fromChapter": 1036,
    "toChapter": 1065,
    "locationId": "大晉",
    "realm": "元嬰後期（後期軀體被毀，元嬰寄身靈犀孔雀）",
    "status": "dead",
    "activity": "與韓立聯手偷襲古魔，軀體被血刃吞噬，元嬰寄附靈犀孔雀，被韓立以叱念真雷控制，後元嬰被元刹魔像滅殺。"
   }
  ]
 },
 {
  "id": "琉璃小獸",
  "name": "琉璃小獸",
  "aliases": [],
  "faction": "魔金山脈",
  "importance": "major",
  "bio": "魔金山脈出口埋伏主帥，以琉璃之光破去韓立和纖纤的隱匿，但最終讓二人逃脫。",
  "firstChapter": 1658,
  "canonFate": "魔金山脈出口埋伏主帥，以琉璃之光破去韓立和纖纤的隱匿，但最終讓二人逃脫。",
  "chronicle": [
   {
    "fromChapter": 1658,
    "toChapter": 1687,
    "locationId": "天淵城",
    "realm": "聖階",
    "status": "alive",
    "activity": "魔金山脈出口埋伏主帥，以琉璃之光破去韓立和纖纤的隱匿，但最終讓二人逃脫。"
   }
  ]
 },
 {
  "id": "祝姓青年",
  "name": "祝姓青年",
  "aliases": [
   "祝前輩",
   "銀發青年"
  ],
  "faction": "人族天淵城金衛",
  "importance": "major",
  "bio": "策劃並率領聯隊獵殺碧眼真蟾，夜叉圍攻中引爆雙幡奮力衝出重圍。",
  "firstChapter": 1388,
  "canonFate": "夜叉大軍圍攻中引爆雙幡逃脫，生死未明。",
  "chronicle": [
   {
    "fromChapter": 1388,
    "toChapter": 1417,
    "locationId": "天淵城",
    "realm": "煉虛中期",
    "status": "dead",
    "activity": "策劃並率領聯隊獵殺碧眼真蟾，夜叉圍攻中引爆雙幡奮力衝出重圍。"
   }
  ]
 },
 {
  "id": "秦某",
  "name": "秦某",
  "aliases": [
   "錦袍男子"
  ],
  "faction": "金玉宗",
  "importance": "major",
  "bio": "謀劃利用韓立破禁制取七葉陰血芝，事後兌現九玄明玉潭承諾；算計韩立卻被其輕易洞穿",
  "firstChapter": 1266,
  "canonFate": "謀劃利用韓立破禁制取七葉陰血芝，事後兌現九玄明玉潭承諾；算計韩立卻被其輕易洞穿",
  "chronicle": [
   {
    "fromChapter": 1266,
    "toChapter": 1295,
    "locationId": "風元大陸",
    "realm": "筑基後期假丹境界（後進阶結丹）",
    "status": "alive",
    "activity": "謀劃利用韓立破禁制取七葉陰血芝，事後兌現九玄明玉潭承諾；算計韩立卻被其輕易洞穿"
   }
  ]
 },
 {
  "id": "秦曉",
  "name": "秦曉",
  "aliases": [],
  "faction": "夜綠族",
  "importance": "major",
  "bio": "夜綠族聖子，頭生翠綠小角；攜帶族中至寶混元壺（已耗盡晶石）被黃風族追殺，獲韓立救援後依附同行，順利採得冥焰果",
  "firstChapter": 1448,
  "canonFate": "夜綠族聖子，頭生翠綠小角；攜帶族中至寶混元壺（已耗盡晶石）被黃風族追殺，獲韓立救援後依附同行，順利採得冥焰果",
  "chronicle": [
   {
    "fromChapter": 1448,
    "toChapter": 1477,
    "locationId": "天淵城",
    "realm": "中階靈將",
    "status": "alive",
    "activity": "夜綠族聖子，頭生翠綠小角；攜帶族中至寶混元壺（已耗盡晶石）被黃風族追殺，獲韓立救援後依附同行，順利採"
   }
  ]
 },
 {
  "id": "馬姓老者",
  "name": "馬姓老者",
  "aliases": [
   "馬道友"
  ],
  "faction": "浩然閣",
  "importance": "major",
  "bio": "持太玄八卦圖與窟耀斗法，雖未諳古宝真正用法，仍困住對方，最終宝物被毁元气大损，後與高瘦法士溫上師交戰。",
  "firstChapter": 716,
  "canonFate": "持太玄八卦圖與窟耀斗法，雖未諳古宝真正用法，仍困住對方，最終宝物被毁元气大损，後與高瘦法士溫上師交戰。",
  "chronicle": [
   {
    "fromChapter": 716,
    "toChapter": 745,
    "locationId": "天南",
    "realm": "元嬰初期",
    "status": "alive",
    "activity": "持太玄八卦圖與窟耀斗法，雖未諳古宝真正用法，仍困住對方，最終宝物被毁元气大损，後與高瘦法士溫上師交戰"
   }
  ]
 },
 {
  "id": "馬長老",
  "name": "馬長老",
  "aliases": [
   "馬某"
  ],
  "faction": "萬古族",
  "importance": "major",
  "bio": "萬古族長老，擅長「觀神」秘術，一眼看出韓立神念異常強大，與千機子共同主導與韓立的談判。",
  "firstChapter": 1568,
  "canonFate": "萬古族長老，擅長「觀神」秘術，一眼看出韓立神念異常強大，與千機子共同主導與韓立的談判。",
  "chronicle": [
   {
    "fromChapter": 1568,
    "toChapter": 1597,
    "locationId": "天淵城",
    "realm": "合體",
    "status": "alive",
    "activity": "萬古族長老，擅長「觀神」秘術，一眼看出韓立神念異常強大，與千機子共同主導與韓立的談判。"
   }
  ]
 },
 {
  "id": "馬師伯（馬師兄）",
  "name": "馬師伯（馬師兄）",
  "aliases": [
   "小老頭",
   "馬師兄"
  ],
  "faction": "黃楓谷",
  "importance": "major",
  "bio": "韓立在黃楓谷最信賴的長輩，向韓立揭露師祖收徒內幕及青元劍訣缺陷，韓立築基後二人以師兄弟相稱",
  "firstChapter": 202,
  "canonFate": "韓立在黃楓谷最信賴的長輩，向韓立揭露師祖收徒內幕及青元劍訣缺陷，韓立築基後二人以師兄弟相稱",
  "chronicle": [
   {
    "fromChapter": 202,
    "toChapter": 231,
    "locationId": "黃楓谷",
    "realm": "煉氣期→筑基期",
    "status": "alive",
    "activity": "韓立在黃楓谷最信賴的長輩，向韓立揭露師祖收徒內幕及青元劍訣缺陷，韓立築基後二人以師兄弟相稱"
   }
  ]
 },
 {
  "id": "馬道士",
  "name": "馬道士",
  "aliases": [
   "馬姓道士",
   "馬兄"
  ],
  "faction": "天淵城丙五十六隊",
  "importance": "major",
  "bio": "儒雅道士，元嬰後期，熟悉靈界族戰歷史，對浮黎沼澤危機多有預警。",
  "firstChapter": 1326,
  "canonFate": "儒雅道士，元嬰後期，熟悉靈界族戰歷史，對浮黎沼澤危機多有預警。",
  "chronicle": [
   {
    "fromChapter": 1326,
    "toChapter": 1355,
    "locationId": "靈界",
    "realm": "元嬰後期大成",
    "status": "alive",
    "activity": "儒雅道士，元嬰後期，熟悉靈界族戰歷史，對浮黎沼澤危機多有預警。"
   }
  ]
 },
 {
  "id": "鬼靈門門主",
  "name": "鬼靈門門主",
  "aliases": [
   "王門主"
  ],
  "faction": "鬼靈門",
  "importance": "major",
  "bio": "持有苍坤畫軸並與殘魂達成協議尋找靈缈園，以「驚魂咒」控制殘魂，帶領魏無涯等進入封印古魔空間",
  "firstChapter": 826,
  "canonFate": "在古魔本體解封時的空間裂縫爆炸中陨落",
  "chronicle": [
   {
    "fromChapter": 826,
    "toChapter": 855,
    "locationId": "大晉",
    "realm": "元嬰中期",
    "status": "alive",
    "activity": "持有苍坤畫軸並與殘魂達成協議尋找靈缈園，以「驚魂咒」控制殘魂，帶領魏無涯等進入封印古魔空間"
   }
  ]
 },
 {
  "id": "常姓美婦",
  "name": "常姓美婦",
  "aliases": [
   "常道友",
   "常師妹",
   "黑衣美婦"
  ],
  "faction": "九幽宗",
  "importance": "major",
  "bio": "富成師妹，擅長火屬性飛劍與佛門法輪（七色靈光）；以佛門宝物抵禦煞魂絲；被銀翅夜叉以隨風掩形術突襲，胸膛被穿，本體隕滅，元嬰被吞。",
  "firstChapter": 976,
  "canonFate": "本弧中被銀翅夜叉突襲殺死，元嬰亦被吞噬。",
  "chronicle": [
   {
    "fromChapter": 976,
    "toChapter": 1005,
    "locationId": "大晉",
    "realm": "元嬰中期",
    "status": "dead",
    "activity": "富成師妹，擅長火屬性飛劍與佛門法輪（七色靈光）；以佛門宝物抵禦煞魂絲；被銀翅夜叉以隨風掩形術突襲，胸"
   }
  ]
 },
 {
  "id": "常芷芳",
  "name": "常芷芳",
  "aliases": [],
  "faction": "九幽宗",
  "importance": "major",
  "bio": "九幽宗內堂長老，富姓長老師妹，與其同赴雙蝎山之約，寡言冷靜。",
  "firstChapter": 946,
  "canonFate": "九幽宗內堂長老，富姓長老師妹，與其同赴雙蝎山之約，寡言冷靜。",
  "chronicle": [
   {
    "fromChapter": 946,
    "toChapter": 975,
    "locationId": "大晉",
    "realm": "元嬰期",
    "status": "alive",
    "activity": "九幽宗內堂長老，富姓長老師妹，與其同赴雙蝎山之約，寡言冷靜。"
   }
  ]
 },
 {
  "id": "張奎",
  "name": "張奎",
  "aliases": [
   "疤面大漢",
   "張領隊"
  ],
  "faction": "天東商號",
  "importance": "major",
  "bio": "天東商號護衛隊長，救下韓立並讓其簽血咒文書，兽潮中率騎士擊殺低階虫妖",
  "firstChapter": 1266,
  "canonFate": "天東商號護衛隊長，救下韓立並讓其簽血咒文書，兽潮中率騎士擊殺低階虫妖",
  "chronicle": [
   {
    "fromChapter": 1266,
    "toChapter": 1295,
    "locationId": "風元大陸",
    "realm": "高階炼體士（虎霸訣第五層）",
    "status": "alive",
    "activity": "天東商號護衛隊長，救下韓立並讓其簽血咒文書，兽潮中率騎士擊殺低階虫妖"
   }
  ]
 },
 {
  "id": "張鐵",
  "name": "張鐵",
  "aliases": [],
  "faction": "七玄門（墨大夫門下記名弟子）",
  "importance": "major",
  "bio": "韓立入門好友，憨厚老實，與韓立同入神手谷；被墨大夫授予象甲功，苦修兩年後練成第三層，隨後不辭而別出走江湖。",
  "firstChapter": 1,
  "canonFate": "練成象甲功第三層後悄然離山，留下告辭書信，本弧後段消失",
  "chronicle": [
   {
    "fromChapter": 1,
    "toChapter": 30,
    "locationId": "七玄門",
    "realm": "象甲功第三層",
    "status": "alive",
    "activity": "韓立入門好友，憨厚老實，與韓立同入神手谷；被墨大夫授予象甲功，苦修兩年後練成第三層，隨後不辭而別出走"
   }
  ]
 },
 {
  "id": "戚夫人",
  "name": "戚夫人",
  "aliases": [],
  "faction": "化意門（九國盟）",
  "importance": "major",
  "bio": "代表化意門出席殿議，補充說明陌生法士可能是異類或邪修，建議召喚三大神師應對。",
  "firstChapter": 716,
  "canonFate": "代表化意門出席殿議，補充說明陌生法士可能是異類或邪修，建議召喚三大神師應對。",
  "chronicle": [
   {
    "fromChapter": 716,
    "toChapter": 745,
    "locationId": "天南",
    "realm": "元嬰中期",
    "status": "alive",
    "activity": "代表化意門出席殿議，補充說明陌生法士可能是異類或邪修，建議召喚三大神師應對。"
   }
  ]
 },
 {
  "id": "戚煦冰",
  "name": "戚煦冰",
  "aliases": [
   "戚長老"
  ],
  "faction": "天淵城長老會",
  "importance": "major",
  "bio": "天淵城長老，代表長老會邀請韓立加入，被婉拒；會議中透露魔劫威脅與人妖兩族應對策略。",
  "firstChapter": 1755,
  "canonFate": "天淵城長老，代表長老會邀請韓立加入，被婉拒；會議中透露魔劫威脅與人妖兩族應對策略。",
  "chronicle": [
   {
    "fromChapter": 1755,
    "toChapter": 1784,
    "locationId": "天淵城",
    "realm": "合體初期",
    "status": "alive",
    "activity": "天淵城長老，代表長老會邀請韓立加入，被婉拒；會議中透露魔劫威脅與人妖兩族應對策略。"
   }
  ]
 },
 {
  "id": "符老",
  "name": "符老",
  "aliases": [],
  "faction": "天東商號（臨時）",
  "importance": "major",
  "bio": "以玄天九龍金針術令韓立四肢暫時恢復活動，醫術令南歧子都稱道",
  "firstChapter": 1266,
  "canonFate": "以玄天九龍金針術令韓立四肢暫時恢復活動，醫術令南歧子都稱道",
  "chronicle": [
   {
    "fromChapter": 1266,
    "toChapter": 1295,
    "locationId": "風元大陸",
    "realm": "凡人（符家金針術傳人）",
    "status": "alive",
    "activity": "以玄天九龍金針術令韓立四肢暫時恢復活動，醫術令南歧子都稱道"
   }
  ]
 },
 {
  "id": "許元",
  "name": "許元",
  "aliases": [
   "許家大長老"
  ],
  "faction": "許家",
  "importance": "major",
  "bio": "許家隱藏的最高戰力，接近合體期瓶頸，協助主導血魂喚醒儀式。",
  "firstChapter": 1755,
  "canonFate": "許家隱藏的最高戰力，接近合體期瓶頸，協助主導血魂喚醒儀式。",
  "chronicle": [
   {
    "fromChapter": 1755,
    "toChapter": 1784,
    "locationId": "魔界",
    "realm": "煉虛後期大圓滿",
    "status": "alive",
    "activity": "許家隱藏的最高戰力，接近合體期瓶頸，協助主導血魂喚醒儀式。"
   }
  ]
 },
 {
  "id": "許仙子",
  "name": "許仙子",
  "aliases": [
   "許道友"
  ],
  "faction": "天淵城丙五十六隊",
  "importance": "major",
  "bio": "冰魄仙子後裔，修煉冰屬性功法、持冰晶劍，韓立贈予萬年玄玉助其重煉本命法寶。",
  "firstChapter": 1326,
  "canonFate": "冰魄仙子後裔，修煉冰屬性功法、持冰晶劍，韓立贈予萬年玄玉助其重煉本命法寶。",
  "chronicle": [
   {
    "fromChapter": 1326,
    "toChapter": 1355,
    "locationId": "風元大陸",
    "realm": "元嬰後期",
    "status": "alive",
    "activity": "冰魄仙子後裔，修煉冰屬性功法、持冰晶劍，韓立贈予萬年玄玉助其重煉本命法寶。"
   }
  ]
 },
 {
  "id": "許老怪",
  "name": "許老怪",
  "aliases": [
   "許道友"
  ],
  "faction": "雲族",
  "importance": "major",
  "bio": "雲族人，修煉火屬性功法，持有朱紅葫蘆（可化火蛟收攝天地元氣），為後輩許倫翔凝練本命雲獸事宜以炎金之精換取韓立引發天象。",
  "firstChapter": 1658,
  "canonFate": "雲族人，修煉火屬性功法，持有朱紅葫蘆（可化火蛟收攝天地元氣），為後輩許倫翔凝練本命雲獸事宜以炎金之精換取韓立引發天象。",
  "chronicle": [
   {
    "fromChapter": 1658,
    "toChapter": 1687,
    "locationId": "天淵城",
    "realm": "煉虛後期",
    "status": "alive",
    "activity": "雲族人，修煉火屬性功法，持有朱紅葫蘆（可化火蛟收攝天地元氣），為後輩許倫翔凝練本命雲獸事宜以炎金之精"
   }
  ]
 },
 {
  "id": "陸姓大漢",
  "name": "陸姓大漢",
  "aliases": [
   "禿眉大漢",
   "陸兄"
  ],
  "faction": "九國盟",
  "importance": "major",
  "bio": "黃龍山守將，器靈之宝四耳金猿棍持有者，用替身傀儡誘出奸細谷雙蒲，與窟耀正面對陣。",
  "firstChapter": 716,
  "canonFate": "黃龍山守將，器靈之宝四耳金猿棍持有者，用替身傀儡誘出奸細谷雙蒲，與窟耀正面對陣。",
  "chronicle": [
   {
    "fromChapter": 716,
    "toChapter": 745,
    "locationId": "天南",
    "realm": "元嬰初期",
    "status": "alive",
    "activity": "黃龍山守將，器靈之宝四耳金猿棍持有者，用替身傀儡誘出奸細谷雙蒲，與窟耀正面對陣。"
   }
  ]
 },
 {
  "id": "雪虹",
  "name": "雪虹",
  "aliases": [],
  "faction": "輝明師伯門下",
  "importance": "major",
  "bio": "陳巧倩師姐，在使用符寶時撤除防護，被隱形半妖化的冰妖掏心殺死。",
  "firstChapter": 292,
  "canonFate": "被冰妖掏心殺死",
  "chronicle": [
   {
    "fromChapter": 292,
    "toChapter": 321,
    "locationId": "越京",
    "realm": "筑基中期",
    "status": "dead",
    "activity": "陳巧倩師姐，在使用符寶時撤除防護，被隱形半妖化的冰妖掏心殺死。"
   }
  ]
 },
 {
  "id": "富成",
  "name": "富成",
  "aliases": [
   "富姓老者",
   "富兄"
  ],
  "faction": "九幽宗",
  "importance": "major",
  "bio": "策劃陰陽窟之行、提供紫幽珠防護，被銀翅夜叉困入煞魂絲灰繭，由韓立救出後成功煉出五粒培嬰丹，主動贈韓立三粒以求自保。",
  "firstChapter": 976,
  "canonFate": "策劃陰陽窟之行、提供紫幽珠防護，被銀翅夜叉困入煞魂絲灰繭，由韓立救出後成功煉出五粒培嬰丹，主動贈韓立三粒以求自保。",
  "chronicle": [
   {
    "fromChapter": 976,
    "toChapter": 1005,
    "locationId": "大晉",
    "realm": "元嬰中期",
    "status": "alive",
    "activity": "策劃陰陽窟之行、提供紫幽珠防護，被銀翅夜叉困入煞魂絲灰繭，由韓立救出後成功煉出五粒培嬰丹，主動贈韓立"
   }
  ]
 },
 {
  "id": "富姓長老",
  "name": "富姓長老",
  "aliases": [
   "富某"
  ],
  "faction": "九幽宗",
  "importance": "major",
  "bio": "九幽宗執法長老，以傳送陣助韓立脫逃，引路赴地下交易會，約四年後南疆相聚；藏有「培嬰丹」配方並知曉陰芝馬所在。",
  "firstChapter": 946,
  "canonFate": "九幽宗執法長老，以傳送陣助韓立脫逃，引路赴地下交易會，約四年後南疆相聚；藏有「培嬰丹」配方並知曉陰芝馬所在。",
  "chronicle": [
   {
    "fromChapter": 946,
    "toChapter": 975,
    "locationId": "大晉",
    "realm": "元嬰中期",
    "status": "alive",
    "activity": "九幽宗執法長老，以傳送陣助韓立脫逃，引路赴地下交易會，約四年後南疆相聚；藏有「培嬰丹」配方並知曉陰芝"
   }
  ]
 },
 {
  "id": "寒其子",
  "name": "寒其子",
  "aliases": [
   "寒道友"
  ],
  "faction": "外來魔尊（受白家邀請）",
  "importance": "major",
  "bio": "戴綠色鬼臉面具，修至寒神通，持十二面晶幡；與韓立、白家合力驅逐礦脈魔獸；因血牙米問題希望白家代購百顆，白家拒絕。",
  "firstChapter": 2055,
  "canonFate": "戴綠色鬼臉面具，修至寒神通，持十二面晶幡；與韓立、白家合力驅逐礦脈魔獸；因血牙米問題希望白家代購百顆，白家拒絕。",
  "chronicle": [
   {
    "fromChapter": 2055,
    "toChapter": 2084,
    "locationId": "魔界",
    "realm": "合體期（魔尊）",
    "status": "alive",
    "activity": "戴綠色鬼臉面具，修至寒神通，持十二面晶幡；與韓立、白家合力驅逐礦脈魔獸；因血牙米問題希望白家代購百顆"
   }
  ]
 },
 {
  "id": "程天坤",
  "name": "程天坤",
  "aliases": [
   "程師兄",
   "銀發老者"
  ],
  "faction": "落雲宗",
  "importance": "major",
  "bio": "感應到韓立結嬰天兆後親來邀請，成功招攬韓立加入落雲宗；外出迎敵時遭魔道埋伏，重傷而歸",
  "firstChapter": 626,
  "canonFate": "重傷，元氣大傷",
  "chronicle": [
   {
    "fromChapter": 626,
    "toChapter": 655,
    "locationId": "落雲宗",
    "realm": "元嬰初期",
    "status": "alive",
    "activity": "感應到韓立結嬰天兆後親來邀請，成功招攬韓立加入落雲宗；外出迎敵時遭魔道埋伏，重傷而歸"
   }
  ]
 },
 {
  "id": "程長老（銀髮老者）",
  "name": "程長老（銀髮老者）",
  "aliases": [
   "銀髮長老"
  ],
  "faction": "落雲宗",
  "importance": "major",
  "bio": "坐鎮落雲宗未赴交易會，事先已派人查清韓立為昔年黃楓谷弟子之來歷。",
  "firstChapter": 656,
  "canonFate": "坐鎮落雲宗未赴交易會，事先已派人查清韓立為昔年黃楓谷弟子之來歷。",
  "chronicle": [
   {
    "fromChapter": 656,
    "toChapter": 685,
    "locationId": "黃楓谷",
    "realm": "元嬰期（元氣受損）",
    "status": "alive",
    "activity": "坐鎮落雲宗未赴交易會，事先已派人查清韓立為昔年黃楓谷弟子之來歷。"
   }
  ]
 },
 {
  "id": "程師兄（銀髮老者）",
  "name": "程師兄（銀髮老者）",
  "aliases": [
   "大長老"
  ],
  "faction": "落雲宗",
  "importance": "major",
  "bio": "落雲宗大長老，對韓立頗為照拂；得知南宮婉中咒後積極協助查典籍，並聯絡溪國元嬰修士赴天柱山相助",
  "firstChapter": 776,
  "canonFate": "落雲宗大長老，對韓立頗為照拂；得知南宮婉中咒後積極協助查典籍，並聯絡溪國元嬰修士赴天柱山相助",
  "chronicle": [
   {
    "fromChapter": 776,
    "toChapter": 795,
    "locationId": "落雲宗",
    "realm": "元嬰初期",
    "status": "alive",
    "activity": "落雲宗大長老，對韓立頗為照拂；得知南宮婉中咒後積極協助查典籍，並聯絡溪國元嬰修士赴天柱山相助"
   }
  ]
 },
 {
  "id": "華蓮仙姑",
  "name": "華蓮仙姑",
  "aliases": [],
  "faction": "皇清觀",
  "importance": "major",
  "bio": "借用書院之名將韓立納入皇清觀煉器殿，以協助煉製重寶；多次往返煉器殿密室商議進度",
  "firstChapter": 916,
  "canonFate": "借用書院之名將韓立納入皇清觀煉器殿，以協助煉製重寶；多次往返煉器殿密室商議進度",
  "chronicle": [
   {
    "fromChapter": 916,
    "toChapter": 945,
    "locationId": "大晉",
    "realm": "築基後期",
    "status": "alive",
    "activity": "借用書院之名將韓立納入皇清觀煉器殿，以協助煉製重寶；多次往返煉器殿密室商議進度"
   }
  ]
 },
 {
  "id": "虛靈",
  "name": "虛靈",
  "aliases": [
   "老怪物"
  ],
  "faction": "蜉蝣族太上長老",
  "importance": "major",
  "bio": "喜怒無常、嗜斗如命，拜訪冥河之地諸大能欲收集冥河靈乳用於培育噬金虫王；最終以五瓶靈乳換取韩立五千隻成熟體噬金虫，實際意圖是用噬金虫煉製萬靈傘助飛升",
  "firstChapter": 1845,
  "canonFate": "喜怒無常、嗜斗如命，拜訪冥河之地諸大能欲收集冥河靈乳用於培育噬金虫王；最終以五瓶靈乳換取韩立五千隻成熟體噬金虫，實際意圖是用噬金虫煉製萬靈傘助飛升",
  "chronicle": [
   {
    "fromChapter": 1845,
    "toChapter": 1874,
    "locationId": "冥河之地",
    "realm": "大乘期（遠超金焰侯、青元子）",
    "status": "alive",
    "activity": "喜怒無常、嗜斗如命，拜訪冥河之地諸大能欲收集冥河靈乳用於培育噬金虫王；最終以五瓶靈乳換取韩立五千隻成"
   }
  ]
 },
 {
  "id": "越隆",
  "name": "越隆",
  "aliases": [
   "越道友",
   "三全道人（同場但為另一人）"
  ],
  "faction": "飛靈族",
  "importance": "major",
  "bio": "飛靈族老祖，九頭怪鳥化身，以三塊極元晶加後續兩塊為報酬，請韓立協助引天地之力煉製金木屬性極元晶。",
  "firstChapter": 2296,
  "canonFate": "飛靈族老祖，九頭怪鳥化身，以三塊極元晶加後續兩塊為報酬，請韓立協助引天地之力煉製金木屬性極元晶。",
  "chronicle": [
   {
    "fromChapter": 2296,
    "toChapter": 2325,
    "locationId": "靈界",
    "realm": "大乘期",
    "status": "alive",
    "activity": "飛靈族老祖，九頭怪鳥化身，以三塊極元晶加後續兩塊為報酬，請韓立協助引天地之力煉製金木屬性極元晶。"
   }
  ]
 },
 {
  "id": "馮三娘",
  "name": "馮三娘",
  "aliases": [],
  "faction": "六連殿",
  "importance": "major",
  "bio": "六連殿派出的阵法师，負責組織圍捕嬰鯉獸行動，在烏丑滅口行動中下場不明",
  "firstChapter": 364,
  "canonFate": "被烏丑以玄陰魔氣滅口（推測死亡）",
  "chronicle": [
   {
    "fromChapter": 364,
    "toChapter": 393,
    "locationId": "亂星海",
    "realm": "筑基後期",
    "status": "dead",
    "activity": "六連殿派出的阵法师，負責組織圍捕嬰鯉獸行動，在烏丑滅口行動中下場不明"
   }
  ]
 },
 {
  "id": "馮岳",
  "name": "馮岳",
  "aliases": [
   "楓岳",
   "馮枕（誤植，實為另一人）"
  ],
  "faction": "關寧馮家",
  "importance": "major",
  "bio": "冯家長房長孫，夺舍後身中苦毒，以冯家密窟鑰匙換取韓立昊元丹，被昊元丹短暫續命後仍死於苦毒。",
  "firstChapter": 886,
  "canonFate": "苦毒發作，一日後必死",
  "chronicle": [
   {
    "fromChapter": 886,
    "toChapter": 915,
    "locationId": "大晉",
    "realm": "筑基初期",
    "status": "dead",
    "activity": "冯家長房長孫，夺舍後身中苦毒，以冯家密窟鑰匙換取韓立昊元丹，被昊元丹短暫續命後仍死於苦毒。"
   }
  ]
 },
 {
  "id": "黃石公",
  "name": "黃石公",
  "aliases": [],
  "faction": "土靈族（五行靈族）",
  "importance": "major",
  "bio": "與天樱搭檔，主張多殺人妖兩族削弱對手，最終被黃粱靈君與寰天奇逼退。",
  "firstChapter": 1296,
  "canonFate": "與天樱搭檔，主張多殺人妖兩族削弱對手，最終被黃粱靈君與寰天奇逼退。",
  "chronicle": [
   {
    "fromChapter": 1296,
    "toChapter": 1325,
    "locationId": "風元大陸",
    "realm": "五行靈族中階靈將",
    "status": "alive",
    "activity": "與天樱搭檔，主張多殺人妖兩族削弱對手，最終被黃粱靈君與寰天奇逼退。"
   }
  ]
 },
 {
  "id": "黃泉鬼母",
  "name": "黃泉鬼母",
  "aliases": [],
  "faction": "無（被玄鬼令囚禁於柳姓宮主）",
  "importance": "major",
  "bio": "昔年以一己之力滅數個修仙宗門的鬼修，被小極宮宫主以玄鬼令囚禁，並以魂石驅使；本弧中被宫主強行召出，壓制車老妖化身及冰凤，揭露冰凤壓制境界之秘；後被韓立八靈尺佛光驚退。",
  "firstChapter": 1096,
  "canonFate": "本弧存活，仍被玄鬼令囚禁",
  "chronicle": [
   {
    "fromChapter": 1096,
    "toChapter": 1124,
    "locationId": "大晉",
    "realm": "元嬰後期巔峰（鬼修）",
    "status": "alive",
    "activity": "昔年以一己之力滅數個修仙宗門的鬼修，被小極宮宫主以玄鬼令囚禁，並以魂石驅使；本弧中被宫主強行召出，壓"
   }
  ]
 },
 {
  "id": "黃師叔",
  "name": "黃師叔",
  "aliases": [],
  "faction": "黃楓谷",
  "importance": "major",
  "bio": "負責帶領精英弟子撤離越國，遭魔道紅粉骷髏夫婦截殺，以風雲幡掩護眾人突圍。",
  "firstChapter": 322,
  "canonFate": "負責帶領精英弟子撤離越國，遭魔道紅粉骷髏夫婦截殺，以風雲幡掩護眾人突圍。",
  "chronicle": [
   {
    "fromChapter": 322,
    "toChapter": 351,
    "locationId": "越國",
    "realm": "結丹期",
    "status": "alive",
    "activity": "負責帶領精英弟子撤離越國，遭魔道紅粉骷髏夫婦截殺，以風雲幡掩護眾人突圍。"
   }
  ]
 },
 {
  "id": "黃粱靈君",
  "name": "黃粱靈君",
  "aliases": [
   "呂前輩",
   "黃粱道友"
  ],
  "faction": "落日城（人族）",
  "importance": "major",
  "bio": "落日城第一修士，與寰天奇聯手擊殺獨目上古巨人，追殺奪走神血的韓立未果，後與寰天奇相約前往蠻荒世界。",
  "firstChapter": 1296,
  "canonFate": "落日城第一修士，與寰天奇聯手擊殺獨目上古巨人，追殺奪走神血的韓立未果，後與寰天奇相約前往蠻荒世界。",
  "chronicle": [
   {
    "fromChapter": 1296,
    "toChapter": 1325,
    "locationId": "風元大陸",
    "realm": "煉虛初期",
    "status": "alive",
    "activity": "落日城第一修士，與寰天奇聯手擊殺獨目上古巨人，追殺奪走神血的韓立未果，後與寰天奇相約前往蠻荒世界。"
   }
  ]
 },
 {
  "id": "黑淵鱷",
  "name": "黑淵鱷",
  "aliases": [
   "醜陋大漢"
  ],
  "faction": "魔金山脈（原冥羅坐騎）",
  "importance": "major",
  "bio": "本弧剛進階聖階，被寶花聖祖找到後奉命隨其一同外出。",
  "firstChapter": 1658,
  "canonFate": "本弧剛進階聖階，被寶花聖祖找到後奉命隨其一同外出。",
  "chronicle": [
   {
    "fromChapter": 1658,
    "toChapter": 1687,
    "locationId": "天淵城",
    "realm": "聖階（剛進階）",
    "status": "alive",
    "activity": "本弧剛進階聖階，被寶花聖祖找到後奉命隨其一同外出。"
   }
  ]
 },
 {
  "id": "黑袍婦人",
  "name": "黑袍婦人",
  "aliases": [],
  "faction": "不明",
  "importance": "major",
  "bio": "持天機槍與黃泉穢焰，與古樸老者同潛入深淵，動用壓箱神通黃泉穢焰仍無法毀去骸骨，最終被時間法則倒退至骸骨腳下遭吞噬。",
  "firstChapter": 2236,
  "canonFate": "被螟虫之母骸骨吞噬，隕落",
  "chronicle": [
   {
    "fromChapter": 2236,
    "toChapter": 2265,
    "locationId": "靈界",
    "realm": "大乘期",
    "status": "dead",
    "activity": "持天機槍與黃泉穢焰，與古樸老者同潛入深淵，動用壓箱神通黃泉穢焰仍無法毀去骸骨，最終被時間法則倒退至骸"
   }
  ]
 },
 {
  "id": "塗咬",
  "name": "塗咬",
  "aliases": [
   "人面蛟"
  ],
  "faction": "青蛟殿友好勢力",
  "importance": "major",
  "bio": "海上被鎮海宮三長老圍攻，韓立出手相救並治癒其父女，事後協助尋找小靈天海底入口。",
  "firstChapter": 2386,
  "canonFate": "海上被鎮海宮三長老圍攻，韓立出手相救並治癒其父女，事後協助尋找小靈天海底入口。",
  "chronicle": [
   {
    "fromChapter": 2386,
    "toChapter": 2415,
    "locationId": "靈界",
    "realm": "大乘期（戰前神通受損）",
    "status": "alive",
    "activity": "海上被鎮海宮三長老圍攻，韓立出手相救並治癒其父女，事後協助尋找小靈天海底入口。"
   }
  ]
 },
 {
  "id": "粲苦",
  "name": "粲苦",
  "aliases": [
   "粲苦閣主"
  ],
  "faction": "天機閣",
  "importance": "major",
  "bio": "天機阁主，精明圓滑，被韓立施壓後答應以武力決勝為條件交換芥子空間秘術；最終如約交出玉簡。",
  "firstChapter": 1215,
  "canonFate": "天機阁主，精明圓滑，被韓立施壓後答應以武力決勝為條件交換芥子空間秘術；最終如約交出玉簡。",
  "chronicle": [
   {
    "fromChapter": 1215,
    "toChapter": 1244,
    "locationId": "天南",
    "realm": "元嬰中期",
    "status": "alive",
    "activity": "天機阁主，精明圓滑，被韓立施壓後答應以武力決勝為條件交換芥子空間秘術；最終如約交出玉簡。"
   }
  ]
 },
 {
  "id": "萬小山",
  "name": "萬小山",
  "aliases": [
   "小山"
  ],
  "faction": "枯崖山萬家",
  "importance": "major",
  "bio": "修真家族萬家少年，偷跑出家來太南谷參加小會，向韓立詳述修仙境界與靈根分類，是韓立進入修仙界的第一位嚮導",
  "firstChapter": 100,
  "canonFate": "修真家族萬家少年，偷跑出家來太南谷參加小會，向韓立詳述修仙境界與靈根分類，是韓立進入修仙界的第一位嚮導",
  "chronicle": [
   {
    "fromChapter": 100,
    "toChapter": 129,
    "locationId": "仙界",
    "realm": "煉氣期（法力略遜於韓立）",
    "status": "alive",
    "activity": "修真家族萬家少年，偷跑出家來太南谷參加小會，向韓立詳述修仙境界與靈根分類，是韓立進入修仙界的第一位嚮"
   }
  ]
 },
 {
  "id": "葉七叔（大頭怪人）",
  "name": "葉七叔（大頭怪人）",
  "aliases": [
   "七叔",
   "七弟",
   "怪人"
  ],
  "faction": "葉家",
  "importance": "major",
  "bio": "葉家隱秘長老，死而復生，修煉血車真訣，感應力極強；協助葉家大長老進入昆吾山，對銀翅夜叉多有警惕；提出各路分兵之策。",
  "firstChapter": 976,
  "canonFate": "葉家隱秘長老，死而復生，修煉血車真訣，感應力極強；協助葉家大長老進入昆吾山，對銀翅夜叉多有警惕；提出各路分兵之策。",
  "chronicle": [
   {
    "fromChapter": 976,
    "toChapter": 1005,
    "locationId": "昆吾山",
    "realm": "元嬰後期",
    "status": "alive",
    "activity": "葉家隱秘長老，死而復生，修煉血車真訣，感應力極強；協助葉家大長老進入昆吾山，對銀翅夜叉多有警惕；提出"
   }
  ]
 },
 {
  "id": "葉姓長老",
  "name": "葉姓長老",
  "aliases": [
   "灰發老者",
   "葉長老",
   "監察長老"
  ],
  "faction": "小極宮",
  "importance": "major",
  "bio": "小極宮監察長老，持有仿製兩氣瓶（两气瓶）靈寶，與白瑤怡聯手在大殿入口阻截蒼背青狼老翁。",
  "firstChapter": 1096,
  "canonFate": "本弧存活",
  "chronicle": [
   {
    "fromChapter": 1096,
    "toChapter": 1124,
    "locationId": "大晉",
    "realm": "元嬰中期",
    "status": "alive",
    "activity": "小極宮監察長老，持有仿製兩氣瓶（两气瓶）靈寶，與白瑤怡聯手在大殿入口阻截蒼背青狼老翁。"
   }
  ]
 },
 {
  "id": "葉家大頭怪人",
  "name": "葉家大頭怪人",
  "aliases": [
   "七叔"
  ],
  "faction": "葉家（叛)",
  "importance": "major",
  "bio": "與元刹聖祖勾結，試圖取走八靈尺，一臂被珑梦斬去，後多次被制；在第九層下落不明。",
  "firstChapter": 1036,
  "canonFate": "與元刹聖祖勾結，試圖取走八靈尺，一臂被珑梦斬去，後多次被制；在第九層下落不明。",
  "chronicle": [
   {
    "fromChapter": 1036,
    "toChapter": 1065,
    "locationId": "大晉",
    "realm": "元嬰後期",
    "status": "alive",
    "activity": "與元刹聖祖勾結，試圖取走八靈尺，一臂被珑梦斬去，後多次被制；在第九層下落不明。"
   }
  ]
 },
 {
  "id": "葉家老祖",
  "name": "葉家老祖",
  "aliases": [
   "羽衣少女",
   "葉道友",
   "葉仙子"
  ],
  "faction": "葉家（真靈世家）",
  "importance": "major",
  "bio": "在山谷與韓立秘密會談，請求庇護叶家弟子入圣岛，以跟隨韓立為代價；透露叶家先祖密典中有關魔族三大始祖的記載，與眾人同進魔界。",
  "firstChapter": 1995,
  "canonFate": "在山谷與韓立秘密會談，請求庇護叶家弟子入圣岛，以跟隨韓立為代價；透露叶家先祖密典中有關魔族三大始祖的記載，與眾人同進魔界。",
  "chronicle": [
   {
    "fromChapter": 1995,
    "toChapter": 2024,
    "locationId": "魔界",
    "realm": "合體後期",
    "status": "alive",
    "activity": "在山谷與韓立秘密會談，請求庇護叶家弟子入圣岛，以跟隨韓立為代價；透露叶家先祖密典中有關魔族三大始祖的"
   }
  ]
 },
 {
  "id": "雷元",
  "name": "雷元",
  "aliases": [
   "雷大人"
  ],
  "faction": "赫連商盟（雷鳴大陸負責人）",
  "importance": "major",
  "bio": "商盟雷鳴大陸負責人，與韓立等人同赴強者之戰，身穿銀甲。",
  "firstChapter": 2356,
  "canonFate": "商盟雷鳴大陸負責人，與韓立等人同赴強者之戰，身穿銀甲。",
  "chronicle": [
   {
    "fromChapter": 2356,
    "toChapter": 2385,
    "locationId": "靈界",
    "realm": "大乘期",
    "status": "alive",
    "activity": "商盟雷鳴大陸負責人，與韓立等人同赴強者之戰，身穿銀甲。"
   }
  ]
 },
 {
  "id": "精靈少女",
  "name": "精靈少女",
  "aliases": [],
  "faction": "掩月宗",
  "importance": "major",
  "bio": "掩月宗領隊（被稱「師祖」），外貌如十五六歲精靈，手持法寶粉紅圓環，引領全體掩月宗弟子擊殺頂階妖獸碧水鱷採集珍稀靈藥，曾暗中觀察韓立並評其長短。",
  "firstChapter": 172,
  "canonFate": "掩月宗領隊（被稱「師祖」），外貌如十五六歲精靈，手持法寶粉紅圓環，引領全體掩月宗弟子擊殺頂階妖獸碧水鱷採集珍稀靈藥，曾暗中觀察韓立並評其長短。",
  "chronicle": [
   {
    "fromChapter": 172,
    "toChapter": 201,
    "locationId": "掩月宗",
    "realm": "結丹期（偽裝稚齡）",
    "status": "alive",
    "activity": "掩月宗領隊（被稱「師祖」），外貌如十五六歲精靈，手持法寶粉紅圓環，引領全體掩月宗弟子擊殺頂階妖獸碧水"
   }
  ]
 },
 {
  "id": "聞姓修士",
  "name": "聞姓修士",
  "aliases": [],
  "faction": "天淵城飛升修士群體",
  "importance": "major",
  "bio": "與趙無歸共同主持聚會，傳達雷羅長老指令，說明任務安排細節及滅塵丹禁制",
  "firstChapter": 1356,
  "canonFate": "與趙無歸共同主持聚會，傳達雷羅長老指令，說明任務安排細節及滅塵丹禁制",
  "chronicle": [
   {
    "fromChapter": 1356,
    "toChapter": 1357,
    "locationId": "風元大陸",
    "realm": "煉虛期",
    "status": "alive",
    "activity": "與趙無歸共同主持聚會，傳達雷羅長老指令，說明任務安排細節及滅塵丹禁制"
   }
  ]
 },
 {
  "id": "蒙山五友大哥（黑臉老者）",
  "name": "蒙山五友大哥（黑臉老者）",
  "aliases": [
   "大哥"
  ],
  "faction": "蒙山散修（後效命韓立）",
  "importance": "major",
  "bio": "蒙山五友領袖，沉穩老辣，被韓立解除血咒後暫時效命，審訊王總管得關鍵情報，臨別向韓立暗示對五妹之死心知肚明。",
  "firstChapter": 292,
  "canonFate": "蒙山五友領袖，沉穩老辣，被韓立解除血咒後暫時效命，審訊王總管得關鍵情報，臨別向韓立暗示對五妹之死心知肚明。",
  "chronicle": [
   {
    "fromChapter": 292,
    "toChapter": 321,
    "locationId": "越京",
    "realm": "煉氣期",
    "status": "alive",
    "activity": "蒙山五友領袖，沉穩老辣，被韓立解除血咒後暫時效命，審訊王總管得關鍵情報，臨別向韓立暗示對五妹之死心知"
   }
  ]
 },
 {
  "id": "蒙山五友老二（李姓男）",
  "name": "蒙山五友老二（李姓男）",
  "aliases": [
   "二哥",
   "老二"
  ],
  "faction": "蒙山散修（後效命韓立）",
  "importance": "major",
  "bio": "蒙山五友二號，其道侶（三妹）懷有身孕仍遭黑煞教扣押，因此一度故意激怒韓立欲借其手殺死眾人，後被大哥開解。",
  "firstChapter": 292,
  "canonFate": "蒙山五友二號，其道侶（三妹）懷有身孕仍遭黑煞教扣押，因此一度故意激怒韓立欲借其手殺死眾人，後被大哥開解。",
  "chronicle": [
   {
    "fromChapter": 292,
    "toChapter": 321,
    "locationId": "越京",
    "realm": "煉氣期",
    "status": "alive",
    "activity": "蒙山五友二號，其道侶（三妹）懷有身孕仍遭黑煞教扣押，因此一度故意激怒韓立欲借其手殺死眾人，後被大哥開"
   }
  ]
 },
 {
  "id": "蒙山五友老四（青年男）",
  "name": "蒙山五友老四（青年男）",
  "aliases": [
   "四弟"
  ],
  "faction": "蒙山散修（後效命韓立）",
  "importance": "major",
  "bio": "十餘年前曾在嘉元城酒樓見過當時煉氣期七八層的韓立，本弧中認出其真身，對五妹有一片痴情但五妹叛變後仍放其離走。",
  "firstChapter": 292,
  "canonFate": "十餘年前曾在嘉元城酒樓見過當時煉氣期七八層的韓立，本弧中認出其真身，對五妹有一片痴情但五妹叛變後仍放其離走。",
  "chronicle": [
   {
    "fromChapter": 292,
    "toChapter": 321,
    "locationId": "越京",
    "realm": "煉氣期",
    "status": "alive",
    "activity": "十餘年前曾在嘉元城酒樓見過當時煉氣期七八層的韓立，本弧中認出其真身，對五妹有一片痴情但五妹叛變後仍放"
   }
  ]
 },
 {
  "id": "蒼背青狼",
  "name": "蒼背青狼",
  "aliases": [
   "老翁",
   "青道友"
  ],
  "faction": "萬妖谷",
  "importance": "major",
  "bio": "萬妖谷十級妖兽，在大殿入口以青色雷網和乌黑铁杵同時壓制小極宮白瑤怡及葉姓長老二人。",
  "firstChapter": 1096,
  "canonFate": "本弧存活",
  "chronicle": [
   {
    "fromChapter": 1096,
    "toChapter": 1124,
    "locationId": "大晉",
    "realm": "十級化形妖兽",
    "status": "alive",
    "activity": "萬妖谷十級妖兽，在大殿入口以青色雷網和乌黑铁杵同時壓制小極宮白瑤怡及葉姓長老二人。"
   }
  ]
 },
 {
  "id": "趙城主",
  "name": "趙城主",
  "aliases": [
   "紫袍大漢"
  ],
  "faction": "安遠城",
  "importance": "major",
  "bio": "安遠城城主，明知黛兒有黑凤族血脈仍竭力保護；被黑凤族妖女搜魂後屍體被傀儡化利用",
  "firstChapter": 1266,
  "canonFate": "被黑凤族宮裝妖女搜魂致死，屍體被傀儡化後又被妖女以黑色火焰焚毀",
  "chronicle": [
   {
    "fromChapter": 1266,
    "toChapter": 1295,
    "locationId": "風元大陸",
    "realm": "高階炼體士（不下筑基後期）",
    "status": "dead",
    "activity": "安遠城城主，明知黛兒有黑凤族血脈仍竭力保護；被黑凤族妖女搜魂後屍體被傀儡化利用"
   }
  ]
 },
 {
  "id": "銀衫女子（冰鳳）",
  "name": "銀衫女子（冰鳳）",
  "aliases": [
   "鳳仙子",
   "冰鳳"
  ],
  "faction": "冰鳳一族",
  "importance": "major",
  "bio": "與韓立同困虛天殿，協助找出控制法陣；脫困後因憋屈一口怒氣殺滅混老魔，隨後離去返大晉。",
  "firstChapter": 1125,
  "canonFate": "與韓立同困虛天殿，協助找出控制法陣；脫困後因憋屈一口怒氣殺滅混老魔，隨後離去返大晉。",
  "chronicle": [
   {
    "fromChapter": 1125,
    "toChapter": 1154,
    "locationId": "虛天殿",
    "realm": "准化神（後期大成、尚未進階化神）",
    "status": "alive",
    "activity": "與韓立同困虛天殿，協助找出控制法陣；脫困後因憋屈一口怒氣殺滅混老魔，隨後離去返大晉。"
   }
  ]
 },
 {
  "id": "銅鴉老人",
  "name": "銅鴉老人",
  "aliases": [
   "四禽之一",
   "銅鴉老人"
  ],
  "faction": "天鴉界",
  "importance": "major",
  "bio": "領天鴉界九名大乘赴聚會，宣稱只為救後人，被宝花以晶翎說服配合，入地宮後帶天鴉界人去元魇被困處",
  "firstChapter": 2206,
  "canonFate": "領天鴉界九名大乘赴聚會，宣稱只為救後人，被宝花以晶翎說服配合，入地宮後帶天鴉界人去元魇被困處",
  "chronicle": [
   {
    "fromChapter": 2206,
    "toChapter": 2235,
    "locationId": "靈界",
    "realm": "大乘期（各界頂尖）",
    "status": "alive",
    "activity": "領天鴉界九名大乘赴聚會，宣稱只為救後人，被宝花以晶翎說服配合，入地宮後帶天鴉界人去元魇被困處"
   }
  ]
 },
 {
  "id": "劉氏",
  "name": "劉氏",
  "aliases": [
   "三師母",
   "三夫人"
  ],
  "faction": "驚蛟會",
  "importance": "major",
  "bio": "墨大夫三夫人，練有「天狐大法」，妖媚無雙，韓立以長春功抵禦其迷魂之術",
  "firstChapter": 100,
  "canonFate": "墨大夫三夫人，練有「天狐大法」，妖媚無雙，韓立以長春功抵禦其迷魂之術",
  "chronicle": [
   {
    "fromChapter": 100,
    "toChapter": 129,
    "locationId": "黃楓谷",
    "realm": "凡人",
    "status": "alive",
    "activity": "墨大夫三夫人，練有「天狐大法」，妖媚無雙，韓立以長春功抵禦其迷魂之術"
   }
  ]
 },
 {
  "id": "璇璣子",
  "name": "璇璣子",
  "aliases": [],
  "faction": "天極門",
  "importance": "major",
  "bio": "南陇侯生死之交，以鲁卫英長老名義接近韓立，充當中間人促成會面，介紹坠魔谷内火蟾古獸情況。",
  "firstChapter": 716,
  "canonFate": "南陇侯生死之交，以鲁卫英長老名義接近韓立，充當中間人促成會面，介紹坠魔谷内火蟾古獸情況。",
  "chronicle": [
   {
    "fromChapter": 716,
    "toChapter": 745,
    "locationId": "天南",
    "realm": "元嬰期",
    "status": "alive",
    "activity": "南陇侯生死之交，以鲁卫英長老名義接近韓立，充當中間人促成會面，介紹坠魔谷内火蟾古獸情況。"
   }
  ]
 },
 {
  "id": "範夫人",
  "name": "範夫人",
  "aliases": [
   "範左使"
  ],
  "faction": "妙音門（門主）",
  "importance": "major",
  "bio": "以幻夢石換韓立除掉雲天嘯，以氣息辨人天賦識破韓立易容，協助完成傳送陣，韓立傳送後被留下面對裂風獸。",
  "firstChapter": 544,
  "canonFate": "以幻夢石換韓立除掉雲天嘯，以氣息辨人天賦識破韓立易容，協助完成傳送陣，韓立傳送後被留下面對裂風獸。",
  "chronicle": [
   {
    "fromChapter": 544,
    "toChapter": 573,
    "locationId": "亂星海",
    "realm": "筑基後期",
    "status": "alive",
    "activity": "以幻夢石換韓立除掉雲天嘯，以氣息辨人天賦識破韓立易容，協助完成傳送陣，韓立傳送後被留下面對裂風獸。"
   }
  ]
 },
 {
  "id": "衛某",
  "name": "衛某",
  "aliases": [
   "披髮修士",
   "天煞真君（附體）",
   "衛師兄"
  ],
  "faction": "落雲宗（真實：天煞宗臥底）",
  "importance": "major",
  "bio": "天煞宗奸細，在落雲宗禁地守護靈眼之樹逾百年，因感念雲長老之恩最終拒絕移走靈樹，天煞真君附體後助杜東等人奪取醇液逃脫，之後被蓝前輩生擒",
  "firstChapter": 626,
  "canonFate": "附身時效結束後被蓝前輩生擒，下落不明",
  "chronicle": [
   {
    "fromChapter": 626,
    "toChapter": 655,
    "locationId": "落雲宗",
    "realm": "結丹後期（假嬰境界），被天煞真君附體",
    "status": "alive",
    "activity": "天煞宗奸細，在落雲宗禁地守護靈眼之樹逾百年，因感念雲長老之恩最終拒絕移走靈樹，天煞真君附體後助杜東等"
   }
  ]
 },
 {
  "id": "魯大先生",
  "name": "魯大先生",
  "aliases": [],
  "faction": "白露書院",
  "importance": "major",
  "bio": "與嚴先生有密謀：接受嚴先生以身相助修成「噬真合元訣」，換取幫其殺黑陽宗牛天德以報滅族之仇",
  "firstChapter": 916,
  "canonFate": "與嚴先生有密謀：接受嚴先生以身相助修成「噬真合元訣」，換取幫其殺黑陽宗牛天德以報滅族之仇",
  "chronicle": [
   {
    "fromChapter": 916,
    "toChapter": 945,
    "locationId": "大晉",
    "realm": "結丹初期",
    "status": "alive",
    "activity": "與嚴先生有密謀：接受嚴先生以身相助修成「噬真合元訣」，換取幫其殺黑陽宗牛天德以報滅族之仇"
   }
  ]
 },
 {
  "id": "儒生",
  "name": "儒生",
  "aliases": [],
  "faction": "七玄門",
  "importance": "major",
  "bio": "以銀針、飛刀等各式暗器對抗金光上人，牽制其劍符；趁灰衣人短暫解圍後飄身撲向金光上人，卻遭後者以飛剑偷斬。",
  "firstChapter": 91,
  "canonFate": "死於金光上人劍符偷斬，頭顱被斬。",
  "chronicle": [
   {
    "fromChapter": 91,
    "toChapter": 99,
    "locationId": "七玄門",
    "realm": "七玄門三大高手之一（暗器奇手）",
    "status": "dead",
    "activity": "以銀針、飛刀等各式暗器對抗金光上人，牽制其劍符；趁灰衣人短暫解圍後飄身撲向金光上人，卻遭後者以飛剑偷"
   }
  ]
 },
 {
  "id": "儒衫老者（青易居士）",
  "name": "儒衫老者（青易居士）",
  "aliases": [
   "青易居士"
  ],
  "faction": "正道",
  "importance": "major",
  "bio": "以青色光絲攻伐，感應到星宮長老異常，追奪補天丹失敗，後搜尋虛天鼎。",
  "firstChapter": 484,
  "canonFate": "以青色光絲攻伐，感應到星宮長老異常，追奪補天丹失敗，後搜尋虛天鼎。",
  "chronicle": [
   {
    "fromChapter": 484,
    "toChapter": 513,
    "locationId": "亂星海",
    "realm": "元嬰期",
    "status": "alive",
    "activity": "以青色光絲攻伐，感應到星宮長老異常，追奪補天丹失敗，後搜尋虛天鼎。"
   }
  ]
 },
 {
  "id": "寰天奇",
  "name": "寰天奇",
  "aliases": [
   "寰前輩",
   "寰蒼奇"
  ],
  "faction": "瓊鼠族（妖族長老）",
  "importance": "major",
  "bio": "以幻焰蛾竊聽人族密謀，與黃粱靈君聯手對抗器靈族旭天，並於激戰後追殺韓立未果。",
  "firstChapter": 1296,
  "canonFate": "以幻焰蛾竊聽人族密謀，與黃粱靈君聯手對抗器靈族旭天，並於激戰後追殺韓立未果。",
  "chronicle": [
   {
    "fromChapter": 1296,
    "toChapter": 1325,
    "locationId": "風元大陸",
    "realm": "煉虛初期（五行之體大成，入煉虛已萬餘年）",
    "status": "alive",
    "activity": "以幻焰蛾竊聽人族密謀，與黃粱靈君聯手對抗器靈族旭天，並於激戰後追殺韓立未果。"
   }
  ]
 },
 {
  "id": "燕家老祖",
  "name": "燕家老祖",
  "aliases": [],
  "faction": "燕家",
  "importance": "major",
  "bio": "紅發老者，燕家最高掌權人，得知魔道入侵消息後採納燕玄夜建議，歸附鬼靈門並與王蟬簽訂生死咒，決定秘密撤離燕翎堡。",
  "firstChapter": 232,
  "canonFate": "紅發老者，燕家最高掌權人，得知魔道入侵消息後採納燕玄夜建議，歸附鬼靈門並與王蟬簽訂生死咒，決定秘密撤離燕翎堡。",
  "chronicle": [
   {
    "fromChapter": 232,
    "toChapter": 261,
    "locationId": "越京",
    "realm": "結丹期",
    "status": "alive",
    "activity": "紅發老者，燕家最高掌權人，得知魔道入侵消息後採納燕玄夜建議，歸附鬼靈門並與王蟬簽訂生死咒，決定秘密撤"
   }
  ]
 },
 {
  "id": "鍾衛娘",
  "name": "鍾衛娘",
  "aliases": [
   "七師姐"
  ],
  "faction": "黃楓谷",
  "importance": "major",
  "bio": "韓立七師姐，十六歲筑基，對三師兄劉靖懷有深情；赴南烏城邀請陳巧倩等援軍。",
  "firstChapter": 292,
  "canonFate": "韓立七師姐，十六歲筑基，對三師兄劉靖懷有深情；赴南烏城邀請陳巧倩等援軍。",
  "chronicle": [
   {
    "fromChapter": 292,
    "toChapter": 321,
    "locationId": "越京",
    "realm": "筑基中期（接近）",
    "status": "alive",
    "activity": "韓立七師姐，十六歲筑基，對三師兄劉靖懷有深情；赴南烏城邀請陳巧倩等援軍。"
   }
  ]
 },
 {
  "id": "韓胖子",
  "name": "韓胖子",
  "aliases": [
   "三叔"
  ],
  "faction": "七玄門外門",
  "importance": "major",
  "bio": "韓立三叔，青牛鎮春香酒樓掌柜，舉薦韓立參加入門考驗，並賄賂王護法護送韓立上山。",
  "firstChapter": 1,
  "canonFate": "韓立三叔，青牛鎮春香酒樓掌柜，舉薦韓立參加入門考驗，並賄賂王護法護送韓立上山。",
  "chronicle": [
   {
    "fromChapter": 1,
    "toChapter": 30,
    "locationId": "青牛鎮",
    "realm": "七玄門外門弟子",
    "status": "alive",
    "activity": "韓立三叔，青牛鎮春香酒樓掌柜，舉薦韓立參加入門考驗，並賄賂王護法護送韓立上山。"
   }
  ]
 },
 {
  "id": "藍姓童子",
  "name": "藍姓童子",
  "aliases": [
   "火龍童子",
   "藍前輩",
   "藍師叔"
  ],
  "faction": "古劍門（三派天道盟）",
  "importance": "major",
  "bio": "主持三派禁地，以「通明靈犀」識破白姓儒生身份，以劍氣化絲瞬間制敵，設下甕中捉鱉之局，最終生擒附體天煞真君後的衛某",
  "firstChapter": 626,
  "canonFate": "主持三派禁地，以「通明靈犀」識破白姓儒生身份，以劍氣化絲瞬間制敵，設下甕中捉鱉之局，最終生擒附體天煞真君後的衛某",
  "chronicle": [
   {
    "fromChapter": 626,
    "toChapter": 655,
    "locationId": "天南",
    "realm": "元嬰初期",
    "status": "alive",
    "activity": "主持三派禁地，以「通明靈犀」識破白姓儒生身份，以劍氣化絲瞬間制敵，設下甕中捉鱉之局，最終生擒附體天煞"
   }
  ]
 },
 {
  "id": "藍城主",
  "name": "藍城主",
  "aliases": [
   "藍兄"
  ],
  "faction": "落日城城主（人族）",
  "importance": "major",
  "bio": "落日城城主，受聖皇宮命令組織人馬前往混沌谷接應靈族叛逆，察覺上古巨人後率先逃脫，後與宮裝少婦在炙光潭旁對峙。",
  "firstChapter": 1296,
  "canonFate": "落日城城主，受聖皇宮命令組織人馬前往混沌谷接應靈族叛逆，察覺上古巨人後率先逃脫，後與宮裝少婦在炙光潭旁對峙。",
  "chronicle": [
   {
    "fromChapter": 1296,
    "toChapter": 1325,
    "locationId": "風元大陸",
    "realm": "化神中期",
    "status": "alive",
    "activity": "落日城城主，受聖皇宮命令組織人馬前往混沌谷接應靈族叛逆，察覺上古巨人後率先逃脫，後與宮裝少婦在炙光潭"
   }
  ]
 },
 {
  "id": "藍藥",
  "name": "藍藥",
  "aliases": [
   "藍藥"
  ],
  "faction": "空魚族",
  "importance": "major",
  "bio": "流爍孫女，煉丹悟性極高，被韓立收為弟子，留在山海珠洞天修煉。",
  "firstChapter": 2296,
  "canonFate": "流爍孫女，煉丹悟性極高，被韓立收為弟子，留在山海珠洞天修煉。",
  "chronicle": [
   {
    "fromChapter": 2296,
    "toChapter": 2325,
    "locationId": "靈界",
    "realm": "低階（具煉丹天賦）",
    "status": "alive",
    "activity": "流爍孫女，煉丹悟性極高，被韓立收為弟子，留在山海珠洞天修煉。"
   }
  ]
 },
 {
  "id": "嚴先生",
  "name": "嚴先生",
  "aliases": [
   "嚴堯"
  ],
  "faction": "雍華書院",
  "importance": "major",
  "bio": "引薦韓立入皇清觀，並與鲁大先生祕密交換：以身助鲁大先生修成噬真合元訣，換取報滅族之仇",
  "firstChapter": 916,
  "canonFate": "弧末「因病過世」，疑為修炼噬真合元訣所犧牲",
  "chronicle": [
   {
    "fromChapter": 916,
    "toChapter": 945,
    "locationId": "大晉",
    "realm": "無法力凡人（保有浩然之氣）",
    "status": "alive",
    "activity": "引薦韓立入皇清觀，並與鲁大先生祕密交換：以身助鲁大先生修成噬真合元訣，換取報滅族之仇"
   }
  ]
 },
 {
  "id": "瓏夢",
  "name": "瓏夢",
  "aliases": [
   "玲瓏（融合後）",
   "花天奇（附身）"
  ],
  "faction": "靈界銀月天狼族",
  "importance": "major",
  "bio": "以附身花天奇的形式出現，欲奪回原本銀狼妖體；獲悉噬金蟲計劃後與銀月融合成玲珑，持逆星盤力戰元刹神念魔像，以聯絡萬年尸熊切斷魔氣供應。",
  "firstChapter": 1036,
  "canonFate": "與雪玲（銀月）元神融合為完整的玲珑",
  "chronicle": [
   {
    "fromChapter": 1036,
    "toChapter": 1065,
    "locationId": "大晉",
    "realm": "化神後期（靈界妖妃，軀體被佔）",
    "status": "alive",
    "activity": "以附身花天奇的形式出現，欲奪回原本銀狼妖體；獲悉噬金蟲計劃後與銀月融合成玲珑，持逆星盤力戰元刹神念魔"
   }
  ]
 },
 {
  "id": "鐘姓長老（鐘長老）",
  "name": "鐘姓長老（鐘長老）",
  "aliases": [
   "鐘長老"
  ],
  "faction": "鬼靈門",
  "importance": "major",
  "bio": "與王天勝分兵，帶王蟬等在外谷密林尋找某棵標記大樹（與靈燭果相關），後以双墨蛟和碧绿巨网斬殺壁虎古獸，帶眾弟子潛入冰缝通道進入內谷。",
  "firstChapter": 796,
  "canonFate": "與王天勝分兵，帶王蟬等在外谷密林尋找某棵標記大樹（與靈燭果相關），後以双墨蛟和碧绿巨网斬殺壁虎古獸，帶眾弟子潛入冰缝通道進入內谷。",
  "chronicle": [
   {
    "fromChapter": 796,
    "toChapter": 825,
    "locationId": "大晉",
    "realm": "元嬰中期",
    "status": "alive",
    "activity": "與王天勝分兵，帶王蟬等在外谷密林尋找某棵標記大樹（與靈燭果相關），後以双墨蛟和碧绿巨网斬殺壁虎古獸，"
   }
  ]
 },
 {
  "id": "鐘衛娘",
  "name": "鐘衛娘",
  "aliases": [],
  "faction": "黃楓谷",
  "importance": "major",
  "bio": "劉靖愛慕者，劉靖被殺後悲痛失神，後恢復並以符寶助韓立擊殺越皇。",
  "firstChapter": 322,
  "canonFate": "劉靖愛慕者，劉靖被殺後悲痛失神，後恢復並以符寶助韓立擊殺越皇。",
  "chronicle": [
   {
    "fromChapter": 322,
    "toChapter": 351,
    "locationId": "越京",
    "realm": "築基期",
    "status": "alive",
    "activity": "劉靖愛慕者，劉靖被殺後悲痛失神，後恢復並以符寶助韓立擊殺越皇。"
   }
  ]
 },
 {
  "id": "鐵奴",
  "name": "鐵奴",
  "aliases": [],
  "faction": "七玄門神手谷（墨大夫的隨從）",
  "importance": "major",
  "bio": "墨大夫的沉默侍從，全身刀槍不入、力大無窮，在本弧攤牌中制服韓立。",
  "firstChapter": 31,
  "canonFate": "墨大夫的沉默侍從，全身刀槍不入、力大無窮，在本弧攤牌中制服韓立。",
  "chronicle": [
   {
    "fromChapter": 31,
    "toChapter": 60,
    "locationId": "七玄門",
    "realm": "不明（全身刀槍不入）",
    "status": "alive",
    "activity": "墨大夫的沉默侍從，全身刀槍不入、力大無窮，在本弧攤牌中制服韓立。"
   }
  ]
 },
 {
  "id": "驊光",
  "name": "驊光",
  "aliases": [],
  "faction": "器靈族",
  "importance": "major",
  "bio": "以白色小劍人形出現，追捕並擒住豹麟獸，受旭天指揮行事。",
  "firstChapter": 1296,
  "canonFate": "以白色小劍人形出現，追捕並擒住豹麟獸，受旭天指揮行事。",
  "chronicle": [
   {
    "fromChapter": 1296,
    "toChapter": 1325,
    "locationId": "風元大陸",
    "realm": "器靈族靈將",
    "status": "alive",
    "activity": "以白色小劍人形出現，追捕並擒住豹麟獸，受旭天指揮行事。"
   }
  ]
 },
 {
  "id": "欒龍天君",
  "name": "欒龍天君",
  "aliases": [
   "胖子",
   "欒龍道友"
  ],
  "faction": "外來魔尊（受白家邀請）",
  "importance": "major",
  "bio": "圓胖體型，修煉血系魔功；食千年血牙米後法力暫增三成，使用藍色圓缽攻擊魔獸；被魔獸一擊撞飛受傷後反擊，最終成功驅逐魔獸。",
  "firstChapter": 2055,
  "canonFate": "圓胖體型，修煉血系魔功；食千年血牙米後法力暫增三成，使用藍色圓缽攻擊魔獸；被魔獸一擊撞飛受傷後反擊，最終成功驅逐魔獸。",
  "chronicle": [
   {
    "fromChapter": 2055,
    "toChapter": 2084,
    "locationId": "魔界",
    "realm": "合體期（魔尊）",
    "status": "alive",
    "activity": "圓胖體型，修煉血系魔功；食千年血牙米後法力暫增三成，使用藍色圓缽攻擊魔獸；被魔獸一擊撞飛受傷後反擊，"
   }
  ]
 },
 {
  "id": "靈犀孔雀",
  "name": "靈犀孔雀",
  "aliases": [],
  "faction": "天瀾聖殿",
  "importance": "major",
  "bio": "徐仙師之靈禽，以五色靈光克制惡風和古魔魔化物；徐仙師元嬰寄附其中後同被魔像抓碎，孔雀妖丹滅絕，五色靈光被提煉成靈珠。",
  "firstChapter": 1036,
  "canonFate": "本體被元刹聖祖魔像抓碎，元神滅絕",
  "chronicle": [
   {
    "fromChapter": 1036,
    "toChapter": 1065,
    "locationId": "大晉",
    "realm": "上古靈禽",
    "status": "alive",
    "activity": "徐仙師之靈禽，以五色靈光克制惡風和古魔魔化物；徐仙師元嬰寄附其中後同被魔像抓碎，孔雀妖丹滅絕，五色靈"
   }
  ]
 },
 {
  "id": "靈獸山少女",
  "name": "靈獸山少女",
  "aliases": [],
  "faction": "靈獸山",
  "importance": "major",
  "bio": "曾在太南會賣韓立金竺筆的易羞少女，禁地中受絡腮鬍子管束；被掩月宗刁蠻女弟子追殺後負傷獨自前往中心區，在小石殿被巨劍門武痴壓制，韓立出手相救。",
  "firstChapter": 172,
  "canonFate": "曾在太南會賣韓立金竺筆的易羞少女，禁地中受絡腮鬍子管束；被掩月宗刁蠻女弟子追殺後負傷獨自前往中心區，在小石殿被巨劍門武痴壓制，韓立出手相救。",
  "chronicle": [
   {
    "fromChapter": 172,
    "toChapter": 201,
    "locationId": "掩月宗",
    "realm": "煉氣期第十層",
    "status": "alive",
    "activity": "曾在太南會賣韓立金竺筆的易羞少女，禁地中受絡腮鬍子管束；被掩月宗刁蠻女弟子追殺後負傷獨自前往中心區，"
   }
  ]
 },
 {
  "id": "蠻鬍子",
  "name": "蠻鬍子",
  "aliases": [],
  "faction": "魔道",
  "importance": "major",
  "bio": "以托天魔功抵禦，用吸雷石消耗天羅真雷，生擒萬天明肉身逼取補天丹，最終攜丹遁走；暫借韓立皇鱗甲。",
  "firstChapter": 484,
  "canonFate": "以托天魔功抵禦，用吸雷石消耗天羅真雷，生擒萬天明肉身逼取補天丹，最終攜丹遁走；暫借韓立皇鱗甲。",
  "chronicle": [
   {
    "fromChapter": 484,
    "toChapter": 513,
    "locationId": "亂星海",
    "realm": "元嬰期",
    "status": "alive",
    "activity": "以托天魔功抵禦，用吸雷石消耗天羅真雷，生擒萬天明肉身逼取補天丹，最終攜丹遁走；暫借韓立皇鱗甲。"
   }
  ]
 },
 {
  "id": "石堅",
  "name": "石堅",
  "aliases": [],
  "faction": "落雲宗",
  "importance": "minor",
  "bio": "十六七歲少年，神識天生異常強大，雙屬性靈根，心性穩重，被韓立正式收入門下並賜大衍宝經。",
  "firstChapter": 1185,
  "canonFate": "資質出眾，凝結元嬰成功；韓立讓其繼承大衍神君衣鉢，前往極西奪取千竹教主位。",
  "chronicle": [
   {
    "fromChapter": 1185,
    "toChapter": 1265,
    "locationId": "天南",
    "realm": "元嬰期",
    "status": "alive",
    "activity": "資質出眾，凝結元嬰成功；韓立讓其繼承大衍神君衣鉢，前往極西奪取千竹教主位。"
   }
  ]
 },
 {
  "id": "胡月",
  "name": "胡月",
  "aliases": [],
  "faction": "散修",
  "importance": "minor",
  "bio": "與金青共同發現珍珠地圖者，善於交際；見識到噬金虫威力後對韓立起敬畏之心",
  "firstChapter": 394,
  "canonFate": "被骸骨傀儡偷襲，腹穿骨手后陣亡；已死（前弧）",
  "chronicle": [
   {
    "fromChapter": 394,
    "toChapter": 513,
    "locationId": "亂星海",
    "realm": "結丹期",
    "status": "dead",
    "activity": "遺留兩把飛刀法宝（紅光閃閃），被韓立用作賄賂星宮守陣修士之物。"
   }
  ]
 },
 {
  "id": "樊咆子",
  "name": "樊咆子",
  "aliases": [],
  "faction": "真龍之島",
  "importance": "minor",
  "bio": "在罡風層與韩立元嬰偶遇，因與七首梟大戰受傷，邀韩立聯手被婉拒；贈銀色龍鱗作廣靈道果大會入場帖。",
  "firstChapter": 2176,
  "canonFate": "當年贈韓立龍島請帖，本弧在金大長老身後陪同；與韓立談及斬殺馬良等往事。",
  "chronicle": [
   {
    "fromChapter": 2176,
    "toChapter": 2355,
    "locationId": "靈界",
    "realm": "真靈（紫睛真龍）",
    "status": "alive",
    "activity": "田飛兒好友，曾向田飛兒極力稱讚韓立，並給予廣靈道果大會邀請函。"
   },
   {
    "fromChapter": 2421,
    "toChapter": 2450,
    "locationId": "無涯海",
    "realm": "真龍族大乘",
    "status": "alive",
    "activity": "當年贈韓立龍島請帖，本弧在金大長老身後陪同；與韓立談及斬殺馬良等往事。"
   }
  ]
 },
 {
  "id": "于執事",
  "name": "于執事",
  "aliases": [],
  "faction": "黃楓谷",
  "importance": "minor",
  "bio": "百機堂執事，心機深沉、勢利，負責分配雜務工作",
  "firstChapter": 130,
  "canonFate": "百機堂執事，為韓立辦理外出令牌。",
  "chronicle": [
   {
    "fromChapter": 130,
    "toChapter": 171,
    "locationId": "黃楓谷",
    "realm": "炼气期",
    "status": "alive",
    "activity": "百機堂執事，為韓立辦理外出令牌。"
   }
  ]
 },
 {
  "id": "天泣",
  "name": "天泣",
  "aliases": [],
  "faction": "魔界",
  "importance": "minor",
  "bio": "曾與鶴顏聯手打落寶花聖祖境界，是寶花大仇。",
  "firstChapter": 1995,
  "canonFate": "肉身被炼化成飛灰，但神魂逃脫，數百年可恢復",
  "chronicle": [
   {
    "fromChapter": 1995,
    "toChapter": 2144,
    "locationId": "魔界",
    "realm": "大乘（圣祖）",
    "status": "alive",
    "activity": "修煉泣血魔功，為得御雷簽協助鶴颜追殺宝花；在玄天花界中重傷逃脫，肉身被炼化。"
   }
  ]
 },
 {
  "id": "文檣",
  "name": "文檣",
  "aliases": [],
  "faction": "魁星島本地修士",
  "importance": "minor",
  "bio": "在斗法賽場負責接引，與韓立一同前往登仙閣並作引路，性格熱情開朗",
  "firstChapter": 364,
  "canonFate": "昔日魁星島結識的舊識，年邁，護送女兒文思月在毒龍會地盤執行任務被追殺，韓立搭救。",
  "chronicle": [
   {
    "fromChapter": 364,
    "toChapter": 453,
    "locationId": "亂星海",
    "realm": "筑基中期",
    "status": "alive",
    "activity": "昔日魁星島結識的舊識，年邁，護送女兒文思月在毒龍會地盤執行任務被追殺，韓立搭救。"
   }
  ]
 },
 {
  "id": "牛首小獸",
  "name": "牛首小獸",
  "aliases": [
   "皓獸",
   "翠獸"
  ],
  "faction": "黑隱山脈妖獸",
  "importance": "minor",
  "bio": "智慧最高的島上妖獸，與韓立交易金髓晶蟲換木鈴花，暗中謀劃除去天鵬族奴痕後逃走。",
  "firstChapter": 1388,
  "canonFate": "獻血杏求韓立驅除天鵬族奴痕，事成後率衆妖離島自由。",
  "chronicle": [
   {
    "fromChapter": 1388,
    "toChapter": 1537,
    "locationId": "天淵城",
    "realm": "中階妖物",
    "status": "alive",
    "activity": "獻血杏求韓立驅除天鵬族奴痕，事成後率衆妖離島自由。"
   }
  ]
 },
 {
  "id": "田興",
  "name": "田興",
  "aliases": [],
  "faction": "落日城（人族）",
  "importance": "minor",
  "bio": "落日城本地修士，被韓立以每日十二塊靈石雇為嚮導",
  "firstChapter": 1266,
  "canonFate": "落日城地頭蛇，帶韓立前往穹宇閣購買特殊材料，後被韓立打發離開。",
  "chronicle": [
   {
    "fromChapter": 1266,
    "toChapter": 1325,
    "locationId": "風元大陸",
    "realm": "煉氣期",
    "status": "alive",
    "activity": "落日城地頭蛇，帶韓立前往穹宇閣購買特殊材料，後被韓立打發離開。"
   }
  ]
 },
 {
  "id": "白書君",
  "name": "白書君",
  "aliases": [],
  "faction": "天極門",
  "importance": "minor",
  "bio": "璇璣子（鲁卫英）的門下弟子，奉師命接近慕沛靈以引出韩立，被韩立識破意圖。",
  "firstChapter": 716,
  "canonFate": "天極門弟子，韓立舊識（曾打過慕沛靈主意），在坊市被韓立認出，帶路前往鲁卫英洞府。",
  "chronicle": [
   {
    "fromChapter": 716,
    "toChapter": 745,
    "locationId": "天南",
    "realm": "結丹期",
    "status": "alive",
    "activity": "璇璣子（鲁卫英）的門下弟子，奉師命接近慕沛靈以引出韩立，被韩立識破意圖。"
   },
   {
    "fromChapter": 796,
    "toChapter": 825,
    "locationId": "大晉",
    "realm": "結丹期",
    "status": "alive",
    "activity": "天極門弟子，韓立舊識（曾打過慕沛靈主意），在坊市被韓立認出，帶路前往鲁卫英洞府。"
   }
  ]
 },
 {
  "id": "白雷",
  "name": "白雷",
  "aliases": [],
  "faction": "天鵬族",
  "importance": "minor",
  "bio": "風啸同行的年輕男性天鵬人，白凝之兄。",
  "firstChapter": 1388,
  "canonFate": "白璧之叔，曾與韓立一同入城，白璧通過叔父得知韓立之事。",
  "chronicle": [
   {
    "fromChapter": 1388,
    "toChapter": 1447,
    "locationId": "天淵城",
    "realm": "化神初期",
    "status": "alive",
    "activity": "白璧之叔，曾與韓立一同入城，白璧通過叔父得知韓立之事。"
   }
  ]
 },
 {
  "id": "白凝",
  "name": "白凝",
  "aliases": [],
  "faction": "天鵬族",
  "importance": "minor",
  "bio": "風啸同行的年輕女性天鵬人，白雷之妹。",
  "firstChapter": 1388,
  "canonFate": "白雷之妹，曾與韓立一同入城。",
  "chronicle": [
   {
    "fromChapter": 1388,
    "toChapter": 1447,
    "locationId": "天淵城",
    "realm": "化神初期",
    "status": "alive",
    "activity": "白雷之妹，曾與韓立一同入城。"
   }
  ]
 },
 {
  "id": "石蝶",
  "name": "石蝶",
  "aliases": [
   "石仙子"
  ],
  "faction": "散修",
  "importance": "minor",
  "bio": "阵法理論造詣深厚，與韓立分工合作成功破除古法陣，臉部被七霞蓮毒液灼傷",
  "firstChapter": 394,
  "canonFate": "臉部受重毒傷（以火红丹藥緊急救治）；被玄骨幽鬼吸乾成乾屍",
  "chronicle": [
   {
    "fromChapter": 394,
    "toChapter": 453,
    "locationId": "亂星海",
    "realm": "結丹期以下",
    "status": "alive",
    "activity": "容顏被妖冠蛇所毀，憤而斬蛇，臨陣逃跑時被鬼爪抓住。"
   }
  ]
 },
 {
  "id": "吳師兄",
  "name": "吳師兄",
  "aliases": [
   "吳師伯"
  ],
  "faction": "蠻胡子門下",
  "importance": "minor",
  "bio": "鷹鉤鼻，足智多謀，出謀劃策讓葉師弟以利誘法使韓立自願放棄築基丹，在葉師弟手中握有把柄",
  "firstChapter": 130,
  "canonFate": "蛮師弟子，開設金銘樓，秘密通知血光門人謀奪洞府寶物，被六翼霜蚣追殺，下落不明。",
  "chronicle": [
   {
    "fromChapter": 130,
    "toChapter": 159,
    "locationId": "黃楓谷",
    "realm": "築基期",
    "status": "alive",
    "activity": "鷹鉤鼻，足智多謀，出謀劃策讓葉師弟以利誘法使韓立自願放棄築基丹，在葉師弟手中握有把柄"
   },
   {
    "fromChapter": 1155,
    "toChapter": 1184,
    "locationId": "天南",
    "realm": "結丹後期",
    "status": "alive",
    "activity": "蛮師弟子，開設金銘樓，秘密通知血光門人謀奪洞府寶物，被六翼霜蚣追殺，下落不明。"
   }
  ]
 },
 {
  "id": "明馨",
  "name": "明馨",
  "aliases": [],
  "faction": "古劍門",
  "importance": "minor",
  "bio": "古劍門元嬰期女修，修煉百花陽春訣，以身上花香施展若有若無的媚功試探韓立，被識破；對韓立神通大感興趣。",
  "firstChapter": 856,
  "canonFate": "古劍門女修，昔年曾在百巧院觀禮時試探韓立，本弧被韓立一語道出修為境況，徹底折服。",
  "chronicle": [
   {
    "fromChapter": 856,
    "toChapter": 885,
    "locationId": "大晉",
    "realm": "元嬰初期",
    "status": "alive",
    "activity": "古劍門元嬰期女修，修煉百花陽春訣，以身上花香施展若有若無的媚功試探韓立，被識破；對韓立神通大感興趣。"
   },
   {
    "fromChapter": 1155,
    "toChapter": 1184,
    "locationId": "天南",
    "realm": "元嬰初期（接近中期）",
    "status": "alive",
    "activity": "古劍門女修，昔年曾在百巧院觀禮時試探韓立，本弧被韓立一語道出修為境況，徹底折服。"
   }
  ]
 },
 {
  "id": "金鼓長老",
  "name": "金鼓長老",
  "aliases": [],
  "faction": "靈族",
  "importance": "minor",
  "bio": "靈族金系一脈，精通音波神通，擅長對付大量敵人。",
  "firstChapter": 1995,
  "canonFate": "靈族長老，以銅鑼震昏魔獸，隨千秋聖女行動。",
  "chronicle": [
   {
    "fromChapter": 1995,
    "toChapter": 2054,
    "locationId": "魔界",
    "realm": "合體後期",
    "status": "alive",
    "activity": "靈族長老，以銅鑼震昏魔獸，隨千秋聖女行動。"
   }
  ]
 },
 {
  "id": "青顏真人",
  "name": "青顏真人",
  "aliases": [],
  "faction": "太南谷管理者",
  "importance": "minor",
  "bio": "太南谷主持者，萬家長輩的至交，主辦太南小會，對韓立這位散修存有戒心",
  "firstChapter": 100,
  "canonFate": "太南小會主辦者之一，弧末宣布太南會正式結束",
  "chronicle": [
   {
    "fromChapter": 100,
    "toChapter": 159,
    "locationId": "黃楓谷",
    "realm": "築基期以上",
    "status": "alive",
    "activity": "太南小會主辦者之一，弧末宣布太南會正式結束"
   }
  ]
 },
 {
  "id": "奎煥",
  "name": "奎煥",
  "aliases": [
   "奎師兄"
  ],
  "faction": "落雲宗隱劍峰",
  "importance": "minor",
  "bio": "消息靈通的外事弟子，邀韓立一同捕捉雪雲妖狐，因狐逃脫向韓立道歉，韓立大度免除賠付。",
  "firstChapter": 596,
  "canonFate": "昔年落雲宗弟子，因機缘服食靈草結丹成功，在七靈島駐守，協助布下玄罡天煞陣困住第二元嬰。",
  "chronicle": [
   {
    "fromChapter": 596,
    "toChapter": 625,
    "locationId": "天南",
    "realm": "煉氣期八九層",
    "status": "alive",
    "activity": "消息靈通的外事弟子，邀韓立一同捕捉雪雲妖狐，因狐逃脫向韓立道歉，韓立大度免除賠付。"
   },
   {
    "fromChapter": 1185,
    "toChapter": 1214,
    "locationId": "落雲宗",
    "realm": "結丹期",
    "status": "alive",
    "activity": "昔年落雲宗弟子，因機缘服食靈草結丹成功，在七靈島駐守，協助布下玄罡天煞陣困住第二元嬰。"
   }
  ]
 },
 {
  "id": "彥姓老者",
  "name": "彥姓老者",
  "aliases": [
   "彥前輩",
   "彥叔"
  ],
  "faction": "靈界人族（本地修士）",
  "importance": "minor",
  "bio": "與越宗有忘年交情，在雷雲閣三層以鎮規保護越宗，使用珍貴金色符箓逃脫魔獸追殺",
  "firstChapter": 1598,
  "canonFate": "被韓立擊退後遭黑淵鰐魔追殺，結果不明。",
  "chronicle": [
   {
    "fromChapter": 1598,
    "toChapter": 1657,
    "locationId": "天淵城",
    "realm": "煉虛（傷勢未全癒）",
    "status": "alive",
    "activity": "曾在雷雲閣中與韓立有過接觸，為追尋芝仙入山脈，遭韓立以元磁神山擊破銀印後撤走，最後被黑淵鰐追擊。"
   }
  ]
 },
 {
  "id": "洞天鼠王",
  "name": "洞天鼠王",
  "aliases": [
   "天瀾聖獸（分身）"
  ],
  "faction": "妖族七大妖王（瓊鼠一脈）",
  "importance": "minor",
  "bio": "神秘莫測，與天奎狼王曾有交手；競拍泣靈血木至六千五百萬後讓步，被韓立以七千萬奪得",
  "firstChapter": 1785,
  "canonFate": "被蟹道人扣押，被韩立以六翼霜蚣氣息識破即天瀾聖獸本體；交代曾以逆靈真陰大法換取霜蚣配合，交出本命魂牌，以心魔血誓保密。",
  "chronicle": [
   {
    "fromChapter": 1785,
    "toChapter": 1814,
    "locationId": "魔界",
    "realm": "合體期（中後期推測）",
    "status": "alive",
    "activity": "神秘莫測，與天奎狼王曾有交手；競拍泣靈血木至六千五百萬後讓步，被韓立以七千萬奪得"
   },
   {
    "fromChapter": 2176,
    "toChapter": 2205,
    "locationId": "靈界",
    "realm": "合體中期",
    "status": "alive",
    "activity": "被蟹道人扣押，被韩立以六翼霜蚣氣息識破即天瀾聖獸本體；交代曾以逆靈真陰大法換取霜蚣配合，交出本命魂牌"
   }
  ]
 },
 {
  "id": "英珊",
  "name": "英珊",
  "aliases": [],
  "faction": "蒼鷺部",
  "importance": "minor",
  "bio": "英鷺晚輩，具有靈根，此行前往聖殿開靈。",
  "firstChapter": 856,
  "canonFate": "英鷺族人中的靈根少女，韓立診查其靈根後贈予丹藥，助其改善體質。",
  "chronicle": [
   {
    "fromChapter": 856,
    "toChapter": 915,
    "locationId": "大晉",
    "realm": "有靈根（尚未入門）",
    "status": "alive",
    "activity": "英鷺族人中的靈根少女，韓立診查其靈根後贈予丹藥，助其改善體質。"
   }
  ]
 },
 {
  "id": "英鷺",
  "name": "英鷺",
  "aliases": [],
  "faction": "蒼鷺部",
  "importance": "minor",
  "bio": "突兀族蒼鷺部族長，以二十五塊靈石雇佣偽裝低階仙師的韓立護送車隊前往天澜聖殿。",
  "firstChapter": 856,
  "canonFate": "蒼鷺部首領，護送進貢車隊，向韓立提供驻地相關信息。",
  "chronicle": [
   {
    "fromChapter": 856,
    "toChapter": 915,
    "locationId": "大晉",
    "realm": "凡人",
    "status": "alive",
    "activity": "蒼鷺部首領，護送進貢車隊，向韓立提供驻地相關信息。"
   }
  ]
 },
 {
  "id": "烈火老怪",
  "name": "烈火老怪",
  "aliases": [],
  "faction": "百巧院",
  "importance": "minor",
  "bio": "百巧院大長老，主持乾坤塔認主觀禮，對韓立態度友善客氣。",
  "firstChapter": 856,
  "canonFate": "百巧院大長老，親赴落雲宗確認韓立後期修為，被迫接受落雲宗擴大勢力。",
  "chronicle": [
   {
    "fromChapter": 856,
    "toChapter": 885,
    "locationId": "大晉",
    "realm": "元嬰中期",
    "status": "alive",
    "activity": "百巧院大長老，主持乾坤塔認主觀禮，對韓立態度友善客氣。"
   },
   {
    "fromChapter": 1155,
    "toChapter": 1184,
    "locationId": "落雲宗",
    "realm": "元嬰中期",
    "status": "alive",
    "activity": "百巧院大長老，親赴落雲宗確認韓立後期修為，被迫接受落雲宗擴大勢力。"
   }
  ]
 },
 {
  "id": "敖青",
  "name": "敖青",
  "aliases": [],
  "faction": "七越族",
  "importance": "minor",
  "bio": "七越族首席聖子，「同輩第一人」，心狠手辣，在玉皇頂打量韓立，帶本族圣子追殺金牙兽，未與韓立正面衝突。",
  "firstChapter": 1418,
  "canonFate": "七越族女聖子，修煉七竅通玄訣，靈覺感應超群；遠觀韓立時已感其深不可測，與費夜訂下賭約。本弧主要在萬藤道外提及",
  "chronicle": [
   {
    "fromChapter": 1418,
    "toChapter": 1477,
    "locationId": "天淵城",
    "realm": "靈將頂尖",
    "status": "alive",
    "activity": "七越族女聖子，修煉七竅通玄訣，靈覺感應超群；遠觀韓立時已感其深不可測，與費夜訂下賭約。本弧主要在萬藤"
   }
  ]
 },
 {
  "id": "許雲",
  "name": "許雲",
  "aliases": [],
  "faction": "奇淵島修士",
  "importance": "minor",
  "bio": "帶領韓立等人在黑石城拍賣會遊覽，欲拉攏韓立組隊，被韓立以眼神懾退後放棄。",
  "firstChapter": 514,
  "canonFate": "疤臉修士，韩立昔日同伴，在外海仍活躍。",
  "chronicle": [
   {
    "fromChapter": 514,
    "toChapter": 573,
    "locationId": "亂星海",
    "realm": "筑基後期",
    "status": "alive",
    "activity": "疤臉修士，韩立昔日同伴，在外海仍活躍。"
   }
  ]
 },
 {
  "id": "溫夫人",
  "name": "溫夫人",
  "aliases": [],
  "faction": "無",
  "importance": "minor",
  "bio": "冷若冰霜，擅鸞鳳劍訣，夫君為六道極聖，只採靈藥不入內殿。",
  "firstChapter": 424,
  "canonFate": "主動兵解，希望輪迴再報韓立恩情",
  "chronicle": [
   {
    "fromChapter": 424,
    "toChapter": 453,
    "locationId": "亂星海",
    "realm": "元嬰初期",
    "status": "alive",
    "activity": "冷若冰霜，擅鸞鳳劍訣，夫君為六道極聖，只採靈藥不入內殿。"
   },
   {
    "fromChapter": 1215,
    "toChapter": 1244,
    "locationId": "虛天殿",
    "realm": "元嬰（被囚弱化）",
    "status": "dead",
    "activity": "六道極聖的雙修伴侣，曾在虛天殿中出現，後被六道囚禁於法寶中；確認六道隕落後，立即自行兵解。"
   }
  ]
 },
 {
  "id": "舞巖",
  "name": "舞巖",
  "aliases": [],
  "faction": "七玄門七絕堂",
  "importance": "minor",
  "bio": "考核中第一個登頂炼骨崖，依靠馬副門主親戚關係直接被送入七絕堂，年齡超標仍獲特例准入；在懸崖頂嘲笑登不上的韓立。",
  "firstChapter": 1,
  "canonFate": "當年與韓立同車入山，患怪病求診，韓立故意加大藥量令其痊愈時多受幾分苦",
  "chronicle": [
   {
    "fromChapter": 1,
    "toChapter": 90,
    "locationId": "七玄門",
    "realm": "七絕堂核心弟子",
    "status": "alive",
    "activity": "當年與韓立同車入山，患怪病求診，韓立故意加大藥量令其痊愈時多受幾分苦"
   }
  ]
 },
 {
  "id": "慕容兄弟",
  "name": "慕容兄弟",
  "aliases": [],
  "faction": "黃楓谷",
  "importance": "minor",
  "bio": "雷靈根雙胞胎，十一二歲即掌握天雷連環擊，引來結丹期長老親自出關表示願收為弟子",
  "firstChapter": 130,
  "canonFate": "孿生兄弟，黃龍山守阵修士，精通雷系法術，韩立認出乃舊識，負責牽制巨犀獸。",
  "chronicle": [
   {
    "fromChapter": 130,
    "toChapter": 159,
    "locationId": "黃楓谷",
    "realm": "炼气期（新入門）",
    "status": "alive",
    "activity": "雷靈根雙胞胎，十一二歲即掌握天雷連環擊，引來結丹期長老親自出關表示願收為弟子"
   },
   {
    "fromChapter": 716,
    "toChapter": 745,
    "locationId": "天南",
    "realm": "結丹期",
    "status": "alive",
    "activity": "孿生兄弟，黃龍山守阵修士，精通雷系法術，韩立認出乃舊識，負責牽制巨犀獸。"
   }
  ]
 },
 {
  "id": "鐘吾",
  "name": "鐘吾",
  "aliases": [
   "鐘掌門近親",
   "丑漢"
  ],
  "faction": "黃楓谷",
  "importance": "minor",
  "bio": "中心區守株待兔殺人奪寶；後在石屋敗於陳大哥；認出踏雲靴後對韓立忌惮，與韓立互換中心區資料。",
  "firstChapter": 172,
  "canonFate": "岳麓殿地火間管理人，以往曾提供給韓立偵察情報，韓立筑基後改稱其「師叔」",
  "chronicle": [
   {
    "fromChapter": 172,
    "toChapter": 231,
    "locationId": "越京",
    "realm": "煉氣期",
    "status": "alive",
    "activity": "岳麓殿地火間管理人，以往曾提供給韓立偵察情報，韓立筑基後改稱其「師叔」"
   }
  ]
 },
 {
  "id": "鶴顏",
  "name": "鶴顏",
  "aliases": [
   "紅袍老嫗",
   "鶴道友"
  ],
  "faction": "魔界",
  "importance": "minor",
  "bio": "曾與天泣聯手打落寶花聖祖境界，是寶花大仇。",
  "firstChapter": 1995,
  "canonFate": "肉身被炼化成飛灰，但神魂逃脫，數百年可恢復",
  "chronicle": [
   {
    "fromChapter": 1995,
    "toChapter": 2144,
    "locationId": "魔界",
    "realm": "大乘（圣祖）",
    "status": "alive",
    "activity": "夺舍苍老肉身，與天泣聯手追殺宝花報仇；在玄天花界中重傷逃脫，肉身被炼化。"
   }
  ]
 },
 {
  "id": "冰魄仙子",
  "name": "冰魄仙子",
  "aliases": [],
  "faction": "人界小極宮（上古）",
  "importance": "minor",
  "bio": "人界小極宮創立祖師，許仙子先祖，韓立曾受其遺留之寒髓、極寒之焰等寶物恩惠。",
  "firstChapter": 1326,
  "canonFate": "本尊據血靈透露仍存活但被困異大陸",
  "chronicle": [
   {
    "fromChapter": 1326,
    "toChapter": 1355,
    "locationId": "風元大陸",
    "realm": "凡人",
    "status": "alive",
    "activity": "人界小極宮創立祖師，許仙子先祖，韓立曾受其遺留之寒髓、極寒之焰等寶物恩惠。"
   },
   {
    "fromChapter": 1748,
    "toChapter": 1754,
    "locationId": "天淵城",
    "realm": "凡人",
    "status": "alive",
    "activity": "虛天鼎（試作品）與虛靈寶鼎皆出自其手；翁姓青年昔日舊識，委託韓立帶信物給她。"
   },
   {
    "fromChapter": 1755,
    "toChapter": 1784,
    "locationId": "魔界",
    "realm": "合體期（本尊下落不明）",
    "status": "alive",
    "activity": "許家先祖，昔日以血魂大法留下血魂瓶，本尊疑似被困異大陸，為本弧重要伏筆人物。"
   }
  ]
 },
 {
  "id": "雷羅真人",
  "name": "雷羅真人",
  "aliases": [
   "雷羅老友",
   "雷羅長老"
  ],
  "faction": "天淵城長老會",
  "importance": "minor",
  "bio": "天淵城五名人族長老之一，飛升修士的首領，分析情報得出十年內六成以上幾率爆發異族攻城，安排自願任務計劃",
  "firstChapter": 1356,
  "canonFate": "肉身被焚化，精氣被紫影抽空而死。；在異族攻城時隕落",
  "chronicle": [
   {
    "fromChapter": 1356,
    "toChapter": 1784,
    "locationId": "天淵城",
    "realm": "合體期（已隕落）",
    "status": "dead",
    "activity": "昔日天淵城飛升修士，在異族攻城時戰死，其隕落導致長老會人手嚴重不足。"
   }
  ]
 },
 {
  "id": "蒼坤上人",
  "name": "蒼坤上人",
  "aliases": [],
  "faction": "天南散修（五千年前）",
  "importance": "minor",
  "bio": "五千年前天南第一散修，曾闖入坠魔谷並生還，留下秘密洞府「玉璣閣」及大量宝物，以太妙神禁守護，本弧的奪寶核心人物。",
  "firstChapter": 686,
  "canonFate": "已坐化",
  "chronicle": [
   {
    "fromChapter": 686,
    "toChapter": 715,
    "locationId": "天南",
    "realm": "已坐化（生前為元嬰後期以上）",
    "status": "alive",
    "activity": "五千年前天南第一散修，曾闖入坠魔谷並生還，留下秘密洞府「玉璣閣」及大量宝物，以太妙神禁守護，本弧的奪"
   },
   {
    "fromChapter": 796,
    "toChapter": 825,
    "locationId": "墜魔谷",
    "realm": "已坐化（生前為元嬰後期以上）",
    "status": "dead",
    "activity": "南陇侯先祖，曾入墜魔谷探宝、遭火蟾古獸逼退，留下遺書與路線圖及碧鳩毒，是南陇侯入谷的核心嚮導資訊來源"
   }
  ]
 },
 {
  "id": "墨大夫",
  "name": "墨大夫",
  "aliases": [
   "鬼手墨居仁",
   "墨居仁"
  ],
  "faction": "驚蛟會（創始人）",
  "importance": "minor",
  "bio": "透過遺書設下死後交易，以阴毒和暖陽寶玉強迫韓立前往其家護妻女",
  "firstChapter": 61,
  "canonFate": "上弧已死，本弧僅以遺書影響劇情；已於本弧前死亡，本弧中諸夫人確認死訊",
  "chronicle": [
   {
    "fromChapter": 61,
    "toChapter": 90,
    "locationId": "七玄門",
    "realm": "已死",
    "status": "alive",
    "activity": "透過遺書設下死後交易，以阴毒和暖陽寶玉強迫韓立前往其家護妻女"
   },
   {
    "fromChapter": 100,
    "toChapter": 129,
    "locationId": "黃楓谷",
    "realm": "已死",
    "status": "dead",
    "activity": "惊蛟會創始人，已於本弧前身亡，遺書安排韓立赴墨府，書信中留有暗信告知諸夫人相關事宜"
   }
  ]
 }
];
