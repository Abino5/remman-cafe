$( function() {

    $('.gif').gifplayer({ label: 'playOn' });
    $('.gifplayer-wrapper').css('opacity', '0');
    $.fn.writeText = function(content) {
        var contentArray = content.split(""),
            current = 0,
            elem = this;
        setInterval(function() {
            if(current < contentArray.length) {
                elem.text(elem.text() + contentArray[current++]);
            }
        }, 30);
    };


    $('.tooltip').tooltipster({
        animation: 'grow',
        delay: 300,
        theme: 'tooltipster-punk',
        trigger: 'click',
        side: 'left',
        timer: 3000
    });
    $('.second').tooltipster({
        animation: 'grow',
        delay: 300,
        theme: 'tooltipster-punk',
        trigger: 'click',
        side: 'left',
        timer: 3000
    });
    $('.third').tooltipster({
        animation: 'grow',
        delay: 300,
        theme: 'tooltipster-punk',
        trigger: 'click',
        side: 'left',
        timer: 3000
    });

$(document).on("mouseover", ".destinationChoice", function(){
   $(this).css("background-color", "white");
});

    $(document).on("mouseleave", ".destinationChoice", function(){
        $(this).css("background-color", "#e0ae57");
    });



    $('#tab1').trigger('click');

    $('#tab1').on('click', function(){
        $('.biggerImage').css('display', 'none');
    });
    $('#tab2').on('click', function(){
        $('.biggerImage').css('display', 'none');
        $('.subcontainer').css('opacity', '1');
        $('.subcontainer').find(".image").remove();
    });
    $('#tab3').on('click', function(){
        $('.biggerImage').css('display', 'none');
    });
    $('#tab4').on('click', function(){
        $('.biggerImage').css('display', 'none');
    });
    $('#tab5').on('click', function(){
        $('.biggerImage').css('display', 'none');
    });
    $.ajax({
        type: 'POST',
        url: "file:///C:/Sites/Reman/dist/index.php",
        async: true,
        beforeSend: function() {
            // do sth
        },
        error: function(data) {
            // do sth
        },
        success: function(data) {
            // do sth
        },
        xhrFields: {
            onprogress: function(progress) {
                var percentage = Math.floor((progress.loaded / progress.total) * 100);
                console.log('progress', percentage);
                $( ".loader" ).progressbar({
                    value: percentage
                });
                if (percentage === 100) {
                    console.log('DONE!');
                }
            }
        },
    });
    $(document).on("click", ".news", function(){
        $('#tab1').trigger('click');


            $(".tabs-container").animate({left:'45%'},300);



    });
    $(document).on("click", ".backer", function(){


        $(".tabs-container").animate({left:'100%'},300);



    });



    $('.food').on('click', function(){
        $('.sub-tab').removeClass('selected');
        $('.subcontainer').find('.image').remove();
$('.loadinger').css('display', 'block');
        $(this).addClass('selected');
        ajax('food');
    });

    $('.people').on('click', function(){
        $('.sub-tab').removeClass('selected');
        $('.subcontainer').find('.image').remove();
        $('.loadinger').css('display', 'block');
        $(this).addClass('selected');
        ajax('people');
    });


    $('.events').on('click', function(){
        $('.sub-tab').removeClass('selected');
        $('.subcontainer').find('.image').remove();
        $('.loadinger').css('display', 'block');
        $(this).addClass('selected');
        ajax('events');
    });


    $('.juices').on('click', function(){
        $('.sub-tab').removeClass('selected');
        $('.subcontainer').find('.image').remove();
        $('.loadinger').css('display', 'block');
        $(this).addClass('selected');
        ajax('juices');
    });


    $('.place').on('click', function(){
        $('.sub-tab').removeClass('selected');
        $('.subcontainer').find('.image').remove();
        $('.loadinger').css('display', 'block');
        $(this).addClass('selected');
        ajax('place');
    });

    $('#tab2').on('click', function(){
        $('.loadinger').css('display', 'block');
      ajax('people');
    });

$(document).on('click', '.image', function(){
    $('.loader2').css('display', 'block');
$('.image').css('display', 'none');
    $('.subcontainer').css('opacity', '0');
    var temp = $(this).find('img').attr('src');
    var image = 'bigger/'+temp;
    var title = $(this).find(".single-image").attr("title");
    title = title.replace("%20", " ");
    $(".titler").html(title);
   $('.biggerImage').css('display', 'block');
    $('#bimage').attr('src', image).load(function(){
        $('.loader2').css('display', 'none');
    });
});


    $(document).on('click', '.choice01', function(){
$('.destinationChoice').animate({opacity:0}, 2000);
        $('.destinationChoice').css('display', 'none');
        $('.driverMsg').css('line-height', '6vh');
        $('.driverMsgBox').animate({opacity:0, width:'0vw', height:'0vh', top:'30vh'},200, function() {
            $('.driverMsgBox').animate({opacity:1, width:'20vw', height:'20vh', top:'10vh'},200);
$(".driverMsg").html('');
            $(".driverMsg").writeText("Remman Cafe it is! Let's roll!");
setTimeout(function(){
    $('.driverMsgBox').animate({opacity:0, width:'0vw', height:'0vh', top:'30vh'},200);
    $('.front').css('opacity','1');
    $('.back').css('opacity', '0');

    setTimeout(function(){
        $('.gif').trigger("click");
        setTimeout(function(){
           $('.gifplayer-wrapper').animate({opacity:1}, 2000);

        }, 2000);
    }, 1000);
}, 3000);
        });

        });



    $(document).on('click', '.choice02', function() {
       // $('.destinationChoice').animate({opacity: 0}, 2000);
       // $('.destinationChoice').css('display', 'none');
        $('.driverMsgBox').animate({opacity: 0, width: '0vw', height: '0vh', top: '30vh'}, 200, function () {
            $('.driverMsg').html("Sorry I didn't get that. Please tell me again.");
            $('.driverMsgBox').animate({opacity:1, width:'20vw', height:'20vh', top:'10vh'},200);

        });
    });




    $(document).on('click', '.closer', function(){
        $('.subcontainer').css('opacity', '1');
        $('.image').css('display', 'block');

        $('.biggerImage').css('display', 'none');
    });

    $(document).on('click', '.menu', function(){
        $('#tab5').trigger('click');
        $(".tabs-container").animate({left:'45%'},300);

    });


    function ajax(dir){

        var fileextension = ".jpg";
        $.ajax({
            //This will retrieve the contents of the folder if the folder is configured as 'browsable'
            url: 'file.php',
            data:{path:dir},
            type:'get',
            success: function (data) {
var parsed = $.parseJSON(data);
                $.each(parsed, function(i, filename) {
                    var append = '<div class="image"> <img src="'+filename+'" title="'+filename+'" class="single-image"> </div> <div class="image"> <img src="'+filename+'" class="single-image"> </div>';
                    $('.subcontainer').append(append);
                $('.subcontainer').find('.image:last-child').remove();

                });


            }
        }).promise().done( function(){
            $('.loadinger').css('display', 'none');

        } );
    }


$(document).on('click', '.play', function(){
   $('.penguin').css('background-position', '0% 0%');
    var audio2 = $("#audios2")[0];
    audio2.play();
});



    $(document).on('click', '.pause', function(){
        $('.penguin').css('background-position', '100% 0%');
        var audio2 = $("#audios2")[0];
        audio2.pause();
        audio2.currentTime = 0;
    });

    $(document).on('click', '.third', function(e){
        e.preventDefault();
    });


});






