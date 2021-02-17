# Express Auth App

Simple auth app using JWT on Express.

![express-auth-app](https://raw.githubusercontent.com/ryuuto829/labs/master/_assets/express-auth-app.jpg)

> From the youtube tutorial [Node.js Auth Tutorial (JWT)](https://www.youtube.com/watch?v=SnoAwLP1a-0&list=PL4cUxeGkcC9iqqESP8335DA5cRFp8loyp&ab_channel=TheNetNinja) by [The Net Ninja](https://www.youtube.com/channel/UCW5YeuERMmlnqo4oq8vwUpg).

**This application an experiment that contains:**

- mongodb as database
- login & signup forms with validation
- auth error handling
- protected routes
- token with cookies using JWT
- hashing passwords
- login, sign up, logout

**Build with:**

- Express
- EJS
- MongoDB
- JWT

# Usage

1. Install dependencies

```bash
npm install
```

2. Change `.env.sample` fields with your data and rename it to `.env`

3. Run app

```bash
# Watch for changes and run the application
npm start
```

# API Limitation

Current limitation (using [express-rate-limit](https://www.npmjs.com/package/express-rate-limit])):

- Login attempts - 50 per hour
- New user created - 25 per hour
