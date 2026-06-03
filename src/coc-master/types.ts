/**
 * Clash of Clans API Type Definitions
 * Ported from bottle/apps/backend/src/types/coc.ts
 */

export type JsonLocalizedName = Record<string, string>;

export type ImageUrls = Record<string, string>;

export type Long = string;

export type Role = 'NOT_MEMBER' | 'MEMBER' | 'LEADER' | 'ADMIN' | 'COLEADER';

export type WarFrequency =
  | 'UNKNOWN'
  | 'ALWAYS'
  | 'MORE_THAN_ONCE_PER_WEEK'
  | 'ONCE_PER_WEEK'
  | 'LESS_THAN_ONCE_PER_WEEK'
  | 'NEVER'
  | 'ANY';

export type ClanType = 'OPEN' | 'INVITE_ONLY' | 'CLOSED';

export type WarState =
  | 'CLAN_NOT_FOUND'
  | 'ACCESS_DENIED'
  | 'NOT_IN_WAR'
  | 'IN_MATCHMAKING'
  | 'ENTER_WAR'
  | 'MATCHED'
  | 'PREPARATION'
  | 'WAR'
  | 'IN_WAR'
  | 'ENDED';

export type BattleModifier = 'NONE' | 'HARD_MODE';

export type WarResult = 'LOSE' | 'WIN' | 'TIE';

export type Village = 'HOME_VILLAGE' | 'BUILDER_BASE' | 'CLAN_CAPITAL';

export type PlayerHouseElementType = 'GROUND' | 'ROOF' | 'FOOT' | 'DECO';

export type BattleType = 'HOME_VILLAGE' | 'RANKED' | 'LEGEND';

// ─── League & Ranking ───────────────────────────────────────────

export type League = {
  name?: JsonLocalizedName;
  id?: number;
  iconUrls?: ImageUrls;
};

export type LeagueTier = {
  name?: JsonLocalizedName;
  id?: number;
  iconUrls?: ImageUrls;
};

export type BuilderBaseLeague = {
  name?: JsonLocalizedName;
  id?: number;
};

export type WarLeague = {
  name?: JsonLocalizedName;
  id?: number;
};

export type CapitalLeague = {
  name?: JsonLocalizedName;
  id?: number;
};

export type LegendLeagueTournamentSeasonResult = {
  trophies?: number;
  id?: string;
  rank?: number;
};

// ─── Location ────────────────────────────────────────────────────

export type Location = {
  localizedName?: string;
  id?: number;
  name?: string;
  isCountry?: boolean;
  countryCode?: string;
};

// ─── Label ───────────────────────────────────────────────────────

export type Label = {
  name?: JsonLocalizedName;
  id?: number;
  iconUrls?: ImageUrls;
};

// ─── Language ────────────────────────────────────────────────────

export type Language = {
  name?: string;
  id?: number;
  languageCode?: string;
};

// ─── Player House ────────────────────────────────────────────────

export type PlayerHouseElement = {
  id?: number;
  type?: PlayerHouseElementType;
};

export type PlayerHouse = {
  elements?: PlayerHouseElement[];
};

// ─── Player Item Level ───────────────────────────────────────────

export type PlayerItemLevel = {
  level?: number;
  name?: JsonLocalizedName;
  maxLevel?: number;
  village?: Village;
  superTroopIsActive?: boolean;
  equipment?: PlayerItemLevel[];
};

// ─── Player Achievement ──────────────────────────────────────────

export type PlayerAchievementProgress = {
  stars?: number;
  value?: number;
  name?: JsonLocalizedName;
  target?: number;
  info?: JsonLocalizedName;
  completionInfo?: JsonLocalizedName;
  village?: Village;
};

// ─── Player Legend Statistics ────────────────────────────────────

export type PlayerLegendStatistics = {
  previousSeason?: LegendLeagueTournamentSeasonResult;
  previousBuilderBaseSeason?: LegendLeagueTournamentSeasonResult;
  bestBuilderBaseSeason?: LegendLeagueTournamentSeasonResult;
  legendTrophies?: number;
  currentSeason?: LegendLeagueTournamentSeasonResult;
  bestSeason?: LegendLeagueTournamentSeasonResult;
};

// ─── Player Clan ─────────────────────────────────────────────────

export type PlayerClan = {
  tag?: string;
  clanLevel?: number;
  name?: string;
  badgeUrls?: ImageUrls;
};

// ─── Player ──────────────────────────────────────────────────────

