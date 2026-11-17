
// ========================================
// CHAI NASTA CORNER - COMPLETE JAVASCRIPT
// ========================================

// FOOD ITEMS
const foodItems = [
  { id: "samosa", name: "Samosa", price: 20, image: "images/food/samosa.jpg", desc: "Crispy potato-filled classic" },
  { id: "pakode", name: "Pakode", price: 30, image: "images/food/pakode.jpg", desc: "Golden crunchy fritters" },
  { id: "burger", name: "Veg Burger", price: 60, image: "images/food/burger.jpg", desc: "Loaded with fresh veggies" },
  { id: "kachori", name: "Kachori", price: 25, image: "images/food/kachori.jpg", desc: "Flaky and flavourful" },
  { id: "sandwich", name: "Sandwich", price: 50, image: "images/food/sandwich.jpg", desc: "Fresh grilled sandwich" }
];

// TEA AND COFFEE ITEMS
const drinkItems = [
  { id: "regular-chai", name: "Regular Chai", price: 15, image: "images/drink/Regular Chai.jpg", desc: "Classic Indian milk tea" },
  { id: "masala-chai", name: "Masala Chai", price: 20, image: "images/drink/Masala Chai.jpg", desc: "Aromatic spice blend" },
  { id: "ginger-chai", name: "Ginger Chai", price: 20, image: "images/drink/Ginger Chai.jpg", desc: "Fresh ginger kick" },
  { id: "elaichi-chai", name: "Elaichi Chai", price: 20, image: "images/drink/Elaichi Chai.jpg", desc: "Cardamom infused" },
  { id: "lemon-tea", name: "Lemon Tea", price: 20, image: "images/drink/Lemon Tea.jpg", desc: "Light and refreshing" },
  { id: "black-coffee", name: "Black Coffee", price: 25, image: "images/drink/Black Coffee.jpg", desc: "Bold coffee, no milk" },
  { id: "hot-coffee", name: "Hot Coffee", price: 30, image: "images/drink/Hot Coffee.jpg", desc: "Rich and creamy" },
  { id: "cold-coffee", name: "Cold Coffee", price: 50, image: "images/drink/Cold Coffee.jpg", desc: "Chilled coffee delight" },
  { id: "filter-coffee", name: "Filter Coffee", price: 35, image: "images/drink/Filter Coffee.jpg", desc: "South Indian style" },
  { id: "cappuccino", name: "Cappuccino", price: 60, image: "images/drink/Cappuccino.jpg", desc: "Foamy coffee favourite" }
];

// BISCUIT ITEMS
const biscuitNames = [
  "Parle G", "Good Day", "Marie Gold", "Oreo", "Hide & Seek",
  "Bourbon", "Jim Jam", "Monaco", "KrackJack", "50-50",
  "Milk Bikis", "Little Hearts", "Dark Fantasy", "Treat",
  "Nice Time", "Digestive", "Butter Cookies", "Coconut Cookies",
  "Jeera Biscuits", "Salted Biscuits"
];

const biscuitImages = [
  "Parle-G.jpg", "Good Day.jpg", "Marie Gold.jpg", "Oreo.jpg",
  "Hide & Seek.jpg", "Bourbon.jpg", "Jim Jam.jpg", "Monaco.jpg",
  "KrackJack.jpg", "50-50.jpg", "Milk Bikis.jpg", "Little Hearts.jpg",
  "Dark Fantasy.jpg", "Treat.jpg", "Nice Time.jpg", "Digestive.jpg",
  "Butter Cookies.jpg", "Coconut Cookies.jpg", "Jeera Biscuits.jpg",
  "Salted Biscuits.jpg"
];

const biscuitSizes = {
  Small: 20,
  Medium: 40,
  Large: 70
};

const biscuitItems = biscuitNames.map((name, index) => ({
  id: "biscuit-" + index,
  name: name,
  image: "images/biscuit/" + biscuitImages[index],
  desc: "Crunchy and delicious biscuit",
  sizes: biscuitSizes
}));

