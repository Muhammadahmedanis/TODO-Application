var ul = document.getElementById("ul");
var inp = document.getElementById("inp");

var arr = [];
var li;

function add() {
    if(inp.value.trim().length == 0)
    {
        alert("Enter value")
        inp.value = "";
    }
    else{
    li = document.createElement("li");
    li.setAttribute("class", "list");
    liText = document.createTextNode(inp.value);
    li.appendChild(liText);
    ul.appendChild(li);
    

    var updBtn = document.createElement("i");
    updBtn.setAttribute("class", "fa-solid fa-pencil");
    li.appendChild(updBtn);
    updBtn.setAttribute("onclick", "updBtn(this)");
    
    
    var delBtn = document.createElement("i");
    delBtn.setAttribute("class", "fa-regular fa-trash-can");
    li.appendChild(delBtn);
    delBtn.setAttribute("onclick", "delFunc(this)");
    
    var di = document.createElement("span");
    di.setAttribute("class", "fi");
    di.appendChild(updBtn);
    di.appendChild(delBtn);
    li.appendChild(di);


    var obj = {
        lists: li.innerHTML, 
    }
    arr.push(obj);
    localStorage.setItem("list",JSON.stringify(arr));
    inp.value = "";
    
    }
}
// var getUser = localStorage.getItem("list");
// if (getUser !== null) {
//     arr = JSON.parse(getUser);
//     console.log(arr);
// }
function cal() {
    ul.innerHTML = localStorage.getItem("list");
    console.log(ul);
}
cal()

// delBtn
function delFunc(e) {
    e.parentNode.parentNode.remove();
}

function updBtn(e) {
    inp.value = e.parentNode.parentNode.textContent;
    var ed = document.createElement("i");
    ed.setAttribute("class", "fa-solid fa-spinner");
    document.querySelector(".span").disabled = true;
    e.parentNode.firstChild.disaply = "none";
    e.parentNode.appendChild(ed);
    ed.setAttribute("onclick", "ad1(this)")
}

function ad1(e) {
    e.parentNode.parentNode.firstChild.textContent = inp.value;
    inp.value = "";
    e.parentNode.lastChild.remove();
    document.querySelector(".span").disabled = false;
}




// var ul = document.getElementById("ul");
// var inp = document.getElementById("inp");

// function add() {
// var li = document.createElement("li");
// var liText = document.createTextNode(inp.value);
// li.appendChild(liText);
// ul.appendChild(li)
// inp.value ="";
// var updBtn = document.createElement("button");
// updBtn.classList.add("btnStyle");
// var updText =  document.createTextNode("Update");
// updBtn.appendChild(updText);
// li.appendChild(updBtn);
// updBtn.setAttribute("onclick", "upd(this)");


// var delBtn = document.createElement("button");
// delBtn.classList.add("btnStyle2");
// var delText = document.createTextNode("Delete");
// delBtn.appendChild(delText);
// li.appendChild(delBtn);
// delBtn.setAttribute("onclick", "del(this)");

// }

// // update function
// function upd(e) {
//     inp.value = e.parentNode.firstChild.nodeValue;
//     var edit = document.createElement("button");
//     edit.classList.add("editBtn")
//     var editText = document.createTextNode("Edit");
//     edit.appendChild(editText);
//     e.parentNode.appendChild(edit);
//     edit.setAttribute("onclick", "editFunc(this)");
//     document.querySelector(".btn").disabled = true;
// }


// // edit function
// function editFunc(e) {
//     e.parentNode.firstChild.nodeValue = inp.value;
//     document.querySelector(".btn").disabled = false;
//     inp.value = "";
//     e.remove();
// }

// // delete function
// function del(e) {
//     e.parentNode.remove();
// }

// // delete All function
// function delAll() {
//     ul.innerHTML = "";   
// }