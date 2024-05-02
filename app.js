var ul = document.getElementById("ul");
var inp = document.getElementById("inp");

function add() {
var li = document.createElement("li");
var liText = document.createTextNode(inp.value);
li.appendChild(liText);
ul.appendChild(li)
inp.value ="";
var updBtn = document.createElement("button");
updBtn.classList.add("btnStyle");
var updText =  document.createTextNode("Update");
updBtn.appendChild(updText);
li.appendChild(updBtn);
updBtn.setAttribute("onclick", "upd(this)");


var delBtn = document.createElement("button");
delBtn.classList.add("btnStyle2");
var delText = document.createTextNode("Delete");
delBtn.appendChild(delText);
li.appendChild(delBtn);
delBtn.setAttribute("onclick", "del(this)");

}

// update function
function upd(e) {
    inp.value = e.parentNode.firstChild.nodeValue;
    var edit = document.createElement("button");
    edit.classList.add("editBtn")
    var editText = document.createTextNode("Edit");
    edit.appendChild(editText);
    e.parentNode.appendChild(edit);
    edit.setAttribute("onclick", "editFunc(this)");
    document.querySelector(".btn").disabled = true;
}


// edit function
function editFunc(e) {
    e.parentNode.firstChild.nodeValue = inp.value;
    document.querySelector(".btn").disabled = false;
    inp.value = "";
    e.remove();
}

// delete function
function del(e) {
    e.parentNode.remove();
}

// delete All function
function delAll() {
    ul.innerHTML = "";   
}