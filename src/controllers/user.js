async function create(req, res) {
  res.send("User created!");
}

async function read(req, res) {
  res.send("User info.");
}

async function readOne(req, res) {
  res.send("Nth user info.");
}

async function update(req, res) {
  res.send("User updated!");
}

async function destroy(req, res) {
  res.send("User destroyed");
}

module.exports = {
  create,
  read, readOne,
  update,
  destroy
};