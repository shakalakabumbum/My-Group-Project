document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll('.fade-in, .slide-up, .zoom-in'); // Elements with animations

    let isScrolling = false;

    // Function to check if the element is in the viewport
    function checkVisibility() {
        const windowHeight = window.innerHeight;

        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementBottom = element.getBoundingClientRect().bottom;

            if (elementTop <= windowHeight && elementBottom >= 0) {
                element.classList.add('visible'); // Trigger animation when visible
            } else {
                element.classList.remove('visible'); // Remove animation if not visible
            }
        });
    }

    // Detect scroll event to trigger visibility check
    window.addEventListener('scroll', function () {
        if (!isScrolling) {
            requestAnimationFrame(function () {
                checkVisibility();
                isScrolling = false;
            });
            isScrolling = true;
        }
    });

    // Initial visibility check when page loads
    checkVisibility();

    // Recheck visibility when the window is resized
    window.addEventListener('resize', checkVisibility);
});
