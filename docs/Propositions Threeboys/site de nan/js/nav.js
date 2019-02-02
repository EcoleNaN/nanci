/*
 * fichier permettant de cacher la barre de navigation au scroll
*/

var prevScrollpos = window.pageYOffset;

window.onscroll = function() 
{
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) 
  {
    document.getElementById("navbar").style.top = "0";
  } 
  else 
  {
    document.getElementById("navbar").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
}