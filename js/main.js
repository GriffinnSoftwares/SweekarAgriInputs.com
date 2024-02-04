(function ($) {
  "use strict";

  // Spinner
  var spinner = function () {
    setTimeout(function () {
      if ($("#spinner").length > 0) {
        $("#spinner").removeClass("show");
      }
    }, 0);
  };
  spinner();
  var imageLoad = function () {
    setTimeout(function () {
      document.getElementById("allseeds").click();
    }, 500);
    setTimeout(function () {
      document.getElementById("allseeds").click();
    }, 600);
  };
  imageLoad();
  // Initiate the wowjs
  new WOW().init();

  // Sticky Navbar
  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      $(".sticky-top").addClass("shadow-sm").css("top", "0px");
    } else {
      $(".sticky-top").removeClass("shadow-sm").css("top", "-100px");
    }
  });

  // Back to top button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      $(".back-to-top").fadeIn("slow");
    } else {
      $(".back-to-top").fadeOut("slow");
    }
  });
  $(".back-to-top").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 50, "easeInOutExpo");
    return false;
  });

  // Facts counter
  $('[data-toggle="counter-up"]').counterUp({
    delay: 10,
    time: 2000,
  });

  // Portfolio isotope and filter
  var portfolioIsotope = $(".portfolio-container").isotope({
    itemSelector: ".portfolio-item",
    layoutMode: "fitRows",
  });
  $("#portfolio-flters li").on("click", function () {
    $("#portfolio-flters li").removeClass("active");
    $(this).addClass("active");

    portfolioIsotope.isotope({ filter: $(this).data("filter") });
  });

  // Testimonials carousel
  $(".testimonial-carousel").owlCarousel({
    autoplay: true,
    smartSpeed: 1000,
    items: 1,
    dots: false,
    loop: true,
    nav: true,
    navText: [
      '<i class="bi bi-chevron-left"></i>',
      '<i class="bi bi-chevron-right"></i>',
    ],
  });
})(jQuery);

// let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
// console.log(cartItems);

function addToCart(e) {
  e.preventDefault();
  // document.getElementById("cartCount").innerText = cartItems.length;

  // Get product details
  // const productContainer = e.target.closest(".product-item");
  // const productImage = productContainer.querySelector(".img-fluid").src;
  // const productName =
  //   productContainer.querySelector(".text-center a").innerText;
  // const unit = productContainer.querySelector("span").innerText.split(" ")[1];
  // const variety =
  //   document.getElementsByClassName("tomato")[0].firstElementChild.innerText; // Replace with the actual variety
  // const quantity = parseInt(
  //   productContainer.querySelector(".text-center .text-primary").innerText,
  //   10
  // );

  // // Check if the product is already in the cart
  // const existingProductIndex = cartItems.findIndex(
  //   (item) => item.name === productName && item.variety === variety
  // );

  // if (existingProductIndex !== -1) {
  //   // Product already exists, update the quantity
  //   cartItems[existingProductIndex].quantity += quantity;
  // } else {
  //   // Create an object with product details
  //   const productDetails = {
  //     image: productImage,
  //     name: productName,
  //     quantity: quantity,
  //     variety: variety,
  //     unit: unit,
  //   };

  //   cartItems.push(productDetails);
  // }

  // // Add the product details to the cartItems array
  // saveCartToLocalStorage();

  // // Display a message (you can replace this with your desired functionality)
  // alert(`${productImage} ${productName} (${quantity}) added to cart`);

  // // Update the cart table
  // updateCartTable();
  const productContainer = e.target.closest(".product-item");
  const productName =
    productContainer.querySelector(".text-center a").innerText;

  // Create the WhatsApp link
  const whatsappLink = `https://wa.me/+919740349045?text=I Would like to know about this product, ${productName}`;

  // Open the WhatsApp link in a new tab
  window.open(whatsappLink);
}

// function updateCartTable() {
//   const cartTableBody = document.getElementById("cartTableBody");

