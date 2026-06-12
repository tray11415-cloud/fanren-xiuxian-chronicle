/**
 * 凡人修仙傳・忠實境界階梯（canon 模式專用，與經典 RealmType 解耦）。
 * 十大境界 × 子境界（煉氣用「層」；築基起用 初/中/後/大圓滿），各有壽元與天劫。
 * realmType 為映射到既有 RealmType 字串（供戰鬥敵人生成 toRealmType 使用）。
 */
export interface RealmFeatures {
  trait: string; // 此境核心特點（一句話）
  flight: string; // 飛行能力（練氣築基須借法器代步；結丹起可禦器禦劍；元嬰可御空長程）
  natalTreasure: boolean; // 可否蘊養本命法寶（結丹起）
  nascentSoul: boolean; // 是否具元嬰（元嬰期起，元神離體不滅、可奪舍重生）
  lawRestricted: boolean; // 是否受天地法則所限（化神起：低階界不可隨意全力出手、人界靈氣難支撐）
  trial: string; // 突破「進入」此境的考驗（築基丹／凝丹心魔／元嬰天劫／空間節點偷渡…）
}

export interface CanonRealm {
  key: string;
  name: string; // 忠實境界名（修正 合道期→合體期、长生境→大乘期）
  tier: 'human' | 'spirit' | 'immortal';
  realmType: string; // 映射到 RealmType（合一字串）
  lifespan: number; // 該境界壽元（年）
  baseExp: number; // 該境界每子境界基礎修為上限
  hasTribulation: boolean; // 突破入此境是否需渡劫
  tribulationName?: string;
  layers?: number; // 煉氣期專用：十三層
  features?: RealmFeatures; // 境界特點與突破考驗（忠於原著）
}

// 子境界（築基起）
export const SUB_STAGES = ['初期', '中期', '後期', '大圓滿'];

