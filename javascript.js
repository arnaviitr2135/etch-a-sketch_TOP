let container = document.querySelector(".container");
let btn = document.querySelector("button");

for (let i = 0; i < 16 * 16; i++) {
    let c = container.appendChild(document.createElement("div"));
    c.style.width = "60px";
    c.style.height = "60px";
    c.style.backgroundColor = "rgb(193,193,193";
    c.style.border = "1px solid black";
    c.addEventListener("mouseover", () => {
        c.style.backgroundColor = "black";
});

}

btn.onclick = () => {
    let size = prompt("Enter the size of the grid");
    container.innerHTML = ""; 
    for (let i = 0; i < size * size; i++) {
        let el = document.createElement("div");
        container.appendChild(el);
        el.style.width = `${960 / size}px`;
        el.style.height = `${960 / size}px`;
        el.style.backgroundColor = "rgb(193,193,193";
        el.style.border = "1px solid black";
        el.addEventListener("mouseover", () => {
            el.style.backgroundColor = "black";
});

    }

    }





{
    container.style.display = "flex"
    container.style.flexWrap = "wrap";
}