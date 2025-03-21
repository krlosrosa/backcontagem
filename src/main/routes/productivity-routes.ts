import { type Router } from 'express'
import { adaptRoute } from '../adapters/express-route-adapter'
import { makeAddNewCounted } from '../factories/controllers/addNewCounted'

export default (router: Router): void => {
  router.get('/teste', (req, res)=> {
    res.json('ok')
  })
  router.post('/cadastrarcontagem', adaptRoute(makeAddNewCounted()))
}