// NAMKEEN ITEMS
const namkeenNames = [
  "Aloo Bhujia", "Plain Bhujia", "Nylon Sev", "Ratlam Sev",
  "Tikha Mixture", "Navratan Mixture", "Khatta Meetha",
  "Moong Dal", "Chana Dal", "Masala Peanuts", "Boondi",
  "Masala Boondi", "Cornflakes Mixture", "Chivda",
  "Poha Chivda", "Bikaneri Bhujia", "Dal Moth",
  "Punjabi Tadka", "Masala Fryums"
];

const namkeenImages = [
  "Aloo Bhujia.jpg", "Plain Bhujia.jpg", "Nylon Sev.jpg",
  "Ratlam Sev.jpg", "Tikha Mixture.jpg", "Navratan Mixture.jpg",
  "Khatta Meetha.jpg", "Moong Dal.jpg", "Chana Dal.jpg",
  "Masala Peanuts.jpg", "Boondi.jpg", "Masala Boondi.jpg",
  "Cornflakes Mixture.jpg", "Chivda.jpg", "Poha Chivda.jpg",
  "Bikaneri Bhujia.jpg", "Dal Moth.jpg", "Punjabi Tadka.jpg",
  "Masala Fryums.jpg"
];

const namkeenSizes = {
  Small: 30,
  Medium: 50,
  Large: 80
};

const namkeenItems = namkeenNames.map((name, index) => ({
  id: "namkeen-" + index,
  name: name,
  image: "images/namkeen/" + namkeenImages[index],
  desc: "Tasty and crunchy Indian namkeen",
  sizes: namkeenSizes
}));

// ALL PRODUCTS
const allItems = [
  ...foodItems,
  ...drinkItems,
  ...biscuitItems,
  ...namkeenItems
];

// CART DATA
let cart = [];

// BOOTSTRAP ELEMENTS
const cartCanvasElement = document.getElementById("cartCanvas");
const checkoutModalElement = document.getElementById("checkoutModal");
const successModalElement = document.getElementById("successModal");
const toastElement = document.getElementById("appToast");

const checkoutModal = new bootstrap.Modal(checkoutModalElement);
const successModal = new bootstrap.Modal(successModalElement);
const appToast = new bootstrap.Toast(toastElement);

// ========================================
// PRODUCT CARD
// ========================================

function createProductCard(item) {
  const hasSizes = Boolean(item.sizes);
  const defaultPrice = hasSizes
    ? Object.values(item.sizes)[0]
    : item.price;

  const sizeOptions = hasSizes
    ? `
      <select class="size-select" id="size-${item.id}">
        ${Object.entries(item.sizes).map(([size, price]) =>
          `<option value="${size}">${size} Pack - ₹${price}</option>`
        ).join("")}
      </select>
    `
    : "";

  return `
    <div class="col-6 col-md-4 col-lg-3">
      <div class="product-card">
        <div class="product-visual">
          <img
            src="${item.image}"
            alt="${item.name}"
            class="product-photo"
            loading="lazy"
            onerror="this.style.display='none'; this.parentElement.innerHTML='<i class=&quot;bi bi-image product-placeholder&quot;></i>';"
          >
        </div>

        <div class="product-info">
          <h5>${item.name}</h5>
          <p>${item.desc}</p>

          ${sizeOptions}

          <div class="product-actions">
            <span class="product-price" id="price-${item.id}">
              ₹${defaultPrice}
            </span>

            <button
              class="add-btn add-to-cart"
              data-id="${item.id}"
              type="button"
            >
              <i class="bi bi-cart-plus"></i> Add
            </button>
          </div>
        </div>
      </div>
    </div>
  `;
}

// ========================================
// DISPLAY PRODUCTS
// ========================================

function renderProducts(items, containerId) {
  const container = document.getElementById(containerId);

  if (!items.length) {
    container.innerHTML = `
      <div class="col-12">
        <div class="no-results">
          <i class="bi bi-search fs-1"></i>
          <h5 class="mt-3">No products found</h5>
        </div>
      </div>
    `;
    return;
  }

  container.innerHTML = items.map(createProductCard).join("");
}

function renderAllProducts() {
  renderProducts(foodItems, "foodGrid");
  renderProducts(drinkItems, "drinksGrid");
  renderProducts(biscuitItems, "biscuitGrid");
  renderProducts(namkeenItems, "namkeenGrid");
}

