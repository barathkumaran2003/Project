    // Wait until the DOM is fully loaded
    document.addEventListener("DOMContentLoaded", function() {
        const header = document.querySelector(".new");
    
        // Function to toggle the 'scrolled' class based on scroll position
        window.addEventListener("scroll", function() {
            if (window.scrollY > 500) { // Change 50 to desired scroll distance
                header.classList.add("scrolled");
            } else {
                header.classList.remove("scrolled");
            }
        });
    });
    