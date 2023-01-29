const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const userRouter = require('./routes/userRouter');
const noteRouter = require('./routes/noteRouter');
const { default: mongoose } = require('mongoose');

app.use(express.json());
app.use(cors());
app.use('/users', userRouter);
app.use('/api/notes', noteRouter)

const URI = process.env.REACT_APP_MONGO_URI;

mongoose.connect(
    URI,
    (err) => {
        if (err) throw err;
        console.log("connected to MongoDB");
    }
);

app.listen(8080, () => {
    console.log('api is running on localhost:8080');
})