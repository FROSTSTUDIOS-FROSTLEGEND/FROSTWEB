// Select elements
const button = document.getElementById('magic-button');
const text = document.getElementById('magic-text');
const body = document.body;

// Add click effect
button.addEventListener('click', () => {
    text.innerHTML = "🔥❄️ Magic Unleashed! ❄️🔥";
    body.style.background = "linear-gradient(to bottom, #0033ff, #ff3300)";
});
