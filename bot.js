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
    chatbotContainer.style.height = "450px";
    chatbotContainer.style.background = "white";
    chatbotContainer.style.border = "1px solid #ccc";
    chatbotContainer.style.padding = "10px";
    chatbotContainer.style.boxShadow = "2px 2px 10px rgba(0,0,0,0.2)";
    chatbotContainer.style.overflow = "hidden";

    chatbotContainer.innerHTML = `
      <div id="chatbox-header" style="background: #007bff; color: white; padding: 10px; text-align: center;">
        Chatbot
      </div>
      <div id="chatbox-body" style="height: 280px; overflow-y: auto; padding: 10px;">
        <p>Chatbot is ready to chat!</p>
      </div>
      <input type="text" id="chatbox-input" style="width: calc(100% - 20px); padding: 5px; margin: 10px;" placeholder="Type a message..." />
      <button id="chatbox-send" style="width: 100%; padding: 5px; background: #007bff; color: white; border: none; margin-bottom: 5px;">Send</button>
      <button id="chatbox-api" style="width: 100%; padding: 5px; background: #28a745; color: white; border: none;">Get Data</button>
    `;

    document.body.appendChild(chatbotContainer);

    document.getElementById("chatbox-send").addEventListener("click", () => {
      this.sendMessage();
    });

    document.getElementById("chatbox-api").addEventListener("click", () => {
      this.fetchPublicAPI();
    });
  }

  sendMessage() {
    const input = document.getElementById("chatbox-input").value;
    if (input.trim()) {
      const chatBody = document.getElementById("chatbox-body");
      chatBody.innerHTML += `<p><strong>You:</strong> ${input}</p>`;
      document.getElementById("chatbox-input").value = "";
      chatBody.scrollTop = chatBody.scrollHeight;
    }
  }

  async fetchPublicAPI() {
    const chatBody = document.getElementById("chatbox-body");

    chatBody.innerHTML += `<p><strong>Chatbot:</strong> Fetching data...</p>`;
    chatBody.scrollTop = chatBody.scrollHeight;

    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
      const data = await response.json();

      chatBody.innerHTML += `
        <p><strong>Chatbot:</strong> Here is the API response:</p>
        <p><strong>Title:</strong> ${data.title}</p>
        <p><strong>Completed:</strong> ${data.completed ? "✅ Yes" : "❌ No"}</p>
      `;
    } catch (error) {
      chatBody.innerHTML += `<p><strong>Chatbot:</strong> Failed to fetch data.</p>`;
    }

    chatBody.scrollTop = chatBody.scrollHeight;
  }
}

window.addEventListener("DOMContentLoaded", function () {
  new Chatbot();
});
