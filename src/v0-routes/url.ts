import * as express from 'express';
const router = express.Router();
import { default as DB } from '../utils/db';
// const db = DB.init();
// import * as ReverseMd5 from "reverse-md5";

router.get('/getlink', (req, res) => {
  console.log("in get link function");
  res.send({ link: 'https://www.bbc.com/sport' })
});

export default router;
