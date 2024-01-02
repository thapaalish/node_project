import express from "express";
const app = express();

app.use("/", (req, res) => {
  return res.send("hello World");
});
// listen on port 8000
// network port
app.listen(8000, () => {
  console.log("App is listening on port 8000");
});
