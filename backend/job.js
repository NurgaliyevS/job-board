import mongoose from "mongoose";

// Define CreatorSchema first
const CreatorSchema = new mongoose.Schema({
    FullName: String,
    phoneNumber: String,
    email: String  // Changed from ObjectId reference for simplicity
});

// Then use CreatorSchema in JobSchema
const JobSchema = new mongoose.Schema({
    JobTitle: String,
    EmployerName: String,
    Location: String,
    Salary: String,
    JobDescription: String,
    Deadline: Date,
    Experience: String,
    Published: {
        type: Date,
        default: Date.now
    },
    isFeatured: {
        type: Boolean,
        default: false
    },
    JobType: String,
    City: String,
    HowToApply: String,
    Creator: CreatorSchema
});

const Job = mongoose.models.Job || mongoose.model("Job", JobSchema);

export default Job;