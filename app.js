const express = require('express');
const app = express();
app.use(express.static('public'));

// MY CODE
// # Home:
app.get('/', (request, response) => {
    response.sendFile(__dirname + '/views/home.html');
});

// #About:
app.get('/about', (request, response) => {
    response.sendFile(__dirname + '/views/about.html');
});

// #Works:
app.get('/works', (request, response) => {
    response.sendFile(__dirname + '/views/works.html');
});

// #Gallery:
app.get('/gallery', (request, response) => {
    //__dirname refers to the folder where our app lives
    response.sendFile(__dirname + '/views/photo-gallery.html');
});

app.listen(3000, () => {
    console.log('My app is listening on port 3000');
});