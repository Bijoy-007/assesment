const moment = require("moment");

const Job = require("../models/Job");
const User = require("../models/User");
const Interest = require("../models/Interest");

const createJob = async (req, res) => {
  try {
    console.log("controller recahed");
    const params = req.body;

    const { title, description, location, number, email, deadline } = params;

    const formattedDate = moment(deadline, "DD-MM-YYYY").toISOString();
    console.log({ formattedDate });

    const jobData = new Job({
      title,
      description,
      location,
      number,
      email,
      deadline: formattedDate,
    });

    const newJob = await jobData.save();

    res.status(201).json({
      status: "success",
      message: "Job created successfully",
      data: newJob,
    });
  } catch (err) {
    res.status(500).json({
      status: "faliure",
      message: "Failed",
      error: err,
    });
  }
};

const markInterested = async (req, res) => {
  try {
    const params = req.body;

    const { userId, jobId } = params;

    const interestData = new Interest({
      userId,
      jobId,
    });

    const savedInterstData = await interestData.save();

    res.status(201).json({
      status: "success",
      message: "Job marked as interested",
      data: savedInterstData,
    });
  } catch (err) {
    res.status(500).json({
      status: "faliure",
      message: "Failed",
      error: err,
    });
  }
};

const markArchieved = async (req, res) => {
  try {
    const params = req.body;

    const { jobId } = params;

    const updatedJob = await Job.findOneAndUpdate(
      { _id: jobId },
      {
        isArchieved: ture,
      }
    );

    res.status(201).json({
      status: "success",
      message: "Job marked as interested",
      data: updatedJob,
    });
  } catch (err) {
    res.status(500).json({
      status: "faliure",
      message: "Failed",
      error: err,
    });
  }
};

const getAllJobs = async (req, res) => {
  try {
    const allJobs = await Job.find({});

    res.status(200).json({
      status: "success",
      message: "All jobs are fetched successfully!",
      data: allJobs,
    });
  } catch (err) {
    res.status(500).json({
      status: "faliure",
      message: "Failed",
      error: err,
    });
  }
};



module.exports = { markInterested, createJob, markArchieved, getAllJobs };
