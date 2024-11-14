const container = document.querySelector(".container")
console.log(container)
// function createDivs(){

//     for (let i = 0; i < 256; i++){
        
//         const div = document.createElement("div");
//         div.classList.add(i+1);
//         div.classList.add("colorSlot")
//         container.appendChild(div);
//         console.log (div);
//     }
// }
// createDivs();


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
    }
    
};

console.log(createCol());
