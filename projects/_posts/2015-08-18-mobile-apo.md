---
layout: post
title: Mobile APO
---

Mobile APO has been an running side project of mine in an attempt to learn Android programming targeting sdk version 21 (Lollipop), with a minimum sdk version 15 (Ice Cream Sandwich). In it I've tried to look up and follow Material Design guidelines as much as possible using correct [color palettes](https://www.google.com/design/spec/style/color.html#color-color-palette), [app bar](https://www.google.com/design/spec/layout/structure.html#structure-app-bar), [side nav](https://www.google.com/design/spec/layout/structure.html#structure-side-nav), and [card views](https://www.google.com/design/spec/components/cards.html) as well as learning how to separate code into fragments with fewer activities.

<div id="myCarousel" class="carousel slide" data-ride="carousel">
  <!-- Indicators -->
  <ol class="carousel-indicators">
    <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
    <li data-target="#myCarousel" data-slide-to="1"></li>
    <li data-target="#myCarousel" data-slide-to="2"></li>
    <li data-target="#myCarousel" data-slide-to="3"></li>
    <li data-target="#myCarousel" data-slide-to="4"></li>
    <li data-target="#myCarousel" data-slide-to="5"></li>
    <li data-target="#myCarousel" data-slide-to="6"></li>
    <li data-target="#myCarousel" data-slide-to="7"></li>
  </ol>

  <!-- Wrapper for slides -->
  <div class="carousel-inner" role="listbox">
    <div class="item active"> <img src="/images/MobileAPO_1.png" alt="Doppelganger 1"> </div>
    <div class="item"> <img src="/images/MobileAPO_2.png" alt="Doppelganger 2"> </div>
    <div class="item"> <img src="/images/MobileAPO_3.png" alt="Doppelganger 3"> </div>
    <div class="item"> <img src="/images/MobileAPO_4.png" alt="Doppelganger 4"> </div>
    <div class="item"> <img src="/images/MobileAPO_5.png" alt="Doppelganger 5"> </div>
    <div class="item"> <img src="/images/MobileAPO_6.png" alt="Doppelganger 6"> </div>
    <div class="item"> <img src="/images/MobileAPO_7.png" alt="Doppelganger 7"> </div>
    <div class="item"> <img src="/images/MobileAPO_8.png" alt="Doppelganger 8"> </div>
  </div>

  <!-- Left and right controls -->
  <a class="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
    <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="right carousel-control" href="#myCarousel" role="button" data-slide="next">
    <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>

Quick Stats:

* When: Spring 2015 - Present
* Where: UT Austin
* How:
  - Android IDE: Android Studio
  - Android Emulator: [Genymotion](https://www.genymotion.com/)
  - Android Libraries:
      * HTML Parser: [Jsoup](https://github.com/jhy/jsoup/).
      * View Injector: [Butterknife](https://github.com/JakeWharton/butterknife)
  - Prototyping tool: [Pencil](https://github.com/prikhi/pencil)

Alpha Phi Omega is known as a large co-ed service fraternity with about 150 active members every semester. With a large focus on volunteering we try and keep track of as many volunteer oportunities available around campus. Historically, APO has only had a web app to coordinate volunteer events which, when on the go, could be a little anoying to open up a phone browser, direct it to [apoonline](http://apoonline.org/alpharho/), log in, and check the event details. Having tried to learn Android previously via tutorials, but never coming up with a project that I've been excited for this was the perfect opportunity to set everything in motion.

By using the already established web server Mobile APO only serves as a front end app for Android, allowing me to learn the basics about views, events, and how activities connect to each other without worrying about the server side of things just yet. For now I am using jsoup to emulate a browser, send GET requests for page navigations, and parse out relevant information into a json. This is done in a separate helper file that the rest of my app can use to abstract an API that can later be replaced easily should I get access to the real database.

This app also marks the first time I've really had to worry about creating my own UI/UX from scratch. Even though figuring out font sizes, margin spacings, and even graphic design turned out to be harder than I thought, after going through a couple of sketches I began to have an idea of what I wanted. To help with this I used Pencil to wireframe each view before implementing them and get a better picture of what the final product would look like.

