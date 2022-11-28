export interface IGEtInfo  {
  patch: string
  classes: []
  sets: []
  types: []
  factions: []
  qualities: []
  races: []
  locales: []
}

export interface ICard {
  cardId: string
  cardSet: string
  dbfId: number
  health: number
  attack: number
  locale: string
  name: string
  playerClass: string
  rarity?: string
  text: string
  type: string
  imageUrl: string
  img?: string
  mechanics?: {
    [key: string] : string
  }
}

export interface Filters {
  classes: string
  factions: string
  qualities: string
  races: string
  type: string
}
