const express = require("express");
const router = express.Router();

const jobControllers = require("../controllers/job");

router.post("/create_job", jobControllers.createJob);
router.post("/mark_interested", jobControllers.markInterested);
router.post("/mark_archieved", jobControllers.markArchieved);
router.get("/get_all_jobs", jobControllers.getAllJobs);


module.exports = router;