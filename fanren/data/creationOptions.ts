import type { OriginOption, SpiritualRootProfileOption, DaoHeartOption } from '../types';
import type { RealmType } from '../../types';

// ──────────────────────────────────────────────
// 出身選項（ORIGINS）
// ──────────────────────────────────────────────

export const ORIGINS: OriginOption[] = [
  {
    id: 'peasant_boy',
    name: '凡人農家少年',
    description:
      '窮苦農村出身，家境困頓，被村中長老以「家族榮耀」為由送入七玄門參加資質測試，意外被選中成為記名弟子。體格一般，機智靈活，神秘機緣觸發率最高。難度最高，若能觸發「神秘小瓶」機緣，修煉靈藥效率大幅提升。',
    startRegionId: '七玄門',
    startRealm: '炼气期' as RealmType,
    startRealmLevel: 1,
    spiritStones: 20,
    spiritualRootBias: { wood: 5, earth: 5 },
    startingArtIds: ['長春功'],
    startingItemRefs: [
      { ref: '黃龍丹', quantity: 1 },
      { ref: '養精丹', quantity: 2 },
    ],
    startingSectId: '七玄門',
    hooks: [
      '墨大夫的秘密',
      '神秘小瓶機緣',
      '野狼幫血鬥',
      '七玄門逃出事件',
    ],
    difficulty: 5,
  },
  {
    id: 'sect_scion',
    name: '修仙世家庶子',
    description:
      '旁系弟子出身，自幼有基礎法術教育，識得靈根分類等修仙常識，卻因庶出身份資源稀薄。對修仙界有一定了解，入門後上手較快，但需靠自身努力出人頭地。',
    startRegionId: '黃楓谷',
    startRealm: '炼气期' as RealmType,
    startRealmLevel: 3,
    spiritStones: 80,
    spiritualRootBias: { fire: 10, wood: 5 },
    startingArtIds: ['長春功'],
    startingItemRefs: [
      { ref: '火彈術玉簡', quantity: 1 },
      { ref: '養精丹', quantity: 3 },
      { ref: '金光護體符籙', quantity: 2 },
    ],
    startingSectId: '黃楓谷',
    hooks: [
      '百藥園競爭',
      '靈根測試事件',
      '升仙令系統',
      '家族後援與壓力',
    ],
    difficulty: 3,
  },
  {
    id: 'martial_family',
    name: '武林世家子弟',
    description:
      '凡人武術底子扎實，自幼修習家傳武功，肉身素質遠勝同齡修士。靈根稍弱，但體修天賦出眾，可同步修習武道功法強化肉身，走體修輔助路線。',
    startRegionId: '七玄門',
    startRealm: '炼气期' as RealmType,
    startRealmLevel: 2,
    spiritStones: 50,
    spiritualRootBias: { metal: 10, earth: 10 },
    startingArtIds: ['長春功', '眨眼劍法'],
    startingItemRefs: [
      { ref: '養精丹', quantity: 3 },
      { ref: '劍符（灰芒）', quantity: 1 },
    ],
    startingSectId: '七玄門',
    hooks: [
      '厲飛雨武道指點',
      '武道技能樹開啟',
      '金剛訣機緣',
      '凡人武道與修仙道路的衝突',
    ],
    difficulty: 3,
  },
  {
    id: 'rogue_cultivator_orphan',
    name: '散修遺孤',
    description:
      '父母為散修，幼年便在江湖輾轉漂泊，眼界廣、見識多，手中有一份殘缺功法與少量靈石。無門派束縛，行動完全自由，但須自力尋覓資源，面對正規弟子時資源劣勢明顯。',
    startRegionId: '亂星海',
    startRealm: '炼气期' as RealmType,
    startRealmLevel: 5,
    spiritStones: 300,
    spiritualRootBias: { water: 10, metal: 5 },
    startingArtIds: ['御風訣'],
    startingItemRefs: [
      { ref: '玄鐵飛天盾', quantity: 1 },
      { ref: '天雷子', quantity: 2 },
      { ref: '清靈散', quantity: 1 },
    ],
    startingSectId: null,
    hooks: [
      '散修人脈網絡',
      '殘缺功法尋補',
      '乱星海勢力選邊',
      '流浪散修的生存壓力',
    ],
    difficulty: 4,
  },
  {
    id: 'market_apprentice',
    name: '坊市學徒',
    description:
      '自幼在修仙坊市中打雜學藝，熟悉各類物品行情，擅長鑑別低階靈材與丹藥真偽。商業人脈廣，初始靈石充裕，但修煉基礎薄弱，需另覓師承。',
    startRegionId: '天淵城',
    startRealm: '炼气期' as RealmType,
    startRealmLevel: 2,
    spiritStones: 150,
    spiritualRootBias: { earth: 10, metal: 5 },
    startingArtIds: ['天眼術'],
    startingItemRefs: [
      { ref: '金光護體符籙', quantity: 3 },
      { ref: '聚靈丹', quantity: 2 },
      { ref: '養精丹', quantity: 2 },
    ],
    startingSectId: null,
    hooks: [
      '坊市奇遇',
      '鑑寶事件',
      '商賈人脈與修仙界情報',
      '尋訪師承',
    ],
    difficulty: 2,
  },
  {
    id: 'fallen_sect_heir',
    name: '沒落仙宗後裔',
    description:
      '先祖曾是正道大宗的成員，門宗已在百年前的戰亂中覆滅，僅留下殘缺的功法傳承與一件舊法器。身負重振家門的使命，對修仙歷史有較深了解，可從傳承碎片中挖掘失傳秘法。',
    startRegionId: '落雲宗',
    startRealm: '炼气期' as RealmType,
    startRealmLevel: 4,
    spiritStones: 120,
    spiritualRootBias: { wood: 15, water: 5 },
    startingArtIds: ['長春功', '斂氣術'],
    startingItemRefs: [
      { ref: '神風舟', quantity: 1 },
      { ref: '清靈散', quantity: 2 },
      { ref: '金光護體符籙', quantity: 2 },
    ],
    startingSectId: '落雲宗',
    hooks: [
      '先祖傳承秘密',
      '試劍大會入場',
      '舊宗門仇怨追蹤',
      '失傳功法尋找',
    ],
    difficulty: 3,
  },
  {
    id: 'alchemy_family',
    name: '煉丹世家弟子',
    description:
      '溪國小型煉丹家族出身，自幼接觸靈草藥材，家族數代修士傳承，擁有基礎煉丹爐與常見靈草配方。進入落雲宗成為正式內門弟子，需在限期內完成宗門煉丹任務，煉丹是主要資源獲取方式。',
    startRegionId: '落雲宗',
    startRealm: '炼气期' as RealmType,
    startRealmLevel: 6,
    spiritStones: 200,
    spiritualRootBias: { wood: 20, fire: 10 },
    startingArtIds: ['長春功'],
    startingItemRefs: [
      { ref: '基礎煉丹爐', quantity: 1 },
      { ref: '黃龍丹', quantity: 2 },
      { ref: '金髓丸', quantity: 2 },
      { ref: '養精丹', quantity: 3 },
    ],
    startingSectId: '落雲宗',
    hooks: [
      '宗門煉丹任務',
      '試劍大會',
      '藥圃種植競爭',
      '煉丹師人脈',
    ],
    difficulty: 2,
  },
  {
    id: 'border_village',
    name: '邊遠村寨少年',
    description:
      '邊疆凡人出身，常年勞作使體格強健，但知識欠缺，對修仙界幾乎一無所知。對神秘事件觸發有額外機率，未知的大機緣在等待著這個懵懂少年。需靠機智與適應能力突破重重困難。',
    startRegionId: '黃楓谷',
    startRealm: '炼气期' as RealmType,
    startRealmLevel: 1,
    spiritStones: 10,
    spiritualRootBias: { earth: 15, metal: 5 },
    startingArtIds: ['長春功'],
    startingItemRefs: [
      { ref: '養精丹', quantity: 1 },
    ],
    startingSectId: '黃楓谷',
    hooks: [
      '神秘機緣觸發（高概率）',
      '邊疆異獸奇遇',
      '入門試煉',
      '凡人視角開眼',
    ],
    difficulty: 5,
  },
];

