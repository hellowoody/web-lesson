const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, resp) => resp.send('Hello World!'))

// POST method route
app.post('/', (req, resp) => resp.send('POST request to the homepage'))

app.delete('/', (req, resp) => resp.send('DELETE request to the homepage'))

app.delete('/', (req, resp) => resp.send('DELETE request to the homepage'))

app.get('/about', (req, resp) => resp.send('about'))

app.get('/random.text', (req, resp) => resp.send('random.text'))

app.get('/ab?cd', (req, resp) => resp.send('ab?cd'))  // match acd and abcd.

app.get('/ab+cd', (req, resp) => resp.send('ab+cd'))  // match abcd, abbcd, abbbcd, and so on

app.get('/ab*cd', (req, resp) => resp.send('ab*cd'))  // match abcd, abxcd, abRANDOMcd, ab123cd, and so on.

app.get('/ab(cd)?e', (req, resp) => resp.send('ab(cd)?e'))  // match /abe and /abcde.

app.get(/w/, (req, resp) => resp.send('/w/'))    // match anything with an “w” in it.

app.get(/.*fly$/, (req, resp) => resp.send('/.*fly$/'))  // match butterfly and dragonfly, but not butterflyman, dragonflyman, and so on.

app.get('/users/:userId/books/:bookId', (req, resp) => resp.send(req.params)) // http://localhost:3000/users/34/books/8989

app.get('/flights/:from-:to', (req, resp) => resp.send(req.params)) // http://localhost:3000/flights/LAX-SFO

app.get('/example/b', (req, resp, next) => {
    console.log('the response will be sent by the next function ...')
    next()
}, (req, resp) => {
    resp.send('Hello from B!')
})

const cb0 = function (req, resp, next) {
    console.log('CB0')
    next()
}

const cb1 = function (req, resp, next) {
    console.log('CB1')
    next()
}

const cb2 = function (req, resp) {
    resp.send('Hello from C!')
}

app.get('/example/c', [cb0, cb1, cb2])

app.listen(port, () => console.log(`express app listening on port ${port}`))