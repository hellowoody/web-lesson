import express from "express"

const app = express()

app.get("/about",(req,resp) => resp.send("about"))

app.get("/file.txt",(req,resp) => resp.send("file.txt"))

// app.get("/ab?cd",(req,resp) => resp.send("ab?cd"))  // /acd /abcd

// app.get("/ab+cd",(req,resp) => resp.send("ab+cd"))  // /abcd /abbcd /ab.....cd

// app.get("/ab*cd",(req,resp) => resp.send("ab*cd"))  // /abcd /abwcd /abxyzcd

// app.get("/ab(cd)?e",(req,resp) => resp.send("ab(cd)?e"))  // /abe  /abcde

// app.get(/w/,(req,resp) => resp.send("/w/"))  // /w /wolrd /how

app.get(/\w/,(req,resp) => resp.send("/w/"))  // [A-Za-z0-9_]

app.listen(3000,() => console.log("express server is running..."))