import { CryptoListing, CryptoPlayer } from './crypto'
import { RedditNews } from './news'

export type GameData = {
  winner: CryptoListing,
  winnerNews: RedditNews[]
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
