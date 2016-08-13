/**
 * Created by Luke on 13/08/2016.
 */
const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

const ModelSchema = new Schema({
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
        model_fields: [{ type: Schema.Types.ObjectId, ref: 'ModelField' }],
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model('Model', ModelSchema);