const { Router } = require("express");
const Cd = require("../models").cd;
const List = require("../models").list;
const User = require("../models").user;
const authMiddleware = require("../auth/middleware");

const router = new Router();

router.get("/", async (req, res, next) => {
  try {
    const cds = await Cd.findAll({
      include: { model: List, include: { model: User } },
      order: [["album", "ASC"]],
    });
    res.json(cds);
  } catch (e) {
    next(e);
  }
});

router.post("/add", authMiddleware, async (req, res, next) => {
  // const { album, year, cdCover, userId } = req.body;
  const artist = req.body.artist ? req.body.artist : null;
  const album = req.body.album ? req.body.album : null;
  const year = req.body.year ? req.body.year : null;
  const cdCover = req.body.cdCover ? req.body.cdCover : null;
  const userId = req.body.userId ? req.body.userId : null;

  try {
    const newCd = await Cd.create({
      artist,
      album,
      releaseYear: year,
      albumCover: cdCover,
      listId: userId,
      forSale: false,
    });
    res.json(newCd);
  } catch (e) {
    next(e);
  }
});

router.delete("/delete/:cdId", authMiddleware, async (req, res, next) => {
  const cdId = parseInt(req.params.cdId);

  try {
    const findCd = await Cd.findByPk(cdId);
    if (!findCd) {
      res.status(404).send("CD not found");
    }
    const deletedCd = await findCd.destroy();
    res.json(deletedCd);
  } catch (e) {
    next(e);
  }
});

router.patch("/sell/update/:cdId", authMiddleware, async (req, res, next) => {
  const cdId = parseInt(req.params.cdId);

  try {
    const findCd = await Cd.findByPk(cdId, {
      include: {
        model: List,
        include: { model: User },
      },
    });

    if (!findCd) {
      res.status(404).send("CD not found");
    }
    if (findCd.forSale === true) {
      await findCd.update({ forSale: false });
    } else if (findCd.forSale === false) {
      await findCd.update({ forSale: true });
    }
    return res.status(200).send({
      findCd,
    });
  } catch (e) {
    next(e);
  }
});

module.exports = router;