$(window).on("load", function() {
    var audio = $("#audios")[0];
    var audio2 = $("#audios2")[0];

    audio.play();
    audio.addEventListener('ended', function(){
        $('.loadingDiv').animate({opacity:0},1000, function() {
            $('.loadingDiv').css('display', 'none');
                audio2.play();

        });

        setTimeout(function(){
            $('.container').animate({opacity:1},500);

window.driver = "Good Morning! Where do you want to go?";

            setTimeout(function(){
               $('.smiley').trigger('click');
                setTimeout(function(){
                    $('.second').trigger('click');
                    setTimeout(function(){
                        $('.third').trigger('click');
                        $('.smiley').css('background-position', '104%');
                        setTimeout(function(){
$('.back').css('opacity','1');
                            $('.front').css('opacity','0')

                                $('.driverMsgBox').animate({opacity:1, width:'20vw', height:'20vh', top:'10vh'},200, function(){
                                    $(".driverMsg").writeText(window.driver);
                                    $('.smiley').css('background-position', '-16.5%');

                                });




                            setTimeout(function(){
                               $('.destinationChoice').css('display', 'block');
                                $('.destinationChoice').animate({opacity:1});




                                //    setTimeout(function(){
                                //      $('.driverMsgBox').animate({opacity:0, width:'0vw', height:'0vh', top:'30vh'},200);
                                //  },4000);
                            },2000);



                            //    setTimeout(function(){
                              //      $('.driverMsgBox').animate({opacity:0, width:'0vw', height:'0vh', top:'30vh'},200);
                              //  },4000);
                        },4000);
                    },4000);
                },3000);
            },1000);
        },1000);
    });
    audio2.addEventListener('ended', function() {
    audio2.currentTime = 0;
        audio2.play();
    });




});



