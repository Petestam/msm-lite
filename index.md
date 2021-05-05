<!DOCTYPE html>
<html lang="en" class="no-js">

<head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>LiVi Lite Prototype</title>
    <meta name="description" content="An experimental interactive room slideshow based on the prototype concept by Bilal Mechairia's Dribbble shot 'Spaces'" />
    <meta name="keywords" content="room, slideshow, 3d, perspective, animation, css, javascript, web development" />
    <meta name="author" content="Codrops" />
    <link rel="shortcut icon" href="favicon.ico">
    <link rel="stylesheet" type="text/css" href="css/normalize.css" />
    <link rel="stylesheet" type="text/css" href="fonts/icomoon/icomoon.css" />
    <link rel="stylesheet" type="text/css" href="css/demo.css" />
    <link rel="stylesheet" type="text/css" href="css/component.css" />
    <link rel="stylesheet" type="text/css" href="css/animations.css" />
    <script src="js/modernizr-custom.js"></script>
    <script>
        window.intercomSettings = {
            app_id: "rlm63db8"
        };
    </script>

    <script>
        // We pre-filled your app ID in the widget URL: 'https://widget.intercom.io/widget/rlm63db8'
        (function() {
            var w = window;
            var ic = w.Intercom;
            if (typeof ic === "function") {
                ic('reattach_activator');
                ic('update', w.intercomSettings);
            } else {
                var d = document;
                var i = function() {
                    i.c(arguments);
                };
                i.q = [];
                i.c = function(args) {
                    i.q.push(args);
                };
                w.Intercom = i;
                var l = function() {
                    var s = d.createElement('script');
                    s.type = 'text/javascript';
                    s.async = true;
                    s.src = 'https://widget.intercom.io/widget/rlm63db8';
                    var x = d.getElementsByTagName('script')[0];
                    x.parentNode.insertBefore(s, x);
                };
                if (w.attachEvent) {
                    w.attachEvent('onload', l);
                } else {
                    w.addEventListener('load', l, false);
                }
            }
        })();
    </script>
</head>