// ──────────────────────────────────────────────
// 靈根剖面選項（SPIRITUAL_ROOT_PROFILES）
// ──────────────────────────────────────────────

export const SPIRITUAL_ROOT_PROFILES: SpiritualRootProfileOption[] = [
  {
    id: 'heavenly_root',
    name: '天靈根',
    description:
      '極為稀罕的頂尖靈根，單一屬性達到極致純粹，修煉速度遠超常規，幾乎必然築基。掩月宗一屆新弟子中僅現一例，乃萬中無一的天驕資質。',
    roots: { metal: 100, wood: 0, water: 0, fire: 0, earth: 0 },
    cultivationMult: 3.0,
    probabilityWeight: 1,
  },
  {
    id: 'variant_root',
    name: '變異靈根',
    description:
      '特殊稀有靈根，如雷靈根、風靈根、冰髓之體等非五行屬性，走特殊修煉路線，築基成功率極高，往往可獲門派優先分配築基丹。戰鬥方式獨特，威能驚人。',
    roots: { metal: 0, wood: 0, water: 80, fire: 0, earth: 0 },
    cultivationMult: 2.5,
    probabilityWeight: 4,
  },
  {
    id: 'true_root_single',
    name: '真靈根（單屬性）',
    description:
      '普通單一屬性靈根，修煉速度快，築基成功率較高，是修仙界眼中的上等資質。雖不及天靈根那般驚豔，也足以在名門大派佔有一席之地。',
    roots: { metal: 0, wood: 0, water: 0, fire: 90, earth: 0 },
    cultivationMult: 2.0,
    probabilityWeight: 11,
  },
  {
    id: 'pseudo_root_double',
    name: '偽靈根（雙屬性）',
    description:
      '兩種屬性混合的偽靈根，修煉速度較快，築基成功率約一成，乃修仙界中算得上中等的資質，大多數門派均樂於收為正式弟子。',
    roots: { metal: 60, wood: 60, water: 0, fire: 0, earth: 0 },
    cultivationMult: 1.5,
    probabilityWeight: 20,
  },
  {
    id: 'pseudo_root_triple',
    name: '偽靈根（三屬性）',
    description:
      '三種屬性混合的偽靈根，修煉速度中等，築基成功率約五分之一，是修仙界常見資質。大多數普通弟子均屬此列，需依靠後天努力與機緣彌補先天不足。',
    roots: { metal: 50, wood: 50, water: 50, fire: 0, earth: 0 },
    cultivationMult: 1.2,
    probabilityWeight: 30,
  },
  {
    id: 'pseudo_root_quad',
    name: '偽靈根（四屬性）',
    description:
      '四種屬性混合，即韓立所擁有的靈根類型，築基成功率極低（約百分之一），修煉緩慢。然而正是這種困境催生了最堅韌的修士，是「凡人逆襲」路線的主角原型。',
    roots: { metal: 0, wood: 40, water: 40, fire: 40, earth: 40 },
    cultivationMult: 0.8,
    probabilityWeight: 20,
  },
  {
    id: 'pseudo_root_five',
    name: '五行偽靈根',
    description:
      '五種屬性均有卻均弱，俗稱廢靈根，修煉速度極慢，築基成功率近乎無望。若無特殊機緣（如大量築基丹或奇遇），幾乎終身困於煉氣期。走這條路意味著最艱難的逆天之路。',
    roots: { metal: 30, wood: 30, water: 30, fire: 30, earth: 30 },
    cultivationMult: 0.5,
    probabilityWeight: 10,
  },
  {
    id: 'mutated_dark_root',
    name: '暗靈根（特殊變異）',
    description:
      '極罕見的特殊體質，五行靈氣感知極弱，卻對陰暗、冥府之力有天生親和力。可修習特殊魔道或陰系功法，走一條鮮有人知的偏僻道路，潛力難以估量但風險同樣極高。',
    roots: { metal: 10, wood: 0, water: 20, fire: 0, earth: 10 },
    cultivationMult: 1.0,
    probabilityWeight: 4,
  },
];

