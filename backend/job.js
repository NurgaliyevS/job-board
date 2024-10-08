import mongoose from "mongoose";

const JobSchema = new mongoose.Schema({
    JobTitle: String,
    EmployerName: String,
    Location: String,
    Salary: String,
    JobDescription: String,
    Deadline: Date,
    Experience: String,
    Published: Date,
    isFeatured: Boolean,
    JobType: String,
    City: String,
    HowToApply: String,
    Creator: CreatorSchema,
});

const CreatorSchema = new mongoose.Schema({
    FullName: String,
    phoneNumber: String,
    email: {
        // get email from user model
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    }
});

const Job = mongoose.models.Job || mongoose.model("Job", JobSchema);

export default Job;