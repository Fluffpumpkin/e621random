// ==UserScript==
// @name         e621 random post on every page
// @namespace    n/a
// @version      0.2
// @description  adds random post button and hotkey to image pages, not just the search pages
// @author       Surfluff
// @match        https://e621.net/posts/*
// @match        http://e621.net/posts/*
// @match        https://e926.net/posts/*
// @match        http://e926.net/posts/*
// @run-at       document-end
// @grant        none
// ==/UserScript==

var keypress = 82;
var keypress2 = 190;
var current = window.location.href;
var tags = "";
if(current.includes("?tags=")){
    tags = current.split("?tags=")[1];
}else{
    tags = current.split("?q=")[1];
}


 window.onkeydown= function(gfg){
     if(document.activeElement.tagName != "INPUT" && document.activeElement.tagName != "TEXTAREA"){
        if(gfg.keyCode === keypress){
            if(tags){
                window.location.href = 'https://e621.net/posts/random?tags='+tags;
            }else{
                window.location.href = 'https://e621.net/posts/random';
            }
        };
         if(gfg.keyCode === keypress2){
            if(tags){
                window.location.href = 'https://e621.net/posts/random?tags='+tags;
            }else{
                window.location.href = 'https://e621.net/posts/random';
            }
        };
     };
 }

const getrandom = document.createElement("a");
 if(tags){
                getrandom.href = 'https://e621.net/posts/random?tags='+tags;
            }else{
                getrandom.href = 'https://e621.net/posts/random';
            }
const text = document.createTextNode("Random post");
getrandom.appendChild(text);
const element = document.getElementById("post-related-images");
element.appendChild(getrandom);
