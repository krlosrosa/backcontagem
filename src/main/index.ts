import { setupApp } from './config/app'
import env from './config/env'

const app = setupApp()

app.get('/ola', (req, res)=> {
  res.json('ola mundo')
})

app.listen(env.port, async () => {
  console.log(`rodando na porta ${env.port}`)
})
