const dropdownBtn = document.querySelector(".search_dropdown_btn")
const dropdown = document.querySelector(".nav_dropdown")
const main = document.querySelector("main")
const footer = document.querySelector("footer")

dropdownBtn.onclick = (e) => {
    if (dropdown.className.includes('nav_dropdown_none')){
        main.classList.add('nav_dropdown_none')
        footer.classList.add('nav_dropdown_none')
        dropdown.classList.remove('nav_dropdown_none')
    } else {
        main.classList.remove('nav_dropdown_none')
        footer.classList.remove('nav_dropdown_none')
        console.log(dropdown.classList);
        dropdown.classList.add('nav_dropdown_none')
    }
}