<body>
    <header class="codrops-header">
        <!-- <div class="codrops-links"> -->
        <!-- <a class="codrops-icon codrops-icon--prev" href="http://tympanus.net/Development/RainEffect/" title="Previous Demo"><span>Previous Demo</span></a> -->
        <img class="logo" src="img/Logo.png" alt="Side" />
        <!-- <h1>GENERIC BRAND</h1> -->
    </header>

    <body>
        <p class="info info--size">View on a larger screen to see the 3D display</p>
        <p class="info info--support">Your browser does not support preserve-3d!</p>
        <div id="slideshow" class="slideshow">
            <div class="slide">
                <div class="scene">
                    <div class="views">
                        <div class="view">
                            <img class="view__img" src="img/al.png" alt="Side" />
                            <!--                         <div class="item item--shakers">
                            <img class="item__img" src="img/x1.png" alt="Shakers" data-transform-z="80" />
                            <div class="item__info">
                                <h3 class="item__title">Shaker Set</h3>
                                <div class="item__price"><sup>$</sup>59</div>
                                <button class="button button--buy"><i class="icon icon--shopping-cart"></i><span class="text-hidden">Add to cart</span></button>
                            </div>
                            <button class="button button--close"><i class="icon icon--close"></i><span class="text-hidden">Close</span></button> -->
                            <!--                         </div>
                        <div class="item item--coffeemachine">
                            <img class="item__img" src="img/x2.png" alt="Coffee Machine" data-transform-z="60" />
                            <div class="item__info">
                                <h3 class="item__title">Coffee Machine</h3>
                                <div class="item__price"><sup>$</sup>149</div>
                                <button class="button button--buy"><i class="icon icon--shopping-cart"></i><span class="text-hidden">Add to cart</span></button>
                            </div>
                            <button class="button button--close"><i class="icon icon--close"></i><span class="text-hidden">Close</span></button> -->
                            <!--                         </div> -->
                        </div>
                        <div class="view view--rotate view--rotate-left">
                            <img class="view__img" src="img/ar.png" alt="Front" />
                            <!--                         <div class="item item--bowls">
                            <img class="item__img" src="img/x3.png" alt="Bowl Set" data-transform-z="40" />
                            <div class="item__info">
                                <h3 class="item__title">Bowl Set</h3>
                                <div class="item__price"><sup>$</sup>49</div>
                                <button class="button button--buy"><i class="icon icon--shopping-cart"></i><span class="text-hidden">Add to cart</span></button>
                            </div>
                            <button class="button button--close"><i class="icon icon--close"></i><span class="text-hidden">Close</span></button>
                        </div> -->
                        </div>
                    </div>
                </div>
            </div>
            <div class="slide">
                <div class="scene">
                    <div class="views">
                        <div class="view">
                            <img class="view__img" src="img/bl.png" alt="Side" />
                            <div class="item item--horse">
                                <img class="item__img" src="img/x1.png" alt="Horse" data-transform-z="60" />
                                <div class="item__info">
                                    <h3 class="item__title">Whoopi Goldberg NFT</h3>
                                    <!--                                 <div class="item__price"></div> -->
                                    <div style="width:100%">
                                        <div style="height:0;padding-bottom:56.111111111111114%;position:relative;width:100%">
                                            <iframe allowfullscreen="" frameBorder="0" height="100%" src="https://giphy.com/embed/KIVi0pmMpUOXO7udvg/video" style="left:0;position:absolute;top:0" width="100%"></iframe></div>
                                    </div>
                                    <p>
                                        <h3 class="item__title">Me Too!</h3>
                                        <!--                                 <div class="item__price"></div> -->
                                        <div style="width:100%">
                                            <div style="height:0;padding-bottom:56.111111111111114%;position:relative;width:100%">
                                                <iframe allowfullscreen="" frameBorder="0" height="100%" src="https://giphy.com/embed/GiiAlwF2IB2exLJbKY/video" style="left:0;position:absolute;top:0" width="100%"></iframe></div>
                                        </div>

                                </div>

                                <button class="button button--close"><i class="icon icon--close"></i><span class="text-hidden">Close</span></button>
                            </div>
                        </div>
                        <div class="view view--rotate view--rotate-left">
                            <img class="view__img" src="img/br.png" alt="Front" />
                            <div class="item item--blanket">
                                <img class="item__img" src="img/x2.png" alt="Blanket" data-transform-z="90" />
                                <div class="item__info article">
                                    <div class="item__price">Farenheit 451</div>
                                    <div>He knew that when he returned to the firehouse, he might wink at himself, a minstrel man, burnt-corked, in the mirror. Later, going to sleep, he would feel the fiery smile gripped by his face muscles, in the dark. It
                                        never went away, that smile, it never went away, as long as he remembered. </div>
                                    <!--                                 <div class="item__price"><sup>$</sup>129</div>
                                <button class="button button--buy"><i class="icon icon--shopping-cart"></i><span class="text-hidden">Add to cart</span></button> -->
                                </div>
                                <button class="button button--close"><i class="icon icon--close"></i><span class="text-hidden">Close</span></button>
                            </div>
                            <div class="item item--picture">
                                <img class="item__img" src="img/x3.png" alt="Picture" data-transform-z="80" />
                                <div class="item__info">
                                    <h3 class="item__title">Join Jessica in a Live Demo now!</h3>
                                    <!--                                 <div class="item__price"><sup>$</sup>39</div> -->
                                    <a href="https://zoom.us/j/93246617969?pwd=SjVsbCtYWVNrZllDVDhRV0JnMXBJdz09" target="blank" class="button-link"> Join Now </a>
                                </div>
                                <button class="button button--close"><i class="icon icon--close"></i><span class="text-hidden">Close</span></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="slide">
                <div class="scene">
                    <div class="views">
                        <div class="view view--rotate view--rotate-right">
                            <img class="view__img" src="img/dl.png" alt="Front" />
                            <div class="item item--blanket">
                                <img class="item__img" src="img/x2.png" alt="Blanket" data-transform-z="90" />
                                <div class="item__info">
                                    <iframe title="Modern device of MRI 3D model - Sketchfab" class="c-viewer__iframe" src="https://sketchfab.com/models/74bc0dea266c4b228fcee69da6535330/embed?autostart=1&amp;internal=1&amp;ui_infos=0&amp;ui_snapshots=1&amp;ui_stop=0&amp;ui_watermark=0"
                                        id="api-frame" allow="autoplay;fullscreen;xr-spatial-tracking" allowfullscreen=""></iframe>
                                    <!--                                 <div class="item__price"><sup>$</sup>129</div>
                                <button class="button button--buy"><i class="icon icon--shopping-cart"></i><span class="text-hidden">Add to cart</span></button> -->
                                </div>
                                <button class="button button--close"><i class="icon icon--close"></i><span class="text-hidden">Close</span></button>
                            </div>
                        </div>
                        <div class="view">
                            <img class="view__img" src="img/dr.png" alt="Side" />
                        </div>
                    </div>
                </div>
            </div>

            <div class="slide">
                <div class="scene">
                    <div class="views">
                        <div class="view view--rotate view--rotate-right">
                            <iframe src=" https://player.vimeo.com/video/476944210?autoplay=1&muted=1" width="1080" height="600" frameborder=“0” allowfullscreen allow=autoplay></iframe>
                        </div>
                        <div class="view">
                            <iframe src="https://vimeo.com/live-chat/525142088/edb00cbe2a" width="340" height="600" frameborder="0"></iframe>
                        </div>
                    </div>

                </div>
            </div>



            <nav class="nav">
                <a href="#" class="nav__item"><span class="text-hidden">The Master Bedroom</span></a>
                <a href="#" class="nav__item"><span class="text-hidden">The Dining Room</span></a>
                <a href="#" class="nav__item"><span class="text-hidden">The Bathroom</span></a>
                <a href="#" class="nav__item"><span class="text-hidden">The Office</span></a>

            </nav>
            <div class="titles">
                <h2 class="title">Welcome to LiVi Lite <span class="title__sub">Explore our solution</span></h2>
                <h2 class="title">What is LiVi Lite?<span class="title__sub">What it does</span></h2>
                <h2 class="title">The Benefits <span class="title__sub">How it delivers</span></h2>
                <h2 class="title">Use Cases <span class="title__sub">Where this works</span></h2>
            </div>
        </div>
        <!-- /container -->
        <script src="js/classie.js"></script>
        <script src="js/main.js"></script>
        <script>
            (function() {
                var slideshow = new Slideshow(document.getElementById('slideshow'));
            })();
        </script>
    </body>

</html>