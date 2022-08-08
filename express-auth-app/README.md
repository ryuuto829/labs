# Express Auth App

Simple App with Authentication built with Express.js and using JSON web tokens (JWT).

**[Demo on Heroku](https://express-auth-app829.herokuapp.com/)**

![express-auth-app](https://raw.githubusercontent.com/ryuuto829/labs/master/_assets/express-auth-app.jpg)

> From the youtube tutorial [Node.js Auth Tutorial (JWT)](https://www.youtube.com/watch?v=SnoAwLP1a-0&list=PL4cUxeGkcC9iqqESP8335DA5cRFp8loyp&ab_channel=TheNetNinja) by [The Net Ninja](https://www.youtube.com/channel/UCW5YeuERMmlnqo4oq8vwUpg).

## Features

This application is an experiment that contains:

- Login & Signup forms with input validation
- Authentication error handling
- Protected routes
- Data modeling
- Authentication state persistence using cookies
- Security w/ hashed passwords

## Build with

- Node.js (Express.js)
- EJS
- MongoDB (Mongoose)
- JWT

## Running Locally

1. Install dependencies

```bash
npm install
```

2. Change the `.env.sample` fields with your data and rename file to `.env`

3. Run the app

```bash
# Watch for changes and run the application
npm dev
```

## Deploy on Heroku

1. Be sure to include the init script in `package.json` file

```json
"scripts": {
    "start": "node app.js",
}
```

2. Check if Heroku is installed

```bash
heroku -v
```

3. Create a new project

```bash
heroku apps:create <project-name>
```

4. Add a remote link

```bash
git remote add <heroku-name> <remote>

git remote add heroku-express-app https://github.com/user/repo.git

#  to confirm that a remote named heroku has been set for your app
git remote -v
```

5. (Optional) Make changes to the code and save it

```bash
git add .
git commit -m "update"
```

6. Deploy your app from the custom folder

```bash
git subtree push --prefix <folder-name> <heroku-name> master
```
