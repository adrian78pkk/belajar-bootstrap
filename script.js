// script.js
const darkModeToggle = document.getElementById('dark-mode-toggle');
const body = document.body;
const modeLabel = document.getElementById('mode-label');

darkModeToggle.addEventListener('change', () => {
    if (darkModeToggle.checked) {
        body.classList.add('dark-mode');
        modeLabel.textContent = 'Mode Gelap';
        localStorage.setItem('dark-mode', 'enabled');
    } else {
        body.classList.remove('dark-mode');
        modeLabel.textContent = 'Mode Terang';
        localStorage.setItem('dark-mode', 'disabled');
    }
});

// Check local storage for user preference
if (localStorage.getItem('dark-mode') === 'enabled') {
    body.classList.add('dark-mode');
    darkModeToggle.checked = true;
    modeLabel.textContent = 'Mode Gelap';
}

document.addEventListener('mousemove', (e) => {
    const cursor = document.querySelector('.cool-cursor');
    cursor.style.top = `${e.pageY}px`;
    cursor.style.left = `${e.pageX}px`;
});
