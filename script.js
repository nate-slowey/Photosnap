"use strict";


const facebook = document.getElementById("facebook");
const youtube = document.getElementById("youtube");
const twitter = document.getElementById("twitter");
const pinterest = document.getElementById("pinterest");
const instagram = document.getElementById("instagram");

facebook.addEventListener('mouseover', () => {
  facebook.src = 'assets/shared/desktop/facebook.svg';
});

facebook.addEventListener('mouseleave', () => {
  facebook.src = 'assets/shared/desktop/facebook_light.svg';
});

youtube.addEventListener('mouseover', () => {
  youtube.src = 'assets/shared/desktop/youtube.svg';
});

youtube.addEventListener('mouseleave', () => {
  youtube.src = 'assets/shared/desktop/youtube_light.svg';
});

twitter.addEventListener('mouseover', () => {
  twitter.src = 'assets/shared/desktop/twitter.svg';
});

twitter.addEventListener('mouseleave', () => {
  twitter.src = 'assets/shared/desktop/twitter_light.svg';
});

pinterest.addEventListener('mouseover', () => {
  pinterest.src = 'assets/shared/desktop/pinterest.svg';
});

pinterest.addEventListener('mouseleave', () => {
  pinterest.src = 'assets/shared/desktop/pinterest_light.svg';
});

instagram.addEventListener('mouseover', () => {
  instagram.src = 'assets/shared/desktop/instagram.svg';
});

instagram.addEventListener('mouseleave', () => {
  instagram.src = 'assets/shared/desktop/instagram_light.svg';
});

let monthly = document.querySelector('.prices__options--monthly');
let yearly = document.querySelector('.prices__options--yearly');
const basicPrice = document.querySelector('.prices__card--price--basic');
const proPrice = document.querySelector('.prices__card--price--pro');
const businessPrice = document.querySelector('.prices__card--price--business');
const billing = document.querySelectorAll(".prices__card--billing");
const basicYearPrice = "$190.00";
const proYearPrice = "$390.00";
const businessYearPrice = "$990.00";
const basicMonthPrice = "$19.00";
const proMonthPrice = "$39.00";
const businessMonthPrice = "$99.00";

let toggle = document.getElementById("toggle");

//SLIDER BOLD 
toggle.addEventListener("change", () => {
  if (toggle.checked) {
    yearly.style.fontWeight = "bold";
    monthly.style.fontWeight = "normal";
    monthly.style.opacity = 0.50;
    yearly.style.opacity = 1;
    basicPrice.firstChild.nodeValue = basicYearPrice;
    proPrice.firstChild.nodeValue = proYearPrice;
    businessPrice.firstChild.nodeValue = businessYearPrice;
    billing[0].textContent = "per year";
    billing[1].textContent = "per year";
    billing[2].textContent = "per year";
    
    
  } else {
    monthly.style.fontWeight = "bold";
    yearly.style.fontWeight = "normal";
    yearly.style.opacity = 0.50;
    monthly.style.opacity = 1;
    basicPrice.firstChild.nodeValue = basicMonthPrice;
    proPrice.firstChild.nodeValue = proMonthPrice;
    businessPrice.firstChild.nodeValue = businessMonthPrice;
    billing[0].textContent = "per month";
    billing[1].textContent = "per month";
    billing[2].textContent = "per month";

  }
}); 




