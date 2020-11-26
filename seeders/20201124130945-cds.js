"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "cds",
      [
        {
          artist: "Ugly Kid Joe",
          album: "America's Least Wanted",
          releaseYear: "1992",
          albumCover:
            "https://upload.wikimedia.org/wikipedia/en/6/63/Ugly_Kid_Joe_America%27s_Least_Wanted.jpg",
          forSale: false,
          listId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          artist: "Scorpions",
          album: "Crazy World",
          releaseYear: "1990",
          albumCover:
            "https://upload.wikimedia.org/wikipedia/en/f/f0/ScorpionsCrazyWorld.jpg",
          forSale: false,
          listId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          artist: "Radiohead",
          album: "Pablo Honey",
          releaseYear: "1993",
          albumCover:
            "https://upload.wikimedia.org/wikipedia/en/0/0f/Radiohead.pablohoney.albumart.jpg",
          forSale: false,
          listId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("cds", null, {});
  },
};
