const event = socket => {
  // Do some interesting thing inside of this place!

  socket.emit("socker", { socket /* Some other interesting data, maybe*/ });
};

module.exports = event;
