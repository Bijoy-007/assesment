const mongoose = require("mongoose");

const schema = mongoose.Schema;

const jobSchema = new schema({
  title: String,
  description: String,
  location: String,
  number: String,
  email: String,
  deadline: schema.Types.Date,
  isArchieved: {
    type: schema.Types.Boolean,
    default: false,
  },
});

module.exports = new mongoose.model("job", jobSchema);
