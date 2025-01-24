document.addEventListener("DOMContentLoaded", () => {
  const mobileMenuToggle = document.getElementById("mobile-menu-toggle");
  const mobileMenu = document.getElementById("mobile-menu");

  if (mobileMenuToggle && mobileMenu) {
    // Toggle mobile menu on button click
    mobileMenuToggle.addEventListener("click", (event) => {
      event.stopPropagation();
      mobileMenu.classList.toggle("hidden");
      mobileMenu.classList.toggle("flex");
    });

    // Close mobile menu when a link is clicked
    mobileMenu.addEventListener("click", (event) => {
      if (event.target.tagName === "A") {
        mobileMenu.classList.add("hidden");
        mobileMenu.classList.remove("flex");
      }
    });

    // Close mobile menu when clicking outside
    document.addEventListener("click", (event) => {
      if (
        !mobileMenu.classList.contains("hidden") &&
        !mobileMenu.contains(event.target) &&
        event.target !== mobileMenuToggle
      ) {
        mobileMenu.classList.add("hidden");
        mobileMenu.classList.remove("flex");
      }
    });
  } else {
    console.error("Mobile menu elements not found!");
  }
});
