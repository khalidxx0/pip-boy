// scripts.js

document.addEventListener('DOMContentLoaded', () => {
    console.log('Pip-Boy simulation loaded');

    const chatForm = document.getElementById('chat-form');
    const chatInput = document.getElementById('chat-input');
    const chatBox = document.getElementById('chat-box');

    chatForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const message = chatInput.value;
        if (message.trim() !== '') {
            const messageElement = document.createElement('p');
            messageElement.textContent = message;
            chatBox.appendChild(messageElement);

            // Clear the input
            chatInput.value = '';
            chatBox.scrollTop = chatBox.scrollHeight; // Scroll to the bottom
        }
    });
});
