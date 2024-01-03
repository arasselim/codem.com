
document.addEventListener("DOMContentLoaded", function () {
    // Add hover effect to profile image
    const profileImage = document.getElementById("profile-image");
    profileImage.addEventListener("mouseover", function () {
        profileImage.style.transform = "scale(1.1)";
    });
    profileImage.addEventListener("mouseout", function () {
        profileImage.style.transform = "scale(1)";
    });

    // Change color on hover for social media links
    const socialIcons = document.querySelectorAll(".social-icons a");
    socialIcons.forEach(icon => {
        icon.addEventListener("mouseover", function () {
            icon.style.color = "#3498db";
        });
        icon.addEventListener("mouseout", function () {
            icon.style.color = "#2c3e50";
        });
    });
});


