var app = require("express")();
var http = require("http").createServer(app);

app.get("/", function(req, res) {
  res.send("<h1>Socket IO project folder setup</h1>");
});

io.on("connection", function(socket) {
  console.log("a user connected");
});

http.listen(3000, function() {
  console.log("listening on *:3000");
});
