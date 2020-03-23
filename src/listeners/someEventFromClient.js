module.exports = function(io) {
  io.on("someEventFromClient", function(socket) {
    socket.emit("responseToSomeEventFromClient", { data: {}, socket });
  });
};
