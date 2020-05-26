const express = require('express');
const app = express();
const mangoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv/config');

app.use(cors());
app.use(bodyParser.json());

const postsRoute = require('./routes/posts');

app.use('/posts', postsRoute);


mangoose.connect(
    process.env.DB_CONNECTION,
    { useUnifiedTopology: true }, 
    () => {
        console.log("C O N N E C T E D");
});

app.listen(3000);