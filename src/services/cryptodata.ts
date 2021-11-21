import { AxiosResponse } from 'axios'
import { CryptoListing } from '../@types/crypto'

/* Example in Node.js ES6 using request-promise */
const axios = require('axios')

export const getCryptoListings = async (): Promise<CryptoListing[]> => {
  try {
    const requestOptions = {
      method: 'GET',
      url: 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest',
      qs: {
        start: '1',
        limit: '5000',
        convert: 'USD',
      },
      headers: {
        'X-CMC_PRO_API_KEY': `${process.env.CRYPTOKEY}`,
      },
      json: true,
      gzip: true,
    }
    const result: AxiosResponse = await axios(requestOptions)
    const listings: CryptoListing[] = result.data.data
    return listings
  } catch (error) {
    throw new Error(error)
  }
}

export const sortCryptoListings = (listings: CryptoListing[], ascending: boolean = true): CryptoListing[] => {
  if (ascending) {
    return listings.sort((a, b) => (a.id > b.id ? 1 : -1))
  }
  return listings.sort((a, b) => (a.id < b.id ? 1 : -1))
}

export const shuffleCryptoListings = (listings: CryptoListing[]): CryptoListing[] => {
  let currentIndex: number = listings.length
  let randomIndex: number

  // While there remain elements to shuffle...
  while (currentIndex !== 0) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex--;

    // And swap it with the current element.
    [listings[currentIndex], listings[randomIndex]] = [
      listings[randomIndex], listings[currentIndex]]
  }

  return listings
}

export const reduceCryptoList = (listings: CryptoListing[], size: number = 10): CryptoListing[] => {
  listings.length = size
  return listings
}
