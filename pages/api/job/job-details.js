// pages/api/job/job-details.js

import Job from "@/backend/job";
import connectMongoDB from "@/backend/mongodb";
import User from "@/backend/user";
import mongoose from "mongoose";

export default async function handler(req, res) {
  const { method } = req;

  await connectMongoDB();

  if (!mongoose?.models?.User) {
    mongoose?.model("User", User?.schema);
  }

  switch (method) {
    case "GET":
      try {
        if (!req.query?.page && !req.query?.limit) {
          const allJobs = await Job.find().sort({ Published: -1 });
          return res.status(200).json(allJobs);
        } else if (req.query?.id) {
          const { id } = req.query;
          const job = await Job.findById(id);
          if (!job) {
            return res.status(404).json({
              message: "Job not found",
            });
          }
          return res.status(200).json(job);
        } else {
          const {
            page = 1,
            limit = 20,
            categories,
            jobTypes,
            locations,
            regions,
          } = req.query;
          const pageNumber = parseInt(page);
          const limitNumber = parseInt(limit);

          const filter = { isVerified: true };
          if (categories) filter.Category = { $in: categories.split(",") };
          if (jobTypes) filter.JobType = { $in: jobTypes.split(",") };
          if (locations) filter.Location = { $in: locations.split(",") };
          if (regions) filter.Location = { $in: regions.split(",") };

          const totalJobs = await Job.countDocuments(filter);
          const totalPages = Math.ceil(totalJobs / limitNumber);

          const jobs = await Job.find(filter)
            .sort({ Published: -1 })
            .skip((pageNumber - 1) * limitNumber)
            .limit(limitNumber);

          return res.status(200).json({
            jobs,
            currentPage: pageNumber,
            totalPages,
            totalJobs,
          });
        }
      } catch (error) {
        console.error("Error fetching jobs:", error);
        res.status(500).json({ message: "Error fetching jobs" });
      }
      break;

    case "POST":
      try {
        console.log("req.body", req.body);

        const job = new Job({
          ...req.body,
          dateModified: new Date(),
        });
        await job.save();
        res.status(201).json({
          message: "Job created successfully",
          job,
        });
      } catch (error) {
        console.error("Error creating job:", error);
        res.status(500).json({ message: "Error creating job" });
      }
      break;

    case "PUT":
      try {
        const { id } = req.query;
        const updatedJob = await Job.findByIdAndUpdate(
          id,
          { ...req.body, dateModified: new Date() },
          { new: true }
        );
        if (!updatedJob) {
          return res.status(404).json({
            message: "Job not found",
          });
        }
        return res.status(200).json(updatedJob);
      } catch (error) {
        console.error("Error updating job:", error);
        res.status(500).json({ message: "Error updating job" });
      }
      break;

    case "DELETE":
      try {
        const { id } = req.query;
        if (id) {
          const deletedJob = await Job.findByIdAndDelete(id);
          if (!deletedJob) {
            return res.status(404).json({
              message: "Job not found",
            });
          }
          return res.status(200).json(deletedJob);
        }
        return res.status(400).json({ message: "Invalid query" });
      } catch (error) {
        console.error("Error deleting job:", error);
        res.status(500).json({ message: "Error deleting job" });
      }
      break;

    default:
      res.setHeader("Allow", ["GET", "POST", "PUT", "DELETE"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
