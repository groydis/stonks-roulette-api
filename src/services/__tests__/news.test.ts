import { RedditNews } from '../../@types/news'
import { RedditHeadline } from '../../@types/reddit'
import { filterRedditData } from '../news'
import * as SampleData from './data'

describe('filterRedditData', () => {
  it('convert RedditHeadline array to RedditNews array', async () => {
    const sample: RedditHeadline[] = SampleData.RedditExampleData as unknown as RedditHeadline[]
    const redditNews: RedditNews[] = filterRedditData(sample)
    expect(redditNews.length).toEqual(sample.length)
  })
})
