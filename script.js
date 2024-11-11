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

