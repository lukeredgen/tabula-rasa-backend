/**
 * Created by Luke on 13/08/2016.
 */
const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

const ReleaseSchema = new Schema({
        projectId: {
            type: Schema.Types.ObjectId,
            required: true
        },
        version: {
            type: Number,
            min: 1,
            max: 10 ['No more versions permitted.']
        },
        codename: {
            type: String,
            required: true
        },
        author: {
            type: Schema.Types.ObjectId,
            ref: 'User'
        },
        features: [{ type: Schema.Types.ObjectId, ref: 'Feature' }],
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model('Release', ReleaseSchema);