import { Request, Response } from 'express'
import { CryptoListing } from '../@types/crypto'
import { asyncHandler } from '../helpers/asynchandler'

import { getCryptoListings } from '../datasources/cryptodata'
import { sortCryptoListings } from '../services/cryptolistings'

export const listCryptos = asyncHandler(async (request: Request, response: Response) => {
  const { sort } = request.query

  let data: CryptoListing[] = await getCryptoListings()

  if (sort === 'asc') {
    data = sortCryptoListings(data)
  } else if (sort === 'desc') {
    data = sortCryptoListings(data, false)
  }
  response.status(200).json({ data })
})
