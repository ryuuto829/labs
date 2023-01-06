# Mini Blog using Express.js

Simple blog using Express.js.

**[node-mini-blog.onrender.com](https://node-mini-blog.onrender.com/)**

![node-mini-blog](https://raw.githubusercontent.com/ryuuto829/labs/master/_assets/node-mini-blog.jpg)

> From the youtube tutorial [Node.js Crash Course Tutorial](https://www.youtube.com/playlist?list=PL4cUxeGkcC9jsz4LDYc6kv3ymONOKxwBU) by [The Net Ninja](https://www.youtube.com/channel/UCW5YeuERMmlnqo4oq8vwUpg).

## Features

This application an experiment that contains:

- CRUD and data modeling
- New post form
- Dashboard with all posts
- Routing & Deployment

## Build with

- Node.js (Express.js)
- Tailwind CSS
- EJS
- MongoDB

## Running Locally

1. Install dependencies

```bash
npm install
```

2. Change `.env.sample` fields with your data and rename it to `.env`

3. Run app

```bash
# Watch for changes and run the application
npm dev

# Build css styles
npm run tailwind:css
```

4. Build for production

```bash
# Build a produbtion version of css
tailwind:build

```

## (Optional) Deploy on Heroku

> NOTE: Project has been migrated from Heroku to Render.

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

#  to confirm that a remote named heroku has been set for your app
git remote -v
```

4. (Optional) Make changes to the code and save it

```bash
git add .
git commit -m "update"
```

5. Deploy our app from the custom folder `labs/node-mini-blog/`

```bash
# folder-name => node-mini-blog
git subtree push --prefix <folder-name> heroku master
```

6. Restart Heroku

```bash
heroku restart
```

7. Go to the website

```bash
heroku open
```
