var socket = io();

socket.on('connect', function() {
    console.log('Connected to server');
});

socket.on('message', function(msg) {
    var messages = document.getElementById('messages');
    var message = document.createElement('div');
    message.textContent = msg;
    messages.appendChild(message);
});

document.getElementById('send-button').onclick = function() {
    var input = document.getElementById('message-input');
    socket.send(input.value);
    input.value = '';
};
