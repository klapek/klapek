//----------------------------------------------------------------------
// Copyright (C) 2002 by the MozillaPL Team.
// http://www.mozillapl.org/
//----------------------------------------------------------------------

// skrypt sprawdza czy jest to Mozilla/Netscape6+ lub Opera 6+ i pozwala doda� sedebar
// w przeciwnym razie wy�wietla komunikat alert z informacj�

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
         var rv = window.confirm ("Panel jest dost�pny wy��cznie w nast�puj�cych przegl�darkach:\n\tMozilla, Netscape 6^, Opera 6^.\nNie dzia�a z M$IE ani wcze�niejszymi wersjami w/w przegl�darek.\n " + "\tZe swej strony polecam Mozill�PL.\nCzy chcesz teraz przej�� do strony domowej Mozilli?"); 
         if (rv) 
		{
//		document.location.href = "http://mozillapl.org/";
		upgWindowN=window.open("http://mozillapl.org/");
		upgWindowM=window.open("http://mozillapl.org/forum/");
		}
      } 
   } 

