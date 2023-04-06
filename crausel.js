var swiper = new Swiper(".mySwiper", {
  slidesPerView: 4,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 1000,
  },
  breakpoints: {
    1804: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
    1100: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    786: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    300: {
      slidesPerView: 1,
      spaceBetween: 20,
    }
  },
});

let slidee = document.querySelectorAll(".swiper-slide");
let productList = document.querySelector("#product-list-3");

// fetch JSON data
fetch("data.json")
  .then((response) => response.json())
  .then((data) => {
      for (let i = 0; i < slidee.length && i < data.products.length; i++) {
        const product = data.products[i];
      
        // Update the swiper slide with the product image
        slidee[i].innerHTML = ` <div class="card m-4" style="width:323px">
        <img src="${product.image_url}" class="card-img-top" width="100%" height="300px">
        <button type="button" class="btn btn-info btn-block mb-1">${product.category}</button>
      </div>
    `;
      
        // Create a new HTML element for each product and add it to the product list
        const productElement = document.createElement("div");
      
        
        productList.appendChild(productElement);
      }
  });
  var swiper2 = new Swiper(".mySwiper2", {
    slidesPerView: 4,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination2",
      clickable: true,
    },
    autoplay: {
      delay: 100000,
    },
    breakpoints: {
      1804: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
      1100: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      786: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      576: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      300: {
        slidesPerView: 1,
        spaceBetween: 20,
      }
    },
  });
  
  let slidee2 = document.querySelectorAll(".swiper-slide2");
  let productList2 = document.querySelector("#product-list");
  
  // fetch JSON data
  fetch("productData.json")
    .then((response) => response.json())
    .then((data) => {
      let trending = `<span class="position-absolute top-10 start-100 translate-middle badge2 badge-info">hot</span>`;
      for (let i = 0; i < slidee2.length && i < data.products.length; i++) {
        const product = data.products[i];
  
        // Update the swiper slide with the product image
        slidee2[i].innerHTML = `
        <a href="details.html?id=${product.id}">
        <div class=" card m-4" style="width:323px">
     <div class="badge-overlay">
         <span class="top-left badge"> ${product.sale}</span>
     </div>
     <span
         class="position-absolute top-10 start-100 translate-middle badge1  badge-danger">
         -${product.tag}%
     </span>

     ${product.trending ? trending :""}

     <img src=${product.image} class="card-img-top" width="100%" height="300px">
     <div class="card-body pt-0 px-0">
         <div class="d-flex flex-row justify-content-between p-3 mid">
             <a class="d-flex flex-column text-muted mb-1">
                 ${product.category}
             </a>
             <p class="d-flex flex-column text-muted mb-2"> ${product.brand}
             </p>
         </div>
         <div class ="left-name">
         <strong> ${product.name}</strong>
         <p> $${product.price}&nbsp; &nbsp;&nbsp;&nbsp;<s>$${product.preprice}</s></p></div>
         <div class=" add mx-3 mt-3 d-block">
             <input type="number" class="quantity__input" value="1">
             
             <button type="button" onclick="getProductData(event, ${product.id},'cart')" class="btn btn-danger btn-block mb-1">ADD TO CART</button>
            
                     
                     &nbsp; &nbsp; &nbsp;
             <i class="fa-regular fa-heart mb-2" onclick="getProductData(event,${product.id},'wishlist')"></i> &nbsp; &nbsp;
             <i class="fa-solid  fa-arrow-right-arrow-left"></i>
             <div id="showcart-${product.id}" style="color:red;display:none">item succesfully added to the cart</div>
          </div>
           <div class="d-flex flex-row justify-content-between p-3 mid">
             <p class="d-flex flex-column mb-1">
                 <i class="fa-solid fa-dollar" style="color: lightgreen;"></i>Buy Now
             </p>
             <p class="d-flex flex-column mb-2"><i class="fa-solid fa-question"
                     style="color: red;"></i>Question
             </p>
         </div>
     </div>
 </div>
 </a>
   `;
      }
    });
  