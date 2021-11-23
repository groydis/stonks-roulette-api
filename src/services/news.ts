import { RedditNews } from '../@types/news'
import { RedditHeadline } from '../@types/reddit'

export const filterRedditData = (redditHeadlines: RedditHeadline[]): RedditNews[] => {
  const redditNews: RedditNews[] = Object.values(redditHeadlines).map((headline) => ({
    title: headline.data.title,
    overrideURL: headline.data.url_overridden_by_dest,
    score: headline.data.score,
    url: `https://reddit.com${headline.data.permalink}`,
    thumbnail: headline.data.thumbnail,
  }))
  return redditNews
}
