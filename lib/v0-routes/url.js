"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const router = express.Router();
// const db = DB.init();
// import * as ReverseMd5 from "reverse-md5";
router.get('/getlink', (req, res) => {
    console.log("in get link function");
    res.send({ link: 'https://www.bbc.com/sport' });
});
exports.default = router;
//# sourceMappingURL=url.js.map