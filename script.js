document.addEventListener("DOMContentLoaded", () => {
    const carouselItems = document.querySelectorAll(".carousel-item");
    const prevArrow = document.getElementById("prevArrow");
    const nextArrow = document.getElementById("nextArrow");
    const hamburger = document.querySelector(".hamburger");
    const mobileMenu = document.querySelector(".mobile-menu");
    const closeBtn = document.querySelector(".close-btn");
    const dropdownBtn = document.querySelector(".clients-dropdown");
    const dropdownMenu = document.querySelector(".clients-dropdown-menu");
    const dropdownOptions = document.querySelectorAll(".clients-dropdown-menu ul li");
    const clientItems = document.querySelectorAll(".client-item");

    let currentIndex = 0;

    // Function to update active carousel item
    const updateCarousel = (index) => {
        carouselItems.forEach((item, i) => {
            if (i === index) {
                item.classList.add("active");
            } else {
                item.classList.remove("active");
            }
        });
    };

    // Event listener for the left arrow button
    prevArrow.addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;
        updateCarousel(currentIndex);
    });

    // Event listener for the right arrow button
    nextArrow.addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % carouselItems.length;
        updateCarousel(currentIndex);
    });

    // Initialize carousel
    updateCarousel(currentIndex);

    // Hamburger menu functionality
    hamburger.addEventListener("click", () => {
        mobileMenu.classList.add("active");
    });

    closeBtn.addEventListener("click", () => {
        mobileMenu.classList.remove("active");
    });

    // Dropdown toggle
    dropdownBtn.addEventListener("click", () => {
        dropdownMenu.classList.toggle("active");
    });

    // Dropdown filter functionality
    dropdownOptions.forEach((option) => {
        option.addEventListener("click", () => {
            const selectedIndustry = option.dataset.industry; // Get selected industry

            // Filter client items
            clientItems.forEach((item) => {
                const industry = item.querySelector("img").alt.split("_")[1]; // Extract industry from alt
                if (selectedIndustry === "All" || industry === selectedIndustry) {
                    item.style.display = "flex"; // Show matching items
                } else {
                    item.style.display = "none"; // Hide non-matching items
                }
            });

            // Collapse dropdown menu
            dropdownMenu.classList.remove("active");
        });
    });
});
