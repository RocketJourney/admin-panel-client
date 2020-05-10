# Admin panel-client

Admin Panel client for AdminPanel project

Before start ensure you have installed npm and nodejs into your system to deploy.

To install dependencies execute:

```
$ npm install
```

After installing dependencies presents in package execute the next command to
build the files. Building all files will generate an output into dist directory, then you can
install this directory into any webserver to serve the content.

For production

```
$ npm run build
```

For other enviroments e.g., staging

```
$ npm run build:staging
```

If you want to test you can use locally the next command:

```
$ npm run start
```

The above command will start a webpack webserver to serve the content.
