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
    else
        {

        li = document.createElement("li");
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
    var listItemText = e.parentNode.firstChild.data
    var storageData = JSON.parse(localStorage.getItem("data"));
    var indexToDelete = storageData.findIndex(function(item) {
        return item.list === listItemText;
    });
    if(indexToDelete !== -1)
        {
            storageData.splice(indexToDelete, 1);
            localStorage.setItem("data", JSON.stringify(storageData)); 
        }
    e.parentNode.remove();
}

function updFunc(e) {
    inp.value = e.parentNode.firstChild.textContent;
    e.style.display = "none";
    var edit = document.createElement("i");
    edit.setAttribute("class", "fa-solid fa-spinner");
    e.parentNode.appendChild(edit);
    edit.setAttribute("onclick", "updItem(this)")
}

function updItem(e) {
    var edbtn = e.parentNode.querySelector('.fa-solid.fa-pencil');
    if(edbtn)
        {
            edbtn.style.display = 'block';
        }
    var updvalue = inp.value;
    var listItem = e.parentNode.firstChild.data;
    var updstorage = JSON.parse(localStorage.getItem("data"));
    for(var i = 0; i < updstorage.length; i++)
        {
            if(updstorage[i].list == listItem)
                {
                    updstorage[i].list = updvalue;
                    break;
                }

        }
        localStorage.setItem("data", JSON.stringify(updstorage))
        e.parentNode.firstChild.textContent = updvalue;
        e.parentNode.lastChild.remove();
        inp.value = '';
}
