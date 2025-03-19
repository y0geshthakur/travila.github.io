import { GoogleGenerativeAI } from "https://esm.run/@google/generative-ai";

export const initChatbot = () => {
    const genAI = new GoogleGenerativeAI("AIzaSyBYv5EkZUtFEJvkmlplM92AK7t5sr2c4so"); 
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    // Get elements
    const chatContainer = document.getElementById("chatContainer");
    const chatbotButton = document.getElementById("chatbotButton");
    const closeButton = document.getElementById("closeButton");
    const userInput = document.getElementById("userInput");
    const sendButton = document.getElementById("sendButton");
    const chatMessages = document.getElementById("chatMessages");

    if (!chatbotButton || !chatContainer || !closeButton || !userInput || !sendButton || !chatMessages) {
        console.error("Chatbot elements not found. Ensure they exist in the DOM.");
        return;
    }

    const toggleChat = () => {
        const isOpening = !chatContainer.classList.contains("flex");
        chatContainer.classList.toggle("hidden");
        chatContainer.classList.toggle("flex");

        if (isOpening) {
            document.body.classList.add("touch-none");
            userInput.focus();
            scrollToBottom();
        } else {
            document.body.classList.remove("touch-none");
        }
    };

    chatbotButton.addEventListener("click", toggleChat);
    closeButton.addEventListener("click", toggleChat);

    const sendMessage = async () => {
        const message = userInput.value.trim();
        if (!message) return;

        addMessage(message, "user");
        userInput.value = "";

        const relevantKeywords = ["travel", "trip", "vacation", "flight", "tour", "hotel", "destination", "hello", "hi", "bye"];
        const isRelevant = relevantKeywords.some((keyword) => message.toLowerCase().includes(keyword));

        if (!isRelevant) {
            addMessage("I do not have information about this topic.", "bot");
            userInput.disabled = false;
            userInput.focus();
            return;
        }

        userInput.disabled = true;
        try {
            const loadingId = addMessage("Typing...", "bot", true);
            const result = await model.generateContentStream(message);
            removeMessage(loadingId);

            const responseId = addMessage("", "bot");
            let fullResponse = "";

            for await (const chunk of result.stream) {
                fullResponse += chunk.text();
                updateMessage(responseId, fullResponse);
                scrollToBottom();
            }

            updateMessage(responseId, formatResponse(fullResponse));
        } catch (error) {
            addMessage(`Error: ${error.message}`, "bot");
        }

        userInput.disabled = false;
        userInput.focus();
    };

    let messageCounter = 0;

    const addMessage = (text, sender, isTemp = false) => {
        const id = `msg-${messageCounter++}`;
        const messageDiv = document.createElement("div");
        messageDiv.id = id;
        messageDiv.className = `flex justify-${sender === "user" ? "end" : "start"} mb-2`;

        messageDiv.innerHTML = `
            <div class="max-w-[90%] md:max-w-[80%] rounded-xl p-3 shadow-sm text-sm md:text-base ${
                sender === "user" ? "bg-blue-100 ml-auto" : "bg-white"
            } ${isTemp ? "opacity-50 italic" : ""}">
                ${text}
            </div>
        `;

        chatMessages.appendChild(messageDiv);
        scrollToBottom();
        return id;
    };

    const updateMessage = (id, newText) => {
        const messageDiv = document.getElementById(id);
        if (messageDiv) {
            messageDiv.querySelector("div").innerHTML = newText;
            scrollToBottom();
        }
    };

    const removeMessage = (id) => {
        document.getElementById(id)?.remove();
    };

    const scrollToBottom = () => {
        setTimeout(() => {
            chatMessages.scrollTo({
                top: chatMessages.scrollHeight,
                behavior: "smooth",
            });
        }, 100);
    };

    const formatResponse = (text) => {
        return text
            .split("\n")
            .filter((line) => line.trim() !== "")
            .map((line) => `<p>${line.trim()}</p>`)
            .join("");
    };

    sendButton.addEventListener("click", sendMessage);
    userInput.addEventListener("keypress", (e) => e.key === "Enter" && sendMessage());

    if ("serviceWorker" in navigator) {
        navigator.serviceWorker
            .register("../sw.js")
            .then((registration) => console.log("ServiceWorker registered", registration))
            .catch((err) => console.error("ServiceWorker registration failed:", err));
    }

    let deferredPrompt;
    window.addEventListener("beforeinstallprompt", (e) => {
        e.preventDefault();
        deferredPrompt = e;

        const installBtn = document.createElement("button");
        installBtn.textContent = "Install Travila";
        installBtn.className = "btn-yellow fixed bottom-4 left-4 z-50";
        installBtn.onclick = () => {
            deferredPrompt.prompt();
            deferredPrompt.userChoice.then(() => (deferredPrompt = null));
        };
        document.body.appendChild(installBtn);
    });
};
