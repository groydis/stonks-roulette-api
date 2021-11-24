/* eslint-disable camelcase */
import { WinnerData, GameData } from '../../@types/game'
import { CryptoListing, CryptoPlayer } from '../../@types/crypto'
import * as GameServce from '../game'
import * as SampleData from './data'

describe('cryptoListingsToCryptoPlayers', () => {
  it('should convert an array of CryptoListings o an Array of CryptoPlayers', () => {
    const cryptoList: CryptoListing[] = SampleData.CryptoExampleData
    const cryptoPlayers: CryptoPlayer[] = GameServce.cryptoListingsToCryptoPlayers(cryptoList)
    expect(cryptoPlayers).not.toEqual(cryptoList)
  })
})

describe('pickWinner', () => {
  it('should pick a winner and return that winners place in the list', () => {
    const cryptoList: CryptoListing[] = SampleData.CryptoExampleData
    const winnerData: WinnerData = GameServce.pickWinner(cryptoList)
    expect(winnerData.winnerPosition).toEqual(cryptoList.findIndex((player) => player === winnerData.winner))
  })
})

describe('constructGame', () => {
  it('should return a game of the correct size', async () => {
    const gameSize: number = 2
    const cryptoList: CryptoListing[] = SampleData.CryptoExampleData
    const game: GameData = await GameServce.constructGame(cryptoList, gameSize)
    expect(game.specifications.gameSize).toEqual(gameSize)
  })
  it('should have the correct winnerPosition position in the participants array', async () => {
    const gameSize: number = 2
    const cryptoList: CryptoListing[] = SampleData.CryptoExampleData
    const game: GameData = await GameServce.constructGame(cryptoList, gameSize)
    expect(game.specifications.winnerPosition).toEqual(game.participants.findIndex((player) => player.id === game.winner.id))
  })
})
