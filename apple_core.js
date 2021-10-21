/* GLOBALHEADER */
#globalheader { position:relative; display:block; width:980px; height:36px; margin:18px auto; text-align:left; z-index:9998; background:url(/web/20140228175220im_/http://images.apple.com/global/nav/images/globalheader.png) repeat-x;
	-khtml-border-radius:4px; -ms-border-radius:4px; -o-border-radius:4px; -moz-border-radius:4px; -webkit-border-radius:4px; border-radius:4px;
	-khtml-box-shadow:rgba(0,0,0,0.3) 0 1px 2px; -ms-box-shadow:rgba(0,0,0,0.3) 0 1px 2px; -o-box-shadow:rgba(0,0,0,0.3) 0 1px 2px; -moz-box-shadow:rgba(0,0,0,0.3) 0 1px 2px; -webkit-box-shadow:rgba(0,0,0,0.3) 0 1px 2px; box-shadow:rgba(0,0,0,0.3) 0 1px 2px;
	font:12px/18px "Lucida Grande", "Lucida Sans Unicode", Helvetica, Arial, Verdana, sans-serif;
}
@media only screen and (max-device-width:768px) {
	#globalheader { z-index:1; }
	#globalheader.searchmode { z-index:9999; }
}
#globalheader #globalnav { position:relative; display:block; margin:0; padding:0; zoom:1; z-index:3; }
#globalheader #globalnav:after { content:"."; display:block; height:0; clear:both; visibility:hidden; }
#globalheader #globalnav li { display:inline; }
#globalheader #globalnav li a { float:left; width:102px; height:36px; overflow:hidden; text-indent:-9999px; background:url(/web/20140228175220im_/http://images.apple.com/global/nav/images/globalnav.png) no-repeat; cursor:pointer; }

