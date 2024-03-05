const { Schema, model } = require("mongoose");

const { handleMongooseError } = require("../helpers");

const storeSchema = new Schema(
    {
        name: {
            type: String,
        },
        address: {
            type: String,
        }
    }, { timestamps: true, versionKey: false, }
);

storeSchema.post('save', handleMongooseError);

const Store = model("Store", storeSchema);

module.exports = Store;