const navToggleI = nav_toggle.getElementsByTagName("i")[0];
const navListUl = document.getElementsByClassName("nav-list")[0];

console.log(navToggleI);
console.log(navListUl);
// .nav-toggle 클릭하면
nav_toggle.onclick = () => {
    // .nav-toggle i 햄버거 메뉴 <-> X
    // class에서 bi-list <-> bi-x-lg
    navToggleI.classList.toggle("bi-list");
    navToggleI.classList.toggle("bi-x-lg");
    // .nav-list에 .show-menu toggle
    // navToggleI.classList.toggle("nav-list");
    navListUl.classList.toggle("show-menu");
}

// HTML => js
// 1. ID
//      const navToggleDiv = document.getElementById("nav-toggle");
//      nav-toggle
// 2. class
//      const navToggleDiv = document.getElementsByClassName("nav-toggle")[0];
// 3. Tag
//      const navToogleDiv = document.getElementsByTagName("div")[0];
// 4. CSS selector
//      const navToggleDiv = document.querySelector("#nav-toggle");
//      const navToggleDiv = documnet.querySelectorAll(".nav-toggle")[0];
//      const navToggleDiv = document.querySelectorAll("div")[0];
// 5. XPath
//      const navToggleDiv = document.querySelector( [@id="nav-toggle"])
// nav_toggle.onclick = () => alert("안녕");
// nav_toggle.onclick = alert("안녕");
// nav_toggle.onclick = function () {
//     alert("안녕");
// };
//안녕 이라는 창을 띄우는 함수를 실행해라