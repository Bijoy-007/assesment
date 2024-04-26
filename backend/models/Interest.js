const mongoose = require("mongoose");

const schema = mongoose.Schema;

const interestSchema = new schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  jobId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "job",
  },
});

module.exports = new mongoose.model("interest", interestSchema);
