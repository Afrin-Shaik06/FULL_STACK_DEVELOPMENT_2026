// Sample Products
const products = [
    { id: 1, name: 'Apple', price: 2.5, category: 'Fruits', stock: 10, image: 'https://via.placeholder.com/150?text=Apple' },
    { id: 2, name: 'Banana', price: 1.5, category: 'Fruits', stock: 0, image: 'https://via.placeholder.com/150?text=Banana' },
    { id: 3, name: 'Tomato', price: 3, category: 'Vegetables', stock: 5, image: 'https://via.placeholder.com/150?text=Tomato' },
    { id: 4, name: 'Cumin', price: 4, category: 'Spices', stock: 8, image: 'https://via.placeholder.com/150?text=Cumin' },
    { id: 5, name: 'Millet', price: 5, category: 'Millets', stock: 12, image: 'https://via.placeholder.com/150?text=Millet' }
];

let cart = JSON.parse(localStorage.getItem('cart')) || [];
let users = JSON.parse(localStorage.getItem('users')) || [];
let loggedIn = localStorage.getItem('loggedIn') === 'true';

// Page Navigation
function showPage(pageId) {
    document.querySelectorAll('.page').forEach(page => page.classList.add('hidden'));
    document.getElementById(pageId).classList.remove('hidden');
    document.querySelectorAll('.menu a').forEach(link => link.classList.remove('active'));
    document.querySelector(`.menu a[onclick="showPage('${pageId}')"]`).classList.add('active');
}

// Auth
if (loggedIn) {
    document.getElementById('auth').innerHTML = '<button onclick="logout()">Logout</button>';
}

function logout() {
    localStorage.setItem('loggedIn', 'false');
    location.reload();
}

// Signup
document.getElementById('signupForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirm = document.getElementById('confirmPassword').value;
    if (!name || !email || !password || password !== confirm) {
        document.getElementById('signupMessage').textContent = 'Please fill all fields and ensure passwords match.';
        return;
    }
    users.push({ name, email, password });
    localStorage.setItem('users', JSON.stringify(users));
    document.getElementById('signupMessage').textContent = 'Signup successful!';
    setTimeout(() => showPage('login'), 2000);
});

// Login
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    const user = users.find(u => u.email === email && u.password === password);
    if (user) {
        localStorage.setItem('loggedIn', 'true');
        showPage('home');
        location.reload();
    } else {
        document.getElementById('loginMessage').textContent = 'Invalid credentials.';
    }
});

// Products
function renderProducts(filter = '', search = '') {
    const list = document.getElementById('productList');
    list.innerHTML = '';
    products.filter(p => (filter === '' || p.category === filter) && (search === '' || p.name.toLowerCase().includes(search.toLowerCase()))).forEach(product => {
        const div = document.createElement('div');
        div.className = 'product';
        div.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>$${product.price}</p>
            <p class="${product.stock === 0 ? 'out-of-stock' : ''}">${product.stock === 0 ? 'Out of Stock' : 'In Stock'}</p>
            <select id="weight-${product.id}">
                <option value="500g">500g</option>
                <option value="1kg">1kg</option>
                <option value="2kg">2kg</option>
            </select>
            <input type="number" min="1" value="1" id="qty-${product.id}">
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        list.appendChild(div);
    });
}

// Event listeners for search and filter
document.getElementById('search').addEventListener('input', () => renderProducts(document.getElementById('filter').value, document.getElementById('search').value));
document.getElementById('filter').addEventListener('change', () => renderProducts(document.getElementById('filter').value, document.getElementById('search').value));

// Cart functions
function addToCart(id) {
    const product = products.find(p => p.id === id);
    const qty = parseInt(document.getElementById(`qty-${id}`).value);
    const existing = cart.find(c => c.id === id);
    if (existing) {
        existing.qty += qty;
    } else {
        cart.push({ ...product, qty });
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    alert('Added to cart!');
    renderCart();
}

function renderCart() {
    const items = document.getElementById('cartItems');
    items.innerHTML = '';
    let subtotal = 0;
    cart.forEach(item => {
        subtotal += item.price * item.qty;
        const div = document.createElement('div');
        div.className = 'cart-item';
        div.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <div>
                <h4>${item.name}</h4>
                <p>$${item.price} x ${item.qty}</p>
            </div>
            <button onclick="removeFromCart(${item.id})">Remove</button>
        `;
        items.appendChild(div);
    });
    const tax = subtotal * 0.1;
    const total = subtotal + tax;
    document.getElementById('subtotal').textContent = subtotal.toFixed(2);
    document.getElementById('tax').textContent = tax.toFixed(2);
    document.getElementById('total').textContent = total.toFixed(2);
    document.getElementById('billSubtotal').textContent = subtotal.toFixed(2);
    document.getElementById('billTax').textContent = tax.toFixed(2);
    document.getElementById('billTotal').textContent = total.toFixed(2);
}

function removeFromCart(id) {
    cart = cart.filter(c => c.id !== id);
    localStorage.setItem('cart', JSON.stringify(cart));
    renderCart();
}

// Contact
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('contactName').value;
    const email = document.getElementById('contactEmail').value;
    const message = document.getElementById('message').value;
    if (!name || !email || !message) {
        document.getElementById('contactMessage').textContent = 'Please fill all fields.';
        return;
    }
    document.getElementById('contactMessage').textContent = 'Message sent successfully!';
});

// Initial render
renderProducts();
renderCart();