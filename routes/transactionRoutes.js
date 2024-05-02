import express from 'express'
import { indexTransactions } from '../controllers/transactionController.js'

const router = express.Router();

router.get('/', indexTransactions)


export default router;