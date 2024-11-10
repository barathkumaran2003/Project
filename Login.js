    // Open the login modal
    function openLoginModal() {
        document.getElementById("loginModal").style.display = "block";
    }
    
    // Close the login modal
    function closeLoginModal() {
        document.getElementById("loginModal").style.display = "none";
    }
    
    // Close modal when clicking outside the modal content
    window.onclick = function(event) {
        const modal = document.getElementById("loginModal");
        if (event.target == modal) {
            modal.style.display = "none";
        }
    };