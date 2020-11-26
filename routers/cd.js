const { Router } = require("express");
const Cd = require("../models").cd;
const List = require("../models").list;
const User = require("../models").user;

const router = new Router();

router.get("/", async (req, res, next) => {
  try {
    const cds = await Cd.findAll({
      include: { model: List, include: { model: User } },
    });
    res.json(cds);
  } catch (e) {
    next(e);
  }
});

module.exports = router;
