const getAllJobs = async (req, res) => {
  res.send("get all jobs");
};

const getJob = async (req, res) => {
  res.send("get Job");
};

const createJob = async (req, res) => {
  res.send("login user");
};

const updateJob = async (req, res) => {
  res.send("login user");
};

const deleteJob = async (req, res) => {
  res.send("User Registered");
};

module.exports = {
  getAllJobs,
  getJob,
  createJob,
  updateJob,
  deleteJob,
};
