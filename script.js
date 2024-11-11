const container = document.querySelector(".container")
console.log(container)
function createDivs(){

    for (let i = 0; i <= 256; i++){
        
        const div = document.createElement("div");
        div.classList.add(i);
        div.classList.add("colorSlot")
        container.appendChild(div);
        console.log (div);
    }
}
console.log(createDivs());