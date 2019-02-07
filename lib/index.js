"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const v0_1 = require("./v0");
const errors_1 = require("./utils/errors");
// import * as Cors from 'cors';
// const cors = require('cors');
const cors = require("cors");
const app = express();
// const options:cors.CorsOptions = {
//   allowedHeaders: ["Origin", "X-Requested-With", "Content-Type", "Accept", "X-Access-Token"],
//   credentials: true,
//   methods: "GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE",
//   origin: 'https://localhost:3001',
//   preflightContinue: false
// };
//use cors middleware
app.use(cors());
//add your routes
//enable pre-flight
app.options("*", cors());
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
// const connection = db.connection || db.init();
// Application level "up route"
app.get('/up', (req, res) => {
    res.sendStatus(204);
});
// Major version sub-applications
app.use('/app', v0_1.app);
// Note: any error handlers added here should not be specific to
// any particular major version's sub-application
// This error handler should always be last!
app.use(errors_1.catchAllErrorHandler);
const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
// A default hello word route
app.get('/', (req, res) => {
    res.send({ hello: 'world' });
});
//# sourceMappingURL=index.js.map