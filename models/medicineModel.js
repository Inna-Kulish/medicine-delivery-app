const { Schema, model } = require("mongoose");

const { handleMongooseError } = require("../helpers");

const medicineSchema = new Schema(
    {
        name: {
            type: String,
        },
        price: {
            type: Number,
        },
        favorite: {
            type: Boolean,
            default: false,
        },
        owner: {
            type: Schema.Types.ObjectId,
            ref: "Store",
            require: true,
        }
    }, { timestamps: true, versionKey: false, }
);

medicineSchema.post('save', handleMongooseError);

const Medicine = model("Medicine", medicineSchema);

module.exports = Medicine;