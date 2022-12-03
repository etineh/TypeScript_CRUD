"use strict";
let check = true;
let idStore;
let inpVal = document.getElementById("item");
let display = document.getElementById("items");
let itemArr = [];
function displayItems() {
    let items = '';
    itemArr.forEach((el, i) => {
        items += `<div id="item" class="item"> 
                    <span class="new" >* ${el}</span>
                    <span class="delete" id=${i} onclick="deleteOne(event)">&times;</span>
                    <span class="delete" id=${i} onclick="edit(event)">edit</span>
                </div>`;
    });
    display.innerHTML = items;
    inpVal.value = '';
}
function createTodo() {
    if (!check) {
        itemArr[idStore] = inpVal.value;
        check = true;
    }
    else {
        itemArr.push(inpVal === null || inpVal === void 0 ? void 0 : inpVal.value);
    }
    displayItems();
}
function edit(e) {
    check = false;
    inpVal.value = itemArr[e.target.id];
    idStore = e.target.id;
}
function deleteOne(e) {
    const itemId = e.target.id;
    itemArr.splice(itemId, 1);
    displayItems();
}
function delAll() {
    itemArr.length = 0;
    displayItems();
}
