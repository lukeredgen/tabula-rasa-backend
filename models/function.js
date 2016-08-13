/**
 * Created by Luke on 13/08/2016.
 */
const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

const FunctionSchema = new Schema({
        name: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model('Function', FunctionSchema);