const container = document.querySelector(".container")
console.log(container)

function createCol(){

    for (let i = 0; i < 16; i++){
        
        const col = document.createElement("div");
        col.classList.add("col");
        container.appendChild(col);
        createRow(col);
}};

function createRow(column) {
    
    for (let i = 0; i<16; i++){
        const row = document.createElement("div");
        row.classList.add("row");
        column.appendChild(row);
        
        row.addEventListener("mouseover", () =>{
            row.style.backgroundColor = "black";
        })
    }
    
};

console.log(createCol());
