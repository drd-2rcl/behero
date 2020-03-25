const express = require("express");

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  return res.json({ msg: "Hi" });
});

app.listen(3333);
