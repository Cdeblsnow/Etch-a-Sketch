const container = document.querySelector("#container");
const initialCanvas= firstCanvas();
let userWidth=0;
let userHeight=0;

function firstCanvas(){
    for(let i = 1; i < 257; i++){
        const square = document.createElement("div");
        square.className = "cube";
        square.textContent = i ;
        square.addEventListener("mouseenter", function( event ) {   
            event.target.style.background = "purple";});

        container.appendChild(square);
    }
}