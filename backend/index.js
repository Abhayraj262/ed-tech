import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser"
dotenv.config();



const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cookieParser());



app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Server is up and runing.... ",
  });
});

app.listen(PORT, () => console.log(`Server is running at port ${PORT}`));
