import type { Response, Request } from "express";
import express from "express";
import bodyParser from "body-parser";

const app = express();

app.use(bodyParser.json());

function fibonacci(n: number) {
  let a = 0,
    b = 1,
    c = n;

  for (let i = 2; i <= n; i++) {
    c = a + b;
    a = b;
    b = c;
  }

  return c;
}

app.get("/fibonacci", (req: Request, res: Response) => {
  if (typeof req.body.place === "number") {
    const data = fibonacci(req.body.place);
    return res.json({ message: data });
  }

  res.status(400).json({ errror: "missing place digit" });
});

app.listen(3000);
