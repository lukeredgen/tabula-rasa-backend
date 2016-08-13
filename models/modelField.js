/**
 * Created by Luke on 13/08/2016.
 */
const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

const ModelFieldSchema = new Schema({
        modelId: {
            type: Schema.Types.ObjectId,
            required: true
        },
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

module.exports = mongoose.model('ModelField', ModelFieldSchema);