
function openNav() {
    document.getElementById("navMobile").style.width = "60%";
}

function closeNav() {
    document.getElementById("navMobile").style.width = "0%";
}


var slideIndex = 1;
showSlides(slideIndex);

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("slider-grid");
    var dots = document.getElementsByClassName("page");
    if (n > slides.length) {
    	slideIndex = 1
    }    
    
    if (n < 1) {
    	slideIndex = slides.length
    }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    
    slides[slideIndex-1].style.display = "grid";  
    dots[slideIndex-1].className += " active";
}
