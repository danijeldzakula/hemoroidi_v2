$(document).ready(function() {

    $('[name="country"]').on('change', function() {
        var geoKey = $(this).find('option:selected').val();
        var data = $jsonData.prices[geoKey];
        var price = data.price;
        var oldPrice = data.old_price;
        var currency = data.currency
        $("[value = "+geoKey+"]").attr("selected", true).siblings().attr('selected', false);

        $('.price_land_s1').text(price);
        $('.price_land_s2').text(oldPrice);
        $('.price_land_curr').text(currency);
    });


    $('a[href^=\\#]').on('click', function(){
        var scroll_el = $(this).attr('href');
        if ($(scroll_el).length != 0) {
            $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 500);
        }
        return false;
    });

    $(function() {
        var startTime = false;
        if (!startTime) {
            var a = new Date();
            startTime = a.getTime();
        }

        var b = new Date(startTime + parseInt(180) * 60 * 1000);

        var interval = setInterval(function() {
            var c = new Date();
            var all = parseInt(+b - +c) / 1000;

            if (all < 0) all = 0;

            var hour = parseInt(all / 3600);
            var min = parseInt((all % 3600) / 60);
            var sec = parseInt((all % 3600) % 60);

            if (hour < 10) hour = '0' + hour;
            if (min < 10) min = '0' + min;
            if (sec < 10) sec = '0' + sec;
            hour = String(hour);
            min = String(min);
            sec = String(sec);



            $('.countdown_h_0').html(hour);
            $('.countdown_m_0').html(min);
            $('.countdown_s_0').html(sec);


            if (all == 0) {
                clearInterval(interval);
            }

        }, 1000);

    })
});
