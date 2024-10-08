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
    case "POST":
      try {
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

    case "GET":
      try {
        const { jobId, userId, id } = req.query;

        if (id) {
          const job = await Job.findById(id);
          if (!job) {
            return res.status(404).json({
              message: "Job not found",
            });
          }
          return res.status(200).json({
            message: "Job found",
            job,
          });
        }

        if (jobId) {
          const job = await Job.find({
            jobId,
          });
          if (!job) {
            return res.status(404).json({
              message: "Job not found",
            });
          }
          return res.status(200).json(job);
        }

        if (userId) {
          const jobs = await Job.find({
            userId,
          }).sort({ dateModified: -1 });
          return res.status(200).json(jobs);
        }

        if (Object.keys(req.query).length === 0) {
          const jobs = await Job.find().sort({ dateModified: -1 });
          return res.status(200).json(jobs);
        }

        return res.status(400).json({ message: "Invalid query" });
      } catch (error) {
        console.error("Error jobs:", error);
        res.status(500).json({ message: "Error jobs" });
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
