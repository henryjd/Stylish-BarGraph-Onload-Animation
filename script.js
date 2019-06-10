$(document).ready(function() {
    $(".html_bar").animate({width: "80%"}, 'slow', 'swing');
    $(".css_bar").animate({width: "65%"}, 'slow');
    $(".js_bar").animate({width: "55%"}, 'slow');
    $('.jquery_bar').animate({width: "60%"}, 'slow');
    $(".photoshop_bar").animate({width: "70%"}, 'slow');
    
    
    $('.text_html').hover(
        function(){
             $('.text_html').css('color', 'gray');
          $('.text_html').stop().animate({width: "26%"}, 'slow');
        },
        function(){
          $('.text_html').stop().animate({width: "18%"}, 'fast');
          $('.text_html').css('color', 'white');
        }
     );
    
    $('.text_css').hover(
        function(){
             $('.text_css').css('color', 'gray');
          $('.text_css').stop().animate({width: "26%"}, 'slow');
        },
        function(){
          $('.text_css').stop().animate({width: "18%"}, 'fast');
           $('.text_css').css('color', 'white');
        }
     );
        
    $('.text_js').hover(
        function(){
             $('.text_js').css('color', 'gray');
          $('.text_js').stop().animate({width: "26%"}, 'slow');
        },
        function(){
          $('.text_js').stop().animate({width: "18%"}, 'fast');
           $('.text_js').css('color', 'white');
        }
     );
            
    $('.text_jquery').hover(
        function(){
             $('.text_jquery').css('color', 'gray');
          $('.text_jquery').stop().animate({width: "26%"}, 'slow');
        },
        function(){
          $('.text_jquery').stop().animate({width: "18%"}, 'fast');
           $('.text_jquery').css('color', 'white');
        }
     );
                
    $('.text_photo').hover(
        function(){
             $('.text_photo').css('color', 'gray');
          $('.text_photo').stop().animate({width: "26%"}, 'slow');
        },
        function(){
          $('.text_photo').stop().animate({width: "18%"}, 'fast');
           $('.text_photo').css('color', 'white');
        }
     );
  
});