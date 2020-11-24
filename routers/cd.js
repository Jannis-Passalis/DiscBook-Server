const { Router } = require("express");
const Cd = require("../models").cd;

const router = new Router();

router.get("/", async (req, res, next) => {
  try {
    const cds = await Cd.findAll();
    res.json(cds);
  } catch (e) {
    next(e);
  }
});

module.exports = router;
