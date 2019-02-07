"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const swaggerUi = require("swagger-ui-express");
const openapi_router_1 = require("openapi-router");
const v0_routes_1 = require("./v0-routes");
// import * as mysql from 'mysql';
exports.app = express();
const spec = require('../specs/v0.json');
const router = new openapi_router_1.Router(spec, exports.app);
exports.app.use(bodyParser.json());
// Documentation routes
exports.app.get('/spec', (req, res) => {
    res.send(spec);
});
exports.app.use(v0_routes_1.url);
exports.app.use('/docs', swaggerUi.serve, swaggerUi.setup(spec));
// TODO: implement routes
router.addCatchAllRoutes();
// Sub-application specific route handlers
exports.app.use(openapi_router_1.errorHandler);
//# sourceMappingURL=v0.js.map