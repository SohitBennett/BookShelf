
// const mongoose = require('mongoose')

// const FavoriteBookSchema = new mongoose.Schema({
//     email: { type: String, required: true }, // Use email instead of userId
//     bookId: { type: String, required: true },
//     // Add any other fields you need
// })

// const FavoriteBookModel = mongoose.model("FavoriteBook", FavoriteBookSchema)
// module.exports = FavoriteBookModel


//-----------------trying bookid as an array-------


const mongoose = require('mongoose');

const FavoriteBookSchema = new mongoose.Schema({
    email: { type: String, required: true },
    bookId: [{ type: String, required: true }], // Changed type to an array of strings
    
});

const FavoriteBookModel = mongoose.model("FavoriteBook", FavoriteBookSchema);
module.exports = FavoriteBookModel;
