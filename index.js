const list = document.querySelectorAll(".navbar-nav li")
const listBox = document.querySelectorAll(".box")

list.forEach((item, index) => {
    item.addEventListener("click", () => {
        list.forEach((otherItem) => {
            otherItem.style.backgroundColor = "transparent";
            otherItem.style.color = "black";
            otherItem.style.backgroundImage = "none";
        });
        item.style.color = "white";
        item.style.backgroundImage = "linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%)";
        listBox.forEach((box, boxIndex) => {
            box.style.display = boxIndex === index ? "block" : "none";
        });
    });
});