<?php
header('Access-Control-Allow-Origin: *');
?>
<!doctype html>
<html class="no-js" lang="">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="x-ua-compatible" content="ie=edge">
        <title>Home | Remman Cafe</title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" type="text/css" href="css/tooltipster.bundle.min.css" />
        <link rel="stylesheet" type="text/css" href="css/plugins/tooltipster/sideTip/themes/tooltipster-sideTip-punk.min.css" />

        <link rel="apple-touch-icon" href="apple-touch-icon.png">
        <!-- Place favicon.ico in the root directory -->
        <link rel="stylesheet" href="//code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">

        <link rel="stylesheet" href="css/normalize.css">
        <link rel="stylesheet" href="css/main.css">
        <link rel="stylesheet" href="css/gifplayer.css">

        <script src="js/vendor/modernizr-2.8.3.min.js"></script>
    </head>
    <body id="body">
    <div class="loadingDiv">
        <div class="loading">
            <div class="loader"></div>
            <div class="loadingText"></div>
        </div>
    </div>
       <div class="container">
<div class="destinationChoice choice01">
    <div class="destinationContainer">
        <div class="destinationBox"></div>
        <div class="destinationTitle">Remman Cafe</div>
    </div>
</div>



           <div class="driverMsgBox">
               <div class="driverMsg"></div>
           </div>
           <div class="baseImage">
               <div class="hoster"><img class="gif" src="img/bgroad.gif" id="BG"></div>
               <img src="img/lookbackBG.png" class="generalImageRule" id="baseImage"/>
               <img src="img/lookback.png" class="generalImageRule back" id="baseImage2"/>
               <img src="img/front.png" class="generalImageRule front" id="baseImage3"/>

               <img src="img/smokebackground.png" class="generalImageRule anim" id="smokeBG"/>
               <img src="img/smoke.gif" class="generalImageRule" id="smoke"/>

               <img src="img/smokeforeground.png" class="generalImageRule anim" id="smokeFG"/>

           </div>
<div class="news"></div>
           <div class="menu"></div>

           <div class="penguin"></div>
           <div class="play"></div>
           <div class="pause"></div>
           <audio id="audios" controls="controls">
               <source id="mp3_src" src="img/carDoor.mp3" type="audio/mp3" />
           </audio>
           <audio id="audios2" controls="controls">
               <source id="mp3_src" src="img/music01.mp3" type="audio/mp3" />
           </audio>
           <div class="smiley tooltip" data-tooltip-content="#tooltip_content"></div>
           <div class="second" data-tooltip-content="#tooltip_content2"></div>
           <div class="third" data-tooltip-content="#tooltip_content3"></div>

           <div class="imageSlide"></div>
           <div class="tooltip_templates">
    <span id="tooltip_content">
       <strong>Welcome to Remman Cafe!</strong>
    </span>
               <span id="tooltip_content2">
       <strong>You can click on the Newspaper below to read the news...</strong>
    </span>
               <span id="tooltip_content3">
       <strong>You can check what we serve from the Menu below!</strong>
    </span>
           </div>
           <div class="tabs-container">
               <main>

                   <input id="tab1" name="tabs" checked="" type="radio">
                   <label for="tab1">News</label>
                   <input id="tab5" name="tabs" checked="" type="radio">
                   <label for="tab5">Menu</label>

                   <input id="tab2" name="tabs" type="radio">
                   <label for="tab2">Gallery</label>

                   <input id="tab3" name="tabs" type="radio">
                   <label for="tab3">About Us</label>

                   <input id="tab4" name="tabs" type="radio">
                   <label for="tab4">Contact Us</label>
                   <section id="content5">
                       <p>
                           Bacon ipsum dolor sit amet beef venison beef ribs kielbasa. Sausage pig leberkas, t-bone sirloin shoulder bresaola. Frankfurter rump porchetta ham. Pork belly prosciutto brisket meatloaf short ribs.
                       </p>
                       <p>
                           Brisket meatball turkey short loin boudin leberkas meatloaf chuck andouille pork loin pastrami spare ribs pancetta rump. Frankfurter corned beef beef tenderloin short loin meatloaf swine ground round venison.
                       </p>
                   </section>
                   <section id="content1">
                       <p>
                           Bacon ipsum dolor sit amet beef venison beef ribs kielbasa. Sausage pig leberkas, t-bone sirloin shoulder bresaola. Frankfurter rump porchetta ham. Pork belly prosciutto brisket meatloaf short ribs.
                       </p>
                       <p>
                           Brisket meatball turkey short loin boudin leberkas meatloaf chuck andouille pork loin pastrami spare ribs pancetta rump. Frankfurter corned beef beef tenderloin short loin meatloaf swine ground round venison.
                       </p>
                   </section>
