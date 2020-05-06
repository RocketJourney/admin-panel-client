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

```
$ npm run build
```

If you want to test you can use locally the next command:

```
$ npm run start
```

The above command will start a webpack webserver to serve the content.

NOTES:

- Ensure that the config is set correctly in `src/helpers/request.js`, configure the correct
  url to connect admin panel backend.
