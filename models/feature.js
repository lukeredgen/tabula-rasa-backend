/**
 * Created by Luke on 13/08/2016.
 */
const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

const FeatureSchema = new Schema({
        projectId: {
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
        models: [{ type: Schema.Types.ObjectId, ref: 'Model' }],
        functions: [{ type: Schema.Types.ObjectId, ref: 'Function' }],
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model('Feature', FeatureSchema);