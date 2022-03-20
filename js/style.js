function dark_theme(){
const item=document.getElementById('theme');
const image=document.getElementById('image');
if (item.getAttribute('href')==""){
item.setAttribute('href','css/style_dark.css');
image.setAttribute('src','images/9100573021579547659-128.png');
}
else{
  item.setAttribute('href','');
  image.setAttribute('src','images/9100573021579547659-128.png');
}}