/* VML FOR IE */
v\:roundrect,
v\:fill { behavior:url(/web/20140228175220im_/http://images.apple.com/global/nav/styles/navigation.css#default#VML); }
#globalheader-roundrect,
#globalheader-fill { display:block; position:absolute; width:980px; height:35px; top:0; left:0; z-index:2; }
#globalheader-shadow {  display:block; position:absolute; width:980px; height:35px; top:-1px; left:-2px; z-index:1; -ms-filter:"progid:DXImageTransform.Microsoft.Blur(pixelRadius=2)"; filter:progid:DXImageTransform.Microsoft.Blur(pixelRadius=2); }

/* VARIANTS */
#globalheader #globalnav.tabs6-nosearch li a { width:163px; background-image:url(/web/20140228175220im_/http://images.apple.com/global/nav/images/globalnav_tabs6-nosearch.png); }
#globalheader #globalnav.tabs6-nosearch li#gn-apple a { width:165px; }
#globalheader #globalnav.tabs7-nosearch li a { width:140px; background-image:url(/web/20140228175220im_/http://images.apple.com/global/nav/images/globalnav_tabs7-nosearch.png); }
#globalheader #globalnav.tabs7-nosearch li#gn-apple a { width:140px; }
#globalheader #globalnav.nosearch       li a { width:122px; background-image:url(/web/20140228175220im_/http://images.apple.com/global/nav/images/globalnav_nosearch.png); }
#globalheader #globalnav.nosearch       li#gn-apple a { width:126px; }
#globalheader #globalnav.tabs7          li a { width:117px; background-image:url(/web/20140228175220im_/http://images.apple.com/global/nav/images/globalnav_tabs7.png); }
#globalheader #globalnav.tabs7          li#gn-apple a { width:114px; }

/* ACTION STATES */
#globalheader #globalnav li a { background-position:100% 0; outline:none; }
#globalheader #globalnav li a.before { background-position:100% -36px; }
#globalheader #globalnav li a:hover,
#globalheader #globalnav li a:focus  { background-position:100% -72px; }
#globalheader #globalnav li a:active { background-position:100% -108px; }

#globalheader #globalnav li#gn-apple a { background-position:0 0; }
#globalheader #globalnav li#gn-apple a.before { background-position:0 -36px; }
#globalheader #globalnav li#gn-apple a:hover,
#globalheader #globalnav li#gn-apple a:focus  { background-position:0 -72px; }
#globalheader #globalnav li#gn-apple a:active { background-position:0 -108px; }

/* VARIANT ACTION STATES */
#globalheader #globalnav.tabs6-nosearch li.gn-last a { background-position:-165px 0; }
#globalheader #globalnav.tabs6-nosearch li.gn-last a:hover,
#globalheader #globalnav.tabs6-nosearch li.gn-last a:focus { background-position:-165px -72px; }
#globalheader #globalnav.tabs6-nosearch li.gn-last a:active { background-position:-165px -108px; }

#globalheader #globalnav.tabs7-nosearch li.gn-last a { background-position:-140px 0; }
#globalheader #globalnav.tabs7-nosearch li.gn-last a:hover,
#globalheader #globalnav.tabs7-nosearch li.gn-last a:focus { background-position:-140px -72px; }
#globalheader #globalnav.tabs7-nosearch li.gn-last a:active { background-position:-140px -108px; }

#globalheader #globalnav.nosearch       li.gn-last a { background-position:-126px 0; }
#globalheader #globalnav.nosearch       li.gn-last a:hover,
#globalheader #globalnav.nosearch       li.gn-last a:focus { background-position:-126px -72px; }
#globalheader #globalnav.nosearch       li.gn-last a:active { background-position:-126px -108px; }

/* ON STATES */
#globalheader.store   li#gn-store   a,
#globalheader.mac     li#gn-mac     a,
#globalheader.ipod    li#gn-ipod    a,
#globalheader.iphone  li#gn-iphone  a,
#globalheader.ipad    li#gn-ipad    a,
#globalheader.itunes  li#gn-itunes  a,
#globalheader.support li#gn-support a { background-position:right -144px !important; }

#globalheader.gn-last #globalnav.tabs6-nosearch li.gn-last a { background-position:-165px -144px !important; }
#globalheader.gn-last #globalnav.tabs7-nosearch li.gn-last a { background-position:-140px -144px !important; }
#globalheader.gn-last #globalnav.nosearch       li.gn-last a { background-position:-126px -144px !important; }

/* TEXT */
#globalheader            #globalnav li            a span { display:block; width:100%; height:30px; margin:3px auto; background:url(/web/20140228175220im_/http://images.apple.com/global/nav/images/globalnav_text.png) no-repeat 50% 0; _background-image:url(/web/20140228175220im_/http://images.apple.com/global/nav/images/globalnav_text.gif); }
#globalheader.svg        #globalnav li            a span { background-image:url(/web/20140228175220im_/http://images.apple.com/global/nav/images/globalnav_text.svg); }
#globalheader.decelerate #globalnav li            a span,
#globalheader.ios3       #globalnav li            a span { background-image:url(/web/20140228175220im_/http://images.apple.com/global/nav/images/globalnav_text.png); }
#globalheader            #globalnav li#gn-apple   a span { background-position:50% 0; }
#globalheader            #globalnav li#gn-store   a span { background-position:50% -30px; }
#globalheader            #globalnav li#gn-mac     a span { background-position:50% -60px; }
#globalheader            #globalnav li#gn-ipod    a span { background-position:50% -90px; }
#globalheader            #globalnav li#gn-iphone  a span { background-position:50% -120px; }
#globalheader            #globalnav li#gn-ipad    a span { background-position:50% -150px; }
#globalheader            #globalnav li#gn-itunes  a span { background-position:50% -180px; }
#globalheader            #globalnav li#gn-support a span { background-position:50% -210px; }

/* GLOBAL SEARCH */
#globalsearch { position:absolute; top:0; right:0; width:140px; padding:8px 12px; z-index:5; background:url(/web/20140228175220im_/http://images.apple.com/global/nav/images/globalsearch_bg.png) no-repeat 100% 0; }
#g-search { display:block; position:relative; }

#sp-searchtext { width:100px; height:16px; border:0 none; padding:2px 20px; color:#fff; background:url(/web/20140228175220im_/http://images.apple.com/global/nav/images/globalsearch_field.png) 0 0 no-repeat; -webkit-appearance:none; }
#sp-searchtext:focus { color:#000; background-position:0 100%; outline:none; }
#sp-searchtext::-ms-clear { display:none; }

#g-search label { display:block; margin-top:-2px; }
#g-search .sp-label { margin-bottom:-2px; }
#g-search .sp-label label { display:none; margin:0; }

.globalheader-js #g-search { width:100px; height:16px; border:0 none; padding:2px 20px; color:#fff; background:url(/web/20140228175220im_/http://images.apple.com/global/nav/images/globalsearch_field.png) 0 0 no-repeat; }
.globalheader-js #sp-searchtext { padding:0; color:#fff; background:none; }
.searchmode      #g-search { background-position:0 100%; }
.searchmode      #sp-searchtext { color:#000; outline:none; }

#globalsearch .reset { position:absolute; width:11px; height:11px; overflow:hidden; z-index:6; top:5px; right:6px; background:url(/web/20140228175220im_/http://images.apple.com/global/nav/images/globalsearch_reset.gif); }
#globalsearch .reset,
.searchmode #globalsearch .empty .reset { display:none; }
.searchmode #globalsearch .reset { display:block; cursor:pointer; }
/*
@media only screen and (max-device-width:768px) {
	#globalsearch .reset { display:none !important; }
}
*/

#globalsearch .spinner { position:absolute; display:none; width:11px; height:11px; overflow:hidden; z-index:7; top:5px; right:6px; background:url(/web/20140228175220im_/http://images.apple.com/global/nav/images/globalsearch_spinner.gif); }
.searchmode #globalsearch .spinner { display:block; }
.searchmode #globalsearch .spinner.hide { display:none; }

/* SEARCH SHORTCUTS */
#sp-results { position:absolute; top:32px; right:0; width:290px; line-height:0; z-index:9999; }
#sp-results div { position:relative; background:#fff; background:rgba(255,255,255,0.97);
	-khtml-border-radius:4px; -ms-border-radius:4px; -o-border-radius:4px; -moz-border-radius:4px; -webkit-border-radius:4px; border-radius:4px;
	-khtml-box-shadow:rgba(0,0,0,0.5) 0 0 10px; -ms-box-shadow:rgba(0,0,0,0.5) 0 0 10px; -o-box-shadow:rgba(0,0,0,0.5) 0 0 10px; -moz-box-shadow:rgba(0,0,0,0.5) 0 0 10px; -webkit-box-shadow:rgba(0,0,0,0.5) 0 0 10px; box-shadow:rgba(0,0,0,0.5) 0 0 10px;
}
#sp-results #sp-roundrect { position:absolute; width:100%; }
#sp-results #sp-roundrect div { background:none; }
#sp-results .sp-shadow { position:absolute; display:none; top:-10px; left:-10px; width:100%; background:#333;
	-ms-filter:"progid:DXImageTransform.Microsoft.Blur(pixelRadius=10)"; filter:progid:DXImageTransform.Microsoft.Blur(pixelRadius=10);
}

