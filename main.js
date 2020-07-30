const btnSelect = document.querySelector(".menu-btn");
const menuSelect = document.querySelector(".MENU");
const selectDashes = document.querySelectorAll(".btn-dash");

//setting menu initial state
let showMenu = false;

btnSelect.addEventListener("click",toggleMenu );

function toggleMenu() {
    if (!showMenu) {
        btnSelect.classList.add("close");
        menuSelect.classList.add("show");
        selectDashes.forEach(item => item.classList.add("show"));
        showMenu = true;
    }else{
        btnSelect.classList.remove("close");
        menuSelect.classList.remove("show");
        selectDashes.forEach(item => item.classList.remove("show"));
        showMenu = false;

    }


}