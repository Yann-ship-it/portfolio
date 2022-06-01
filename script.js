window.onscroll = function(window) {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
       document.getElementsByTagName('nav').style.position = 'sticky';
    } 
};