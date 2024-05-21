
let inp = document.getElementById("inp")
let ul = document.querySelector("ul")
function todo(){
    let li= document.createElement("li")
    li.innerHTML = inp.value
    ul.appendChild(li)
    inp.value = "" 
    let btnedit = document.createElement("button")
    let btnedittext = document.createTextNode("Edit")
    btnedit.appendChild(btnedittext)
    li.appendChild(btnedit)
    btnedit.setAttribute("onclick","edit(this)")
    btnedit.classList.add("add")


    let btndelete = document.createElement("button")
    let btndeletetext = document.createTextNode("Delete")
    btndelete.appendChild(btndeletetext)

    li.appendChild(btndelete)
    btndelete.setAttribute("onclick","deletee(this)")
    btndelete.classList.add("add")

    
}

function edit(e){
    let pro = prompt("enter the change value ",e.parentNode.textContent)
    let btnedit = document.createElement("button")
    let btnedittext = document.createTextNode("Edit")
    btnedit.appendChild(btnedittext)
    e.parentNode.textContent.appendChild(btnedit)
    e.parentNode.textContent = pro  
}

function deletee(e){
    e.parentNode.remove()
}
function alldel(){
    ul.innerHTML = ""
}
