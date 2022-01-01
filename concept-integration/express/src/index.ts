import express from "express";
import { Request, Response } from "express";

const app = express();

app.get("/", (req: Request, res: Response) => {
  res.send({
    message: "Hello World, from TypeScript!",
  });
});

app.listen(3000, () => {
  console.log("click here: http://localhost:3000");
  console.log("Server is running on port 3000");
});
