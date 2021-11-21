import * as express from 'express'
import * as dotenv from 'dotenv'

import { routes } from './routes'

dotenv.config({ path: `${__dirname}/.env` })

const app: express.Application = express()
const port: number = Number(process.env.PORT)

app.use('/', routes(express.Router()))

app.listen(port, () => {
  console.info(`API listening at http://localhost:${port}`)
})
