<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Eye of Greed</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700&family=UnifrakturCook:wght@700&display=swap');

    body {
      background: #000 url('https://i.imgur.com/ancient-dark-bg.jpg') center/cover no-repeat; /* optional subtle background */
      background-color: #0a0a0a;
      color: #ccc;
      font-family: 'Cinzel', Georgia, serif;
      margin: 0;
      padding: 0;
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
      overflow-y: auto;
      position: relative;
    }

    .hieroglyphs {
      font-size: 2.8rem;
      line-height: 1.1;
      color: #666;
      margin: 15px 0;
      user-select: none;
      opacity: 0.9;
    }

    h1 {
      font-family: 'UnifrakturCook', serif;
      font-size: 3.8rem;
      margin: 10px 0 5px;
      letter-spacing: 4px;
      color: #d4af37;
      text-shadow: 0 0 15px #d4af37;
    }

    .subtitle {
      font-size: 1.3rem;
      color: #888;
      margin-bottom: 30px;
      letter-spacing: 2px;
    }

    .input-container {
      margin: 25px 0;
    }

    .input-label {
      font-size: 1.4rem;
      margin-bottom: 8px;
      color: #aaa;
    }

    input[type="text"] {
      width: 420px;
      max-width: 90vw;
      padding: 16px 20px;
      font-size: 1.1rem;
      background-color: #111;
      border: 2px solid #444;
      color: #eee;
      text-align: center;
      border-radius: 4px;
      outline: none;
      transition: all 0.3s;
    }

    input[type="text"]:focus {
      border-color: #d4af37;
      box-shadow: 0 0 20px rgba(212, 175, 55, 0.3);
    }

    .go-button {
      margin-top: 15px;
      padding: 12px 40px;
      font-size: 1.1rem;
      background: #1a1a1a;
      color: #d4af37;
      border: 2px solid #d4af37;
      cursor: pointer;
      transition: all 0.3s;
    }

    .go-button:hover {
      background: #d4af37;
      color: #000;
    }

    .examples {
      margin: 30px 0 20px;
      font-size: 1rem;
    }

    .examples a {
      color: #888;
      text-decoration: none;
      margin: 0 12px;
      transition: color 0.3s;
    }

    .examples a:hover {
      color: #d4af37;
    }

    .footer {
      position: absolute;
      bottom: 20px;
      font-size: 0.85rem;
      color: #555;
    }

    .eye-symbol {
      font-size: 4rem;
      margin: 10px 0;
      color: #d4af37;
    }
  </style>
</head>
<body>

  <div class="hieroglyphs">
    𓂀 𓃭 𓋹 𓁹 𓆣 𓃣 𓊝 𓅃 𓆏 𓁿
  </div>

  <h1>EYE OF GREED</h1>
  <p class="subtitle">Architects of the Invisible Web</p>

  <div class="eye-symbol">𓂀</div>

  <div class="hieroglyphs">
    𓂀 The Eye of Greed sees All 𓂀
  </div>

  <div class="input-container">
    <p class="input-label">𓁹 Enter the Sacred URL</p>
    <input type="text" id="urlInput" placeholder="Enter the Veil" autocomplete="off">
    <br>
    <button class="go-button" id="goButton">Enter the Veil</button>
  </div>

  <div class="examples">
    <a href="#" onclick="quickProxy('https://google.com')">google.com</a>
    <a href="#" onclick="quickProxy('https://en.wikipedia.org')">wikipedia.org</a>
    <a href="#" onclick="quickProxy('https://github.com')">github.com</a>
  </div>

  <div class="hieroglyphs">
    𓊝 𓃭 𓋹 𓂀
  </div>

  <div class="footer">
    Powered by Scramjet • The Veil Awaits
  </div>

  <!-- Scramjet Integration Script -->
  <script type="module">
    import { ScramjetFrame } from '/scramjet.js';

    const input = document.getElementById('urlInput');
    const goButton = document.getElementById('goButton');

    async function proxyUrl(targetUrl) {
      if (!targetUrl) return;
      if (!targetUrl.startsWith('http')) {
        targetUrl = 'https://' + targetUrl;
      }

      try {
        const frame = new ScramjetFrame({
          target: targetUrl,
          transport: 'libcurl',     // or 'epoxy' if you prefer
          // You can add more options here if needed
        });

        await frame.load();
      } catch (err) {
        console.error(err);
        alert("Failed to load proxy. Check console for details.");
      }
    }

    // Button click
    goButton.addEventListener('click', () => {
      proxyUrl(input.value.trim());
    });

    // Enter key support
    input.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        proxyUrl(input.value.trim());
      }
    });

    // Quick link function
    window.quickProxy = function(url) {
      proxyUrl(url);
    };
  </script>
</body>
</html>
