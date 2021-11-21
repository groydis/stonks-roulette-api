import { GameData, WinnerData } from '../@types/game'
import { CryptoListing, CryptoPlayer } from '../@types/crypto'
import { shuffleCryptoListings, reduceCryptoList } from './cryptodata'

const random = (max: number): number => Math.floor(Math.random() * max)

export const pickWinner = (selections: CryptoListing[]): WinnerData => {
  const winnerPosition: number = random(selections.length)
  const winner: CryptoListing = selections[winnerPosition]
  return { winner, winnerPosition }
}

export const cleanUpCryptoPlayers = (listings: CryptoListing[]): CryptoPlayer[] => {
  const players: CryptoPlayer[] = listings.map((player) => ({
    id: player.id,
    name: player.name,
    symbol: player.symbol,
    price: player.quote.USD.price,
  }))
  return players
}

export const constructGame = async (cryptos: CryptoListing[], gameSize: number = 10): Promise<any> => {
  const shuffleData: CryptoListing[] = shuffleCryptoListings(cryptos)
  const listings: CryptoListing[] = reduceCryptoList(shuffleData, gameSize)

  const { winner, winnerPosition } = pickWinner(listings)

  const participants: CryptoPlayer[] = cleanUpCryptoPlayers(listings)

  const game: GameData = {
    winner,
    participants,
    specifications: {
      gameSize,
      winnerPosition,
    },
  }
  return game
}
