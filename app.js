const express = require("express");
const app = express();
const user = require("./routes/user");

app.use("/user", user);

// listen port
let port = process.env.PORT || 3000;
app.listen(port);
