# Use a imagem oficial do Node.js
FROM node:20

# Defina o diretório de trabalho
WORKDIR /app

# Copie apenas os arquivos necessários para instalar dependências
COPY package*.json ./

COPY prisma ./prisma

# Instale as dependências
RUN npm install --legacy-peer-deps

# Copie o restante do código
COPY . .

# Compile o TypeScript
RUN npm run build

# Exponha a porta
EXPOSE 3000

# Inicie a aplicação
CMD ["npm", "start"]