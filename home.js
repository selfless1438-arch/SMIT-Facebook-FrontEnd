const rightAsideBtn = document.getElementById("togleRight");
const rightAside = document.querySelector("aside.aside-right");

rightAsideBtn.addEventListener("click", () => {
    rightAside.classList.toggle("active");
    rightAsideBtn.classList.toggle("active");
});

const leftAsideBtn = document.getElementById("togleLeft");
const leftAside = document.querySelector("aside.aside-left");

leftAsideBtn.addEventListener("click", () => {
    leftAside.classList.toggle("active");
    leftAsideBtn.classList.toggle("active");
})

function showSearch() {
    document.querySelector("nav .search-input").classList.add("active");
}