export type Player = {
  clan?: PlayerClan;
  league?: League;
  leagueTier?: LeagueTier;
  builderBaseLeague?: BuilderBaseLeague;
  role?: Role;
  warPreference?: 'OUT' | 'IN';
  attackWins?: number;
  defenseWins?: number;
  townHallLevel?: number;
  townHallWeaponLevel?: number;
  legendStatistics?: PlayerLegendStatistics;
  troops?: PlayerItemLevel[];
  heroes?: PlayerItemLevel[];
  heroEquipment?: PlayerItemLevel[];
  spells?: PlayerItemLevel[];
  labels?: Label[];
  tag?: string;
  name?: string;
  expLevel?: number;
  trophies?: number;
  bestTrophies?: number;
  donations?: number;
  donationsReceived?: number;
  builderHallLevel?: number;
  builderBaseTrophies?: number;
  bestBuilderBaseTrophies?: number;
  warStars?: number;
  achievements?: PlayerAchievementProgress[];
  clanCapitalContributions?: number;
  playerHouse?: PlayerHouse;
  currentLeagueGroupTag?: string;
  currentLeagueSeasonId?: Long;
  previousLeagueGroupTag?: string;
  previousLeagueSeasonId?: Long;
};

// ─── Clan Capital ────────────────────────────────────────────────

export type ClanDistrictData = {
  name?: JsonLocalizedName;
  id?: number;
  districtHallLevel?: number;
};

export type ClanCapital = {
  capitalHallLevel?: number;
  districts?: ClanDistrictData[];
};

// ─── Clan Member ─────────────────────────────────────────────────

export type ClanMember = {
  league?: League;
  leagueTier?: LeagueTier;
  builderBaseLeague?: BuilderBaseLeague;
  tag?: string;
  name?: string;
  role?: Role;
  townHallLevel?: number;
  expLevel?: number;
  clanRank?: number;
  previousClanRank?: number;
  donations?: number;
  donationsReceived?: number;
  trophies?: number;
  builderBaseTrophies?: number;
  playerHouse?: PlayerHouse;
};

// ─── Clan War Attack ─────────────────────────────────────────────

export type ClanWarAttack = {
  order?: number;
  attackerTag?: string;
  defenderTag?: string;
  stars?: number;
  destructionPercentage?: number;
  duration?: number;
};

// ─── Clan War Member ─────────────────────────────────────────────

export type ClanWarMember = {
  tag?: string;
  name?: string;
  mapPosition?: number;
  townhallLevel?: number;
  opponentAttacks?: number;
  bestOpponentAttack?: ClanWarAttack;
  attacks?: ClanWarAttack[];
};

// ─── War Clan ────────────────────────────────────────────────────

export type WarClan = {
  destructionPercentage?: number;
  tag?: string;
  name?: string;
  badgeUrls?: ImageUrls;
  clanLevel?: number;
  attacks?: number;
  stars?: number;
  expEarned?: number;
  members?: ClanWarMember[];
};

// ─── Clan War ────────────────────────────────────────────────────

export type ClanWar = {
  clan?: WarClan;
  teamSize?: number;
  attacksPerMember?: number;
  battleModifier?: BattleModifier;
  opponent?: WarClan;
  startTime?: string;
  state?: WarState;
  endTime?: string;
  preparationStartTime?: string;
};

// ─── Clan War Log ────────────────────────────────────────────────

export type ClanWarLogEntry = {
  clan?: WarClan;
  teamSize?: number;
  attacksPerMember?: number;
  battleModifier?: BattleModifier;
  opponent?: WarClan;
  endTime?: string;
  result?: WarResult;
};

export type ClanWarLog = ClanWarLogEntry[];

// ─── Clan ────────────────────────────────────────────────────────

export type Clan = {
  memberList?: ClanMember[];
  warLeague?: WarLeague;
  capitalLeague?: CapitalLeague;
  tag?: string;
  isFamilyFriendly?: boolean;
  isWarLogPublic?: boolean;
  warFrequency?: WarFrequency;
  clanLevel?: number;
  warWinStreak?: number;
  warWins?: number;
  warTies?: number;
  warLosses?: number;
  clanPoints?: number;
  chatLanguage?: Language;
  clanBuilderBasePoints?: number;
  clanCapitalPoints?: number;
  requiredTrophies?: number;
  requiredBuilderBaseTrophies?: number;
  requiredTownhallLevel?: number;
  labels?: Label[];
  name?: string;
  location?: Location;
  type?: ClanType;
  members?: number;
  description?: string;
  clanCapital?: ClanCapital;
  badgeUrls?: ImageUrls;
};
