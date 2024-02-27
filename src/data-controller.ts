import { Product, products } from "./data";

function generateProductHTML(product: Product): string {
    return `<div class="store-item">
              <img src="${product.image}" alt="${product.name}" />
              <p>${product.name}</p>
              <p>${product.description}</p>
              <span>${product.rating}/5</span><span>$${product.price}</span><span>stock ${product.stock}</span>
            </div>`;
}

function renderProducts(prods: Product[]): void {
    const container = document.querySelector('#main-container');
    if (container) {
        container.innerHTML = prods.map(product => generateProductHTML(product)).join('');
    }
}

function getByCategory(category: string): void {
    const filteredProducts = products.filter(product => product.category === category);
    renderProducts(filteredProducts);
}

function getByRating(minRating: number): void {
    const ratedProducts = products.filter(product => product.rating >= minRating);
    renderProducts(ratedProducts)
}

export { renderProducts, getByCategory, getByRating };