// ──────────────────────────────────────────────
// 道心選項（DAO_HEARTS）
// ──────────────────────────────────────────────

export const DAO_HEARTS: DaoHeartOption[] = [
  {
    id: 'dao_survival',
    name: '謀存之心',
    description:
      '謹慎、隱忍，以自保為最高優先。不輕易暴露實力，行事低調，以求在強者林立的修仙界長久生存。韓立一生的核心作風。觸發「斂氣」被動，減少主動暴露風險事件。',
    effects: {
      karmaResist: 5,
      breakthroughBonus: 0,
      reputationBias: -5,
    },
  },
  {
    id: 'dao_benevolence',
    name: '仁義之心',
    description:
      '重情重義，對故人有所牽掛，難以割捨人間情誼。特定 NPC 好感大幅提升，可觸發義助事件鏈，但有時情義會成為弱點。對應韓立對厲飛雨、辛如音的情義。',
    effects: {
      karmaResist: 10,
      breakthroughBonus: 0,
      reputationBias: 15,
    },
  },
  {
    id: 'dao_pursuit',
    name: '道途之心',
    description:
      '以追求更高境界為最高優先，視修煉為人生唯一意義。苦修效率提升，可解鎖閉關加速選項，情感羈絆對其影響較小。對應韓立後期的修煉哲學。',
    effects: {
      karmaResist: 0,
      breakthroughBonus: 8,
      reputationBias: 0,
    },
  },
  {
    id: 'dao_slaughter',
    name: '殺伐之心',
    description:
      '果斷清除威脅，手段不擇，殺伐決斷毫不留情。戰鬥殺傷加成，但正道聲望下降，魔道勢力對其容忍度更高。對應韓立殺伐果決的一面，業力積累加快。',
    effects: {
      karmaResist: -10,
      breakthroughBonus: 5,
      reputationBias: -20,
    },
  },
  {
    id: 'dao_alchemy',
    name: '煉丹之心',
    description:
      '沉迷丹道研究，對靈草藥性有天生的直覺感悟。煉丹成功率提升，藥材辨識自動，可發現常人忽略的丹道奧秘。對應落雲宗煉丹路線，突破時心態從容。',
    effects: {
      karmaResist: 5,
      breakthroughBonus: 5,
      reputationBias: 5,
    },
  },
  {
    id: 'dao_mechanism',
    name: '傀儡之心',
    description:
      '著迷機關與傀儡術，視傀儡為延伸自我意志的絕佳工具。大衍訣修煉速度提升，解鎖傀儡側線事件，可比常人更快領悟傀儡奧義。對應千竹教大衍訣路線。',
    effects: {
      karmaResist: 0,
      breakthroughBonus: 3,
      reputationBias: 0,
    },
  },
];
