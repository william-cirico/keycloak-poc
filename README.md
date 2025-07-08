# 🛡️ Keycloak POC com NestJS + Next.js

Este projeto é uma Prova de Conceito (POC) que demonstra como integrar o **Keycloak** para autenticação e autorização utilizando:

- 🧠 **NestJS** como backend (API REST protegida)
- 💻 **Next.js** como frontend (SPA com autenticação via Keycloak)
- 🔐 **Keycloak** como provedor de identidade (OIDC)

---

## 🚀 Tecnologias Utilizadas

- [Keycloak](https://www.keycloak.org/)
- [NestJS](https://nestjs.com/)
- [Next.js](https://nextjs.org/)
- [keycloak-js](https://www.npmjs.com/package/keycloak-js)
- [nestjs-keycloak-connect](https://www.npmjs.com/package/nest-keycloak-connect)

---

## 📁 Estrutura do Projeto

```
keycloak-poc/
├── backend/         # NestJS API
├── frontend/        # Next.js App
├── docker-compose.yml
├── README.md
```

---

## ⚙️ Pré-requisitos

- Node.js >= 18
- Docker e Docker Compose
- Yarn ou npm

---

## 🐳 Subindo o ambiente com Docker

```bash
docker-compose up -d
```

> Isso irá iniciar o Keycloak na porta `8080`. Acesse o painel: http://localhost:8080

- Realm: `poc-realm`
- Client: `nextjs-app`
- Usuário admin: `admin / admin`

---

## 📦 Instalação (modo manual)

### Backend - NestJS

```bash
cd backend
npm install
npm run start:dev
```

A API será executada em: `http://localhost:3001`

### Frontend - Next.js

```bash
cd frontend
npm install
npm run dev
```

O frontend será acessado em: `http://localhost:3000`

---

## 🔐 Funcionalidades

- Login via Keycloak
- Armazenamento de token JWT no frontend
- Proteção de rotas privadas no Next.js
- Guardas e decorators no NestJS para proteger endpoints por **role**

---

## 🧪 Testando a POC

1. Acesse o frontend em `http://localhost:3000`
2. Clique em **Login**
3. Faça o login com o usuário Keycloak
4. Acesse a rota protegida `/profile`
5. Veja o token JWT e as informações do usuário

---

## 📌 Exemplos de Uso no Backend

```ts
@Roles('admin')
@UseGuards(AuthGuard, RoleGuard)
@Get('admin')
getAdminData() {
  return { message: 'Apenas admins podem acessar' };
}
```

---

## 📝 Considerações

Esta POC tem como objetivo demonstrar:
- Como configurar e integrar Keycloak com uma aplicação moderna.
- Como proteger APIs e rotas com base em roles.
- Como utilizar o fluxo de autenticação OIDC com SPA.

---

## 📚 Referências

- [Documentação Oficial do Keycloak](https://www.keycloak.org/documentation)
- [nestjs-keycloak-connect](https://github.com/ferrerojosh/nest-keycloak-connect)
- [NextAuth com Keycloak (alternativa)](https://next-auth.js.org/providers/keycloak)

---

## 🧑‍💻 Autor

Desenvolvido por [William Círico] — [@william-cirico](https://github.com/william-cirico)

---

## 📝 Licença

Este projeto está licenciado sob a licença MIT.