export const CANON_REALMS: CanonRealm[] = [
  {
    key: 'qi', name: '煉氣期', tier: 'human', realmType: '炼气期', lifespan: 120, baseExp: 120, hasTribulation: false, layers: 13,
    features: { trait: '引氣入體、煉氣化力，凡軀初窺仙途', flight: '尚不能御空——須借飛行符器（竹蜻蜓之類）代步', natalTreasure: false, nascentSoul: false, lawRestricted: false, trial: '引氣入體、開闢經脈；功法須修至七層以上方有資格圖謀築基' },
  },
  {
    key: 'foundation', name: '築基期', tier: 'human', realmType: '筑基期', lifespan: 220, baseExp: 600, hasTribulation: false,
    features: { trait: '築基功成、法力初凝，得先天真火，正式列入修仙之列', flight: '始能御劍／禦器凌空——然仍須仰仗法器，非自身御空', natalTreasure: false, nascentSoul: false, lawRestricted: false, trial: '服「築基丹」衝關（丹藥奇缺、十取其一，多少煉氣修士困死於此瓶頸）' },
  },
  {
    key: 'core', name: '結丹期', tier: 'human', realmType: '金丹期', lifespan: 500, baseExp: 2000, hasTribulation: true, tribulationName: '凝丹瓶頸・碎丹之苦',
    features: { trait: '凝結金丹、法力化液，先天真火進為三昧真火', flight: '禦器禦劍飛行，瞬息百里', natalTreasure: true, nascentSoul: false, lawRestricted: false, trial: '凝丹瓶頸與碎丹之苦（百取其一；凝法力為丹、再碎丹逆轉全身經脈，痛不欲生）' },
  },
  {
    key: 'nascent', name: '元嬰期', tier: 'human', realmType: '元婴期', lifespan: 1000, baseExp: 6000, hasTribulation: true, tribulationName: '化丹為嬰・心魔反噬',
    features: { trait: '金丹破碎、凝結元嬰，元神離體不滅', flight: '御空長程、元嬰可離體神遊萬里', natalTreasure: true, nascentSoul: true, lawRestricted: false, trial: '心魔反噬與幻象折磨（先以畢生至懼、再以美夢至樂誘陷心神，須定靈丹／養魂木／婆羅珠護持，沉溺則癲狂入魔）' },
  },
  {
    key: 'spirit-sever', name: '化神期', tier: 'human', realmType: '化神期', lifespan: 2000, baseExp: 18000, hasTribulation: true, tribulationName: '化神瓶頸',
    features: { trait: '元嬰化神、神念成軀，初通天地元氣、掌大神通', flight: '念動即至——然在人界受天地法則所限，不可隨意全力出手', natalTreasure: true, nascentSoul: true, lawRestricted: true, trial: '化神瓶頸（人界靈氣無法長期承載化神修士，閉關進益銳減；修至大圓滿，必面臨飛升抉擇：其一走正規「飛靈臺」渡界——穩妥卻須蘊養化身、受三百年驅役；其二偷渡「空間節點」——迅捷卻九死一生，隔界之力足以壓滅元嬰）' },
  },
  {
    key: 'void-refine', name: '煉虛期', tier: 'spirit', realmType: '合体期', lifespan: 5000, baseExp: 50000, hasTribulation: true, tribulationName: '小天劫（三百年一渡）',
    features: { trait: '初入靈界、煉虛合道，始能驅使法則之力', flight: '御空縱橫（靈界再無人界之限）', natalTreasure: true, nascentSoul: true, lawRestricted: false, trial: '偷渡空間節點・飛升靈界（捨正規飛靈臺蘊養三百年而走薄弱節點：空間風暴肆虐、隔界之力足以壓滅元嬰，九死一生；入靈界後多為煉虛初期，靈氣濃郁十倍卻另有三百年一渡的小天劫等新困厄）' },
  },
  {
    key: 'integration', name: '合體期', tier: 'spirit', realmType: '合体期', lifespan: 12000, baseExp: 140000, hasTribulation: true, tribulationName: '大天劫（三千年一渡）',
    features: { trait: '神魂與道體相融、法則之力大成，位列靈界長老之尊', flight: '御空掌控自如', natalTreasure: true, nascentSoul: true, lawRestricted: false, trial: '大天劫（三千年一渡，紫金天雷之威遠勝小劫，須他人護法、提前三日調息方可一搏）' },
  },
  {
    key: 'mahayana', name: '大乘期', tier: 'spirit', realmType: '大乘期', lifespan: 30000, baseExp: 400000, hasTribulation: true, tribulationName: '紫金大天劫',
    features: { trait: '功參造化、半步天仙，直掌天地法則', flight: '法則加身、縱橫無礙', natalTreasure: true, nascentSoul: true, lawRestricted: false, trial: '紫金大天劫（萬載一徘徊亦難保必渡，修為精進極緩）' },
  },
  {
    key: 'tribulation', name: '渡劫期', tier: 'spirit', realmType: '大乘期', lifespan: 50000, baseExp: 900000, hasTribulation: true, tribulationName: '飛升天劫（天罡風→熔岩雨→紫金雷劫）',
    features: { trait: '醞釀飛升、迎天仙之劫，距仙界僅一步之遙', flight: '法則之軀、無拘無束', natalTreasure: true, nascentSoul: true, lawRestricted: false, trial: '飛升天劫（天罡風→熔岩雨→紫金雷劫，三重連環；過則飛升仙界、與天地同壽）' },
  },
  {
    key: 'true-immortal', name: '真仙', tier: 'immortal', realmType: '真仙', lifespan: 100000, baseExp: 2000000, hasTribulation: false,
    features: { trait: '飛升仙界、超脫凡塵，與天地同壽', flight: '逍遙仙界、來去無蹤', natalTreasure: true, nascentSoul: true, lawRestricted: false, trial: '（已超脫輪迴；仙界之路浩渺，非凡間可測）' },
  },
];

export function realmByIndex(i: number): CanonRealm {
  return CANON_REALMS[Math.max(0, Math.min(CANON_REALMS.length - 1, i))];
}

/** 由境界 index + 子境界 推出顯示名（煉氣用「N層」，餘用子境界）。 */
export function realmLabel(index: number, subStage: number, qiLayer = 1): string {
  const r = realmByIndex(index);
  if (r.layers) return `${r.name}${Math.max(1, Math.min(r.layers, qiLayer))}層`;
  return `${r.name}・${SUB_STAGES[Math.max(0, Math.min(3, subStage))]}`;
}

/** 由既有 RealmType 字串推估初始 canon 境界 index（創角／舊存檔回填用）。 */
export function realmIndexFromType(realmStr: string): number {
  const r = realmStr || '';
  if (/真仙/.test(r)) return 9;
  if (/大乘|渡劫|長生|长生/.test(r)) return 7;
  if (/合体|合體|合道/.test(r)) return 6;
  if (/化神/.test(r)) return 4;
  if (/元婴|元嬰/.test(r)) return 3;
  if (/金丹|結丹|结丹/.test(r)) return 2;
  if (/筑基|築基/.test(r)) return 1;
  return 0;
}
