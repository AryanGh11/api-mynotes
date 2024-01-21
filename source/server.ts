import express from "express";
require("dotenv").config();

const app = express();
const port = 3000;

app.get("/", (req: any, res: any) => {
  res.send("Hello, TypeScript World!");
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
  console.log(process.env.PORT);
});