// ========================================
// TOAST MESSAGE
// ========================================

function showToast(message) {
  document.getElementById("toastMessage").textContent = message;
  appToast.show();
}

// ========================================
// FIND PRODUCT
// ========================================

function findProduct(productId) {
  return allItems.find(item => item.id === productId);
}

// ========================================
// ADD PRODUCT TO CART
// ========================================

function addToCart(productId) {
  const product = findProduct(productId);

  if (!product) return;

  let selectedSize = "";
  let price = product.price;

  if (product.sizes) {
    const sizeSelect = document.getElementById("size-" + productId);

    if (!sizeSelect) return;

    selectedSize = sizeSelect.value;
    price = product.sizes[selectedSize];
  }

  const cartKey = selectedSize
    ? productId + "-" + selectedSize
    : productId;

  const existingItem = cart.find(item => item.cartKey === cartKey);

  if (existingItem) {
    existingItem.quantity++;
  } else {
    cart.push({
      cartKey: cartKey,
      id: product.id,
      name: product.name,
      image: product.image,
      price: price,
      size: selectedSize,
      quantity: 1
    });
  }

  updateCart();
  showToast(product.name + " added to cart!");
}

// ========================================
// CART QUANTITY AND TOTAL
// ========================================

function updateCart() {
  const cartItemsContainer = document.getElementById("cartItems");

  const totalQuantity = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  document.getElementById("cartCount").textContent = totalQuantity;
  document.getElementById("cartSubtotal").textContent = "₹" + subtotal;
  document.getElementById("cartTotal").textContent = "₹" + subtotal;
  document.getElementById("checkoutTotal").textContent = "₹" + subtotal;

  if (cart.length === 0) {
    cartItemsContainer.innerHTML = `
      <div class="text-center py-5">
        <i class="bi bi-cart-x fs-1 text-secondary"></i>
        <h5 class="mt-3">Your cart is empty</h5>
        <p class="text-muted">Add some delicious products!</p>
      </div>
    `;
  } else {
    cartItemsContainer.innerHTML = cart.map(item => `
      <div class="cart-item">
        <img
          src="${item.image}"
          alt="${item.name}"
          onerror="this.style.display='none'"
        >

        <div class="cart-item-details">
          <h6>${item.name}</h6>
          ${item.size ? `<small>${item.size} Pack</small><br>` : ""}
          <strong>₹${item.price * item.quantity}</strong>

          <div class="quantity-controls">
            <button
              type="button"
              class="quantity-btn"
              data-key="${item.cartKey}"
              data-change="-1"
            >−</button>

            <span>${item.quantity}</span>

            <button
              type="button"
              class="quantity-btn"
              data-key="${item.cartKey}"
              data-change="1"
            >+</button>

            <button
              type="button"
              class="remove-btn"
              data-key="${item.cartKey}"
            >
              <i class="bi bi-trash"></i> Remove
            </button>
          </div>
        </div>
      </div>
    `).join("");
  }
}

// ========================================
// CHANGE QUANTITY
// ========================================

function changeQuantity(cartKey, change) {
  const item = cart.find(product => product.cartKey === cartKey);

  if (!item) return;

  item.quantity += change;

  if (item.quantity <= 0) {
    cart = cart.filter(product => product.cartKey !== cartKey);
  }

  updateCart();
}

// ========================================
// REMOVE CART ITEM
// ========================================

function removeCartItem(cartKey) {
  cart = cart.filter(item => item.cartKey !== cartKey);
  updateCart();
  showToast("Product removed from cart.");
}

// ========================================
// SEARCH PRODUCTS
// ========================================

