const { Server } = require("socket.io");

let TIMERTIME = 120;

const ioS = new Server({ /* options */ });
const io = require("socket.io")(ioS, {
    cors: {
      origin: "*",
      methods: ["GET", "POST"]
    }
  });

io.on("connection", (socket) => {
  let userJoined = {id: socket.id, price: 5000, date: 15, assurance: 12, percent: 100, improvement: "-", timer: false, name: `Вы: ${socket.id}`}
  socket.emit('join',  userJoined)
  socket.emit('timer', TIMERTIME);
})

setInterval(StartTimer, 1000)
  function StartTimer() {
    if(TIMERTIME >= 1) {
      TIMERTIME--
      io.emit('timer', TIMERTIME); 
    } else {
      TIMERTIME = 120
      io.emit('timer', TIMERTIME); 
    }   
  } 

io.listen(3001, () => {
    console.log('Запущенно');
});