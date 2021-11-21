import { CryptoListing, CryptoPlayer } from './crypto'

export type GameData = {
  winner: CryptoListing,
  participants: CryptoPlayer[]
  specifications: {
    gameSize: number,
    winnerPosition: number,
  },
}

export type WinnerData = {
  winner: CryptoListing,
  winnerPosition: number
}
