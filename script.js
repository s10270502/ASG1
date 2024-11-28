document.addEventListener("DOMContentLoaded", () => {
    // Carousel functionality
    const carouselItems = document.querySelectorAll(".carousel-item");
    const prevArrow = document.getElementById("prevArrow");
    const nextArrow = document.getElementById("nextArrow");
    let currentIndex = 0;

    const updateCarousel = (index) => {
        if (carouselItems.length > 0) {
            carouselItems.forEach((item, i) => {
                if (i === index) {
                    item.classList.add("active");
                } else {
                    item.classList.remove("active");
                }
            });
        }
    };

    if (prevArrow && nextArrow) {
        prevArrow.addEventListener("click", () => {
            currentIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;
            updateCarousel(currentIndex);
        });

        nextArrow.addEventListener("click", () => {
            currentIndex = (currentIndex + 1) % carouselItems.length;
            updateCarousel(currentIndex);
        });
    }

    updateCarousel(currentIndex);

    // Hamburger menu functionality
    const hamburger = document.querySelector(".hamburger");
    const mobileMenu = document.querySelector(".mobile-menu");
    const closeBtn = document.querySelector(".close-btn");

    if (hamburger && mobileMenu && closeBtn) {
        hamburger.addEventListener("click", () => {
            mobileMenu.classList.add("active");
        });

        closeBtn.addEventListener("click", () => {
            mobileMenu.classList.remove("active");
        });
    }

    // Dropdown functionality
    const dropdownBtn = document.querySelector(".clients-dropdown");
    const dropdownMenu = document.querySelector(".clients-dropdown-menu");
    const dropdownOptions = document.querySelectorAll(".clients-dropdown-menu ul li");
    const clientItems = document.querySelectorAll(".client-item");

    if (dropdownBtn && dropdownMenu) {
        dropdownBtn.addEventListener("click", () => {
            dropdownMenu.classList.toggle("active");
        });

        if (dropdownOptions.length > 0 && clientItems.length > 0) {
            dropdownOptions.forEach((option) => {
                option.addEventListener("click", () => {
                    const selectedIndustry = option.dataset.industry;

                    clientItems.forEach((item) => {
                        const industry = item.querySelector("img").alt.split("_")[1];
                        if (selectedIndustry === "All" || industry === selectedIndustry) {
                            item.style.display = "flex"; // Show matching items
                        } else {
                            item.style.display = "none"; // Hide non-matching items
                        }
                    });

                    dropdownMenu.classList.remove("active");
                });
            });
        }
    }
});
