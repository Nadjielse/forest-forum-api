require("dotenv").config();

const express = require("express");
const morgan = require("morgan");

const port = process.env.PORT || 3000;
const app = express();

app.use(morgan("tiny"));

app.get('/', (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => console.log(`App listening on port ${port}`));