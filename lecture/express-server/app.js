const express = require('express')
const myMiddleware = require("./my-middleware")

const app = express()
const port = 3000

const myLogger = function (req, resp, next) {
    console.log('LOGGED')
    next()
}

const requestTime = function (req, resp, next) {
    console.log('requestTime')
    req.requestTime = Date.now()
    next()
}

app.use(myLogger)
app.use(requestTime)
app.use(myMiddleware({ option1: '1', option2: '2' }))


app.get('/', (req, resp) => resp.send('Hello World!'+req.requestTime))

app.listen(port, () => console.log(`express app listening on port ${port}`))