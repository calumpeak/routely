# Routely
The lovely route app.

## Getting Started

__Build For Production__

To build for production, simply run the below command:
```
$ npm run build && npm run start
```
And then navigate to `localhost:1860`

__Build For Development__
To build for development, the user will need two CLI windows open.
It's advisable that the user has a copy of nodemon install globally (`npm install nodemon --save-dev` if not)

In Window 1:
```
$ nodemon
```

In Window 2:
```
$ npm run dev
```
Webpack will build all necessary dependencies and proxy through incoming requests to the node server.
When changes are detected on the server/client then the application will rebuild itself.
Navigate to `localhost:8080` to view dev output.
