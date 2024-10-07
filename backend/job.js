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
    EmployerName: String,
    City: String,
    Location: String,
    HowToApply: String,
});

const CreatorSchema = new mongoose.Schema({
    FullName: String,
    phoneNumber: String,
});