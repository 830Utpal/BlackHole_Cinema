// Ensure GSAP is included in your HTML before this script

document.addEventListener("DOMContentLoaded", function () {
    let nextDom = document.getElementById("next");
    let prevDom = document.getElementById("prev");

    let carouselDom = document.querySelector(".carousel");
    let SliderDom = carouselDom.querySelector(".carousel .list");
    let thumbnailBorderDom = document.querySelector(".carousel .thumbnail");
    let timeDom = document.querySelector(".carousel .time");

    let timeRunning = 2000;
    let runTimeOut;

    nextDom.onclick = function () {
        showSlider("next");
    };

    prevDom.onclick = function () {
        showSlider("prev");
    };

    function showSlider(type) {
        let SliderItemsDom = SliderDom.querySelectorAll(".carousel .list .item");
        let thumbnailItemsDom = document.querySelectorAll(".carousel .thumbnail .item");

        if (type === "next") {
            gsap.to(SliderItemsDom[0], {
                opacity: 0,
                scale: 0.8,
                duration: 0.6,
                ease: "power2.inOut",
                onComplete: function () {
                    SliderDom.appendChild(SliderItemsDom[0]);
                    gsap.set(SliderItemsDom[0], { opacity: 1, scale: 1 });
                }
            });
            gsap.to(thumbnailItemsDom[0], {
                opacity: 0,
                x: 50,
                duration: 0.5,
                ease: "power2.out",
                onComplete: function () {
                    thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
                    gsap.set(thumbnailItemsDom[0], { opacity: 1, x: 0 });
                }
            });
            carouselDom.classList.add("next");
        } else {
            gsap.to(SliderItemsDom[SliderItemsDom.length - 1], {
                opacity: 0,
                scale: 0.8,
                duration: 0.6,
                ease: "power2.inOut",
                onComplete: function () {
                    SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
                    gsap.set(SliderItemsDom[0], { opacity: 1, scale: 1 });
                }
            });
            gsap.to(thumbnailItemsDom[thumbnailItemsDom.length - 1], {
                opacity: 0,
                x: -50,
                duration: 0.5,
                ease: "power2.out",
                onComplete: function () {
                    thumbnailBorderDom.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
                    gsap.set(thumbnailItemsDom[0], { opacity: 1, x: 0 });
                }
            });
            carouselDom.classList.add("prev");
        }

        clearTimeout(runTimeOut);
        runTimeOut = setTimeout(() => {
            carouselDom.classList.remove("next");
            carouselDom.classList.remove("prev");
        }, timeRunning);
    }
});

function toggleSidebar() {
    const sidebar = document.querySelector(".sidebar");
    if (sidebar.style.left === "0px") {
        sidebar.style.left = "-250px"; // Hide Sidebar
    } else {
        sidebar.style.left = "0px"; // Show Sidebar
    }
}
