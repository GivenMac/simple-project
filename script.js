// script.js

// Function to simulate adding products to a cart
const buttons = document.querySelectorAll('.product button');
buttons.forEach(button => {
    button.addEventListener('click', () => {
        alert('Product added to cart!');
    });
});

// Filter products by category and search
function filterProducts() {
    const searchBar = document.getElementById("searchBar").value.toLowerCase();
    const categoryFilter = document.getElementById("categoryFilter").value;
    const products = document.getElementsByClassName("product");

    for (let product of products) {
        const title = product.getElementsByTagName("h3")[0].textContent.toLowerCase();
        const category = product.getAttribute("data-category");

        const matchesSearch = title.includes(searchBar);
        const matchesCategory = categoryFilter === "all" || category === categoryFilter;

        if (matchesSearch && matchesCategory) {
            product.style.display = "block";
        } else {
            product.style.display = "none";
        }
    }
}

// Sort products by price
function sortProducts() {
    const productList = document.getElementById("productList");
    const products = Array.from(productList.getElementsByClassName("product"));
    const sortPrice = document.getElementById("sortPrice").value;

    products.sort((a, b) => {
        const priceA = parseFloat(a.getAttribute("data-price"));
        const priceB = parseFloat(b.getAttribute("data-price"));

        if (sortPrice === "low-to-high") {
            return priceA - priceB;
        } else if (sortPrice === "high-to-low") {
            return priceB - priceA;
        } else {
            return 0;
        }
    });

    for (let product of products) {
        productList.appendChild(product);
    }
}

// Page loading effect
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// Implementing hover effect for product cards
const products = document.querySelectorAll('.product');
products.forEach(product => {
    product.addEventListener('mouseover', () => {
        product.style.transform = 'scale(1.05)';
    });

    product.addEventListener('mouseout', () => {
        product.style.transform = 'scale(1)';
    });
});

// Implement responsive design adjustments
window.addEventListener('resize', () => {
    const width = window.innerWidth;
    if (width < 768) {
        document.querySelector('.product-list').style.flexDirection = 'column';
    } else {
        document.querySelector('.product-list').style.flexDirection = 'row';
    }
});

// Bootstrap Carousel: Initialize the carousel and set the interval
//$('.carousel').carousel({
 //   interval: 3000, // Slide every 3 seconds
 //   pause: "hover" // Pause the carousel when hovered
//});

// Modal for viewing individual product images
//const productImages = document.querySelectorAll('.product-image');
//productImages.forEach(image => {
 //   image.addEventListener('click', () => {
  //      const modalImage = document.getElementById('modalImage');
  //      modalImage.src = image.src;
        $('#productModal').modal('show');
 //   });
//});
