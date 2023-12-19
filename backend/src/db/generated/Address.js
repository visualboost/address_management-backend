const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AddressSchema = new Schema(
    {
        housenumber: { type: Number, required: false, indexed: false },
        street: { type: String, required: false, indexed: false },
        location: {
            type: {
                type: String,
                enum: ["Point"],
                required: false,
            },
            coordinates: {
                type: [Number],
                required: false,
            },
        },
    },
    { timestamps: true },
);

AddressSchema.index({ location: "2dsphere" });

module.exports = {
    Address: AddressSchema,
};
