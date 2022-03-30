// 声明全局静态变量
const board_border = "black",
    board_background = "white",
    snake_col = "lightblue",
    snake_border = "darkblue",
    food_col = "lightgreen",
    food_border = "darkgreen",
    LEFT_KEY = "ArrowLeft",
    RIGHT_KEY = "ArrowRight",
    UP_KEY = "ArrowUp",
    DOWN_KEY = "ArrowDown";

const nextCoord = {
    dx:10,
    dy:0
}

const has_collided = {
    value:false
};

const foodCoord = {
    x:0,
    y:0
}

const score = {
    value:0
}

// 声明创建canvas方法
const createCanvas = () => {
    const canvas = document.createElement("canvas")
    canvas.width = 500;
    canvas.height = 500;
    canvas.id = "game_canvas"
    document.body.appendChild(canvas)
    return canvas
}
// 声明创建css方法
const createStyle = () => {
    const style = document.createElement("style")
    const css = `
        canvas {
            position:absolute;
            top:50%;
            left:50%;
            transform:translate(-50%,-50%)
        }
    `
    style.appendChild(document.createTextNode(css))
    document.head.appendChild(style)
}
// 创建计分牌
const createScoreBoard = () => {
    const div = document.createElement("div")
    div.setAttribute("id","score")
    document.body.appendChild(div);
    return div
}
// 声明绘制snake方法
const drawSnakePart = (ctx,snakePart) => {
    ctx.fillStyle = snake_col;
    ctx.strokeStyle = snake_border;
    ctx.fillRect(snakePart.x,snakePart.y,10,10);
    ctx.strokeRect(snakePart.x,snakePart.y,10,10);
}
// 声明清除滑板方法
const clearCanvas = (canvas,ctx) => {
    ctx.fillStyle = board_background;
    ctx.strokeStyle = board_border;
    ctx.fillRect(0,0,canvas.width,canvas.height);
    ctx.strokeRect(0,0,canvas.width,canvas.height);
}
// 声明移动方法
const move_snake = (canvas,snake,dx,dy) => {
    const head = {
        x:snake[0].x + dx,
        y:snake[0].y + dy
    }
    snake.unshift(head);
    const has_eaten_food = snake[0].x === foodCoord.x && snake[0].y === foodCoord.y
    if(has_eaten_food){
        changeScore(10)
        gen_food(canvas,snake)
    }else{
        snake.pop()
    }
}
// 声明控制方向方法
const change_direction = (e) => {
    const  keyPressed = e.code;
    const goingUp = nextCoord.dy === -10;
    const goingDown = nextCoord.dy === 10;
    const goingRight = nextCoord.dx === 10;
    const goingLeft = nextCoord.dx === -10;

    switch (true) {
    case keyPressed === LEFT_KEY && !goingRight:
        nextCoord.dx=-10;
        nextCoord.dy=0
        break;
    case keyPressed === UP_KEY && !goingDown:
        nextCoord.dx=0;
        nextCoord.dy=-10
        break;
    case keyPressed === RIGHT_KEY && !goingLeft:
        nextCoord.dx=10;
        nextCoord.dy=0
        break;
    case keyPressed === DOWN_KEY && !goingUp:
        nextCoord.dx=0;
        nextCoord.dy=10
        break;
    default:
    }
}
// 声明判断是否结束游戏方法
const check_game_ended = (canvas,snake) => {
    /*
        这一步很巧妙
        1.首先此刻拿到的snake是最新的数据，也就是说此刻头部有可能和身体某个部分交接
        2.排除正方体的自然规则，选择从索引4开始遍历，因为如果只有4个节点，永远无法相撞
        3.假设现在有5个节点，如果相碰时
            头部的节点应该是新增的节点
            它的位置应该和原先索引是3，但现在索引是4的节点重合
    */ 
    for(let i = 4 ; i < snake.length ; i++){
        has_collided.value = snake[i].x === snake[0].x && snake[i].y === snake[0].y;
        if(has_collided.value){
            return true
        }
    }
    const hitLeftWall = snake[0].x <= 0 ;
    const hitRightWall = snake[0].x >= canvas.width - 10;
    const hitTopWall = snake[0].y <= 0 ;
    const hitBottomWall = snake[0].y >= canvas.height - 10;
    return hitLeftWall || hitRightWall || hitTopWall || hitBottomWall;
}
// 随机数方法
const random_food = (min,max) => {
    return Math.round((Math.random() * (max - min)) / 10) * 10
}
// 构造food
const gen_food = (canvas,snake) => {
    foodCoord.x = random_food(0,canvas.width - 10);
    foodCoord.y = random_food(0,canvas.height - 10);
    snake.forEach((item) => {
        const has_eaten = item.x === foodCoord.x && item.y === foodCoord.y;
        if (has_eaten) gen_food(canvas,snake) 
    })
}
// 渲染food
const draw_food = (ctx) => {
    ctx.fillStyle = food_col;
    ctx.strokeStyle = food_border;
    ctx.fillRect(foodCoord.x,foodCoord.y,10,10)
    ctx.strokeRect(foodCoord.x,foodCoord.y,10,10)
}
// 改变分数
const changeScore = (val) => {
    score.value += val
    document.getElementById("score").innerHTML = score.value + "";
}