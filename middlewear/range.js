module.exports = (req, res, next) => {
  res.header("content-range", "posts");
  next();
};
