$('document').ready(function(){
    $('a[href="#order-form"]').click(function(){
        var id = $(this).attr('href');
        $("html, body").animate({"scrollTop": $(id).offset().top},"slow");
        return false;
    });
});