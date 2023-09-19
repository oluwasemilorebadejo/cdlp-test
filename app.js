const express = require("express");
const morgan = require("morgan");

const AppError = require("./utils/AppError");
const globalErrorHandler = require("./controllers/errorController");
const bookRouter = require("./routes/bookRoutes");

const app = express();

app.use(morgan("dev"));


app.use(express.json({ limit: "10kb" }));

app.use("/api/books", bookRouter);

// route error handler
app.all("*", (req, res, next) => {
  next(new AppError(`cant find ${req.originalUrl}`, 404));
});

app.use(globalErrorHandler);

module.exports = app;