<div class="biggerImage">
    <div class="titler"></div>
<div class="closer">X</div>
<img src="#" id="bimage">
    <div class="loader2">
        <div class="loader3">
            <div class="lload"></div>
        </div>
    </div>
</div>
                   <section id="content2">
                       <div class="subcontainer">
                       <div class="sub-tabs">
                           <div class="sub-tab selected people">People</div>
                           <div class="sub-tab food">Food</div>
                           <div class="sub-tab place">Place</div>
                           <div class="sub-tab juices">Juice</div>
                           <div class="sub-tab events">Events</div>
                       </div>
                       </div>
                       <div class="loadinger">
                           <div class="loadingerContainer">
                               <div class="loading2">

                               </div>
                           </div>

                       </div>

                   </section>

                   <section id="content3">
                       <p>
                           Bacon ipsum dolor sit amet beef venison beef ribs kielbasa. Sausage pig leberkas, t-bone sirloin shoulder bresaola. Frankfurter rump porchetta ham. Pork belly prosciutto brisket meatloaf short ribs.
                       </p>
                       <p>
                           Brisket meatball turkey short loin boudin leberkas meatloaf chuck andouille pork loin pastrami spare ribs pancetta rump. Frankfurter corned beef beef tenderloin short loin meatloaf swine ground round venison.
                       </p>
                   </section>

                   <section id="content4">
                       <p>
                           Bacon ipsum dolor sit amet landjaeger sausage brisket, jerky drumstick fatback boudin ball tip turducken. Pork belly meatball t-bone bresaola tail filet mignon kevin turkey ribeye shank flank doner cow kielbasa shankle. Pig swine chicken hamburger, tenderloin turkey rump ball tip sirloin frankfurter meatloaf boudin brisket ham hock. Hamburger venison brisket tri-tip andouille pork belly ball tip short ribs biltong meatball chuck. Pork chop ribeye tail short ribs, beef hamburger meatball kielbasa rump corned beef porchetta landjaeger flank. Doner rump frankfurter meatball meatloaf, cow kevin pork pork loin venison fatback spare ribs salami beef ribs.
                       </p>
                       <p>
                           Jerky jowl pork chop tongue, kielbasa shank venison. Capicola shank pig ribeye leberkas filet mignon brisket beef kevin tenderloin porchetta. Capicola fatback venison shank kielbasa, drumstick ribeye landjaeger beef kevin tail meatball pastrami prosciutto pancetta. Tail kevin spare ribs ground round ham ham hock brisket shoulder. Corned beef tri-tip leberkas flank sausage ham hock filet mignon beef ribs pancetta turkey.
                       </p>
                   </section>

               </main>
               <footer class="footer-menu">
                   <div class="backer"></div>
               </footer>
           </div>
       </div>
       <script src="https://code.jquery.com/jquery-1.12.4.js"></script>
       <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>

    <script src="js/jquery.gifplayer.js"></script>

    <script src="js/main.js"></script>
    <script src="js/tooltipster.bundle.min.js"></script>


<script>

</script>
    </body>
</html>
