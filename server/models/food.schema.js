const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const foodSchema = new Schema ({
    name:   {   },
    deliciousness_rating: {     },
    is_hot: {   }
});

module.exports = foodSchema;