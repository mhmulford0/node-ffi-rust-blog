import express from "express";
import ffi from "ffi-napi";

const lib = ffi.Library("../rust/target/release/libnode_math.dylib", {
  fibonacci: ["int", ["int"]],
});

const app = express();

app.use(express.json());

app.get("/fibonacci", (req, res) => {
  if (typeof req.body.place === "number") {
    const result = lib.fibonacci(req.body.place);
    return res.json({ data: result });
  }

  res.status(400).json({ errror: "missing place digit" });
});

app.listen(3000);