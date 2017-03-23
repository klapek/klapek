
<!--
//By George Chiang (http://www.abstract.simplenet.com) More JavaScripts here!
var sound1="mm/acredo.mp3"
var sound2="mm/cnt.mp3"
var sound3="mm/acredo.mp3"
var x=Math.random()*10
if (x<=3) x=sound1
else if (x<=6) x=sound2
else 
x=sound3
if (navigator.appName=="Microsoft Internet Explorer")
document.write('<bgsound src='+'"'+x+'"'+' loop="infinite">')
else 
document.write('<embed src=\"'+x+'\" border="0" width="0" height="0" autostart="true" loop="true">')
-->
