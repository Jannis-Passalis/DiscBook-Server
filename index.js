const express = require("express");
const CdRouter = require("./routers/cd");
const authRouter = require("./routers/auth");
const cors = require("cors");

const app = express();
const PORT = 4000;

app.use(cors());

app.get("/", (req, res) => {
  res.send("Hi from express");
});

app.use("/cds", CdRouter);

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
