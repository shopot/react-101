# mock-server-api

JSON Server API for Rolling Scopes School task "React.API".

## Setup and Running

- Use `node 16.x` or higher.
- Clone this repo: `$ git clone https://github.com/shopot/mock-server-api.git`.
- Go to downloaded folder: `$ cd mock-server-api`.
- Install dependencies: `$ npm install`.
- Start server: `$ npm start`.
- Now you can send requests to the address: `http://localhost:3000`.

## Create and deploy a project

### Create a new GitHub repository

- Create a new repository on GitHub `mock-server-api`
- Clone this repo: `$ git clone https://github.com/shopot/mock-server-api.git`
- Change directory: `$ cd mock-server-api`
- Remove the .git folder: `$ rm -rf .git`
- Create an empty Git repository: `$ git init`
- Run the git remote add origin command: `$ git remote add origin https://github.com/your_nickname/mock-server-api.git`
- Rename a branch: `$ git branch -M main`
- Pushing commits to a remote repository: `$ git push -u origin main`

### Deploying to Vercel

- Update or use the default [`db/catalog.json`](./db/catalog.json) in the repository
- Change or use the default [`assets/images`](./public/assets/images/) in the repository
- Sign Up or login into [Vercel](https://vercel.com)
- From the Vercel dashboard, click "**+ New Project**" then "**Import**" your repository
- In the "**Configure Project**" screen, leave everything default, add `npm install` and click "**Deploy**"
- Wait until deployment is done, and your own JSON server is ready to serve!
