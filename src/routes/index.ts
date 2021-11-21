import { Router } from 'express'

import * as systemController from '../controllers/system'

export const routes = (router: Router): Router => {
  router.get('/health', systemController.healthCheck)
  return router
}
