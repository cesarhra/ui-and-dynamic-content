
var newItemBtn = document.querySelector("button");

var uList = document.querySelector(".added-items");


function addItem() {
    "use strict";
    
    var listItem = document.createElement("li");
    
    var promptValid = false;
    
    while (promptValid == false) {

        var item = prompt("Enter a new item for the tool box list: ");
        item = item.trim();

        if (item != "") {

            promptValid = true;

            listItem.appendChild(document.createTextNode(item));
            uList.appendChild(listItem);
            
        }     
    } 
}


function removeItem(ev) {
    "use strict";
    
    var remove = ev.target;
    
    uList.removeChild(remove);    
}



uList.addEventListener("click", removeItem, false);
newItemBtn.addEventListener("click", addItem, false);

