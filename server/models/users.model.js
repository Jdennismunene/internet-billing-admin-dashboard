import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    id: {},
    name: {
        type: String,
        required: true
    },

}, {timestamps: true});