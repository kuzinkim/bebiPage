var debugTimes = false;

/**
 * Global Variables
 */

/**
 * Document Ready
 */
$(document).ready(function() {
    $('.js-scroll').each(function(index, elem){
        var ps = new PerfectScrollbar(elem, {
            wheelSpeed: 10,
            wheelPropagation: true,
            maxScrollbarLength: 46,
        });

        var isDrag = false;
        var lastX = 0;
        $(elem).on('mousedown', function(event) {
          isDrag = true;
          lastX = event.pageX;
        });
        $(document).on('mousemove', function(event) {
          if(isDrag) {
            var currentX = event.pageX;
            var delta = lastX - currentX;
            $(elem).scrollLeft($(elem).scrollLeft() + delta);
            lastX = currentX;
          }
        })
        $(document).on('mouseup', function() {
          isDrag = false;
        });

        $(window).on('resize', function(){
            ps.update();
        });
    })    
    $(".js-menu, .js-main").on("click","a", function (event) {
      event.preventDefault();
      var id  = $(this).attr('href'),
        top = $(id).offset().top;
      $('body,html').animate({scrollTop: top}, 1000);
    });
})

var pr = window.innerWidth - $(window).width();

    /**
     * Components
     */
@@include('../components/header/header.js')
@@include('../components/popup/popup_one.js')
