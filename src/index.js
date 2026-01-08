
import loadHome from "./home.js";
import loadMenu from "./menu.js";
import loadAbout from "./about.js";
import "./style.css";

loadHome();


// tab buttons
const homeBtn = document.querySelector("nav button:nth-child(1)");
const menuBtn = document.querySelector("nav button:nth-child(2)");
const abuotBtn = document.querySelector("nav button:nth-child(3)");


homeBtn.addEventListener("click" , loadHome);
menuBtn.addEventListener("click" , loadMenu);
abuotBtn.addEventListener("click" , loadAbout); 

