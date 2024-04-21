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
const mongoose = require('mongoose')
const cors = require("cors")
const EmployeeModel = require('./models/Employee')
const FavoriteBookModel = require('./models/FavoriteBook')
const app = express()
app.use(express.json())
app.use(cors())

const jwt = require("jsonwebtoken");

const JWT_SECRET =
  "hvdvay6ert72839289()aiyg8t87qt72393293883uhefiuh78ttq3ifi78272jbkj?[]]pou89ywe";
// const JWT_SECRET = "sohitnew1234";



mongoose.connect("mongodb://127.0.0.1:27017/employee")


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



app.listen(3001, () => {
    console.log("Server is running");
});

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

app.post('/api/favorites/add', async (req, res) => {
    try {
        const { email, bookId } = req.body;

        // Check if the book is already in favorites
        const existingFavorite = await FavoriteBookModel.findOne({ email, bookId });
        if (existingFavorite) {
            return res.status(400).json({ error: 'Book already in favorites' });
        }

        // Create a new favorite book entry
        const newFavorite = new FavoriteBookModel({ email, bookId });
        await newFavorite.save();

        // Return success response
        return res.status(200).json({ message: 'Book added to favorites successfully' });
    } catch (error) {
        console.error('Error adding book to favorites:', error);
        return res.status(500).json({ error: 'Internal server error' });
    }
});

app.get('/check-favorite/:bookId', async (req, res) => {
    try {
      const { bookId } = req.params;
      const { email } = req.query;
  
      const favorite = await FavoriteBookModel.findOne({ bookId, userId: email });
  
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
