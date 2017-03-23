
<!--

/*
Slowly coming together status bar scroller
Written by BengalBoy (www.angelfire.com/nt/bengaliboy/index.html)
Visit http://javascriptkit.com for this script and more
*/

//set message:
msg = "'...œpij spokojnie jasny duchu! Pracujemy dzieñ i noc, bez wytchnienia, szerzymy i spe³niamy twe marzenia...' ";

timeID = 10;
stcnt = 16;
wmsg = new Array(33);
        wmsg[0]=msg;
        blnk = "                                                               ";
        for (i=1; i<32; i++)
        {
                b = blnk.substring(0,i);
                wmsg[i]="";
                for (j=0; j<msg.length; j++) wmsg[i]=wmsg[i]+msg.charAt(j)+b;
        }

function wiper()
{
        if (stcnt > -1) str = wmsg[stcnt]; else str = wmsg[0];
        if (stcnt-- < -40) stcnt=31;
        status = str;
        clearTimeout(timeID);
        timeID = setTimeout("wiper()",100);
}

wiper()
//-->

