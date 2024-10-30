function setActive(element) {
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        item.classList.remove('active');
    });
    element.parentElement.classList.add('active');
}

document.addEventListener("DOMContentLoaded", function() {
    const counters = document.querySelectorAll('.square-counter small');

    counters.forEach(counter => {
        const target = parseInt(counter.textContent, 10);
        let count = 0;

        const updateCounter = () => {
            if (count < target) {
                count++;
                counter.textContent = count.toString().padStart(2, '0');
            } else {
                clearInterval(interval);
            }
        };

        const interval = setInterval(updateCounter, 100);
    });
});

window.addEventListener("load", function() {
    setTimeout(function() {
        document.getElementById("preloader").style.display = "none";
    }, 3000);
});