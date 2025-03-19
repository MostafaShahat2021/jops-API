const { assert } = require("joi");

const getAllJobs = async (req, res) => {
  res.status(200).send("get all jobs");
};

const getJob = async (req, res) => {
  res.status(200).send("get single job");
};

const createJob = async (req, res) => {
  es.status(200).send("create job");
};

const updtaeJob = async (req, res) => {
  res.status(200).send("update job");
};

const deleteJob = async (req, res) => {
  res.status(200).send("delete job");
};

module.exports = {
  getAllJobs,
  getJob,
  createJob,
  updtaeJob,
  deleteJob,
};
