"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const router = express.Router();
// const db = DB.init();
// import * as ReverseMd5 from "reverse-md5";
router.get('/getUrl', (req, res) => {
    console.log(req.body);
    res.send({ data: 'token added' });
});
exports.default = router;
//# sourceMappingURL=login.js.map