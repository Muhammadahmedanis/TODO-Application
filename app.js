var ul = document.getElementById("ul");
var inp = document.getElementById("inp");

var arr = [];

function add() {
    if(inp.value.trim().length == 0)
        {
            alert("Enter value")
            inp.value = "";
        }
    else
        {

        var li = document.createElement("li");
        li.setAttribute("class", "list");
        var litext = document.createTextNode(inp.value);
        li.appendChild(litext);
        ul.appendChild(li);

        var updbtn = document.createElement("i");
        updbtn.setAttribute("class", "fa-solid fa-pencil");
        li.appendChild(updbtn);

        var delbtn = document.createElement("i");
        delbtn.setAttribute("class", "fa-regular fa-trash-can");
        li.appendChild(delbtn);
        delbtn.setAttribute("onclick", "delfunc(this)")

        var obj = {
            list: inp.value,
        }
        arr.push(obj);
        localStorage.setItem("data", JSON.stringify(arr));
        inp.value = '';
    }
}

function cal() {
    var aa = localStorage.getItem("data");
    var bb = JSON.parse(aa);
    bb.map(function (data) {
        var li = document.createElement("li");
        li.setAttribute("class", "list");
        var litext = document.createTextNode(data.list);
        li.appendChild(litext);
        ul.appendChild(li);

        var updbtn = document.createElement("i");
        updbtn.setAttribute("class", "fa-solid fa-pencil");
        li.appendChild(updbtn);
        updbtn.setAttribute("onclick", "updFunc(this)");

        var delbtn = document.createElement("i");
        delbtn.setAttribute("class", "fa-regular fa-trash-can");
        li.appendChild(delbtn);
        delbtn.setAttribute("onclick", "delfunc(this)")
    })
}
if(localStorage.getItem("data"))
{
    cal()
}
function delfunc(e) {
    var p = JSON.parse(localStorage.getItem("data"));
    var remdata = p.splice(0, 1);
    localStorage.setItem("data", JSON.stringify(p)); 
    e.parentNode.remove();
}

function updFunc(e) {
    inp.value = e.parentNode.firstChild.textContent;
    var edit = document.createElement("i");
    edit.setAttribute("class", "fa-solid fa-spinner");
    e.parentNode.appendChild(edit);
    edit.setAttribute("onclick", "ad1(this)")
    // console.log(inp.value);
    // console.log(e);
    // e.style.display = "none";
//     document.querySelector(".span").disabled = true;
//     e.parentNode.firstChild.disaply = "none";
//     e.parentNode.appendChild(ed);

}
function ad1(e) {
    e.parentNode.firstChild.textContent = inp.value;
    e.parentNode.lastChild.remove();
    var updstorage = JSON.parse(localStorage.getItem("data"))
    var updObj = {a: inp.value};
    updstorage.splice(0, 1, updObj)
    localStorage.setItem("data", JSON.stringify(updstorage))
    inp.value = "";
    // console.log(e.parentNode);
    // console.log(updObj);
    // console.log(e.parentNode.lastChild);
    // document.querySelector(".span").disabled = false;
}
    if(localStorage.getItem("data"))
        {
            updstorage();
        }
        function updstorage() {
            var getUpdStorage = JSON.parse(localStorage.getItem("data"));
            getUpdStorage.map(function (updData) {
            console.log(updData.a);
            })
        }
        








// function add() {
//     if(inp.value.trim().length == 0)
//     {
//         alert("Enter value")
//         inp.value = "";
//     }
//     else{
//     var li = document.createElement("li");
//     li.setAttribute("class", "list");
//     liText = document.createTextNode(inp.value);
//     li.appendChild(liText);
//     ul.appendChild(li);
    

//     var updBtn = document.createElement("i");
//     updBtn.setAttribute("class", "fa-solid fa-pencil");
//     li.appendChild(updBtn);
//     // updBtn.setAttribute("onclick", "updBtn(this)");
    
    
//     var delBtn = document.createElement("i");
//     delBtn.setAttribute("class", "fa-regular fa-trash-can");
//     li.appendChild(delBtn);
//     // delBtn.setAttribute("onclick", "delFunc(this)");
    
//     var di = document.createElement("span");
//     di.setAttribute("class", "fi");
//     di.appendChild(updBtn);
//     di.appendChild(delBtn);
//     li.appendChild(di);


//     var obj = {
//         lists: li.innerText, 
//     }
//     arr.push(obj);
//     localStorage.setItem("list",JSON.stringify(arr));
//     inp.value = "";
    
//     }
// }

// function cal() {
//     var aa = localStorage.getItem("list");
//     var bb = JSON.parse(aa);
//     console.log(bb);
//     bb.map(function (data, i) {
//         ul.innerHTML += `<div>${data.lists}  <i class="fa-solid fa-pencil"> </i>  
//         <i onclick='delFunc(this)' class= "fa-regular fa-trash-can"> </i>     </div>`
//         console.log(data, i);

//     })
// }
// cal()

// // delBtn
// function delFunc(e) {
//     e.parentNode.remove();
// }




// function updBtn(e) {
//     inp.value = e.parentNode.parentNode.textContent;
//     var ed = document.createElement("i");
//     ed.setAttribute("class", "fa-solid fa-spinner");
//     document.querySelector(".span").disabled = true;
//     e.parentNode.firstChild.disaply = "none";
//     e.parentNode.appendChild(ed);
//     ed.setAttribute("onclick", "ad1(this)")
// }

// function ad1(e) {
//     e.parentNode.parentNode.firstChild.textContent = inp.value;
//     inp.value = "";
//     e.parentNode.lastChild.remove();
//     document.querySelector(".span").disabled = false;
// }