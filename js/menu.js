$(document).ready(function () {
    // Carousel Functionality (Existing Code)
    $(".carousel-container").each(function () {
        const carousel = $(this).find(".carousel-images");
        const items = $(this).find(".carousel-item");
        const dotsContainer = $(this).find(".carousel-dots");
        const totalItems = items.length;
        let index = 0;

        function updateCarousel() {
            const offset = -(index * 100) + "%";
            carousel.css("transform", `translateX(${offset})`);
            dotsContainer.find("button").removeClass("active");
            dotsContainer.find(`button:eq(${index})`).addClass("active");
        }

        for (let i = 0; i < totalItems; i++) {
            dotsContainer.append("<button></button>");
        }
        dotsContainer.find("button:first").addClass("active");

        dotsContainer.find("button").click(function () {
            index = $(this).index();
            updateCarousel();
        });

        $(this).find(".carousel-button.next").click(function () {
            index = (index + 1) % totalItems;
            updateCarousel();
        });

        $(this).find(".carousel-button.prev").click(function () {
            index = (index - 1 + totalItems) % totalItems;
            updateCarousel();
        });
    });

    // Hamburger Menu Functionality
    document.addEventListener("DOMContentLoaded", function () {
        const hamburger = document.querySelector(".hamburger");
        const menu = document.querySelector(".menu");
    
        hamburger.addEventListener("click", function () {
            menu.classList.toggle("active");
        });
    });
    
});
