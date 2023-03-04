require("dotenv").config();

const express = require("express");
const morgan = require("morgan");

const db = require("./src/db");

const routes = require("./src/routes");

const port = process.env.PORT || 3000;
const app = express();

app.use(express.json());
app.use(morgan("tiny"));

app.use("/api/v1/auth", routes.auth);
app.use("/api/v1/users", routes.users);
app.use("/api/v1/posts", routes.posts);

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