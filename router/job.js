const express = require("express");
const {
  getAllJob,
  addJob,
  getJob,
  deleteJob,
  updateJob,
} = require("../controllers/Job.controllers");
const { isAuth } = require("../middlweares/isAuth");
const router = express.Router();

// route test
router.get("/test", (req, res) => {
  res.send("hello");
});
// --------------------------------------
// create => POST ()
// @Route Add job
// @ Method : POST
// @data: req.body
// Path: http://localhost:5000/api/job
router.post("/", isAuth, addJob);

// Read => GET ()
// @Route Get ALL jobs
// @ Method : GET
// @data:
// Path: http://localhost:5000/api/job
router.get("/", getAllJob);

// Read => GET ()
// @Route Get job By Id
// @ Method : GET
// @data: ID req.params
// Path: http://localhost:5000/api/job/:id
router.get("/:_id", getJob);

// DELETE => DELETE ()
// @Route delete a job
// @ Method : DELETE
// @data: ID req.params
// Path: http://localhost:5000/api/job/:id
router.delete("/:id", isAuth, deleteJob);

// Update => Update ()
// @Route update a job
// @ Method : UPDATE
// @data: ID req.params + req.body
// Path: http://localhost:5000/api/job/:id

router.put("/:id", isAuth, updateJob);

module.exports = router;
