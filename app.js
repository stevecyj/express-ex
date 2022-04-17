let express = require("express");
let app = express();

// console.log(app);

app.get("/", (req, res) => {
  res.send("Hello World");
});

// listen port
let port = 3000;
app.listen(port);
