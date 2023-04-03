
document.addEventListener("DOMContentLoaded", (e) => {

    let btn = document.querySelector("#mybtn");
    btn.addEventListener("mouseover", (e) => {
      e.target.style.backgroundColor = "#fff000";
    });
    btn.addEventListener("mouseout", (e) => {
      e.target.style.backgroundColor = "#ffffff";
      e.target.style.color="#b00";
      e.target.style.fontSize="2vw";
    });
    btn.addEventListener("click", (e) => {
      e.target.style.backgroundColor = "#00ff00";
      e.target.style.color="#ffffff"
      e.target.style.fontSize="4vw";
    });

    let icn = document.querySelector("#fa-icon");
    icn.addEventListener("mouseover", (e) => {
        e.target.setAttribute("class","fas fa-cog fa-spin")
    });
    icn.addEventListener("mouseout", (e) => {
        e.target.setAttribute("class","fas fa-cog")
    });

    let search = document.querySelector("#searchbar");
    search.addEventListener("focus", (e) => {
        e.target.setAttribute("value","")
    });
    search.addEventListener("blur", (e) =>{
        e.target.setAttribute("value","검색🔍")
    });
});

