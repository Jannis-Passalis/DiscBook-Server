const { Router } = require("express");
const User = require("../models").user;
const authMiddleware = require("../auth/middleware");

const router = new Router();

router.get("/me", authMiddleware, async (req, res) => {
  delete req.user.dataValues["password"];
  res.status(200).send({ ...req.user.dataValues });
});

module.exports = router;
