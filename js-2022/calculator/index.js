function Calculator(){
    this.stack = [0]
    this.history = []
    this.rule = ""
    this.res = 0
}

Calculator.prototype.input = function(val){
    switch (val) {
        case "c":
            this.stack[0] = 0
            this.history = [0]
            this.res = 0
            break;
        case "=":
            break;
        case "+":
        case "-":
        case "x":
        case "/":
            this.rule = val
            this.history.push(this.rule)
            break;
        default:
            switch (this.rule) {
                case "+":
                    this.res = this.sum(this.getLast(),val)
                    this.stack.push(this.res)
                    this.history.push(val)
                    this.rule = ""
                    break;        
                case "-":
                    this.res = this.sub(this.getLast(),val)
                    this.stack.push(this.res)
                    this.history.push(val)
                    this.rule = ""
                    break;          
                case "x":
                    this.res = this.mul(this.getLast(),val)
                    this.stack.push(this.res)
                    this.history.push(val)
                    this.rule = ""
                    break;          
                case "/":
                    this.res = this.div(this.getLast(),val)
                    this.stack.push(this.res)
                    this.history.push(val)
                    this.rule = ""
                    break;
                default:
                    this.stack[0] = parseFloat(this.stack.concat(val).join(""))
                    this.res = this.stack[0]
                    this.history = [this.stack[0]]
                    break;
            }
            break;
    }
}

Calculator.prototype.getLast = function(){
    return this.stack.pop()
}

Calculator.prototype.peek = function(){
    return this.stack[this.stack.length - 1]
}

Calculator.prototype.sum = function(a,b){
    return parseFloat(a)+parseFloat(b)
}
Calculator.prototype.sub = function(a,b){
    console.log(a,b)
    return parseFloat(a)-parseFloat(b)
}
Calculator.prototype.mul = function(a,b){
    return parseFloat(a)*parseFloat(b)
}
Calculator.prototype.div = function(a,b){
    return parseFloat(a)/parseFloat(b)
}
Calculator.prototype.parseHistory = function(){
    return this.history.join("")
}