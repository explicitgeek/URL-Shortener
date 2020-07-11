const apiKey = '02e82a1ae46342c29b2d55e42a7c516a'
const url = 'https://api.rebrandly.com/v1/links';

const inputField = document.querySelector('#input');
const shortenButton = document.querySelector('#shorten');
const responseField = document.querySelector('#responseField');

const shortenUrl = () => {

}

const displayShortUrl = (event) => {
    event.preventDefault();
    while(responseField.firstChild) {
        responseField.removeChild(responseField.firstChild);
    }

    shortenUrl();

}
shortenButtton.addEventListener('click',displayShortUrl);

const renderResponse = (res) => {
    if(res.error) {
        responseField.innerHTML = "<p>Sorry, couldn't format your URL.</p>"
    } else {
        responseField.innerHTML = `<p>Your shortened url is: </p><p>${res.shortUrl}</p>`
    }
}
