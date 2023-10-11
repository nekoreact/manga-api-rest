require('dotenv').config();

const express = require("express");
const cors = require("cors");
// Mongo DB Database Part
const mongoose = require("mongoose");
const mongoString = process.env.DATABASE_URL
mongoose.connect(mongoString);
const database = mongoose.connection;
database.on('error', (error) => {
    console.log(error)
});
database.once('connected', () => { 
    console.log('Database Connected');
});
// Require routes
const routes = require('./routes/routes');

const app = express();

app.use(cors({
    origin: '*'
}));
app.use(express.json());
app.use('/api', routes);
app.listen(3000, () => {
    console.log('Server Started Woo');
})
