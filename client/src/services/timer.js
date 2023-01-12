import openSocket from 'socket.io-client';
const  socket = openSocket('http://localhost:3001');

function subscribeToTimer(cb) {
  socket.on('timer', timestamp => cb(null, timestamp));
  socket.emit('subscribeToTimer', 1000);
}

let joinedUser = {}

function getJoinedUser() {
  socket.on('join', (user) => {
    joinedUser.name = user.name
    joinedUser.price = user.price
    joinedUser.date = user.date
    joinedUser.assurance = user.assurance
    joinedUser.percent = user.percent
    joinedUser.improvement = user.improvement
    joinedUser.timer = user.timer
    joinedUser.id = user.id
  })
  return joinedUser
}


export { subscribeToTimer, getJoinedUser };