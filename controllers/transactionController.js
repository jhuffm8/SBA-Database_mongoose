import Transactions from '../models/transactionModels.js'

const indexTransactions = async (req, res) => {
    const result =  await Transactions.find()
        .limit(50)
    res.json(result).status(200)
  };



export {indexTransactions}