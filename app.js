const data = {
    shoes: {
        title: "Shoes Collection",
        items: [
            { name: "Nike Air Max", price: 12000, description: "Comfortable running shoes" },
            { name: "Adidas Ultraboost", price: 15000, description: "Stylish and lightweight" },
        ],
    },
    cosmetics: {
        title: "Cosmetics & Beauty",
        items: [
            { name: "L'Oreal Lipstick", price: 2000, description: "Matte finish long lasting" },
            { name: "Maybelline Mascara", price: 1800, description: "Volumizing black mascara" },
        ],
    },
    groceries: {
        title: "Daily Groceries",
        items: [
            { name: "Basmati Rice", price: 400, description: "5kg premium quality rice" },
            { name: "Cooking Oil", price: 550, description: "1 litre sunflower oil" },
        ],
    },
    electronics: {
        title: "Electronics & Gadgets",
        items: [
            { name: "Samsung Smart TV", price: 120000, description: "55-inch 4K UHD LED" },
            { name: "Apple AirPods", price: 38000, description: "Wireless Bluetooth earbuds" },
        ],
    },
    clothing: {
        title: "Fashion & Clothing",
        items: [
            { name: "Denim Jeans", price: 2500, description: "Slim fit stretchable jeans" },
            { name: "Casual T-Shirt", price: 1200, description: "100% cotton printed tee" },
        ],
    },
    toys: {
        title: "Kids Toys",
        items: [
            { name: "Lego Classic", price: 8000, description: "Creative building blocks set" },
            { name: "RC Car", price: 3500, description: "Remote controlled race car" },
        ],
    },
    books: {
        title: "Books & Stationery",
        items: [
            { name: "The Alchemist", price: 1200, description: "Novel by Paulo Coelho" },
            { name: "Notebook Set", price: 600, description: "Pack of 5 ruled notebooks" },
        ],
    },
    jewelry: {
        title: "Jewelry & Accessories",
        items: [
            { name: "Gold Necklace", price: 55000, description: "22k pure gold chain" },
            { name: "Silver Ring", price: 4000, description: "Elegant design for men" },
        ],
    },
    sports: {
        title: "Sports Items",
        items: [
            { name: "Cricket Bat", price: 3500, description: "English willow bat" },
            { name: "Football", price: 2000, description: "FIFA size 5 leather ball" },
        ],
        furniture: {
            title: "Home Furniture",
            items: [
                { name: "Wooden Chair", price: 4500, description: "Solid teak wood material" },
                { name: "Study Table", price: 9000, description: "Compact with drawers" },
            ],
        },
    },
};

let mainContainer = document.getElementsByClassName("container")[0]

for (let key in data) {
    let div = document.createElement("div")
    div.classList.add("card")
    div.style.width = "18rem"
    
    let bodyDiv = document.createElement("div")
    bodyDiv.classList.add("card-body")
    div.appendChild(bodyDiv)
    
    let bodyH5 = document.createElement("h5")
    bodyH5.classList.add("card-title")
    bodyH5.innerHTML = data[key].title
    div.appendChild(bodyH5)
    
    for (var i = 0; i < data[key].items.length; i++) {
        let bodyH6 = document.createElement("h6")
        bodyH6.classList.add("card-subtitle", "mb-2", "text-body-secondary")
        bodyH6.innerHTML = data[key].items[i].name
        
        let bodyP = document.createElement("p")
        bodyP.classList.add("card-text")
        bodyP.innerHTML = data[key].items[i].description
        
        let bodyH62 = document.createElement("h6")
        bodyH62.classList.add("card-price")
        bodyH62.innerText = `Price: ${data[key].items[i].price}`
        
        div.appendChild(bodyH6)
        div.appendChild(bodyP)
        div.appendChild(bodyH62)
        
        mainContainer.appendChild(div)
    }
    
}