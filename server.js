const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const port = 3000

var users = [];
var offer = "offer";
var answer = "answer";

app.set('view engine', 'pug');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', function(request, response) {
    return response.redirect('/form-with-post');
})

app.get('/form-with-post', function(request, response) {
    return response.render('form-with-post');
})

app.post('/submit-form-with-post', function(request, response) {
    users.push(request.body);
    console.log(users)
    return response.send(request.body);
})

//webrtc signaling
app.post('/offer', function(request, response) {
    offer = request.body
    console.log(offer)
    return response.send("received post")
})

app.post('/answer', function(request, response) {
    answer = request.body
    console.log(answer)
    return response.send("received post")
})

app.get('/get-offer', function(request, response) {
    // console.log(offer)
    return response.json(offer)
})
app.get('/get-answer', function(request, response) {
    // console.log(answer)
    return response.json(answer)
})

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))