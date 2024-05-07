
import mongoose from "mongoose";

const Schema = mongoose.Schema;

const accountSchema = new Schema ({
    account_id: {
        type: Number,
        required: true
    },
    limit: {
        type: Number,
        min: 100,
        max:10000,
        default: 1000
    },
    products: {
        type: [String],
        required: true
    }
});

export default mongoose.model("Accounts", accountSchema);