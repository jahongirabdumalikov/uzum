import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs'

const swiper = new Swiper('.swiper', {

    direction: 'horizontal',
    loop: true,

    pagination: {
      el: '.swiper-pagination',
    },
  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    autoplay: {
        delay: 1700, 
      },
  });








  fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    .then(data => {
        const productsGrid = document.getElementById('products-grid');
        data.forEach(product => {
            const productCard = document.createElement('div');
            productCard.classList.add('product-card');

            productCard.innerHTML = `
                <div class="product-image">
                    <img src="${product.image}" alt="${product.title}">
                </div>
                <div class="product-info">
                    <h3>${product.title}</h3>
                    <p>${product.description.substring(0, 100)}...</p>
                    <div class="price">$${product.price}</div>
                    <button class="add-to-cart">Add to Cart</button>
                </div>
            `;
            productsGrid.appendChild(productCard);
        });
    })
    .catch(error => console.error('Error fetching products:', error));