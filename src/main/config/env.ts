export default {
  mongoUrl: process.env.MONGO_URL || '',
  port: process.env.PORT || 5050,
  jwtSecret: process.env.JWT_SECRET || '',
  publicKey: process.env.PUBLIC_KEY || '',
  baseUrlKeyCloak: process.env.BASE_URL_KEYCLOAK || '',
  username: process.env.KEYCLOAK_USERNAME || '',
  password: process.env.KEYCLOAK_PASSWORD || '',
  clientId: process.env.KEYCLOAK_CLIENT_ID || '',
  realmName: '', // Adicione o nome do seu realm aqui
  urlMessageBroker: process.env.URLMESSAGEBROKER || ''
}
