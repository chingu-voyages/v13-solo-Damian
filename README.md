# Insect - Simple Issue Tracker

Bug tracking tool. Heroku deployable.

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
npm start # run both server and web client
npm run dev # run server with nodemon and web client
npm run server # run just server
npm run dev-server # run just server with nodemon
npm run ui # run just UI
```

## Server: API DOC

### Issues

List of available projects:

```bash
GET /issues/projects
```

Fetch all issues issues. Response is paginated.
Optional query parameters: page and limit.
Required: project name

```bash
GET /issues/:project
```

Create new Issue in project.

```bash
POST /issues/:project
```

Retrieve issue comments. Endpoint not paginated yet.

```bash
GET /issues/:issueId/comments
```

Create a comment for issue:

```bash
POST /issues/:issueId/comments
```

Delete comment for issue:

```bash
DELETE /issues/comments/:commentId
```

Receive single issue by \_id

```bash
GET /issues/details/:id
```

Update Issue

```bash
PUT /issues/details/:id
```

Delete Issue

```bash
DELETE /issues/details/:id
```

### Application settings

Receive app settings - values for priority and status. Currently can be changed only by code change.

```bash
GET /settings
```

### User Authentication

Creating new user

```bash
POST /users/register
```

Updating user

```bash
POST /users/update-user
```

User details (default project and display name) by email

```bash
GET /users/user/email
```

Login

```bash
post /users/login
```

Logout

```bash
post /users/logout
```

Refresh token

```bash
post /users/refresh_token
```

## Author

Damian Pagowski.
Email: d.pagowski@gmail.com

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)
