# DiscBook-Server

This server is made to be connected with the [client of DiscBook](https://github.com/Jannis-Passalis/DiscBook-Client) and is deployed with [Heroku](https://dashboard.heroku.com/apps).

## Functionalities and Technology

### Functionalities

- Endpoints to get, post and patch data from the DiscBook Database (by using [PostgreSQL](https://www.postgresql.org) and [ElephantSQL](https://www.elephantsql.com).
- Sending emails to users with [Nodemailer](https://nodemailer.com/about)
- Authorization checks with middleware.
- Running server with [Express](https://expressjs.com)
- Managing the database models and migrations with [Sequelize](https://sequelize.org)

### Languages and Tools

<img src="https://camo.githubusercontent.com/fd1b1f4b9f0a1f6c2dfc6a96aac5f2a8f8b5a7a4df7be1fd2eba3f116eb9b8d1/68747470733a2f2f7777772e70696b706e672e636f6d2f706e676c2f6d2f3433302d343330393634305f6a732d6c6f676f2d6e6f64656a732d6c6f676f2d636c69706172742e706e67" alt="nodejs-icon" height="45px"/> <img src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/visual-studio-code/visual-studio-code.png" alt="vscode-icon" height="45px" /> <img src="https://camo.githubusercontent.com/72c27477f91493365e44b44306740892911721464f3f25d5b706c5deab24bfc2/68747470733a2f2f75706c6f61642e77696b696d656469612e6f72672f77696b6970656469612f636f6d6d6f6e732f7468756d622f392f39392f556e6f6666696369616c5f4a6176615363726970745f6c6f676f5f322e7376672f34383070782d556e6f6666696369616c5f4a6176615363726970745f6c6f676f5f322e7376672e706e67" alt="javascript-icon" height="45px" /> <img src="https://cdn.worldvectorlogo.com/logos/sequelize.svg" alt="sequelize-logo" height="45px" /> <img src="https://i1.wp.com/community.nodemailer.com/wp-content/uploads/2015/10/n2-2.png" alt="nodemailer-icon" height="45px" /> <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/1200px-Postgresql_elephant.svg.png" alt="postgresql-icon" height="45px" />

## Installation Guide

- Install dependencies

```
npm install
```

- Configure your database in `config/config.json`


- Create database, run migrations & seed data

```bash
npx sequelize-cli db:migrate
npx sequelize-cli db:seed:all
```

- Start your server

```
npm start
```

## Endpoints

| Method       | Path | Purpose | Required Parameteres| Auth         |
| --------- | --------- | -------- | ------------------------------- | ----|
| GET        | '/cds'   | Get all CDs in DB  | none | no |
| POST     | '/cds/add' | Add a new CD to DB  | album, year, cdCover, userId | yes |
| DELETE | /cds/delete/:cdId  | Delete a CD from DB | cdId | yes |
| PATCH | '/cds/sell/update/:cdId' | Update "forSale" from true to false or otherway around| cdId | yes  |
| POST | '/email' | Send email to owner of a cd from interested user | senderId, recieverId, album | yes |
| GET | 'user/me' | Get user that is logged in | none | yes |
| POST | '/login' | Login a user | email, password | no |
| POST | '/signup' | Sign up a new user | name, email, password, picture | no |
