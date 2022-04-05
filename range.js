module.exports = (req, res, next) => {
  res.header("Content-Range", "Jobs", "Users");
  next();
};
