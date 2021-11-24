import { AxiosResponse } from 'axios'
import { CryptoListing } from '../@types/crypto'

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
