import { Request, Response } from 'express'
import { GameData } from '../@types/game'
import { CryptoListing } from '../@types/crypto'
import { asyncHandler } from '../helpers/asynchandler'

import { getCryptoListings } from '../datasources/cryptodata'
import { constructGame } from '../services/game'

export const play = asyncHandler(async (request: Request, response: Response) => {
  const { size } = request.query
  const data: CryptoListing[] = await getCryptoListings()
  const game: GameData = await constructGame(data, Number(size) || 10)
  response.status(200).json({ game })
})
