document.addEventListener('DOMContentLoaded', () => {
    fetch('https://icanhazdadjoke.com/slack', {
        headers: {
            'Accept': 'application/json'
        }
    })
    .then(response => response.json())
    .then(jokeData => {
        const jokeText = jokeData.attachments[0].text;
        const jokeElement = document.getElementById('jokeElement');
        jokeElement.innerHTML = jokeText;
    })
    .catch(error => console.error('Error:', error));
});