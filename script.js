
function saludarDiv() {
    return alert("hola soy el div");
}

document.addEventListener("DOMContentLoaded", function () {
   
    let bttn = document.getElementById("saludar");
    let container = document.createElement("div");
    document.body.appendChild(container);
    container.appendChild(bttn);
    container.setAttribute("class", "cont");
    div = document.getElementsByTagName("div");
    div.addEventListener("click", saludarDiv());
  
})
