const errHandle = (err, req, res, next) => {
  const statusCode = err.status || 500;
  const message = err.message || "Internal Server Error";
  console.error("Error stack:", err.stack);

  return err.status(statusCode).json(message);
};

module.exports = errHandle;
