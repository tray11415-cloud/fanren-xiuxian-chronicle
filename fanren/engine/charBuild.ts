/** 由角色創建結果建構初始 PlayerStats（沿用既有 createInitialPlayer 再依出身/靈根覆寫）。 */
import type { PlayerStats, RealmType } from '../../types';
import { REALM_DATA } from '../../constants/index';
import { createInitialPlayer } from '../../utils/playerUtils';
import type { CharacterCreation } from '../types';
import { ORIGINS, SPIRITUAL_ROOT_PROFILES } from '../data/creationOptions';

export function buildCanonPlayer(creation: CharacterCreation): PlayerStats {
  const base = createInitialPlayer(creation.name, '');
  const origin = ORIGINS.find((o) => o.id === creation.originId) || ORIGINS[0];
  const rootProfile = SPIRITUAL_ROOT_PROFILES.find((r) => r.id === creation.spiritualRootId) || SPIRITUAL_ROOT_PROFILES[0];

  const realm = (origin?.startRealm || base.realm) as RealmType;
  const realmData = REALM_DATA[realm] || REALM_DATA[base.realm];
  const lvl = Math.max(1, Math.min(9, origin?.startRealmLevel || 1));

  const roots = rootProfile
    ? { ...rootProfile.roots }
    : base.spiritualRoots;

  return {
    ...base,
    realm,
    realmLevel: lvl,
    exp: 0,
    maxExp: realmData.maxExpBase,
    hp: realmData.baseMaxHp,
    maxHp: realmData.baseMaxHp,
    attack: realmData.baseAttack,
    defense: realmData.baseDefense,
    spirit: realmData.baseSpirit,
    physique: realmData.basePhysique,
    speed: realmData.baseSpeed,
    spiritStones: origin?.spiritStones ?? base.spiritStones,
    spiritualRoots: roots,
    lifespan: realmData.baseMaxLifespan,
    maxLifespan: realmData.baseMaxLifespan,
    cultivationArts: origin?.startingArtIds?.length ? Array.from(new Set(['art-basic-breath', ...origin.startingArtIds])) : base.cultivationArts,
  };
}
