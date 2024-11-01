const products = [
    { id: 1, name: "Product 1", price: 29.99 },
    { id: 2, name: "Product 2", price: 39.99 },
    { id: 3, name: "Product 3", price: 49.99 },
];

function displayProducts() {
    const productContainer = document.getElementById("products");
    products.forEach(product => {
        const productDiv = document.createElement("div");
        productDiv.className = "product";
        productDiv.innerHTML = `<h3>${product.name}</h3><p>Price: $${product.price}</p>`;
        productContainer.appendChild(productDiv);
    });
}

displayProducts();
const products = [
    { id: 1, name: "Product 1", price: 29.99 },
    { id: 2, name: "Product 2", price: 39.99 },
    { id: 3, name: "Product 3", price: 49.99 },
    { id: 4, name: "Product 4", price: 19.99 },
    { id: 5, name: "Product 5", price: 24.99 },
    { id: 6, name: "Product 6", price: 59.99 },
    { id: 7, name: "Product 7", price: 34.99 },
    { id: 8, name: "Product 8", price: 44.99 },
    { id: 9, name: "Product 9", price: 99.99 },
];

function displayProducts() {
    const productContainer = document.getElementById("products");
    products.forEach(product => {
        const productDiv = document.createElement("div");
        productDiv.className = "product";
        productDiv.innerHTML = `
            <h3>${product.name}</h3>
            <p>Price: $${product.price.toFixed(2)}</p>
            <button>Add to Cart</button>
        `;
        productContainer.appendChild(productDiv);
    });
}

displayProducts();
