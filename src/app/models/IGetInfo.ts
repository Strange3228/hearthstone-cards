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
  locale: string
  name: string
  playerClass: string
  text: string
  type: string
  imageUrl: string
}

export interface Filters {
  classes: string
  factions: string
  qualities: string
  races: string
  type: string
}
