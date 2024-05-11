const container = document.querySelector("#container");
let userInput=0;

    for(let i = 1; i < 257; i++){
        const square = document.createElement("div");
        square.className = "cube";
        square.addEventListener("mouseenter", function( event ) {   
            event.target.style.background = "purple";});

        container.appendChild(square);
    }


function userCanvas(){
    const buttonAsk = document.querySelector("#newCanvas")
    buttonAsk.addEventListener("click", () => {
        while (container.firstChild) {
            container.removeChild(container.lastChild);}
        userInput = prompt("Please enter the new canvas size")
            if (userInput < 100) {
                for(let i = 1; i < userInput*userInput+1; i++){
                    const square = document.createElement("div");
                    square.className = "cubejs";
                    square.style.setProperty("--widthInput", +userInput);
                    square.style.setProperty("--heightInput", +userInput);
                    square.addEventListener("mouseenter", function( event ) {   
                        event.target.style.background = "purple";});
            
                    container.appendChild(square);
                }

            } else {
                alert("Please try again")
            }
    })

}
userCanvas();