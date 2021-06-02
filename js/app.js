var $slick = $('.multiple-items');
$slick.slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    arrows: false,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 1
            }
        },
    ]

});
$('.prev-btn').click(function () {
    $slick.slick('slickPrev');
})
$('.next-btn').click(function () {
    $slick.slick('slickNext');
})



$(document).ready(function () {
    var submitIcon = $('.searchbar-icon');
    var inputBox = $('.searchbar-input');
    var searchbar = $('.searchbar');
    var isOpen = false;
    submitIcon.click(function () {
        if (isOpen == false) {
            searchbar.addClass('searchbar-open');
            inputBox.focus();
            isOpen = true;
        } else {
            searchbar.removeClass('searchbar-open');
            inputBox.focusout();
            isOpen = false;
        }
    });
    submitIcon.mouseup(function () {
        return false;
    });
    searchbar.mouseup(function () {
        return false;
    });
    $(document).mouseup(function () {
        if (isOpen == true) {
            $('.searchbar-icon').css('display', 'block');
            submitIcon.click();
        }
    });
});
function buttonUp() {
    var inputVal = $('.searchbar-input').val();
    inputVal = $.trim(inputVal).length;
    if (inputVal !== 0) {
        $('.searchbar-icon').css('display', 'none');
    } else {
        $('.searchbar-input').val('');
        $('.searchbar-icon').css('display', 'block');
    }
}

//menu scroll

window.onscroll = function () { scrollFunction() };
menu = document.getElementById("menu-main");
mybutton = document.getElementById("myBtn");
function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        menu.classList.add("fixed-top")
    } else {
        menu.classList.remove("fixed-top")
    }
    //back to top
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        mybutton.style.opacity = 1;
        mybutton.style.visibility = "visible";
    } else {
        mybutton.style.opacity = 0;
        mybutton.style.visibility = "hidden";
    }
}


//

var sections = $('section')
    , nav = $('nav')
    , nav_height = nav.outerHeight();

$(window).on('scroll', function () {
    var cur_pos = $(this).scrollTop();

    sections.each(function () {
        var top = $(this).offset().top - nav_height,
            bottom = top + $(this).outerHeight();

        if (cur_pos >= top && cur_pos <= bottom) {
            nav.find('a').removeClass('active');
            sections.removeClass('active');

            $(this).addClass('active');
            nav.find('a[href="#' + $(this).attr('id') + '"]').addClass('active');
        }
    });
});

nav.find('a').on('click', function () {
    var $el = $(this)
        , id = $el.attr('href');

    $('html, body').animate({
        scrollTop: $(id).offset().top - 100
    }, 500);

    return false;
});



//When the user clicks on the button, scroll to the top of the document
function topFunction() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
}
function downFunction() {
    md = document.getElementById("features");
    // nav = document.getElementById("navbar");
    window.scrollTo({
        top: md.offsetTop - 100,
        behavior: "smooth"
    })
}
