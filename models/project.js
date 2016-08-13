/**
 * Created by Luke on 13/08/2016.
 */
const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

const ProjectSchema = new Schema({
        organisationId: {
            type: Schema.Types.ObjectId,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        releases: [{ type: Schema.Types.ObjectId, ref: 'Release' }],
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model('Project', ProjectSchema);