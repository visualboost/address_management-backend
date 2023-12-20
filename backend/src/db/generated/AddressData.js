const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const { Address } = require("./Address");

const AddressDataSchema = new Schema(
    {
        firstname: { type: String, required: true, indexed: false },
        lastname: { type: String, required: false, indexed: false },
        email: { type: String, required: true, indexed: false },
        phonenumber: { type: String, required: false, indexed: false },
        address: { type: Address, required: false, indexed: false },
    },
    { timestamps: true },
);

module.exports = mongoose.model(
    "AddressData",
    AddressDataSchema,
    "AddressData",
);
