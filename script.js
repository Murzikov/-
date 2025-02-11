const button = document.getElementById('magicButton');

button.addEventListener('click', () => {
    const body = document.body;
    body.style.backgroundColor = body.style.backgroundColor === 'black' ? '#333' : '#000'; // Переключение фонового цвета
    button.innerText = button.innerText === 'Ебани по мне!' ? 'спс!' : 'Ебани по мне!'; // Изменение текста кнопки
});