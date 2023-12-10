document.addEventListener('DOMContentLoaded', function () {
    loadMessages();

    // Check if nickname is stored in localStorage
    const storedNickname = localStorage.getItem('nickname');
    if (storedNickname) {
        document.getElementById('nickname').value = storedNickname;
    }
});

function sendMessage() {
    const nickname = document.getElementById('nickname').value;
    const message = document.getElementById('message').value;

    if (nickname && message) {
        const timestamp = new Date().toLocaleTimeString();
        const formattedMessage = `[${timestamp}] ${nickname}: ${message}`;

        // Display message on the screen
        displayMessage(formattedMessage);

        // Save message to localStorage
        saveMessage(formattedMessage);

        // Clear input field
        document.getElementById('message').value = '';
    }
}

function displayMessage(message) {
    const messageContainer = document.getElementById('message-container');
    const newMessage = document.createElement('div');
    newMessage.innerText = message;
    messageContainer.appendChild(newMessage);

    // Scroll to the bottom of the message container
    messageContainer.scrollTop = messageContainer.scrollHeight;
}

function saveMessage(message) {
    const storedMessages = localStorage.getItem('messages');
    const messages = storedMessages ? JSON.parse(storedMessages) : [];
    messages.push(message);
    localStorage.setItem('messages', JSON.stringify(messages));
}

function loadMessages() {
    const storedMessages = localStorage.getItem('messages');
    const messages = storedMessages ? JSON.parse(storedMessages) : [];

    // Display stored messages
    messages.forEach(message => displayMessage(message));
}
