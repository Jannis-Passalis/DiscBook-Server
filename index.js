const express = require("express");
const CdRouter = require("./routers/cd");

const app = express();
const PORT = 4000;

app.get("/", (req, res) => {
  res.send("Hi from express");
});

app.use("/cds", CdRouter);

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
