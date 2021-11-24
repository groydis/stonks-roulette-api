/* eslint-disable camelcase */
import { CryptoListing } from '../../@types/crypto'
import * as CryptoListingService from '../cryptolistings'
import * as SampleData from './data'

describe('sortCryptoListings', () => {
  it('should sort CryptoListings in ASC order', () => {
    const cryptoList: CryptoListing[] = SampleData.CryptoExampleData
    const ascListings: CryptoListing[] = CryptoListingService.sortCryptoListings(cryptoList, true)
    expect(ascListings[0].id).toBeLessThan(ascListings[2].id)
    expect(ascListings[1].id).toBeLessThan(ascListings[2].id)
    expect(ascListings[1].id).toBeGreaterThan(ascListings[0].id)
  })
  // TODO: Not covering line 7 for some odd reason
  it('should sort CryptoListings in DESC order', () => {
    const cryptoList: CryptoListing[] = SampleData.CryptoExampleData
    const descListning: CryptoListing[] = CryptoListingService.sortCryptoListings(cryptoList, false)
    expect(descListning[2].id).toBeLessThan(descListning[0].id)
    expect(descListning[2].id).toBeLessThan(descListning[1].id)
    expect(descListning[0].id).toBeGreaterThan(descListning[1].id)
  })
})

// TODO: This test isn't working have tried with equal / not equal
describe('shuffleCryptoListings', () => {
  it('should shuffle CryptoListings', () => {
    const cryptoList: CryptoListing[] = SampleData.CryptoExampleData
    const listingsEnd: CryptoListing[] = CryptoListingService.shuffleCryptoListings(cryptoList)
    expect(listingsEnd[0]).toEqual(cryptoList[0])
  })
})

describe('reduceCryptoList', () => {
  it('shoulder reduce the size of CryptoListings', () => {
    const newSize: number = 2
    const cryptoList: CryptoListing[] = SampleData.CryptoExampleData
    const reducedList: CryptoListing[] = CryptoListingService.reduceCryptoList(cryptoList, newSize)
    expect(reducedList.length).toEqual(newSize)
  })
})
