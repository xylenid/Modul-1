// Fetch products from backend and display them dynamically
const displayProducts = async () => {
  try {
    const response = await fetch("http://localhost:8383/api/product");
    if (!response.ok) throw new Error("Failed to fetch products");

    const products = await response.json();
    const contentContainer = document.querySelector(".content-container");
    contentContainer.innerHTML = ""; // Clear existing content

    // Loop through products and generate HTML dynamically
    products.forEach((product) => {
      const productCard = document.createElement("div");
      productCard.className = "card";
      productCard.innerHTML = `
        <img src="${product.image_url}" alt="${sanitizeHTML(product.name)}" />
        <div class="card-body">
          <h3>${sanitizeHTML(product.name)}</h3>
          <p>${sanitizeHTML(product.description)}</p>
        </div>
        <div class="card-footer">
          <p>${new Date(product.created_at).toLocaleDateString()}</p>
        </div>
      `;
      contentContainer.appendChild(productCard);
    });
  } catch (error) {
    console.error("Error fetching products:", error);
    const contentContainer = document.querySelector(".content-container");
    contentContainer.innerHTML = `<p class="error-message">Unable to load products. Please try again later.</p>`;
  }
};


// Scroll Animation
const elementsToShow = document.querySelectorAll(
  ".card, .hero-container, .description-container, .what-is-container"
);

const isElementInViewport = (el) => {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};

const loop = () => {
  elementsToShow.forEach((el) => {
    if (isElementInViewport(el)) {
      el.classList.add("visible");
    }
  });
  requestAnimationFrame(loop);
};

loop(); // Start animation loop

// Button Click Event
document.querySelector(".btn").addEventListener("click", () => {
  alert("Terima kasih telah tertarik dengan produk kami!");
});

// Call displayProducts on page load
document.addEventListener("DOMContentLoaded", displayProducts);
