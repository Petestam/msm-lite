<!DOCTYPE html>
<html lang="en" class="no-js">

<head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>LiVi Lite Prototpye</title>
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
        <img class="logo" src="img/Logo.png" alt="Side" />
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

                        </div>
                        <div class="view view--rotate view--rotate-left">
                            <img class="view__img" src="img/ar.png" alt="Front" />

                        </div>
                    </div>
                </div>
            </div>
            <div class="slide">
                <div class="scene">
                    <div class="views">
                        <div class="view">
                            <img class="view__img" src="img/bl.png" alt="Side" />
                            <div class="item item--x1">
                                <img class="item__img" src="img/x1.png" alt="X1" data-transform-z="60" />
                                <div class="item__info">
                                    <h3 class="item__title">Product Launch</h3>
                                    <!--                                 <div class="item__price"></div> -->
                                    <iframe src="https://giphy.com/embed/xT39Div8FqzcSnf5hm" height="200" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
                                    <h3 class="item__title">Celebrity Interview</h3>
                                    <!--                                 <div class="item__price"></div> -->
                                    <iframe src="https://giphy.com/embed/hqa4GZT80Q2KSerdwj" height="200" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
                                </div>
                                <button class="button button--close"><i class="icon icon--close"></i><span class="text-hidden">Close</span></button>
                            </div>
                            <div class="item item--x3">
                                <img class="item__img" src="img/x3.png" alt="X3" data-transform-z="80" />
                                <div class="item__info">
                                    <h3 class="item__title join-title">Join Jessica in a Live Demo now!</h3>
                                    <!--                                 <div class="item__price"><sup>$</sup>39</div> -->
                                    <a href="https://zoom.us/j/93246617969?pwd=SjVsbCtYWVNrZllDVDhRV0JnMXBJdz09" target="blank" class=" button-join"> Join Now </a>
                                </div>
                                <button class="button button--close"><i class="icon icon--close"></i><span class="text-hidden">Close</span></button>
                            </div>
                        </div>
                        <div class="view view--rotate view--rotate-left">
                            <img class="view__img" src="img/br.png" alt="Front" />
                            <div class="item item--x2">
                                <img class="item__img" src="img/x4.png" alt="X4" data-transform-z="90" />
                                <div class="item__info article">
                                    <div class="item__price">Expansion in Shanghai</div>
                                    <div>By 2040, global energy demand is projected to increase by 25 percent, and, much like today, China and the Asia Pacific region will drive much of that growth.

                                        <p> As economies there expand and living standards improve, more consumers will buy refrigerators, televisions or automobiles, which all use materials made from byproducts of oil and gas.
                                    </div>
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
                            <div class="item item--x5">
                                <img class="item__img" src="img/x5.png" alt="X6" data-transform-z="90" />
                                <div class="item__info">
                                    <iframe title="Our Process" width="480" height="300" src="https://marseille.laphase5.com/en" id="api-frame" allow="autoplay;fullscreen;xr-spatial-tracking" allowfullscreen=""></iframe>
                                </div>
                                <button class="button button--close"><i class="icon icon--close"></i><span class="text-hidden">Close</span></button>
                            </div>
                        </div>
                        <div class="view">
                            <img class="view__img" src="img/dr.png" alt="Side" />
                            <div class="item item--x6">
                                <img class="item__img" src="img/x2.png" alt="X6" data-transform-z="90" />
                                <div class="item__info">
                                    <iframe title="Modern device of MRI 3D model - Sketchfab" class="c-viewer__iframe" width="480" height="300" src="https://sketchfab.com/models/74bc0dea266c4b228fcee69da6535330/embed?autostart=1&amp;internal=1&amp;ui_infos=0&amp;ui_snapshots=1&amp;ui_stop=0&amp;ui_watermark=0"
                                        id="api-frame" allow="autoplay;fullscreen;xr-spatial-tracking" allowfullscreen=""></iframe>
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