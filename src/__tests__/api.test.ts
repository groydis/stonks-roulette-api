import * as request from 'supertest'
import { GameData } from '../@types/game'
import server from '../index'

describe('GET /health', () => {
  it('should return 200 OK', (done) => {
    request(server).get('/health').expect(200, done)
  })
  it('should return 404', (done) => {
    request(server).get('/healthcheck').expect(404, done)
  })
})

describe('GET /crypto', () => {
  it('should return 200 OK', (done) => {
    request(server).get('/crypto').expect(200, done)
  })
})

describe('GET /game/play', () => {
  it('should return 200 OK', (done) => {
    request(server).get('/game/play').expect(200, done)
  })
  it('should return a game with the correct default size', (done) => {
    const size: number = 10
    request(server).get('/game/play')
      .expect('Content-Type', /json/)
      .expect(200)
      .then((response) => {
        const { participants } = response.body.game as GameData
        expect(participants.length).toBe(size)
        done()
      })
      .catch((error) => done(error))
  })
  it('should return a game with the correct size of 15', (done) => {
    const size: number = 15
    request(server).get(`/game/play?size=${size}`)
      .expect('Content-Type', /json/)
      .expect(200)
      .then((response) => {
        const { participants } = response.body.game as GameData
        expect(participants.length).toBe(size)
        done()
      })
      .catch((error) => done(error))
  })
})
