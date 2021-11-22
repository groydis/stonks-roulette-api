import * as request from 'supertest'
import server from '../index'

describe('GET /health', () => {
  it('should return 200 OK', (done) => {
    request(server).get('/health').expect(200, done)
  })
  it('should return 404', (done) => {
    request(server).get('/healthcheck').expect(404, done)
  })
})