#sp-results h3 { margin:0; padding:8px 10px 2px; color:#999; font-size:12px; line-height:1.3; }

#sp-results ul { padding-bottom:4px; }
#sp-results #sp-roundrect ul { margin-left:1px; margin-right:-2px; width:291px; }
#sp-results ul li { clear:left; margin:0; padding:0; font-size:11px; line-height:1.3; }
#sp-results ul li a { display:block; padding:6px 10px 6px 66px; text-decoration:none; outline:none; zoom:1; }
#sp-results ul li a.suggestions { padding-left:10px; }
#sp-results ul li a:after { content:'.'; display:block; height:0; clear:both; visibility:hidden; }
#sp-results ul li a h4 { margin:0; padding:0; color:#000; font-weight:bold; font-size:11px; line-height:1.3; }
#sp-results ul li a p { margin:0; padding:0; color:#333; font-size:11px; line-height:1.3; }
#sp-results ul li a img { float:left; width:46px; height:46px; margin:0 10px 0 -56px; behavior:none; }

#sp-results ul li a:hover,
#sp-results ul li a:focus,
#sp-results ul li.focus a { background:#367af8;
	background:-moz-linear-gradient(top, #648ffa 0, #0d67f7 100%);
	background:-webkit-gradient(linear, 0 0, 0 100%, from(#648ffa), to(#0d67f7));
	-ms-filter:"progid:DXImageTransform.Microsoft.gradient(startColorstr=#FF648FFA,endColorstr=#FF0D67F7)";
	filter:progid:DXImageTransform.Microsoft.gradient(startColorstr=#FF648FFA,endColorstr=#FF0D67F7);
}
#sp-results ul li a:hover h4,
#sp-results ul li a:focus h4,
#sp-results ul li.focus a h4,
#sp-results ul li a:hover p,
#sp-results ul li a:focus p,
#sp-results ul li.focus a p { color:#fff; }

#sp-results ul.noresults { padding-top:4px; }
#sp-results ul.noresults li a { padding-left:10px; text-align:center; }

#sp-results ul.suggestions-quicklinks h3.quicklinks { border-top:1px solid #ccc; }

/*
     FILE ARCHIVED ON 17:52:20 Feb 28, 2014 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 15:55:16 Sep 24, 2021.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 2241.234
  exclusion.robots: 0.081
  exclusion.robots.policy: 0.073
  RedisCDXSource: 20.451
  esindex: 0.007
  LoadShardBlock: 1830.428 (3)
  PetaboxLoader3.datanode: 920.383 (4)
  CDXLines.iter: 115.846 (3)
  load_resource: 1786.92
  PetaboxLoader3.resolve: 913.169
*/