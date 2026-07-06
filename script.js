/* ==========================================
   HealthCare Shield
   Main JavaScript File
========================================== */

$(document).ready(function () {

    // ==========================
    // Loading Spinner
    // ==========================
    $("#loader").fadeOut(1000);

    // ==========================
    // Smooth Scroll
    // ==========================
    $("a.nav-link").click(function (e) {

        let target = $(this.hash);

        if (target.length) {

            e.preventDefault();

            $("html, body").animate({

                scrollTop: target.offset().top - 70

            }, 800);

        }

    });

    // ==========================
    // Navbar Background on Scroll
    // ==========================

    $(window).scroll(function () {

        if ($(this).scrollTop() > 100) {

            $(".navbar").addClass("shadow");

        } else {

            $(".navbar").removeClass("shadow");

        }

    });

    // ==========================
    // Scroll To Top Button
    // ==========================

    $(window).scroll(function () {

        if ($(this).scrollTop() > 300) {

            $("#scrollTop").fadeIn();

        } else {

            $("#scrollTop").fadeOut();

        }

    });

    $("#scrollTop").click(function () {

        $("html, body").animate({

            scrollTop: 0

        }, 700);

    });

    // ==========================
    // Card Hover Animation
    // ==========================

    $(".card").hover(

        function () {

            $(this).addClass("shadow-lg");

        },

        function () {

            $(this).removeClass("shadow-lg");

        }

    );

});

/* ==========================================
   Premium Calculator
========================================== */

function calculatePremium() {

    let age = Number(document.getElementById("age").value);

    let plan = document.getElementById("plan").value;

    let smoker = document.getElementById("smoker").value;

    let premium = 0;

    if (age <= 0 || age > 100) {

        alert("Please enter a valid age.");

        return;

    }

    switch (plan) {

        case "Basic":
            premium = 399;
            break;

        case "Silver":
            premium = 799;
            break;

        case "Gold":
            premium = 1299;
            break;

        case "Platinum":
            premium = 1999;
            break;

    }

    if (age >= 35)
        premium += 300;

    if (age >= 50)
        premium += 600;

    if (smoker === "Yes")
        premium += 500;

    document.getElementById("premiumResult").innerHTML =

        "<h4 class='text-success'>Estimated Premium : ₹ " +

        premium +

        " / Month</h4>";

}

/* ==========================================
   BMI Calculator
========================================== */

function calculateBMI() {

    let weight = Number(document.getElementById("weight").value);

    let height = Number(document.getElementById("height").value);

    height = height / 100;

    let bmi = weight / (height * height);

    bmi = bmi.toFixed(2);

    let status = "";

    if (bmi < 18.5)

        status = "Underweight";

    else if (bmi < 25)

        status = "Normal";

    else if (bmi < 30)

        status = "Overweight";

    else

        status = "Obese";

    document.getElementById("bmiResult").innerHTML =

        "<h4>Your BMI : " +

        bmi +

        "<br>Status : " +

        status +

        "</h4>";

}

/* ==========================================
   Contact Form Validation
========================================== */

function validateForm() {

    let name = document.getElementById("name").value.trim();

    let email = document.getElementById("email").value.trim();

    let phone = document.getElementById("phone").value.trim();

    let message = document.getElementById("message").value.trim();

    if (name == "" || email == "" || phone == "" || message == "") {

        alert("Please fill all fields.");

        return false;

    }

    alert("Message Sent Successfully!");

    return true;

}

/* ==========================================
   Newsletter
========================================== */

function subscribeNewsletter() {

    let email = document.getElementById("newsletterEmail").value;

    if (email == "") {

        alert("Enter Email");

        return;

    }

    alert("Subscribed Successfully!");

}

/* ==========================================
   Dark Mode
========================================== */

function toggleDarkMode() {

    document.body.classList.toggle("dark-mode");

}

/* ==========================================
   Animated Counter
========================================== */

const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

    counter.innerText = "0";

    const updateCounter = () => {

        const target = +counter.getAttribute("data-target");

        const current = +counter.innerText;

        const increment = target / 100;

        if (current < target) {

            counter.innerText = Math.ceil(current + increment);

            setTimeout(updateCounter, 20);

        } else {

            counter.innerText = target;

        }

    };

    updateCounter();

});

/* ==========================================
   Buy Plan
========================================== */

function buyPlan(plan) {

    alert("You selected the " + plan + " Plan.");

}

/* ==========================================
   Login Validation
========================================== */

function loginUser() {

    let email = document.getElementById("loginEmail").value;

    let password = document.getElementById("loginPassword").value;

    if (email == "" || password == "") {

        alert("Enter Email and Password");

        return false;

    }

    alert("Login Successful!");

}

/* ==========================================
   Register Validation
========================================== */

function registerUser() {

    let password = document.getElementById("password").value;

    let confirm = document.getElementById("confirmPassword").value;

    if (password != confirm) {

        alert("Passwords do not match.");

        return false;

    }

    alert("Registration Successful!");

}

/* ==========================================
   Hospital Search
========================================== */

function searchHospital() {

    let input = document.getElementById("hospitalSearch").value.toLowerCase();

    let cards = document.querySelectorAll(".hospital-card");

    cards.forEach(card => {

        let text = card.innerText.toLowerCase();

        if (text.includes(input))

            card.style.display = "block";

        else

            card.style.display = "none";

    });

}

/* ==========================================
   Welcome Message
========================================== */

window.onload = function () {

    console.log("HealthCare Shield Loaded Successfully");

}

/* ==========================================
   Current Year
========================================== */

document.addEventListener("DOMContentLoaded", function () {

    let year = document.getElementById("year");

    if (year)

        year.innerHTML = new Date().getFullYear();

});