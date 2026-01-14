function loadAbout () {
    const content = document.getElementById("content");
    content.textContent = "";

    const title = document.createElement("h2");
    title.textContent = "About Us";

    const phone = document.createElement("p");
    phone.textContent = "📞 Phone: +93 700 000 000";

    
    const address = document.createElement("p");
    address.textContent = "📍 Address: Main Street, Food City";

    content.append(title, phone, address);
}


export default loadAbout; 