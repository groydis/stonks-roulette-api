import { AxiosResponse } from 'axios'
import { RedditHeadline } from '../@types/reddit'

const axios = require('axios')

export const getTopRedditThreads = async (crypto: string, freq: string): Promise<any> => {
  try {
    const requestOptions = {
      method: 'GET',
      url: `https://www.reddit.com/r/${crypto}/top.json?limit=5&t=${freq || 'day'}`,
      json: true,
    }
    const result: AxiosResponse = await axios(requestOptions)
    const headlines: RedditHeadline[] = result.data.data.children
    return headlines
  } catch (error) {
    throw new Error(error)
  }
}
