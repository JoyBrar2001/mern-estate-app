const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const userRouter = require('./routes/user.route.js');
const authRouter = require('./routes/auth.route.js');

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.log(err));

const app = express();
app.use(express.json());

app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});

app.use('/api/user', userRouter)
app.use('/api/auth', authRouter)