# 🪶 Evo AI - Royal Edition

Evo AI is a premium, beautifully crafted web-based chatbot client designed with a royal Indian aesthetic. Powered by Google's advanced **Gemini 2.5 Flash** model, it brings high-speed, intelligent conversations to life within an elegant, parchment-themed interface.

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Gemini](https://img.shields.io/badge/Gemini%202.5%20Flash-8E75C2?style=for-the-badge&logo=google-gemini&logoColor=white)](https://ai.google.dev/)

---

## ✨ Features

* **Premium Royal Theme:** Stunning Indian aesthetic featuring curated color palettes—including rich teal, sage green, warm parchment background textures, and elegant typography (Cinzel & Plus Jakarta Sans).
* **Smooth Animations & Micro-Interactions:** Custom-designed components with hover effects, scaling feather icons, and dynamic, fluid scroll-to-bottom behavior.
* **Direct Gemini Integration:** Native communication with Google's `gemini-2.5-flash` model, ensuring lightning-fast answers, detailed summaries, and comprehensive conversational assistance.
* **Feather-Light & Dependency-Free:** Built strictly using vanilla HTML5, CSS3 variables, and modern ES6+ JavaScript. No build steps or heavy node modules needed.
* **Responsive Layout:** Designed to look exceptional on desktop monitors, tablets, and mobile devices alike.

---

## 📸 Interface Preview

```
+-------------------------------------------------------+
|                 Evo AI - Royal Edition                |
|               Namaste, and welcome! ...               |
+-------------------------------------------------------+
| [🪶] Evo                                              |
|      Namaste! Please allow me to showcase some art of  |
|      a peacock. What would you like to see?           |
|                                                       |
|                                         You [👤]      |
|                      Tell me about royal Indian art.  |
|                                                       |
| [🪶] Evo                                              |
|      Evo is typing...                                 |
+-------------------------------------------------------+
| [ Ask Evo anything...                         ] [🪶] |
+-------------------------------------------------------+
```

---

## 🚀 Getting Started

### Prerequisites
To run this project locally, all you need is a web browser and a local development server (such as the VS Code **Live Server** extension) to avoid CORS restriction issues when making requests to the Gemini API.

### Installation & Launch

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git
   cd YOUR-REPO-NAME
   ```

2. **Run Locally:**
   * **Using VS Code:** Right-click `index.html` and select **Open with Live Server**.
   * **Using Python:** Run `python -m http.server 8000` in the directory, and navigate to `http://localhost:8000`.

---

## ⚙️ Configuration

The application uses Google's Generative Language API.

### Updating the API Key
For security and personalization, you can supply your own Gemini API key.
1. Open `script.js`.
2. Locate the `API_KEY` variable on line 5:
   ```javascript
   const API_KEY = "YOUR_GEMINI_API_KEY";
   ```
3. Replace the placeholder string with your personal API key from the [Google AI Studio](https://aistudio.google.com/).

> [!WARNING]
> If you host this page publicly on GitHub Pages or any public server, your API key will be visible in the frontend JavaScript code. For production applications, it is highly recommended to proxy requests through a secure backend server to protect your credentials.

---

## 📁 File Structure

```text
Project Chatbot/
├── index.html       # Structuring the Chat Interface
├── style.css        # Premium Royal Typography and Theming Rules
├── script.js        # Event Listeners and Gemini API Communication
└── README.md        # Documentation
```

---

## 🛠️ Technology Stack

* **Structure:** [HTML5](https://developer.mozilla.org/en-US/docs/Web/HTML) (Semantic layout, FontAwesome integration)
* **Styling:** [CSS3 Variables](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties) (Custom scrollbars, fluid gradients, Unsplash background overlay, typography)
* **Logic:** [Vanilla JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) (Asynchronous fetch requests, DOM manipulation)
* **API:** [Google Gemini 2.5 Flash API](https://ai.google.dev/gemini-api/docs)

---

## 🤝 Contributing

Contributions are welcome! If you have suggestions to improve the styling, animations, or logic of **Evo AI - Royal Edition**, feel free to fork the repository, make changes, and open a Pull Request.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📜 License

Distributed under the MIT License. See `LICENSE` for more information.

---

<p align="center">
  Crafted with 💖 and 🪶
</p>
