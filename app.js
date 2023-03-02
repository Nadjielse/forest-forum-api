require("dotenv").config();

const express = require("express");
const morgan = require("morgan");

const db = require("./src/db");

const port = process.env.PORT || 3000;
const app = express();

app.use(morgan("tiny"));

app.get('/', (req, res) => {
  res.send("Hello World!");
});

async function start() {
  try {
    await db.main();

    console.log("Successfully connected to DB");
    console.log(`App listening on port ${port}`)
  } catch(err) {
    console.log(`Not connected to DB. Error: ${err}`);
  }
}

app.listen(port, start);