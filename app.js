window.onscroll = function () {
    myFunction()
    scrollToTop()
};

var navbar = document.getElementById("second-nav-bar");

var top = document.getElementById("top");

var sticky = navbar.offsetTop - 30;


function myFunction() {
    if (window.scrollY >= sticky) {
        navbar.classList.add("nav-bar-sticky")
    } else {
        navbar.classList.remove("nav-bar-sticky");
    }
}

// Form Dropdown Menu
var formDropdownButton = document.querySelectorAll(".form-dropdown-button")
var formDropdownMenu = document.querySelectorAll(".form-dropdown-menu")
var formDropdownOptions = document.querySelectorAll(".form-dropdown-menu-options")
var dropdownMenuArrowIcon = document.querySelectorAll(".dropdown-menu-arrow")

formDropdownButton.forEach((element) => {
    element.addEventListener("click", () => {
        element.firstElementChild.classList.toggle("dropdown-button-arrow")
        element.classList.toggle("show-button-border")
        formDropdownMenu.forEach((menu) => {
            if (element.getAttribute("data-name") === menu.getAttribute("data-name")) {
                menu.classList.toggle("show")
            }
        })
        
    })
})

formDropdownOptions.forEach((element) => {
    element.addEventListener("click", () => {
        formDropdownButton.forEach((button) => {
            button.getAttribute("data-name") === element.parentElement.getAttribute("data-name") ? button.firstChild.data = element.innerHTML : ""
            element.parentElement.getAttribute("data-name") === "doctor" ? document.getElementById("doctor-button").classList.remove("show-button-border") : document.getElementById("department-button").classList.remove("show-button-border") 
            element.parentElement.classList.remove("show")

        })
    })
})


// Scroll to top button
var scrollToTopButton = document.getElementById("scrollToTop")

const scrollToTop = () => {
    if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
        scrollToTopButton.style.opacity = 1
        scrollToTopButton.style.pointerEvents = "all"
    } else {
        scrollToTopButton.style.opacity = 0
        scrollToTopButton.style.pointerEvents = "none"
    }
}

scrollToTopButton.addEventListener("click", () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
})

// Small Screen Second Nav Bar Menu
var navBarMenuIcon = document.getElementById("small-screen-nav-icon")

var secondNavContainer = document.getElementById("second-nav-container")

navBarMenuIcon.addEventListener("click", () => {
    secondNavContainer.classList.toggle("show-second-nav")

})

// Carousel Text
var carouselTitle = document.querySelectorAll(".carousel-title")
var carouselDescription = document.querySelectorAll(".carousel-description")
var carouselButtonsContainer = document.querySelectorAll(".carousel-buttons-container")
var carouselItem = document.querySelectorAll(".carousel-item")

var ob = new MutationObserver(function() {
    carouselText();
});

carouselItem.forEach((element) => {
    ob.observe(element, {
        attributes: true,
        attributeFilter: ["class"]
      });
})

function carouselText() {
    carouselTitle.forEach((element) => {
        if(element.parentElement.parentElement.classList.contains("active")) {
            element.classList.add("show-carousel-title")
        }
        else {
            element.classList.remove("show-carousel-title")
        }
    })
    carouselDescription.forEach((element) => {
        if(element.parentElement.parentElement.classList.contains("active")) {
            element.classList.add("show-carousel-description")
        }
        else {
            element.classList.remove("show-carousel-description")
        }
    })
    carouselButtonsContainer.forEach((element) => {
        if(element.parentElement.parentElement.classList.contains("active")) {
            element.classList.add("show-buttons-container")
        }
        else {
            element.classList.remove("show-buttons-container")
        }
    })
}

carouselTitle.forEach((element) => {
    if(element.parentElement.parentElement.classList.contains("active")) {
        element.classList.add("show-carousel-title")
    }
    else {
        element.classList.remove("show-carousel-title")
    }
})
carouselDescription.forEach((element) => {
    if(element.parentElement.parentElement.classList.contains("active")) {
        element.classList.add("show-carousel-description")
    }
    else {
        element.classList.remove("show-carousel-description")
    }
})
carouselButtonsContainer.forEach((element) => {
    if(element.parentElement.parentElement.classList.contains("active")) {
        element.classList.add("show-buttons-container")
    }
    else {
        element.classList.remove("show-buttons-container")
    }
})

// Video Pop Up
var videoPopUpContainer = document.querySelector(".video-popup-container")

var videoPlayIcon = document.querySelector(".video-play-icon-container")

var videoPopUpExit = document.querySelector(".video-popup-exit")

videoPlayIcon.addEventListener("click", () => {
    videoPopUpContainer.classList.add("show-video-popup")
})

videoPopUpExit.addEventListener("click", () => {
    videoPopUpContainer.classList.remove("show-video-popup")
})

window.onclick = function(event) {
    if(event.target.classList.contains("video-popup-bg")){
        videoPopUpContainer.classList.remove("show-video-popup")
    }

    if(event.target.getAttribute("data-name") !== "department") {
        document.querySelector("#department-menu").classList.remove("show")
        document.querySelector("#department-button").firstElementChild.classList.remove("dropdown-button-arrow")
        document.querySelector("#department-button").classList.remove("show-button-border")
    }

    if(event.target.getAttribute("data-name") !== "doctor"){
        document.querySelector("#doctor-menu").classList.remove("show")
        document.querySelector("#doctor-button").firstElementChild.classList.remove("dropdown-button-arrow")
        document.querySelector("#doctor-button").classList.remove("show-button-border")
    }
}

// Number counter
var numberCounterElements = document.querySelectorAll(".number-counter")
var x = 0;
async function numberCounter (number, element, duration) {
    var i = 0
    while(i < number) {
        i++
        element.innerHTML = i;
        await new Promise(r => setTimeout(r, 1))
    }
}

numberCounterElements.forEach((element) => {
    numberCounter(element.getAttribute("data-number"), element, element.getAttribute("data-duration"))
})

