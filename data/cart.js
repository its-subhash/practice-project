export const cart =[    
]

export const addToCart =(product_id)=>{
    let matchingItem;
    let quantity = document.querySelector(`.js-product-quantity-${product_id}`);

    cart.forEach((item) => {
      if (product_id === item.productId) {
        matchingItem = item;
      }
    });

    if (matchingItem) {
      matchingItem.quantity += Number(quantity.value);
    } else {
      cart.push({
        productId: product_id,
        quantity: Number(quantity.value),
      });
    }
}


export const updateCartQuantity =() =>{
let cartQuantity = 0;

    cart.forEach((items) => {
      cartQuantity += items.quantity;
    });
    document.querySelector(".js-cart-quantity").innerHTML = cartQuantity;
}


