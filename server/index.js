// const express = require("express")
// const mongoose = require('mongoose')
// const cors = require("cors")
// const EmployeeModel = require('./models/Employee')

// const app = express()
// app.use(express.json())
// app.use(cors())

// mongoose.connect("mongodb://127.0.0.1:27017/employee")

// app.post('/loginsignup', (req, res) => {
//     const {email, password} = req.body;
//     EmployeeModel.findOne({email: email})
//     .then(user => {
//         if(user) {
//             if(user.password == password){
//                 res.json("Success")
//             }
//             else{
//                 res.json("The password is incorrect")
//             }
//         }
//         else{
//             res.json("No record existed")
//         }
//     })
// })

// app.post('/loginsignup', (req, res) => {
//     EmployeeModel.create(req.body)
//     .then(employees => res.json(employees))
//     .catch(err => res.json(err))
// })

// app.listen(3001, () => {
//     console.log("server is running")
// })


const express = require("express")
require('dotenv').config();
const mongoose = require('mongoose')
const cors = require("cors")
const axios = require('axios')
const EmployeeModel = require('./models/Employee')
const FavoriteBookModel = require('./models/FavoriteBook')
const app = express()
const port = process.env.PORT || 3001;
app.use(express.json())

// app.use(cors())
app.use(cors({
    origin: process.env.FRONTEND_URL || "*", 
    credentials: true
}));

const jwt = require("jsonwebtoken");

// const JWT_SECRET =
//   "hvdvay6ert72839289()aiyg8t87qt72393293883uhefiuh78ttq3ifi78272jbkj?[]]pou89ywe";
// const JWT_SECRET = "sohitnew1234";  //this was already commented in the last working code or commit

const JWT_SECRET = process.env.JWT_SECRET;

// mongoose.connect("mongodb://127.0.0.1:27017/employee")
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log("Connected to MongoDB Atlas"))
.catch((err) => console.error("MongoDB connection error:", err));

//login siginup route 
app.post('/loginsignup', (req, res) => {
    const { operation, name, email, password } = req.body;

    if (operation === "signup") {
        
        EmployeeModel.create({ name, email, password })
            .then(employee => res.json(employee))
            .catch(err => res.status(400).json({ message: err.message }));
    } else if (operation === "signin") {
        
        EmployeeModel.findOne({ email: email, password: password })
            .then(user => {
                if (user) {
                    // res.json("Success");
                    // const token = jwt.sign({ email: user.email }, JWT_SECRET);
                    const token = jwt.sign({ email: user.email }, JWT_SECRET, {
                        expiresIn: "7d",
                    });
                    if (res.status(201)) {
                        return res.json({ status: "ok", name: user.name, email: user.email, token: token});
                      } else {
                        return res.json({ error: "error" });
                      }
                } else {
                    res.status(401).json({ message: "Authentication failed. Invalid email or password." });
                }
            })
            .catch(err => res.status(500).json({ message: err.message }));
    } else {
        
        res.status(400).json({ message: "Invalid operation." });
    }
});

//username find route
app.post('/userName', (req, res) => {
    const {email} = req.body;

    EmployeeModel.findOne({email : email})
        .then(user => {
            if(user){
                return res.json({name: user.name});
            }
        })
        .catch(err => res.json({ message: err.message }));
    }
);



app.listen(port, () => {
    console.log("Server is running");
});
// fetch userdata route
app.post("/userData", async (req, res) => {
    const { token } = req.body;
    try {
        // const user = jwt.verify(token, JWT_SECRET);
        const userInfoFromStorage = localStorage.getItem("userInfo");
        const tokenParts = userInfoFromStorage.split('.');
        const encodedPayload = tokenParts[1];
        const decodedPayload = atob(encodedPayload);
        const parsedPayload = JSON.parse(decodedPayload);
        const user = parsedPayload;
        console.log("Decoded user:", user);
        const useremail = user.email;
        EmployeeModel.findOne({ email: useremail }) // Assuming your user model is named "EmployeeModel"
            .then((data) => {
                if (data) {
                    res.status(200).json({ status: "ok", data: data });
                } else {
                    res.status(404).json({ status: "error", message: "User not found" });
                }
            })
            .catch((error) => {
                res.status(500).json({ status: "error", message: error.message });
            });
    } catch (error) {
        if (error.name === "TokenExpiredError") {
            return res.status(401).json({ status: "error", message: "Token expired" });
        }
        res.status(401).json({ status: "error", message: "Invalid token" });
    }
});

//---------------working favoritees add------------

// app.post('/api/favorites/add', async (req, res) => {
//     try {
//         const { email, bookId } = req.body;

//         // Check if the book is already in favorites
//         const existingFavorite = await FavoriteBookModel.findOne({ email, bookId });
//         if (existingFavorite) {
//             return res.status(400).json({ error: 'Book already in favorites' });
//         }

//         // Create a new favorite book entry
//         const newFavorite = new FavoriteBookModel({ email, bookId });
//         await newFavorite.save();

//         // Return success response
//         return res.status(200).json({ message: 'Book added to favorites successfully' });
//     } catch (error) {
//         console.error('Error adding book to favorites:', error);
//         return res.status(500).json({ error: 'Internal server error' });
//     }
// });



//----------------trying new add favorite-----------
app.post('/api/favorites/add', async (req, res) => {
    try {
        const { email, bookId } = req.body;

        // Find existing entry for the provided email
        let existingFavorite = await FavoriteBookModel.findOne({ email });

        if (existingFavorite) {
            // If an entry exists, check if the book is already in favorites
            // console.log("found the email");
            if (existingFavorite.bookId.includes(bookId)) {
                return res.status(400).json({ error: 'Book already in favorites' });
            } else {
                // If the book is not in favorites, append it to the list of favorites
                existingFavorite.bookId.push(bookId);
                await existingFavorite.save();
                return res.status(200).json({ message: 'Book added to favorites successfully' });
            }
        } else {
            // If no entry exists, create a new favorite book entry
            const newFavorite = new FavoriteBookModel({ email, bookId: [bookId] });
            await newFavorite.save();
            return res.status(200).json({ message: 'Book added to favorites successfully' });
        }
    } catch (error) {
        console.error('Error adding book to favorites:', error);
        return res.status(500).json({ error: 'Internal server error' });
    }
});



//-------------------check user-------------

app.get('/api/existUser', async (req, res) => {
    try {
        const { email } = req.query;

        // Find existing entry for the provided email
        let existingUser = await FavoriteBookModel.findOne({ email });
        
        if (existingUser) {
            res.json({ isExist: true });
        } else {
            res.json({ isExist: false })
        }
    } catch (error) {
        console.error('Error finding User', error);
        return res.status(500).json({ error: 'Internal server error' });
    }
});





//---------------working check faorite ---------------
app.get('/check-favorite/:bookId', async (req, res) => {
    try {
      const { bookId } = req.params;
      const { email } = req.query;
  
      const favorite = await FavoriteBookModel.findOne({ bookId,email });
  
      if (favorite) {
        res.json({ isFavorite: true });
      } else {
        res.json({ isFavorite: false });
      }
    } catch (error) {
      console.error('Error checking favorite:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });


//-----------------trying ml model---------------------

app.get('/api/recommend/:book_title', async (req, res) => {
    try {
        const bookTitle = req.params.book_title;
        const response = await axios.post(`http://localhost:8000/recommend_books`, { user_input: bookTitle });
        res.json(response.data);
    } catch (error) {
        console.error('Error fetching recommendations:', error);
        res.status(500).send('Server Error');
    }
});





