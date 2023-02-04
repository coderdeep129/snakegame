// game constants & variable
let inputDir = {x: 0,y: 0};
const Foodsound = new Audio('food.mp3');
const gameoverSound = new Audio('gameover.mp3');
const movesound = new Audio('move.mp3');
const musicsound = new Audio('music.mp3');
let speed = 2;
let score = 0;
let lastPaintTime = 0;
let snakearr = [
    {x: 13 , y: 15}
]
food = {x: 6 ,y: 7};





//game functions
function main(ctime){
    window.requestAnimationFrame(main);
    // console.log(ctime)
    if((ctime - lastPaintTime)/1000 <1/speed){
        return;
    }
    lastPaintTime = ctime;
    gameEngine();
    
}
function isCollide(sarr){
    return false;

}
function gameEngine(){
    // updating the snake array & food
    if(isCollide(snakearr)){
        gameoverSound.play();
        musicsound.pause();
        inputDir = {x: 0, y: 0};
        alert("GameOver. Press any KEY to Play Again!");
        snakearr = [{x: 13 , y: 15}];
        musicsound.play();
        score = 0;

    }
    //if you eaten the food regenerate the food 
    if(snakearr[0].y === food.y && snakearr[0].x === food.x){
        snakearr.unshift({x: snakearr[0].x + inputDir.x, y: snakearr[0].y + inputDir.y});
        let a = 2;
        let b= 16;
        food = {x:Math.round(a + (b - a)*Math.round()),y: Math.round(a + (b - a)*Math.round())}
    }
    for (let i = snakearr.length -2; i>=0; i--)
    {
        // const element = array[i];
        snakearr[i +1] = {...snakearr[i]};

    }
    snakearr[0].x += inputDir.x;   
    snakearr[0].y += inputDir.y;
    //move the snake
    
    //rander  the snake &  food;
    board.innerHTML = "";
    snakearr.forEach((e,index)=>{
        snakeElement = document.createElement('div');
        snakeElement.style.gridRowStart = e.y;
        snakeElement.style.gridColumnStart = e.x;
        // snakeElement.classList.add('snake'); 
        if(index === 0){
            snakeElement.classList.add('head');
        }
        else{
            snakeElement.classList.add('snake');
            }
        board.appendChild(snakeElement);   

    });
    // display the Food 
        foodElement = document.createElement('div');
        foodElement.style.gridRowStart = food.y;
        foodElement.style.gridColumnStart = food.x;
        foodElement.classList.add('food')
        board.appendChild(foodElement);
}








//main logic starts here
window.requestAnimationFrame(main);
window.addEventListener('Kewdown', e =>{
    inputDir = {x: 0, y: 1}// start the game
    movesound.play();
    switch (e.key){
        case "ArrowUp":
            console.log("ArrowUp")
            inputDir.x = 0;
            inputDir.y = -1;
            break;
        
        case "ArrowDown":
             console.log("ArrowDown")
             inputDir.x = 0;
            inputDir.y = 1;
             break;
        
        case "ArrowLeft":
            console.log("ArrowLeft")
            inputDir.x = -1;
            inputDir.y = 0;
            break;
        
        case "ArrowRight":
            console.log("ArrowRight")
            inputDir.x = 1;
            inputDir.y = 0;
            break;
        default:
            break;

                
    }

    
});