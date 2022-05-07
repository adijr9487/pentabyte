const mongoose = require("mongoose");

const AdminSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    zip: {
        type: Number,
        validate: {
            validator: function (val) {
                return /^[1-9]{1}[0-9]{2}\s{0,1}[0-9]{3}$/.test(val);
            },
        },
        required: true,
        unique: true,
    },
    // verified: {
    //     type: Boolean,
    //     default: false
    // }
});

const Admin = mongoose.model("Admin", AdminSchema);

module.exports = Admin;
