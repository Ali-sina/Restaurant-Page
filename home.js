import paneCake from "./Panecake.jpg";
function loadHome() {
    const content = document.getElementById("content");

    // headline
    const headline = document.createElement("h2");
    headline.textContent = "Welcome to Our Restaurant";

    //image
    const image = document.createElement("img");
    image.src = paneCake;
    image.alt = "Restaurant food";
    image.style.width = "300px";
    image.style.borderRadius = "12px";
    // paragraph
    const paragraph = document.createElement("p");
    paragraph.textContent =  "We serve delicious food made from fresh ingredients. Come and enjoy a warm atmosphere and unforgettable flavors.";



    // append everything
    content.appendChild(headline);
    content.appendChild(image);
    content.appendChild(paragraph);


}

export default loadHome;