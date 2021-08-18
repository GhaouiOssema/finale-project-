const mongoose = require("mongoose");

const noteSchema = new mongoose.Schema({
    studentId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "student",
    },
    subject: {
        type: mongoose.Schema.Types.String,
        ref: "teacher",
    },
    note: {
        type: Number,
    },
});

module.exports = mongoose.model("note", noteSchema);
