// JavaScript Document
        var t;
        $(".nav-li1").hover(function () {
            clearTimeout(t);
            t = setTimeout(function () {
                $(".nav-li1").find(".card-nav").animate({
                    'top': 40 + 'px',
                    'opacity': 1
                }, 200).addClass("dis");
            }, 500);
        });
    
        $(".nav-li1").mouseleave(function () {
            clearTimeout(t);
            $(this).find(".card-nav").animate({
                'top': 50 + 'px',
                'opacity': 0
            }, 200, function () {
                $(".nav-li1").find(".card-nav").removeClass("dis");
            });
        });
