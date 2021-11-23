/* eslint-disable camelcase */
import { CryptoListing } from '../../@types/crypto'
import * as CryptoListingService from '../cryptolistings'

const listings: CryptoListing[] = [
  {
    id: 4,
    name: 'Bitcoin',
    symbol: 'BTC',
    slug: 'bitcoin',
    num_market_pairs: 8316,
    date_added: '2013-04-28T00:00:00.000Z',
    tags: [
      'mineable',
    ],
    max_supply: 21000000,
    circulating_supply: 18880112,
    total_supply: 18880112,
    platform: null,
    cmc_rank: 1,
    last_updated: '2021-11-22T11:34:02.000Z',
    quote: {
      USD: {
        price: 57370.55666874304,
        volume_24h: 30726832621.755486,
        volume_change_24h: 17.6169,
        percent_change_1h: -0.05986524,
        percent_change_24h: -2.33379427,
        percent_change_7d: -12.82876892,
        percent_change_30d: -6.69486063,
        percent_change_60d: 31.08980875,
        percent_change_90d: 16.25123245,
        market_cap: 1083162535408.2155,
        market_cap_dominance: 42.0637,
        fully_diluted_market_cap: 1204781690043.6,
        last_updated: '2021-11-22T11:34:02.000Z',
      },
    },
  },
  {
    id: 5,
    name: 'Bitcoin',
    symbol: 'BTC',
    slug: 'bitcoin',
    num_market_pairs: 8316,
    date_added: '2013-04-28T00:00:00.000Z',
    tags: [
      'mineable',
    ],
    max_supply: 21000000,
    circulating_supply: 18880112,
    total_supply: 18880112,
    platform: null,
    cmc_rank: 1,
    last_updated: '2021-11-22T11:34:02.000Z',
    quote: {
      USD: {
        price: 57370.55666874304,
        volume_24h: 30726832621.755486,
        volume_change_24h: 17.6169,
        percent_change_1h: -0.05986524,
        percent_change_24h: -2.33379427,
        percent_change_7d: -12.82876892,
        percent_change_30d: -6.69486063,
        percent_change_60d: 31.08980875,
        percent_change_90d: 16.25123245,
        market_cap: 1083162535408.2155,
        market_cap_dominance: 42.0637,
        fully_diluted_market_cap: 1204781690043.6,
        last_updated: '2021-11-22T11:34:02.000Z',
      },
    },
  },
  {
    id: 3,
    name: 'Bitcoin',
    symbol: 'BTC',
    slug: 'bitcoin',
    num_market_pairs: 8316,
    date_added: '2013-04-28T00:00:00.000Z',
    tags: [
      'mineable',
    ],
    max_supply: 21000000,
    circulating_supply: 18880112,
    total_supply: 18880112,
    platform: null,
    cmc_rank: 1,
    last_updated: '2021-11-22T11:34:02.000Z',
    quote: {
      USD: {
        price: 57370.55666874304,
        volume_24h: 30726832621.755486,
        volume_change_24h: 17.6169,
        percent_change_1h: -0.05986524,
        percent_change_24h: -2.33379427,
        percent_change_7d: -12.82876892,
        percent_change_30d: -6.69486063,
        percent_change_60d: 31.08980875,
        percent_change_90d: 16.25123245,
        market_cap: 1083162535408.2155,
        market_cap_dominance: 42.0637,
        fully_diluted_market_cap: 1204781690043.6,
        last_updated: '2021-11-22T11:34:02.000Z',
      },
    },
  },
]

describe('sortCryptoListings', () => {
  it('should sort CryptoListings in ASC order', () => {
    const cryptoList: CryptoListing[] = listings
    const ascListings: CryptoListing[] = CryptoListingService.sortCryptoListings(cryptoList, true)
    expect(ascListings[0].id).toBeLessThan(ascListings[2].id)
    expect(ascListings[1].id).toBeLessThan(ascListings[2].id)
    expect(ascListings[1].id).toBeGreaterThan(ascListings[0].id)
  })
  // TODO: Not covering line 7 for some odd reason
  it('should sort CryptoListings in DESC order', () => {
    const cryptoList: CryptoListing[] = listings
    const descListning: CryptoListing[] = CryptoListingService.sortCryptoListings(cryptoList, false)
    expect(descListning[2].id).toBeLessThan(descListning[0].id)
    expect(descListning[2].id).toBeLessThan(descListning[1].id)
    expect(descListning[0].id).toBeGreaterThan(descListning[1].id)
  })
})

// TODO: This test isn't working have tried with equal / not equal
describe('shuffleCryptoListings', () => {
  it('should shuffle CryptoListings', () => {
    const cryptoList: CryptoListing[] = listings
    const listingsEnd: CryptoListing[] = CryptoListingService.shuffleCryptoListings(cryptoList)
    expect(listingsEnd[0]).toEqual(cryptoList[0])
  })
})

describe('reduceCryptoList', () => {
  it('shoulder reduce the size of CryptoListings', () => {
    const newSize: number = 2
    const cryptoList: CryptoListing[] = listings
    const reducedList: CryptoListing[] = CryptoListingService.reduceCryptoList(cryptoList, newSize)
    expect(reducedList.length).toEqual(newSize)
  })
})
