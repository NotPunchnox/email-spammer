const{remote:remote}=require("electron");function appquit(){remote.getCurrentWindow().close()}function maximize(){let e=remote.getCurrentWindow();e.isMaximized()?e.unmaximize():e.maximize()}function minimiz(){remote.getCurrentWindow().minimize()}document.addEventListener("DOMContentLoaded",(function(){document.getElementById("close").addEventListener("click",appquit)})),document.addEventListener("DOMContentLoaded",(function(){document.getElementById("max").addEventListener("click",maximize)})),document.addEventListener("DOMContentLoaded",(function(){document.getElementById("min").addEventListener("click",minimiz)}));