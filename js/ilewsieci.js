<!--
/*
Count up from any date script-
By Website Abstraction (www.wsabstract.com)
Over 200+ free scripts here!
*/

var montharray=new Array("Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec")

function countup(yr,m,d){
var today=new Date()
var todayy=today.getFullYear()
var todaym=today.getMonth()
var todayd=today.getDate()
var todaystring=montharray[todaym]+" "+todayd+", "+todayy
var paststring=montharray[m-1]+" "+d+", "+yr
var difference=(Math.round((Date.parse(todaystring)-Date.parse(paststring))/(24*60*60*1000))*1)
difference+=""
document.write(""+difference+"" )
}
//enter the count up date using the format year/month/day
countup(2002,03,11)
//-->

