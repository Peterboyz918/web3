function toggleChatbot() {
  const chatbot = document.getElementById('chatbot');
  chatbot.style.display = chatbot.style.display === 'block' ? 'none' : 'block';
}

function sendMessage() {
  const input = document.getElementById('chat-input');
  const log = document.getElementById('chat-log');
  const userMsg = input.value.trim();

  if (userMsg === '') return;

  log.innerHTML += `<div class="chat-user"><strong>You:</strong> ${userMsg}</div>`;
  input.value = '';

  let reply = generateReply(userMsg.toLowerCase());

  setTimeout(() => {
    log.innerHTML += `<div class="chat-bot"><strong>Bot:</strong> ${reply}</div>`;
    log.scrollTop = log.scrollHeight;
  }, 500);
}

function generateReply(message) {
  if (message.includes("hello") || message.includes("hi")) {
    return "Hello! 👋 How can I assist you today?";
  } else if (message.includes("how are you")) {
    return "I'm just a bot, but I'm running smoothly! 😊";
  } else if (message.includes("job")) {
    return "To find jobs, click on the 'Find Job' tab. You can also post a job from the 'Post Job' tab.";
  } else if (message.includes("post")) {
    return "To post a job, go to the 'Post Job' section on the menu.";
  } else if (message.includes("request")) {
    return "To request a job, click on the 'Request Job' tab and fill in your details.";
  } else if (message.includes("profile")) {
    return "You can edit your profile by clicking on the 'Profile' tab.";
  } else if (message.includes("message") || message.includes("chat")) {
    return "To send or read messages, go to the 'Messages' tab.";
  } else if (message.includes("password")) {
    return "You can change your password in the 'Profile' tab.";
  } else if (message.includes("contact") || message.includes("support")) {
    return "You can reach our support via WhatsApp at +254791376089.";
  } else if (message.includes("thanks") || message.includes("thank you")) {
    return "You're welcome! 😊 Anything else I can help with?";
  } else {
    return "I'm here to help! Try asking about 'post job', 'find job', or 'profile'.";
  }
}
