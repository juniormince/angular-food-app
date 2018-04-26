const express = require('express');
const app = express();
// const mongoose = require('mongoose');

const PORT = process.env.PORT || 5000;

const bodyParser = require('body-parser');
//const foodRouter = require('routes/food.router');


app.use(express.static('server/public'));


//array to be moved to database
const food = [
    {
        food: "oreo",
        deliciousness_rating: 8,
        is_hot: false,
    }
];


//will be turned into a .use -- using router
app.get('/foods', (req, res) => {
    console.log(food);
    res.send({name: 'pasta', deliciousness_rating: 9, is_hot: true});
});




app.listen(PORT, () => {
    console.log(`listening on PORT: ${PORT}`);
});