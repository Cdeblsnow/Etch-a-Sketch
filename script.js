const container = document.querySelector("#container");
let userInput=0;

    for(let i = 1; i < 257; i++){
        const square = document.createElement("div");
        square.className = "cube";
        square.addEventListener("mouseenter", function( event ) {   
                        let R = Math. floor(Math. random() * 256);
                        let G = Math. floor(Math. random() * 256);
                        let B = Math. floor(Math. random() * 256);  
                        let rbgColor = "rgb(" + R + "," + G + "," + B + ")";
                        event.target.style.background = rbgColor;});

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
                        let R = Math. floor(Math. random() * 256);
                        let G = Math. floor(Math. random() * 256);
                        let B = Math. floor(Math. random() * 256);  
                        let rbgColor = "rgb(" + R + "," + G + "," + B + ")";
                        event.target.style.background = rbgColor;});
            
                    container.appendChild(square);
                }

            } else {
                alert("Please try again")
            }
    })

}
userCanvas();