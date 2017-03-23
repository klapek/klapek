//----------------------------------------------------------------------
// Copyright (C) 2002 by the MozillaPL Team.
// http://www.mozillapl.org/
//----------------------------------------------------------------------

// skrypt sprawdza czy jest to Mozilla/Netscape6+ lub Opera 6+ i pozwala dodaæ sedebar
// w przeciwnym razie wy¶wietla komunikat alert z informacj±

function addSidebar(SidebarTag, Title, URL) {
if ((typeof window.sidebar == "object") && (typeof window.sidebar.addPanel == "function")) {
window.sidebar.addPanel(Title, URL, "");
return true;
}
else if ((navigator.userAgent.indexOf("Opera") != -1) && (navigator.userAgent.indexOf("Opera 5") == -1)) {
SidebarTag.setAttribute("title", Title);
SidebarTag.setAttribute("href", URL);
SidebarTag.setAttribute("rel", "sidebar");
return true;
}
else { 
         var rv = window.confirm ("Sidebar is available only in :\n\tMozilla, Netscape 6^, Opera 6^.\nDoesn't work with M$IE and earlier versions of above browsers  .\n " + "\tI recommend Mozilla Browser.\nDo you want jump to Mozilla's Home Page?"); 
         if (rv) 
		{
//		document.location.href = "http://mozillapl.org/";
		upgWindowN=window.open("http://mozillapl.org/");
		upgWindowM=window.open("http://mozilla.org/");
		}
      } 
   } 

