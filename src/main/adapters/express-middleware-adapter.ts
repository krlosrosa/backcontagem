import { type Middleware } from '@/presentation/protocols'
import { type Response, type NextFunction } from 'express'
import jwt from 'jsonwebtoken'
import { type CustomRequest } from './custom-accountId'

export const adaptMiddleware = (middleware: Middleware) => {
  return async (req: CustomRequest, res: Response, next: NextFunction) => {
    const decodeJwt = jwt.decode(req.headers?.authorization?.replace('Bearer ', '')) as any
    const request = {
      accessToken: req.headers?.authorization?.replace('Bearer ', ''),
      ...(req.headers || {}),
      ...(req.params || {})
    }
    const httpResponse = await middleware.handle(request)
    if (httpResponse.statusCode === 200) {
      Object.assign(req, { ...httpResponse.body, accountId: decodeJwt?.sub as string })
      next()
    } else {
      res.status(httpResponse.statusCode).json({
        error: httpResponse.body.message
      })
    }
  }
}
