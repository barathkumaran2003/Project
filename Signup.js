function openLoginModal1() {
    document.getElementById("loginModal1").style.display = "block";
}

// Close the login modal
function closeLoginModal1() {
    document.getElementById("loginModal1").style.display = "none";
}

// Close modal when clicking outside the modal content
window.onclick = function(event) {
    const modal = document.getElementById("loginModal1");
    if (event.target == modal) {
        modal.style.display = "none";
    }
};