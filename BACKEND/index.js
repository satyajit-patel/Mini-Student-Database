/*
    npm init
    npm i express dotenv cors mongoose
    index -> Routes -> Controller -> Model
    node index.js

    POST -> body -> raw -> JSON
    {
        "name": "Satyajit Patel",
        "reg": "23MAS10009"
    }
*/

const express = require('express');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT || 3000;
const DB_URL = process.env.DB_URL;
const cors = require('cors');
const dataRoute = require('./Routes/dataRoute');
const mongoose = require('mongoose');

const dbConnect = async() => {
    try {
        await mongoose.connect(`${DB_URL}/student_reg`);
        console.log('DB_CONNECTED');
    } catch(err) {
        console.log(err.message);
        process.exit(1);
    }
}
dbConnect();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use('/api/v1/data', dataRoute);
app.get('/', (req, res) => {
    res.send('server is up');
});
app.get('/ping', (req, res) => {
    res.send('pong');
})
app.listen(PORT, () => {
    console.log(`server is running at port ${PORT}`);
});