//   // Clear existing rows
//   cartTableBody.innerHTML = "";

//   // Iterate through cartItems and add rows to the table
//   cartItems.forEach((item, index) => {
//     const newRow = document.createElement("tr");
//     newRow.className = "table-body-row";
//     newRow.innerHTML = `
//       <td class="product-remove">
//         <a href="#" onclick="removeCartItem(${index})"><i class="far fa-window-close"></i></a>
//       </td>
//       <td class="product-image">
//         <img src="${item.image}" alt="" />
//       </td>
//       <td class="product-price">${item.name}</td>
//       <td class="product-name">${item.variety}</td>
//       <td class="product-quantity">
//         <button onclick="decrementQuantity(${index})">-</button>
//         <input type="number" value="${item.quantity}" step="1"  min="0" data-id="${index}" />
//         <button onclick="incrementQuantity(${index})">+</button>
//       </td>
//       <td class="product-total">${item.quantity}&nbsp;${item.unit}</td>
//     `;
//     cartTableBody.appendChild(newRow);
//   });
// }

// function incrementQuantity(index) {
//   const inputElement = document.querySelector(`[data-id="${index}"]`);
//   const currentQuantity = parseInt(inputElement.value, 10);
//   inputElement.value = currentQuantity + 10;
//   cartItems[index].quantity = currentQuantity + 10;
//   saveCartToLocalStorage();
//   updateCartTable();
// }

// function decrementQuantity(index) {
//   const inputElement = document.querySelector(`[data-id="${index}"]`);
//   const currentQuantity = parseInt(inputElement.value, 10);

//   if (currentQuantity > 0) {
//     inputElement.value = currentQuantity - 10;
//     cartItems[index].quantity = currentQuantity - 10;
//     saveCartToLocalStorage();
//     updateCartTable();
//   }
// }
// // Call updateCartTable initially
// updateCartTable();

// Function to save cart items to local storage
// function saveCartToLocalStorage() {
//   localStorage.setItem("cartItems", JSON.stringify(cartItems));
// }

// // Function to remove a cart item
// function removeCartItem(index) {
//   cartItems.splice(index, 1);
//   updateCartTable();
//   saveCartToLocalStorage();
// }

// function sendCartViaWhatsApp() {
//   // Create a formatted message with cart details
//   let message = `Order Details:%0a`;
//   cartItems.forEach((item, index) => {
//     message += `${index + 1}. ${item.name} - ${item.quantity} ${item.unit}%0a`;
//   });

//   // Add total or any other relevant information if needed
//   // message += `Total: $${calculateTotal()}%0a`;

//   // Replace the following number with the actual WhatsApp number
//   const phoneNumber = "+919740349045";

//   // Create the WhatsApp link
//   const whatsappLink = `https://wa.me/${phoneNumber}?text=${message}`;

//   // Open the WhatsApp link in a new tab
//   window.open(whatsappLink);
// }

function sendMessage() {
  let message = `Hi, I am interested in Products of Sweekar Agri Inputs `;

  const encodedMessage = message;

  const phoneNumber = "+919740349045";

  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  window.open(whatsappLink);
}
// function cartLength() {
//   document.getElementById("cartCount").innerText = cartItems.length;
// }
// cartLength();

function clickVegSeeds() {
  document.getElementById("vegseeds").scrollIntoView(true);
  document.getElementById("vegseeds").click();
  closeHamburgerMenu();
}
function clickFieldCrops() {
  document.getElementById("fieldcrops").scrollIntoView(true);
  document.getElementById("fieldcrops").click();
  closeHamburgerMenu();
}

// window.onload = function () {
//   alert("hk");
//   document.getElementById("allseeds").click();
// };
// document.addEventListener("DOMContentLoaded", function () {
//   alert("hk");
//   document.getElementById("allseeds").click();
// });

function closeHamburgerMenu() {
  const hamburgerMenu = document.getElementById("hamburger");
  hamburgerMenu.click();
}
