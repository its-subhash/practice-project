import { addToCart, updateCartQuantity } from "../data/cart.js";
import { products as dataProducts } from "../data/products.js";

let productsHTML = "";

//TODO: split product card into it's seperate js file.

dataProducts.forEach((product) => {
  productsHTML += `
            <div class="product-container">
          <div class="product-image-container">
            <img class="product-image"
              src="${product.image}">
          </div>

          <div class="product-name limit-text-to-2-lines">
            ${product.name}
          </div>

          <div class="product-rating-container">
            <img class="product-rating-stars"
              src="images/ratings/rating-${product.rating.stars * 10}.png">
            <div class="product-rating-count link-primary">
              ${product.rating.count}
            </div>
          </div>

          <div class="product-price">
            $${(product.priceCents / 100).toFixed(2)}
          </div>

          <div class="product-quantity-container">
            <select class ="js-product-quantity-${product.id}">
              <option selected value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>

          <div class="product-spacer"></div>

          <div class="added-to-cart js-added-to-cart-${product.id}">
            <img src="images/icons/checkmark.png">
            Added
          </div>

          <button class="add-to-cart-button button-primary js-add-to-cart"
          data-product-id="${product.id}">
            Add to Cart
          </button>
        </div>`;
});

document.querySelector(".js-products-grid").innerHTML = productsHTML;

const addCartButton = document.querySelectorAll(".js-add-to-cart");

addCartButton.forEach((button) => {
  let intervalId;
  button.addEventListener("click", () => {
    const productId = button.dataset.productId;
    addToCart(productId);
    updateCartQuantity();


    // For adding added toast

    document.querySelector(`.js-added-to-cart-${productId}`).style.opacity = 1;
    clearInterval(intervalId);
    intervalId = setInterval(() => {
      document.querySelector(
        `.js-added-to-cart-${productId}`
      ).style.opacity = 0;
    }, 2000);
  });
});
