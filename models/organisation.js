/**
 * Created by Luke on 13/08/2016.
 */
const mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    bcrypt = require('bcrypt-nodejs');

//===============================
// Organisation Schema
//===============================
const OrganisationSchema = new Schema({
        name: {
            type: String,
            unique: true,
            required: true
        },
        email: {
            type: String,
            lowercase: true,
            unique: true,
            required: true
        },
        projects: [{ type: Schema.Types.ObjectId, ref: 'Project' }],
    },
    {
        timestamps: true
    });

module.exports = mongoose.model('Organisation', OrganisationSchema);