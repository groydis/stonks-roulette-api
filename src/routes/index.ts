import { Router } from 'express'

import * as systemController from '../controllers/system'
import * as cryptoController from '../controllers/crypto'
import * as gameController from '../controllers/game'
import * as newsController from '../controllers/news'

export const routes = (router: Router): Router => {
  router.get('/health', systemController.healthCheck)
  router.get('/crypto', cryptoController.listCryptos)
  router.get('/game/play', gameController.play)
  router.get('/news/:subject', newsController.fetchNews)
  return router
}
