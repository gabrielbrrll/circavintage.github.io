var elementPosition = $('#navigation').offset();

$(window).scroll(function(){
        if($(window).scrollTop() > elementPosition.top){
              $('#navigation').css('position','fixed'). css('top','0').css('opacity','0.5').css('transition','all 0.7s ease');
        } else if($(window).scrollTop() < elementPosition.top){
              $('#navigation').css('opacity','1.0').css('transition','all 0.7s ease').css('position','static').css('z-index','998');
        }
        else {
            $('#navigation').css('position','static');
        }    
});

$('a[href^="#"]').on('click', function(event) {

    var target = $(this.getAttribute('href'));

    if( target.length ) {
        event.preventDefault();
        $('html, body').stop().animate({
            scrollTop: target.offset().top
        }, 700);
    }

});
