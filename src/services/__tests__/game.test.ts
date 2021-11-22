/* eslint-disable camelcase */
import { CryptoListing, CryptoPlayer } from '../../@types/crypto'
import * as GameServce from '../game'

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

describe('cryptoListingsToCryptoPlayers', () => {
  it('should convert an array of CryptoListings o an Array of CryptoPlayers', () => {
    const cryptoList: CryptoListing[] = listings
    const cryptoPlayers: CryptoPlayer[] = GameServce.cryptoListingsToCryptoPlayers(cryptoList)
    expect(cryptoPlayers).not.toEqual(cryptoList)
  })
})
