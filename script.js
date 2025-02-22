const colors = ['red','blue','green','yellow','purple','orange','pink','black'];
const colorBox = document.getElementById('colorBox');
const colorInput = document.getElementById('colorInput');
const guessButton = document.getElementById('guessButton');
const message = document.getElementById('message');

const randomColor = colors[Math.floor(Math.random() * colors.length)];
colorBox.style.backgroundColor = randomColor;

guessButton.addEventListener('click', () => {
    const userGuess = colorInput.value.toLowerCase();
    if (userGuess === randomColor) {
        message.innerHTML = 'Правильно! Это '+ randomColor + '!';
        message.style.color = 'green'; 
    } else {
        message.innerHTML = 'Попробуй снова!';
        message.style.color = 'red';
    }
    colorInput.value = '';
});