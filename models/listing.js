const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listeningSchema = new Schema({
    title: {
        type: String,
        require: true,
    },
    description: {
        filename: String,
        type: String,
    },
    image: {
        url: String,
    },
    price: {
        type: String,
    },
    location: {
        type: String,
    },
    country: {
        type: String,
    },
});

const Listing = mongoose.model("Listing", listeningSchema);
module.exports = Listing;