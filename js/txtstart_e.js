
// *******************************************************************
// script by drevil_nz, Michael Dillon, Christchurch New Zealand. 
// Permission granted to use this script provided this credit        
// remains intact. Visit my homepage www.chc.quik.co.nz/juggler/mikey.html
// Script written for Internet Explorer 4.0+.
// ******************************************************************* 

var message="No power for nobody!"     //specifys the title
var message=message+"          " //gives a pause at the end,1 space=1 speed unit, here I used 10 spaces@150 each = 1.5seconds. 
i="0"			         //declares the variable and sets it to start at 0
var temptitle=""                 //declares the variable and sets it to have no value yet.
var speed="150"                  //the delay in milliseconds between letters

function titler(){
if (!document.all&&!document.getElementById)
return
document.title=temptitle+message.charAt(i)  //sets the initial title
temptitle=temptitle+message.charAt(i)       //increases the title by one letter
i++					    //increments the counter
if(i==message.length)			    //determines the end of the message
{
i="0"					    //resets the counter at the end of the message
temptitle=""				    //resets the title to a blank value
}
setTimeout("titler()",speed) 		   //Restarts. Remove line for no-repeat.
}

window.onload=titler

