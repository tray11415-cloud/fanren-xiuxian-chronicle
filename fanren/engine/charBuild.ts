/** 由角色創建結果建構初始 PlayerStats（沿用既有 createInitialPlayer 再依出身/靈根覆寫）。 */
import type { PlayerStats, RealmType } from '../../types';
import { REALM_DATA } from '../../constants/index';
import { createInitialPlayer } from '../../utils/playerUtils';
import type { CharacterCreation } from '../types';
import { ORIGINS, SPIRITUAL_ROOT_PROFILES } from '../data/creationOptions';
import { combatStatMult, rootPotency } from './aptitude';

export function buildCanonPlayer(creation: CharacterCreation): PlayerStats {
  const base = createInitialPlayer(creation.name, '');
  const origin = ORIGINS.find((o) => o.id === creation.originId) || ORIGINS[0];
  const rootProfile = SPIRITUAL_ROOT_PROFILES.find((r) => r.id === creation.spiritualRootId) || SPIRITUAL_ROOT_PROFILES[0];

  const realm = (origin?.startRealm || base.realm) as RealmType;
  const realmData = REALM_DATA[realm] || REALM_DATA[base.realm];
  const lvl = Math.max(1, Math.min(9, origin?.startRealmLevel || 1));

  const alloc = creation.allocation;
  // 靈根：優先採用開局點數分配的五行；無則沿用舊制靈根模板。
  const roots = alloc
    ? { ...alloc.roots }
    : rootProfile
      ? { ...rootProfile.roots }
      : base.spiritualRoots;

  // 悟性與心性：點數分配優先；無則擲取（30~80，金手指悟性+8）。
  const roll = () => 30 + Math.round(Math.random() * 50);
  const ggBonus = creation.goldenFinger ? 8 : 0;
  const comprehension = alloc ? Math.max(1, Math.min(100, alloc.comprehension)) : Math.max(10, Math.min(99, roll() + ggBonus));
  const daoHeart = alloc ? Math.max(1, Math.min(100, alloc.daoHeart)) : Math.max(10, Math.min(99, roll()));

  // 變異靈根（異靈根）：較五行更純更利，計入靈根強度（增益神識/術法）。
  const variantVal = alloc && alloc.variantType && (alloc.variantValue || 0) > 0 ? Math.max(0, Math.min(100, alloc.variantValue || 0)) : 0;
  const variantRoot = variantVal > 0 ? { type: alloc!.variantType!, value: variantVal } : null;

  // 戰鬥屬性：以境界基礎值 ×（點數＋靈根/悟性加成）烘焙起手值（術法/爭鬥反映靈根與悟性；異靈根尤利神識）。
  const pot = Math.max(rootPotency(roots), variantVal);
  const cm = (stat: 'attack' | 'defense' | 'spirit' | 'physique' | 'speed', basV: number) =>
    Math.round(basV * (alloc ? combatStatMult(stat, (alloc as any)[stat] || 0, pot, comprehension) : 1));
  const maxHp = Math.round(realmData.baseMaxHp * (alloc ? 1 + Math.min(100, alloc.physique) / 100 : 1)); // 體魄亦壯氣血

  return {
    ...base,
    comprehension,
    daoHeart,
    agility: alloc ? Math.max(0, Math.min(100, alloc.speed)) : 0, // 速度稟賦（旅行/逃離）
    variantRoot,
    realm,
    realmLevel: lvl,
    exp: 0,
    maxExp: realmData.maxExpBase,
    hp: maxHp,
    maxHp,
    attack: cm('attack', realmData.baseAttack),
    defense: cm('defense', realmData.baseDefense),
    spirit: cm('spirit', realmData.baseSpirit),
    physique: cm('physique', realmData.basePhysique),
    speed: cm('speed', realmData.baseSpeed),
    spiritStones: origin?.spiritStones ?? base.spiritStones,
    lotteryTickets: 0, // canon 模式無抽獎系統，移除開局十連券
    lotteryCount: 0,
    spiritualRoots: roots,
    lifespan: realmData.baseMaxLifespan,
    maxLifespan: realmData.baseMaxLifespan,
    cultivationArts: origin?.startingArtIds?.length ? Array.from(new Set(['art-basic-breath', ...origin.startingArtIds])) : base.cultivationArts,
  };
}
