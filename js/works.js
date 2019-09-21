$(document).ready(function(){


    /*toggle tab starts*/
    $('#work-btn').click(function(){
     $('#skill-btn').removeClass('btn-dark');
     $(this).addClass('btn-dark');
     $('#skill').hide();
     $('#work').show();
     $(this).css({

     });
    });
    $('#skill-btn').click(function(){
     $('#work-btn').removeClass('btn-dark');
     $(this).addClass('btn-dark');
     $('#skill').show();
     $('#work').hide();
    });
    /*toggle tab finishes*/
  
  
    /*Image Scroll-fixed-top starts*/
    let position = $(window).scrollTop();
    // console.log("pos"+position)
            $(window).scroll(function(){
                if($('#skill-btn').hasClass('btn-dark')){
                    let scroll = $(window).scrollTop();
                    // console.log("aftr scroll"+scroll)
                    // console.log("position"+position)
                    if(scroll > position && (position > 0 && position <=190) ){
                            $('#scale').hide();
                            $('#onscroll-scale').show();
                            $('#onscroll-scale').addClass('sticky-top');
                            $('#onscroll-scale').css({
                                marginTop: +55,
                                position: 'fixed'
                            });
                            $('#skill').find('h4').hide()
                       
                        
                    }else{
                        // console.log(scroll)
                        if(scroll< position){
                            $('#skill').find('h4').show()
                            $('#scale').show();
                            $('#onscroll-scale').hide()
                        }
                    }
                    
                    position = scroll;
                }

            });
    /*Image Scroll-fixed-top end*/

});