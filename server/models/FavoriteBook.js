
const mongoose = require('mongoose')

const FavoriteBookSchema = new mongoose.Schema({
    email: { type: String, required: true }, // Use email instead of userId
    bookId: { type: String, required: true },
    // Add any other fields you need
})

const FavoriteBookModel = mongoose.model("FavoriteBook", FavoriteBookSchema)
module.exports = FavoriteBookModel
