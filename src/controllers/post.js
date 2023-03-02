async function create(req, res) {
  res.send("Post created!");
}

async function read(req, res) {
  res.send("Post info.");
}

async function readOne(req, res) {
  res.send("Nth post info.");
}

async function update(req, res) {
  res.send("Post updated!");
}

async function destroy(req, res) {
  res.send("Post destroyed");
}

module.exports = {
  create,
  read, readOne,
  update,
  destroy
};