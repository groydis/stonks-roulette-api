import { Response, NextFunction, Request } from 'express'
import { asyncHandler } from '../asyncHandler'

const req: any = 'req'
const res: any = 'res'
const nextFn: any = 'next'

describe('asyncHandler', () => {
  it('should pass through', async () => {
    const fn = async (
      request: Request,
      response: Response,
      next: NextFunction
    ) => ({ request, response, next })

    const result = await asyncHandler(fn)(req, res, nextFn)

    expect(result).toStrictEqual({
      request: 'req',
      response: 'res',
      next: 'next',
    })
  })

  it('should catch error', async () => {
    const errorMessage = 'Testing error catching'
    const fn = async () => { throw errorMessage }

    const result = await asyncHandler(fn)(req, res, (message: string) => message)

    expect(result).toStrictEqual(errorMessage)
  })
})
