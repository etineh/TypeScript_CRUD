let check: Boolean = true;
let idStore: number;
let inpVal = document.getElementById("item") as HTMLInputElement;
let display = document.getElementById("items") as HTMLUListElement | any;
let itemArr: string[] = [];

function displayItems(){
    let items: string = ''
    itemArr.forEach((el, i)=>{
        items += `<div id="item" class="item"> 
                    <span class="new" >* ${el}</span>
                    <span class="delete" id=${i} onclick="deleteOne(event)">&times;</span>
                    <span class="delete" id=${i} onclick="edit(event)">edit</span>
                </div>`
    })
    display.innerHTML = items
    inpVal.value = ''
}

function createTodo() {
    if(!check){
        inpVal.value.length === 0 ? alert("field can't be empty") : itemArr[idStore] = inpVal.value
        inpVal.value.length !== 0 ? check = true : false
    } else {
        inpVal.value.length === 0 ? alert("field can't be empty") : itemArr.push(inpVal?.value)
    }
    displayItems()
}

function edit(e: any): void{
    check = false
    inpVal.value = itemArr[e.target.id]
    idStore = e.target.id
}

function deleteOne(e: any){
    const itemId: number = e.target.id
    itemArr.splice(itemId, 1)
    displayItems()
}

function delAll(){
    itemArr.length = 0
    displayItems()
}