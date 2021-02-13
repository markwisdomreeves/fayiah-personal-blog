const responsive = {
    0: {
        items: 1
    },
    320: {
        items: 1
    },
    560: {
        items: 2
    },
    960: {
        items: 3
    }
}

$(document).ready(function () {

    $nav = $('.nav');
    $toggleCollapse = $('.toggle-collapse');

    /** click event on toggle menu */
    $toggleCollapse.click(function () {
        $nav.toggleClass('collapse');
    })

    // owl-crousel for blog
    $('.owl-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 2500,
        dots: true,
        nav: true,
        navText: [$('.owl-navigation .owl-nav-prev'), $('.owl-navigation .owl-nav-next')],
        responsive: responsive
    });


    // click to scroll top
    $('.move-up span').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 1000);
    })

    // AOS Instance
    AOS.init();

});


// CONTACT FORM VALIDATION
function validate() {
    let name = document.getElementById("name").value;
    let subject = document.getElementById("subject").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;
    let error_message = document.getElementById("error_message");

    error_message.style.padding = "10px";

    let text;
    if (name.length < 3) {
        text = "Please Enter a valid Name";
        error_message.innerHTML = text;
        return false;
    }
    if (subject.length < 10) {
        text = "Subject Must be more than 10 chars long";
        error_message.innerHTML = text;
        return false;
    }
    // if (isNaN(phone) || phone.length != 10) {
    //     text = "Please Enter a valid phone Number (10 Numbers)";
    //     error_message.innerHTML = text;
    //     return false;
    // }
    if (email.indexOf("@") == -1 || email.length < 6) {
        text = "Please Enter a valid Email";
        error_message.innerHTML = text;
        return false;
    }
    if (message.length <= 20) {
        text = "Text Field Must be More Than 20 Chars long";
        error_message.innerHTML = text;
        return false;
    }

    let finalText = "Thanks for submitting your Contacts!"
    error_message.innerHTML = finalText;
    return true;
}
