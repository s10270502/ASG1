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
                    // Fade in the next carousel item
                    item.classList.remove("fadeOut"); // Remove any existing fade-out class
                    item.style.display = "flex"; // Ensure the item is visible
                    item.classList.add("fadeIn", "active"); // Trigger fade-in animation
                } else if (item.classList.contains("active")) {
                    // Fade out the current active item
                    item.classList.remove("fadeIn"); // Remove any existing fade-in class
                    item.classList.add("fadeOut"); // Trigger fade-out animation
                    setTimeout(() => {
                        item.classList.remove("active", "fadeOut"); // Clean up classes
                        item.style.display = "none"; // Hide the item after animation
                    }, 1000); // Match the duration of the fadeOut animation
                } else {
                    // Ensure all other items are hidden
                    item.style.display = "none";
                    item.classList.remove("fadeIn", "fadeOut", "active");
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


    // VIDEO START
    const videoSection = document.getElementById("videoSection");
    const youtubePlayer = document.getElementById("youtubePlayer");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                // Add autoplay to the iframe's src when the section is in view
                const src = youtubePlayer.getAttribute("src");
                if (!src.includes("autoplay=1")) {
                    youtubePlayer.setAttribute("src", src.replace("autoplay=0", "autoplay=1"));
                }
            }
        });
    }, {
        threshold: 0.5 // Trigger when 50% of the video section is visible
    });
    observer.observe(videoSection);
    // VIDEO END


    // COUNTER ANIMATION START

    const counters = document.querySelectorAll(".counter");
    const animationDuration = 10000; // Total duration of the animation
    const frameRate = 10; // Interval to update counter

    counters.forEach((counter) => {
        const target = +counter.getAttribute("data-target"); // Get target number
        const totalFrames = animationDuration / frameRate;
        const increment = target / totalFrames;

        let current = 0; // Initialize counter value

        const updateCounter = () => {
            current += increment;

            if (current < target) {
                counter.innerText = Math.ceil(current); // Update counter
                setTimeout(updateCounter, frameRate);
            } else {
                counter.innerText = target;
            }
        };

        updateCounter(); // Start the counter animation
    });

    // COUNTER ANIMATION END
    
});
