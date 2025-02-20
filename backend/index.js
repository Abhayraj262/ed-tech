import express from "express";
const app = express();

import dotenv from "dotenv";
dotenv.config();

const PORT = process.env.PORT || 5000;

app.use(express());

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Server is up and runing.... ",
  });
});

app.listen(PORT, () => console.log(`Server is running at port ${PORT}`));
