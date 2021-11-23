import { Request, Response } from 'express'
import { asyncHandler } from '../helpers/asynchandler'
import { getTopRedditThreads } from '../datasources/reddit'

export const fetchNews = asyncHandler(async (request: Request, response: Response) => {
  const { subject } = request.params
  const { freq } = request.query
  const data = await getTopRedditThreads(subject, freq as string)
  response.status(200).json(data[0])
})
