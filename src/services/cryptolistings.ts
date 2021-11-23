/* eslint-disable no-param-reassign */
/* eslint-disable no-plusplus */
import { CryptoListing } from '../@types/crypto'

export const sortCryptoListings = (listings: CryptoListing[], ascending: boolean): CryptoListing[] => {
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

export const reduceCryptoList = (listings: CryptoListing[], size: number): CryptoListing[] => {
  listings.length = size
  return listings
}
