const defaultapi = function(req,resp){
    console.log(req.query)
    resp.send("hello node api")
}

module.exports = {
    defaultapi
}