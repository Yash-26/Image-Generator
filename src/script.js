
function generate() {
    let image=document.createElement("img");
    let div=document.getElementById("genimg");
    image.setAttribute("id","imaage")
    image.src="https://static.wikia.nocookie.net/swordartonline/images/5/59/Kirito_ALO.png/revision/latest?cb=20170324221531";
    image.style.width="150px";
    div.appendChild(image);
}

function asuna() {
    let image=document.createElement("img");
    let element=document.getElementById("genimg");
    image.setAttribute("id","imaage");
    image.src="https://static.wikia.nocookie.net/swordartonline/images/3/32/Honeymoon_BD.png/revision/latest?cb=20130202031355";
    image.style.width="150px";
    element.appendChild(image);
}

function reset() {
    document.getElementById("imaage").remove()
}