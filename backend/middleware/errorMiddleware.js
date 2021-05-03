export const error = (err, req, res, next) => {
  // sometimes status code will be 200 even though there is an error
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  res.status(statusCode);
  if (err.message.includes("User validation failed")) {
    err.message = "Please enter all fields";
  }
  res.json({
    message: err.message,
    stack: err.stack,
  });
};
