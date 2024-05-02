import { ObjectId } from "bson";
import mongoose from "mongoose";

const Schema = mongoose.Schema;

const customerSchema = new Schema ({
    _id: {
        type: ObjectId
    },
    username: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    birthdate: {
        type: Date,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    active: {
        type: Boolean
    },
    accounts: {
        type: [Number]
    },
});


export default mongoose.model("Customers", customerSchema);