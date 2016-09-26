var socket = io();

socket.on('all prices', function(data) {
  console.log(data);
});

socket.on('updated prices', function(data) {
  console.log(data);
});