document.addEventListener("click", function () {
    const bttn = document.getElementById("saludar");
    const container = document.createElement("div");
    document.body.appendChild(container);
    container.appendChild(bttn);
    container.setAttribute("class", "cont");
    div = document.getElementsByClassName("cont");
    div.addEventListener("click", divSaluda())
})



function divSaluda() {
   return alert("hola soy el div")
}