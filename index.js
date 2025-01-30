let search = document.querySelector('.search-box');
document.querySelector('#search-icon').onclick = () => {
    search.classList.toggle('active');
    navbar.classList.remove('active');
}
 

let navbar = document.querySelector('.navbar');
document.querySelector('#menu-icon').onclick = () => {
    navbar.classList.toggle('active');
    search.classList.remove('active');
}

window.onscroll =() =>{
    navbar.classList.remove('active');
    search.classList.remove('active');

}

// Select the 'Shop Now' button from the home section
let shopNowButton = document.querySelector('.home .btn');

// Add click event listener to the 'Shop Now' button
shopNowButton.addEventListener('click', (e) => {
    e.preventDefault(); // Prevent the default link behavior
    scrollToSection('#products'); // Scroll to the products section
});

// Function to scroll to a specific section
function scrollToSection(sectionId) {
    const section = document.querySelector(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

// Select the 'Learn More' button from the about section
let learnMoreButton = document.querySelector('.about .btn');

// Add click event listener to the 'Learn More' button
learnMoreButton.addEventListener('click', (e) => {
    e.preventDefault(); // Prevent default action of the link if any
    window.open('https://www.coffeeresearch.org/coffee/', '_blank'); // Open a new window with coffee info
});

// Initialize an empty cart
let cart = [];

// Function to add item to cart
function addToCart(productId) {
    let productElement = document.querySelector(`.box[data-product-id="${productId}"]`);
    if (productElement) {
        let name = productElement.querySelector('h3').textContent;
        let price = parseFloat(productElement.querySelector('.content span').textContent.slice(1)); // Remove $ sign

        let existingItem = cart.find(item => item.id === productId);
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push({ id: productId, name, price, quantity: 1 });
        }
        alert(`${name} has been added to the cart!`);
        updateCartDisplay();
    } else {
        console.error('Product not found');
    }
}

// Update cart display
function updateCartDisplay() {
    let cartCount = document.querySelector('.cart-count');
    if (cartCount) {
        cartCount.textContent = cart.reduce((sum, item) => sum + item.quantity, 0);
    }
}

// Event listeners for adding products to cart
document.querySelectorAll('.add-to-cart').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        let productId = this.getAttribute('data-product-id');
        addToCart(productId);
    });
});

// Display cart count on the cart icon in the header
let cartIcon = document.querySelector('.header-icon .bx-cart-alt');
if (cartIcon) {
    let cartCount = document.createElement('span');
    cartCount.className = 'cart-count';
    cartCount.textContent = '0';
    cartIcon.parentElement.appendChild(cartCount);
}



// Optionally, if you want the cart icon to show cart contents:
cartIcon.addEventListener('click', () => {
    console.log('Cart Contents:', cart);
    // Here you would typically open a modal or overlay to show cart contents
});

// Sample product data with capitalized names
const products = [
    { id: 1, name: "Latte", price: 9 },
    { id: 2, name: "Cappuccino", price: 7 },
    { id: 3, name: "Irish", price: 5 },
    { id: 4, name: "Caramel Frappe", price: 10 },
    { id: 5, name: "Iced Latte", price: 8 },
    { id: 6, name: "Glace", price: 10 }
];

// Select elements
const searchIcon = document.querySelector('#search-icon');
const searchBox = document.querySelector('.search-box');
const searchInput = document.querySelector('#search-input');

// Function to toggle the visibility of the search box
function toggleSearchBox() {
    searchBox.classList.toggle('active');
    if (searchBox.classList.contains('active')) {
        searchInput.focus(); // Focus on the input when the search box is shown
    }
}

// Function to search for products
function searchProducts(term) {
    term = term.toLowerCase();
    // Convert product name to title case for comparison
    return products.filter(product => 
        product.name.toLowerCase().includes(term)
    );
}

// Event listener for clicking the search icon
searchIcon.addEventListener('click', function(event) {
    event.stopPropagation(); // Prevent the click event from bubbling up
    if (searchBox.classList.contains('active')) {
        const searchTerm = searchInput.value.trim();
        console.log('Search term:', searchTerm); // For debugging
        const results = searchProducts(searchTerm);
        console.log('Search results:', results); // For debugging
        if (results.length > 0) {
            console.log('Found products:', results);
            alert(`Found ${results.length} matching product(s). Redirecting...`);
            // Scroll to products section
            document.querySelector('#products').scrollIntoView({ behavior: 'smooth' });
        } else {
            alert('No matching products found.');
        }
        // Close search box after search is performed
        searchBox.classList.remove('active');
    } else {
        // If the search box isn't active, show it
        toggleSearchBox();
    }
});

// Close the search box when clicking outside of it
document.addEventListener('click', function(event) {
    if (!searchBox.contains(event.target) && !searchIcon.contains(event.target)) {
        searchBox.classList.remove('active');
    }
});

// Handle Enter key press on the search input to mimic search icon click
searchInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        searchIcon.click(); // Simulate clicking the search icon
    }
});







let header=document.querySelector('header');

window.addEventListener('scroll' , ()=>{
    header.classList.toggle('shadow', window.scrollY > 0);
}); 
 