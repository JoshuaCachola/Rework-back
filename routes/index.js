const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  // res.json({ message: 'index router' });

  res.render("index", { title: "Index" });
});

router.get("/ping", (req, res) => {

  res.status(200).end()
});
module.exports = router;
