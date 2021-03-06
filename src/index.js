const initListeners = require("./listeners");
var app = require("express")();
var http = require("http").createServer(app);

var io = require("socket.io")(http);

app.get("/", function(req, res) {
  res.send("<h1>Socket IO project folder setup</h1>");
});

initListeners(io);

http.listen(3000, function() {
  console.log("listening on *:3000");
});
