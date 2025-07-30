
let cart = [];

function addToCart(button) {
    const product = button.closest('.product');
    const productName = product.getAttribute('data-name');
    const productPrice = parseFloat(product.getAttribute('data-price'));
    const productQuantity = parseInt(product.querySelector('input').value);

    const cartItem = cart.find(item => item.name === productName);
    if (cartItem) {
        cartItem.quantity += productQuantity;
    } else {
        cart.push({ name: productName, price: productPrice, quantity: productQuantity });
    }
    updateCart();
    alert(productName + ' added to cart');
}

function updateCart() {
    const cartItemsContainer = document.getElementById('cart-items');
    cartItemsContainer.innerHTML = '';
    let total = 0;
    cart.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.textContent = `${item.name} - ${item.quantity} kg - ₹${item.price * item.quantity}`;
        cartItemsContainer.appendChild(cartItem);
        total += item.price * item.quantity;
    });
    document.getElementById('cart-total').textContent = total.toFixed(2);
}

function checkout() {
    alert('opening payment page!');
    cart = [];
    updateCart();
    document.getElementById('cart').style.display = 'none';
    window.location.href='addcart.html';
}

document.getElementById('cart-btn').addEventListener('click', function() {
    document.getElementById('cart').style.display = 'block';
});
function handlePayment() {
    alert('Payment processed successfully!');
    // Add logic here to handle payment processing
}

function checkout() {
    alert('Delivery address confirmed!');
    // Add logic here to handle checkout and delivery processing
}