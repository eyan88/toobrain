const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

app.use('/login', (req,res) => {
    console.log("received login request");
    // save req.body.email and req.body.password (hashed)
    res.send({
        token:'test123',
    });
});

app.listen(8080, () => {
    console.log('api is running on localhost:8080');
})