function searchProducts() {
  const searchValue = document
    .getElementById("searchInput")
    .value
    .trim()
    .toLowerCase();

  const filteredFood = foodItems.filter(item =>
    item.name.toLowerCase().includes(searchValue)
  );

  const filteredDrinks = drinkItems.filter(item =>
    item.name.toLowerCase().includes(searchValue)
  );

  const filteredBiscuits = biscuitItems.filter(item =>
    item.name.toLowerCase().includes(searchValue)
  );

  const filteredNamkeen = namkeenItems.filter(item =>
    item.name.toLowerCase().includes(searchValue)
  );

  renderProducts(filteredFood, "foodGrid");
  renderProducts(filteredDrinks, "drinksGrid");
  renderProducts(filteredBiscuits, "biscuitGrid");
  renderProducts(filteredNamkeen, "namkeenGrid");

  const resultCount =
    filteredFood.length +
    filteredDrinks.length +
    filteredBiscuits.length +
    filteredNamkeen.length;

  const message = document.getElementById("searchMessage");

  message.textContent = searchValue
    ? resultCount + " product(s) found"
    : "";
}

// ========================================
// CLEAR SEARCH
// ========================================

function clearSearch() {
  document.getElementById("searchInput").value = "";
  document.getElementById("searchMessage").textContent = "";
  renderAllProducts();
}

// ========================================
// CHECKOUT
// ========================================

function openCheckout() {
  if (cart.length === 0) {
    showToast("Your cart is empty. Add products first.");
    return;
  }

  const cartCanvas = bootstrap.Offcanvas.getInstance(cartCanvasElement);

  if (cartCanvas) {
    cartCanvas.hide();
  }

  document.getElementById("checkoutTotal").textContent =
    "₹" + cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  checkoutModal.show();
}

// ========================================
// PLACE ORDER
// ========================================

function placeOrder(event) {
  event.preventDefault();

  if (cart.length === 0) {
    showToast("Your cart is empty.");
    checkoutModal.hide();
    return;
  }

  const customerName = document.getElementById("customerName").value.trim();
  const customerPhone = document.getElementById("customerPhone").value.trim();
  const customerAddress = document.getElementById("customerAddress").value.trim();
  const paymentMethod = document.getElementById("paymentMethod").value;

  if (!customerName || !customerPhone || !customerAddress) {
    showToast("Please fill in all customer details.");
    return;
  }

  if (!/^[0-9]{10}$/.test(customerPhone)) {
    showToast("Please enter a valid 10-digit mobile number.");
    return;
  }

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const orderNumber = "CNC" + Date.now().toString().slice(-8);

  document.getElementById("orderId").textContent = orderNumber;

  document.getElementById("successMessage").textContent =
    "Thank you, " + customerName +
    "! Your order of ₹" + total +
    " has been placed using " + paymentMethod + ".";

  // Demo only: this order is not sent to a server.
  console.log("Demo Order:", {
    orderNumber,
    customerName,
    customerPhone,
    customerAddress,
    paymentMethod,
    products: cart,
    total
  });

  cart = [];
  updateCart();
  document.getElementById("checkoutForm").reset();

  checkoutModal.hide();

  setTimeout(() => {
    successModal.show();
  }, 400);
}

// ========================================
// EVENT LISTENERS
// ========================================

// Add to cart buttons
document.addEventListener("click", function(event) {
  const addButton = event.target.closest(".add-to-cart");

  if (addButton) {
    addToCart(addButton.dataset.id);
  }
});

// Cart quantity buttons
document.addEventListener("click", function(event) {
  const quantityButton = event.target.closest(".quantity-btn");

  if (quantityButton) {
    changeQuantity(
      quantityButton.dataset.key,
      Number(quantityButton.dataset.change)
    );
  }
});

// Remove buttons
document.addEventListener("click", function(event) {
  const removeButton = event.target.closest(".remove-btn");

  if (removeButton) {
    removeCartItem(removeButton.dataset.key);
  }
});

// Search
document.getElementById("searchInput").addEventListener(
  "input",
  searchProducts
);

// Clear search
document.getElementById("clearSearch").addEventListener(
  "click",
  clearSearch
);

// Checkout button
document.getElementById("checkoutBtn").addEventListener(
  "click",
  openCheckout
);

// Checkout form
document.getElementById("checkoutForm").addEventListener(
  "submit",
  placeOrder
);

// Current year
document.getElementById("currentYear").textContent =
  new Date().getFullYear();

// ========================================
// INITIALIZE WEBSITE
// ========================================

renderAllProducts();
updateCart();
