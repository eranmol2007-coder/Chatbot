const chatForm = document.getElementById('chatForm');
const userInput = document.getElementById('userInput');
const chatBox = document.getElementById('chatBox');

const API_KEY = "YOUR_API_KEY"; 

const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${API_KEY}`;

chatForm.addEventListener('submit', async (e) => 
{
    e.preventDefault();
    
    const messageText = userInput.value.trim();
    if (!messageText) return;

    appendMessage(messageText, 'user-message');
    userInput.value = ''; 

    const botMessageDiv = appendMessage("Evo is typing...", 'bot-message');

    try {
        const response = await fetch(API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                contents: [{ parts: [{ text: messageText }] }]
            })
        });

        if (!response.ok) 
        {
            const errorData = await response.json().catch(() => ({}));
            const reason = errorData.error ? errorData.error.message : `HTTP Status ${response.status}`;
            botMessageDiv.innerText = `Evo Engine Blocked: ${reason}`;
            botMessageDiv.style.color = "#ef4444";
            return;
        }

        const data = await response.json();
        
        if (data.candidates && data.candidates[0].content && data.candidates[0].content.parts[0].text) 
        {
            botMessageDiv.innerText = data.candidates[0].content.parts[0].text;
        } 
        else 
        {
            botMessageDiv.innerText = "Error: Engine returned an empty answer structure.";
            botMessageDiv.style.color = "#ef4444";
        }

    } 
    catch (error) 
    {
        botMessageDiv.innerText = `Connection Interrupted: ${error.message}. Please make sure you are launching this page using VS Code Live Server instead of double-clicking the file.`;
        botMessageDiv.style.color = "#ef4444";
    }

    chatBox.scrollTop = chatBox.scrollHeight;
});

function appendMessage(text, className) 
{
    const chatRow = document.createElement('div');
    chatRow.classList.add('chat-row', className === 'user-message' ? 'user-row' : 'bot-row');
    
    let avatarHTML = '';
    let labelName = 'You';
    
    if (className === 'bot-message') 
    {
        labelName = 'Evo';
        avatarHTML = `<div class="avatar-feather"><i class="fas fa-feather-alt"></i></div>`;
    }

    chatRow.innerHTML = `
        ${avatarHTML}
        <div class="message-wrapper">
            <span class="sender-label">${labelName}</span>
            <div class="message ${className}">${text}</div>
        </div>
    `;
    
    chatBox.appendChild(chatRow);
    chatBox.scrollTop = chatBox.scrollHeight;
    
    return chatRow.querySelector('.message');
}
