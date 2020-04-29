const path = require("path");
const express = require("express");
const app = express();
const publicPath = path.join(__dirname, "..", "build");
const port = process.env.PORT || 3000;

function detec() {
  var isMobile = window.orientation > -1;
  alert(isMobile ? 'Mobile' : 'Not mobile');
}

if (detec === 'Mobile') {
  app.get("/mobile", (req, res) => {
    res.sendFile(path.join(publicPath, "index.html"));
  });
}


app.use(express.static(publicPath));
app.get("*", (req, res) => {
  res.sendFile(path.join(publicPath, "index.html"));
});
app.listen(port, () => {
  console.log("Server is up!");
});