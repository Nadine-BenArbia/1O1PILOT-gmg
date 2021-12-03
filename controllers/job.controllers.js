const Job = require("../models/Job");

exports.getAllJob = async (req, res) => {
  try {
    //    step 1 GETTING the data from databse
    const joblist = await Job.find();
    // step2: when i get the list from the previous step i send it as a result
    res.send({ job: joblist, msg: "get all Jobs" });
  } catch (error) {
    console.log(error);
    res.status(400).send({ msg: "can not get", error });
  }
};

exports.addJob = async (req, res) => {
  try {
    //   before we save the contact we should check if the user dont exist in the DB

    // newJob
    // save it in databse
    const newJob = new Job({ ...req.body });
    await newJob.save();
    // send success
    res.send({ msg: "add route", job: newJob });
  } catch (error) {
    res.status(400).send({ msg: "job not saved", error });
  }
};

exports.getJob = async (req, res) => {
  try {
    const { _id } = req.params;
    const findJob = await Job.findOne({ _id });
    res.send({ msg: "get the job", job: findJob });
  } catch (error) {
    res.status(400).send({ msg: "can not get the job" });
  }
};

exports.deleteJob = async (req, res) => {
  try {
    const { id } = req.params;
    let result = await Job.deleteOne({ _id: id });
    res.send({ msg: "deleted succ" });
  } catch (error) {
    res.status(400).send({ msg: "can not delete" });
  }
};

exports.updateJob = async (req, res) => {
  try {
    const { id } = req.params;
    await Job.updateOne({ _id: id }, { $set: { ...req.body } });
    res.send({ msg: "updated succ" });
  } catch (error) {
    res.status(400).send({ msg: "can not update" });
  }
};
