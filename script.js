const container = document.querySelector(".container")
console.log(container)
let numSqr = 16

function createCol(numCol){
    
    for (let i = 0; i < numCol; i++){
        
        const col = document.createElement("div");
        col.classList.add("col");
        container.appendChild(col);
        createRow(col,numCol);
}};

function createRow(column,numRow) {
    
    for (let i = 0; i<numRow; i++){
        const row = document.createElement("div");
        row.classList.add("row");
        column.appendChild(row);
        
        row.addEventListener("mouseover", () =>{
            row.style.backgroundColor = "black";
        })
    }
    
};

createCol(numSqr);





const btn = document.querySelector("button");
console.log (btn);
btn.addEventListener("click",()=>{
    const cols = document.querySelectorAll(".col");   
    const rows = document.querySelectorAll(".rows");
    numSqr = prompt("Max 100");
    rows.forEach(e => e.remove());
    cols.forEach(e => e.remove());
    createCol(numSqr);
})