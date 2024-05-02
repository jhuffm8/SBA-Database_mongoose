import Customers from "../models/customerModels.js"

const indexCustomers = async (req, res) => {
    const result = await Customers.find()
        .limit(50)
     res.json(result).status(200)
};


export {indexCustomers}