const container = document.querySelector("#container");
    for(let i = 1; i < 257; i++){
        const square = document.createElement("div");
        square.className = "cube";
        square.textContent = i ;

        container.appendChild(square);
    }