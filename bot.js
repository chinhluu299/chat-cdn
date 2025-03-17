class Chatbot {
  constructor(options) {
    this.options = options || {};
    this.createChatbotUI();
  }

  createChatbotUI() {
    const chatbotContainer = document.createElement("div");
    chatbotContainer.id = "chatbot-container";
    chatbotContainer.style.position = "fixed";
    chatbotContainer.style.bottom = "20px";
    chatbotContainer.style.right = "20px";
    chatbotContainer.style.width = "300px";
    chatbotContainer.style.height = "400px";
    chatbotContainer.style.background = "white";
    chatbotContainer.style.border = "1px solid #ccc";
    chatbotContainer.style.padding = "10px";
    chatbotContainer.style.boxShadow = "2px 2px 10px rgba(0,0,0,0.2)";
    chatbotContainer.style.overflow = "hidden";

    chatbotContainer.innerHTML = `
      <div id="chatbox-header" style="background: #007bff; color: white; padding: 10px; text-align: center;">
        Chatbot
      </div>
      <div id="chatbox-body" style="height: 300px; overflow-y: auto; padding: 10px;">
        <p>Chatbot is ready to chat!</p>
      </div>
      <input type="text" id="chatbox-input" style="width: calc(100% - 20px); padding: 5px; margin: 10px;" placeholder="Type a message..." />
      <button id="chatbox-send" style="width: 100%; padding: 5px; background: #007bff; color: white; border: none;">Send</button>
    `;

    document.body.appendChild(chatbotContainer);

    document.getElementById("chatbox-send").addEventListener("click", () => {
      const input = document.getElementById("chatbox-input").value;
      if (input.trim()) {
        const chatBody = document.getElementById("chatbox-body");
        chatBody.innerHTML += `<p><strong>You:</strong> ${input}</p>`;
        document.getElementById("chatbox-input").value = "";
        chatBody.scrollTop = chatBody.scrollHeight;
      }
    });
  }
}

window.addEventListener("DOMContentLoaded", function () {
  new Chatbot();
});
