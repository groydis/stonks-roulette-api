import { GameData, WinnerData } from '../@types/game'
import { CryptoListing, CryptoPlayer } from '../@types/crypto'
import { shuffleCryptoListings, reduceCryptoList } from './cryptolistings'
import { RedditNews } from '../@types/news'
import { RedditHeadline } from '../@types/reddit'
import { getTopRedditThreads } from '../datasources/reddit'
import { filterRedditData } from './news'

const random = (max: number): number => Math.floor(Math.random() * max)

export const pickWinner = (selections: CryptoListing[]): WinnerData => {
  const winnerPosition: number = random(selections.length)
  const winner: CryptoListing = selections[winnerPosition]
  return { winner, winnerPosition }
}

export const cryptoListingsToCryptoPlayers = (listings: CryptoListing[]): CryptoPlayer[] => {
  const players: CryptoPlayer[] = listings.map((player) => ({
    id: player.id,
    name: player.name,
    symbol: player.symbol,
    price: player.quote.USD.price,
  }))
  return players
}

export const constructGame = async (cryptos: CryptoListing[], gameSize: number): Promise<GameData> => {
  const shuffleData: CryptoListing[] = shuffleCryptoListings(cryptos)
  const listings: CryptoListing[] = reduceCryptoList(shuffleData, gameSize)

  const { winner, winnerPosition } = pickWinner(listings)

  const redditData: RedditHeadline[] = await getTopRedditThreads(winner.name, 'day')
  const winnerNews: RedditNews[] = filterRedditData(redditData)

  const participants: CryptoPlayer[] = cryptoListingsToCryptoPlayers(listings)

  const game: GameData = {
    winner,
    winnerNews,
    participants,
    specifications: {
      gameSize,
      winnerPosition,
    },
  }
  return game
}
