import express from 'express';
import app from './app';
import {v4 as uuid} from 'uuid';

import UserRoutes from '../modules/user/index.js';



let traceId = uuid();
const router = express.Router();

router.get('/', (req, res, next) => {
    console.log(chalk.bold('Health is okay!' + traceId));
    res.sendStatus(200);
});


router.use(UserRoutes);

