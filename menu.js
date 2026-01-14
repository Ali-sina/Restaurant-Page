function loadMenu() {
    const content = document.getElementById("content");
    content.textContent = "";


    const title = document.createElement("h2");
    title.textContent = "Our Menu";

    const items = [
        "🍕 Margherita Pizza",
    "🍔 Classic Beef Burger",
    "🍝 Creamy Alfredo Pasta",
    "🥗 Fresh Garden Salad",  
    ];

    const ul = document.createElement("ul");

    items.forEach((item) => {
        const li = document.createElement("li");
        li.textContent = item;
        ul.appendChild(li);
    });

    content.append(title,ul);
}

export default loadMenu;  