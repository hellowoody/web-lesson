import express from "express"

const app = express()

app.get("/about",(req,resp) => resp.send("about"))

app.get("/random.text",(req,resp) => resp.send("random.text"))

app.get('/ab?cd', (req, resp) => resp.send('ab?cd'))  // match acd and abcd.

 app.get('/ab+cd', (req, resp) => resp.send('ab+cd'))  // match abcd, abbcd, abbbcd, and so on

 app.get('/ab*cd', (req, resp) => resp.send('ab*cd'))  // match abcd, abxcd, abRANDOMcd, ab123cd, and so on.

 app.get('/ab(cd)?e', (req, resp) => resp.send('ab(cd)?e'))  // match /abe and /abcde.

 app.get(/w/, (req, resp) => resp.send('/w/'))    // match anything with an “w” in it.

 app.get(/.*fly$/, (req, resp) => resp.send('/.*fly$/'))  // match butterfly and dragonfly, but not butterflyman, dragonflyman, and so on.

 app.get('/users/:userId/books/:bookId', (req, resp) => resp.send(req.params)) // http://localhost:3000/users/34/books/8989

 app.get('/flights/:from-:to', (req, resp) => resp.send(req.params)) // http://localhost:3000/flights/LAX-SFO

app.listen(3000,() => console.log("server is running..."))