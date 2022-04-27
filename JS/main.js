
const text = $('.wid')




function hablar() {
    fetch('https://api.chucknorris.io/jokes/random')
    .then(response => response.json())
    .then(json => text.html(json.value))
    .catch(error => console.log(error))
}
