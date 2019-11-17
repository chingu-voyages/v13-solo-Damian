# Insect - Simple Issue Tracker

Simple bug tracking tool. Heroku deployable

Server app - REST api built using Node, Express and Mongo
Client app - built with React, Redux and Bootstrap


## Installation

App requires .env file to run locally. Environment variables must be set while deploying it to Heroku.
Example:
```bash
MONGOLAB_URI=CONNECTION_STRING
SECRET=A_SECRET_PHRASE
SERVER_PORT=3030
APP_WEB_PORT=3040
```
Then just run:

```bash
npm install
```
## Running app

```bash
npm run dev-server
```
```bash
npm start
```

## API DOC

```bash
GET /issues

POST /issues

## in progress
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)