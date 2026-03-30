document.addEventListener("DOMContentLoaded", () => {
  // ---------------- Cart Logic ----------------
  const cartCount = document.getElementById("cart-count");
  const cartItemsList = document.getElementById("cart-items");
  const cartTotal = document.getElementById("cart-total");
  const cartBuyNowBtn = document.getElementById("buy-now");

  const modal = document.getElementById("buy-now-modal");
  const form = document.getElementById("buy-now-form");
  const productInput = document.getElementById("product-name");
  const closeBtn = document.getElementById("closeModalBtn");

  const cart = {};

  function formatPrice(price) {
    return `Npr.${price.toLocaleString("en-IN")}`;
  }

  function updateCartUI() {
    cartItemsList.innerHTML = "";
    const items = Object.keys(cart);
    if (items.length === 0) {
      cartItemsList.innerHTML = "<li>No items in cart.</li>";
      cartCount.textContent = "0";
      cartTotal.textContent = "Total:Npr.0";
      cartBuyNowBtn.disabled = true;
      return;
    }

    let totalPrice = 0;
    let totalQty = 0;

    items.forEach((name) => {
      const item = cart[name];
      totalQty += item.qty;
      totalPrice += item.price * item.qty;

      const li = document.createElement("li");
      li.textContent = `${name} x${item.qty}`;
      const priceSpan = document.createElement("span");
      priceSpan.textContent = formatPrice(item.price * item.qty);
      li.appendChild(priceSpan);
      cartItemsList.appendChild(li);
    });

    cartCount.textContent = totalQty;
    cartTotal.textContent = `Total: ${formatPrice(totalPrice)}`;
    cartBuyNowBtn.disabled = false;
  }

  function addToCart(name, price) {
    if (cart[name]) {
      cart[name].qty++;
    } else {
      cart[name] = { price: price, qty: 1 };
    }
    updateCartUI();
  }

  // ---------------- Product Popup ----------------
  const productCards = document.querySelectorAll(".product-card");

  const popup = document.getElementById("product-popup");
  const popupImage = document.getElementById("popup-image");
  const popupTitle = document.getElementById("popup-title");
  const popupPrice = document.getElementById("popup-price");
  const popupDescription = document.getElementById("popup-description");
  const popupAddToCart = document.getElementById("popup-add-to-cart");
  const popupBuyNow = document.getElementById("popup-buy-now");
  const popupClose = document.querySelector(".popup-close");

  let currentProduct = null;

  const descriptions = {
    "Racing Helmet": "High-quality racing helmet with superior protection and comfort.",
    "Rider Gloves": "Durable gloves with extra grip and breathable material.",
    "Riding Jacket": "Premium jacket with padding and weather resistance.",
    "Engine Oil": "Performance engine oil for smooth rides.",
    "Riding Goggles": "Stylish goggles with UV protection.",
    "Riding Boots": "Heavy-duty boots for safety and comfort.",
    "Tank Bag": "Compact and waterproof tank bag to carry essentials.",
    "Chain Lubricant": "High-quality lubricant for smooth chain operation.",
    "Crash Guard": "Protective crash guard for your bike.",
    "LED Light": "Bright LED headlight for better visibility.",
    "Phone Mount": "Secure mount to keep your phone in view while riding.",
    "Windshield": "Durable windshield to reduce wind resistance.",
    "External LED Headlight": "Extra LED headlight for improved road illumination.",
    "Rear Paddock Stand": "Sturdy stand for maintenance and storage.",
    "Bike Cover": "Waterproof cover to protect your bike from rain and dust."
  };

  productCards.forEach(card => {
  const addBtn = card.querySelector(".add-to-cart");
  const buyBtn = card.querySelector(".buy-now");

  // Card click opens popup
  card.addEventListener("click", (e) => {
    if (e.target === addBtn || e.target === buyBtn) return; // Ignore clicks on buttons

    const img = card.querySelector("img").src;
    const name = card.querySelector("h3").textContent.trim();
    const price = card.querySelector("p").textContent.trim();

    currentProduct = { name, price };

    popupImage.src = img;
    popupTitle.textContent = name;
    popupPrice.textContent = price;
    popupDescription.textContent = descriptions[name] || "No description available.";

    popup.style.display = "flex";
  });

  // Original Add to Cart button
  addBtn.addEventListener("click", (e) => {
    e.stopPropagation(); // Prevent popup
    const name = card.querySelector("h3").textContent.trim();
    const priceText = card.querySelector("p").textContent.trim();
   const price = Number(priceText.replace(/\D/g, "")); // remove all non-digits

    addToCart(name, price);
    alert(`✅ "${name}" added to cart!`);
  });

  // Original Buy Now button
  buyBtn.addEventListener("click", (e) => {
    e.stopPropagation(); // Prevent popup
    const name = card.querySelector("h3").textContent.trim();
    productInput.value = name;
    modal.style.display = "flex";
  });
});


  popupClose.addEventListener("click", () => { popup.style.display = "none"; });
  window.addEventListener("click", (e) => { if (e.target === popup) popup.style.display = "none"; });

 popupAddToCart.addEventListener("click", () => {
  if (currentProduct) {
    // Extract numeric price safely
    let priceNum = Number(currentProduct.price.replace(/\D/g, ""));
    if (isNaN(priceNum)) priceNum = 0;

    addToCart(currentProduct.name, priceNum);
    alert(`✅ "${currentProduct.name}" added to cart!`);
    popup.style.display = "none";
  }
});


  popupBuyNow.addEventListener("click", () => {
    if (currentProduct) {
      productInput.value = currentProduct.name;
      modal.style.display = "flex";
    }
    popup.style.display = "none";
  });

  // ---------------- Cart Buy Now ----------------
  cartBuyNowBtn.addEventListener("click", () => {
    if (cartBuyNowBtn.disabled) return;
    const items = Object.keys(cart);
    if (items.length === 0) {
      alert("Your cart is empty!");
      return;
    }
    const combinedItems = items.map(name => {
      const item = cart[name];
      return `${name} x${item.qty}`;
    }).join(", ");
    productInput.value = combinedItems;
    modal.style.display = "flex";
  });

  // ---------------- Buy Now Form ----------------
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const summary = `
🛍️ Purchase Confirmed!
------------------------
Product(s): ${formData.get("product")}
Name: ${formData.get("name")}
Email: ${formData.get("email")}
Phone: ${formData.get("phone")}
Address: ${formData.get("address")}
Payment: ${formData.get("payment")}

✅ Thank you for your purchase!
    `;
    alert(summary);
    modal.style.display = "none";
    form.reset();

    // Clear cart after purchase
    for (const key in cart) delete cart[key];
    updateCartUI();
  });

  closeBtn.addEventListener("click", () => { modal.style.display = "none"; });
  window.addEventListener("click", (e) => { if (e.target === modal) modal.style.display = "none"; });

  // ---------------- Initialize ----------------
  updateCartUI();
});
