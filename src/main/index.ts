import 'module-alias/register'
import { setupApp } from './config/app'
import env from './config/env'

const app = setupApp()

app.listen(env.port, async () => {
  console.log(`rodando na porta ${env.port}`)
})
