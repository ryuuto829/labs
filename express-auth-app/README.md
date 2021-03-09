<div align="center">

# Express Auth App

Simple auth app using JWT on Express.

**Demo - https://express-auth-app829.herokuapp.com/**

</div>

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
npm dev
```

# Deploy on Heroku

1. Be sure to include init srcipt

```json
// package.json
"scripts": {
    "start": "node app.js",
}
```

2. Check if heroku is installed

```bash
heroku -v
```

3. Create a new project

```bash
heroku apps:create <project-name>
```

4. Add remote

```bash
git remote add <heroku-name> <remote>

git remote add heroku-express-app https://github.com/user/repo.git

#  to confirm that a remote named heroku has been set for your app
git remote -v
```

5. (optional) Make changes to the code and save it

```bash
git add .
git commit -m "update"
```

6. Deploy our app from the custom folder

```bash
# folder-name => node-mini-blog
git subtree push --prefix <folder-name> <heroku-name> master
```
