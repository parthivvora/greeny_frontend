// Scroll event for header-part
window.addEventListener("scroll", function () {
    if (window.scrollY > 130) {
        document.querySelector(".header-part").classList.add("active");
    } else {
        // document.querySelector(".header-part").classList.remove("active");
    }
});

// Scroll event for backtop
window.addEventListener("scroll", function () {
    if (window.scrollY > 700) {
        document.querySelector(".backtop").style.display = "block";
    } else {
        // document.querySelector(".backtop").style.display = "none";
    }
});

// Dropdown link click event
document.querySelectorAll(".dropdown-link").forEach(function (link) {
    link.addEventListener("click", function () {
        this.nextElementSibling.toggle();
        this.classList.toggle("active");

        var visibleLists = document.querySelectorAll(".dropdown-list:visible");
        if (visibleLists.length > 1) {
            visibleLists.forEach(function (list) {
                list.style.display = "none";
            });
            this.nextElementSibling.style.display = "block";
            document.querySelectorAll(".dropdown-link").forEach(function (link) {
                link.classList.remove("active");
            });
            this.classList.add("active");
        }
    });
});

// Nav link click event
document.querySelectorAll(".nav-link").forEach(function (link) {
    link.addEventListener("click", function () {
        document.querySelectorAll(".nav-list li a").forEach(function (a) {
            a.classList.remove("active");
        });
        this.classList.add("active");
    });
});

// Header-cate and cate-btn click event
document.querySelectorAll(".header-cate, .cate-btn").forEach(function (element) {
    element.addEventListener("click", function () {
        document.body.style.overflow = "hidden";
        document.querySelector(".category-sidebar").classList.add("active");

        document.querySelector(".category-close").addEventListener("click", function () {
            document.body.style.overflow = "inherit";
            document.querySelector(".category-sidebar").classList.remove("active");
            document.querySelector(".backdrop").style.display = "none";
        });
    });
});

// Header-user click event
// document.querySelector(".header-user").addEventListener("click", function () {
//     console.log("Hello");
//     document.body.style.overflow = "hidden";
//     document.querySelector(".nav-sidebar").classList.add("active");

//     document.querySelector(".nav-close").addEventListener("click", function () {
//         document.body.style.overflow = "inherit";
//         document.querySelector(".nav-sidebar").classList.remove("active");
//         document.querySelector(".backdrop").style.display = "none";
//     });
// });

// Header-cart and cart-btn click event
document.querySelectorAll(".header-cart, .cart-btn").forEach(function (element) {
    element.addEventListener("click", function () {
        document.body.style.overflow = "hidden";
        document.querySelector(".cart-sidebar").classList.add("active");

        document.querySelector(".cart-close").addEventListener("click", function () {
            document.body.style.overflow = "inherit";
            document.querySelector(".cart-sidebar").classList.remove("active");
            document.querySelector(".backdrop").style.display = "none";
        });
    });
});

// Backdrop and sidebar click event
document.querySelectorAll(".header-user, .header-cart, .header-cate, .cart-btn, .cate-btn").forEach(function (element) {
    element.addEventListener("click", function () {
        document.querySelector(".backdrop").style.display = "block";

        document.querySelector(".backdrop").addEventListener("click", function () {
            this.style.display = "none";
            document.body.style.overflow = "inherit";
            document.querySelectorAll(".nav-sidebar, .cart-sidebar, .category-sidebar").forEach(function (sidebar) {
                sidebar.classList.remove("active");
            });
        });
    });
});

// Coupon-btn click event
// document.querySelector(".coupon-btn").addEventListener("click", function () {
//     this.style.display = "none";
//     document.querySelector(".coupon-form").style.display = "flex";
// });

// Header-src click event
// document.querySelector(".header-src").addEventListener("click", function () {
//     document.querySelector(".header-form").classList.toggle("active");
//     this.children[0].classList.toggle("fa-times");
// });

// Wish click event
document.querySelectorAll(".wish").forEach(function (element) {
    element.addEventListener("click", function () {
        this.classList.toggle("active");
    });
});

// Product-add click event
document.querySelectorAll(".product-add").forEach(function (element) {
    element.addEventListener("click", function () {
        var action = this.nextElementSibling;
        this.style.display = "none";
        action.style.display = "flex";
    });
});

// Action-plus click event
document.querySelectorAll(".action-plus").forEach(function (element) {
    element.addEventListener("click", function () {
        var input = this.closest(".product-action").querySelector(".action-input");
        var value = parseInt(input.value);
        value++;
        input.value = value;
        var minus = this.closest(".product-action").querySelector(".action-minus");
        if (value > 0) {
            minus.removeAttribute("disabled");
        }
    });
});

// Action-minus click event
document.querySelectorAll(".action-minus").forEach(function (element) {
    element.addEventListener("click", function () {
        var input = this.closest(".product-action").querySelector(".action-input");
        var value = parseInt(input.value);
        value--;
        input.value = value;
        if (value === 2) {
            this.setAttribute("disabled", "disabled");
        }
    });
});

// Review-widget-btn click event
document.querySelectorAll(".review-widget-btn").forEach(function (element) {
    element.addEventListener("click", function () {
        this.nextElementSibling.style.display = (this.nextElementSibling.style.display === "none" ? "block" : "none");
    });
});

// Offer-select click event
document.querySelectorAll(".offer-select").forEach(function (element) {
    element.addEventListener("click", function () {
        this.textContent = "Copied!";
    });
});

// Modal shown event
document.querySelectorAll(".modal").forEach(function (element) {
    element.addEventListener("shown.bs.modal", function () {
        document.querySelectorAll(".preview-slider, .thumb-slider").forEach(function (slider) {
            slider.slick("setPosition", 0);
        });
    });
});

// Profile-card events
document.querySelectorAll(".profile-card").forEach(function (element) {
    element.addEventListener("click", function () {
        document.querySelectorAll(".profile-card").forEach(function (card) {
            card.classList.remove("active");
        });
        this.classList.add("active");
    });
});
