const snakeboard = createCanvas();                          // 创建canvas
createStyle()                                           // 创建style
const scoreboard = createScoreBoard()                       // 创建计分牌
const snakeboard_ctx = snakeboard.getContext("2d");         // 获取canvas 2d context

// 声明snake data
let snake = [
    { x:200,y:200},
    { x:190,y:200},
    { x:180,y:200},
    { x:170,y:200},
    { x:160,y:200},
]

// 为了优化，增加刷新状态位
let renderRequested = false;
// 绘画最新的内容
const paint = () => {
    clearCanvas(snakeboard,snakeboard_ctx);
    if(!check_game_ended(snakeboard,snake)){
        move_snake(snakeboard,snake,nextCoord.dx,nextCoord.dy)
        draw_food(snakeboard_ctx)
        snake.forEach(item => drawSnakePart(snakeboard_ctx,item))
    }else{
        scoreboard.innerHTML = `
            恭喜你，最终成绩为${score.value}.
            <br/>
            是否在开一局,<a href="#" onclick="replay()">再来</a>
        `
    }
}


// start run
const run = () => {
    renderRequested = false;
    paint()
}

// 主流程渲染
let last_time = 0;
const renderMaster = (time) => {
    if(time - last_time > 500){
        last_time = time
        paint()
    }
    requestAnimationFrame(renderMaster)
}
requestAnimationFrame(renderMaster)

// 监控按键渲染
const renderForKeyDown = () => {
    if(!renderRequested){
        renderRequested = true
        requestAnimationFrame(run)
    }
}

// 增加监听事件
document.addEventListener("keydown",e => {
    change_direction(e)
    renderForKeyDown()
})

gen_food(snakeboard,snake)


// 重开
const replay = () => {
    snake = [
        { x:200,y:200},
        { x:190,y:200},
        { x:180,y:200},
        { x:170,y:200},
        { x:160,y:200},
    ]
    score.value = 0;
    scoreboard.innerHTML = score.value + ""
}
