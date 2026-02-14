import mongoose from "mongoose";

const jobSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    createdBy: {
        type: String,
        required: true,
    },
    closesAt: {
        type: Date,
        required: true,
    },
    updatedAt: {
        type: Date
    },
    updatedBy: {
        type: String
    },
});

const Job = mongoose.models.Job || mongoose.model('Job', jobSchema);

export default Job;